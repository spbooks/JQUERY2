$(document).ready(function(){
  $('#hideButton').click(function(){
    $('#disclaimer').slideUp('slow', function(){
      $('#hideButton').fadeOut();
    });
  });
});