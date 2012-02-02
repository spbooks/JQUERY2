$(document).ready(function() { 
  $('#button1').click(function() {
    $(this).animate({
      height: 200,
      width: 200
    }, 'slow').text("rollin'");
  });
  
  $('#button2').click(function() {
    $(this).animate({
      height: 200,
      width: 200
    }, 'slow').queue(function() {
      $(this).text('rolled!');
    }).text("rollin'");
  });
  
  $('#button3').click(function() {
    $(this).animate({
      height: 200,
      width: 200
    }, 'slow').queue(function() {
      $(this).text('rolled!');
    }).text("rollin'").animate({ // This animate won't fire
      height: 100,
      width: 100
    }, 'slow');
  });

  $('#button4').click(function() {
    $(this).animate({
      height: 200,
      width: 200
    }, 'slow').queue(function() {
      $(this).text('rolled!').dequeue();
    }).text("rollin'").animate({ // This animate won't fire
      height: 100,
      width: 100
    }, 'slow');
  });  
});