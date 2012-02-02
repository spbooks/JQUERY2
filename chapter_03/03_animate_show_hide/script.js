$(document).ready(function(){
  $("#hideButton").click(function() {
    $('#disclaimer').animate({ 
      opacity: 'hide',
      height: 'hide'
    }, 'slow');    
  });
});
