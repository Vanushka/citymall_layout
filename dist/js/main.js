$('.menu-icon').click(function(){
  $(this).toggleClass('clicked');
});

$('#main-slider').slick({
  autoplay: true,
  prevArrow: '<div class="slick-prev"><img src="./dist/img/svg/index/slick-prev.svg" /></div>',
  nextArrow: '<div class="slick-next"><img src="./dist/img/svg/index/slick-next.svg" /></div>',
});

$('#cinema-slider').slick({
  slidesToShow: 6,
  autoplaySpeed: 2000,
  prevArrow: '<div class="cinema-prev"><img src="./dist/img/svg/index/cinema-prev.svg" /></div>',
  nextArrow: '<div class="cinema-next"><img src="./dist/img/svg/index/cinema-next.svg" /></div>',
});
