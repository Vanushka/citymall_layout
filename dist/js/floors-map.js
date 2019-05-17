$(document).ready(function() {
  $('.levels a.first').click(function() {
    $('.first').addClass('active');
    $('.second').removeClass('active');
    $('#map_level_1').addClass('active');
    $('#map_level_2').removeClass('active');
  });
  $('.levels a.second').click(function() {
    $('.first').removeClass('active');
    $('.second').addClass('active');
    $('#map_level_1').removeClass('active');
    $('#map_level_2').addClass('active');
  });
});
