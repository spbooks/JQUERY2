$(document).ready(function() {
  $('div').click(function() {
    alert('Hello from ' + $(this).attr('id'));
  }); 
});