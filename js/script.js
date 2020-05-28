// menu burger 
$(document).ready(function () {
  $('.header__burger').click(function (e) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});

// fixed header
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 1) {
    $('.header').addClass('header-scroll');
  } else {
    $('.header').removeClass('header-scroll');
  }

});

// slider
$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1
  });
});
