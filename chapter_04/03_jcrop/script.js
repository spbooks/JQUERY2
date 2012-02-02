$(document).ready(function(){
  var jcrop = $.Jcrop('#mofat',{
    setSelect: [10,10,300,350],
    minSize:[50,50],
    onChange: function(coords) {
      // use the coordinates
    },
    onSelect: function(coords) {
      // use the coordinates
    }
  });
  
  $('#crop :button').click(function() {
    var selection = jcrop.tellSelect();
    alert('selected size: ' + selection.w + 'x' + selection.h);
  })
});
