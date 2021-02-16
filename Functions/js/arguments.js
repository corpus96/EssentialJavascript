"use strict"

//Arguments of a cuntion

function salute(name, age){
    console.log(name);
    console.log(age);

    var result = name + ' has ' + age + ' years old';

    return result;
}

var ret = salute("Emmanuel", 4);

console.log(ret);