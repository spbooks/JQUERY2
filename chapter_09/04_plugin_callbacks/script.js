$(document).ready(function() {
  $('p')
    .hide()
    .highlightOnce({
      color: '#FFA86F',
      complete: function() {
	$(this).slideUp();
      }
    })
    .slideDown();
});
