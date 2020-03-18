/*
 * Template name: Kertas - Responsive Bootstrap 3 Admin Template
 * Version: 1.0.0
 * Author: VergoLabs
 */

/* NEWS TICKER */
function initNews() {
	$('.ticker').totemticker({
		row_height	:	'60px',
		mousestop	:	false
	});
}

/* SCROLL TO TOP */
function initScrollTop() {
	var offset = 100;
	var duration = 500;
	jQuery(window).scroll(function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.scroll-to-top').fadeIn(duration);
		} else {
			jQuery('.scroll-to-top').fadeOut(duration);
		}
	});
	jQuery('.scroll-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	});
}

/* SIDEBAR TOGGLE */
function initSidebar() {
	$("[data-toggle='offcanvas']").click(function(e) {
		e.preventDefault();
		if ($(window).width() <= 992) {
			$('.row-offcanvas').toggleClass('active');
			$('.row-offcanvas').toggleClass('relative');
			$('.left-side').removeClass("collapse-left");
			$('.right-side').removeClass('strech');
		} else {
			$('.left-side').toggleClass("collapse-left");
			$('.right-side').toggleClass('strech');
		}
	});
	
	/* SIDEBAR FIX WHEN RESIZED */
	function _fix() {
		var height = $(window).height() - $("body > .header").height();
		$(".wrapper").css("min-height", height + "px");
		var content = $(".wrapper").height();
		if (content > height)
			$(".left-side, html, body").css("min-height", content + "px");
		else {
			$(".left-side, html, body").css("min-height", height + "px");
		}
	}
	
	_fix();
	
	$(".wrapper").resize(function() {
		_fix();
	});
	
	/* SIDEBAR MENU */
	$.fn.tree = function() {
		return this.each(function() {
			var btn = $(this).children("a").first();
			var menu = $(this).children(".sub-menu").first();
			var isActive = $(this).hasClass('active');
			if (isActive) {
				menu.show();
				btn.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down");
			}
			btn.click(function(e) {
				e.preventDefault();
				btn.parent("li").siblings().children(".sub-menu").slideUp();
				btn.parent("li").siblings().children("a").children(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-left");
				btn.parent("li").siblings().removeClass("active");
				
				if(btn.parent("li").hasClass("active")) {
					menu.slideUp();
					btn.children(".fa-angle-down").first().removeClass("fa-angle-down").addClass("fa-angle-left");
					btn.parent("li").removeClass("active");
				}else{
					menu.slideDown();
					btn.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down");
					btn.parent("li").addClass("active");
				}
			});
			menu.find("li > a").each(function() {
				var pad = parseInt($(this).css("margin-left")) + 10;
				$(this).css({"margin-left": pad + "px"});
			});
		});
	};
	
	$(".sidebar .menu").tree();
}

/* GRID */
function initGrid() {
	/* COLLAPSE */
	$("[data-widget='collapse']").click(function() {
		var grid = $(this).parents(".grid").first();
		var grid_body = grid.find(".grid-body");
		if(!grid.hasClass("collapsed-grid")) {
			$(this).children(".fa-chevron-up").first().removeClass("fa-chevron-up").addClass("fa-chevron-down");
			grid.addClass("collapsed-grid");
			grid_body.slideUp(200);
		} else {
			$(this).children(".fa-chevron-down").first().removeClass("fa-chevron-down").addClass("fa-chevron-up");
			grid.removeClass("collapsed-grid");
			grid_body.slideDown(200);
		}
	});
	
	/* RELOAD GRID */
	$("[data-widget='reload']").click(function() {
		var grid = $(this).parents(".grid").first();
		blockUI(grid);
		window.setTimeout(function() {
			unblockUI(grid);
		}, 1000);
	});
	
	function blockUI(grid) {
		$(grid).block({
			message: '<div class="loading"></div>',
			css: {
				border: 'none',
				padding: '2px',
				backgroundColor: 'none'
			},
			overlayCSS: {
				backgroundColor: '#fff',
				opacity: 0.5,
				cursor: 'wait'
			}
		});
	}
	
	function unblockUI(grid) {
		$(grid).unblock();
	}
	
	/* REMOVE GRID */
	$("[data-widget='remove']").click(function() {
		var grid = $(this).parents(".grid").first();
		grid.fadeOut();
	});
}

$(function() {
	"use strict";
	
	/* POPOVER & TOOLTIP */
	$("[data-toggle='popover']").popover();
	$("[data-toggle='tooltip']").tooltip();
	$("[data-toggle='file-close']").click(function(){ $(this).parent('li').hide(); });
	
	initNews();
	initScrollTop();
	initSidebar();
	initGrid();	
});