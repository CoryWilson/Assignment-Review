/*********************
Cory Wilson
WPF Section 1
05/21/14
Day 8 Returning Values
**********************/

//Returning a value from a function

function calcArea(w,h){
  //Calculate area
  var area = w*h;
  console.log(area);

  //Return the area to the main code
  return area;
}

//Call the function
calcArea(30,20);

//This will not work!!!
//console.log(area);

//Catch the returned value from the function
//Create a variable to hold the results
var returnArea = calcArea(10,20);
console.log("Outside of Function "+returnArea);


function circleArea(radius){

  //area of circle 2*pi@radius
  var area = 2*Math.PI*radius;

  //return this value
  return area;
}

//Find the area of a circle and then multiply times 2.
var result = circleArea(4);
result*=2;
console.log("The area of a circle times 2 is "+result+".");

//Find the area of a circle and multiply it by 3
var result2 = circleArea(5);
result2*=3;
console.log("The area of a circle multiplied times 3 is "+result2+".");
