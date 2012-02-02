$(document).ready( function () {
    $('<div id="navigation_blob"></div>').css({
      width: 0,
      height: $('#navigation li:first a').height() + 10
    }).appendTo('#navigation');

    $('#navigation a').hover(
      function () {// Mouse over function
        $('#navigation_blob').animate(
          {
            width: $(this).width() + 10, 
            left: $(this).position().left
          },
          {
            duration: 'slow', 
            easing: 'easeOutElastic',
            queue: false
          }
        );
      }, function() {// Mouse out function
        $('#navigation_blob').animate(
          {
            width: $(this).width() + 10, 
            left: $(this).position().left
           },
           {
             duration:'slow', 
             easing: 'easeOutCirc', 
             queue: false
           })
            .animate(
              {
                left: $('#navigation li:first a').position().left
              }, 'fast' 
            );
        }
    );
});