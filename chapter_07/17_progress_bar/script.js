$(document).ready(function(){
  $('#bar').progressbar();
  $('#chirper')
    .val('')
    .keyup(function(e) {
      var characters = 140;
      var chirp = $('#chirper').val();
      var count = chirp.length;
      
      if (count <= characters) {
        $('#bar').progressbar('value', (count / characters) * 100);
        $('#count').text(count);
      } else {
        $('#chirper').val(chirp.substring(0,characters));
      }
    });
    $('button').click(function (e) {
      window.open(
        'http://twitter.com/home/?status=' + $('#chirper').val(),
        'StarTweetr');
      e.preventDefault();
    });
});