$(document).ready(function(){
  $('#celebs tbody tr:even').addClass('zebra');
  $('#celebs tbody tr').click(function(){
    $(this).toggleClass('zebraHover');
  });
});
