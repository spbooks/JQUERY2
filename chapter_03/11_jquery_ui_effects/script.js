$(document).ready(function() {
  $('p:first')
    .effect('shake', {times:3}, 300)
    .effect('highlight', {}, 3000)
    .hide('explode', {}, 1000);  
});
