$(document).ready(function() {
  $('#menu > li > ul' )
	.hide()
	.click(function(event) {
		event.stopPropagation();
	});
  
	$('#menu > li').toggle(function() {
		$(this).find('ul').slideDown();
  }, function() {
  	$(this).find('ul').slideUp();
  });
});
