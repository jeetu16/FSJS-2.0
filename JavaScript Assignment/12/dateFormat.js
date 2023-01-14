/*
12. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
*/

// Answer:

let curDate = new Date(); // returns current date as set as your device

let year = curDate.getFullYear(); // returns current year as stored in curDate object
let month = curDate.getMonth()+1; // returns current month as stored in curDate object
let date = curDate.getDate(); // returns current date as stored in curDate object
let hour = curDate.getHours() // returns current hours as stored in curDate object
let min = curDate.getMinutes() // returns current minutes as stored in curDate object

let dateFormat1 = year + "-" + month + "-" + date + " " + hour + ":" + min;
let dateFormat2 = date + "-" + month + "-" + year + " " + hour + ":" + min;
let dateFormat3 = date + "/" + month + "/" + year + " " + hour + ":" + min;

console.log("Date Format 1: ",dateFormat1);
console.log("Date Format 2: ",dateFormat2);
console.log("Date Format 3: ",dateFormat3);