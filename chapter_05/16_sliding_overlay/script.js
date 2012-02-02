$(document).ready(function(){
  $('<div></div>')
    .attr('id', 'overlay')
    .css('opacity', 0.65)
    .hover(function(){
      $(this).addClass('active');
    }, function() {
      $(this).removeClass('active');
      setTimeout(function(){
        $('#overlay:not(.active)').slideUp(function(){
          $('a.cart-hover').removeClass('cart-hover');
        });
      }, 800);
    }).appendTo('body');
    
  $('.cart a').mouseover(function(){
    $(this).addClass('cart-hover');
    $('#overlay:not(:animated)')
      .addClass('active')
      .html('<h1>You have 5 items in your cart.</h1><a href="#">View Cart</a>&nbsp;<a href="#">Checkout</a>')
      .slideDown();      
  });

});
