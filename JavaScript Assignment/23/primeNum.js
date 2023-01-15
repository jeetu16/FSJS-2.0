

let num = Number(prompt("Enter a number :"));
let flag = false;

// method 1
// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         flag = true
//         break;
//     }
// }

//method 2 
// for (let index = 2; index < Math.floor(num / 2); index++) {
//     if (num % index == 0) {
//         flag = true;
//         break;
//     }
// }

//method 3 
for (let index = 2; index < Math.floor(Math.sqrt(num)); index++) {
    if (num % index == 0) {
        flag = true;
        break;
    }
}
if (flag) {
    document.write(`${num} is not a prime number`);
}
else {
    document.write(`${num} is a prime number`);
}

