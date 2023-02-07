// First Assignment Solution


// Task 1

let nav_list = document.querySelector(".nav-list");
let li = document.createElement('li');
let a = document.createElement('a');

a.setAttribute('href','#')
a.innerHTML = "Hire Me";

li.appendChild(a);
nav_list.appendChild(li);



// Task 2

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


// Task 3

let about = document.querySelector(".about-txt");

about.innerHTML = "I am an aspiring <span>Full Stack JavaScript Developer</span>, <br/> who is currently working as <span>an Employee</span > for <br /> <span>iNeuron Intelligence Pvt Ltd.</span>."


// Task 4

let profile_img = document.querySelector(".profile-img");

profile_img.src = "firstAssignmentImage/timothy-dykes-yd4ubMUNTG0-unsplash.jpg";
profile_img.style.width = "60%";



// Task 5

let btn_container = document.querySelector(".hero-right-section-btns");
let btn = document.createElement("button");
let txt = document.createTextNode("Support me");

btn.appendChild(txt);
btn_container.appendChild(btn);



