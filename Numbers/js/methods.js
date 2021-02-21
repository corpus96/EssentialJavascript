"use strict"

//Number methods

var num = "10.30"; //text string

console.log("Number: ", typeof num, Number(num)); //Returns number
console.log("parseInt: ", parseInt(num)); //returns integer
console.log("parseFloat: ", parseFloat(num)); //returns float
console.log("isNaN: ", isNaN(num)); //returns if it's a number or not
console.log("isInteger: ", Number.isInteger(num)); //returns if number is an integer or not