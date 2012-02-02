$(document).ready(function() {
  $('#ascending').click(function() {
    SORTER.sort('.sortable');
  });
  $('#descending').click(function() {
    SORTER.sort('.sortable', 'desc');
  });
});

var SORTER = {};
SORTER.sort = function(which, dir) {
  SORTER.dir = (dir == "desc") ? -1 : 1;
  $(which).each(function() {
    // Find the list items and sort them
    var sorted = $(this).find("> li").sort(function(a, b) {
      return $(a).text().toLowerCase() > $(b).text().toLowerCase() ? SORTER.dir : -SORTER.dir; 
    });
    $(this).append(sorted);
  });
};
