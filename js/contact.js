

var nameInput=document.querySelector(".nameInput");
var emailInput=document.querySelector(".emailInput");
var msgInput=document.querySelector(".msgInput");

var errName=document.querySelector(".nameMsg");
var errEmail=document.querySelector(".emailMsg");
var errMsg=document.querySelector(".Msg");

var submit=document.querySelector(".btnSubmit");

var image=document.querySelector(".right .imgConn img");
var msgsuc=document.querySelector(".suc");

submit.addEventListener('click',function(){
    errName.style.display="none";
    errEmail.style.display="none";
    errMsg.style.display="none";
    if(nameInput.value =="" || !isNaN(nameInput.value)){
    errName.style.display="block";

    }
if(emailInput.value == "" || !emailInput.value.includes("@" && "com")){
    if(emailInput.value == ""){
        errEmail.style.display="block";
    }
    if(emailInput.value != "" && !emailInput.value.includes("@" && "com")){
        errEmail.innerHTML="your email is not valid";
        errEmail.style.display="block";
    }
    
}
if(msgInput.value == ""){
    errMsg.style.display="block";
}
if(nameInput.value !="" && isNaN(nameInput.value)&& emailInput.value !="" && emailInput.value.includes("@" && "com") && msgInput.value !=""){
    image.setAttribute("src","images/sended.jpg");
    msgsuc.style.opacity="1"
    setTimeout(function(){
        msgsuc.style.opacity="0";
       
    },3000)
    nameInput.value="";
    emailInput.value="";
    msgInput.value="";

}
})
