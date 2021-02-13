"use strict"

//Condition if-else
var dataA = 20;
var dataB = 20;
var result = "NULL";

if(dataA > dataB){
    result = "Condition is true";
} else if(dataB == dataA){
    result = "ELSE-IF Condition is true"
}else{
    result = "Condition is false";
}

console.log("Script returned: ", result);