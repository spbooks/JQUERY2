var DIALOG = {
	current: null,
	delay: 600,
	timer: null,
	setDialogs: function () {
		var screenWidth = $(window).width(),
			screenBottom = $(window).scrollTop() + $(window).height();	
		
		$('.dialog').parent().hover(function(){
			// store the dialog being hovered
			DIALOG.current = $(this);
			DIALOG.timer = setTimeout(function(){
				// find the dialog, 
				DIALOG.current.find(".dialog").fadeIn('fast');
			}, DIALOG.delay);
		}, function(){
			// on mouseout, clear timer and hide dialog
			clearTimeout(DIALOG.timer);
			$(this).find(".dialog").fadeOut('fast');
		}).attr("title", ""); // clear the title to stop browser tooltips
		
		$(".dialog").each(function() { // grab the containing element
			var container = $(this).parent(),
				top = container.height(), // default placement
				totalHeight = top + $(this).outerHeight(),
				width = $(this).outerWidth(),
				offset = container.offset(),
				left = 0;

			// give it relative position if required
			if (container.css('position') != 'absolute' && container.css('position') != 'fixed') {
				container.css({position: 'relative'});
			}

			// re-position if it's off the right of the screen
			if (offset.left + width > screenWidth) {
				left = 0 - width + 42;
				$(this).addClass('left');
			}
			else {
				$(this).removeClass('left');
			}
			
			// re-position if it's off the bottom of the screen
			if (offset.top + totalHeight > screenBottom) {
				top = 0 - $(this).outerHeight();
				$(this).addClass('above');
			} 
			else {
				$(this).removeClass('above');
			}

			// finally set the css properties to position onscreen
			$(this).css({
				"top": top,
				"left": left
			});
		});
	}
}
	
$(document).ready(function() {
	DIALOG.setDialogs();
});

$(window).resize(function(){
	DIALOG.setDialogs();
});
