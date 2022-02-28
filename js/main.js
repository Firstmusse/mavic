

$(window).scroll(function() {
    let height = $(window).scrollTop();
    if(height > 20){
    $('header').addClass('header-fixed');
    } else{
    $('header').removeClass('header-fixed');
    }
});