// menu_icon: begin 

$(document).ready(function () {
  $(".menu__icon").click(function () {
    $(this).toggleClass("active");
    $(".navigation").toggleClass("active");
  });
  // menu_icon: end

});
  // tab : begin.
function tabShow(element, classNameOfTabContent) {
  let tab_btns = document.querySelectorAll(".tab__buttons .button");
  let tab_content = document.querySelectorAll(".tab__content");
  for (let i = 0; i < tab_btns.length; i++) {
    tab_btns[i].classList.remove("active");
    tab_content[i].classList.remove("is-show");
    element.classList.add("active");
    document
      .getElementsByClassName(classNameOfTabContent)[0]
      .classList.add("is-show");
  }
}
  // tab : end.

















