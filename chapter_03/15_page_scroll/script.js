$(document).ready(function() {
  $('a[href=#]').click(function(e) {
    $.scrollTo(0,'slow');
    e.preventDefault();
  });
});
