var GALLERY = {
  container: '#gallery',
  url: 'getImages',
  delay: 5000,
  load: function() {
    var _gallery = this;
    
    $.ajax({ 
      type:"get", 
      url: this.url, 
      success: function(data) { 
        var images = data.split('|');
        $.each(images, function() {  
          _gallery.display(this);
        });
      }
    });
  },
  display: function(image_url) {
    $('<img></img>')
      .attr('src', '../../images/' + image_url)
      .hide()
      .load(function() { 
        $(this).fadeIn();
      })
      .appendTo(this.container);
  }
}

$(document).ready(function() {
  GALLERY.load();
});
