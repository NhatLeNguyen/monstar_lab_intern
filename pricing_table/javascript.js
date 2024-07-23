const container = document.querySelector(".container");
const carousel = document.querySelector(".carousel");
const tables = Array.from(document.querySelectorAll(".table"));
const arrowLeftButton = document.querySelector(".fa-arrow-left");
const arrowRightButton = document.querySelector(".fa-arrow-right");

let currentIndex = 0;
let tablesToShow = 5;
let tableWidth = 380;

function updateCarousel() {
  carousel.innerHTML = "";
  const totalTables = tables.length;

  for (let i = -1; i < tablesToShow; i++) {
    let tableIndex = (currentIndex + i + totalTables) % totalTables;
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
    direction === "left" ? `translateX(380px)` : `translateX(-380px)`;

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
    tablesToShow = 5;
  }
  updateCarousel();
}

window.addEventListener("resize", updateTablesToShow);

updateTablesToShow();
