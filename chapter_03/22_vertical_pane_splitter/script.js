$(document).ready(function(){
  $('#splitter > div:first').resizable({ 
    handles: 's', 
    minHeight : '50',
    maxHeight : '200',
    resize: function() { 
        var remainingSpace = $(this).parent().height() - $(this).outerHeight();
        var divTwo = $(this).next();
        var divTwoHeight = remainingSpace - (divTwo.outerHeight() - divTwo.height());
        divTwo.css('height', divTwoHeight + 'px');
    }
  });
});
