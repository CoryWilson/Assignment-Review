/*
Cory Wilson
WPF 1045 Section 1
Day 4 Prompts
*/

//Prompting user for information
prompt("Enter your year of birth:");

//Capture the information the user provides
var userInput = prompt("Enter your birth year:");
console.log(userInput);

//Prompt and explain to the user what we are actually doing.
//Prompt the user for a width and calculate the area of a rectangle with it
// \n stands for new line
var width = prompt("Let's calculate the area of a rectangle. \nPlease enter a width:");
var height = prompt("Please enter a height:");

//area of rectangle | width * height
var area = width * height;

console.log("The area of your rectange is " + area + ".");
alert("The area of your rectange is " + area + ".");

//Create a variable to hold the whole string of an answer
var result = "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + area + ".";
console.log(result);
alert(result);
