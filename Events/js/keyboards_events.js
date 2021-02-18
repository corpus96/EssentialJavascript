"use strict"
//keyboards events
//windowobjet is about any page of the window

window.addEventListener("keydown", function(event){
    console.log('Key is being pressed');
    console.log(String.fromCharCode(event.keyCode)); //return the key pressed except from ENTER
})

window.addEventListener("keypress", function(event){
    console.log("Key pressed");
})

window.addEventListener("keyup", function(event){
    console.log("Key stopped being pressed");
})