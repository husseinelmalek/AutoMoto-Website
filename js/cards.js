
var cards=window.localStorage.getItem("cards");
var cardConn=document.querySelector(".allProducts");

var alr=document.querySelector(".alert");

// console.log(cards.length);
if(cards.length > 2){      

    var newCards=JSON.parse(cards);
    // console.log(new)
    newCards.forEach(element => {

        var div=document.createElement("div"); //////
        div.className="card";
        div.setAttribute("data-id",element.id);
        div.style.width="18rem";
        var image=document.createElement("img"); //
        image.className="card-img-top"
        image.src=`${element.image}`;

        var bodyy=document.createElement("div"); //
        bodyy.className="card-body";
        var h5=document.createElement("h5");
        h5.className="card-title";
        h5.innerHTML=element.title;

        var p =document.createElement("p");
        p.className="card-text";
        p.innerHTML=element.description;

        var span=document.createElement("span");
        var i=document.createElement("i");
        i.className="fa-solid fa-rectangle-xmark cancel";
        span.append(i);
  
        span.addEventListener("click",function(){         
            span.parentElement.parentElement.remove();            
            newCards = newCards.filter( e => e.id != span.parentElement.parentElement.getAttribute("data-id"))         
            addArrayToLocalstorage(newCards);
            alr.style.opacity="1";
            alr.style.width="300px";
            alr.style.height="70px";
            
            setTimeout(function(){
            alr.style.opacity="0";
            setTimeout(function(){
                alr.style.width="0";
            alr.style.height="0";
            alr.style.overflow = "hidden";
           }, 2000);
           
            },2000)
        

            
 if (cardConn.innerHTML.length == 10) {
   var nothing = document.createElement("div");
   nothing.className = "nothing";
   var foundImg = document.createElement("img");
   foundImg.setAttribute("src", "images/found.jpeg");
   var head2 = document.createElement("h2");
   head2.innerHTML = "no cards have been added ,yet!";
   var but = document.createElement("a");
   but.href = "index.html";
   but.className = "btn btn-primary b";
   but.innerHTML = "Go Back";
   nothing.append(foundImg, head2, but);
   cardConn.append(nothing);
 }
          
        });


        bodyy.append(h5,p,span);

        div.append(image,bodyy);
        cardConn.appendChild(div);


    });

}
else
{
     var nothing=document.createElement("div");
     nothing.className="nothing";
     var foundImg=document.createElement("img");
     foundImg.setAttribute("src","images/found.jpeg");
     var head2=document.createElement("h2");
     head2.innerHTML="no cards have been added ,yet!";
     var but=document.createElement("a");
     but.href="index.html";
     but.className="btn btn-primary b";
     but.innerHTML="Go Back";
     nothing.append(foundImg,head2,but);
    cardConn.append(nothing);

    

}

function addArrayToLocalstorage(arr){
    window.localStorage.setItem("cards",JSON.stringify(arr));
}


