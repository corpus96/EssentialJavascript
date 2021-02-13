"use strict"

//Switch condition

var age = 20;
var result;
var result2;
var res;
var product = "TV";

switch(age){
    case 10:
        result = "Age is 10";

        break;
    case 20:
        result = "Age is 20";
        
        break;
    case 30:
        result = "Age is 30";

        break;

    default:
        result = "NULL";
        break;
}

switch(product){
    case "Radio":
        result2 = "Product is Radio";

        break;
    case "TV":
        result2 = "Product is TV";

        break;
    case "Phone":
        result2 = "Product is Phone";

        break;
    default:
        result2 = "NULL";
}

res = [result, result2]

console.log("Script returned: ", res);