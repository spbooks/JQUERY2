$(document).ready(function() {
  $('p')
    .hide()
    .highlightOnce(function() {
      alert('highlight removed');
    })
    .slideDown();
});
