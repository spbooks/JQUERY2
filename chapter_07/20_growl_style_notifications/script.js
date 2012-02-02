$(document).ready(function(){
	addNotice('<p>Welcome to StarTrackr!</p>');

	setTimeout(function() {
		addNotice('<p>Stay awhile!</p><p>Stay FOREVER!</p>');
	}, 1000);
	
	$('#growl')
	.find('.close')
	.on('click', function() {
		$(this)
			.closest('.notice')
			.animate({
				border: 'none',
				height: 0,
				marginBottom: 0,
				marginTop: '-6px',
				opacity: 0,
				paddingBottom: 0,
				paddingTop: 0,
				queue: false
			}, 1000, function() {
				$(this).remove();
			});
	});
});

function addNotice(notice) {
	$('<div class="notice"></div>')
		.append('<div class="skin"></div>')
		.append('<a href="#" class="close">close</a>')
		.append($('<div class="content"></div>').html(notice))
		.hide()
		.appendTo('#growl')
		.fadeIn(1000);
}
