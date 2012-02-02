$(document).ready(function(){
  $('#photos').cycle({
    fx: 'scrollDown',
    speedIn: 2500,
    speedOut: 500,
    timeout: 0,
    next: '#photos'
  });
});
