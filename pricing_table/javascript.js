const carousel = document.querySelector(".carousel");
const tables = Array.from(document.querySelectorAll(".table"));
const arrowLeftButton = document.querySelector(".fa-arrow-left");
const arrowRightButton = document.querySelector(".fa-arrow-right");

let currentIndex = 0;
const tablesToShow = 3;

function updateCarousel() {
  carousel.innerHTML = "";
  for (let i = 0; i < tablesToShow; i++) {
    let tableIndex = (currentIndex + i) % tables.length;
    let tableClone = tables[tableIndex].cloneNode(true);
    carousel.appendChild(tableClone);
  }
}

function handleArrowButtonClick(direction) {
  if (direction === "left") {
    currentIndex = (currentIndex - 1 + tables.length) % tables.length;
  } else if (direction === "right") {
    currentIndex = (currentIndex + 1) % tables.length;
  }

  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform =
    direction === "left" ? `translateX(340px)` : `translateX(-340px)`;

  setTimeout(() => {
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(0)`;
    updateCarousel();
  }, 500);
}

arrowLeftButton.addEventListener("click", () => handleArrowButtonClick("left"));
arrowRightButton.addEventListener("click", () =>
  handleArrowButtonClick("right")
);

function updateTablesToShow() {
  if (window.innerWidth < 620) {
    tablesToShow = 1;
  } else {
    tablesToShow = 3;
  }
  updateCarousel();
}
window.addEventListener("resize", updateTablesToShow);
updateCarousel();

updateTablesToShow();
