/**************
WPF Section 1
05/23/14
Day 9 Anonymous
**************/

//Anonymous Functions are SUPER important in Object Oriented Programming
//Extremely popular in jQuery
//Both Regular and Anonymous function will both work for you
//Very quick and easy

//Basic Function Structure
function functionName(){

}

//Basic Anonymous Function Structure
var functionName2 = function(){
  //Code to run
}

//This code still needs a function call to run.
//MUST declare an anonymous function BEFORE calling it!
functionName2();

//Normal Function that calculates the area of a triangle
function triangleArea(b,h){
	//Area of triangle = .5 * base * height
	var area = .5 * b * h;
	return area;
}

//Create a variable to catch the return area
var triArea = triangleArea(5,6);
console.log(triArea);

//Make an Anonymous Version of the same function
var triangleArea2 = function(b,h){
	var area = .5 * b * h;
	return area;
}

//Function call to Anonymous Function

//Create a variable to catch the return
var triArea2 = triangleArea2(7,8);
console.log(triArea2);
