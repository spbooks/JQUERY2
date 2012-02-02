$(document).ready(function() {
  // move the green box with setInterval
  var $green = $('#green');
    greenLeft = $green.offset().left;
  setInterval(function() {
    $green.css('left', ++greenLeft);
  }, 200);

    
  // move the red box with setTimeout
  var $red = $('#red'),
    redLeft = $('#red').offset().left;
  function moveRed() {
    $red.css('left', ++redLeft);
    setTimeout(moveRed, 200);
  }
  moveRed();
});