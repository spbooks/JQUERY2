$(document).ready(function(){
  $('#toggleButton').click(function(){
    $('#disclaimer').toggle();
    
    if($('#disclaimer').is(':visible')) {
      $(this).val('Hide');
    } else {
      $(this).val('Show');
    }
  });
});