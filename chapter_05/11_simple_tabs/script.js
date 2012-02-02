$(document).ready(function(){
  $('#info p:not(:first)').hide();
  
  $('#info-nav li').click(function(event) {
    event.preventDefault();
    $('#info p').hide();
    $('#info-nav .current').removeClass("current");
    $(this).addClass('current');
    
    var clicked = $(this).find('a:first').attr('href');
    $('#info ' + clicked).fadeIn('fast');
  }).eq(0).addClass('current');
});
