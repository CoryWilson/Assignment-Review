/******************************
Cory Wilson
WPF Section 1
05/23/14
Functions Assignment - Industry
******************************/

//Industry Problem

//Anonymous Function
//How much money you earn speaking at a conference.

alert("Let's figure out which conference you should speak at!");

//Inputs for how much you earn at each conference.
//Validation for each input.
var userInput1 = Number(prompt("How much do you earn speaking at conference one?"));
while(isNaN(userInput1) || userInput1===""){
  userInput1 = Number(prompt("Be sure to put in a number!"));
}
var userInput2 = Number(prompt("How much do you earn speaking at conference two?"));
while(isNaN(userInput2) || userInput2===""){
  userInput3 = Number(prompt("Be sure to put in a number!"));
}
var userInput3 = Number(prompt("How much do you earn speaking at conference three?"));
while(isNaN(userInput3) || userInput3===""){
  userInput3 = Number(prompt("Be sure to put in a number!"));
}


//anonymous conference function
//three parameters a,b,c for each conference
//calculates which value is the highest and outputs the corresponding string
var conference = function(a,b,c){
  if(a > b && a > c){
    var choice = "Go to conference one.";
  } else if(b > a && b > c){
    var choice = "Go to conference two.";
  } else if(c > a && c > b){
    var choice = "Go to conference three.";
  } else{
    var choice = "Don't bother going to any of the conferences.";
  }
  return choice;
}

//use userInputs for arguments in the conference function
var result = conference(userInput1,userInput2,userInput3);
console.log(result);
