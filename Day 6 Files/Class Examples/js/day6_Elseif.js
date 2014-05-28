/***************************************
Cory Wilson
WPF Section 1
05/16/14
Day 6 Examples
Else If Statements
***************************************/

//Testing Steak Temperatures

/***************************
Under 120 is uncooked
120-124 Steak is Rare
125-129 Steak is Medium-Rare
130-139 Steak is Medium
140-149 Steak is Medium-Well
150-165 is Well Done
Anything above 165 is BURNT!
***************************/

//Create a variable for the steak temperature
//var steakTemp = 135;
//Cast the variable as a number.
var steakTemp = Number(prompt("What temperature is your steak?"));

if(steakTemp < 120){
  console.log("Your Steak is Uncooked!");
}
else if(steakTemp < 125){
  console.log("Your Steak is cooked Rare!");
}
else if(steakTemp < 130){
  console.log("Your Steak is cooked Medium-Rare!");
}
else if(steakTemp < 140){
  console.log("Your Steak is cooked Medium!");
}
else if(steakTemp < 150){
  console.log("Your Steak is cooked Medium-Well!");
}
else if(steakTemp <= 165){
  console.log("Your Steak is cooked Well Done!");
}
else{
  console.log("Your Steak is burnt, you need to learn how to cook!");
}
