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
var webDesignHrs = prompt("How many hours did you work performing Freelance Website Design/Development at $20/hr in one week's time?");
//Convert from string to number
Number(webDesignHrs);

//Ask about Legacy Code Maintenance hours
var codeMaintenanceHrs = prompt("How many hours did you spend performing Legacy Code Maintenance at $40/hr? in one week's time");
//Convert from string to number
Number(codeMaintenanceHrs);

//Ask about Application Design hours
var appDesignHrs = prompt("How many hours did you spend designing new Web Applications at $50/hr? in one week's time");
//Convert from string to number
Number(appDesignHrs);

//Pay Rates for each respective type of work
var webDesignRate = 20;
var codeMaintenanceRate = 40;
var appDesignRate = 50;

//Total Income earned from each respective type of work
var webDesignTotal = webDesignHrs * webDesignRate;
var codeMaintenanceTotal = codeMaintenanceHrs * codeMaintenanceRate;
var appDesignTotal = appDesignHrs * appDesignRate;

//Total Income earned from all types of work
var averageTotal = webDesignTotal + codeMaintenanceTotal + appDesignTotal;

//Average Income of all three types of work combined
var averagePR = averageTotal/3;

console.log("In a week, you make a total of $" + averageTotal + ". And you make an average of $" + averagePR + " combined between the three different types of work in a week's time.");
