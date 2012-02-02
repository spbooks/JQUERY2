$(document).ready(function(){
	$('#date').datepicker({
		showOn: 'both',
		buttonText: 'Choose a date',
		buttonImage: 'calendar.png',
		buttonImageOnly: true,
		numberOfMonths: 2,
		maxDate: '0d',
		minDate: '-1m',
		showButtonPanel: true
	});
});