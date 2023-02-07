# First Assignment Solution

## Task 1

Add new list item at the last of the nav list

![Task 1](./firstAssignmentImage/task1Output.png)

- ## Task 1 Solution
```js
let nav_list = document.querySelector(".nav-list");

let li = document.createElement('li');
let a = document.createElement('a');

a.setAttribute('href','#')
a.innerHTML = "Hire Me";

li.appendChild(a);
nav_list.appendChild(li);
```

## Task 2

Remove Social Media Icons from the footer and add placeholder in search box

![Task1](./firstAssignmentImage/task2Output.png)

- ## Task 2 Solution

```js
let search_div = document.querySelector('.search-field');
let input_box = search_div.firstElementChild;
// input_box.setAttribute('placeholder','search My Project');
input_box.placeholder = "search My Project";

let logos = document.querySelector(".logos");
logos.style.display = "none";
let footer = document.querySelector("footer");
footer.style.display = 'block';
footer.style.width = "60%";
footer.style.marginLeft = 'auto';
footer.style.marginRight = 'auto';

```

 ## Task 3

Change the Text of about section
![Task 3](./firstAssignmentImage/task3Output.png)

- ## Task 3 Solution

```js
let about = document.querySelector(".about-txt");

about.innerHTML = "I am an aspiring <span>Full Stack JavaScript Developer</span>, <br/> who is currently working as <span>an Employee</span > for <br /> <span>iNeuron Intelligence Pvt Ltd.</span>."
```

## Task 4

Add the profile picture.
![Task 4](./firstAssignmentImage/task4Output.png)

- ## Task 4 Solution
```js
let profile_img = document.querySelector(".profile-img");

profile_img.src = "firstAssignmentImage/timothy-dykes-yd4ubMUNTG0-unsplash.jpg";
profile_img.style.width = "60%";
```

## Task 5 

Add 'support me' button just after 'chat with me' button.
![Task 5](./firstAssignmentImage/task5Output.png)

- ## Task 5 Solution
```js
let btn_container = document.querySelector(".hero-right-section-btns");
let btn = document.createElement("button");
let txt = document.createTextNode("Support me");

btn.appendChild(txt);
btn_container.appendChild(btn);
```


