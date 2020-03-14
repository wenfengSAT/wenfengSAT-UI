'use strict'; 
/*! main.js - v0.1.1
* http://admindesigns.com/
* Copyright (c) 2013 Admin Designs;*/

// Library of Theme colors for Javascript plug and play use	
var tealColor =  "#a8e9ea",
	teal2Color =  "#2dc5c7",
	teal3Color =  "#1e9093",
	blueColor =  "#9de0f5",
	blue2Color =  "#33bfeb",
	blue3Color =  "#238bc5",
	purpleColor =  "#c7b7e5",
	purple2Color =  "#a287d4",
	purple3Color =  "#715da3",
	pinkColor =  "#ffd1ed",
	pink2Color =  "#ffb2e1",
	pink3Color =  "#ff7fb4",
	redColor =  "#ffac9c",
	red2Color =  "#ff745a",
	red3Color =  "#ff4f3e",
	orangeColor =  "#fbb882",
	orange2Color =  "#f9892e",
	orange3Color =  "#e55e20",
	yellowColor =  "#ffe29c",
	yellow2Color =  "#ffcf5a",
	yellow3Color =  "#ff9d3e",
	greenColor =  "#c6e69c",
	green2Color =  "#a0d65a",
	green3Color =  "#6fa53e",
	greyColor =  "#b0daec",
	grey2Color =  "#6ebbdd",
	grey3Color =  "#4b87ae";

/* Core theme functions required for
 * most of the themes vital functionality */
var Core = function () {
	
    // Delayed Animations
    var runAnimations = function () {

	  // if any element has ".animated-delay" we
	  // stop its animation and set a Timeout
	  $('[data-animate]').each(function () {
		  var This = $(this)
		  var delayTime = $(this).data('animate')[0];
		  var delayAnimation = $(this).data('animate')[1];
		  
 	      var delayAnimate = setTimeout(function () {
			  $(This).removeClass('animated-delay').addClass('animated ' + delayAnimation);
		  }, delayTime); 
		  
	  });
    }
	
    // Header Functions
    var runHeader = function () {
						
		// We use values on text inputs as they are easier than placeholders to style 
		// This clears the value on focus so that it acts more like a placeholder
		$('#HeaderSearch').focus(function() { $(this).val(''); });
    }
	
    // SideMenu Functions
    var runSideMenu = function () {
			
		//  This function is responsible for the following functionality
		//  1. LEFT MENU COLLAPSE
		//  2. LEFT USER MENU COLLAPSE
		//  3. LEFT MENU LINKS COLLASE (dashboard, elements, tables, etc)
		//  4. RIGHT MENU COLLAPSE
		//  5. Monitor and add responsive classes to "body" tag on window resize
	
		var Body = $('body');
		
		// Left SideBar Toggle Mechanics
		// Only 1 Sidebar is open at a time
        var toggleLeftSideMenu = function () {
			// Check state then open menu.
			if ($('body.sidebar-hidden').length || $('body.sidebar-rtl').length) {
				Body.addClass('sidebar-ltr').removeClass('sidebar-hidden sidebar-rtl');
			}
			// Close menu.
			else {
				Body.addClass('sidebar-hidden').removeClass('sidebar-ltr sidebar-rtl');
			}	
        }
		
		// 2. RIGHT SIDEBAR OPEN
        var toggleRightSideMenu = function () {	
			// Check state then close menu.
			if ($('body.sidebar-rtl').length) {
				Body.removeClass('sidebar-rtl');
			}
			// Open menu.
			else {
				Body.addClass('sidebar-rtl').removeClass('sidebar-ltr');
			}
        }

		// 2. LEFT USER MENU COLLAPSE
		// Allow all user menu divs except the profile/signout links to open the child menu
		$('.user-info .media-heading, .user-info .media-object, .media-links > a:first-child').click(function() {
			
			// Toggle Class to signal state change
			$('.user-info, .user-menu').toggleClass('usermenu-open');
			
			// If menu is closed apply animation	
			if ($('.user-info').hasClass('usermenu-open')) {
				$('.user-menu').slideDown('fast');
			}
			// Otherwise slidemenu up and remove any annoying jQuery applied inline styles
			else {
				$('.user-menu').slideUp('fast',function(){$(this).removeClass('show').attr('style','')});
			}
			
		});
		
		
		// 3. LEFT MENU LINKS COLLAPSE
		$('.sidebar-menu ul a.accordion-toggle').click(function(e) {
			
			// Any menu item with the accordion class is a dropdown. Thus we prevent default actions
		    e.preventDefault();
			
			if ($('body').hasClass('sidebar-left-collapsed')) {return;}

			// Before opening menu item check to see if it is a multi-level menu

			// Check to see if the target is a multi-level menu item
			// If it's not we collapse the entire left side menu 
			if (!$(this).parents('ul.sub-nav').hasClass('sub-nav')) {
				$('a.accordion-toggle.menu-open').next('.sub-nav').slideUp('fast', 'swing', function() {
					$(this).attr('style','').prev().removeClass('menu-open');
				});				
			}
			// If it's a multi-level menu item we collapse all open menus that
			// are not a direct parent of the item clicked. This is to prevent
			// collapsing any part/tier of the multi-level menu
			else {
				$(this).next('.sub-nav').slideUp('fast', 'swing', function() {
					$(this).attr('style','').prev().removeClass('menu-open');
				});			
			}
			// Now we expand targeted menu item, add the ".open-menu" class
			// and remove any left over jquery animation attributes
			if (!$(this).hasClass('menu-open')) {
				$(this).next('.sub-nav').slideToggle('fast', 'swing', function() {
					$(this).attr('style','').prev().toggleClass('menu-open');
				});
			}

		 });
		
		// 5. MONITOR AND ADD RESPONSIVE classes to "body" tag on window resize
		var sidebarCheck = function() {
			if ($(window).width() < 1080) {	$('body').addClass('mobile-view').removeClass('sidebar-ltr sidebar-rtl'); }
			else { $('body').removeClass('mobile-view'); }
		}
	
		// Functions Calls
		$("#toggle_sidemenu_l").click(toggleLeftSideMenu);
		$("#toggle_sidemenu_r").click(toggleRightSideMenu);	
        $(window).resize(function() {
			 sidebarCheck();
		});	

    }
	
	// Form related Functions
    var runFormElements = function () {
				
        // Init Bootstrap tooltips, if present 
        if ($("[data-toggle=tooltip]").length) {
            $('[data-toggle=tooltip]').tooltip();
        }
		
        // Init Bootstrap persistent tooltips. This prevents a
        // popup from closing if a checkbox it contains is clicked
		$('.dropdown-menu .dropdown-persist').click(function (event) {
			event.stopPropagation();
		});
		$('.dropdown-menu .nav-tabs li a').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			$(this).tab('show')
		});
		
        // if btn has ".btn-states" class we monitor it for user clicks. On Click we remove
        // the active class from its siblings and give it to the button clicked
        if ($('.btn-states').length) {
            $('.btn-states').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
		
    }

    // Creates Clickable Checklists (header menus/tables)
    var runChecklists = function () {
		
        // Checklist state for table widgets and header menu buttons
        $('#content_wrapper').on('click', '.table-checklist tbody tr, .dropdown-checklist .dropdown-items li', function() {
            $(this).toggleClass('task-checked');
            if ($(this).hasClass('task-checked')) {
                $(this).find('.cBox input').prop("checked", true);
            } else {
                $(this).find('.cBox input').prop("checked", false);
            }
           // $.uniform.update('input.row-checkbox');
        });
		
        // Disable Selection on checklist to prevent excessive text-highlighting
        var disableSelection = function disableSelection() {
            return this.bind(($.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (event) {
                event.preventDefault();
            });
        };
        $(".table-checklist tbody tr").disableSelection();
    }
		
    // DEMO FUNCTIONS - primarily trash
    var runDemoJS = function () { 
	
	   // HEADER RELATED DEMO JS
	   $('.toggle-color-swap').on('click',function() {
		   var swapColor = $(this).data('swap');
		   var navbar = $('.navbar');
		   var navbarLogo = $('.navbar-brand img');
		  
		   var colors = 'bg-white bg-red2 bg-purple2 bg-purple3 bg-orange2 bg-dark3 bg-brown-alt bg-blue4-alt bg-blue5-alt bg-blue6-alt';
		   
		   if (swapColor === 'bg-white') {
				navbar.removeClass(colors + ' navbar-white-text').addClass(swapColor);
				navbarLogo.attr('src', 'img/logos/header-logo.png');
		   } else {
			   navbar.removeClass(colors).addClass(swapColor + ' navbar-white-text');
			   navbarLogo.attr('src', 'img/logos/header-logo_light.png');
		   }
	   });

		// Header Menu dropdown navigations
		$('.navbar-left > div, .navbar-menus > div').on('show.bs.dropdown', function () {
			
			if ($(this).attr('id') == 'comment_menu') {
				$(this).children('.dropdown-menu').addClass('animated animated-short bounceInRight');
			}
			else {
				$(this).children('.dropdown-menu').addClass('animated animated-shortest flipInX');
			}
		});
		$('.navbar-left > div, .navbar-menus > div').on('hide.bs.dropdown', function () {
			$(this).children('.dropdown-menu').removeClass('animated flipInX bounceInRight');
		});
		
		// THEME SETTING RELATED JS
		
        // Toggles Theme Settings Tray
        $('.skin-toolbox-toggle, .dashboard-widget-tray .btn:last-child').on('click',function () {
            $('#skin-toolbox').toggleClass('toolbox-open');
        });

        // Switch statement for Theme Settings Tray - controls layout changes
        $('#skin-toolbox input[type="checkbox"], #skin-toolbox input[type="radio"]').on('click',function () {
            var id = $(this).attr('id');
            if ($(this).prop('checked')) {
                switch (id) {
                case 'header-option':
                    $('.navbar').addClass('navbar-fixed-top');
                    $('#sidebar-option').attr("disabled", false).parents('label').removeClass('option-disabled');
                    break;
                case 'sidebar-option':
                    $('#sidebar_left').addClass('affix');
                    break;
                case 'breadcrumb-hidden':
                    $('body').addClass('hidden-breadcrumbs');
                    break;
                case 'fullwidth-option':
                    $('body').removeClass('boxed-layout boxed-example wide-layout');
                    break;
                case 'boxed-option':
                    $('body').addClass('boxed-layout boxed-example');
                    $('body').removeClass('fixed-breadcrumbs hidden-breadcrumbs usermenu-hidden');
                    $('#topbar').removeClass('affix');
                    $('#breadcrumb-hidden, #usermenu-hidden').attr('checked', false);
                    break;
                case 'usermenu-hidden':
                    $('body').addClass('usermenu-hidden');
                    break;
                }
            } else {
                switch (id) {
                case 'header-option':
                    $('.navbar').removeClass('navbar-fixed-top');
                    $('#sidebar_left, #topbar').removeClass('affix');
                    $('#sidebar-option').attr("disabled", true).prop('checked', this.checked).parents('label').addClass('option-disabled');
                    break;
                case 'sidebar-option':
                    $('#sidebar_left').removeClass('affix');
                    $('#topbar').removeClass('affix');
                    break;
                case 'breadcrumb-hidden':
                    $('body').removeClass('hidden-breadcrumbs');
                    break;
                case 'usermenu-hidden':
                    $('body').removeClass('usermenu-hidden');
                    break;
                }
            }
        });
	
		var boxtest = localStorage.getItem('boxed');
		var ajaxtest = localStorage.getItem('ajax_loading');
		
		// Check local storage and update on page load
		if (boxtest === 'true') {
			$('#boxed-option').prop('checked', 'true');
		}
		// Check local storage and update on page load
		if (ajaxtest === 'false') {
			$('#ajax-option').prop('checked', false);
		}
		
		// Assign Ajax setting on click
		$('#ajax-option').on('click',function() {
			var ajaxtest = localStorage.getItem('ajax_loading');
			if ($('#ajax-option').prop('checked')) {
				localStorage.setItem('ajax_loading', 'true');
			}
			else {
				localStorage.setItem('ajax_loading', 'false');	
			}
		});
		// Assign boxed-layout setting on click
		$('#boxed-option').on('click',function() {
			localStorage.setItem('boxed', 'true');
		});
		// Assign fullwidth-layout setting on click
		$('#fullwidth-option').on('click',function() {
			localStorage.setItem('boxed', 'false');
		});
		
		
        $(window).load(function() {
			
			// List of all available JS files. We're going to attempt to
			// cache them all after the first page has finished loading.
			// This is for DEMO purposes ONLY
			var scripts = {
				
				// HIGH PRIORITY - Images
				image1: 		 'img/stock/splash/1.jpg',
				image2:		     'img/stock/splash/2.jpg',
				image3: 		 'img/stock/splash/3.jpg',
				image4: 		 'img/stock/splash/4.jpg',
				
				// HIGH PRIORITY
				gmap: 			 'vendor/plugins/map/gmaps.min.js',
				jquerymap:		 'vendor/plugins/gmap/jquery.ui.map.js',
				mixitup: 		 'vendor/plugins/mixitup/jquery.mixitup.min.js',
				mpopup: 		 'vendor/plugins/mfpopup/jquery.magnific-popup.min.js',
				chosen:		  	 'vendor/plugins/chosen/chosen.jquery.js',
				moment:		 	 'vendor/plugins/daterange/moment.min.js',
				globalize:   	 'vendor/plugins/globalize/globalize.js',
	
				// FORM PICKERS
				cpicker: 	  	 'vendor/plugins/colorpicker/bootstrap-colorpicker.js',
				timepicker:      'vendor/plugins/timepicker/bootstrap-timepicker.min.js',
				datepicker:      'vendor/plugins/datepicker/bootstrap-datepicker.js',
				daterange: 	     'vendor/plugins/daterange/daterangepicker.js',
				
				// FORMS
				validate:		 'vendor/plugins/validate/jquery.validate.js',
				masked: 	 	 'vendor/plugins/jquerymask/jquery.maskedinput.min.js',
				
				// FORMS TOOLS
				holder: 	     'vendor/bootstrap/plugins/holder/holder.js',
				tagmanager:      'vendor/plugins/tags/tagmanager.js',
				gritter:         'vendor/plugins/gritter/jquery.gritter.min.js',
				ladda:           'vendor/plugins/ladda/ladda.min.js',
				paginator:		 'vendor/bootstrap/plugins/paginator/bootstrap-paginator.js',
				knob:            'vendor/plugins/jquerydial/jquery.knob.js',
				rangeslider:     'vendor/plugins/rangeslider/jQAllRangeSliders.min.js',
				
				// MED PRIORITY - Large File sizes
				charts:       	 'js/pages/charts.js',
				ckeditorCDN:     'http://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.0.1/ckeditor.js',
				xedit: 			 'vendor/editors/xeditable/js/bootstrap-editable.js',
				summernote:      'vendor/editors/summernote/summernote.js',
				countdown:       'vendor/plugins/countdown/jquery.countdown.js',
				jcrop: 			 'vendor/plugins/imagecrop/jquery.Jcrop.min.js',
				imagezoom: 		 'vendor/plugins/imagezoom/jquery.elevatezoom.min.js',
				sketchpad:       'vendor/plugins/notepad/wPaint.min.js',
				fileupload:      'vendor/bootstrap/plugins/fileupload/fileupload.js',
			};	

			var cacheCheck = function(o) {
				$.each(o, function(i, p) {
					
					if (localStorage.getItem(i) !== 'cached') {
						$.ajax({
							url: p,
							cache: true,
							success: function(data) {
								localStorage.setItem(i, 'cached');
								console.log(localStorage.getItem(i));
							}				
						});
						
					}
					else {}
				});
			}
			// DISABLED BY DEFAULT
			// cacheCheck(scripts);
		});
    }
	
	return {
        init: function () {
            runAnimations();
            runSideMenu();
            runFormElements();
            runChecklists();
            runHeader();
			runDemoJS();
        }
	} 
}();