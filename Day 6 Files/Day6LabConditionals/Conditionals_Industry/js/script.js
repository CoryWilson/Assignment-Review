/***************************************
Cory Wilson
WPF Section 1
05/16/14
Day 6 Conditionals Assignment - Industry
***************************************/

//Industry Example

//Determine which text editor is the best option for you?

//You told us not to worry about validation :P

//Givens:
//Does it support basic text editing?
var textEdit = prompt("Does the text editor allow for basic text editing? True or False?");
//Is it customizable?
var custom = prompt("Does the text editor allow for customization of the program? True or False?");

//If both textEdit and custom are true then print this
if(textEdit === "true" && custom === "true"){
  console.log("This browser has both basic text editing capability and is fully functional. You should use it!");
}
//Else if textEdit or custom are true then print this
else if(textEdit === "true" || custom === "true"){
  console.log("This is a decent text editor. It may be missing some necessary features.");
}
//Else print this
else{
  console.log("Don't bother using this text editor.");
}
