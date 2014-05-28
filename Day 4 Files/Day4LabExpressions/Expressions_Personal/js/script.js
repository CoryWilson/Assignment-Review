/*
Cory Wilson
WPF Section 1
05/12/14
Day 4 Expressions Assignment - Personal
*/


//Personal Example

//How many gallons of gas will be needed in order to successfully commute to and from school in a month's time?

//Givens:
//Average MPG of Car
//Mileage of Commute
//Amount of times travelled in a Month

//Type of car you drive
var carType = prompt("What type of car do you drive?");
console.log(carType);

//Average MPG for car
var mpg = prompt("Enter the average MPG of your Car:");
console.log(mpg);

//Roundtrip mileage of your daily commute
var commuteMileage = prompt("Enter the roundtrip mileage of your daily commute:");
console.log(commuteMileage);

//Number of times commuting in a month's time
var timesTravelled = prompt("Enter the number of times you commute during a month's time:");
console.log(timesTravelled);

//Gallons used per commute
var commuteMpg = Number(commuteMileage) / Number(mpg);
console.log(commuteMpg);

//Total gallons used in a month
var gallonsUsed = Number(timesTravelled) * commuteMpg;
console.log(gallonsUsed);

//Concatinated answer that explains in more detail.
console.log("Your " + carType + " averages around " + mpg + " mpg. Your daily commute is " + commuteMileage + " miles. You commute " + timesTravelled + " times a month. That means you use " + commuteMpg + " gallons per commute. This means you use " + gallonsUsed + " gallons of gas per month on your commute.");

//Concatinated answer that explains in more detail in the form of a popup.
alert("Your " + carType + " averages around " + mpg + " mpg. Your daily commute is " + commuteMileage + " miles. You commute " + timesTravelled + " times a month. That means you use " + commuteMpg + " gallons per commute. This means you use " + gallonsUsed + " gallons of gas per month on your commute.");
