$(document).ready(function(){
  $('<span>Adding</span>')
    .addClass('adding')
    .insertAfter('.wishlist');
    
  $('.wishlist')
    .click(function(e) {
      doOneUp(this, function() {
        $(this).prev().text('Added');
      });
      e.preventDefault();
    })
});

function doOneUp(which, callback) {
  $(which)
    .next()
    .show()
    .animate({
      top: "-=50px",
      opacity: "toggle"
    }, 1000,
    function() {
      $(this)
        .css({top: ""})
        .hide('slow', callback)
        .remove();
    });
}
