/*
19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js
*/

// Answer :

// here we are importing the array variables from web_techs.js and countries.js using require() method

let web = require('./web_techs.js');
let country = require('./countries.js');

console.log('All Countries Names are :',country);
console.log('All Web Technologies names are :',web);