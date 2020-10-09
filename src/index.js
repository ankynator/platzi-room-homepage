const btnHamburger = document.getElementById("Button__hamburger");
const items = document.getElementById("Navbar__items");

btnHamburger.addEventListener("click", (e) => {
  btnHamburger.classList.toggle("open");
  items.classList.toggle("show");
});
