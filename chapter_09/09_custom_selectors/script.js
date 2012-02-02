$(document).ready(function() { 
  $('p:abovethefold').css('color', 'red');
});

$.extend($.expr[':'], {
  abovethefold: function(el) { 
    return $(el).offset().top < $(window).scrollTop() + $(window).height(); 
  }
});