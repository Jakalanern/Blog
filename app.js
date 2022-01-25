let burger = document.querySelector(".burger");
let x = document.querySelector(".x");
let dropdown = document.querySelector(".dropdown");

x.style.display = "none";

burger.addEventListener("click", function () {
  burger.style.display = "none";
  x.style.display = "initial";

  dropdown.style.transform = "translateX(0)";
});

x.addEventListener("click", function () {
  x.style.display = "none";
  burger.style.display = "flex";

  dropdown.style.transform = "translateX(-2000px)";
});
