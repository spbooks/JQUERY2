$(document).ready(function(){
  var cities = ['Paris', 'New York', 'Milan', 'Stockholm', 'Melbourne', 'Montreal', 'Mexico', 'Los Angeles', 'San Francisco', 'London', 'Dubai', 'Madrid', 'Tokyo', 'Hong Kong', 'Sydney'];
  $('#location').autocomplete({
    source: cities
  });
});