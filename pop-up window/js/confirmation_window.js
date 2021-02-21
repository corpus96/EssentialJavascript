"use strict"

//confirmation window

const video = document.querySelector('.bostonvideo');

video.addEventListener("ended", function(){
    let ret = confirm("Do you want to watch the video again?");

    console.log(ret);

    if(ret){
        video.play();
    }else{
        window.location = "http://www.google.com";
    }
});