$(document).ready(function(){
  $('p:first').animate({height: '+=300px'}, 2000, 'easeOutBounce');
  $('p:first').animate({height: '-=300px'}, 2000, 'easeInOutExpo');
  $('p:first').animate({height: 'hide'}, 2000, 'easeOutCirc');
  $('p:first').animate({height: 'show'}, 2000, 'easeOutElastic');
});
