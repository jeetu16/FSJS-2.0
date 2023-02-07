// Third Assignment Solution

// User Input Board
let userName = document.querySelector(".userName");
let userEmail = document.querySelector(".userEmail");
let userMessage = document.querySelector(".userMessage");

userName.value = 'FSJS 2.0';
userEmail.value = 'fsjs@ineuron.ai'
userMessage.value = "Hello World";


// User Output Board

let formLeft = document.querySelector('.mainLeftDetails');

let leftName = formLeft.firstElementChild;
let leftEmail = formLeft.firstElementChild.nextElementSibling;
let leftMessage = formLeft.lastElementChild.previousElementSibling;


leftName.value = userName.value;
leftEmail.value = userEmail.value;
leftMessage.value = userMessage.value;