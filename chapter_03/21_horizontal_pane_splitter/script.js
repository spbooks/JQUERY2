$(document).ready(function(){
  $('#splitter > div:first').resizable({ 
    handles: 'e', 
    minWidth : '100',
    maxWidth : '400',
    resize: function() { 
      var remainingSpace = $(this).parent().width() - $(this).outerWidth();
      var divTwo = $(this).next();
      var divTwoWidth = remainingSpace - (divTwo.outerWidth() - divTwo.width());
      divTwo.css('width', divTwoWidth + 'px');
    }
  });
});
