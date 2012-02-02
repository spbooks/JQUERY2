$(document).ready(function(){
  $('#myform').bind('submit', function(event) {
    $('[type=text]').each(function() {
      if(!$(this).val().length) {	
	    event.preventDefault();
        $(this).css('border', '2px solid red');
      }
    });
  });
});

