$(document).ready(function(){
  $('p:first').toggle(function() {
    $(this).animate( {'height':'+=150px'}, 2000, 'linear')
  }, function() {
    $(this).animate( {'height':'-=150px'}, 2000, 'swing');
  });
});
