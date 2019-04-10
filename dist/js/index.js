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
});

$('#developments-slider').slick({
  infinite: true,
  slidesToShow: 3,
  autoplaySpeed: 2000,
  adaptiveHeight: true,
  prevArrow: '<div class="devel-prev"><img src="./dist/img/svg/index/devel-prev.svg" /></div>',
  nextArrow: '<div class="devel-next"><img src="./dist/img/svg/index/devel-next.svg" /></div>',
});
