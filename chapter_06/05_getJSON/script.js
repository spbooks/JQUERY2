$(document).ready(function() {
  $.getJSON('http://feeds.delicious.com/v2/json/tag/celebs?callback=?', 
    function(data) {
      alert('Fetched ' + data.length + ' items!');
    });
});
