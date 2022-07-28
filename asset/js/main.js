// toggle header: begin
// (function toggleHeader() {
//   let prevScrollpos = window.pageYOffset;
//   window.onscroll = function () {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("header").style.transform = "translateY(0)";
//     } else {
//       document.getElementById("header").style.transform = "translateY(-100%)";
//     }
//     prevScrollpos = currentScrollPos;
//   };
// })();

let prevScrollpos = window.pageYOffset;
function toggleHeader() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.transform = "translateY(0)";
  } else {
    document.getElementById("header").style.transform = "translateY(-100%)";
  }
  prevScrollpos = currentScrollPos;
}
// toggle header: end

// menu_icon: begin

$(document).ready(function () {
  $(".menu__icon").click(function () {
    $(this).toggleClass("active");
    $(".mobile_navigation").toggleClass("active");
  });
  // menu_icon: end
});
// tab : begin.
function tabShow(element, classNameOfTabContent) {
  let tab_btns = document.querySelectorAll(".tab__buttons .button");
  let product_list = document.querySelectorAll(".product_list");
  for (let i = 0; i < tab_btns.length; i++) {
    tab_btns[i].classList.remove("active");
    product_list[i].classList.remove("is-show");
    element.classList.add("active");
    document
      .getElementsByClassName(classNameOfTabContent)[0]
      .classList.add("is-show");
  }
}
// tab : end.

// silde banner:begin
let bannerImage = () => {
  let index = 0;
  setTimeout(slideBanner, 1);
  function slideBanner() {
    let slides = document.querySelectorAll(".banner__right .banner__slide");
    let textLarge = document.querySelectorAll(".banner__slide .text--large");
    let textSmall = document.querySelectorAll(".banner__slide .text--small");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
      textLarge[i].classList.remove("translate");
      textSmall[i].classList.remove("translate");
    }
    slides[index].style.opacity = 1;
    textLarge[index].classList.add("translate");
    textSmall[index].classList.add("translate");
    setTimeout(slideBanner, 3000);
    index++;
    if (index == slides.length) {
      index = 0;
    }
  }
};
bannerImage();

// load up effect: begin
function reveal() {
  let cards = document.querySelectorAll(".product__card");

  for (let i = 0; i < cards.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = cards[i].getBoundingClientRect().top;
    let elementVisible = 200;

    if (elementTop < windowHeight + elementVisible) {
      cards[i].classList.add("load_up");
    } else {
      cards[i].classList.remove("load_up");
    }
  }
}

window.addEventListener("scroll", reveal);
// load up effect: end
