/*
30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.
*/

// Answer :

let operation = prompt("Which Operation do you want to perform ? (e.g, +,-,*,/)");
let first = Number(prompt("Enter first number"));
let second = Number(prompt("Enter second number"));

switch (operation[0]) {
    case '+':
        document.write(`<h2>Addition of ${first} and ${second} is: ${first + second}</h2>`);
        break;
    case '-':
        document.write(`<h2>Subtraction of ${first} and ${second} is: ${first - second}</h2>`);
        break;
    case '*':
        document.write(`<h2>Multiplication of ${first} and ${second} is: ${first * second}</h2>`);
        break;
    case '/':
        document.write(`<h2>Division of ${first} by ${second} is: ${first / second}</h2>`);
        break;
    default:
        document.write(`<h2>Invalid Operation</h2>`)
}