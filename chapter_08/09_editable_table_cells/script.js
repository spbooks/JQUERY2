$(document).ready(function() {
  TABLE.formwork('#celebs');
});

var TABLE = {};

TABLE.formwork = function(table) {
  var $tables = $(table);
  
  $tables.each(function () {
    var _table = $(this);
    _table.find('thead tr').append($('<th class="edit">&nbsp;</th>'));
    _table.find('tbody tr').append($('<td class="edit"><input type="button" value="Edit"/></td>'))
  });
  
  $tables.find('.edit :button').on('click', function(e) {
    TABLE.editable(this);
    e.preventDefault();
  });
}

TABLE.editable = function(button) {
  var $button = $(button);
  var $row = $button.parents('tbody tr');
  var $cells = $row.children('td').not('.edit');
  
  if ($row.data('flag')) { // in edit mode, move back to table
    // cell methods
    $cells.each(function () {
      var _cell = $(this);
      _cell.html(_cell.find('input').val());
    });
    
    $row.data('flag',false);
    $button.val('Edit');
  } 
  else { // in table mode, move to edit mode 
    // cell methods
    $cells.each(function() {
      var _cell = $(this);
      _cell.data('text', _cell.html()).html('');
      
      var $input = $('<input type="text" />')
        .val(_cell.data('text'))
        .width(_cell.width() - 16);
        
      _cell.append($input);
    });
    
    $row.data('flag', true);
    $button.val('Save');
  }
}

