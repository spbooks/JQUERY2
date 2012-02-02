$(document).ready(function(){
  $('.spoiler').hide();
  $('<input type="button" class="revealer" value="Tell Me!"/>').insertBefore('.spoiler');
  $('.revealer').click(function(){
    $(this).hide();
    $(this).next().fadeIn();
  });
});