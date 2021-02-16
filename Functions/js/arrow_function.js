"use strict"

//Arrow function / Lambda functions / Fat Arrow

//#1
var salute = name => "Hello " + name; //name is the argument
console.log(salute("Emmanuel"));

//#2
var sum = qty => qty + 10;
console.log(sum(10));

//#3
var calculate = (A, B) => A + B;
console.log(calculate(10, 15));

//#4
var generate = (A, B) => {
    var C = 5;

    return A + B + C;
}
console.log(generate(10, 15));

//#5 (no arguments)
var validate  = () => {
    return true;
}
console.log(validate);

