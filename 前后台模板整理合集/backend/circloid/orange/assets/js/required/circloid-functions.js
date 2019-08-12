/////////////////////////////////
// Required Circloid Functions //
/////////////////////////////////

"use strict";

/**
 * GLOBAL VARIABLES
 * endTime handles the reveal countdown
 * @type Integer
 *
 * badgeRevealTime handles when the badges on the menu will be revealed
 * @type Integer
 */
window.endTime = 0;
window.badgeRevealTime = 0;

/**
 * circloidRFResponsiveness handles Circloid's responsiveness for menus
 * RF = Required Function
 */
function circloidRFResponsiveness(){
	/* Show/Hide Notifications Area on mobile devices */
	$(".notifications-alert.notifications-alert-mobile").on("click", function(){
		$(".header-profile").toggleClass("fade-out-item", 500).promise().done(function(){
			$(this).toggleClass("hide-item");
		});
		$(".navbar-toggle").toggleClass("fade-out-item", 500).promise().done(function(){
			$(this).toggleClass("hide-item");
		});
		$(".header-search").toggleClass("fade-out-item", 500).promise().done(function(){
			$(this).toggleClass("hide-item");
		});
		$(".header-language").toggleClass("fade-out-item", 500).promise().done(function(){
			$(this).toggleClass("hide-item");
		});
		$("#header-container .header-bar .logo").toggleClass("fade-out-item", 500).promise().done(function(){
			$(this).toggleClass("hide-item");
			$(".header-info").toggleClass("list-open");
			$(".notifications-alert.notifications-alert-mobile").siblings("li.notifications-alert").toggleClass("show-item");
		});
	});

	/* Toggle Horizontal & Left/Main Menu */
	$(".navbar-toggle").on("click", function(){
		if($("#left-column").height() > 0){
			if($("#left-column").hasClass("menu-open")){
				$("#left-column").animate({"left":"-110px"}, 200, "linear",function(){
					$(this).removeClass("menu-open");
					$(this).removeAttr("style");
				});
			}else{
				$("#left-column").animate({"left":"0"}, 200, "linear",function(){
					$(this).addClass("menu-open");
				});
			}
		}
		if($("#mainnav-horizontal-inner").height() > 0){
			if($("#mainnav-horizontal-inner").hasClass("menu-open")){
				$("#mainnav-horizontal-inner").slideUp(200, function(){
					$(this).removeClass("menu-open");
					$(this).removeAttr("style");
				});
			}else{
				$("#mainnav-horizontal-inner").slideDown(200, function(){
					$(this).addClass("menu-open");
				});
			}
		}
	});

	/* Close opened Menus If User CLicks Outside the Menu (Works on both Left and Horizontal Menus) */
	$(document).on('click', function(event) {
		// Close the header notifications alerts
		if(!$(event.target).closest(".header-notifications").length){
			$(".header-info").removeClass("list-open");
			$(".header-profile").removeClass("fade-out-item").removeClass("hide-item");
			$(".navbar-toggle").removeClass("fade-out-item").removeClass("hide-item");
			$(".header-search").removeClass("fade-out-item").removeClass("hide-item");
			$(".header-language").removeClass("fade-out-item").removeClass("hide-item");
			$("#header-container .header-bar .logo").removeClass("fade-out-item").removeClass("hide-item");
			$(".notifications-alert.notifications-alert-mobile").siblings("li.notifications-alert").removeClass("show-item");
		}

		// Close Left Menu
		if(!$(event.target).closest("#left-column, .navbar-toggle").length){
			// Hide the menus if visible on smaller devices
			if($(window).width() <= "750"){
				$("#left-column").animate({"left":"-110px"}, 200, "linear",function(){
					$(this).removeClass("menu-open");
					$(this).removeAttr("style");
				});
			}
		}

		// Close Horizontal Menu
		if (!$(event.target).closest("#mainnav-horizontal-inner, .navbar-toggle").length){
			// Hide the menus if visible on smaller devices
			if($(window).width() <= "750"){
				$("#mainnav-horizontal-inner").slideUp(200, function(){
					$(this).removeClass("menu-open");
					$(this).removeAttr("style");
				});
			}
		}
	});
}

/**
 * circloidRFMisc is a combination of miscellaneous fixes required for Circloid or Plugins to work
 */
function circloidRFMisc(){
	/* Adjust body if header is fixed */
	if($(".header-bar").hasClass("navbar-fixed-top")){
		var headerHeight = $(".header-bar").height();
		$("body").css({"padding-top":headerHeight + "px"});
	}

	if($("#mainnav-horizontal-inner").length && $("#mainnav-horizontal-inner").hasClass("fixed")){
		$(".right-column-content").css({"padding-top":"58px"});
	}

	/* Increase the size of Right Column if Left Menu is set to "Show Only Icons" */
	if($("#left-column").hasClass("menu-icon-only")){
		if($(window).width() > "750"){
			$("#right-column").animate({"margin-left":"52px"}, 100, "linear");
		}else{
			$("#right-column").animate({"margin-left":"0"}, 100, "linear");
		}
		$(window).resize(function(){
			if($(window).width() > "750"){
				$("#right-column").animate({"margin-left":"52px"}, 100, "linear");
			}else{
				$("#right-column").animate({"margin-left":"0"}, 100, "linear");
			}
		});
	}

	/* Make Left Menu scroll if menu is fixed */
	if($("#left-column").hasClass("fixed")){
		var windowHeight = $(window).height();
		var headerHeight = $(".header-bar").height();

		// Set Height of the Left Column
		$("#mainnav").height(windowHeight - headerHeight);

		// Destroy old scrollbar if present
		$("#mainnav").mCustomScrollbar("destroy");

		// Create new scrollbar
		$("#mainnav").mCustomScrollbar({
			autoHideScrollbar:true,
			scrollbarPosition: "outside",
			theme:"dark"
		});
	}

	/* Dropcaps */
    $(".dropcap p:eq(0)").each(function() {
        var text = $(this).html();
        var first = $('<span>'+text.charAt(0)+'</span>').addClass('dropcap-item');
        $(this).html(text.substring(1)).prepend(first);
    });

	/* Add Multi-Colored Border Where Needed */
	var coloredBorder = '<div class="top-border"><span class="border-block bg-color-green"></span><span class="border-block bg-color-orange"></span><span class="border-block bg-color-yellow"></span><span class="border-block bg-color-blue"></span><span class="border-block bg-color-red"></span><span class="border-block bg-color-lime"></span><span class="border-block bg-color-purple"></span></div>';

	$('*[data-border-top="multi"]').prepend(coloredBorder).css({"border-top":"0"});	
	$('.modal-content').prepend(coloredBorder).css({"border-top":"0"});	

	/* Call Tooltips */
	$("[data-toggle='tooltip']").tooltip();

	/* Call Popovers */
	$("[data-toggle='popover']").popover();

	/* Call Function: circloidResizeItems() */
	circloidResizeItems();

	/* Make CKEditor compatible in all browsers except IE7 and below */
	// See URL for more details: http://docs.ckeditor.com/#!/guide/dev_unsupported_environments
	if(window.CKEDITOR && (!CKEDITOR.env.ie || CKEDITOR.env.version > 7)){
		CKEDITOR.env.isCompatible = true;
	}

	/**
	 * circloidContentMobileMenu handles the mobile menu that exists within the main RIght Content area.
	 * Eg: Like the one on the Mailbox page
	 */
	function circloidContentMobileMenu(){
		$(".within-content-navbar-toggle").each(function(){
			var target = $(this).data("c-target");

			$(this).on("click", function(){
				$(target).slideToggle(300);
			});

			// Display target menu when window is above 750px (desktop view)
			$(window).resize(function(){
				if($(window).width() > "750"){
					$(target).removeAttr("style");
				}
			});
		});
	}

	/* Call Function: circloidContentMobileMenu() */
	circloidContentMobileMenu();
}

/**
 * circloidResizeItems handles the resizing all necessary items to the appropriate size on window resize
 */
function circloidResizeItems(){
	$(window).resize(function() {
		if(this.resizeTO) clearTimeout(this.resizeTO);
		this.resizeTO = setTimeout(function() {
			$(this).trigger('resizeEnd');
		}, 500);
	});

	$(window).bind('resizeEnd', function() {
		/* Make Left Menu scroll if menu is fixed */
		if($("#left-column").hasClass("fixed")){
			// Destroy old scrollbar
			$("#mainnav").mCustomScrollbar("destroy");

			// Reset height of the Left Column
			var windowHeight = $(window).height();
			var headerHeight = $(".header-bar").height();

			// Set Height of the Left Column
			$("#mainnav").height(windowHeight - headerHeight);

			// Create new scrollbar
			$("#mainnav").mCustomScrollbar({
				autoHideScrollbar:true,
				scrollbarPosition: "outside",
				theme:"dark"
			});
		}


		/* Adjust body if header is fixed */
		if($(".header-bar").hasClass("navbar-fixed-top")){
			var headerHeight = $(".header-bar").height();
			$("body").css({"padding-top":headerHeight + "px"});
		}

		/* Return Notification alert area back to default state. */
		$(".header-info").removeClass("list-open");
		$(".header-profile").removeClass("fade-out-item").removeClass("hide-item");
		$(".navbar-toggle").removeClass("fade-out-item").removeClass("hide-item");
		$(".header-search").removeClass("fade-out-item").removeClass("hide-item");
		$(".header-language").removeClass("fade-out-item").removeClass("hide-item");
		$("#header-container .header-bar .logo").removeClass("fade-out-item").removeClass("hide-item");
		$(".notifications-alert.notifications-alert-mobile").siblings("li.notifications-alert").removeClass("show-item");
	});
}


/* ---- Menu Functions ---- */

/**
 * circloidMenuNav handles the navigation, both Left Menu and Horizontal Menu
 * @param  {object} options: Contains the options set by the user
 * - @param {string} options.container:		accepts [{menu class}, {menu id}]
 * - @param {string} options.eventtype:		accepts [click, hover]
 * - @param {string} options.menuposition:	accepts [top, bottom, left, right]
 * - @param {string} options.slideout:		accepts [left, right, down]
 */
function circloidMenuNav(options){

	/* options presets */
	if(options){
		if(!options.container){
			options.container = ".mainnav";
		}
		if(!options.eventtype){
			options.eventtype = "click";
		}
		if(!options.menuposition){
			options.menuposition = "left";
		}
		if(!options.slideout){
			options.slideout = "down";
		}
	}else{
		options = {container: ".mainnav", eventtype: "click", menuposition: "left", slideout: "down"};
	}

	/* Add "parent" class to appropriate dropdown */
	$(options.container).find("li li > a").siblings("ul").prev().addClass("parent");

	/* Add Dropdown arrow to parents of dropdowns */
	$("<i class='icon icon-arrow-down-bold-round icon-size-small'></i>").appendTo($(options.container).find("li li > a").siblings("ul").prev());

	if(options.menuposition == "top"){
		$(options.container).find("span.main-menu-icon").each(function(){
			$(this).parent().siblings("ul").siblings("a").children("span.main-menu-icon").after("<i class='icon icon-arrow-down-bold-round icon-size-small'></i>");
		});
	}

	/* Animate Menu */
	if($(options.container).hasClass("animate")){

		// Sequenced Reveal of menu icons, text and badge
		var count = $(options.container).children("li.menu-item-top").size();
		var duration = 200;
		var finalDelay = (count * duration) + 300;

		$(options.container).find(".main-menu-icon .icon").each(function(index){
			$(this).delay(duration * index).animate({"bottom":"0", "opacity":1}, duration, "linear", function(){
				$(this).parent().siblings(".main-menu-text").delay(200).animate({"left":"0", "opacity":1}, 200, "linear");
			});
		});

		if(finalDelay > badgeRevealTime){
			badgeRevealTime = finalDelay;
		}
	}

	/* Set style for menu */
	$(options.container).css("position","relative");
	$(options.container).children("li").children("ul").css("position","absolute");

	if(options.eventtype == "click"){
		/* Call Function: menuNavClick() */
		menuNavClick(options.container, options.menuposition);
	}else if(options.eventtype == "hover"){
		/* Call Function: menuNavHover() */
		menuNavHover(options.container, options.menuposition);
	}

	$(options.container).find("a.top, a.parent").click(function(e){
		if($(this).siblings("ul").length){
			e.preventDefault();
		}
	});

	/* Close Open Menus If User CLicks Outside the Menu (Works on both Left and Secondary Menus) */
	$(document).on('click', function(event) {
		if (!$(event.target).closest(options.container).length){
			// Hide the menus if visible
			$(options.container).children("li").children("ul").animate({"top": "50px", "opacity":"hide"},200, "linear",function(){
				$(options.container).find("li ul").removeAttr("style").removeClass("sub-menu-open");
				$(options.container).children("li").removeAttr("style").removeClass("menu-open");
			});
		}
	});



	/**
	 * menuNavClick handles the menu open/close when menu is set to open on click
	 * @param  {string} menuBlock:		the parent class/id (options.container) which is set in parent function circloidMenuNav()
	 * @param  {string} menuposition:	where the sub-menu will slideout to set in parent function circloidMenuNav()
	 */
	function menuNavClick(menuBlock, menuposition){
		/* Display Top Menu */
		$(menuBlock).children("li").children("a").on("click", function(){
			if($(this).parent().hasClass("menu-open")){
				/* Call Function: menuNavClickClose() */
				menuNavClickClose($(this), menuposition);
			}else{
				if(menuposition == "left"){
					$($(this).parents().eq(3)).css("overflow","visible");
					$($(this).parents().eq(2)).css("overflow","visible");
				}
				/* Call Function: menuNavClickOpen() */
				menuNavClickOpen($(this), menuposition);
			}
		});

		/* Display Submenus */
		$(menuBlock).children("li").children("ul").find("li a").on("click", function(){
			if($(this).next("ul").hasClass("sub-menu-open")){
				/* Call Function: menuNavSubClickClose() */
				menuNavSubClickClose($(this), menuposition);
			}else{
				/* Call Function: menuNavSubClickOpen() */
				menuNavSubClickOpen($(this), menuposition);
			}
		});
	}

	/**
	 * menuNavClickOpen handles the opening of the menu on click
	 * @param  {object} thisObj      the object sent from the parent
	 * @param  {string} menuposition slideout menu position sent from parent
	 */
	function menuNavClickOpen(thisObj, menuposition){
		if(menuposition == "left"){
			thisObj.parent().parent().find("li.menu-open > ul").animate({"top": "50px", "opacity":"hide"},200, "linear",function(){
				$(this).removeAttr("style");
				$(this).find("ul").removeAttr("style").removeClass("sub-menu-open");
				$(this).parent().removeClass("menu-open");
			});
			thisObj.next("ul").animate({"top": "0", "opacity":"show"},200, "linear",function(){
				thisObj.parent().addClass("menu-open");
			});
		}else if(menuposition == "top"){
			thisObj.parent().parent().find("li.menu-open > ul").animate({"top": "62px", "opacity":"hide"},200, "linear",function(){
				$(this).removeAttr("style");
				$(this).find("ul").removeAttr("style").removeClass("sub-menu-open");
				$(this).parent().removeClass("menu-open");
			});
			thisObj.next("ul").animate({"top": "42px", "opacity":"show"},200, "linear",function(){
				thisObj.parent().addClass("menu-open");
			});
		}else if(menuposition == "right"){

		}
	}

	/**
	 * menuNavClickClose handles the closing of the menu on click
	 * @param  {object} thisObj      the object sent from the parent
	 * @param  {string} menuposition slideout menu position sent from parent
	 */
	function menuNavClickClose(thisObj, menuposition){
		if(menuposition == "left"){
			thisObj.next("ul").animate({"top": "50px", "opacity":"hide"},200, "linear",function(){
				$(this).removeAttr("style");
				$(this).parent().removeClass("menu-open");
				$(this).find("ul").removeAttr("style").removeClass("sub-menu-open");
			});
		}else if(menuposition == "top"){
			thisObj.next("ul").animate({"top": "62px", "opacity":"hide"},200, "linear",function(){
				$(this).removeAttr("style");
				$(this).parent().removeClass("menu-open");
				$(this).find("ul").removeAttr("style").removeClass("sub-menu-open");
			});
		}else if(menuposition == "right"){
			// TODO
		}
	}

	/**
	 * menuNavSubClickOpen handles the opening of the sub-menu on click
	 * @param  {object} thisObj      the object sent from the parent
	 * @param  {string} menuposition slideout menu position sent from parent
	 */
	function menuNavSubClickOpen(thisObj, menuposition){
		if(menuposition == "left"){
			thisObj.parent().siblings("li").find("ul").slideUp(function(){
				$(this).removeAttr("style").removeClass("sub-menu-open");
			});
			thisObj.next("ul").slideDown().addClass("sub-menu-open");
		}else if(menuposition == "top"){
			thisObj.parent().siblings().removeAttr("style");
			thisObj.parent().siblings().find("ul").removeAttr("style").removeClass("sub-menu-open");
			thisObj.parent().siblings().find("a.parent ~ ul.sub-menu-open").animate({"top": "39px", "opacity":"hide"},200, "linear");
			if(thisObj.siblings("ul").size() > 0){
				thisObj.parent().css("position","relative");
				thisObj.next("ul").animate({"top": "29px", "left": "158px", "opacity":"show"},200, "linear",function(){
					$(this).addClass("sub-menu-open");
				});
			}
		}
	}

	/**
	 * menuNavSubClickClose handles the closing of the sub-menu on click
	 * @param  {object} thisObj      the object sent from the parent
	 * @param  {string} menuposition slideout menu position sent from parent
	 */
	function menuNavSubClickClose(thisObj, menuposition){
		if(menuposition == "left"){
			thisObj.next("ul").slideUp().removeClass("sub-menu-open");
			thisObj.next("ul").find("ul").slideUp(function(){
				$(this).removeAttr("style").removeClass("sub-menu-open");
			});
		}else if(menuposition == "top"){
			thisObj.next("ul").animate({"top": "39px", "opacity":"hide"},200, "linear",function(){
				$(this).removeAttr("style").removeClass("sub-menu-open");
				$(this).find("ul").removeAttr("style").removeClass("sub-menu-open");
			});
		}
	}

	/**
	 * menuNavHover handles the open/close of the menu on hover
	 * @param  {object} thisObj      the object sent from the parent
	 * @param  {string} menuposition slideout menu position sent from parent
	 */
	function menuNavHover(menuBlock, menuposition){
		/* Display Top Menu */
		$(menuBlock).find(".menu-item-top").mouseenter(function(){
			if(menuposition == "left"){
				$($(this).parents().eq(3)).css("overflow","visible");
				$($(this).parents().eq(2)).css("overflow","visible");
				$($(this).parents().eq(1)).css("overflow","visible");
			}
			/* Call Function: menuNavMouseEnter() */
			menuNavMouseEnter($(this), menuposition);
		}).mouseleave(function(){
			if(menuposition == "left"){
				$($(this).parents().eq(3)).css("overflow","hidden");
				$($(this).parents().eq(2)).css("overflow","hidden");
			}
			/* Call Function: menuNavMouseLeave() */
			menuNavMouseLeave($(this), menuposition);
		});


		/* Display Submenus */
		$(menuBlock).children("li").children("ul").find("li a").on("click", function(){
			if($(this).next("ul").hasClass("sub-menu-open")){
				/* Call Function: menuNavSubClickClose() */
				menuNavSubClickClose($(this), menuposition);
			}else{
				/* Call Function: menuNavSubClickOpen() */
				menuNavSubClickOpen($(this), menuposition);
			}
		});

		/* TODO: If parent event type is hover and the submenu is click to open as it is, then add a feature that will hide the submenus when you hover out of the main parent li */
	}

	/**
	 * menuNavMouseEnter handles the open of the menu on hover
	 * @param  {object} thisObj      the object sent from the parent
	 * @param  {string} menuposition slideout menu position sent from parent
	 */
	function  menuNavMouseEnter(thisObj, menuposition){
		if(menuposition == "left"){
			thisObj.children("ul").animate({"top": "0", "opacity":"show"},200, "linear",function(){
				thisObj.parent("li").addClass("menu-open");
			});
		}else if(menuposition == "top"){
			thisObj.children("ul").animate({"top": "42px", "opacity":"show"},200, "linear",function(){
				thisObj.parent("li").addClass("menu-open");
			});
		}
	}

	/**
	 * menuNavMouseLeave handles the open of the menu on leave
	 * @param  {object} thisObj      the object sent from the parent
	 * @param  {string} menuposition slideout menu position sent from parent
	 */
	function  menuNavMouseLeave(thisObj, menuposition){
		if(menuposition == "left"){
			thisObj.children("ul").animate({"top": "50px", "opacity":"hide"},200, "linear",function(){
				$(this).removeClass("menu-open");
				$(this).removeAttr("style");
				$(this).find("ul").removeAttr("style").removeClass("sub-menu-open");
			});
		}else if(menuposition == "top"){
			thisObj.children("ul").animate({"top": "62px", "opacity":"hide"},200, "linear",function(){
				$(this).removeClass("menu-open");
				$(this).removeAttr("style");
				$(this).find("ul").removeAttr("style").removeClass("sub-menu-open");
			});
		}
	}
}

/**
 * circloidNotificationAlert handles the header notifications alert
 * @param  {object} options: Contains the options set by the user
 * - @param {string} options.eventtype:		accepts [click, hover]
 */
function circloidNotificationAlert(options){
	if(options){
		if(!options.eventtype){
			options.eventtype = "click";
		}
	}else{
		options = {eventtype: "click"};
	}

	if($(".header-notifications").hasClass("animate")){

		var count = $('.notifications-alert').size();
		var duration = 200;
		var finalDelay = (count * duration) + 300;

		setTimeout(function(){
			// Sequenced Reveal
			setTimeout(function(){
				$(".header-notifications").css({"overflow":"visible"});
			}, finalDelay);

			$('.notifications-alert').each(function(index){
				$(this).delay(duration * index).animate({"bottom":"0", "opacity":1}, duration, "linear");
			});

		}, endTime);

		endTime = endTime + finalDelay;

		if(endTime > badgeRevealTime){
			badgeRevealTime = endTime;
		}
	}

	if(options.eventtype == "click"){
		/* Display Notifications Alert on click */
		$(".notifications-alert").on("click", function(){
			if($(this).hasClass("menu-open")){
				$(this).children("ul").animate({"top":"53px", "opacity":"hide"}, 200, "linear",function(){
					$(this).removeAttr("style");
					$(this).parent("li").removeClass("menu-open");
				});
			}else{
				$(this).siblings().children("ul").animate({"top":"53px", "opacity":"hide"}, 200, "linear",function(){
					$(this).removeAttr("style");
					$(this).parent("li").removeClass("menu-open");
				});
				$(this).children("ul").animate({"top":"39px", "opacity":"show"}, 200, "linear",function(){
					$(this).parent("li").addClass("menu-open");
							
					// Destroy old scrollbar if present
					$(this).children("li.notifications-alert-block").mCustomScrollbar("destroy");

					// Create new scrollbar
					$(this).children("li.notifications-alert-block").mCustomScrollbar({
						autoHideScrollbar:true,
						scrollbarPosition: "outside",
						theme:"dark"
					});
				});
			}
		});
	}else if(options.eventtype == "hover"){
		/* Display Notifications Alert on hover */
		$(".notifications-alert").mouseenter(function(){
			$(this).children("ul").animate({"top":"39px", "opacity":"show"}, 200, "linear",function(){
				$(this).parent("li").addClass("menu-open");	
				// Destroy old scrollbar if present
				$(this).children("li.notifications-alert-block").mCustomScrollbar("destroy");

				// Create new scrollbar
				$(this).children("li.notifications-alert-block").mCustomScrollbar({
					autoHideScrollbar:true,
					scrollbarPosition: "outside",
					theme:"dark"
				});
			});
		}).mouseleave(function(){
			$(this).children("ul").animate({"top":"53px", "opacity":"hide"}, 200, "linear",function(){
				$(this).removeAttr("style");
				$(this).parent("li").removeClass("menu-open");
			});
		});
	}

	/* Close Open Menus If User Clicks Outside the Menu (Works on both Left and Secondary Menus) */
	$(document).on('click', function(event) {
		if (!$(event.target).closest('.notifications-alert').length) {
			$(".notifications-alert").children("ul").animate({"top":"53px", "opacity":"hide"}, 200, "linear",function(){
				$(this).removeAttr("style");
				$(this).parent("li").removeClass("menu-open");
			});
		}
	});

	$(".header-notifications .notifications-alert > a").click(function(e){
		e.preventDefault();
	});
}

/**
 * circloidProfileMenu handles the profile menu in the header
 * @param  {object} options: Contains the options set by the user
 * - @param {string} options.eventtype:		accepts [click, hover]
 */
function circloidProfileMenu(options){
	if($(".header-profile").hasClass("animate")){

		// Sequenced Reveal
		var duration = 200;
		var delay = 200;

		setTimeout(function(){
			$(".header-profile > ul.header-profile-menu > li").animate({"bottom":"0", "opacity":1}, duration, "linear",function(){
				$(this).find(".main-menu-text").delay(delay).animate({"left":"0", "opacity":1}, 200, "linear", function(){
					$(".header-profile").css({"overflow":"visible"});
				});
			});
		}, endTime);

		endTime = endTime + duration + delay;

		if(endTime > badgeRevealTime){
			badgeRevealTime = endTime + 400;
		}
	}

	/* Set default options */
	if(options){
		if(!options.eventtype){
			options.eventtype = "click";
		}
	}else{
		options = {eventtype: "click"};
	}

	if(options.eventtype == "click"){
		$(".header-profile a.top").on("click", function(e){
			if($(this).parent().hasClass("menu-open")){
				$(this).siblings("ul").animate({"top":"53px", "opacity":"hide"}, 200, "linear",function(){
					$(this).removeAttr("style");
					$(this).parent("li").removeClass("menu-open");
				});
			}else{
				$(this).siblings("ul").animate({"top": "39px", "opacity":"show"},200, "linear",function(){
					$(this).parent("li").addClass("menu-open");
				});
			}
			e.preventDefault();
		});
	}
	
	/* Close Open Menus If User Clicks Outside the Menu */
	$(document).on('click', function(event) {
		if (!$(event.target).closest('.header-profile').length) {
			$(".header-profile a.top").siblings("ul").animate({"top":"53px", "opacity":"hide"}, 200, "linear",function(){
				$(this).removeAttr("style");
				$(this).parent("li").removeClass("menu-open");
			});
		}
	});
}

/**
 * circloidSearchBar handles the header search bar
 */
function circloidSearchBar(){
	if($(".header-search").hasClass("animate")){
		
		// Sequenced Reveal
		var duration = 200;
		var delay = 200;

		setTimeout(function(){
			$(".header-search.animate > form > ul > li").animate({"bottom":"0", "opacity":1}, duration, "linear",function(){
				$(this).find(".search-closed .main-text").delay(delay).animate({"left":"0", "opacity":1}, 200, "linear");
				$(".header-search").css({"overflow":"visible"});
			});
		}, endTime);

		endTime = endTime + duration + delay;

		if(endTime > badgeRevealTime){
			badgeRevealTime = endTime;
		}
	}

	// Add iCheck to Radio and Checkbox	
	$(".header-search .icheck-square").iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue'
	});

	// Open/Close Advanced options if Checked/Unchecked
	$("#input-advanced-search").on('ifChecked', function(event){
		$(".advanced-search").slideDown(200);
	});
	$("#input-advanced-search").on('ifUnchecked', function(event){
		$(".advanced-search").slideUp(200);
	});

	$(".search-closed").on("click", function(e){
		$(this).css({"display":"none"});
		$(".search-opened").css({"display":"block"});
		$(this).siblings("ul").animate({"top": "36px", "opacity":"show"},200, "linear",function(){
		});
		e.preventDefault();
	});

	$(".search-opened").on("click", function(e){
		$(this).css({"display":"none"});
		$(".search-closed").css({"display":"block"});
		$(this).siblings("ul").animate({"top": "56px", "opacity":"hide"},200, "linear",function(){
			$(this).removeAttr("style");
		});
		e.preventDefault();
	});

	// Close Open Menus If User Clicks Outside the Menu
	$(document).on('click', function(event) {
		if (!$(event.target).closest('.header-search').length) {
			$(".search-opened").css({"display":"none"});
			$(".search-closed").css({"display":"block"});
			$(".search-opened").siblings("ul").animate({"top": "56px", "opacity":"hide"},200, "linear",function(){
				$(this).removeAttr("style");
			});
		}
	});
}

/**
 * circloidLanguageMenu handles the language menu in header bar
 */
function circloidLanguageMenu(){
	if($(".header-language").hasClass("animate")){

		// Sequenced Reveal
		var duration = 200;
		var delay = 200;

		setTimeout(function(){
			$(".header-language.animate > ul > li").animate({"bottom":"0", "opacity":1}, duration, "linear",function(){
				$(this).find(".language-closed .main-text").delay(delay).animate({"left":"0", "opacity":1}, 200, "linear");
				$(".header-language").css({"overflow":"visible"});
			});
		}, endTime);

		endTime = endTime + duration + delay;

		if(endTime > badgeRevealTime){
			badgeRevealTime = endTime;
		}
	}

	$(".language-closed").on("click", function(e){
		$(this).css({"display":"none"});
		$(".language-opened").css({"display":"block"});
		$(this).siblings("ul").animate({"top": "36px", "opacity":"show"},200, "linear",function(){
		});
		e.preventDefault();
	});

	$(".language-opened").on("click", function(e){
		$(this).css({"display":"none"});
		$(".language-closed").css({"display":"block"});
		$(this).siblings("ul").animate({"top": "56px", "opacity":"hide"},200, "linear",function(){
			$(this).removeAttr("style");
		});
		e.preventDefault();
	});

	// Close Open Menus If User Clicks Outside the Menu
	$(document).on('click', function(event) {
		if (!$(event.target).closest('.header-language').length) {
			$(".language-opened").css({"display":"none"});
			$(".language-closed").css({"display":"block"});
			$(".language-opened").siblings("ul").animate({"top": "56px", "opacity":"hide"},200, "linear",function(){
				$(this).removeAttr("style");
			});
		}
	});
}

/**
 * circloidRevealBugFix fixes bugs caused during animation of the left menu and horizontal menu
 */
function circloidRevealBugFix(){
	// Reveal Badges
	setTimeout(function(){
		$(".notifications-alert > .badge").animate({"opacity":"show"}, 200, "linear");
		$(".menu-item-top > a.top > .badge").animate({"opacity":1}, 200, "linear");
	}, badgeRevealTime);
}


/* ---- Blocks Functions ---- */

/**
 * circloidBlocks handles all blocks functions
 * @param  {object} options: Contains the options set by the user
 * - @param {string}options.colorcollapsed:		the color of the block border when collapsed. accepts [green, orange, yellow, blue, red, lime, pink]
 */
function circloidBlocks(options){
	// Create new scrollbar
	$(".block.block-size-medium .block-content-inner, .block.block-size-normal .block-content-inner, .block.block-size-large .block-content-inner").mCustomScrollbar({
		autoHideScrollbar:true,
		scrollbarPosition: "outside",
		theme:"dark"
	});

	circloidBlockControls(options);

	/**
	 * circloidBlockControls handles the controls attached to each block
	 * @param  {object} options: Contains the options set by the user. All options are taken from the parent circloidBlocks()
	 */
	function circloidBlockControls(options){
		
		var colorClass = "";

		if(options){
			switch(options.colorcollapsed){
				case "green":
				colorClass = "highlight-color-green";
				break;
				case "orange":
				colorClass = "highlight-color-orange";
				break;
				case "yellow":
				colorClass = "highlight-color-yellow";
				break;
				case "blue":
				colorClass = "highlight-color-blue";
				break;
				case "red":
				colorClass = "highlight-color-red";
				break;
				case "lime":
				colorClass = "highlight-color-lime";
				break;
				case "pink":
				colorClass = "highlight-color-purple";
				break;
				default:
				colorClass = "highlight-color-red";
			}
		}else{
			colorClass = "highlight-color-red";
		}

		/* Remove Block */
		$(".block-control-remove").on("click", function(){
			$(this).parents().eq(2).fadeOut(500, function(){
				$(this).remove();
			});
		});

		/* Block Settings - This is controlled by Bootstrap Modal Alert - Check documentation */

		/* Collapse Block */
		$(".block.collapsed .block-heading").addClass(colorClass);
		$(".block-control-collapse").on("click", function(){
			if($(this).parents().eq(2).hasClass("collapsed")){
				$(this).parent().parent().removeClass(colorClass);
				$(this).parent().parent().next().slideDown(500, function(){
					$(this).parent().removeClass("collapsed");
				});
			}else{
				$(this).parent().parent().next().slideUp(500, function(){
					$(this).prev().addClass(colorClass);
					$(this).parent().addClass("collapsed");
				});
			}
		});

		/*  Refresh Block Data */
		// SAMPLE DATA: Contains Sample Code. Please make changes based on your own needs. See documentation.
		$(".block-control-refresh").on("click", function(e){
			var url = $(this).parents().eq(2).data("url");
			var thisObj = $(this);
			var blockContainer = $(this).parent().parent().siblings(".block-content-outer").find(".block-content-inner");
			$.ajax({
				type: 'GET',
				url: url,
				beforeSend: function(){
					thisObj.siblings(".icon-success").remove();
					thisObj.siblings(".icon-error").remove();
					thisObj.parent().append("<span class='icon loading' style='opacity:1;'></span>");
				},
				complete: function(){
					thisObj.siblings(".loading").remove();
				},
				error: function(){
					thisObj.parent().append("<span class='icon icon-exclamation icon-size-medium icon-error' style='opacity:1;'></span>");
					thisObj.siblings(".icon-error").delay(7000).fadeOut(1000);
				},
				success: function(data){
					// Destroy old scrollbar if present
					$(blockContainer).mCustomScrollbar("destroy");

					thisObj.parent().append("<span class='icon icon-check icon-size-medium icon-success' style='opacity:1;'></span>");
					thisObj.siblings(".icon-success").delay(3000).fadeOut(1000);
					blockContainer.html(data);

					// Create new scrollbar
					$(blockContainer).mCustomScrollbar({
						autoHideScrollbar:true,
						scrollbarPosition: "outside",
						theme:"dark"
					});
				}
			});
			e.preventDefault();
		});
	}
}
