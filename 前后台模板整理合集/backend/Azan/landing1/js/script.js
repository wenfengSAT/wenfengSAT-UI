$(document).ready(function() {

	"use strict";
	
	/*** FIXED Menu APPEARS ON SCROLL DOWN ***/	
	$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 100) {
	$("header").addClass("sticky");
	}
	else{
	$("header").removeClass("sticky");
	$("header").addClass("");
	}
	});	
	
	/*** Responsive Dropdown  ***/
	$(function() {
	$(".nav-open").click( function(){
	$("nav > ul").slideToggle();
	$("header").addClass("responsive");
	});
	});

	/*** Responsive Dropdown  ***/
	$(function() {
	$("nav > ul > li.open").click( function(){
	$("nav > ul > li > ul").slideToggle();
	});
	});		
	
	$(function() {
	/*** Map Open & Close  ***/
	$(".map-sec > span").click( function(){
	$(".show-map").slideToggle();
	});
	});		
	
	/*** Smooth Scroll  ***/
	$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	if (target.length) {
	$('html,body').animate({
	scrollTop: target.offset().top
	}, 1000);
	}
	}
	});
	});
	
	var lastId,
	topMenu = $("nav"),
	topMenuHeight = topMenu.outerHeight()+15,
	// All list items
	menuItems = topMenu.find("a"),
	scrollItems = menuItems.map(function(){
	var item = $($(this).attr("href"));
	if (item.length) { return item; }
	});
	$(window).scroll(function(){
	// Get container scroll position
	var fromTop = $(this).scrollTop()+topMenuHeight;

	// Get id of current scroll item
	var cur = scrollItems.map(function(){
	if ($(this).offset().top < fromTop)
	return this;
	});
	// Get the id of the current element
	cur = cur[cur.length-1];
	var id = cur && cur.length ? cur[0].id : "";

	if (lastId !== id) {
	lastId = id;
	// Set/remove active class
	menuItems
	.parent().removeClass("active")
	.end().filter("[href=#"+id+"]").parent().addClass("active");
	}                   
	});		
	
	$(".boxed-style").click( function(){
	$(".theme-layout").addClass("boxed");
	$("body").addClass('bg1');
	});

	$(".full-width").click( function(){
	$(".theme-layout").removeClass("boxed");
	$("body").removeClass('bg1');
	$("body").removeClass('bg2');
	$("body").removeClass('bg3');
	$("body").removeClass('bg4');
	$("body").removeClass('bg5');
	});

	$(".bg1").click( function(){
	$("body").addClass('bg1');
	$("body").removeClass('bg2');
	$("body").removeClass('bg3');
	$("body").removeClass('bg4');
	$("body").removeClass('bg5');
	});

	$(".bg2").click( function(){
	$("body").removeClass('bg1');
	$("body").addClass('bg2');
	$("body").removeClass('bg3');
	$("body").removeClass('bg4');
	$("body").removeClass('bg5');
	});

	$(".bg3").click( function(){
	$("body").removeClass('bg1');
	$("body").removeClass('bg2');
	$("body").addClass('bg3');
	$("body").removeClass('bg4');
	$("body").removeClass('bg5');
	});

	$(".bg4").click( function(){
	$("body").removeClass('bg1');
	$("body").removeClass('bg2');
	$("body").removeClass('bg3');
	$("body").addClass('bg4');
	$("body").removeClass('bg5');
	});

	$(".bg5").click( function(){
	$("body").removeClass('bg1');
	$("body").removeClass('bg2');
	$("body").removeClass('bg3');
	$("body").removeClass('bg4');
	$("body").addClass('bg5');
	});	


});