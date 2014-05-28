/*
Cory Wilson
05/12/14
WPF 1405
Day 4 Arrays Examples
day4_arrays.js
*/

//Create a basic Arrays
var avengersNames = ["Hulk", "Iron Man", "Captain America"];

//Print out the WHOLE Arrays
console.log(avengersNames);

//Access a specific item in the Arrays
console.log(avengersNames[2]);

//Set the value of a specific item
avengersNames[0] = "Black Widow";

//Print WHOLE log
console.log(avengersNames);

//Add a new variable to the Arrays
avengersNames[3] = "Hawkeye";
avengersNames[4] = "Scarlet Witch";
avengersNames[5] = "Quicksilver";
avengersNames[6] = "Green She-Hulk";

//Pring WHOLE log
console.log(avengersNames);

//Figure out how long the array is?
//length property of Arrays
//to access a property or attribute of a variable
//use DOT SYNTAX
console.log(avengersNames.length);

//The index number of the LAST item in an array
//is One less than the length of the array

//Create a variable to find out the last item
var newestRecruit = avengersNames.length - 1;
//Gives us the index # of the last item in array

//Print out the newest avengers
console.log("Welcome " + avengersNames[newestRecruit] + " you are our newest Avenger!");



//Pick Oranges

//Create an array to hold the # of oranges we pick each day
var orangesPicked = [9000, 30, 35000];

//Average amount of oranges picked in a day

//Add all 3 days then divide by the # of days

//Create a variable to hold the total number of oranges
var total = orangesPicked[0] + orangesPicked[1] + orangesPicked[2];
console.log(total);

//Create a variable for total number of days
var totalDays = orangesPicked.length;
console.log(totalDays);

//Average amount
var average = total/totalDays;
console.log(average);
console.log("The average amount of Oranges picked in a day is " + average + ".");