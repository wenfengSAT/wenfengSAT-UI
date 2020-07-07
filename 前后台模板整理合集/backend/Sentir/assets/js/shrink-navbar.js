$(document).ready(function(){
	$(function(){
	 var shrinkHeader = 100;
	  $(window).scroll(function() {
		var scroll = getCurrentScroll();
		  if ( scroll >= shrinkHeader ) {
			   $('body').addClass('no-padding-top');
			   $('.top-navbar').addClass('hidden-to-top');
			   $('.sidebar-left').addClass('full-top');
			   $('.sidebar-right').addClass('full-top');
			   $('.sidebar-right-heading').addClass('hidden-to-top');
			}
			else {
			   $('body').removeClass('no-padding-top');
			   $('.top-navbar').removeClass('hidden-to-top');
			   $('.sidebar-left').removeClass('full-top');
			   $('.sidebar-right').removeClass('full-top');
			   $('.sidebar-right-heading').removeClass('hidden-to-top');
			}
	  });
		function getCurrentScroll() {
			return window.pageYOffset || document.documentElement.scrollTop;
		}
	});
})