/*
Cory Wilson
WPF Section 01
Locigal Operators
*/

//Logical Operators

//If the price of the iPad is less than or equal to our budget
//AND if our paycheck is over $600


var budget = 700;
var iPadPrice = 499.99;
var paycheck = 700;

// AND && - both must be true

if(iPadPrice <= budget && paycheck > 600){
  //Runs if is TRUE
  console.log("You can buy the iPad! Such Proud! Much Wow!");
}
else{
  console.log("No iPad for you sucka!");
}


//Can we buy a car?
//If the price of the car is less than our budget - buy the car!
//OR if you win the lottery - then buy a car

var carPrice = 35000;
var carBudget = 12000;
var winLottery = true;

// OR || - one or more of the pair must be true to be true

if(carPrice < carBudget || winLottery){ //winLottery === true
  console.log("Have fun in your new car!");
}
else{
  console.log("No car for you bitch!");
}
