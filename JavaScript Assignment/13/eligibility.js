/*
13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
*/

// Answer :

let age = prompt("Enter Your Age"); // taking input from browser

if(age>=18) {
    alert('You are old enough to drive'); // displaying message on browser
}
else{
    alert(`Wait for ${18 - age} year When you become adult`); // displaying message on browser
}