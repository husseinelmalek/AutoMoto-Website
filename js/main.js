
//////////// top button
// window.localStorage.setItem("cards",JSON.stringify([]));

var btnTop=document.querySelector(".up");

document.onscroll=function(e){
    if(window.scrollY > 715){
        btnTop.style.opacity="1";
        btnTop.addEventListener('click',function(){
            window.scrollTo(0,0)
        })
    }else{
        btnTop.style.opacity="0";
        
    }
    // console.log(window.scrollY);
}


// var menu=document.querySelector(".header .container .nav .menu");
// var ul =document.querySelector(".header .container .nav ul");

// menu.addEventListener("click",function() {
// ul.style.cssText="display: flex;flex-direction: column;position:relative;z-index:20000;top:100px;width: 100%;background-color: red;"

// })
/////////////////////alert

var alr=document.querySelector(".alert");
var cc=document.querySelector(".alert .count");



////// slider //////

var arrowRight=document.querySelector(".arrowRight");
var arrowLeft=document.querySelector(".arrowLeft");
var sliderImages=document.querySelector(".slider");

var count=1;


arrowRight.addEventListener('click',function(){
    if(count < 7){
        bullets[count -1 ].classList.add("active");
        count++;
        bullets[count -2].classList.remove("active"); 
    sliderImages.style.backgroundImage = `url("https://raw.githubusercontent.com/husseinelmalek/AutoMoto-Website/main/images/image${count}.jpg")`;
    bullets[count -1].classList.add("active");
    }else{
        bullets[count - 1].classList.remove("active");
        count=1;
    sliderImages.style.backgroundImage = `url("https://raw.githubusercontent.com/husseinelmalek/AutoMoto-Website/main/images/image${count}.jpg")`;
    bullets[count - 1].classList.add("active");

    }
});

arrowLeft.addEventListener('click',function(){
    if(count > 1){
     bullets[count -1].classList.remove("active");  
        count--;
    bullets[count -1].classList.add("active");
    sliderImages.style.backgroundImage = `url("https://raw.githubusercontent.com/husseinelmalek/AutoMoto-Website/main/images/image${count}.jpg")`;
    bullets[count].classList.remove("active");  

    }else{
     bullets[count].classList.remove("active");  
        count=7;
     bullets[count -1].classList.add("active");
    sliderImages.style.backgroundImage = `url("https://raw.githubusercontent.com/husseinelmalek/AutoMoto-Website/main/images/image${count}.jpg")`;
     bullets[count - 7].classList.remove("active");  

    }
})
var bullets=document.querySelectorAll(".bullets li");
setInterval(function(){
    
    if(count < 7){
     
    bullets[count -1 ].classList.add("active");
        count++;
     bullets[count -2].classList.remove("active");  
    sliderImages.style.backgroundImage =`url("https://raw.githubusercontent.com/husseinelmalek/AutoMoto-Website/main/images/image${count}.jpg")`;
    bullets[count -1].classList.add("active");
    }else{
        bullets[count - 1].classList.remove("active");
        count=1;
    sliderImages.style.backgroundImage = `url("https://raw.githubusercontent.com/husseinelmalek/AutoMoto-Website/main/images/image${count}.jpg")`;
    bullets[count - 1].classList.add("active");
    }
},6000);

bullets.forEach((e) => {
    e.addEventListener('click',function(e){
    // console.log(e.target.getAttribute("data-index"));
    bullets[count -1].classList.remove("active");
    count = Number(e.target.getAttribute("data-index"));
    sliderImages.style.backgroundImage =`url("https://raw.githubusercontent.com/husseinelmalek/AutoMoto-Website/main/images/image${count}.jpg")`;
    bullets[count - 1].classList.add("active");
    })
})


///////////////////////////////// produsts

var tabs=document.querySelectorAll(".inform-buttons ul li");
var products=document.querySelectorAll(".allProducts .card");

tabs.forEach((e)=>{
    e.addEventListener('click',function(){
        // console.log(e.getAttribute("data-main"));
        tabs.forEach((t)=>{
            t.classList.remove("active");
        })
        e.classList.add("active");
        products.forEach((p)=>{
            p.style.transition = "opacity 0.5s, height 0.5s,width 0.5s";
            p.style.opacity = "0";
            p.style.height = "0"; 
            p.style.width = "0"; 
            p.style.overflow = "hidden";
            if(e.getAttribute("data-main") === p.getAttribute("data-type")){
                // p.style.display="block";
                p.style.opacity = "1"; // Set opacity to 1 for fade-in effect
                p.style.height = "auto"; // S
                p.style.width = "18rem"; // S
               
            }
            if(e.getAttribute("data-main") === "all"){
                products.forEach((e)=>{
                    // e.style.display="block";
                    p.style.opacity = "1"; // Set opacity to 1 for fade-in effect
                   
                    p.style.height = "auto"; // S
                    p.style.width = "18rem"; // S
                })
            }
        });
        

    })

});

var cardbuttons=document.querySelectorAll(".allProducts .card a");
var cardbtn=document.querySelector(".add");
var cards= window.localStorage.getItem("cards") ||window.localStorage.setItem("cards",JSON.stringify([]));

if(window.localStorage.getItem("cards")){
    // cards=[];
   cards=JSON.parse(window.localStorage.getItem("cards"));
}else{
    cards=[];
}

var cards=JSON.parse(window.localStorage.getItem("cards"));
cards.forEach((card)=>{
    cardbuttons.forEach((btn)=>{
        // console.log(btn.parentElement.firstElementChild.innerHTML)
        if(btn.parentElement.firstElementChild.innerHTML.includes(card.title)){
            btn.style.backgroundColor="red";
            btn.firstElementChild.remove();
            var rightIcon=document.createElement("i");
        rightIcon.className="fa-solid fa-check";
        btn.prepend(rightIcon);
        }
    })
})


cardbuttons.forEach((b)=>{
    b.addEventListener('click',function(){
        b.style.backgroundColor="red";
        b.firstElementChild.remove();
        var rightIcon=document.createElement("i");
        rightIcon.className="fa-solid fa-check";
        b.prepend(rightIcon);
        alr.style.opacity=1;
        alr.style.width="300px";
        alr.style.height="70px";
        cc.innerHTML=cards.length + 1;
        setTimeout(function(){
            alr.style.opacity= 0;
            setTimeout(function(){
                 alr.style.width="0";
             alr.style.height="0";
             alr.style.overflow = "hidden";
            }, 2000);
            
            
        },2000)
      
        

        //<i class="fa-solid fa-check"></i>
        // console.log(b.firstElementChild);
        addCardToArray(b.parentElement.parentElement.firstElementChild.getAttribute("src"),
        b.parentElement.firstElementChild.innerHTML,b.parentElement.querySelector(".card-text").innerHTML);
        

        addArrayToLocalstorage(cards);
        sell.innerHTML = cards.length;
        
    //  window.location.href="cards.html";
    })

});



function addCardToArray(image,title,description){
    var card={
        id:Date.now(),
        image:image,
        title:title,
        description:description, 
    }
    cards.push(card);

}

function addArrayToLocalstorage(arr){
    window.localStorage.setItem("cards",JSON.stringify(arr));
}

var sell=document.querySelector(".header .container .nav .sellConn .cc");
sell.innerHTML=cards.length;


var text="i am hussein said";
var roll=document.querySelector(".roll");

var num=0;
var cccc= setInterval(function(){
 roll.innerHTML +=text[num++];
 if(num == text.length ){
   clearInterval(cccc);
  
    if(roll.innerHTML.length = text.length){
        num = text.length;
     var ffff=setInterval(function(){
        roll.innerHTML= text.slice(0,num--);
        if(roll.innerHTML.length == 0){
            clearInterval(ffff);
            
            
            
        }
     },100)
 }
 }

},100)

var colorbtn=document.querySelector(".colorbtn");
var colors=document.querySelector(".clcs");
colorbtn.addEventListener("click",function(){
    colors.classList.toggle("clicks");
// colorbtn.innerHTML=`<i class="fa-solid fa-angle-right"></i>`;
// colorbtn.style.transform="rotateX('180')";
});

var colorss=document.querySelectorAll(".clc");
var boddy=document.querySelectorAll(".card-body");
colorss.forEach((c)=>{
    c.addEventListener("click",function() {
       window.localStorage.setItem("color",c.getAttribute("data-color"));
       boddy.forEach(b=>{
        b.style.backgroundColor=c.getAttribute("data-color");
       })
       

    })
})
boddy.forEach(b=>{
    b.style.backgroundColor=window.localStorage.getItem("color");
   })


