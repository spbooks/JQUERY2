$(document).ready(function(){
  $('#menu li ul').css({
    display: "none",
    left: "auto"
  });
	
  $('#menu li').hoverIntent(function() {
    $(this)
      .find('ul')
      .stop(true, true)
      .slideDown('fast');
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('fast');
  });
});
