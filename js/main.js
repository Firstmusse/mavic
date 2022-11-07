$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 20) {
    $("header").addClass("header-fixed");
  } else {
    $("header").removeClass("header-fixed");
  }
});

$(document).ready(function () {
  $(".slider").slick({
    infinity: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    autoplay: false,
    autoplaySpeed: 1000,
  });

  $(".questions__item-title-arrow").click(function () {
    console.dir(this);
    $(this).find("~ .questions__item-text").toggle(200);
    $(this).children(".arrow-up").toggleClass("rotate");
  });
});

const mobile = document.getElementById("mobile-click");
const menu = document.getElementById("menu-m");
let mobileActive = false;
mobile.onclick = function () {
  if (!mobileActive) {
    mobile.classList.toggle("active");
    menu.style.display = "flex";
    mobileActive = true;
  } else {
    mobile.classList.toggle("active");
    menu.style.display = "none";
    mobileActive = false;
  }
};
