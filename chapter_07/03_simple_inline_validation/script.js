$(document).ready(function(){
  $(':input').blur(function() {
    if($(this).val().length == 0) {
      $(this)
        .addClass('error')
        .after('<span class="error">This field must be filled in!</span>');
    }
  });
  $(':input').focus(function() {
    $(this)
      .removeClass('error')
      .next('span')
      .remove();
  });
});

