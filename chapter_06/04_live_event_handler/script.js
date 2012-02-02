$(document).ready(function(){
  $('#celebs ul a').click(function(e) {
    var url = $(this).attr('href') + ' #description';
    $('#biography').html('loading...').load(url);
    e.preventDefault();
  });
  $('#biography').on('mouseover', function() {
    $(this).css('background-color', 'yellow');
  });
  $('#biography').on('mouseout', function() {
    $(this).css('background-color', 'inherit');
  });
});
