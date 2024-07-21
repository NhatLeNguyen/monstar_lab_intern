const carousel = document.querySelector(".carousel-slides");
const slides = Array.from(document.querySelectorAll(".carousel-item"));

const left = document.querySelector(".fa-arrow-left");
const right = document.querySelector(".fa-arrow-right");
let currentIndex = 0;

function updateCarousel() {
  carousel.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    let slideIndex = (currentIndex + i) % slides.length;
    let slideClone = slides[slideIndex].cloneNode(true);
    carousel.appendChild(slideClone);
  }
}

left.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform = `translateX(300px)`;
  setTimeout(() => {
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(0)`;
    updateCarousel();
  }, 200);
});

right.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform = `translateX(-300px)`;
  setTimeout(() => {
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(0)`;
    updateCarousel();
  }, 200);
});

updateCarousel();
