
$(window).scroll(function() {
    let height = $(window).scrollTop();
    if(height > 20){
    $('header').addClass('header-fixed');
    } else{
    $('header').removeClass('header-fixed');
    }
});

$(document).ready(function () {
    $('.slider').slick({
        infinity: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        // fade:true,
        autoplay: true,
        autoplaySpeed: 1000,

    });

          
      $(".questions__item-title-arrow").click(function() {
          console.dir(this)
        $(this).find("~ .questions__item-text").toggle(200);
        $(this).children(".arrow-up").toggleClass('rotate');


      });
      
      // $(".mobile__menu-link").click(function() {
      // $(this).find("~ .menu__list").toggle(200);
      // $(".mobile__menu-link").click(function(){
      // });

      $('.menu__btn').click(function(){
        $(".menu__list").toggleClass('menu-active');
        $(this).toggleClass("burger-active")
      });
      
       
	});


    
  // toggleClass('.menu__list')        .toggle(200)

