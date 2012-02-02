$(document).ready(function(){
  $('#ajaxInProgress')
    .ajaxStart(function() { 
      $(this).addClass('progress'); 
    })
    .ajaxStop( function(){ 
      $(this).removeClass('progress'); 
    });
  GALLERY.init();
});

var GALLERY = {
  container: '#gallery',
  url: 'getImages',
  delay: 1000,
  attempts: 3,
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
  reset: function() {
    this.delay = 1000;
    this.attempts = 3;
  },
  load: function() {
    // Don't call if we're already running!
    if(this.running) {
      return;
    }
    this.running = true;
    
    var _gallery = this;
    $.ajax({ 
      type:"get", 
      url: this.url, 
      beforeSend: function() {
        // add the spinner 
        $('<div></div>')
          .attr('class', 'spinner')
          .hide()
          .appendTo(_gallery.container)
          .css('top', $(_gallery.container).scrollTop())
          .fadeTo('slow', 0.6);
      },
      success: function(data){ 
        var images = data.split('|');
        $.each(images, function() {  
          _gallery.display(this);
        });
      },
      complete: function() {
        // reset running variable to false
        _gallery.running = false;
        // remove the spinner 
        $('.spinner').fadeOut('slow', function() {
          $(this).remove();
        });
      },
      error: function(xhr, status) {
        if(_gallery.attempts-- == 0) {
          // Sorry. We give up.
          _gallery.reset();
          return;
        }
        setTimeout(function() {
          _gallery.load();
        }, _gallery.delay *= 2);
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
