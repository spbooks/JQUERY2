$(document).ready(function(){
$('#login form').hide();
  $('#login a').toggle(function() {
    $(this)
      .addClass('active')
      .next('form')
      .animate({'height':'show'}, {
        duration: 'slow',
        easing: 'easeOutBounce'
      });
  }, function() {
    $(this)
      .removeClass('active')
      .next('form')
      .slideUp();
  });
  $('#login form :submit').click(function() {
    $(this)
      .parent()
      .prev('a')
      .click();
  });
});
