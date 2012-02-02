$(document).ready(function(){
	$('#info').tabs({
		event: 'mouseover',
		fx: {
			opacity: 'toggle',
			duration: 'fast'
		},
		spinner: 'Loading...',
		cache: true
	});
});
