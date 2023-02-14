// Eighth Assignment Solution

// Task 1

let aside_container = document.querySelector(".col-lg-4");
aside_container.style.overflowX = "hidden";

let hr = document.createElement("hr");
hr.classList.add("hr-line");


let h2 = document.createElement("h2");
h2.classList.add('new-head');
h2.textContent = "This is new Heading";

let p = document.createElement("p");
p.classList.add("new-p");
p.textContent = "Private funding by VC firms is down 50% YOY. We take a look at what that means."

aside_container.appendChild(hr);
aside_container.appendChild(h2);
aside_container.appendChild(p);


// Task 2

document.body.style.backgroundImage = "none";

// Task 3

let toggler = document.querySelector('[data-id="2"]');
let navbarCollapse = document.getElementById('navbarTogglerDemo01')

toggler.addEventListener('click',() => {
    navbarCollapse.classList.toggle('collapse')
})


