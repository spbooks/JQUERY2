$(document).ready(function(){
	var rapture = function (which) {
		$(which).contents().filter(function() {
			return this.nodeType === 3;
		})
		.wrap('<p></p>')
		.end()
			.filter('br')
	 			.remove()
			.end()
				.end()
				.children().filter(function() {
					$(this).html($.trim($(this).html().replace(/(\t|\n)/g,"")));

					return !$(this).text().length
				}).remove();
	}

	$('.editable, .editable-area')
		.hover(function() {
			$(this).toggleClass('over-inline');
		})
		.click(function(event) {// start the inline editing
			var $editable = $(this);
			if($editable.hasClass('active-inline')) {
				return;
			}
			var contents = $.trim($editable.html().replace(/\/p>/g,"/p>\n\n"));
			$editable
				.addClass('active-inline')
				.empty();
			
			// Determine what kind of form element we need
			var editElement = $editable.hasClass('editable') ? 
				'<input type="text" />' : '<textarea></textarea>';

			// Replace the target with the form element
			$(editElement)
				.val(contents)
				.appendTo($editable)
				.focus()
				.blur(function(event) {
					$editable.trigger('blur');
				});
		})		
		.blur(function(event) {// end the inline editing
			var $editable = $(this);
	
			var edited = $editable.find(':first-child').val();
			$editable.children().replaceWith('<em class="ajax">Saving ... </em>');
	
			// post the new value to the server along with its ID
			$.post('save', {
					id: $editable.attr('id'),
					value: edited
				},
				function(data) {
					$editable
						.removeClass('active-inline')
						.children()
						.replaceWith(edited);

					if ($editable.hasClass('editable-area')) {
						rapture($editable);	
					}
				}
			);
		});
});