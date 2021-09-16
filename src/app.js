const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

var navbar = document.getElementById("navbar");
var sociallist = document.getElementById("socials-list");
var sticky1 = navbar.offsetTop;
var sticky2 = sociallist.offsetTop;
navbar.classList.add("sticky1")
sociallist.classList.add("sticky2")
