$(document).ready(function() {
  $('#swapLeft').click(function() {
    SWAPLIST.swap('#candidates', '#a-listers');
  });
  $('#swapRight').click(function() {
    SWAPLIST.swap('#a-listers', '#candidates');
  });
  $('#swapLeftAll').click(function() {
    SWAPLIST.swapAll('#candidates', '#a-listers');
  });
  $('#swapRightAll').click(function() {
    SWAPLIST.swapAll('#a-listers', '#candidates');
  });

  $('.invert').click(function(e) {
    SWAPLIST.invert($(this).parent().find('select'));
    e.preventDefault();
  });
  $('#search').keyup(function() {
    SWAPLIST.search("#a-listers, #candidates", $(this).val());
  });
});

var SWAPLIST = {};
SWAPLIST.swap = function(from, to) {
  $(from)
    .find(':selected')
    .appendTo(to);
}
SWAPLIST.swapAll = function(from,to) {
  $(from)
    .children()
    .appendTo(to);
}
SWAPLIST.invert = function(list) {
  $(list)
    .children()
    .prop('selected', function(i, selected) {
      return !selected;
    });
}
SWAPLIST.search = function(list, search) {
  $(list)
    .children()
    .prop('selected', false)
    .filter(function() {
      if (!search) {
        return false;
      }
      return $(this)
        .text()
        .toLowerCase()
        .indexOf(search.toLowerCase()) > - 1
    })
    .prop('selected', true);
}
