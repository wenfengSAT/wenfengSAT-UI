$(document).ready(function(){

	/** BEGIN TOOLTIP FUNCTION **/
	$('.tooltips').tooltip({
	  selector: "[data-toggle=tooltip]",
	  container: "body"
	})
	/** END TOOLTIP FUNCTION **/



	/** BEGIN TOGGLE NAV ( < 1024px ) **/
	$("#btn-toggle-nav").click(function(){
		"use strict";
		$(".menus").toggleClass("toggle-nav");
	});
	/** END TOGGLE NAV ( < 1024px ) **/



	/** BEGIN NAV RIGHT ICON CLICK FUNCTION **/
	$("#nav-icon-search").click(function(){
		"use strict";
		$("#search-sub").toggleClass("visible");
	});
	$("#nav-icon-phone").click(function(){
		"use strict";
		$("#phone-sub").toggleClass("visible");
	});
	/** END NAV RIGHT ICON CLICK FUNCTION **/



	/** BEGIN BUTTON ICON CLICK FUNCTION ( < 1024px ) **/
	$("#btn-icon-search").click(function(){
		"use strict";
		$("#search-sub").toggleClass("visible");
	});
	$("#btn-icon-phone").click(function(){
		"use strict";
		$("#phone-sub").toggleClass("visible");
	});
	/** END BUTTON ICON CLICK FUNCTION ( < 1024px ) **/



	/** BEGIN BUTTON ICON CLICK CLOSE FUNCTION **/
	$("#close-phone-nav").click(function(){
		"use strict";
		$("#search-sub").removeClass("visible");
		$("#phone-sub").removeClass("visible");
	});
	$("#close-search-nav").click(function(){
		"use strict";
		$("#phone-sub").removeClass("visible");
		$("#search-sub").removeClass("visible");
	});
	/** END BUTTON ICON CLICK CLOSE FUNCTION **/



	/** BEGIN BACK TO TOP **/
	$(function () {
		$("#back-top").hide();
	});
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		
		$('#back-top').click(function () {
		"use strict";
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	/** END BACK TO TOP **/



	/** BEGIN WORK FILTER **/
	if ($('#work-mixitup').length > 0){
		$('#work-mixitup').mixitup({
			effects: ['fade','scale','grayscale']
		});
	}
	/** END WORK FILTER **/



	/** BEGIN OWL CAROUSEL CONTENT HEADER **/
	if ($('#content-header-slide').length > 0){
		$("#content-header-slide").owlCarousel({
			autoPlay: 4000,
			singleItem:true,
			lazyLoad : true,
			autoHeight : false,
			transitionStyle: "fade",
			pagination: false
		});
	}
	/** END OWL CAROUSEL CONTENT HEADER **/



	/** BEGIN OWL CAROUSEL CLIENT LOGO **/
	if ($('#owl-client-logo').length > 0){
		$("#owl-client-logo").owlCarousel({
			autoPlay: 6000,
			items : 5,
			lazyLoad : true,
			autoHeight : true
		});
	}
	/** END OWL CAROUSEL CLIENT LOGO **/



	/** BEGIN OWL CAROUSEL CLIENT TESTIMONIAL **/
	if ($('#owl-testimonial').length > 0){
		$("#owl-testimonial").owlCarousel({
			autoPlay: false,
			singleItem:true,
			lazyLoad : true,
			autoHeight : true
		});
	}
	if ($('#owl-testimonial-2').length > 0){
		$("#owl-testimonial-2").owlCarousel({
			autoPlay: false,
			items : 2,
			lazyLoad : true,
			autoHeight : true
		});
	}
	/** END OWL CAROUSEL CLIENT TESTIMONIAL **/



	/** BEGIN OWL CAROUSEL WORK DETAIL **/
	if ($('#owl-work-detail').length > 0){
		$("#owl-work-detail").owlCarousel({
			autoPlay: 3000,
			singleItem:true,
			lazyLoad : true,
			autoHeight : true
		});
	}
	/** END OWL CAROUSEL WORK DETAIL **/

	
});