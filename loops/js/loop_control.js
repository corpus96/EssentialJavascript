'use strict'

//loop control
//control how many odd number are between 1 and 20

var counter = 0;
var oddNumber = 0;

for(counter = 0; counter <= 20; counter++){
    if(counter == 5){
        break;
    }

    if(counter % 2 == 0){
        continue //go to next iteration
    }
    oddNumber++;
    debugger;
}
