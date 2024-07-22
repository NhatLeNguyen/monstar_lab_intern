const carousel = document.querySelector(".carousel-slides");
const slides = Array.from(document.querySelectorAll(".carousel-item"));
const dots = Array.from(document.querySelectorAll(".dots"));

const left = document.querySelector(".fa-arrow-left");
const right = document.querySelector(".fa-arrow-right");
let currentIndex = 0;
let slidesToShow = 4;

function updateCarousel() {
  carousel.innerHTML = "";
  for (let i = 0; i < slidesToShow; i++) {
    let slideIndex = (currentIndex + i) % slides.length;
    let slideClone = slides[slideIndex].cloneNode(true);
    carousel.appendChild(slideClone);
  }
}

left.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform = `translateX(250px)`;
  setTimeout(() => {
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(0)`;
    updateCarousel();
  }, 300);
});

right.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform = `translateX(-250px)`;
  setTimeout(() => {
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(0)`;
    updateCarousel();
  }, 300);
});

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    currentIndex = parseInt(e.target.getAttribute("index")) * 4;
    updateCarousel();
  });
});
function updateSlidesToShow() {
  if (window.innerWidth < 620) {
    slidesToShow = 1;
  } else {
    slidesToShow = 4;
  }
  updateCarousel();
}
window.addEventListener("resize", updateSlidesToShow);

updateSlidesToShow();
