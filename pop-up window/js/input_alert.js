"use strict"

//input data alert

const video = document.querySelector('.bostonvideo');

video.addEventListener("ended", function(){
    let email = prompt("Write your email for more videos", "correo@correo.com");

    console.log(email);

    if(!email || email == ""){
        console.log("No data");
    }else{
        console.log(email);
    }
});