/*******************************
   Cory Wilson
   05/14/14
   WPF Section 1
   Day 5 Conditionals Activity
 ******************************/

/******************************************

  Group 1: Expressions with Conditionals

******************************************/

//Last Chance for Gas!

//A driver has to determine if they can make it across the desert with their current fuel. They are about to pass the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.

//Givens:
//Car mpg
//Gas tank %
//Gast tank capacity (gallons)


//Ask for user's car mpg
var mpg = prompt("What is the MPG of your car?");

//Ask for percentage of gas left in tank
var tankPercent = prompt("What decimal percentage of gas is left in your tank?");

//Ask for gas tank capacity in gallons
var tankCapacity = prompt("How large is your gas tank?");

var gallonsLeft = Number(mpg) * Number(tankPercent);

if(gallonsLeft > Number(tankCapacity)) {
  console.log("Yes, you can make it without stopping for gas!");
}
else{
  console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can!");
}


/******************************************

  Group 2: Multiple Results

******************************************/

//Grade Letter Calculator

//A student earns a number grade at the condlusion of a course at Full Sail. Determine the appropriate letter gradee for that number using conditional statments.

//Given:
//Grade(in percent)


//Ask the user what percentage grade they received in class.
var gradePercent = prompt("What is your percentage grade in the class?");

//Makes gradePercent a number and not a string
Number(gradePercent);

//variables a-d represent their respective percentage points
var a = 90;
var b = 80;
var c = 70;
var d = 60;

//Run the grade percentage through a conditional ELSE IF statement and determine the grade letter, use this to print out a statement of grade percent and grade letter.
if(gradePercent >= a){
  gradeLetter = "A";
  console.log("You have a " + gradePercent + "%, which means you have earned a(n) " + gradeLetter + " in the class!");
}
else if(gradePercent >= b){
  gradeLetter = "B";
  console.log("You have a " + gradePercent + "%, which means you have earned a(n) " + gradeLetter + " in the class!");
}
else if(gradePercent >= c){
  gradeLetter = "C";
  console.log("You have a " + gradePercent + "%, which means you have earned a(n) " + gradeLetter + " in the class!");
}
else if(gradePercent >= d){
  gradeLetter = "D";
  console.log("You have a " + gradePercent + "%, which means you have earned a(n) " + gradeLetter + " in the class!");
}
else{
  gradeLetter = "F";
  console.log("You have a " + gradePercent + "%, which means you have earned a(n) " + gradeLetter + " in the class!");
}

/******************************************

  Group 3: Multiple Conditions

******************************************/

//Movie Ticket Price

//The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
//Determine which two prices the customer is eligible for.

//Givens:
//Time of movie
//Age of customer

//Ask the user what time the movie is at.
var movieTime = prompt("What time is the movie?");

//Ask the user how old they are.
var custAge = prompt("How old are you?");

//convert movieTime and custAge from strings to numbers.
Number(movieTime);
Number(custAge);

//designate rates for regular and discounted tickets
var regTicket = 12;
var discountTicket = 7;

//If time is 3 - 5 get discount
if(movieTime >= 3 || movieTime <= 5){
  console.log("The ticket price is $" + discountTicket + ".00.");
}
//else if >= 55 get discount
else if(custAge >= 55){
  console.log("The ticket price is $" + discountTicket + ".00.");
}
//else if < 10 get discount
else if(custAge < 10){
  console.log("The ticket price is $" + discountTicket + ".00.");
}
//else no discount
else{
  console.log("The ticket price is $" + regTicket + ".00.");
}
