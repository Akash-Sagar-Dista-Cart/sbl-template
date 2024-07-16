$(document).ready(function(){
  $('.videos-main-block').slick({
  infinite: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1, 
  prevArrow: '<button class="video-slider-arrow video-slider-prev"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#53097B" fill-opacity="0"></circle><path d="M13.5 9.5L7 16M7 16L13.5 22.5M7 16H25" stroke="#FFFFFF" stroke-width="2px" stroke-linecap="square" fill="none"></path></svg></button>',
  nextArrow: '<button class="video-slider-arrow video-slider-next"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#53097B" fill-opacity="0"></circle><path d="M18.5 9.5L25 16M25 16L18.5 22.5M25 16H7" stroke="#FFFFFF" stroke-width="2px" stroke-linecap="square" fill="none"></path></svg></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  
 $(".media-slider-main-block").slick({
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
     prevArrow: false,
     nextArrow: false,
    responsive: [
      {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      }
    },
      {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }
    ]
});
});