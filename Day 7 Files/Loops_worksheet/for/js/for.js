/***************************************
Cory Wilson
WPF Section 1
05/19/14
Day 7 For Loops
***************************************/

//For Loop
//for(initialization; condition to test; change variable){}


//I want to multiply something X amount of times times
//Let's multiply something 5 times
//Value of Number 1



var amount = Number(prompt("How many times do you want to multiply the whole thing?"));
while(isNaN(amount) || amount===""){
  //Its a text string, prompt again for a number
  amount = Number(prompt("Please type in a NUMBER!"));
}

var num1 = Number(prompt("What is your first number?"));
//Validate prompt
while(isNaN(num1) || num1===""){
  //Its a text string, prompt again for a number
  num1 = Number(prompt("Please type in a NUMBER!"));
}

//Value of Number 2
var num2 = Number(prompt("What is your second number?"));
//Validate prompt
while(isNaN(num2) || num2===""){
  //Its a text string, prompt again for a number
  num2 = Number(prompt("Please type in a NUMBER!"));
}

//run this multiplacation problem AMOUNT times
for(var i = 0; i < amount; i++){
    var multNum = num1 *= num2;
    if(i===0){
      console.log("Number is "+multNum+" after "+(i+1)+" iteration.");
    }
    else{
    console.log("Number is "+multNum+" after "+(i+1)+" iterations.");
  }
}
