(function ($, Drupal) {

  $(document).ready(function () {
    function getStars(rating) {
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

    $( ".field--type-list-float .field__item" ).each(function() {
      var rating = $(this).text();
      console.log(rating);
      var rating_html = getStars(rating);
      $(this).html(rating_html);
    });

  });

})(jQuery, Drupal);
