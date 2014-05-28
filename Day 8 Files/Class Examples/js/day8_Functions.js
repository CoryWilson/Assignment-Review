/***************************************
Cory Wilson
WPF Section 1
05/21/14
Day 8 Functions
***************************************/

//Basic Function
//function functionName(){}

//Create a function that console.log hello
function printHello(){
  console.log("Hello!");
}

//Create a function that console.log "prints out more"
function printMore(){
  console.log("Prints out more text.");
}

//Function Call our printHello function
//"Go Button"

//functionName()
printHello(); //Function Call or Invocation
printMore();
printHello();
printMore();

//Function Call calcArea
calcArea();

//Create a function that calculates the area of a rectangle
function calcArea(){
  //Create variables for width, height, and area
  var width = 20;
  var height = 30;
  var area = width * height;
  //Print out the area
  console.log("Area of the rectangle is "+area+".");
}
