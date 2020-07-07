$(document).ready(function(){

	$(function(){
	 var shrinkHeader = 100;
	  $(window).scroll(function() {
		var scroll = getCurrentScroll();
		  if ( scroll >= shrinkHeader ) {
			   $('body').addClass('no-padding-top');
			   $('.top-navbar').addClass('hidden-to-top');
			   $('.top-main-navigation').addClass('full-top');
			   $('.sidebar-right').addClass('full-top');
			   $('.sidebar-right-heading').addClass('hidden-to-top');
			}
			else {
			   $('body').removeClass('no-padding-top');
			   $('.top-navbar').removeClass('hidden-to-top');
			   $('.top-main-navigation').removeClass('full-top');
			   $('.sidebar-right').removeClass('full-top');
			   $('.sidebar-right-heading').removeClass('hidden-to-top');
			}
	  });
		function getCurrentScroll() {
			return window.pageYOffset || document.documentElement.scrollTop;
		}
	});
	
	/** BUTTON TOGGLE FUNCTION **/
	$(".btn-collapse-sidebar-right").click(function(){
		"use strict";
		$(".top-main-navigation").toggleClass("toggle-left");
	});
	/** END BUTTON TOGGLE FUNCTION **/
	
})