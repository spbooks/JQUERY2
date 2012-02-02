$(document).ready(function() { 
  var doToggle = function() { $(this).toggle(); };
  var doSlide = function() { $(this).slideToggle(); };
  
  $('p')
    .click(doToggle)
    .click(doSlide);
    
  $('p').unbind('click', doToggle);
});
