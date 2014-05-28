/***********************
Cory Wilson
WPF Section 1
05/23/14
Day 9 Multiple Functions
***********************/

//Prompt the user for width and height
var width = Number(prompt("What is the width of the rectangle?"));
//Validate the prompt
while(isNaN(width) || width===""){
  //Its a text string, prompt again for a number
  width = Number(prompt("Please type in a NUMBER for width!"));
}

/*
var height = Number(prompt("What is the height of the rectangle?"));
//Validate the prompt
while(isNaN(height) || height===""){
  //Its a text string, prompt again for a number
  height = Number(prompt("Please type in a NUMBER for height!"));
}
*/

do{
  var height = prompt("What is the height of the rectangle?");
} while(isNaN(height) || height === "");

//Create a function to call the area
var area = areaRect(width,height);
console.log("The area of the rectangle is "+area+".");

//Create a function call to perimeter
//Create a variable to CATCH the return value
var perimeter = perimeterRect(width,height);
console.log("The perimeter of the rectangle is "+perimeter+".");

//Final console.log
console.log("A rectangle with a width of "+width+" and a height of "+height+" has a perimeter of "+perimeter+" and an area of "+area+".");
alert("A rectangle with a width of "+width+" and a height of "+height+" has a perimeter of "+perimeter+" and an area of "+area+".");


//Create a function to find the perimeter of a rectangle
function perimeterRect(w,h){
  //Perimeter of rectangle is
  //2*width + 2*height
  var p = 2*w + 2*h;
  //Return the perimeter
  return p;
}

function areaRect(w,h){
  //Area = width * height
  var a = w*h;
  //Return the area
  return a;
}
