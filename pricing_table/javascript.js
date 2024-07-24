const container = document.querySelector(".container");
const carousel = document.querySelector(".carousel");
const tables = Array.from(document.querySelectorAll(".table"));
const arrowLeftButton = document.querySelector(".fa-arrow-left");
const arrowRightButton = document.querySelector(".fa-arrow-right");

let currentIndex = 0;
let tablesToShow = 5;
let tableWidth = 380;

let isMoving = false;
let clickQueue = [];

function updateCarousel() {
  carousel.innerHTML = "";
  const totalTables = tables.length;

  for (let i = -1; i < tablesToShow; i++) {
    let tableIndex = (currentIndex + i + totalTables) % totalTables;
    let tableClone = tables[tableIndex].cloneNode(true);
    carousel.appendChild(tableClone);
  }
}

function handleArrowButtonClick(direction, clickCount = 1) {
  if (isMoving) {
    clickQueue.push({ direction, clickCount });
    return;
  }

  isMoving = true;

  if (direction === "left") {
    currentIndex = (currentIndex - 1 + tables.length) % tables.length;
  } else if (direction === "right") {
    currentIndex = (currentIndex + 1) % tables.length;
  }

  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform =
    direction === "left"
      ? `translateX(${tableWidth}px)`
      : `translateX(-${tableWidth}px)`;

  setTimeout(() => {
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(0)`;

    updateCarousel();
    isMoving = false;

    if (clickCount > 1) {
      setTimeout(() => handleArrowButtonClick(direction, clickCount - 1), 0);
    } else if (clickQueue.length > 0) {
      const nextMove = clickQueue.shift();
      handleArrowButtonClick(nextMove.direction, nextMove.clickCount);
    }
  }, 500);
}

let clickTimer;
let clickCounter = 0;
let lastClickDirection;

function handleClick(direction) {
  clickCounter++;
  lastClickDirection = direction;

  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => {
    handleArrowButtonClick(lastClickDirection, clickCounter);
    clickCounter = 0;
  }, 500);
}

arrowLeftButton.addEventListener("click", () => handleClick("left"));
arrowRightButton.addEventListener("click", () => handleClick("right"));

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
