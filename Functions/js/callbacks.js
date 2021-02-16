"use strict"

//Callbacks
//Control Async processes, invoke processes in a function and in the other function invoke other processes

function calculate(A, B, sum_callback, dec_callback){
    var sum = A + B;
    var dec = A - B;

    sum_callback(sum);
    dec_callback(dec);
}

calculate(2, 3, function(result){
    console.log("Result: ", result);
}, function(result){
    console.log("Result 2: ", result);
});

//calculate(val1, val1, func, func)