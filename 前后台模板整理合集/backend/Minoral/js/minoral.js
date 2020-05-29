$(function(){

  /*********************************/
  /* multilevel dropdowns function */
  /*********************************/
  
  $('li.dropdown-submenu a.dropdown-toggle').on('click', function(event) {
    // Avoid following the href location when clicking
    event.preventDefault(); 
    // Avoid having the menu to close when clicking
    event.stopPropagation();
    // If a menu is already open we close it
    if ($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open');
    // opening the one you clicked on
    } else if (!$(this).parent().hasClass('open')) {
      $('li.dropdown-submenu.open').removeClass('open');
      $(this).parent().addClass('open');
    }
    // resize scrollbar
    $("#navigation").getNiceScroll().resize();
  });

  /************************************/
  /* sidebar menu dropdowns functions */
  /************************************/
  $('#navigation .dropdown.open').data('closable', false);

  $('#navigation .dropdown').on({
    "shown.bs.dropdown": function() {
      $(this).data('closable', false);
      // resize scrollbar
      $("#navigation").getNiceScroll().resize();
    },
    "click": function() {
      $(this).data('closable', true);
      if (!$(this).hasClass('open') && !$(this).hasClass('change-status')) {
        $('li.dropdown.open').removeClass('open');
      }
      // resize scrollbar
      $("#navigation").getNiceScroll().resize();
    },
    "hide.bs.dropdown": function() {
      return $(this).data('closable');
      // resize scrollbar
      $("#navigation").getNiceScroll().resize();
    }
  });

  /*******************************/
  /* sidebar collapsing function */
  /*******************************/

  $('.sidebar-collapse a').on('click', function(){
    // Add or remove class collapsed
    $('#navigation').toggleClass('collapsed');
    
    if ($('#navigation').hasClass('collapsed')) {
      
      //make tooltiops active
      if ($('body').hasClass('direction-rtl')) {
        var placement = 'left';
      } else {
        var placement = 'right';
      }

      $('#navigation li a').tooltip({
        placement: placement,
        trigger: 'hover',
        html : true,
        container: 'body'
      });    

      if ($(window).width() < 768) {
        //if width is less than 768px move content to left 0px
        if ($('body').hasClass('direction-rtl')) {
          $('#content').animate({right: "0px"},150)
        } else {
          $('#content').animate({left: "0px"},150)
        }
      }
      else {
        //if width is not less than 768px give padding 55px to content
        if ($('body').hasClass('direction-rtl')) {
          $('#content').animate({paddingRight: "55px"},150)
        } else {
          $('#content').animate({paddingLeft: "55px"},150)
        }
      }

    } else {

      //destroy tooltips
      $('#navigation li a').tooltip('destroy');

      if ($(window).width() < 768) {
        //if width is less than 768px move content to left 210px
        if ($('body').hasClass('direction-rtl')) {
          $('#content').animate({right: "210px"},150)
        } else {
          $('#content').animate({left: "210px"},150)
        }      
      }
      else {
        //if width is not less than 768px give padding 265px to content
        if ($('body').hasClass('direction-rtl')) {
          $('#content').animate({paddingRight: "265px"},150)
        } else {
          $('#content').animate({paddingLeft: "265px"},150)
        }  
      }
    }

  });

  /*******************************/
  /* submenu collapsing function */
  /*******************************/

  $('#submenutoggle').click(function(){
    $(this).parent().parent().toggleClass('open');
  });

  var submenuWidth = 0;
  $('#content .submenu > *').not('.collapsed').each(function() { submenuWidth += $(this).width(); })
  
  var forceCollapsedSubmenu = function() {
    if ($(window).width() < (submenuWidth + 285)) {
      $('#content .submenu').addClass('force-collapse');
    } else {
      $('#content .submenu').removeClass('force-collapse');
    }
  };

  forceCollapsedSubmenu();

  $(window).resize(function() {
    forceCollapsedSubmenu();
  });

  /******************/
  /* main scrollbar */
  /******************/

  if ($('body').hasClass('direction-rtl')) {
    var scrollPlacement = 'left';
  } else {
    var scrollPlacement = 'right';
  }


  $("#content").not('.full-width').niceScroll({
    cursorcolor: '#000000',
    zindex: 999999,
    bouncescroll: true,
    cursoropacitymax: 0.4,
    cursorborder: '',
    cursorborderradius: 7,
    cursorwidth: '7px',
    background: 'rgba(0,0,0,.1)',
    autohidemode: false,
    railpadding: {top:0,right:2,left:2,bottom:0},
    railalign: scrollPlacement
  });

  /************************/
  /* navigation scrollbar */
  /************************/

  $("#navigation").niceScroll({
    cursorcolor: '#000000',
    zindex: 999999,
    bouncescroll: true,
    cursoropacitymax: 0.4,
    cursorborder: '',
    cursorborderradius: 0,
    cursorwidth: '4px',
    railalign: 'left',
    railoffset: {top:60,left:0}
  });

  /**************************************/
  /* run this function if window resize */
  /**************************************/

  var widthLess768 = function(){
    
    if ($(window).width() < 768) {
      var collapsedContent = $('.navbar-collapse .collapsing-content').html()
      
      //hide top navbar objects
      $('.navbar-collapse .collapsing-content').hide();
      
      //paste top navbar objects to sidebar
      $('.collapsed-content').html(collapsedContent);

      //make tooltiops active
      if ($('body').hasClass('direction-rtl')) {
        var placement = 'left';
      } else {
        var placement = 'right';
      }

      $('#navigation li a').tooltip({
        placement: placement,
        trigger: 'hover',
        html : true,
        container: 'body'
      });   

      //make navigation collapsed
      $('#navigation').addClass('collapsed');

      //move content if navigation is collapsed
      if ($('body').hasClass('direction-rtl')) {
        if ($('#navigation').hasClass('collapsed')) {
          $('#content').animate({right: "0px",paddingRight: "55px"},150)
        } else {
          $('#content').animate({paddingRight: "55px"},150)
        };
      } else {
        if ($('#navigation').hasClass('collapsed')) {
          $('#content').animate({left: "0px",paddingLeft: "55px"},150)
        } else {
          $('#content').animate({paddingLeft: "55px"},150)
        };
      }

      //page refresh function
      $('.page-refresh').click(function() {
        location.reload();
      });

      /**************************/
      /* color schemes tooltips */
      /**************************/
      $('#color-schemes li a').tooltip({
        placement: 'bottom',
        trigger: 'hover',
        html : true,
        container: 'body'
      });

      /**********************************/
      /* color scheme changing function */
      /**********************************/

      $('#color-schemes li a').click(function(){
        var scheme = $(this).attr('class');
        var lastClass = $('body').attr('class').split(' ').pop();

        $('body').removeClass(lastClass).addClass(scheme);
      });

    }

    else {

      //show content of top navbar
      $('.navbar-collapse .collapsing-content').show();
      
      //remove top navbar objects from sidebar
      $('.collapsed-content').html('');

      //tooltips destroy
      $('#navigation li a').tooltip('destroy');

      //make navigation not collapsed
      $('#navigation').removeClass('collapsed');

      //move content if navigation is not collapsed
      if ($('body').hasClass('direction-rtl')) {
        if ($('#navigation').hasClass('collapsed')) {
          $('#content').animate({right: "210px",paddingRight: "265px"},150)
        } else {
          $('#content').animate({paddingRight: "265px"},150)
        };
      } else {
        if ($('#navigation').hasClass('collapsed')) {
          $('#content').animate({left: "210px",paddingLeft: "265px"},150)
        } else {
          $('#content').animate({paddingLeft: "265px"},150)
        };
      }    
    }  

  };

  /**************************************/
  /* run this function after page ready */
  /**************************************/

  widthLess768();

  /**************************************/
  /* run this functions if window resize */
  /**************************************/

  $(window).resize(function() {
    //if submenu is opened close it
    $('.submenu').removeClass('open');

    widthLess768();

  });

  /*************************/
  /* page refresh function */
  /************************/

  $('.page-refresh').click(function() {
    location.reload();
  });

  /************************************************/
  /* ADD ANIMATION TO TOP MENU & SUBMENU DROPDOWN */
  /************************************************/

  $('.quick-action.dropdown, .submenu .nav .dropdown, .messages.dropdown, .settings.dropdown, .change-status.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').addClass('animated fadeInDown');
    $(this).find('#user-inbox').addClass('animated bounceIn');
  });

  $('#navigation .dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').addClass('animated fadeInDown');
  });

  /****************************/
  /* status changing function */
  /****************************/

  $('#user-status .dropdown li a').click(function(){
    var status = $(this).data('status');
    var lastClass = $('#user-status').attr('class').split(' ').pop();
    var myStatus = $(this).html();

    $('#user-status').removeClass(lastClass).addClass(status);
    $('#user-status .my-status').html(myStatus);
  });

  /**************************/
  /* color schemes tooltips */
  /**************************/
  
  $('#color-schemes li a').tooltip({
    placement: 'bottom',
    trigger: 'hover',
    html : true,
    container: 'body'
  });

  /**********************************/
  /* color scheme changing function */
  /**********************************/

  $('#color-schemes li a').click(function(){
    var scheme = $(this).attr('class');
    var lastClass = $('body').attr('class').split(' ').pop();

    $('body').removeClass(lastClass).addClass(scheme);
  });


  /**************************/
  /* block element function */
  /**************************/

  function elBlock(el) {    
    $(el).block({
      message: '<div class="el-reloader"></div>',
      overlayCSS: {
        opacity: 0.6,
        cursor: 'wait',
        backgroundColor: '#fff',
      },
      css: {
        padding: '5px',
        border: '0',
        backgroundColor: 'transparent'
      }
    });
  };
   
  /****************************/
  /* unblock element function */
  /****************************/

  function elUnblock(el) {
    $(el).unblock();
  };

  /*************************/
  /* tile refresh function */
  /*************************/

  $('.tile-header .controls .refresh').click(function() { 
    var el = $(this).parent().parent().parent();
    elBlock(el);
    window.setTimeout(function() {
      elUnblock(el);
    }, 1000);

    return false;
  });

  /************************/
  /* tile remove function */
  /************************/

  $('.tile-header .controls .remove').click(function() {
    $(this).parent().parent().parent().addClass('animated fadeOut');
    $(this).parent().parent().parent().attr('id', 'el_remove');
     setTimeout( function(){      
      $('#el_remove').remove(); 
     },500);

     return false;
  });

});


/******************/
/* page preloader */
/******************/

$(window).load(function() { 
  $("#loader").delay(500).fadeOut(300); 
  $(".mask").delay(800).fadeOut(300, function(){
    $('#user-new-messages').addClass('animated bounceIn');
    $('#user-status .my-status').addClass('animated bounceIn');
  });
});