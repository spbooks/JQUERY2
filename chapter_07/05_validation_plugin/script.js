$(document).ready(function(){
  $('#signup form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      website: {
        url: true
      },
      password: {
        minlength: 6,
        required: true
      },
      passconf: {
        equalTo: "#password"
      }
    },
    success: function(label) {
      label.text('OK!').addClass('valid');
    }
  });
});

