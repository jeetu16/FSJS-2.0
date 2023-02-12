# Fourth Assignment Solution

## Task

![Task](./04_DOM%20Project/Output/DOM%20P1%20SS.png)

- ## Task Solution

```js
//Fourth Assignment Solution

let main_container = document.querySelector(".slide-container");
let wrapper = document.querySelector(".wrapper");

main_container.style.flexWrap = 'nowrap';

// Change color

let cards = document.querySelectorAll(".clash-card__unit-stats");

for(let i = 0; i < cards.length; i++ ){

    cards[i].style.color = '#ffffff';

    // getting first child element of .clash-card__unit-stats class
    let firstChild = cards[i].firstElementChild;

    // getting second child element of .clash-card__unit-stats class
    let secondChild = firstChild.nextElementSibling;

    // getting third child element of  .clash-card__unit-stats class
    let thirdChild = secondChild.nextElementSibling;

    // getting the background color for clash-card__unit-stats class
    let backColor = window.getComputedStyle(firstChild).getPropertyValue("border-right-color");

    // changing the background of clash-card__unit-stats class
    cards[i].style.backgroundColor = backColor;
    
    firstChild.style.borderRightColor = 'whitesmoke';

    secondChild.style.borderRightColor = 'whitesmoke';

    thirdChild.style.color = "#ffffff";
}

// getting archer class
let archer = document.querySelector('.archer');

// getting third element child of archer class
let archerThirdChild = archer.firstElementChild.nextElementSibling.nextElementSibling
archerThirdChild.innerHTML = "The Archer";

// getting goblin class
let goblin = document.querySelector(".goblin");

// getting third element child of goblin class
let goblinThirdChild = goblin.firstElementChild.nextElementSibling.nextElementSibling
goblinThirdChild.innerHTML = "The Goblin";
```