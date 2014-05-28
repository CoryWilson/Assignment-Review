/********************
Cory Wilson
WPF Section 1
05/23/14
Day 9 Advanced Arrays
********************/

//Create an array of Fruit
var fruitArray = ["banana", "pear", "peach", "mango"];
console.log(fruitArray);

//Total number of items in the array
console.log(fruitArray.length);

//Last item in array is length -1
console.log(fruitArray[fruitArray.length-1]);

//Add an item to the END of the array
//push() function - code that adds whatever is inside of the () to the end of the array
//PUSH an apple into the array
fruitArray.push("apple");
console.log(fruitArray);

//Add a tomato
fruitArray.push("tomato");
console.log(fruitArray);

//Quick way to REMOVE the LAST item in the array
//pop() - NOTHING goes inside of the ()
fruitArray.pop();
console.log(fruitArray);

//pop() can also RETURN that item it removes
//Create a variable to CATCH that RETURNED item
var caught = fruitArray.pop();
console.log(fruitArray);
console.log(caught);
