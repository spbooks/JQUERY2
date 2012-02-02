(function($) {
  $.fn.highlightOnce = function(options, callback) {
    if($.isFunction(options)) {
      callback = options;
      options = null;
    }
    options = $.extend($.fn.highlightOnce.defaults,options);
    
    return this.each(function() {
      // Do something to each item
      $(this)
        .data('original-color', $(this).css('background-color'))
        .css('background-color', options.color)
        .one('mouseenter', function() {
          $(this).css('background-color', '');
          $.isFunction(callback) && callback();
        });
    });
  };
  $.fn.highlightOnce.defaults = {
    color: '#fff47f'
  };
})(jQuery);
