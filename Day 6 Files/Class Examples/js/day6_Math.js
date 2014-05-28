/***************************************
Cory Wilson
WPF Section 1
05/16/14
Day 6 Examples
Math Class
***************************************/

//Math.random();

//ALWAYS capitalize the M in Math.

//Math.round()
//round
//Normal Rounding .5 goes up, less goes down.
var num1 = 9.544;
console.log(num1);
console.log(Math.round(num1));

//Math.floor()
//floor
//Chops off all decimals and always rounds down.
var num2 = 6.99;
console.log(num2);
console.log(Math.floor(num2));

//Math.ceil()
//ceiling
//Always rounds up!
var num3 = 4.23;
console.log(num3);
console.log(Math.ceil(num3));

//Math.random()
//Random Numbers
//Gives a random number between 0 -> 1
var num4 = Math.random();
console.log(num4);

//random number between 0 -> 10
var num5 = Math.random() * 10;
console.log(num5);

//random integer between 0 -> 100
var num6 = Math.round(Math.random() * 100);
console.log(num6);

//Get a random integer between two numbers
//Math.random() * (max-min) + min
// [0->1] * range + min

//integer between 50 -> 80
var num7 = Math.round(Math.random() * (30) + 50);
console.log(num7);

//Math constant
//All constants are CAPITAL letters
//Pi - 3.1425.....
//Math.PI

//Circumference of a circle
//2 * pi * radius
//radius is 1/2 diameter
//pi * d

var radius = Number(prompt("What is the radius of the circle?"));

var areaCircle = 2 * Math.PI * radius;

//.toFixed(# of decimal places)
//works to shorten the number of decimal places
areaCircle = areaCircle.toFixed(2);
console.log(areaCircle);

//add descriptive text
console.log("The area of a circle with a radius of " + radius + " is " + areaCircle + ".");
