$(document).ready(function(){
  $('.location').hover(function(event){
    // Hover over code
    var titleText = $(this).attr('title');
    $(this)
      .data('tipText', titleText)
      .removeAttr('title');
      
    $('<p class="tooltip"></p>')
      .text(titleText)
      .appendTo('body')
      .css('top', (event.pageY - 10) + 'px')
      .css('left', (event.pageX + 20) + 'px')
      .fadeIn('slow');
  }, function() {
    // Hover out code
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
  }).mousemove(function(event){
    // Mouse move code
    $('.tooltip')
      .css('top', (event.pageY - 10) + 'px')
      .css('left', (event.pageX + 20) + 'px');
  });
});
