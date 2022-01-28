let burger = document.querySelector(".burger");
let x = document.querySelector(".x");
let dropdown = document.querySelector(".dropdown");
let navbar = document.querySelector("nav");
let getStarted = document.querySelector(".get-started");
let footerNavContent = document.querySelectorAll(".footer-nav-content");
let footerArrow = document.querySelectorAll(".footer-arrow");
let yasImg = document.querySelector(".yas-img");
let sheDoesImg = document.querySelector(".shedoes-img");
let leeImg = document.querySelector(".lee-img");
let scandImg = document.querySelector(".scand-img");
let girlImg = document.querySelector(".girl-img");
let hotelImg = document.querySelector(".hotel-img");
let popup1 = document.querySelector(".yas-popup");
let popup2 = document.querySelector(".shedoes-popup");
let popup3 = document.querySelector(".lee-popup");
let popup4 = document.querySelector(".scand-popup");
let popup5 = document.querySelector(".girl-popup");
let popup6 = document.querySelector(".hotel-popup");
let popupX = document.querySelectorAll(".popup-x");
let overlay = document.querySelector(".overlay");

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

footerArrow[0].addEventListener("click", function () {
  for (let f of footerNavContent) {
    f.style.color = "transparent";
  }
  footerNavContent[0].classList.toggle("height-auto");
});

footerArrow[1].addEventListener("click", function () {
  for (let f of footerNavContent) {
    f.style.color = "transparent";
  }
  footerNavContent[1].classList.toggle("height-auto");
});

footerArrow[2].addEventListener("click", function () {
  for (let f of footerNavContent) {
    f.style.color = "transparent";
  }
  footerNavContent[2].classList.toggle("height-auto");
});

footerArrow[3].addEventListener("click", function () {
  for (let f of footerNavContent) {
    f.style.color = "transparent";
  }
  footerNavContent[3].classList.toggle("height-auto");
});

footerArrow[4].addEventListener("click", function () {
  for (let f of footerNavContent) {
    f.style.color = "transparent";
  }
  footerNavContent[4].classList.toggle("height-auto");
});

yasImg.addEventListener("click", function () {
  popup1.classList.add("is-active");
  overlay.style.display = "initial";
});

sheDoesImg.addEventListener("click", function () {
  popup2.classList.add("is-active");
  overlay.style.display = "initial";
});

leeImg.addEventListener("click", function () {
  popup3.classList.add("is-active");
  overlay.style.display = "initial";
});

scandImg.addEventListener("click", function () {
  popup4.classList.add("is-active");
  overlay.style.display = "initial";
});

girlImg.addEventListener("click", function () {
  popup5.classList.add("is-active");
  overlay.style.display = "initial";
});

hotelImg.addEventListener("click", function () {
  popup6.classList.add("is-active");
  overlay.style.display = "initial";
});

for (let x of popupX) {
  x.addEventListener("click", function () {
    overlay.style.display = "none";
    popup1.classList.remove("is-active");
    popup2.classList.remove("is-active");
    popup3.classList.remove("is-active");
    popup4.classList.remove("is-active");
    popup5.classList.remove("is-active");
    popup6.classList.remove("is-active");
  });
}

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
  popup1.classList.remove("is-active");
  popup2.classList.remove("is-active");
  popup3.classList.remove("is-active");
  popup4.classList.remove("is-active");
  popup5.classList.remove("is-active");
  popup6.classList.remove("is-active");
});
