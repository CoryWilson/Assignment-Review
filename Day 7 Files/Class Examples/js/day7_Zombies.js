/***************************************
Cory Wilson
WPF Section 1
05/19/14
Day 7 Zombies!
***************************************/

//Zombies Madness!!
//We have a zombie at Full Sail
//Zombie can bite 4 people a day and turn them into zombies

//The CDC wants to know how many zombies there will be in eight days if not contained.

//Create givens
var numZombies = 1; //How many zombies do we have?
var numBites = 4; //# of bites per zombie per day
var days = 9; //# of days

//for loop
/*
for(var i = 1; i <= days; i++){
    //How many new zombies get made every day
    //When do they actually bite new people

    var newZombies = numZombies * numBites;

    //Add the new zombies to the total number of zombies
    numZombies += newZombies; //numZombies  = numZombies + newZombies
    console.log("There are "+numZombies+" zombies at the end of day #"+i+".");
}
*/

var numDays = 0;

while(numZombies < 7000000000){

  numDays++;

  var newZombies = numZombies * numBites;

  //Add the new zombies to the total number of zombies
  numZombies += newZombies; //numZombies  = numZombies + newZombies
  console.log("There are "+numZombies+" zombies at the end of day #"+numDays+".");

}

console.log("It will take "+numDays+" for zombies to take over the world.");
