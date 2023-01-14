/*
15. Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/

// Answer :

let marks = Number(prompt("Enter your marks: "));

//console.log(typeof marks);


if (marks >= 80 && marks <= 100) {
    document.write("<h1> Your Grade is A </h1>");
}
else if (marks >= 70 && marks <= 79) {
    document.write("<h1> Your Grade is B </h1>");
}
else if (marks >= 60 && marks <= 69) {
    document.write("<h1> Your Grade is C </h1>");
}
else if (marks >= 50 && marks <= 59) {
    document.write("<h1> Your Grade is D </h1>");
}
else if (marks >= 0 && marks <= 49) {
    document.write("<h1> Your Grade is F </h1>");
}
else {
    document.write("<h1> Invalid Data </h1>");
}