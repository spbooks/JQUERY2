$(document).ready(function(){
  $('#navigation li').hover(function(){
    $(this).animate({
      paddingLeft: '+=15px'
    }, 200);
  }, function(){
    $(this).animate({
      paddingLeft: '-=15px'
    }, 200);
  });
});
