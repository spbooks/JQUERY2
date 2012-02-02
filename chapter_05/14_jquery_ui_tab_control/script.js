$(document).ready(function(){
  $('#info').tabs().tabs('rotate', 3500);
  $("#info p a[href=about.html]").click(function(){
    $('#info').tabs('select', 1);
    return false;
  });
});
