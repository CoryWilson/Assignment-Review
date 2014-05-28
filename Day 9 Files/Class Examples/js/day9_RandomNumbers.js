/*******************
Cory Wilson
WPF Section 1
05/23/14
Day 9 Random Numbers
*******************/

//Create a function that will give a random integer

function randomizer(mn,mx){ //Use Parameters
  //Generate a random integer and RETURN it back

  //Create a variable to hold our random integer
  var randomNum = Math.round(Math.random()*(mx-mn)+mn);

  //Return the random integer
  return randomNum;
}

//Ask user for min & max values
//Cast user prompts to Numbers
var minUser = Number(prompt("Please insert a min value"));
var maxUser = Number(prompt("Please insert a max value"));

//Function call this randomizer
//NEED a variable to catch the returned value
var result = randomizer(minUser,maxUser); //NEED arguments

//Console log it out
console.log(result);

//Create a loop to gie us 15 random integers
for(var i=0; i<15; i++){
  //Create a random Integer
  //console.log(result); DOES NOT WORK

  //Must function call to start the function
  console.log(randomizer(minUser,maxUser));
}
