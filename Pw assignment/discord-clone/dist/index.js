const navlinks = document.getElementById("navLinks");
const toggleBtn = document.getElementById('toggleBtn');
const rmSideBar = document.getElementById("rmSideBar");

toggleBtn.addEventListener('click',function() {
    navlinks.classList.toggle("hidden");
    navlinks.classList.toggle("block");
    console.log(navlinks);
    console.log("hello")
})

rmSideBar.addEventListener('click',function() {
    navlinks.classList.toggle("hidden");
    navlinks.classList.toggle('block');
})