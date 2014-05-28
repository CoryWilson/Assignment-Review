/******************************
Cory Wilson
WPF Section 1
05/23/14
Functions Assignment - Personal
******************************/

//Come up with Personal Function
//Can you attend a concert this week?
//Budget, Ticket Cost
//If price difference is > $50 then yes

//Let the user know that we are going to check to see if they can attend a concert this week
alert("Let's see if you can attend a concert this week! If you have less than $50 left over than you cannot attend the concert.");

//First ask the user for their weekly budget
var weeklyBudget = Number(prompt("How large is your budget this week?"));
//Validate the prompt
while(isNaN(weeklyBudget) || weeklyBudget===""){
  //Ask the user to insert a number if they input something else
  weeklyBudget = Number(prompt("Please insert a number value for your weekly budget."));
}

//Then ask the user how much the ticket costs
var ticketCost = Number(prompt("How much does the concert ticket cost?"));
//Validate the prompt
while(isNaN(ticketCost) || ticketCost===""){
  //Ask the user to insert a number if they input something else
  ticketCost = Number(prompt("Please insert a number value for the cost of the ticket."));
}

//function that finds out the cost difference between your budget and the cost of the ticket.
function concert(b,t){

  var concertDiff = b-t;
  //return the difference value
  return concertDiff;

}

//store the returned value in the result variable
var result = concert(weeklyBudget,ticketCost);
//check that value with a console log
console.log(result);

//finally compare the returned value of the concert function and make sure that you have more than $50 left over between the budget and concert
/*
if(result > 50){
  console.log("Congratulations your budget is $"+weeklyBudget+" and the ticket to the concert costs $"+ticketCost+". That means have $"+result+" left over and you can go to a concert this week!");
} else{
  console.log("Your budget was $"+weeklyBudget+" and the ticket cost $"+ticketCost+". That means you only have $"+result+" leftover. You don't have enough money to attend a concert this week. :( ");
}
*/

//Turn this result into a TERNARY instead of an if else
(result > 2.0) ? console.log("Congratulations your budget is $"+weeklyBudget+" and the ticket to the concert costs $"+ticketCost+". That means have $"+result+" left over and you can go to a concert this week!") : console.log("Your budget was $"+weeklyBudget+" and the ticket cost $"+ticketCost+". That means you only have $"+result+" leftover. You don't have enough money to attend a concert this week. :( ");
