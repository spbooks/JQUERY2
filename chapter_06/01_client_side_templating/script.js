function template(row, cart) {
  row.find('.item_name').text(cart.name);
  row.find('.item_qty').text(cart.qty);
  row.find('.item_total').text(cart.total);
  return row;
}

$(document).ready(function() {
  var newRow = $('#cart .template').clone().removeClass('template');
  var cartItem = {
    name: 'Glendatronix',
    qty: 1,
    total: 450
  };
  template(newRow, cartItem)
    .appendTo('#cart')
    .fadeIn();  
});

