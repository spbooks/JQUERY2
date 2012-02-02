$(document).ready(function(){
  $('p:first').animate(
    {
      height: '+=100px',
      color: 'green'
    },
    {
      duration: 'slow',
      easing: 'swing',
      complete: function() {alert('done!');},
      queue: false
    }
  );
});
