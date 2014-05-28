/***************************************
Cory Wilson
WPF Section 1
05/19/14
Day 7 For Loops Examples
***************************************/

//Basic For Loop

//for(initialization; condition to test; change variable){}
//for(i = whatever; i < something; i++){}

for(var i = 1; i <= 20; i += 4){
  console.log("i = " + i + ".");
}

//Breaks
//break - stops the loop anywhere it is

for(var k = 0; k < 5; k --){
  console.log("k = " + k + ".");
  if(k === 3){
    console.log("Your number is 3");
  }
  else if(k === 4){
    console.log("Your number is 4.");
  }

  if(k === -100){
    console.log("Your number is crazy stop it.");
    break;
  }
}
