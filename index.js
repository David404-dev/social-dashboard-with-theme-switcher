const darkToggleBtn = document.querySelector(".toggle-btn");
const darkToggleBg = document.querySelector(".toggle-bg");
const darkToggleText = document.querySelector(".dark-toggle-text");
const header = document.getElementById("header");
const body = document.body;
const darkCards = document.querySelectorAll(".big-card");
const smallCards = document.querySelectorAll(".small-card");
const overviewTitle = document.getElementById("h2");
// TOGGLE DARK AND LIGHT MODE
darkToggleBtn.addEventListener("click", () => {
  darkToggleBtn.classList.toggle("light-toggle-btn");
  darkToggleBg.classList.toggle("light-toggle-bg");
  body.classList.toggle("light-body");
  header.classList.toggle("light-header");
  overviewTitle.classList.toggle("light-h2");

  darkCards.forEach((card) => {
    card.classList.toggle("light-card");
  });

  smallCards.forEach((card) => {
    card.classList.toggle("light-sm-card");
  });
});
