/***************************************
Cory Wilson
WPF Section 1
05/21/14
Day 8 Arguments & Parameters
***************************************/

//Arguments & Parameters

/******************************
//Argument - Goes into function
funcName(argument1, argument2);
******************************/

/************************************************
//Parameter - Catch the arguments in the function
function funcName(parameter1, parameter2){
  code the function runs
}
************************************************/

/************************
Cake Factory Example
  Parameters
    Flour Type
    Egg Type
    Flavor
  Arguments
    white/brown/etc.
    eggs/egg whites/etc.
    chocolate/vanilla/etc.
*************************/

//Function to calculate area of a rectangle
function calcArea(w,h){ //Parameters go here
  //var width = 10;
  //var height = 20;
  //var area = width * height;
  var area = w*h;
  console.log(area);
}

//Call the function
calcArea(10,20); //Arguments go here

calcArea(20,30);

//Dog Years
function dogYears(humanAge){
  //Input a human year...spit out a dog year
  //dogYears = humanAge * 7

  //create a variable for dog years
  var dogAge = humanAge * 7;

  console.log("Dog age is "+dogAge+".");
}

dogYears(4);

var userInput = prompt("How old is your dog?");
dogYears(userInput);
