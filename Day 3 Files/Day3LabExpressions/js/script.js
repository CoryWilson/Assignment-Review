/*******************************
 Cory Wilson
 05/28/14
 WPF Section 1
 Day 3 Lab Expressions - Revised
 ******************************/


/******************
Slice of Pie Part 1
******************/

//Calculate the the slices each partygoer gets
//How many slices per pizza
var slices = Number(prompt("How many slices of pizza are there?"));
//validate
while(isNaN(slices) || slices===""){
  slices = Number(prompt("Please insert a NUMBER for pizza slices!"));
}
//How many people are at the party
var people = Number(prompt("How many people are at the party?"));
//validate
while(isNaN(people) || people===""){
  people = Number(prompt("Please insert a NUMBER for the amount of people at the party!"));
}
//How many pizzas they ordered
var pizzas = Number(prompt("How many pizzas did they order?"));
//validate
while(isNaN(pizzas) || pizzas===""){
  pizzas = Number(prompt("Please insert a NUMBER for pizzas ordered!"));
}
/*
//Slices per person = Multiply the number of slices and pizzas together to get the total number of slices. Then divide that total by the amount of people at the party
var slicePerPerson = (slices * pizzas) / people;
//Output Area
console.log("Each person ate " + peopleSlices + " slices of pizza at the party.");
*/

//created anonymous function to calculate slices per person
//parameters for slices, pizzas, people
var peopleSlices = function(sl,pz,pe){
  var slicesPerPerson = (sl*pz)/pe;
  var sPP = slicesPerPerson.toFixed(2);
  return sPP;
}
//insert prompts as arguments
//viola!
var result = peopleSlices(slices,pizzas,people);
console.log("Each person ate "+result+" slices of pizza at the party.");


/******************
Slice of Pie Part 2
******************/

//Total number of slices
//var totalSlices = slices * pizzas;
//Create anonymous function (procedure) for totalSlices
var totalSlices = function(s,p){
  var total = s*p;
  return total;
}
var tSResult = totalSlices(slices, pizzas);

//Calculate the number of slices Sparky eats
//var sparkySlices = totalSlices % people ;
var sparkySlices = function(t,p){
  var total = t%p;
  return total;
}
var sSlicesResult = sparkySlices(tSResult,people);


//Output Area
console.log("Sparky got "+sSlicesResult+" slices of pizza.");


/********************
Average shopping bill
********************/

//Calculate average shopping bill for the past five weeks
alert("This program is going to average out your shopping bills. Just tell it how many weeks you want to average and have at it!");
//Ask the user for the amount of weeks they want to average
var amountWeeks = Number(prompt("How many weeks did you want to average your shopping bill for?"));
while(isNaN(amountWeeks) || amountWeeks===""){
  amountWeeks = Number(prompt("Please insert a NUMBER for weeks!"));
}

//create a blank array that will hold each individual weeks
var avgArray = [];
//loop through that array by the amount of weeks inputed earlier
//asking the user what the shopping bill was each week
for(var i=0; i<amountWeeks; i++){
  var input = Number(prompt("What is your shopping bill this week?"));
  //push the input result into the array adding new items
  avgArray.push(input);
}

//begin the totaling process
//set a total variable equal to 0
var total = 0;
//loop through the lengh of the array
for(var j=0; j < avgArray.length; j++){
  //add each item in the array to the total variable
  total += avgArray[j];
}

//anonymous function that averages using the total and amount of weeks acquired earlier
//parameter of t aka total and w for weeks
var averager = function(t,w){
  //avg = t/
  var avg = t/w;
  return avg;
}
//input the arguments for total and amount of weeks
var results = averager(total,amountWeeks);
//bring result to two decimal places
var r = results.toFixed(2);
//concatinate a string that includes weeks and final result
console.log("Over the period of "+amountWeeks+ " weeks you spent a total of $"+total+" on shopping bills and an average amount of $"+r+".");


/********
Discounts
********/

//Calculate the discounted price for an item. With and without sales tax. New and Improved Version.

//Ask the use for the name of the product they are looking to purchase
var itemDescription = prompt("What product are you looking to buy?");
//Validate
while(itemDescription===""){
  itemDescription = prompt("Please enter a product name!");
}
//Ask them what store they are going to buy the product from
var store = prompt("What store are you going to be shopping at for "+itemDescription+"?");
//Validate
while(store===""){
  store = prompt("Please enter a store name!");
}
//Ask them how much the item costs
var originalPrice = Number(prompt("How much does the "+itemDescription+" cost?"));
//Validate
while(isNaN(originalPrice) || originalPrice===""){
  originalPrice = prompt("Please enter a NUMBER for product price!");
}

//Ask them what the store's discount percentage is...
var discountPercentage = Number(prompt("What is the discount percentage at "+store+"?"));
//Validate
while(isNaN(discountPercentage) || discountPercentage===""){
  discountPercentage = prompt("Please enter a NUMBER for "+store+"'s discount percentage!");
}
//turn that number into a percentage
discPerc = discountPercentage/100;
//ask them what the store's sales tax percentage is...
var salesTaxPercentage = Number(prompt("What is the sales tax percentage at "+store+"?"));
//Validate
while(isNaN(salesTaxPercentage) || salesTaxPercentage===""){
  salesTaxPercentage = prompt("Please enter a NUMBER for "+store+"'s sales tax percentage!");
}
//turn that number into a percentage
salesPerc = salesTaxPercentage/100;

//anon function for discount amount on item
var discountAmount = function(op,dp){
  var disc = op * dp;
  return disc;
}
//call the function
var dAmount = discountAmount(originalPrice,discPerc);

//anon function for sales tax amount on item
var salesTaxAmount = function(op,sp){
  var sales = op * sp;
  return sales;
}
//call the function
var sAmount = salesTaxAmount(originalPrice,salesPerc);

//anon function that runs for item's price w/ tax
var itemWithTax = function(op,sa,da){
  var taxedItem = op+sa-da;
  return taxedItem;
}
//call it
var itemTaxTotal = itemWithTax(originalPrice, sAmount, dAmount);

//anon function that runs for item's price w/o tax
var itemWOTax = function(op,da){
  var nonTaxedItem = op-da;
  return nonTaxedItem;
}
//call it
var itemNoTaxTotal = itemWOTax(originalPrice,dAmount);

//print out result
console.log("Your " + itemDescription + " was originally $" + originalPrice + ", but after a " + discountPercentage + "% discount, it is now $" + itemNoTaxTotal + " without tax, and $" + itemTaxTotal + " with tax.");
