jQuery(window).load(function(){

  var height = jQuery(window).height();
  jQuery('body').css({'min-height':height});
  jQuery('.sidebar').css({'min-height':'100%'});

  jQuery(window).resize(function(){
    var height = $(window).height();
    jQuery('.sidebar').css({'min-height':'100%'});
  });

});