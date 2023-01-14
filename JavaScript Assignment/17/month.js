/*
17. Write a program which tells the number of days in a month.
*/

// Answer :

let takeDate = prompt("Enter the year and month (YYYY,MM)");
let splitDate = takeDate.split(',');

let year = Number(splitDate[0]);
let month = Number(splitDate[1]);

/* Month in JavaScript is 0-indexed (January is 0, February is 1, etc), but by using 0 as the day it will give us the last day of the prior month. So passing in 1 as the month number will return the last day of January, not February
*/
let dte = new Date(year, month,0);
let numOfDays = dte.getDate();

document.write("Number of days in " + month + "," + year + " is: ", numOfDays);