$(document).ready(function() { 
  $('#sort').click(function() {
    $('ul.sortable')
    .hide()
    .sorter()
    .slideDown();    
  });
});

$.fn.extend({
  sorter: function() {
    return this.each(function() {
      var sorted = $(this).children('li').sort(function(a,b) {
        // Find the list items and sort them
        return $(a).text().toLowerCase() > $(b).text().toLowerCase() ? 1 : -1;
      });
      $(this).append(sorted);
    });
  }
});
