$(document).ready(function() { 
  $('#disclaimer').bind('do-toggle', function() {
    $(this).toggle('slow');
  });
  $('#toggleButton').click(function() {
    $('#disclaimer').trigger('do-toggle');
  })
});
