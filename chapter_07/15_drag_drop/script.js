$(document).ready(function(){
	$('#photo-grid > img').draggable({
		revert: 'invalid'
	});
	$('.trash').droppable({
		activeClass: 'highlight',
		hoverClass: 'highlight-accept',
		drop: function(event, ui) {
			puffRemove($(ui.draggable));
		}
	});
});

function puffRemove(which) {
	var $this = $(which),
		image_width = 128,
		scale_factor = $this.outerWidth() / image_width,
		frame_count = 5,
		$trash, $puff;
	
	// create container
	$trash = $('<div class="puff"></div>')
		.css({
			height: $this.outerHeight(),
			left: $this.offset().left,
			top: $this.offset().top,
			width: $this.outerWidth(),
			position: 'absolute',
			overflow: 'hidden'
		})
		.appendTo('body');

	// add the animation image
	$puff = $('<img class="puff" src="epuff.png"/>')
		.css({
			width: image_width * scale_factor,
			height: (frame_count * image_width) * scale_factor
		})
		.data('count', frame_count)
		.appendTo($trash);

		// remove the original element
		$this.animate({
			opacity: 0
		}, 'fast').remove();

		// or even
		// $this.fadeOut('fast');
	
	(function animate() {

		var count = $puff.data('count');

		if(count) {
			var top = frame_count - count;
			var height = $puff.height() / frame_count;
			$puff.css({
				"top": - (top * height),
				'position': 'absolute'
			});
			$trash.css({
				'height': height
			})
			$puff.data("count", count - 1);
			setTimeout(animate, 75);
		}
		else {
			$puff.parent().remove();
		}
	})();

}
