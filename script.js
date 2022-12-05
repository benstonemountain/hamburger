const hamburgerButton = document.querySelector(".hamburger-lines");
const hamburgerMenu = document.querySelector(".hamburger-menu-container");
const overlay = document.querySelector(".overlay");
const xBtn = document.querySelector(".quit");
const footer = document.querySelector(".foot");
const h1 = document.querySelector(".selection");



hamburgerButton.addEventListener("click", function () {
  hamburgerMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  hamburgerMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});

xBtn.addEventListener("click", function () {
  hamburgerMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});



//SMOOTH SCROLLING
document.querySelectorAll(".btn-scroll-to").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    footer.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".scroll-up").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    h1.scrollIntoView({ behavior: "smooth" });
  });
});
