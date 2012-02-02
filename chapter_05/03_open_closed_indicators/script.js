$(document).ready(function(){
$( '#menu > li > ul' )
	.hide()
	.click(function( e ){
		e.stopPropagation();
	});
	
  $('#menu > li').toggle(function(){
	  $(this)
      .css('background-position', 'right -20px')
      .find('ul').slideDown();
  }, function(){
  	$( this )
      .css('background-position', 'right top')
      .find('ul').slideUp();
  });
});
