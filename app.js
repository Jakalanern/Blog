let burger = document.querySelector(".burger");
let x = document.querySelector(".x");
let dropdown = document.querySelector(".dropdown");
let navbar = document.querySelector("nav");
let getStarted = document.querySelector(".get-started");

x.style.display = "none";

burger.addEventListener("click", function () {
  burger.style.display = "none";
  x.style.display = "initial";

  dropdown.style.right = "0";
});

x.addEventListener("click", function () {
  x.style.display = "none";
  burger.style.display = "flex";

  dropdown.style.right = "-100%";
});

window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop >= 25 ||
    document.documentElement.scrollTop >= 25
  ) {
    burger.removeAttribute("id");
    x.removeAttribute("id");

    getStarted.style.display = "initial";
    navbar.style.background = "black";
  } else {
    navbar.style.background = "transparent";
    getStarted.style.display = "none";
    burger.id = "margin-left-auto";
    x.id = "margin-left-auto";
  }
});
