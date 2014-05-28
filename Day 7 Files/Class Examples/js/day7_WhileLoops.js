/***************************************
Cory Wilson
WPF Section 1
05/19/14
Day 7 While Loops Examples
***************************************/

//Basic While Loop

//While loop. Loops through a block of code as long as the condition is true.

//Initialize the counter variable
var counter = 0;

//Setup while loop
while(counter < 200){ //condition - loops until false
  console.log("Something's just never end.");
  //Change the value of the counter variable
  //OR it will run FOREVER!! No Bueno!
  console.log("The counter is " + counter + ".");
  counter++;
}

console.log("Ending counter " + counter + ".");

//Do While Loop
//This loop will run the code once to start, before checking if the condition is true.
//THEN it will repeat as long as the condition stays true.

//Initialize the variable
var i = 20;

//Setup the do while loop
do{
  console.log("The number of i is " + i + ".");

  //Change the value of the variable to avoid and infinite loop
  i++;
}
while(i<10); //Condition to test

console.log("The number of i following the do while loop is " + i + ".");
