'use strict';
/*! main.js - v0.1.1
 * http://admindesigns.com/
 * Copyright (c) 2015 Admin Designs;*/

/* Core theme functions required for
 * most of the themes vital functionality */
var Core = function(options) {

   // Variables
   var Window = $(window);
   var Body = $('body');
   var Navbar = $('.navbar');
   var Topbar = $('#topbar');

   // Constant Heights
   var windowH = Window.height();
   var bodyH = Body.height();
   var navbarH = 0;
   var topbarH = 0;

   // Variable Heights
   if (Navbar.is(':visible')) { navbarH = Navbar.height(); }
   if (Topbar.is(':visible')) { topbarH = Topbar.height(); }

   // Calculate Height for inner content elements
   var contentHeight = windowH - (navbarH + topbarH);

   // SideMenu Functions
   var runSideMenu = function(options) {

      // If Nano scrollbar exist and element is fixed, init plugin
      if ($('.nano.affix').length) {
          $(".nano.affix").nanoScroller({
             preventPageScrolling: true
          });
      }

      // Sidebar state naming conventions:
      // "sb-l-o" - SideBar Left Open
      // "sb-l-c" - SideBar Left Closed
      // "sb-l-m" - SideBar Left Minified
      // Same naming convention applies to right sidebar

      // SideBar Left Toggle Function
      var sidebarLeftToggle = function() {

         // If sidebar is set to Horizontal we return
         if ($('body.sb-top').length) { return; }   

         // We check to see if the the user has closed the entire
         // leftside menu. If true we reopen it, this will result
         // in the menu resetting itself back to a minified state.
         // A second click will fully expand the menu.
         if (Body.hasClass('sb-l-c') && options.collapse === "sb-l-m") {
            Body.removeClass('sb-l-c');
         }

         // Toggle sidebar state(open/close)
         Body.toggleClass(options.collapse).removeClass('sb-r-o').addClass('sb-r-c');
         triggerResize();
      };

      // SideBar Right Toggle Function
      var sidebarRightToggle = function() {

         // If sidebar is set to Horizontal we return
         if ($('body.sb-top').length) { return; }

         // toggle sidebar state(open/close)
         if (options.siblingRope === true && !Body.hasClass('mobile-view') && Body.hasClass('sb-r-o')) {
            Body.toggleClass('sb-r-o sb-r-c').toggleClass(options.collapse);
         }
         else {
            Body.toggleClass('sb-r-o sb-r-c').addClass(options.collapse);
         }
         triggerResize();
      };

      // SideBar Left Toggle Function
      var sidebarTopToggle = function() {
         
         // Toggle sidebar state(open/close)
         Body.toggleClass('sb-top-collapsed');

      };

      // Sidebar Left Collapse Entire Menu event
      $('.sidebar-toggle-mini').on('click', function(e) {
         e.preventDefault();

         // If sidebar is set to Horizontal we return
         if ($('body.sb-top').length) { return; }   

         // Close Menu
         Body.addClass('sb-l-c');
         triggerResize();

         // After animation has occured we toggle the menu.
         // Upon the menu reopening the classes will be toggled
         // again, effectively restoring the menus state prior
         // to being hidden 
         if (!Body.hasClass('mobile-view')) {
            setTimeout(function() {
               Body.toggleClass('sb-l-m sb-l-o');
            }, 250);
         }
      });

      // Check window size on load
      // Adds or removes "mobile-view" class based on window size
      var sbOnLoadCheck = function() {

         // If sidebar menu is set to Horizontal we add
         // unique custom mobile css classes
         if ($('body.sb-top').length) {            
            // If window is < 1080px wide collapse both sidebars and add ".mobile-view" class
            if ($(window).width() < 900) {
               Body.addClass('sb-top-mobile').removeClass('sb-top-collapsed');
            }
            return; 
         }

         // Check Body for classes indicating the state of Left and Right Sidebar.
         // If not found add default sidebar settings(sidebar left open, sidebar right closed).
         if (!$('body.sb-l-o').length && !$('body.sb-l-m').length && !$('body.sb-l-c').length) {
            $('body').addClass(options.sbl);
         }
         if (!$('body.sb-r-o').length && !$('body.sb-r-c').length) {
            $('body').addClass(options.sbr);
         }

         if (Body.hasClass('sb-l-m')) { Body.addClass('sb-l-disable-animation'); }
         else { Body.removeClass('sb-l-disable-animation'); }

         // If window is < 1080px wide collapse both sidebars and add ".mobile-view" class
         if ($(window).width() < 1080) {
            Body.removeClass('sb-r-o').addClass('mobile-view sb-l-m sb-r-c');
         }

         resizeBody();
      };


      // Check window size on resize
      // Adds or removes "mobile-view" class based on window size
      var sbOnResize = function() {

         // If sidebar menu is set to Horizontal mode we return
         // as the menu operates using pure CSS
         if ($('body.sb-top').length) {            
            // If window is < 1080px wide collapse both sidebars and add ".mobile-view" class
            if ($(window).width() < 900 && !Body.hasClass('sb-top-mobile')) {
               Body.addClass('sb-top-mobile');
            } else if ($(window).width() > 900) {
               Body.removeClass('sb-top-mobile');
            }
            return; 
         }

         // If window is < 1080px wide collapse both sidebars and add ".mobile-view" class
         if ($(window).width() < 1080 && !Body.hasClass('mobile-view')) {
            Body.removeClass('sb-r-o').addClass('mobile-view sb-l-m sb-r-c');
         } else if ($(window).width() > 1080) {
            Body.removeClass('mobile-view');
         } else {
            return;
         }

         resizeBody();
      };

      // Function to set the min-height of content
      // to that of the body height. Ensures trays
      // and content bgs span to the bottom of the page
      var resizeBody = function() {

         var sidebarH = $('#sidebar_left').outerHeight();
         var cHeight = (topbarH + navbarH + sidebarH);

         Body.css('min-height', cHeight);
      };  

      // Most CSS menu animations are set to 300ms. After this time
      // we trigger a single global window resize to help catch any 3rd 
      // party plugins which need the event to resize their given elements
      var triggerResize = function() {
         setTimeout(function() {
            $(window).trigger('resize');

            if(Body.hasClass('sb-l-m')) {
               Body.addClass('sb-l-disable-animation');
            }
            else {
               Body.removeClass('sb-l-disable-animation');
            }
         }, 300)
      };

      // Functions Calls
      sbOnLoadCheck();
      $("#toggle_sidemenu_t").on('click', sidebarTopToggle);
      $("#toggle_sidemenu_l").on('click', sidebarLeftToggle);
      $("#toggle_sidemenu_r").on('click', sidebarRightToggle);

      // Attach debounced resize handler
      var rescale = function() {
         sbOnResize();
      }
      var lazyLayout = _.debounce(rescale, 300);
      $(window).resize(lazyLayout);

      //
      // 2. LEFT USER MENU TOGGLE
      //

      // Author Widget selector 
      var authorWidget = $('#sidebar_left .author-widget');

      // Toggle open the user menu
      $('.sidebar-menu-toggle').on('click', function(e) {      
         e.preventDefault();

         // Horizontal menu does not support sidebar widgets
         // so we return and prevent the menu from opening
         if ($('body.sb-top').length) { return; }   

         // If an author widget is present we let
         // its sibling menu know it's open
         if (authorWidget.is(':visible')) { authorWidget.toggleClass('menu-widget-open'); }

         // Toggle Class to signal state change
         $('.menu-widget').toggleClass('menu-widget-open').slideToggle('fast');

      });

      // 3. LEFT MENU LINKS TOGGLE
      $('.sidebar-menu li a.accordion-toggle').on('click', function(e) {
         e.preventDefault();

         // If the clicked menu item is minified and is a submenu (has sub-nav parent) we do nothing
         if ($('body').hasClass('sb-l-m') && !$(this).parents('ul.sub-nav').length) { return; }

         // If the clicked menu item is a dropdown we open its menu
         if (!$(this).parents('ul.sub-nav').length) {

            // If sidebar menu is set to Horizontal mode we return
            // as the menu operates using pure CSS
            if ($(window).width() > 900) {
               if ($('body.sb-top').length) { return; }
            }

            $('a.accordion-toggle.menu-open').next('ul').slideUp('fast', 'swing', function() {
               $(this).attr('style', '').prev().removeClass('menu-open');
            });
         }
         // If the clicked menu item is a dropdown inside of a dropdown (sublevel menu)
         // we only close menu items which are not a child of the uppermost top level menu
         else {
            var activeMenu = $(this).next('ul.sub-nav');
            var siblingMenu = $(this).parent().siblings('li').children('a.accordion-toggle.menu-open').next('ul.sub-nav')

            activeMenu.slideUp('fast', 'swing', function() {
               $(this).attr('style', '').prev().removeClass('menu-open');
            });
            siblingMenu.slideUp('fast', 'swing', function() {
               $(this).attr('style', '').prev().removeClass('menu-open');
            });
         }

         // Now we expand targeted menu item, add the ".open-menu" class
         // and remove any left over inline jQuery animation styles
         if (!$(this).hasClass('menu-open')) {
            $(this).next('ul').slideToggle('fast', 'swing', function() {
               $(this).attr('style', '').prev().toggleClass('menu-open');
            });
         }

      });
   }

   // Footer Functions
   var runFooter = function() {

      // Init smoothscroll on page-footer "move-to-top" button if exist
      var pageFooterBtn = $('.footer-return-top');
      if (pageFooterBtn.length) {
        pageFooterBtn.smoothScroll({offset: -55});
      }
      
   }

   // jQuery Helper Functions
   var runHelpers = function() {

      // Disable element selection
      $.fn.disableSelection = function() {
         return this
            .attr('unselectable', 'on')
            .css('user-select', 'none')
            .on('selectstart', false);
      };

      // Find element scrollbar visibility
      $.fn.hasScrollBar = function() {
         return this.get(0).scrollHeight > this.height();
      }

      // Test for IE, Add body class if version 9
      function msieversion() {
           var ua = window.navigator.userAgent;
           var msie = ua.indexOf("MSIE ");
           if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) { 
              var ieVersion = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
              if (ieVersion === 9) {$('body').addClass('no-js ie' + ieVersion);}
              return ieVersion;
           }
           else { return false; }
      }
      msieversion();

      // Clean up helper that removes any leftover
      // animation classes on the primary content container
      // If left it can cause z-index and visibility problems
      setTimeout(function() {
         $('#content').removeClass('animated fadeIn');
      },800);

   }

   // Delayed Animations
   var runAnimations = function() {

      // Add a class after load to prevent css animations
      // from bluring pages that have load intensive resources
      if (!$('body.boxed-layout').length) {
         setTimeout(function() {
            $('body').addClass('onload-check');
         }, 100);
      }

      // Delayed Animations
      // data attribute accepts delay(in ms) and animation style
      // if only delay is provided fadeIn will be set as default
      // eg. data-animate='["500","fadeIn"]'
      $('.animated-delay[data-animate]').each(function() {
         var This = $(this)
         var delayTime = This.data('animate');
         var delayAnimation = 'fadeIn';

         // if the data attribute has more than 1 value
         // it's an array, reset defaults 
         if (delayTime.length > 1 && delayTime.length < 3) {
            delayTime = This.data('animate')[0];
            delayAnimation = This.data('animate')[1];
         }

         var delayAnimate = setTimeout(function() {
            This.removeClass('animated-delay').addClass('animated ' + delayAnimation)
               .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                  This.removeClass('animated ' + delayAnimation);
               });
         }, delayTime);
      });

      // "In-View" Animations
      // data attribute accepts animation style and offset(in %)
      // eg. data-animate='["fadeIn","40%"]'
      $('.animated-waypoint').each(function(i, e) {
         var This = $(this);
         var Animation = This.data('animate');
         var offsetVal = '35%';

         // if the data attribute has more than 1 value
         // it's an array, reset defaults 
         if (Animation.length > 1 && Animation.length < 3) {
            Animation = This.data('animate')[0];
            offsetVal = This.data('animate')[1];
         }

         var waypoint = new Waypoint({
            element: This,
            handler: function(direction) {
               console.log(offsetVal)
               if (This.hasClass('animated-waypoint')) {
                  This.removeClass('animated-waypoint').addClass('animated ' + Animation)
                     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        This.removeClass('animated ' + Animation);
                     });
               }
            },
            offset: offsetVal
         });
      });

   }

   // Header Functions
   var runHeader = function() {

      // Searchbar - Mobile modifcations
      $('.navbar-search').on('click', function(e) {
         // alert('hi')
         var This = $(this);
         var searchForm = This.find('input');
         var searchRemove = This.find('.search-remove');

         // Don't do anything unless in mobile mode
         if ($('body.mobile-view').length || $('body.sb-top-mobile').length) { 

            // Open search bar and add closing icon if one isn't found
            This.addClass('search-open');
            if (!searchRemove.length) {
               This.append('<div class="search-remove"></div>'); 
            }

            // Fadein remove btn and focus search input on animation complete
            setTimeout(function() {
               This.find('.search-remove').fadeIn();
               searchForm.focus().one('keydown', function() {
                  $(this).val('');
               });
            },250)

            // If remove icon clicked close search bar
            if ($(e.target).attr('class') == 'search-remove') {
               This.removeClass('search-open').find('.search-remove').remove();
            }

         }

      });

      // Init jQuery Multi-Select for navbar user dropdowns
      if ($("#user-status").length) {
          $('#user-status').multiselect({
            buttonClass: 'btn btn-default btn-sm',
            buttonWidth: 100,
            dropRight: false
         });
      }
      if ($("#user-role").length) {
          $('#user-role').multiselect({
            buttonClass: 'btn btn-default btn-sm',
            buttonWidth: 100,
            dropRight: true
         });
      }

      // Dropdown Multiselect Persist. Prevents a menu dropdown
      // from closing when a child multiselect is clicked
      $('.dropdown-menu').on('click', function(e) {

         e.stopPropagation();
         var Target  = $(e.target);
         var TargetGroup = Target.parents('.btn-group');
         var SiblingGroup = Target.parents('.dropdown-menu').find('.btn-group');

         // closes all open multiselect menus. Creates Toggle like functionality
         if (Target.hasClass('multiselect') || Target.parent().hasClass('multiselect')) {
           SiblingGroup.removeClass('open');
           TargetGroup.addClass('open');
         }
         else { SiblingGroup.removeClass('open'); }

      });
     
      // Sliding Topbar Metro Menu
      var menu = $('#topbar-dropmenu');
      var items = menu.find('.metro-tile');
      var metroBG = $('.metro-modal');

      // Toggle menu and active class on icon click
      $('.topbar-menu-toggle').on('click', function() {

         // If dropmenu is using alternate style we don't show modal
         if (menu.hasClass('alt')) {
            // Toggle menu and active class on icon click
            menu.slideToggle(230).toggleClass('topbar-menu-open');
            metroBG.fadeIn();
         }
         else {
            menu.slideToggle(230).toggleClass('topbar-menu-open');
            $(items).addClass('animated animated-short fadeInDown').css('opacity', 1);

            // Create Modal for hover effect
            if (!metroBG.length) {
               metroBG = $('<div class="metro-modal"></div>').appendTo('body');
            }
            setTimeout(function() {
               metroBG.fadeIn();
            }, 380);
         }

      });

      // If modal is clicked close menu
      $('body').on('click', '.metro-modal', function() {
         metroBG.fadeOut('fast');
         setTimeout(function() {
            menu.slideToggle(150).toggleClass('topbar-menu-open');
         }, 250);
      });
   }

   // Tray related Functions
   var runTrays = function() {
   
      // Match height of tray with the height of body
      var trayFormat = $('#content .tray');
      if (trayFormat.length) {

         // Loop each tray and set height to match body
         trayFormat.each(function(i,e) {
            var This = $(e);
            var trayScroll = This.find('.tray-scroller');

            This.height(contentHeight);
            trayScroll.height(contentHeight);

            if (trayScroll.length) {
              trayScroll.scroller();
            }
         });

         // Scroll lock all fixed content overflow
         $('#content').scrollLock('on', 'div');

      };

      // Debounced resize handler
      var rescale = function() {
         if ($(window).width() < 1000) { Body.addClass('tray-rescale'); }
         else { Body.removeClass('tray-rescale tray-rescale-left tray-rescale-right'); }
      }
      var lazyLayout = _.debounce(rescale, 300);

      if (!Body.hasClass('disable-tray-rescale')) {
         // Rescale on window resize
         $(window).resize(lazyLayout);

         // Rescale on load
         rescale();
      }

      // Perform a custom animation if tray-nav has data attribute
      var navAnimate = $('.tray-nav[data-nav-animate]');
      if (navAnimate.length) {
          var Animation = navAnimate.data('nav-animate');

          // Set default "fadeIn" animation if one has not been previously set
          if (Animation == null || Animation == true || Animation == "") { Animation = "fadeIn"; }

          // Loop through each li item and add animation after set timeout
          setTimeout(function() {
            navAnimate.find('li').each(function(i, e) {
              var Timer = setTimeout(function() {
                $(e).addClass('animated animated-short ' + Animation);        
              }, 50 * i);
            });
          }, 500);
      }

       // Responsive Tray Javascript Data Helper. If browser window
       // is <575px wide (extreme mobile) we relocate the tray left/right
       // content into the element appointed by the user/data attr
       var dataTray = $('.tray[data-tray-mobile]');
       var dataAppend = dataTray.children();
       function fcRefresh() {
         if ($('body').width() < 585) {
           dataAppend.appendTo($(dataTray.data('tray-mobile')));
         }
         else { dataAppend.appendTo(dataTray); }
       };
       fcRefresh();

       // Attach debounced resize handler
       var fcResize = function() { fcRefresh(); }
       var fcLayout = _.debounce(fcResize, 300);
       $(window).resize(fcLayout);

   }

   // Form related Functions
   var runFormElements = function() {

      // Init Bootstrap tooltips, if present 
      var Tooltips = $("[data-toggle=tooltip]");
      if (Tooltips.length) {
         if (Tooltips.parents('#sidebar_left')) {
            Tooltips.tooltip({
               container: $('body'),
               template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
            });
         } else {
            Tooltips.tooltip();
         }
      }

      // Init Bootstrap Popovers, if present 
      var Popovers = $("[data-toggle=popover]");
      if (Popovers.length) {
          Popovers.popover();
      }

      // Init Bootstrap persistent tooltips. This prevents a
      // popup from closing if a checkbox it contains is clicked
      $('.dropdown-menu.dropdown-persist').on('click', function(e) {
         e.stopPropagation();
      });

      // Prevents a dropdown menu from closing when
      // a nav-tabs menu it contains is clicked
      $('.dropdown-menu .nav-tabs li a').on('click', function(e) {
         e.preventDefault();
         e.stopPropagation();
         $(this).tab('show')
      });

      // Prevents a dropdown menu from closing when
      // a btn-group nav menu it contains is clicked
      $('.dropdown-menu .btn-group-nav a').on('click', function(e) {
         e.preventDefault();
         e.stopPropagation();

         // Remove active class from btn-group > btns and toggle tab content
         $(this).siblings('a').removeClass('active').end().addClass('active').tab('show');
      });

      // if btn has ".btn-states" class we monitor it for user clicks. On Click we remove
      // the active class from its siblings and give it to the button clicked.
      // This gives the button set a menu like feel or state
      if ($('.btn-states').length) {
          $('.btn-states').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
         });
      }

      // If a panel element has the ".panel-scroller" class we init
      // custom fixed height content scroller. An optional delay data attr
      // may be set. This is useful when you expect the panels height to 
      // change due to a plugin or other dynamic modification.
      var panelScroller = $('.panel-scroller');
      if (panelScroller.length) {
          panelScroller.each(function(i, e) {
           var This = $(e);
           var Delay = This.data('scroller-delay');
           var Margin = 5;

           // Check if scroller bar margin is required
           if (This.hasClass('scroller-thick')) { Margin = 0; }

           // Check if scroller bar is in a dropdown, if so 
           // we initilize scroller after dropdown is visible
           var DropMenuParent = This.parents('.dropdown-menu');
           if (DropMenuParent.length) { 
               DropMenuParent.prev('.dropdown-toggle').on('click', function() {
                  setTimeout(function() {
                     This.scroller();
                     $('.navbar').scrollLock('on', 'div');
                  },50);
               });
               return;
           }

           if (Delay) {
             var Timer = setTimeout(function() {
                This.scroller({ trackMargin: Margin, });
               $('#content').scrollLock('on', 'div');
             }, Delay);
           } 
           else {
             This.scroller({ trackMargin: Margin, });
             $('#content').scrollLock('on', 'div');
           }

         });
      }

      // Init smoothscroll on elements with set data attr
      // data value determines smoothscroll offset
      var SmoothScroll = $('[data-smoothscroll]');
      if (SmoothScroll.length) {
        SmoothScroll.each(function(i,e) {
          var This = $(e);
          var Offset = This.data('smoothscroll');
          var Links = This.find('a');

          // Init Smoothscroll with data stored offset
          Links.smoothScroll({
            offset: Offset
          });

        }); 
      }

   }
   return {
      init: function(options) {

         // Set Default Options
         var defaults = {
            sbl: "sb-l-o", // sidebar left open onload 
            sbr: "sb-r-c", // sidebar right closed onload
            sbState: "save", //Enable localstorage for sidebar states

            collapse: "sb-l-m", // sidebar left collapse style
            siblingRope: true
            // Setting this true will reopen the left sidebar
            // when the right sidebar is closed
         };

         // Extend Default Options.
         var options = $.extend({}, defaults, options);

         // Call Core Functions
         runHelpers();
         runAnimations();
         runHeader();
         runSideMenu(options);
         runFooter();
         runTrays();
         runFormElements();
      }

   }
}();

// Global Library of Theme colors for Javascript plug and play use  
var bgPrimary = '#4a89dc',
   bgPrimaryL = '#5d9cec',
   bgPrimaryLr = '#83aee7',
   bgPrimaryD = '#2e76d6',
   bgPrimaryDr = '#2567bd',
   bgSuccess = '#70ca63',
   bgSuccessL = '#87d37c',
   bgSuccessLr = '#9edc95',
   bgSuccessD = '#58c249',
   bgSuccessDr = '#49ae3b',
   bgInfo = '#3bafda',
   bgInfoL = '#4fc1e9',
   bgInfoLr = '#74c6e5',
   bgInfoD = '#27a0cc',
   bgInfoDr = '#2189b0',
   bgWarning = '#f6bb42',
   bgWarningL = '#ffce54',
   bgWarningLr = '#f9d283',
   bgWarningD = '#f4af22',
   bgWarningDr = '#d9950a',
   bgDanger = '#e9573f',
   bgDangerL = '#fc6e51',
   bgDangerLr = '#f08c7c',
   bgDangerD = '#e63c21',
   bgDangerDr = '#cd3117',
   bgAlert = '#967adc',
   bgAlertL = '#ac92ec',
   bgAlertLr = '#c0b0ea',
   bgAlertD = '#815fd5',
   bgAlertDr = '#6c44ce',
   bgSystem = '#37bc9b',
   bgSystemL = '#48cfad',
   bgSystemLr = '#65d2b7',
   bgSystemD = '#2fa285',
   bgSystemDr = '#288770',
   bgLight = '#f3f6f7',
   bgLightL = '#fdfefe',
   bgLightLr = '#ffffff',
   bgLightD = '#e9eef0',
   bgLightDr = '#dfe6e9',
   bgDark = '#3b3f4f',
   bgDarkL = '#424759',
   bgDarkLr = '#51566c',
   bgDarkD = '#2c2f3c',
   bgDarkDr = '#1e2028',
   bgBlack = '#283946',
   bgBlackL = '#2e4251',
   bgBlackLr = '#354a5b',
   bgBlackD = '#1c2730',
   bgBlackDr = '#0f161b';

