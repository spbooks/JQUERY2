$(document).ready(function(){
  $('#celebs tbody tr:even').addClass('zebra');
  $('#celebs tbody tr').mouseover(function(){
    $(this).addClass('zebraHover');
  });
  $('#celebs tbody tr').mouseout(function(){
    $(this).removeClass('zebraHover');
  });
});