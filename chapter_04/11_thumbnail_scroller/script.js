$(document).ready(function() {
	$('#photos_inner').toggle(function() {
		var scrollAmount = $(this).width() - $(this).parent().width();
		$(this).animate({'left':'-=' + scrollAmount}, 'slow');
	}, function() {
		$(this).animate({'left':'0'}, 'slow');
	});
});
