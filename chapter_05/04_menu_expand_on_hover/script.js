$(document).ready(function(){
$( '#menu > li > ul' )
	.hide()
	.click(function( e ){
		e.stopPropagation();
	});
  $('#menu > li').toggle(function(){
	  $(this)
      .removeClass('waiting')
      .css('background-position', 'right -20px')
      .find('ul').slideDown();
  }, function(){
  	$( this )
      .removeClass('waiting')
      .css('background-position', 'right top')
      .find('ul').slideUp();
  });
  
  $('#menu > li').hover(function() {
    $(this).addClass('waiting');
    setTimeout(function() {
      $('#menu .waiting')
        .click()
        .removeClass('waiting');
    }, 600);
  }, function() {
    $('#menu .waiting').removeClass('waiting');
  });
});
