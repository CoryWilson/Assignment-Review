/***************************************
Cory Wilson
WPF Section 1
05/21/14
Day 8 Scope
***************************************/

//Variable Scope
//Variables inside & outside of a function

//Try not to use the same variable names...BUT
//This is going to be the impossible in LARGE files

//Create a variable for Width in our MAIN code
var width = 5; //Scoped outside of the function - "Main Code"

//Create a function that calculates the perimeter of a rectangle
function calcPeri(){
  //can create new variables inside of functions, but it cannot leave that function
  //only valid within that box!!!
  var width = 10; //Scoped to the function calcPeri
  //width = 10; would be scoped outside of the function
  console.log("Inside of function "+width);
  var height = 20;
  var perimeter = width*2 + height*2;
  console.log("Inside of function, the perimeter is "+perimeter);
  //Variables created in a function, can NOT be accessed outside of a function
}

console.log("Before Call "+width);
calcPeri();

console.log("After Call "+width);

console.log("After call the perimeter is "+perimeter);
