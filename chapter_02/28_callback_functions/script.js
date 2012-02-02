$(document).ready(function(){
  $('#toggleButton').click(function(){
    $('#disclaimer').slideToggle('slow', function(){
      alert('The slide has finished sliding!')
    });
  });
});