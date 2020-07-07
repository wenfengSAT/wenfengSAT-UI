jQuery(document).ready(function($){

  var horizontal = $('body').hasClass('horizontal-menu');

  if (!horizontal) {
    var min_height = jQuery(window).height();
    var win_width = jQuery(window).width();
    if (win_width >= 980) {
      jQuery('div.sidebar').css('min-height', min_height);
    }

    $(window).resize(function(){
      var min_height = jQuery(window).height();
      var win_width = jQuery(window).width();
      if (win_width >= 980) {
        jQuery('div.sidebar').css('min-height', min_height);
      }
    });
  }

});