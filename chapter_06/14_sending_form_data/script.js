var GALLERY = {
  container: '#gallery',
  url: 'images.xml',
  delay: 1000,
  attempts: 3,
  running: false,
  
  init: function() {
	  this.container = $(this.container);
	  var _gallery = this;
	  $(this.container).scroll(function() {
		  _gallery.checkScroll();
	  });
	  this.load();
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
      dataType: 'xml',
      url: this.url, 
      success: function(data) { 
        $(data)
          .find('celebs')
          .children()
          .each(function() {
            var node = $(this);
            var id = node.attr('id');
            var name = node.find('name').text();
            var image = node.find('image').text();
            _gallery.display({'id': id, 'image': image, 'name': name});
          });
      },
      complete: function() {
        // reset running variable to false
        _gallery.running = false;
        // remove the spinner 
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
  display: function(dataItem) {
    $('<img />')
      .attr({
        src: '../../images/' + dataItem.image,
        alt: dataItem.name
      })
      .hide()
      .data('id', dataItem.id)
      .load(function() { 
        $(this).fadeIn();
      })
      .click(function() {
        CELEB.load($(this).data('id'));
      })
      .appendTo('#gallery');
  }
}

var CELEB = {
  url: 'celebs.json',
  
  load: function(image_id) {
    var _celeb = this;
    $('#details input').attr('disabled', 'disabled');
    $.getJSON(
      this.url,

      function(data) {
        $('#details input').removeAttr('disabled');
        _celeb.display(data);
      });
  },
  
  display: function(data) {
    $('#id').val(data.id);
    $('#name').val(data.name);
    $('#tags').val(data.tags.join(" "));
  },
  
  update: function() {
    var form_data = $('form').serialize();
    $.ajax({
      type: "POST",
      url: this.url,
      data: form_data,
      error: function() {
        $('#status').text('Update failed. Try again.').slideDown('slow');
      },
      success: function() {
        $('#status').text('Update successful!');        
      },
      complete: function() {
        setTimeout(function() {
          $('#status').slideUp('slow');
        }, 3000);
      }
    });

  }
}

$(document).ready(function() {
  $('#ajaxInProgress')
  .ajaxStart(function() { 
    $(this).addClass('progress'); 
  })
  .ajaxStop( function(){ 
    $(this).removeClass('progress'); 
  });
  
  GALLERY.init();
  
  $('#update').click(function() {
    CELEB.update();
  });
});