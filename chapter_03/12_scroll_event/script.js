$(document).ready(function() {
  $('#news').scroll(function() {
    $('#header').append('<span class="scrolled">You scrolled!</span>');
  });
});
