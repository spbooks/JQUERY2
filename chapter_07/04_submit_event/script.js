$(document).ready(function(){
  $("form").submit(function(event){
  	var error = false;
  	$(this).find("[type=text]").each(function(){
  		if (!$(this).val().length) {
  			alert("Textboxes must have a value!");
  			$(this).focus();
  			error = true;
  			return false; // Only exits the “each” loop
  		}
  	});
  	if (error) {
  		event.preventDefault();
  	}
  });
});

