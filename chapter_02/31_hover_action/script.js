$(document).ready(function(){
  $('#celebs tbody tr:even').addClass('zebra');
  $('#celebs tbody tr').hover(function(){
    $(this).addClass('zebraHover');
  }, function(){
    $(this).removeClass('zebraHover');
  });
});