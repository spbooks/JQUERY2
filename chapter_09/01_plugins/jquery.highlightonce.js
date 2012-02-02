(function($) {
  // Shell for your plugin code
  $.fn.highlightOnce = function() {
    // Plugin code
    return this.each(function() {
      // Do something to each item
      $(this)
	.data('original-color', $(this).css('background-color'))
	.css('background-color', '#fff47f')
	.one('mouseenter', function() {
	  $(this).animate({
	    'background-color': $(this).data('original-color')
	  }, 'fast');
	});
    });
  }
})(jQuery);
