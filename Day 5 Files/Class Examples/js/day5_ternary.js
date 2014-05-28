/*
Cory Wilson
5/14/14
WPF Section 1
Day 5 Examples
*/

//Simplified Code for If Else
//(condition to be met)? True Code : Else Code
//(a>=b)? console.log("True") : console.log("False");

//Check our GPA and see if we can graduate
//Higher 2.0 GPA to graduate

var gpa = 3.7;

if(gpa > 2.0){
  console.log("Congrats! You're gonna graduate!");
}
else {
  console.log("Tough shit you dummy.");
}

//(condition)? true code : false code;

(gpa > 2.0) ? console.log("Congrats! You're gonna graduate!") : console.log("Tough shit you dummy");

//Pick a book based on a kids age
//Under 10 - Green Eggs and Ham - 10 & over gets Time Machine

var age = 6;

(age < 10) ? console.log("Green Eggs and Ham") : console.log("Time Machine");

(age >= 10) ? console.log("Time Machine") : console.log("Green Eggs and Ham");

//Save the book name to a variable

var book;

book = (age < 10) ? "Green Eggs and Ham" : "Time Machine";

console.log("Your kid gets the book " + book + ".");

if (age < 10){
  book = "Green Eggs and Ham";
}
else{
  book = "Time Machine";
}

console.log("Your kid gets the book " + book + ", in the form of an IF statement.");
