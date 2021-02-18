"use strict"

//Timers

//setTnterval: stablish if an action to run every x seconds
//setTimeout: do an action after the time you are stablishing


/*var timer = setInterval(function(){
    setColor();
}, 2000); //miliseconds*/

setTimeout(function(){
    setColor();
}, 2000); //miliseconds

function setColor(){
    var page = document.body;

    page.style.backgroundColor = page.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor(){
    clearInterval(timer);
}