/*
Cory Wilson
WPF 1045 Section 1
Day 4 Casting Variables
*/

//Casting Variables Means Treating One Variable Type Like Another
//var stringVar = "6";
var stringVar = Number("6");
var result = 7 + Number(stringVar);
console.log(result);

//Cast by wrapping the variable in the data type you want it to be
//Number(); - whatever is inside will be treated as a number

//Casting Numbers as String Variables
var areaCode = 407;
var firstPart = 203;
var secondPart = 4529;

//Combine these into a phone number
//var phoneNumber = areaCode + firstPart + secondPart;
var phoneNumber = String(areaCode) + String(firstPart) + String(secondPart);
console.log(phoneNumber);



//Prompting
//Prompts return string values
//Sometimes the computer can figure out number, but usually not

var cupsHad = prompt("How many cups do you have?");
var cupsBought = prompt("How many cups are you going to buy?");

//Total number of cups this person will have
//var totalCups = cupsHad + cupsBought;
var totalCups = Number(cupsHad) + Number(cupsBought);
console.log(totalCups);


//Parsing Integer
//Looks through a text string and tries to find an Integer
//Only the first number in a string is returned
//Leading and trailing spaces are allowed
//If the first character can not be converted to a number it will return a NaN - Not a Number
//You are trying to use a non-number in a math situation

//parseInt();

var a = parseInt("40 years old");
console.log(a);

var b = parseInt("He was 40 years old");
console.log(b);
