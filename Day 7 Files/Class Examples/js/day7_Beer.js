/***************************************
Cory Wilson
WPF Section 1
05/19/14
Day 7 Beer!
***************************************/

//Create the 99 bottles of beer on the wall song

//NO Loop

/*****************************************************************
console.log("99 bottles of beer on the wall. 99 bottles of beer. \nYou take one down, you pass it around. 98 bottles of beer on the wall.");
console.log("98 bottles of beer on the wall. 98 bottles of beer. \nYou take one down, you pass it around. 97 bottles of beer on the wall.");
******************************************************************/
//...Continued

//Loop Method

// for(variable; condition; increment){}

for(i=99;i>0;i--){

  if(i===1){
    console.log(i+" bottle of beer on the wall. "+i+" bottle of beer. \nYou take one down, you pass it around. No more bottles of beer on the wall. \nThe End!");
  }
  else{
    console.log(i+" bottles of beer on the wall. "+i+" bottles of beer. \nYou take one down, you pass it around. "+(i-1)+" bottles of beer on the wall.");
  }
}
