jQuery(document).ready(function($){

  /*** Display menu children if it has some ***/
  $('li.parent>a', 'ul.menu').click(function(){
    var link = $(this);
    var obj = $(this).parent();
    var child = $('ul.child', obj);

    if ($(child).is(':visible')) {
      $(child).slideUp(400);
      $(link).removeClass('close-child');
    } else {
      $(child).slideDown(400);
      $(link).addClass('close-child');
    }

    return false;
  });

  $("html").niceScroll({cursorwidth:'10px',
    cursorborderradius: '2px',
    cursoropacitymin: '0.3'});

  /*** Close container elements ***/
  $('a', '.close-box').click(function(){
    var obj = $(this);
    var box   = $(obj).parents('.box');
    var chart = $(obj).parents('.chart');

    if ($(box).length) {
      $(box).fadeOut(400);
    } else if ($(chart).length) {
      $(chart).fadeOut(400);
    }

    return false;
  });

  /*** Responsive Menu ***/
  $('.responsive-menu>a').click(function(){
    var menu = $('ul.menu', '.sidebar');
    if ($(menu).is(':visible')) {
      $(menu).slideUp(800);
    } else {
      $(menu).slideDown(800);
    }
  });

  /*** Close container elements ***/
  $('a.close-box', '.boxed').click(function(){
    var obj = $(this);
    var box   = $(obj).parents('.boxed');
    var chart = $(obj).parents('.chart');

    if ($('.inner', box).length) {
      if ($('.inner', box).is(':visible')) {
        $('.inner', box).slideUp(400);
        $('i', obj).removeClass('fa-chevron-up').addClass('fa-chevron-down');
      } else {
        $('.inner', box).slideDown(400);
        $('i', obj).removeClass('fa-chevron-down').addClass('fa-chevron-up');
      }
    } else if ($(chart).length) {
      if ($('.inner', chart).is(':visible')) {
        $('.inner', chart).slideUp(400);
        $('i', chart).removeClass('fa-chevron-up').addClass('fa-chevron-down');
      } else {
        $('.inner', chart).slideDown(400);
        $('i', chart).removeClass('fa-chevron-down').addClass('fa-chevron-up');
      }
    }

    return false;
  });

  /*** Close container elements ***/
  $('a.remove-box', '.boxed').click(function(){
    var link = $(this);
    var icon = $('i', link);
    var parent = $(this).parent().parent().parent().parent();

    if ($(parent).length) {
      $(parent).slideUp(400);
    }

    return false;
  });

  /*** Fixed Header Bar - Fix ***/
  if ($('body.fixed-headerbar').length) {
    var width = $('.content-liquid-full').outerWidth();
    $('.header-bar', '.fixed-headerbar').width(width);
    $(window).resize(function(){
      var width = $('.content-liquid-full').outerWidth();
      $('.header-bar', '.fixed-headerbar').width(width);
    });
  }

  /*** ToolTips ***/
  $('[data-toggle="tooltip"]').each(function(i, item) {
    $(item).tooltip();
  });

  /*** PopOvers ***/
  $('[data-toggle="popover"]').each(function(i, item) {
    $(item).popover();
  });

});