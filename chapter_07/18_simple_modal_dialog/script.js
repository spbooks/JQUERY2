$(document).ready(function(){
	$('#eulaOpen').click(function() {
		openDialog('#eula');
	});

	$('#eula').find('.ok, .cancel')
	.on('click', function() {
		closeDialog(this);
	})
	.end()
		.find('.ok')
		.on('click', function(){
			// Clicked Agree!
			console.log('clicked agree!');
		})
	.end()
		.find('.cancel')
		.on('click', function() {
			// Clicked disagree!
			console.log('clicked disagree!');
		});
});

function openDialog(selector) {
	$(selector)
		.clone()
		.appendTo('#overlay')
		.show()
		.parent()
		.fadeIn('fast');
}
	
function closeDialog(selector) {
	$(selector)
	.parents('#overlay')
	.fadeOut('fast', function() {
		$(this)
			.find('.dialog')
			.remove();
	});
}