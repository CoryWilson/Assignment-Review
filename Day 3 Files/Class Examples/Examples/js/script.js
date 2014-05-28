/*
Cory Wilson
WPF 1405
Day 3 Class Examples
 */

//alert("You done did it correctly!!!");

// Find out how old we are
// Create a variable for birth year

var birthYear = 1990;

// Create a variable to hold the age

var age = 2014 - birthYear;
console.log(age);

// Math
// + - / *


// Find the area of a Triangle
// base * height * 1/2

var base = 8;
var height = 5;

var areaTriangle = base*height*.5;
console.log(areaTriangle);

// Modulo - %
// Gives you the remainder

var remainder = 32%10;
console.log(remainder);

// Find out if things are even or odd

var evenOrOdd = 247643%2;
console.log(evenOrOdd);

// Assignment Operators
/*
= Assignment
++ Adds 1 to the variable
-- Subtracts 1 from the variable
+= Addition Assignment
-= Subtract Assignment
/= Division Assignment
*= Multiplication Assignment
 */

var a = 1;
a++; // a = a+1
a--; // a = a-1
a+=4; // a = a+4
a-=3; // a = a-3
a/=2; // a = a/2
a*=6; // a = a*6
console.log(a);

// Strings
// " o ' used to find the beginning and end of a string
// Needed to distinguish between variable names and normal text

var kermit = "light green";

var frogName = "kermit";

// Double or Single quotes?
// Can use either BUT MUST match!

var courseName = 'Web Programming Fundamentals';

//var phrase = 'I don't know (Doesn't Work)

//Escaping character ( \Backslash)
var phrase = 'I don\'t know. \n New Line starts here.';
console.log(phrase);

// \n - new line character

//Boolean
// true or false
// NOT the text value of it!
// MUST be lowercase

var yes = true;

//Not Boolean just text
var maybe = "true";


var no = false;

// Order of operations
// PEMDAS
// Please Excuse My Dear Aunt Sally
// Parenthesis Exponents Multiplication Division Addition Subtraction

// Find the average of 4 Quiz Grades
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;
var quiz4 = 80;

// Find average, add all together and divide by total number of quizzes

var average = (quiz1 + quiz2+ quiz3 + quiz4)/4;
console.log(average);

// DO NOT overuse parenthesis

// Find the perimeter of a rectangle
// Length * 2 + Width * 2
var length = 7;
var width = 6;
var perimeter = (length*2) + (width*2);
console.log(perimeter);
console.log("The perimeter of a rectangle with a length of "+ length +" and a width of "+width+ " is "+perimeter+".");

// Concatenating - combining strings of text together

var firstName = "Kermit";
var lastName = "The Frog";

// Combine the first and last name into a full name

var fullName = firstName + " " + lastName;
console.log(fullName);

var d = "6";
var e = "7";

var combine = d+e;
console.log(combine);