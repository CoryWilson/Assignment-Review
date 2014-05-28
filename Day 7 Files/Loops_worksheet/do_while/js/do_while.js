/***************************************
Cory Wilson
WPF Section 1
05/19/14
Day 7 Do While Loops
***************************************/

//Initialized Variables
//Make a program that will run until number 1 matches number 2
alert("Let's check to see if Number 1 remains less than Number 2");
//Ask for the value of number 1
var num1=Number(prompt("Insert a number in here:"));
//Validate Prompt
while(isNaN(num1) || num1===""){
  //Its a text string, prompt again for a number
  num1 = Number(prompt("Please type in a NUMBER!"));
}
//Ask for the value of number 2
var num2=Number(prompt("Insert another number in here:"));
//Validate Prompt
while(isNaN(num2) || num2===""){
  //Its a text string, prompt again for a number
  num2 = Number(prompt("Please type in a NUMBER!"));
}
//Setup the do while loop
do{
  if(num1>num2){
    console.log(num1+" is larger than "+num2+" don't bother running.");
  }
  else{
  console.log(num1+" is still less than "+num2+".");
  }
  //Changing the value of the variable to avoid an infinite loop
  num1++;
}
while(num1<num2); //Condition to test
