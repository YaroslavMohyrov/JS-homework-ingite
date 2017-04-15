var burger = document.getElementById('burger');
var burgerMenu = document.getElementById('burger-menu');

burger.onclick = function() {
    burger.classList.toggle('active-burger');
    if (burgerMenu.style.display == "none") {
        burgerMenu.style.display = "block";
        burgerMenu.focus();
    } else { burgerMenu.style.display = "none"; }
}