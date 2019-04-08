$('.menu-icon').click(function(){
  $(this).toggleClass('clicked');
});

$('#main-slider').slick({
  prevArrow: '<div class="slick-prev"><img src="./dist/img/svg/index/slick-prev.svg" /></div>',
  nextArrow: '<div class="slick-next"><img src="./dist/img/svg/index/slick-next.svg" /></div>',
});

var slide = $('.slide').height();
slide;
var dots = $('.slick-arrow');
var topArrow = slide / 2 - 10;
$(dots).css('top',  topArrow);
