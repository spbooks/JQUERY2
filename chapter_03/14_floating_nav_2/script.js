$(document).ready(function() {
  var $window = $(window),
  $navigation = $("#navigation");

  $window.scroll(function() {
    if (!$navigation.hasClass("fixed") && ($window.scrollTop() > $navigation.offset().top)) {
        $navigation.addClass("fixed").data("top", $navigation.offset().top);
    }
    else if ($navigation.hasClass("fixed") && ($window.scrollTop() < $navigation.data("top"))) {
        $navigation.removeClass("fixed");
    }
  }); 
});