$(document).ready(function() {
  $('input.clear').each(function() {
    $(this)
      .data('default', $(this).val())
      .addClass('inactive')
      .focus(function() {
        $(this).removeClass('inactive');
        if($(this).val() === $(this).data('default') || $(this).val() === '') {
          $(this).val('');
        }
      })
      .blur(function() {
        if($(this).val() === '') {
          $(this).addClass('inactive').val($(this).data('default'));
        }
      });
  });
});

