"use strict"

// JSON -> Javascript Object Notation
/*JSON is the best way to share data in our application or 
    external services*/

var person = {name: 'Emmanuel', country: 'Mexico'}
var people = [
    {name: 'John', country: 'USA'},
    {name: 'Jack', country: 'Australia'},
    {name: 'Phara', country: 'Egipt'},
    person //previous declarations can be added
]
var personJSON = JSON.stringify(person); //convert to json
var newPerson = JSON.parse(personJSON); //convert from json