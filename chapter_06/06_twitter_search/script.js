$(document).ready(function() {
  var searchTerm = 'celebs';
  var baseUrl = "http://search.twitter.com/search.json?q=";
  $.getJSON(baseUrl + searchTerm + "&callback=?", function(data) {
    $.each(data.results, function() {
      $('<div></div>')
        .hide()
        .append('<img src="' + this.profile_image_url + '" />')
        .append('<span><a href="http://www.twitter.com/' 
          + this.from_user + '">' + this.from_user 
          + '</a>&nbsp;' + this.text + '</span>') 
        .appendTo('#tweets')
        .fadeIn();
    });
  });
});
