$(document).ready(function(){
  $('#rating-0').click(function() {
    $('#dialog').dialog('open');
  });
  
  $('#dialog').dialog({
    autoOpen: false,
    height: 280,
    modal: true,
    resizable: false,
    buttons: {
      Continue: function() {
        $(this).dialog('close');
        // Submit Rating
      },
      'Change Rating': function() {
        $(this).dialog('close');
        // Update Rating
      }
    }
  });
});

