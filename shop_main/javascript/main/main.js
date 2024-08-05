//toggle subcategories
function toggleSubcategories(element) {
  const subcategories = element.nextElementSibling;
  const arrow = element.querySelector(".fas");

  if (subcategories.style.display === "block") {
    subcategories.style.display = "none";
    arrow.classList.remove("fa-chevron-up");
    arrow.classList.add("fa-chevron-down");
    element.classList.remove("active");
  } else {
    subcategories.style.display = "block";
    arrow.classList.remove("fa-chevron-down");
    arrow.classList.add("fa-chevron-up");
    element.classList.add("active");
  }
}

// price filter
document.addEventListener("DOMContentLoaded", function () {
  let priceSlider = document.getElementById("price-slider");

  noUiSlider.create(priceSlider, {
    start: [345, 1640],
    connect: true,
    range: {
      min: 0,
      max: 5000,
    },
    step: 100,
  });

  let priceRange = document.getElementById("price-range");

  priceSlider.noUiSlider.on("update", function (values) {
    priceRange.innerHTML =
      "Price: $" + Math.round(values[0]) + " — $" + Math.round(values[1]);
  });
});

//handle heart click in product
document.querySelectorAll(".fa-heart").forEach(function (element) {
  element.addEventListener("click", function () {
    this.classList.toggle("red");
  });
});

//handle page number active

let activePage = document.querySelector(".page.active");
document.querySelectorAll(".page").forEach(function (page) {
  page.addEventListener("click", function () {
    if (activePage) {
      activePage.classList.remove("active");
    }
    this.classList.add("active");
    activePage = this;
  });
});

//handle heart click in blog post
document.querySelectorAll(".heart").forEach(function (heartElement) {
  heartElement.addEventListener("click", function () {
    const heartIcon = this.querySelector("i");
    const heartCount = this.querySelector("span:last-child");
    if (heartIcon.style.color === "red") {
      heartIcon.style.color = "";
      heartCount.textContent = parseInt(heartCount.textContent) - 1;
    } else {
      heartIcon.style.color = "red";
      heartCount.textContent = parseInt(heartCount.textContent) + 1;
    }
  });
});
