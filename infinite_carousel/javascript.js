const carousel = document.querySelector(".carousel-slides");
const slides = Array.from(document.querySelectorAll(".carousel-item"));
const dots = Array.from(document.querySelectorAll(".dots"));

const arrowLeftButton = document.querySelector(".fa-arrow-left");
const arrowRightButton = document.querySelector(".fa-arrow-right");

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

function handleArrowButtonClick(direction) {
  if (direction === "left") {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  } else if (direction === "right") {
    currentIndex = (currentIndex + 1) % slides.length;
  }
  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform =
    direction === "left" ? `translateX(250px)` : `translateX(-250px)`;
  setTimeout(() => {
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(0)`;
    updateCarousel();
  }, 300);
}

arrowLeftButton.addEventListener("click", () => handleArrowButtonClick("left"));
arrowRightButton.addEventListener("click", () =>
  handleArrowButtonClick("right")
);

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
