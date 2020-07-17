// menu burger 
$(document).ready(function () {
  $('.header__burger').click(function (e) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});

// ibg 
function ibg() {

  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

ibg();

// fixed header
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 1) {
    $('.header').addClass('header-scroll');
  } else {
    $('.header').removeClass('header-scroll');
  }

});

// slider1
$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1
  });
});

// Slider2
$(document).ready(function () {
  $('.slider2').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    // adaptiveHeight: true,
    variableWidth: true
  });
});

// team sliders
$('.slider-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider3'
});

$('.slider3').slick({
  // infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  focusOnSelect: true,
  asNavFor: '.slider-big',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});


// scroll services section
// skrollr.init({
//   smoothScrollingDuration: 1000

// });
var $frame = $('#frame');
var $wrap = $frame.parent();
var frame = new Sly('#frame', {
  horizontal: 1,
  itemNav: 'basic',
  smart: 1,
  mouseDragging: 1,
  touchDragging: 1,
  releaseSwing: 1,
  startAt: 0,
  scrollBar: '#scrollbar',
  scrollBy: 1,
  activatePageOn: 'click',
  speed: 800,
  elasticBounds: 1,
  dragHandle: 1,
  dynamicHandle: 1,
  clickBar: 1,
}).init();

// jQuery(function ($) {
//   'use strict'

//     (function () {
//       var $frame = $('#frame');
//       var $slidee = $frame.children('div').eq(0);
//       var $wrap = $frame.parent();

//       $frame.sly({
//         horizontal: 1,
//         itemNav: 'basic',
//         smart: 1,
//         // activateOn: 'click',
//         mouseDragging: 1,
//         touchDragging: 1,
//         releaseSwing: 1,
//         startAt: 3,
//         scrollBar: $wrap.find('.scrollbar'),
//         scrollBy: 1,
//         activatePageOn: 'click',
//         speed: 300,
//         elasticBounds: 1,
//         easing: 'easeOutExpo',
//         dragHandle: 1,
//         dynamicHandle: 1,
//         clickBar: 1,

//       });
//     });
// });