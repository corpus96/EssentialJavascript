"use strict"

//Mouse events

const button_ = document.querySelector('.button');

button_.addEventListener('click', function (){
    console.log('The button was clicked');
})

button_.addEventListener('mouseover', function(){
    console.log('The mouse is over the button');
})

button_.addEventListener('mouseout', function (){
    console.log('The mouse is not over the button');
})