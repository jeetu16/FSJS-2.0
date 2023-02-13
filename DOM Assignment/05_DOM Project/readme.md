# DOM Assignment 5 Solution

## Task 

![Task](./Output/DOM%20P2%20SS.png)

- ## Solution

```js
// Fifth Assignment Solution


// --------- adding button into navbar------------

let nav_center = document.querySelector(".nav-center");
let lastElement = nav_center.lastElementChild;

// creating elements a tag
let a = document.createElement('a');
a.textContent = "Pro Subscription";
a.classList.add('btn');
a.setAttribute('href','index.html');

// adding child element to the parent element
lastElement.appendChild(a);


//-------------adding recipe list items into recipe list-----------

let tags_container = document.querySelector(".tags-container");
let tags_container_lastElement = tags_container.lastElementChild;

// creating a tag
let anchor = document.createElement("a");
anchor.setAttribute('href','#');
anchor.textContent = 'Chinese (7)';

tags_container_lastElement.appendChild(anchor);


//------------- adding card into recipe-gallery--------------


let recipe_gallery = document.querySelector(".recipe-gallery");

// creating different tags

let div = document.createElement('div');
div.classList.add('card');

let a2 = document.createElement('a');
a2.classList.add('recipe-text');
a2.setAttribute('href','#');

let img = document.createElement('img');
img.setAttribute('class','recipe-img ');
img.setAttribute('src','./img/recipe-6.jpg')

let h5 = document.createElement('h5');
h5.classList.add('recipe-name');
h5.textContent = 'New Recipe'

let p = document.createElement('p');
p.classList.add('recipe-disp');
p.textContent = "Prep : 10min | Cook : 10min";

// adding all the child elements to their repected parents

a2.appendChild(img);
a2.appendChild(h5);
a2.appendChild(p);

div.appendChild(a2);

recipe_gallery.appendChild(div);
```