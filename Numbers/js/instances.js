"use strict"

//Number properties of instances

var num = 2.5;

console.log("toExponential: ", num.toExponential(4));

console.log("toFixed: ", num.toFixed(4)); //Adjust numbers to match the given number, is a 0 is given it returns a round down

console.log("toPrecision: ", num.toPrecision(6));

console.log("toString: ", typeof num.toString()); //returns string