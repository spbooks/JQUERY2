$(document).ready(function(){
    $('#toggleButton').click(function(){
    if($('#disclaimer').is(':visible')) {
      $('#disclaimer').hide();
    } else {
      $('#disclaimer').show();
    }
  });
});
