$(function() {

	"use strict";

	// Fix height
	var winHeight = $(window).height();
	var docHeight = $(document).height();
	if(winHeight > docHeight) {
		docHeight = winHeight;
	}
	$("#sidebar").css('min-height', docHeight);
	$("#content").css('min-height', docHeight);

	// Show sidebar submenu
	$(".has-submenu").click(function(e) {
		//$(this).toggleClass("active");
		$('.sidebar-group li').removeClass('active');
		$(this).closest('li').addClass('active');
	});

	// Collapse sidebar
	$("#make-compact").click(function(e) {
		e.preventDefault();
		$("body").toggleClass("compact-sidebar");
	});

	// Toggle menu on mobile
	$("#toggle-menu").click(function(e) {
		e.preventDefault();
		$("body").removeClass("compact-sidebar");
		$("body").toggleClass("show-menu");
	});

	$("#hide-menu").click(function(e) {
		e.preventDefault();
		$("body").removeClass("compact-sidebar");
		$("body").removeClass("show-menu");
	});

	// Compact sidebar on mobiles fix
	$(window).resize(function(){	
		if ($("#make-compact").css("display") == "none" ){
			$("body").removeClass("compact-sidebar");
		}
	});

	// Custom scrollbar
	$('.scrollbox').enscroll({
		verticalTrackClass: 'scrollbar-track',
		verticalHandleClass: 'scrollbar-handle'
	});

	// Footable plugin
	$('.footable').footable();

	// Custom checkbox
	$('input.icheck').iCheck({
		checkboxClass: 'icheckbox_minimal',
		radioClass: 'iradio_minimal',
		increaseArea: '20%'
	});

})