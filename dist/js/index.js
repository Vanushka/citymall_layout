$(document).ready(function() {
  $('.menu-icon').click(function(){
    $(this).toggleClass('clicked');
  });

  $('#main-slider').slick({
    autoplay: true,
    prevArrow: '<div class="slick-prev"><img src="./dist/img/svg/index/slick-prev.svg" /></div>',
    nextArrow: '<div class="slick-next"><img src="./dist/img/svg/index/slick-next.svg" /></div>',
  });

  $('#cinema-slider').slick({
    infinite: true,
    slidesToShow: 6,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    prevArrow: '<div class="cinema-prev"><img src="./dist/img/svg/index/cinema-prev.svg" /></div>',
    nextArrow: '<div class="cinema-next"><img src="./dist/img/svg/index/cinema-next.svg" /></div>',
    responsive: [
    {
      breakpoint: 1540,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1170,
      settings: {
        arrows:false,
        slidesToShow: 4,
        centerMode: true,
      }
    },
  ]
  });

  $('#developments-slider').slick({
    infinite: true,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    prevArrow: '<div class="devel-prev"><img src="./dist/img/svg/index/silver-prev.svg" /></div>',
    nextArrow: '<div class="devel-next"><img src="./dist/img/svg/index/silver-next.svg" /></div>',
    responsive: [
    {
      breakpoint: 1170,
      settings: {
        arrows:false,
        slidesToShow: 3,
        centerMode: true,
      }
    },
  ]
  });

  let element = $('.body-new-items').children().length;
  switch (element) {
    case 1:
      $('.body-new-items').removeClass('four');
      $('.body-new-items').addClass('one');
      console.log('2');
      break;
    case 2:
      $('.body-new-items').removeClass('four');
      $('.body-new-items').addClass('two');
      console.log('2');
      break;
    case 3:
      $('.body-new-items').removeClass('four');
      $('.body-new-items').addClass('three');
      console.log('3');
      break;
  }

  $('#instagram-slider').slick({
    infinite: true,
    slidesToShow: 6,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    prevArrow: '<div class="instagram-prev"><img src="./dist/img/svg/index/silver-prev.svg" /></div>',
    nextArrow: '<div class="instagram-next"><img src="./dist/img/svg/index/silver-next.svg" /></div>',
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          arrows:false,
          slidesToShow: 4,
          centerMode: true,
        }
      },
    ]
  });
});
