$(document).ready(function() {
  $('#tags').selectable({
    stop: function() {
      // The user stopped selecting!
      var names = $.map($('.ui-selected, this'), function(element, i) {
        return $(element).text();
      });
      
      $('li', this)
        .filter(function() {
          return ($.inArray($(this).text(), names) != -1);
        })
        .addClass('ui-selected');
    }
  });
  
  $('#approve').click(function() {
    var approvedItems = "";
    $('#tags')
      .find('.ui-selected')
      .addClass('approve')
      .removeClass('ui-selected reject')
      .each(function() {
        approvedItems += $(this).index() + "|";
      });
    $('#approved').val(approvedItems);
  });
  
  $('#reject').click(function() {
    $('#tags').find('.ui-selected')
    .addClass('reject')
    .removeClass('ui-selected approve');
  });
  
  $('#clear').click(function() {
    $('#tags')
      .find('li')
      .removeClass('ui-selected approve reject');
    $('#approved').val('');
  });
});