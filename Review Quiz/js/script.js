/************
Cory Wilson
WPF Section 1
5/28/14
Review Quiz
************/

//prompt for radius of a circle
var radiusInput = Number(prompt("What is the radius of a circle?"));
//validate the prompt is in face a number and not left blank
while (isNaN(radiusInput) || radiusInput === ""){
    //re-prompt the user to type in a number
    radiusInput = Number(prompt("Please input a NUMBER for the radius!"));
}
//create a function that will calculate the area of a circle
//(2*r*PI)
//radius(r) is the parameter
function areaCircle(r){
    var area = 2*r*Math.PI;
    //area is returned value
    return area;
}

//create a function call
var result = areaCircle(radiusInput);
//Console Log result
console.log("The area of the circle with a radius of "+radiusInput+" is "+result+".");
