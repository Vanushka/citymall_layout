$(document).ready(function() {
  $('.menu-icon').click(function(){
    $(this).toggleClass('clicked');
    var logoClassic = './dist/img/svg/header/main_logo.svg';
    var logoWhite = './dist/img/svg/header/main_logo_white.svg';
    if ($('.main-logo img').attr('src') == './dist/img/svg/header/main_logo.svg') {
      $('.main-logo img').attr('src', logoWhite);
    } else {
      $('.main-logo img').attr('src', logoClassic);
    }
    $('header').toggleClass('active');
    $('.instagram').toggleClass('active');
    $('.facebook').toggleClass('active');
    $('.vk').toggleClass('active');
    $('.links-block a').toggleClass('active');
    // if ($('a.scheme svg path').css('fill') != "rgb(255, 255, 255)" && $('a.how-to-get svg path').css('fill') != "rgb(255, 255, 255)") {
    //   $('a.scheme svg path').css('fill', 'rgb(255, 255, 255)');
    //   $('a.how-to-get svg path').css('fill', 'rgb(255, 255, 255)');
    // } else {
    //   $('a.scheme svg path').css('fill', '#484848');
    //   $('a.how-to-get svg path').css('fill', '#484848');
    // };
    $('p.operation-mode').toggleClass('active');
    $('.search').toggleClass('active');
  });


  jQuery('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
          var $svg = jQuery(data).find('svg');
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
              $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }
          $img.replaceWith($svg);
      }, 'xml');
  });
});
