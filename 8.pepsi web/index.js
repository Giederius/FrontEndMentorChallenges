const burger = document.querySelector("#burger");
const menu = document.querySelector(".my-links");
const list = document.querySelector("ul");

function showMenu() {
  burger.addEventListener("click", function () {
    menu.classList.toggle("my-active"); //shows menu
    burger.classList.toggle("fa-times"); // changes button to x
    burger.classList.toggle("i-active"); //changes burger color fas fa-times
    list.style.opacity = 1; //shows text
  });
}

function liftUp() {
  const can = document.querySelectorAll(".small-can");

  for (let i = 0; i < can.length; i++) {
    can[i].addEventListener("mouseenter", function () {
      can[i].classList.add("lift-up");
      //   body.style.backgroundColor = "rgb(194, 45, 49)";
    });

    can[i].addEventListener("mouseleave", () => {
      can[i].classList.remove("lift-up");
    });
  }
}

function changeColor() {
  const body = document.querySelector("body");
  const can = document.querySelectorAll(".small-can");

  for (let i = 0; i < can.length; i++) {
    can[i].addEventListener("click", () => {
      if (i == 0) {
        body.style.backgroundColor = "rgb(1, 98, 189)";
        document.getElementById("hero-can").src = "./images/pepsi001.png";
      } else if (i == 1) {
        body.style.backgroundColor = "rgb(194, 45, 49)";
        document.getElementById("hero-can").src = "./images/pepsi002.png";
      } else if (i == 2) {
        body.style.backgroundColor = "rgb(30, 30, 30)";
        document.getElementById("hero-can").src = "./images/pepsi003.png";
      }
    });
  }
}

showMenu();
liftUp();
changeColor();

// function changeMe() {
//   const h = document.querySelector("h1");
//   h.addEventListener("click", () => {
//     h.innerHTML = "bl";
//   });
// }

// changeMe();
