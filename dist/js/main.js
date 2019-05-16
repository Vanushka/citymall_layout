$(document).ready(function() {
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

  $('.menu-icon').click(function(){
    if ($(window).width() > 767){
      $(this).toggleClass('clicked');
      if (!$('.search-header').hasClass('active')) {
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
        $('p.operation-mode').toggleClass('active');
        $('.search').toggleClass('active');
        $('.menu-header').toggleClass('active');
        $('.background-menu').toggleClass('active');
        $('body').toggleClass('locked');
        $('.menu-icon').removeClass('search-active');
      } else {
        $('.search').removeClass('hide')
        $('.close').toggleClass('hide');
        $('.menu-header').toggleClass('active');
        $('.background-menu').toggleClass('active');
        $('.search-header').toggleClass('active');
        $('.background-search').toggleClass('active');
      }
    } else {
      console.log('Pidor');
      $(this).toggleClass('clicked');
      if (!$('.search-header').hasClass('active')) {
        var logoClassic = './dist/img/svg/header/main_logo.svg';
        var logoWhite = './dist/img/svg/header/main_logo_white.svg';
        if ($('.main-logo img').attr('src') == './dist/img/svg/header/main_logo.svg') {
          $('.main-logo img').attr('src', logoWhite);
        } else {
          $('.main-logo img').attr('src', logoClassic);
        }
        $('.instagram').toggleClass('active');
        $('.facebook').toggleClass('active');
        $('.vk').toggleClass('active');
        $('.links-block a').toggleClass('active');
        $('p.operation-mode').toggleClass('active');
        $('.search').toggleClass('active');
        $('.menu-header').toggleClass('active');
        $('.background-menu').toggleClass('active');
        $('body').toggleClass('locked');
        $('.menu-icon').removeClass('search-active');
      } else {
        $('.search').removeClass('hide')
        $('.close').toggleClass('hide');
        $('.menu-header').toggleClass('active');
        $('.background-menu').toggleClass('active');
        $('.search-header').toggleClass('active');
        $('.background-search').toggleClass('active');
      }
    }
  });

  $('.search').click(function(){
    if ($(window).width() > 767){
      $('.search').addClass('hide');
      $('.menu-icon').addClass('search-active');
      $('.menu-icon').removeClass('clicked');
      $('.close').toggleClass('hide');
      var logoClassic = './dist/img/svg/header/main_logo.svg';
      var logoWhite = './dist/img/svg/header/main_logo_white.svg';
      if ($('.main-logo img').attr('src') == './dist/img/svg/header/main_logo.svg') {
        $('.main-logo img').attr('src', logoWhite);
      }
      $('header').addClass('active');
      $('.instagram').addClass('active');
      $('.facebook').addClass('active');
      $('.vk').addClass('active');
      $('.links-block a').addClass('active');
      $('p.operation-mode').addClass('active');
      $('.search').addClass('active');
      $('.search-header').toggleClass('active');
      $('.background-search').toggleClass('active');
      $('.menu-header').removeClass('active');
      $('.background-menu').removeClass('active');
      $('body').addClass('locked');
    } else {
      $('.menu-icon').hide();
      $('.close').toggleClass('hide');
      var logoClassic = './dist/img/svg/header/main_logo.svg';
      var logoWhite = './dist/img/svg/header/main_logo_white.svg';
      if ($('.main-logo img').attr('src') == './dist/img/svg/header/main_logo.svg') {
        $('.main-logo img').attr('src', logoWhite);
      }
      $('header').addClass('active');
      $('.instagram').addClass('active');
      $('.facebook').addClass('active');
      $('.vk').addClass('active');
      $('.links-block a').addClass('active');
      $('p.operation-mode').addClass('active');
      $('.search').addClass('active');
      $('.search-header').toggleClass('active');
      $('.background-search').toggleClass('active');
      $('.menu-header').removeClass('active');
      $('.background-menu').removeClass('active');
      $('body').addClass('locked');
    }
  });

  $('.close').click(function(){
    if ($(window).width() > 767){
      $('.close').toggleClass('hide');
      $('.menu-icon').removeClass('search-active');
      $('.menu-icon').removeClass('clicked');
      $('.search').toggleClass('hide');
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
      $('p.operation-mode').toggleClass('active');
      $('.search').toggleClass('active');
      $('.search-header').toggleClass('active');
      $('.background-search').toggleClass('active');
      $('.menu-header').removeClass('active');
      $('.background-menu').removeClass('active');
      $('body').toggleClass('locked');
    } else {
      $('.menu-icon').show();
      $('.close').toggleClass('hide');
      $('.menu-icon').removeClass('search-active');
      $('.menu-icon').removeClass('clicked');
      $('.search').toggleClass('hide');
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
      $('p.operation-mode').toggleClass('active');
      $('.search').toggleClass('active');
      $('.search-header').toggleClass('active');
      $('.background-search').toggleClass('active');
      $('.menu-header').removeClass('active');
      $('.background-menu').removeClass('active');
      $('body').toggleClass('locked');
    }
  });

  $('.block-search input').focus()
});
