$(document).ready(function(){
  $('<input type="button" value="toggle" id="toggleButton">').insertAfter('#disclaimer');
  $('#toggleButton').click(function(){
    $('#disclaimer').toggle();
  });
});