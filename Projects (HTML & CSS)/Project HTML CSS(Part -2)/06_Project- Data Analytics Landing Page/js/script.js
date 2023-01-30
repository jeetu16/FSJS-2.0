
let hamburger = document.getElementsByClassName('hamburger-btn')[0];

let nav_links = document.getElementsByClassName('nav-links')[0];


hamburger.addEventListener('click',function (){
    nav_links.classList.toggle('nav-links-show');
})