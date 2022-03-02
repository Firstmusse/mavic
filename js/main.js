
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
});