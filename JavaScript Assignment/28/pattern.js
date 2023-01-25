/*
28. Create the below Patterns
1.  *
    **
    ***

2. ***
   ***
   ***

3.     *
      ***
     *****
    *******

*/

// Answer:

let ele1 = document.querySelector("#pattern1");
let ele2 = document.querySelector("#pattern2");
let ele3 = document.querySelector("#pattern3");
let ele4 = document.querySelector("#pattern4");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= i; j++) {
        ele1.innerHTML += "*";
    }
    ele1.innerHTML += "<br>";
}

for (let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++ ) {
        ele2.innerHTML += "*";
    }
    ele2.innerHTML += "<br>";
}

for (let i = 0; i < 4; i++) {
    for(let j = 0; j <= 7; j++) {
        if(j >= 4-i && j <= 4+i) {
            ele3.innerHTML += "*";
        }
        else {
            ele3.innerHTML += " "
        }
    }
    ele3.innerHTML += "<br>"
}

for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= 7; j++) {
        if (j >= i && j <= 6 - i) {
            ele4.innerHTML += "*";
        }
        else {
            ele4.innerHTML += " "
        }
    }
    ele4.innerHTML += "<br>"
}


