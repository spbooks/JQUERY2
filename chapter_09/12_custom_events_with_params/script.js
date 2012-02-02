$(document).ready(function() { 
  $('#bio > div').hide();

  $('#bio h3').bind('reveal', function(e,effect, duration) {
    if (effect == 'ease') {
      $(this).next().slideToggle(duration);
    } else {
      $(this).next().toggle();
    }
  })
  .click(function() {
    // Trigger 1 : plain toggle
    $(this).trigger('reveal');
  });
    
  $('#chooser')
    .change(function() {
      // Trigger 2: slidey toggle
      $('#bio h3:contains(' + $(this).val() + ')')
        .trigger('reveal', ['ease',2000]);
    });
});
