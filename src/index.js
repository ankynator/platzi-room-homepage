const btnHamburger = document.getElementById("Button__hamburger");
const items = document.getElementById("Navbar__items");

//////

const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const image = document.getElementById("heroImage");

let contador = 0;

const image1 = {
  id: 1,
  mobile: "../images/mobile-image-hero-1.jpg",
  desktop: "../images/desktop-image-hero-1.jpg",
};

const image2 = {
  id: 2,
  mobile: "../images/mobile-image-hero-2.jpg",
  desktop: "../images/desktop-image-hero-2.jpg",
};

const image3 = {
  id: 3,
  mobile: "../images/mobile-image-hero-3.jpg",
  desktop: "../images/desktop-image-hero-3.jpg",
};

const images = [image1, image2, image3];

btnHamburger.addEventListener("click", despliegueHamburguesa);
btnLeft.addEventListener("click", anterior);
btnRight.addEventListener("click", siguiente);

function despliegueHamburguesa() {
  btnHamburger.classList.toggle("open");
  items.classList.toggle("show");
}

function anterior() {
  contador--;
  if (contador < 0) {
    contador = images.length -1;
  }
  render(contador);
}

function siguiente() {
  contador++;
  if (contador >= images.length) {
    contador = 0;
  }
  render(contador);
}

function render(n) {
  console.log(images[n].id)
  const widhtScreen = screen.width;
  if(widhtScreen > 414){
    image.src = images[n].desktop;
  }
  if(widhtScreen <= 414){
    image.src = images[n].mobile
  }
}

