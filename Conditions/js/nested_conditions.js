"use strict"

//Nested conditions

var dataA = 110;
var dataB = 20;
var result = "NULL";

if(dataA > dataB){
    result = "Condition is true";

    if(dataA < dataB){
        result = "Nested condition is true";
    }else{
        result = "Nested condition is false";
    }
}else{
    result = "Condition is false";
}

console.log("Script returned: ", result);