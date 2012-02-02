/* * * * * * * * * * * * * * * * * * * * 
*
* remove before publishing
*
** * * * * * * * * * * * * * * * * * * */

$(document).ready(function(){
	var chunk = function (which, value) {
		var chunk = $(which),
			chunks = chunk.html().split("\n");

		if (chunks[0].length === 0) {
			chunks.shift();
		}

		if (!chunks[chunks.length - 1].replace(/\t/g, "").length) {
			chunks.pop();
		}

		$.each(chunks, function(i){
			chunks[i] = chunks[i].replace(/\t/g, "");

			if (chunks[i].length && chunks[i].charAt(0) !== "<") {
				chunks[i] = ["<p>", chunks[i], "</p>"].join("");
			}
		});

		chunk.html(chunks.join(""));
	}

	$('.editable, .editable-area')
		.hover(function() {
			$(this).toggleClass('over-inline');
		})
		.click(function(event) {// start the inline editing
			var $editable = $(this);

			if ($editable.hasClass('active-inline')) {
				return;
			}

			if ($editable.hasClass('editable')) {// Determine what kind of form element we need
				contents = $.trim($editable.html());
				editElement = "<input/>";
			}
			else {
				chunk(this);

				$editable.find("span").each(function(){
					console.log($(this).html())
				})
				contents = $.trim($editable.html());
				editElement = "<textarea></textarea>";
			}

			$editable
				.addClass('active-inline')
				.empty();

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
			var $editable = $(this),
				edited = $editable.find(':first-child').val();

			$editable.children().replaceWith('<em class="ajax">Saving ... </em>');
	
			// post the new value to the server along with its ID
			$.post('save', {
					id: $editable.attr('id'),
					value: edited
				},
				function(data) {
					$editable
						.removeClass('active-inline')
						.contents()
						.replaceWith(edited);
				});
		});
});





//---------------------------------------------------------------------





$(document).ready(function(){
	$('.editable, .editable-area')
		.hover(function() {
			$(this).toggleClass('over-inline');
		})
		.click(function(event) {// start the inline editing
			var $editable = $(this);
			if($editable.hasClass('active-inline')) {
				return;
			}
			var contents = $.trim($editable.html());
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
	
			var edited = $editable.find(':first-child:input').val();
			$editable.children().replaceWith('<em class="ajax">Saving ... </em>');
	
			// post the new value to the server along with its ID
			$.post('save', {
					id: $editable.attr('id'),
					value: edited
				},
				function(data) {
					$editable
						.removeClass('active-inline')
						.contents()
						.replaceWith(edited);
				});
		});
});
