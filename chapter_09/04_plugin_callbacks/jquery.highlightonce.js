(function($) {		
	// Shell for your plugin code
	$.fn.highlightOnce = function(options, callback) {
		if ($.isFunction(options)) {
			callback = options;
			options = null;
		}

		options = $.extend({}, $.fn.highlightOnce.defaults,options);
		// Plugin code
		return this.each(function() {
			// Do something to each item
			$(this)
				.data('original-color', $(this).css('background-color'))
				.css('background-color', options.color)
				.one('mouseenter', function() {
					$(this).animate(
						{'background-color': $(this).data('original-color')}, 
						options.duration,
						options.complete 
					);
				});

			// Fire the setup callback
			if ($.isFunction(options.setup)) {
				options.setup.call(this);
			}
		});

		$.fn.highlightOnce.defaults = {
			color: '#fff47f',
			duration: 'fast',
			setup: null,
			complete: null
		};		
	};
})(jQuery);