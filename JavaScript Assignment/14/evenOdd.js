/*
14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.
*/

// Answer :

let num = prompt("Enter a number");

/*
 & operator works on bits for example 
            5 - 1 0 1
            4 - 1 0 0
    ans:    5 - 1 0 0
*/

if(num&1){
    alert(`${num} is Odd Number`);
}
else{
    alert(`${num} is Even Numbers`);
}