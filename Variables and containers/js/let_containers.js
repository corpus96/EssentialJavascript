"use strict"

var name = "Emmanuel";

console.log(name);

/*When we want to work with variables inside a data structure, we can use 'let',
and when want to use a variable outside a data structure we can use 'var'*/
function salute(){
    let name = "Corpus";
    let age = 24;

    console.log(name);
    console.log(age);
}

salute();