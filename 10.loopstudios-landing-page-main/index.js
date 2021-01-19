const burger = document.getElementById("burger");
const menu = document.querySelector(".hidden-menu");
const mainText = document.getElementById("main-text");

function showMenu() {
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    mainText.classList.toggle("hidden");
  });
}

showMenu();
