"use strict"

//this operator

const button_ = document.querySelector('.button');

//Listen every time the user clicks the button
/*
button_.addEventListener('click', function(){
    console.log(this.innerHTML); //this return the tag
})*/

button_.addEventListener('click', () => {
    console.log(this);
    this.location = "http://www.google.com";
})