# DOM Assignment 6 Solution

## Task 1

![Task 1](./Output/DOM%20P3%20SS-1.png)

- ## Solution

```js
// getting logo img
let logo = document.querySelector('.logo');

// changing logo img source path
logo.src = './assets/ineuron-logo.png'
logo.style.width = '20%';
```

## Task 2

![Task 2](./Output/DOM%20P3%20SS-2.png)


- ## Solution

```js
//----------------changing price---------------------

let app_price = document.querySelector(".app_price");

// getting price element using their parent element

let getPrice = app_price.firstElementChild;
getPrice.innerHTML = '$10';


//------------------ adding linkedin icon in footer----------

// getting parent element

let footer_social = document.querySelector('.footer_social');

// creating elements

let div = document.createElement('div');
div.className = 'footer_social_ico';

let i = document.createElement('i');
i.className = "fa-brands fa-linkedin";

// appending child elements to their respected parent elements

div.appendChild(i);
footer_social.appendChild(div);
```