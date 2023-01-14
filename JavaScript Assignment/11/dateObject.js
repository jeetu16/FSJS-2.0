/*
Q.11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

// Answer:

let date = new Date();

let currentYear = date.getFullYear(); // return year from date object
let currentMonth = date.getMonth()+1; // return month(0(Jan) to 11(Dec)) from date object
let currentDate = date.getDate(); // return date(like 16) from date object
let currentDay = date.getDay(); // return day(0(Sun) to 1(Sat)) 
let currentHour = date.getHours(); // return hours(0 to 23) from date object
let currentMinute = date.getMinutes(); // return minutes(0 to 59) from date object


console.log("Current Year:",currentYear);
console.log("Current Month:",currentMonth);
console.log("Current Date:",currentDate);
console.log("Current Day:",currentDay);
console.log("Current Hour:",currentHour);
console.log("Current Minunte:",currentMinute);

// method 1 

let pastDate = new Date(1970,0);
let curDate = new Date();
// subtraction result will give miliseconds value
let numOfSec = Math.floor((curDate - pastDate)/1000); 

// method 2
// getTime() returns miliseconds value from 1970 to now
let numOfSec2 = Math.floor(curDate.getTime()/1000);

console.log(`Total the numbers of seconds elapsed from January 1, 1970 to now is :`,numOfSec);