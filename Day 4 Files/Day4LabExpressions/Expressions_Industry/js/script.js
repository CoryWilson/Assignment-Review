/*
Cory Wilson
WPF Section 1
05/12/14
Day 4 Expressions Assignment - Industry
*/

//Industry Example

//How much do you make average from the different types of work during the course of one week?

//Givens:
//Freelance Website Design @ $20/hr
//Legacy Code Maintenance @ $40/hr
//Application Design @ $50/hr

//Ask about Freelance Website Design hours
var webDesignHrs = Number(prompt("How many hours did you work performing Freelance Website Design/Development in one week's time?"));
//Validate
while(isNaN(webDesignHrs) || webDesignHrs===""){
  webDesignHrs = Number(prompt("Please provide a NUMBER for your hours!"));
}

//Ask about Legacy Code Maintenance hours
var codeMaintenanceHrs = Number(prompt("How many hours did you spend performing Legacy Code Maintenance in one week's time?"));
//Validate
while(isNaN(codeMaintenanceHrs) || codeMaintenanceHrs===""){
  codeMaintenanceHrs = Number(prompt("Please provide a NUMBER for your hours!"));
}

//Ask about Application Design hours
var appDesignHrs = Number(prompt("How many hours did you spend designing new Web Applications in one week's time"));
//Validate
while(isNaN(appDesignHrs) || appDesignHrs===""){
  appDesignHrs = Number(prompt("Please provide a NUMBER for your hours!"));
}

//Pay Rates for each respective type of work
var webDesignRate = Number(prompt("How many do you charge per hour for Freelance Website Design/Development?"));
//Validate
while(isNaN(webDesignRate) || webDesignRate===""){
  webDesignRate = Number(prompt("Please provide a NUMBER for your rate!"));
}
var codeMaintenanceRate = Number(prompt("How many do you charge per hour for Legacy Code Maintenance?"));
//Validate
while(isNaN(codeMaintenanceRate) || codeMaintenanceRate===""){
  codeMaintenanceRate = Number(prompt("Please provide a NUMBER for your rate!"));
}
var appDesignRate = Number(prompt("How many do you charge per hour for designing new Web Applications?"));
//Validate
while(isNaN(appDesignRate) || appDesignRate===""){
  appDesignRate = Number(prompt("Please provide a NUMBER for your rate!"));
}

//Total Income earned from each respective type of work
//var webDesignTotal = webDesignHrs * webDesignRate;
//var codeMaintenanceTotal = codeMaintenanceHrs * codeMaintenanceRate;
//var appDesignTotal = appDesignHrs * appDesignRate;

var totalTool = function(h,r){
  total = h*r;
  return total;
}

var webTotal = totalTool(webDesignHrs,webDesignRate);
var mainTotal = totalTool(codeMaintenanceHrs,codeMaintenanceRate);
var appTotal = totalTool(appDesignHrs,appDesignRate);

var totalIncome = function(w,m,a){
    total = w+m+a;
    return total;
}

var absoluteTotal = totalIncome(webTotal,mainTotal,appTotal);
console.log(absoluteTotal);

var averagePerJob = function(t){
  avg = t/3;
  return avg;
}
var average = averagePerJob(absoluteTotal);
var avg = average.toFixed(2);
/*
//Total Income earned from all types of work
var averageTotal = webDesignTotal + codeMaintenanceTotal + appDesignTotal;

//Average Income of all three types of work combined
var averagePR = averageTotal/3;
*/
console.log("In a week, you make a total of $"+absoluteTotal+". And you make an average of $"+avg+" combined between the three different types of work in a week's time.");
