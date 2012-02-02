$(document).ready(function() { 
  $('p').bind('mouseover.colorize', function() {
    $(this).css('background-color', 'lemonchiffon') 
  })
  .bind('mouseout.colorize', function() { 
    $(this).css('background-color', '');
  }) 
  .click(function() {
    $(this)
      .trigger('mouseout.colorize')
      .unbind('.colorize');
  });
});
