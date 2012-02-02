$(document).ready(function() {
	$( '#navigation li' ).hover(function() {
		$(this)
			.stop(true)
			.animate({height: '60px'},
				{duration: 600, easing: 'easeOutBounce'}
			)
	},function() {
		$(this)
			.stop(true)
			.animate(
				{height:'20px'},
				{duration:600, easing: 'easeOutCirc'}
			)
	});
});
