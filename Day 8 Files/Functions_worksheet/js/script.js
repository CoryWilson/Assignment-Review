/*************************
Cory Wilson
WPF Section 1
05/21/14
Day 8 Functions Worksheet
*************************/

/**************************************************************
Circumference
**************************************************************/

//Create a function to find the circumference of a circle.
//Circumference = 2*PI*radius
//name function circleCirc
//provide parameter of radius
function circleCirc(radius){
  //calculate circumference
  var circumference = 2*Math.PI*radius;
  //return circumference
  return circumference;
}

//Alert the user to what we are doing
alert("Let's find the circumference of a circle!");

//Catch the returned value from the function
//Create a variable to hold the results
var userInput = Number(prompt("What is the radius of the circle?"));
//Validate the prompt to make sure the user input a number
while(isNaN(userInput) || userInput===""){
  //Its a text string, prompt again for a number
  userInput = Number(prompt("Please type in a NUMBER for radius!"));
}

//call the circleCirc function and store it in result
//print out result
var result = circleCirc(userInput);
console.log("The circumference of the circle is "+result+".");


/**************************************************************
Stung!
**************************************************************/

//It takes 8.666666667 bee stings per pound to kill an animal.
//Calculate how many bee stings are needed to kill an animal in a function.

// numOfStings = weight / 8.666666667
var stingsPerPound = 8.666666667;

//alert the user as to what we are doing, aka finding the amount of bee stings it will take to kill an animal
alert("How many bee stings are needed to kill an animal?");
//function that tells you number of bee stings it takes to kill an animal
//parameter of victim's weight (in lbs)
function beeStings(weight){
  //# of bee stings = victim's weight/stingsPerPound
  var numOfStings = weight/stingsPerPound;
  //returns number of stings it takes to kill animal
  return numOfStings;
}
//ask the user how much the animal weighs
var stingInput = Number(prompt("How much does the animal weigh?"));
//Validate the prompt to make sure the user input a number
while(isNaN(stingInput) || stingInput===""){
  //Its a text string, prompt again for a number
  stingInput = Number(prompt("Please type in a NUMBER for radius!"));
}

var stingResult = beeStings(stingInput);
console.log("It takes "+stingResult+" bee stings to kill this animal.");
