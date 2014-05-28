/***************************
Cory Wilson
WPF Section 1
05/23/14
Functions Assignment - Wacky
***************************/

//Fifa World Cup Question
//Group Stage Thingy

//4 Teams
//3 Matches

//function win - 3 points
//function draw - 1 point
//function loss - 0 points
function win(){
  var result = 3;
  return result;
}

function draw(){
  var result = 1;
  return result;
}

function loss(){
  var result = 0;
  return result;
}

alert("Let's figure out how the group stage of the world cup ended up.");

//team enters win -> pull win function -> adds to total
//team enters draw -> pull draw function -> adds to total
//team enters loss -> pull loss function -> adds to total

var teamOneName = prompt("What country is the first team?");
while(teamOneName===""){
  var teamOneName = prompt("Make sure to enter a team name!");
}
var teamTwoName = prompt("What country is the second team?");
while(teamTwoName===""){
  var teamTwoName = prompt("Make sure to enter a team name!");
}
var teamThreeName = prompt("What country is the third team?");
while(teamThreeName===""){
  var teamThreeName = prompt("Make sure to enter a team name!");
}
var teamFourName = prompt("What country is the fourth team?");
while(teamFourName===""){
  var teamFourName = prompt("Make sure to enter a team name!");
}


/********
Team One!
********/
var teamOnePoints = 0;
//Loop that runs 3 times, asking once for each individal match played by the team.
for(var i = 0; i < 3; i++){

var teamOne = prompt("Did team "+teamOneName+" win, draw, or lose the match?");
while(teamOne===""){
  var teamOne = prompt("Make sure to enter a result!");
}
//compare results to win, draw, or loss
//provide corresponding points value through use of function call
if(teamOne === "win"){
  var points = win();
}  else if(teamOne === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
//add points from win to total points value
teamOnePoints += points;

}

var teamOneArray = [teamOneName, teamOnePoints];

//call out total points value and team name points value
console.log(teamOneArray[0]+" finished the group stage with a total of "+teamOneArray[1]+" points.");

/********
Team Two!
********/
var teamTwoPoints = 0;
//Loop that runs 3 times, asking once for each individal match played by the team.
for(var j = 0; j < 3; j++){

var teamTwo = prompt("Did team "+teamTwoName+" win, draw, or lose the match?");
while(teamTwo===""){
  var teamTwo = prompt("Make sure to enter a result!");
}
//compare results to win, draw, or loss
//provide corresponding points value through use of function call
if(teamTwo === "win"){
  var points = win();
}  else if(teamTwo === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
//add points from win to total points value
teamTwoPoints += points;

}

var teamTwoArray = [teamTwoName, teamTwoPoints];

//call out total points value and team name points value
console.log(teamTwoArray[0]+" finished the group stage with a total of "+teamTwoArray[1]+" points.");
/**********
Team Three!
**********/
var teamThreePoints = 0;

//Loop that runs 3 times, asking once for each individal match played by the team.
for(var l = 0; l < 3; l++){

var teamThree = prompt("Did team "+teamThreeName+"  win, draw, or lose the match?");
while(teamThree===""){
  var teamThree = prompt("Make sure to enter a result!");
}
//compare results to win, draw, or loss
//provide corresponding points value through use of function call
if(teamThree === "win"){
  var points = win();
}  else if(teamThree === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
//add points from win to total points value
teamThreePoints += points;

}

var teamThreeArray = [teamThreeName, teamThreePoints];

//call out total points value and team name points value
console.log(teamThreeArray[0]+" finished the group stage with a total of "+teamThreeArray[1]+" points.");
/*********
Team Four!
*********/
var teamFourPoints = 0;

//Loop that runs 3 times, asking once for each individal match played by the team.
for(var k = 0; k < 3; k++){

var teamFour = prompt("Did team "+teamFourName+" win, draw, or lose the match?");
while(teamFour===""){
  var teamFour = prompt("Make sure to enter a result!");
}
//compare results to win, draw, or loss
//provide corresponding points value through use of function call
if(teamFour === "win"){
  var points = win();
}  else if(teamFour === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
//add points from win to total points value
teamFourPoints += points;

}

var teamFourArray = [teamFourName, teamFourPoints];

//call out total points value and team name points value
console.log(teamFourArray[0]+" finished the group stage with a total of "+teamFourArray[1]+" points.");

var teamResultsArray = [teamOneArray[1], teamTwoArray[1], teamThreeArray[1], teamFourArray[1]];
var teamNamesArray = [teamOneArray[0], teamTwoArray[0], teamThreeArray[0], teamFourArray[0]];


//find the team with the most points by finding the max value in the array.
var groupWinner = Math.max.apply(Math,teamResultsArray);
console.log("The team that won the group ended up with "+groupWinner+" points.");
