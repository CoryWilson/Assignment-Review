/***************************************
Cory Wilson
WPF Section 1
05/16/14
Day 6 Conditionals Assignment - Personal
***************************************/

//Personal Example

//You told us not to worry about validation :P

//utilize a ternary in here somewhere


//Did you break par in your round of golf?

//Givens:
//Par for the golf course
//Score shot for your round


//need two givens at least
var coursePar = Number(prompt("What is the par for the golf course?"));
var scoreShot = Number(prompt("What did you shoot for your round today?"));

//If you shoot below par, then you have succeeded
//If you shoot over par, you have some work to do
var parOrNot = (scoreShot < coursePar) ? "Congrats! Par for the golf course was " + coursePar +" and you have shot " + scoreShot + ". Excellent round." : "Sorry, you shot " + scoreShot + ", which is over par. Par for the course was " + coursePar + ". Go practice some more.";

console.log(parOrNot);

/*
Additional way to work this conditional.
//If you shoot below par, then you have succeeded
if(scoreShot < coursePar){
  console.log("Congrats! Par for the golf course was " + coursePar +" and you have shot " + scoreShot + ". Excellent round.");
}
//If you shoot over par, you have some work to do
else{
  console.log("Sorry, you shot " + scoreShot + ", which is over par. Par for the course was " + coursePar + ". Go practice some more.");
}
*/
