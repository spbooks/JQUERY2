$(document).ready(function() {
  $('#fader').hover(function() {
    $(this).find('img:eq(1)').stop(true,true).fadeIn();
  }, function() {
    $(this).find('img:eq(1)').fadeOut();
  })
});
