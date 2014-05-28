/***************************************
Cory Wilson
WPF Section 1
05/16/14
Day 6 Conditionals Assignment - Wacky
***************************************/

//Wacky Example

//You told us not to worry about validation :P

//Simplified Code for If Else
//(condition to be met)? True Code : Else Code
//(a>=b)? console.log("True") : console.log("False");

//who will win in a battle of goku or vegeta?

//Givens
//Goku's Power Level
var gokuLevel = Number(prompt("What is Goku's power level?"));
//Vegeta's Power Level
var vegetaLevel = Number(prompt("What is Vegeta's power level?"));
//A Power Level Trigger of 9000
var overNT = 9000;

//If Goku's power level is over 9000! He will automatically win.
if(gokuLevel > overNT){
  console.log("His power level, it's over " + overNT + "! You win Kakarot.");
}
//If his power level is under 9000, then he will face vegeta. If his power level is higher than vegeta's he will win.
else if(gokuLevel > vegetaLevel){
  console.log("You win this time kakarot! My power level of " + vegetaLevel + " is no match for your power level of " + gokuLevel + ".");
}
//otherwise vegeta's power level will be higher than goku's and he will win.
else{
  console.log("Your power level of " + gokuLevel + " is much to weak for my power level of " + vegetaLevel + " kakarot.");
}
