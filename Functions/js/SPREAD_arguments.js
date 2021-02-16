"use strict"

//SPREAD arguments

function cook(ingretient1, ingredient2, ingredient3, ...others){ //REST argument
    console.log(ingretient1);
    console.log(ingredient2);
    console.log(ingredient3)
    console.log(others);
}

var baseIngredients = ["Chicken", "Tomato"];

cook(...baseIngredients, "Rice", "Fish", "Potato"); //SRPEAD argument