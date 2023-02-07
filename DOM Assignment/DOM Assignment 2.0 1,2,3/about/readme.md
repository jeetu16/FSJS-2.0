# Second Assignment Solution

## Task 1

Add background color of all heading in about page.

![Task 1](../secondAssignmentImage/task1Output.png)

- ## Task 1 Solution

```js
let headings = document.querySelectorAll("h3");
for(let i=0; i < headings.length; i++) {
  headings[i].style.backgroundColor = "#DADAF8";
}
```

## Task 2

Add an element 'Skills' after 'Hobbies'

![Task 2](../secondAssignmentImage/task2Output.png)

- ## Task 2 Solution

```js
let wrapper_main = document.querySelector(".accordian-wrapper");

let div = document.createElement("div");
let h3 = document.createElement("h3");
let p = document.createElement('p');

div.classList.add('accordian');

h3.textContent = "Skills";
p.textContent = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";

div.appendChild(h3);
div.appendChild(p);
wrapper_main.appendChild(div);
```