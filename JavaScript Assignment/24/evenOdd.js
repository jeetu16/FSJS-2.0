/* 
24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
*/

// Answer: 

let even = [];
let odd = [];

for(let i = 0; i<=100; i++){
    if(i&1){
        odd.push(i);
    }
    else{
        even.push(i);
    }
}
console.log("Even Numbers are: ",even);
console.log("Odd Numbers are: ",odd);