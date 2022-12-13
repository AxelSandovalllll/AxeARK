
//allows the header to perform a function when an eventListener happens when the window Yaxis is scrolled
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});