"use strict"

//Alert Window

const video = document.querySelector('.bostonvideo');

video.addEventListener("ended", function(){
    alert("ALERT:\nThe video has ended");
})