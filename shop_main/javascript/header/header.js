// handle responsive main nav

// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.querySelector(".menu-toggle");
//   const navLinksResponsive = document.querySelector(".nav-links-responsive");

//   menuToggle.addEventListener("click", function () {
//     navLinksResponsive.classList.toggle("active");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinksResponsive = document.querySelector(".nav-links-responsive");
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  function handleMenuToggle() {
    navLinksResponsive.classList.toggle("active");
  }

  function checkMediaQuery() {
    if (mediaQuery.matches) {
      menuToggle.addEventListener("click", handleMenuToggle);
    } else {
      menuToggle.removeEventListener("click", handleMenuToggle);
      navLinksResponsive.classList.remove("active");
    }
  }
  mediaQuery.addEventListener("change", checkMediaQuery);
});
