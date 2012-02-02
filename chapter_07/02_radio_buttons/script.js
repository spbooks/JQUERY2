$(document).ready(function(){
  $('[type=input]').change(function(){
    alert($(this).val());
  });

  $('[name=sex]').bind('click', function(){
    alert($(this).val());
  });
});

