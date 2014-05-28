/***************************************
Cory Wilson
WPF Section 1
05/19/14
Day 7 Validating Prompts
***************************************/

//Ask the user for a min and max number
//Create a random number in between those two numbers
alert("Let's find a random number between two numbers!");
var min = prompt("Please type in a minimum number:");

//Validate with a Loop
//Use a while loop

while(isNaN(min) || min===""){
  //Its a text string, prompt again for a number
  min = Number(prompt("Please type in a Minimum NUMBER!"));
}

var max = Number(prompt("Please type in a maximum number:"));

while(isNaN(max) || min===""){
  max = Number(prompt("Please type in a Maximum NUMBER!"));
}

//Prompt for first name
var name = prompt("What is your first name?");

while(name===""){
  name = prompt("Pleas type in something for your name!");
}

/*********************************************************
//Validate our user's responses
//Empty String
if(min===""){
  console.log("Inside of empty sring min if statement.");
  min = Number(prompt("Don't leave it blank, give me a number!"));
}

//Test for not a number for max value

//isNaN()
//If its a number returns false
//Text string returns true
console.log(isNaN(max));


if(isNaN(max)){
  //Will run if its true
  //Max is a string not a number
  max = Number(prompt("Please type in a NUMBER!!"));
}
***********************************************************/

//Generate a random Integer
//Math.random()*(max-min) + min;
var randomNumber = Math.round(Math.random()*(max-min) + min);

console.log("Your random number is "+randomNumber+".");
