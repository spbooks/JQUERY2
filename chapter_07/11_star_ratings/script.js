$(document).ready(function(){
 starRating.create('.stars');
});

// The widget
var starRating = {
  create: function(selector) {
    // loop over every element matching the selector
    $(selector).each(function() {
      var $list = $('<div></div>');
      // loop over every radio button in each container
      $(this)
        .find('input:radio')
        .each(function(i) {
          var rating = $(this).parent().text();
          var $item = $('<a href="#"></a>')
            .attr('title', rating)
            .addClass(i % 2 == 1 ? 'rating-right' : '')
            .text(rating);
          
          starRating.addHandlers($item);
          $list.append($item);
          
          if($(this).is(':checked')) {
            $item.prevAll().andSelf().addClass('rating');
          }
        });
        // Hide the original radio buttons
        $(this).append($list).find('label').hide();
    });
  },
  addHandlers: function(item) {
    $(item).click(function(e) {
      // Handle Star click
      var $star = $(this);
      var $allLinks = $(this).parent();
      
      // Set the radio button value
      $allLinks
        .parent()
        .find('input:radio[value=' + $star.text() + ']')
        .attr('checked', true);
        
      // Set the ratings
      $allLinks.children().removeClass('rating');
      $star.prevAll().andSelf().addClass('rating');
      
      // prevent default link click
      e.preventDefault();
          
    }).hover(function() {
      // Handle star mouse over
      $(this).prevAll().andSelf().addClass('rating-over');
    }, function() {
      // Handle star mouse out
      $(this).siblings().andSelf().removeClass('rating-over')
    });    
  }
  
}