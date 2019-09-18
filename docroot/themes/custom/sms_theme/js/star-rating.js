(function ($, Drupal, window, document) {
  'use strict';

  // Example of Drupal behavior loaded.
  Drupal.behaviors.starJS = {
    attach: function (context, settings) {

        function getStars(rating) {
          if($.isNumeric(rating)) {
            // Round to nearest half
            rating = Math.round(rating * 2) / 2;
            let output = [];

            // Append all the filled whole stars
            for (var i = rating; i >= 1; i--) {
              output.push('<i class="fa fa-star" aria-hidden="true" style="color: orange;"></i>&nbsp;');
            }

            // If there is a half a star, append it
            if (i == 0.5) {
              output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: orange;"></i>&nbsp;');
            }

            // Fill the empty stars
            for (let i = (5 - rating); i >= 1; i--) {
              output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: orange;"></i>&nbsp;');
            }

            return output.join('');
          }
        }


        $( ".view-resource-availability td.views-field-field-overall-rating" ).each(function() {
          var rating = $(this).text();
          var rating_html = getStars(rating);
          $(this).html(rating_html);
        });

      if (typeof context['location'] !== 'undefined') { // Only fire on document load.

        $(".field--type-list-float .field__item, .star-rating-rows .field-content").each(function () {
          var rating_float = $(this).text();
          var rating_html_float = getStars(rating_float);
          $(this).html(rating_html_float);
        });

        // Add default styling to required element.
        $('.required .form-radios').addClass("required-stars");

        $('.required .form-radios input').each(function () {
          if ($(this).is(':checked')) {
            $(this).parent().removeClass("required-stars");
          }
        });

        $('.required .form-radios input').click(function () {
          if ($(this).prop("checked")) {
            $(this).parent().removeClass("required-stars");
          }
        });
      }
    }
  };

})(jQuery, Drupal, this, this.document);
