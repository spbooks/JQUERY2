$(document).ready(function(){
  $('.check-all:checkbox').change(function() {
    var group = ':checkbox[name=' + $(this).attr('name') + ']';
    $(group).attr('checked', $(this).attr('checked'));
  });
});