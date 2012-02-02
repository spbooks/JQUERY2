$(document).ready(function() {
  $('#picker').click(function(e) {
    $('.selected').removeClass('selected');
    $(e.target).addClass('selected');
    var celebrity = $(e.target).text();
    var category = $(e.target)
      .closest('.category')
      .find('.title')
      .text();
    $('#current').text(category + " > " + celebrity);
  });
});
