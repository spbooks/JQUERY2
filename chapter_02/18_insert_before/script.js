$(document).ready(function(){
  $('<input type="button" value="toggle" id="toggleButton">').insertBefore('#disclaimer');
  $('#toggleButton').click(function(){
    $('#disclaimer').toggle();
  });
});