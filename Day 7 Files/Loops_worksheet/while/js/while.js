/***************************************
Cory Wilson
WPF Section 1
05/19/14
Day 7 While Loops
***************************************/

//Figure out how many attempts it will take to accomplish something...

//Initialize a Counter
alert("We're going to count up to any number you want to.");

var i = 0;
var num = Number(prompt("Put a number you would like to count up to in here..."));

//Validate prompt
while(isNaN(num) || num===""){
  //Its a text string, prompt again for a number
  num = Number(prompt("Please type in a NUMBER!"));
}

//Setup a while loop
while(i < num){
  console.log(i);
  i++;
}
console.log("Congrats, you've counted all the way up to "+i+"!");
