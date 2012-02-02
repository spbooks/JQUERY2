var GALLERY = {
  container: '#gallery',
  url: 'getImages',
  delay: 5000,
  
  load: function() {
    var _gallery = this;

    $.ajax({ 
      type:"get", 
      url: this.url, 
      beforeSend: function() {
        // fade out and remove the old images
        $(_gallery.container)
          .find('img')
          .fadeOut('slow', function() {
            $(this).remove();
          });
        // add the spinner 
        $('<div></div>')
          .attr('class', 'spinner')
          .hide()
          .appendTo(_gallery.container)
          .fadeTo('slow', 0.6);
      },
      success: function(data){ 
        var images = data.split('|');
        $.each(images, function() {  
          _gallery.display(this);
        });
      },
      complete: function() {
        setTimeout(function() {
          _gallery.load();
        }, _gallery.delay);
        // remove the spinner 
        $('.spinner').fadeOut('slow', function() {
          $(this).remove();
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
      .appendTo('#gallery');
  }
}

$(document).ready(function(){
  GALLERY.load();
});
