(function($) {
  $.fn.extend({
    defaultAnimate: $.fn.animate,
    animate: function(props, options) {
      var prefixes = ['Moz','Webkit','O'],//,'Khtml','Ms'
        length = prefixes.length,
        effects = {
          duration: 2000,
          easing: "ease-in-out",
          complete: null
        },
        effect, i;
      jQuery.extend(effects, options);
      effect = ['all ', effects.duration / 1000, 's ', effects.easing].join("");

      if (!jQuery.support.transitions) {
        for (i = 0; i < length; i += 1) {
          if ((prefixes[i] + "Transition") in this[0].style) {
            jQuery.support.transitions = ["-", prefixes[i], "-transition"].join("");
          }
        }
      }

      return $(this).each(function() {
        if (jQuery.support.transitions) {
          $(this).css(jQuery.support.transitions, effect).css(props);

          if ($.isFunction(effects.complete)) {
            setTimeout(function() {
              effects.complete();
            }, effects.duration);
          }
        }
        else {
          options.easing = "linear";
          $(this).defaultAnimate(props, options);
        }
      });
    }
  });

  $(document).ready(function() { 
    $('#star_0 div').animate({ width: "580px" }, {
      complete: function () {
        $("#star_0").addClass("barred").find("span").html("Made it");
      }
    });

    $('#star_1 div').animate({ width: "580px" }, {
      duration: 2000,
      easing: 'linear',
      complete: function () {
        $("#star_1").addClass("barred").find("span").html("Arrived");
      }
    });

    $('#star_2 div').animate({ width: "580px" }, {
      duration: 7000,
      easing: 'ease-in-out',
      complete: function () {
        $("#star_2").addClass("barred").find("span").html("Star status");
      }
    });
  });
})(jQuery);
