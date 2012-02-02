$(document).ready(function(){
  $('#ajaxInProgress')
    .ajaxStart(function() { 
      $(this).addClass('progress'); 
    })
    .ajaxStop(function() { 
      $(this).removeClass('progress'); 
    });
  GALLERY.init();
});

var GALLERY = {
  container: '#gallery',
  url: 'getImages',
  delay: 5000,
  running: false,
  
  init: function() {
    var _gallery = this;
    $(this.container).scroll(function() {
      _gallery.checkScroll();
    });
  },
  checkScroll: function() {
    var gallery_div = $(this.container);
    if(gallery_div[0].scrollHeight - gallery_div.height() - gallery_div.scrollTop() <= 0) {
      this.load();
    }
  },
  load: function() {
    // Don't call if we're already running!
    if (this.running) {
      return;
    }
    this.running = true;
    
    var _gallery = this;
    $.ajax({ 
      type:"get", 
      url: this.url, 
      success: function(data) { 
        var images = data.split('|');
        $.each(images, function() {  
          _gallery.display(this);
        });
      },
      complete: function() {
        _gallery.running = false;
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