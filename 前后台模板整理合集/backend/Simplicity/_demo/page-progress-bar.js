jQuery(document).ready(function($){

  /*** Animated Loading Progress Bar ***/
  $('.progress.animated').each(function(index, el) {
    var obj   = $(el);
    var bar   = $('.progress-bar', obj);
    var value = $(bar).attr('aria-valuenow');
    var text  = $('.sr-only', obj);
    var percentage_size = $(obj).width()*(value/100);

    var width = 0;
    var i = setInterval(function(){
      width = $(bar).width();
      $(bar).css('width', width+35);
      if (width >= percentage_size) {
        clearInterval(i);
        $(bar).html(value + '%');
      }
    }, 250);
  });

});