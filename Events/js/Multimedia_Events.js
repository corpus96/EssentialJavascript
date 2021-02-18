"use strict"

// Mutlimedia events

const video = document.querySelector('.bostonvideo');

video.addEventListener("play", function(){
    console.log("The video has started");
});

video.addEventListener("seeking", function(){
    console.log("The video is being seeked", this.currentTime);
});

video.addEventListener("ended", function(){
    console.log("The video has finished");
});