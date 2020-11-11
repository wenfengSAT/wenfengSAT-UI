/*****************************************************************
Table of Contents

1.) Document Ready State
	- Initialize
	- Back Top
	- Tags Input
	- Tool Tips	
	- Pop Over
	- Pretty Photo
	- Data Tables
	- Custom Scrollbar
	- Mega Menu Hover Checking
	- Resize Screen Checking
	- Menu Size Button
	- Content Resizing
	- Sub Menu of Top Menu Button
	- Open Menu Trigger
	- Expand Tree Menu Button
	- Custom Input Wrapper
	- Widget Minimize Button
	- Widget Close Button
	- Widget Refresh Button
	- Chat Close Button
	- Notification Button
	- Sticky Menu
	
	

!Note: You can search using the title above
*****************************************************************/



/* Document Ready State. 
   Used: Global */	
jQuery(document).ready(function($)
	{
		"use strict";
		
		var phone_width = 464;		
		var tablet_width = 751;
		var desktop_width = 975;
		
		/* Initialize 
		   Used: On Application Init
		*/
		initialize();
		
		function initialize(){
			// Nav-toggle Active
			if ($('body').hasClass('nav-medium')) {
				$('[data-action^="nav-medium"]').addClass('active');
			}
			if ($('body').hasClass('nav-small')) {
				$('[data-action^="nav-small"]').addClass('active');
			}	
			
			// Active Menu
			var active_page = $('body').attr('data-active');
			$('.navbar-menu .vd_menu > ul > li#'+active_page).addClass('active');
			$('.navbar-menu .vd_menu > ul > li#'+active_page+' > a').append('<span class="menu-active"><i class="icon-caret-left"></i></span>');
			
			
			calculateContentHeight();
	
			if ($(window).width() <= desktop_width ) {
					checkWindowTablet();
			}else{
					checkWindowDesktop();
			};									

			checkStickyMenu();
			checkBackTop();
			checkMegaMenu();
		}			
		// Calculate height function
		function calculateContentHeight(){
			var height=$('.vd_navbar-left .navbar-tabs-menu').height() + $('.vd_navbar-left .navbar-menu').height() + $('.vd_navbar-left .navbar-spacing').height()  + 8;
			var height_right=$('.vd_navbar-right .navbar-tabs-menu').height() + $('.vd_navbar-right .navbar-menu').height() + $('.vd_navbar-right .navbar-spacing').height()  + 8;			
			$('.vd_content-wrapper, .vd_content-wrapper > .vd_container').css('min-height', (height > height_right ) ? height : height_right );
		};
				
							
							

		$(window).load(function() {
				/* Back Top. 
				   Used: For future development */		
				$('[data-action^="backtop"]').click(function(e){
						e.preventDefault();
						$('body,html').animate({scrollTop:0},800);
				});		
				
		
				/* Tags Input. 
				   Used: < data-rel = "tags-input" > */
				$('[data-rel^="tags-input"]').tagsInput({width:'auto'});
				
				/* Tags Input. 
				   Used: < data-rel = "switch" > */
				$('[data-rel^="switch"]').bootstrapSwitch();			
					
				/* Tool Tips. 
				   Used: < data-toggle = "tooltip" > */
				$('[data-toggle^="tooltip"]').tooltip();	
				
				
				/* Pop Over. 
				   Used: < data-toggle = "popover" > */	
				$('[data-toggle^="popover"]').popover();
		
					
				/* Pretty Photo. 
				   Used: - For Grouping:  <a data-rel="prettyPhoto[portfolio-group]"> 
						 - For Single Image: <a data-rel="prettyPhoto"> 
				*/
				$('a[data-rel^="prettyPhoto"]').each(function() {
					$(this).attr('rel', $(this).data('rel'));
				});
				$("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square'});	
				
				/* Custom Scrollbar. 
				   Used: <div data-rel="scroll" data-scrollHeight="400" >
				*/
				$('html.no-touch [data-rel^="scroll"]').mCustomScrollbar({
					  set_height: function(){$(this).css('max-height',$(this).data('scrollheight')); return $(this).data('scrollheight'); },
					  mouseWheel:"auto",   
					  autoDraggerLength:true,  			
					  autoHideScrollbar:true,
					  advanced:{  
						updateOnBrowserResize:true,   
						updateOnContentResize:true   
					  }, // removed extra commas 
				});
				$('html.touch [data-rel^="scroll"]').css({
					'height' : function(){return($(this).data('scrollheight')) },
					'max-height': function(){return($(this).data('scrollheight')) },
					'overflow-y' :'scroll',
				});					
						
		});

							

				

		
		
		
		/* Mega Menu Hover Checking. 
		   Used: When Resizing Screen
		*/
		$( window ).resize(function() {
			checkMegaMenu();
		});	
				
		function checkMegaMenu(){
			if ($(window).width() <= tablet_width ) {		
				$('.vd_mega-menu .hover-target').removeClass('hover-target').addClass('hover-target-temp');			
			} else {
				$('.vd_mega-menu .hover-target-temp').removeClass('hover-target-temp').addClass('hover-target');							
			}
			
		}

		/* Resize Screen Checking 
		   Used: When Resizing Screen
		*/
				
		function checkWindowTablet(){
				if ($('body').hasClass('no-responsive')){
					return(false);
				}
				if (!$('body').hasClass('nav-left-hide')) {	
					$('body').addClass('nav-left-hide');
				}
				if (!$('body').hasClass('nav-right-hide')) {	
					$('body').addClass('nav-right-hide');
				}			
				$('body').removeClass('remove-navbar');
				$('body').removeClass('remove-header');
				$('body').removeClass('fullscreen');	
				resizeAffixPanel();
		}
		function checkWindowDesktop(){
				if ($('body').hasClass('no-responsive')){
					return(false);
				}
				if ($('body').hasClass('nav-left-hide') ) {	
					if (!$('body').hasClass('nav-left-start-hide')){
						$('body').removeClass('nav-left-hide');								
					} else{
						$('body').addClass('nav-left-hide');					
					}
				}
				if ($('body').hasClass('nav-right-hide')) {	
					if (!$('body').hasClass('nav-right-start-hide')){
						$('body').removeClass('nav-right-hide');
					} else{
						$('body').addClass('nav-right-hide');						
					}
				}			
				$('body').removeClass('remove-navbar');
				$('body').removeClass('remove-header');
				$('body').removeClass('fullscreen');	
				resizeAffixPanel();									
		}
		
		if ($("body").hasClass('responsive')){		

			$(window).setBreakpoints({
				breakpoints: [480, 751, 975]
			});
			$(window).bind('exitBreakpoint751', function () {
				$(window).bind('enterBreakpoint480', function () {
						checkWindowTablet();
				});
			});
			
			$(window).bind('exitBreakpoint480', function () {
				$(window).bind('enterBreakpoint751', function () {
					checkWindowTablet();
				});
			});		
			
			$(window).bind('exitBreakpoint751', function () {
				$(window).bind('enterBreakpoint975', function () {
					checkWindowDesktop();
				});
			});	
			
			$(window).bind('exitBreakpoint975', function () {
				$(window).bind('enterBreakpoint751', function () {
					checkWindowTablet();
	
				});
			});			
		}



		/* Menu Size Button
		   Used: When Resizing Screen
		*/
		
		$('[data-action^="nav-left-medium"]').click(function() {	
			navbarResize('left','medium');		
			resizeAffixPanel();															
		});					
		$('[data-action^="nav-left-small"]').click(function() {
			navbarResize('left','small');	
			resizeAffixPanel();																		
		});	
		
		$('[data-action^="nav-right-medium"]').click(function() {	
			navbarResize('right','medium');	
			resizeAffixPanel();																		
		});					
		$('[data-action^="nav-right-small"]').click(function() {
			navbarResize('right','small');	
			resizeAffixPanel();																	
		});																
		$('[data-action^="toggle-navbar-left"]').click(function() {
			toggleNavbar('left');			
			resizeAffixPanel();							
		});			
		$('[data-action^="toggle-navbar-right"]').click(function() {
			toggleNavbar('right');			
			resizeAffixPanel();										
		});			
		
		
		function navbarResize(direction, size){
			var opposite= (size=="small")? "medium":"small"
			// if nav size state
			if ($('body').hasClass('nav-'+direction+'-'+size)){
				$('body').removeClass('nav-'+direction+'-'+size);
				if (size=='small' && $('body').hasClass('enlarge-'+direction+'-to-medium')){
					$('body').addClass('nav-'+direction+'-medium');				
				}
			// if nav normal 			
			} else {
				$('body').removeClass('nav-'+direction+'-'+opposite);		
				$('body').addClass('nav-'+direction+'-'+size);											
			}			
			$('.vd_navbar-'+direction+' .navbar-tabs-menu .menu-container').removeAttr('style');	
			$('.vd_navbar-'+direction+' .navbar-tabs-menu [data-action^="expand-navbar-tabs-menu"] .badge').removeAttr('style');				
			
		}
	
		function toggleNavbar(direction){
			var opposite= (direction=="left")? "right":"left";
			$('body').removeClass('remove-navbar');	
			$('body').removeClass('fullscreen');
						
			// if nav-direction is hiding	
			if ($('body').hasClass('nav-'+direction+'-hide')) {				
				$('body').removeClass('nav-'+direction+'-hide');
//				navToggle(direction, "show");							
				// if there is nav-opposite AND (nav-direction start with hiding OR smaller screen)
				if (!$('body').hasClass('no-nav-'+opposite) && !$('body').hasClass('nav-'+opposite+'-hide') && ($('body').hasClass('nav-'+direction+'-start-hide') || $(window).width() < desktop_width) ){					
//					navToggle(opposite, "hide");					
					$('body').addClass('nav-'+opposite+'-hide');			
				}																
			}	else	
			// if nav-opposite is hiding					
			if ($('body').hasClass('nav-'+opposite+'-hide') && $(window).width()>= desktop_width ){
				$('body').removeClass('nav-'+opposite+'-hide');	
				$('body').addClass('nav-'+direction+'-hide');									
			}  else {												
				$('body').addClass('nav-'+direction+'-hide');				
			}				
		}		

		$('.navbar-tabs-menu [data-action^="expand-navbar-tabs-menu"]').click(function() {
			$(this).next().animate({width:'toggle', opacity:'toggle'},300,"swing");
			$(this).find(".badge").toggle('fast');			
		});
						

		/* 
			Content Resizing
			Used: When Click on container
		*/
		$('.vd_container').click(function() {
			if ($(window).width() <= desktop_width){	
				if (!$('body').hasClass('nav-right-hide')){		
					toggleNavbar('right');			
					resizeAffixPanel();						
				} else if (!$('body').hasClass('nav-left-hide')){
					toggleNavbar('left');			
					resizeAffixPanel();						
				}
				
			} 
		});		
	    // Affix Setting Function.  	  
	    function resizeAffixPanel(){
		    $('.sidebar-affix .panel').css('width',($('.vd_content-section').innerWidth()-114)/3+'px');
		    if ($(window).width()<=tablet_width)	{
				  $('.sidebar-affix .panel').removeAttr('style');		  
		    }
	    }

		
		
		//  Content Resizing Button
		$('[data-action^="remove-navbar"]').click(function() {
//			$(this).siblings().removeClass('active');
			// if remove-navbar state				
			if ($('body').hasClass('remove-navbar')){
				$('body').removeClass('remove-navbar');	
				if (!$('body').hasClass('nav-left-start-hide')){
					$('body').removeClass('nav-left-hide');	
				};	
				if (!$('body').hasClass('nav-right-start-hide')){
					$('body').removeClass('nav-right-hide');					
				};
					
//				$('[data-action^="remove-navbar"]').removeClass('active');								
			// if nav normal state			
			} else {
				$('body').removeClass('fullscreen');	
				$('body').removeClass('remove-header');							
				$('body').addClass('remove-navbar');
				$('body').addClass('nav-left-hide');	
				$('body').addClass('nav-right-hide');					
//				$('[data-action^="remove-navbar"]').addClass('active');								
			}				
		});	
		$('[data-action^="remove-header"]').click(function() {
//			$(this).siblings().removeClass('active');
			// if remove-navbar state				
			if ($('body').hasClass('remove-header')){
				$('body').removeClass('remove-header');	
//				$('[data-action^="remove-header"]').removeClass('active');								
			// if nav normal state			
			} else {
				$('body').removeClass('fullscreen');
				$('body').removeClass('remove-navbar');
				if (!$('body').hasClass('nav-left-start-hide')){
					$('body').removeClass('nav-left-hide');	
				};	
				if (!$('body').hasClass('nav-right-start-hide')){
					$('body').removeClass('nav-right-hide');					
				};											
				$('body').addClass('remove-header');	
//				$('[data-action^="remove-header"]').addClass('active');								
			}				
		});	
		$('[data-action^="fullscreen"]').click(function() {
//			$(this).siblings().removeClass('active');
			// if remove-navbar state				
			if ($('body').hasClass('fullscreen')){
				$('body').removeClass('fullscreen');	
				if (!$('body').hasClass('nav-left-start-hide')){
					$('body').removeClass('nav-left-hide');	
				};	
				if (!$('body').hasClass('nav-right-start-hide')){
					$('body').removeClass('nav-right-hide');					
				};			
//				$('[data-action^="fullscreen"]').removeClass('active');								
			// if nav normal state			
			} else {
				$('body').removeClass('remove-header');
				$('body').removeClass('remove-navbar');									
				$('body').addClass('fullscreen');	
				$('body').addClass('nav-left-hide');	
				$('body').addClass('nav-right-hide');				
//				$('[data-action^="fullscreen"]').addClass('active');								
			}				
		});	
		
		$('[data-action^="boxedtofull"]').click(function() {
			if ($('body').hasClass('boxed-layout')){
				$('body').removeClass('boxed-layout');
				$('body').addClass('full-layout');	
				$('[data-action^="boxedtofull"]').addClass('active');							
			}
			else if ($('body').hasClass('full-layout')){
				$('body').removeClass('full-layout');
				$('body').addClass('boxed-layout');	
				$('[data-action^="boxedtofull"]').removeClass('active');								
			}									
		});


		
		/* Sub Menu of Top Menu Button. 
		   Used: Input at login, register, forget password */			
		$('[data-action^="submenu"]').click(function() {
			// if submenu state				
			if ($('body').hasClass('submenu')){
				$('body').removeClass('submenu');														
			} else {								
				$('body').addClass('submenu');					
				setCenterMenu();											
			}				
		});	
		


		
		/* Open Menu Trigger
		   Used: < data-action="click-trigger" >
		         < data-action="click-target" >		   
		*/			
		$('[data-action^="click-trigger"]').click(function(e) {
			e.preventDefault();
			if ($(this).parent().hasClass("hover-trigger") && $(this).siblings().hasClass("hover-target")){
				return(0);
			}			
			// check if not children of click-target then slideup
			if ( $(this).parent().parent().parent().data("action") != "click-target" && $(this).parent().parent().parent().parent().parent().data("action") != "click-target"    )  {
				$('[data-action^="click-target"]').slideUp('fast',  function(){ //calculateContentHeight();														
					});				
			} else{
			// check if children of click-target then slideup all the parent kids
				$(this).parent().siblings().children('[data-action^="click-trigger"]').removeClass('open');	
				$(this).parent().siblings().children('[data-action^="click-target"]').slideUp('fast',  function(){//calculateContentHeight(); 
				    
					});
						
			}
			// if this is close
			if (! $(this).hasClass('open')){


				if ($(this).parent().parent().parent().data("action") != "click-target"){
					$('[data-action^="click-trigger"]').removeClass('open');
				};
				$(this).addClass('open');
				$(this).parent().children('[data-action^="click-target"]').slideDown('fast',  function(){    if ($('.navbar-menu').outerHeight() < $('.navbar-menu .vd_menu').outerHeight() + $('.navbar-spacing ').outerHeight()){calculateContentHeight()};
			
				});	
				
				
			// if this is open			
			} else {
				$(this).removeClass('open');
				// check if children of click-target then slideup				
				//if ($(this).parent().parent().parent().data("action") == "click-target"){
					$(this).parent().children('[data-action^="click-target"]').slideUp('fast',  function(){
						
					});				
				//}				
			}
			$('body').removeClass('expand-all');
										
		});		
								
		// Click outside click-target			
		$(document).click(function(event) {
			 if (( $(event.target).closest('[data-action^="click-trigger"]').get(0) == null ) && ( $(event.target).closest('[data-action^="click-target"]').get(0) == null ) && ( $(event.target).closest('[data-action^="expand-all"]').get(0) == null)) { 
				 $('[data-action^="click-target"]').hide();
				 $('[data-action^="click-trigger"]').removeClass('open');	
	 			 $('body').removeClass('expand-all');				 			 
				 calculateContentHeight();
			}			
		});
		
		
		
		/* Expand Tree Menu Button
		   Used: < data-action="expand-all" >   */			
		$('[data-action^="expand-all"]').click(function() {
			$('[data-action^="click-target"]').slideUp('fast',  function(){
					calculateContentHeight();					
					
			});								
			$('[data-action^="click-trigger"]').removeClass('open');					
			if ($('body').hasClass('expand-all')){
				$('body').removeClass('expand-all');																	
			// if nav normal state			
			} else {
				$(this).closest('.navbar-menu').find('.vd_menu .child-menu').slideDown('fast',  function(){
					calculateContentHeight();					
					
				}).find('[data-action^="click-trigger"]').addClass('open');						
				$('body').addClass('expand-all');					
			}						
		});	
		
		
				
		/* Custom Input Wrapper. 
		   Used: Input at login, register, forget password */			
    	$('.vd_input-wrapper input').blur(function(){
    			$(this).parent(".vd_input-wrapper").removeClass("focus");
    	})
             .focus(function() {		
    	        $(this).parent(".vd_input-wrapper").addClass("focus");
    	});		
		

		/* Widget Minimize Button
		   Used: < data-action="minimize" > in panel widget   */	
		$('[data-action^="minimize"]').click(function() {
			if ($(this).hasClass('active')){
				$(this).removeClass('active');
				$(this).closest(".widget").children('.panel-body, .panel-body-list').slideDown('fast');	
			} else{
				$(this).addClass('active');
				$(this).closest(".widget").children('.panel-body, .panel-body-list').slideUp('fast');	
			}			
		});	
		
		/* Widget Close Button
		   Used: < data-action="close" > in panel widget   */
		$('[data-action^="close"]').click(function() {
			$(this).closest(".widget").hide();			
		});	
		
		
		/* Widget Refresh Button
		   Used: < data-action="refresh" > in panel widget   */
		$('[data-action^="refresh"]').click(function() { 
			$(this).closest(".widget").block({ 
				message: '<h2><i class="fa fa-spinner fa-spin vd_green"></i></h2>',
				css: { 
					border: 'none', 
					padding: '15px', 
					background: 'none',
				},
				overlayCSS: { backgroundColor: '#FFF' },
				timeout: 2000 
			}); 			
		});				
		
		
		
		
		/* Chat Close Button
		   Used: < data-action="chat-close" > in panel   */
		$('[data-action^="chat-close"]').click(function() {
			$('.vd_chat-menu').remove();
		});
		
		
		
		
		/* Notification Button
		   Used: < data-action="notification" >   */		
		$('[data-action^="notification"]').click(function(e){
				e.preventDefault();
				var position=$(this).data('position');
				var type=$(this).data('type');
				var icon=$(this).data('icon');
				var title=$(this).data('title');
				var message=$(this).data('message');

				
				notification(position,type,icon,title,message);
				
		});
					
		$('[data-toggle^="tabajax"]').click(function(e) {
			e.preventDefault();
			var $this = $(this),
				loadurl = $this.attr('href'),
				targ = $this.attr('data-target');
		
			$.get(loadurl, function(data) {
				$(targ).html(data);
			});
		
			$this.tab('show');
			return false;
		});
		
		/* Sticky Menu. 
		   Used: Global */	
		var headerHeight = $("header").height();
		var submenuHeight = 0;


		
		function checkStickyMenu(){
			if ( !$("body").hasClass("nav-top-fixed") || $("body").hasClass("boxed-layout")) return(false);
		
			if($(window).scrollTop() > headerHeight-submenuHeight   &&  $(window).width() >= desktop_width){
				// #Back-Top visible
				
				if($("body").hasClass("sticky-menu-active"))
					return false;
				$("body").addClass("sticky-menu-active");
				if(!$("body").hasClass("fullscreen") && !$("body").hasClass("remove-header")){
					$("body").css('padding-top',headerHeight);		
				}
				$('header').css({
							top: -headerHeight,
							opacity:'.5',
							transition: 'none',
						}).stop(true, true).animate({
							top: 0,
							opacity: '1'
					}, 1000, function(){
						$('header').removeAttr('style');
						// Animation complete.
				});			
			} else if( $(window).scrollTop() <= 0||  $(window).width() < desktop_width){
				if ($("body").hasClass("sticky-menu-active")){
					$("body").css('padding-top',0);
					$("body").removeClass("sticky-menu-active");
					$("body").removeAttr('style');
				}
			}
		}		
		
		function checkBackTop(){
			if($(window).scrollTop() > headerHeight-submenuHeight){
				$('#back-top').addClass('visible');
			}  else if( $(window).scrollTop() <= 0 ){
				$('#back-top').removeClass('visible');		
			}
		}		
		$(window).on("scroll", function(){
				checkStickyMenu();	
				checkBackTop();			
		});
		$(window).on("resize", function(){
				checkStickyMenu();
				checkBackTop();
		});


		
		
			
					

		
});


// Device Touch Support Checker
function isTouch() {
	return $('html').hasClass('touch') ? 1 : 0
}

function isMobile() {
	return $('html').hasClass('mobile') ? 1 : 0
}
function isPhone() {
	return $('html').hasClass('phone') ? 1 : 0
}
function isTablet() {
	return $('html').hasClass('tablet') ? 1 : 0
}

// Scroll To Function
function scrollTo(element, offset) {
	pos = element ? $(element).offset().top : 0;
	$('html,body').animate({
		scrollTop: pos + (offset ? offset : 0)
	}, 'slow');
}

var stack_topleft = {"dir1": "down", "dir2": "right", "push": "bottom"};
var stack_topright = {"dir1": "down", "dir2": "left", "push": "bottom"};
var stack_bottomleft = {"dir1": "up", "dir2": "right", "push": "bottom"};
var stack_bottomright = {"dir1": "up", "dir2": "left", "push": "bottom"};

			
function notification(position, notif_type,icon_class,notif_title,notif_text){
	var output_title, output_stack;
	if (notif_title==""){output_title="";} else {
		output_title='<h5><strong>'+notif_title+'</strong></h5>';							
	};
	
	switch (position) {
		case 'topright' : output_stack = stack_topright; break;
		case 'topleft' : output_stack = stack_topleft; break;
		case 'bottomright' : output_stack = stack_bottomright; break;
		case 'bottomleft' : output_stack = stack_bottomleft; break;																
	}

	
	$.pnotify({
//				title: 'My Title',
		title_escape: true,
		text: '<div class="content-list content-image"><div class="list-wrapper mgtp-10 mgbt-xs-10"><div><div class="menu-icon"><i class="'+icon_class+'"></i></div> <div class="menu-text">'+output_title+'<p class="lh-sm">'+notif_text+'</p> </div></div></div></div>',
		cornerclass: '',
		type: notif_type,
		icon: 'false',
		width: '320px',
		closer_hover: false,
		sticker: true,
		opacity: 1,
		animation: {
			effect_in: 'shake',
			effect_out: 'fade'
		},
		addclass: 'stack-'+position,
		stack: output_stack			
		
	});		
}