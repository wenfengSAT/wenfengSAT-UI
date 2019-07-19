$(document).ready(function() {

	"use strict";		

	//**** Message Dropdown ***//
	$('.message-list.dropdown > a').click(function(e) {
	$(".message.drop-list").stop(true, true).fadeIn("fast");
	$(".notification.drop-list:visible").stop(true, true).fadeOut("fast");
	$(".activity.drop-list:visible").stop(true, true).fadeOut("fast");
	e.stopPropagation();
	});

	$("#live-chat .chat-header").click( function(){
		$(".chat").slideToggle();
	});	
		
	$("body").click(function () {
	$(".message.drop-list:visible").stop(true, true).fadeOut("fast");
	});
	
	//**** Notification Dropdown ***//
	$('.notification-list.dropdown > a').click(function(e) {
	$(".notification.drop-list").stop(true, true).fadeIn("fast");
	$(".message.drop-list:visible").stop(true, true).fadeOut("fast");
	$(".activity.drop-list:visible").stop(true, true).fadeOut("fast");
	e.stopPropagation();
	});

	$("body").click(function () {
	$(".notification.drop-list:visible").stop(true, true).fadeOut("fast");
	});
	
	//**** Activity Dropdown ***//
	$('.activity-list.dropdown > a').click(function(e) {
	$(".activity.drop-list").stop(true, true).fadeIn("fast");
	$(".notification.drop-list:visible").stop(true, true).fadeOut("fast");
	$(".message.drop-list:visible").stop(true, true).fadeOut("fast");
	e.stopPropagation();
	});

	$("body").click(function () {
	$(".activity.drop-list:visible").stop(true, true).fadeOut("fast");
	});
	
	//**** Profile Dropdown ***//
	$('.profile.dropdown > a').click(function(e) {
	$(".profile.drop-list").stop(true, true).fadeIn("fast");
	e.stopPropagation();
	});

	$("body").click(function () {
	$(".profile.drop-list:visible").stop(true, true).fadeOut("fast");
	});
	
	//**** Menu Accordian ***//
	$(function() {
	$('#menu-toogle .sub-menu').hide();
	$('#menu-toogle h2:first').addClass('active').next().slideDown('fast');
	$('#menu-toogle h2').click(function() {
	if($(this).next().is(':hidden')) {
	$('#menu-toogle h2').removeClass('active').next().slideUp('fast');
	$(this).toggleClass('active').next().slideDown('fast');
	}
	});
	});
	
	//* Sidebar Toogle //
	$(".toggle-menu").click( function(){
	$(".toggle-menu").toggleClass('default');
	$(".sidebar").toggleClass('slide');
	$(".content-sec").toggleClass('slide');
	$('.sub-menu').fadeOut();
	$('.single-menu > h2').removeClass("active");
	$(".page-container").toggleClass('slide-menu');
	});
	
	//**** Slide Panel Toggle ***//
	$(".slide-panel-btn").click( function(){
	$(".slide-panel-btn").toggleClass('active');
	$(".slide-panel").toggleClass('active');
	});
	
	//**** Slide Panel Toggle ***//
	$(".star-email").click( function(){
	$(this).toggleClass('starred');
	});

	
	//**** Scroll Sidebar ****//
	$('#panel-scroll').enscroll({
	showOnHover: true,
	verticalTrackClass: 'track3',
	verticalHandleClass: 'handle3'
	});	
	
	//**** Scroll Sidebar ****//
	$('#activity-scroll').enscroll({
	showOnHover: true,
	verticalTrackClass: 'track3',
	verticalHandleClass: 'handle3'
	});	
	
	//**** Scroll Timeline ****//
	$('#timeline-scroll').enscroll({
	showOnHover: true,
	verticalTrackClass: 'track3',
	verticalHandleClass: 'handle3'
	});	
	
	//**** Chat Scroll ****//
	$('.chat-history ').enscroll({
	showOnHover: true,
	verticalTrackClass: 'track3',
	verticalHandleClass: 'handle3'
	});	
	
	//**** Scroll Timeline ****//
	$('.your-emails').enscroll({
	showOnHover: true,
	verticalTrackClass: 'track3',
	verticalHandleClass: 'handle3'
	});	
	
	//**** Scroll Timeline ****//
	$('#frnd-list').enscroll({
	showOnHover: true,
	verticalTrackClass: 'track3',
	verticalHandleClass: 'handle3'
	});	

	//**** Minimize Widget ****//	
	$(".hide-btn").click( function(){
		$(this).parent().parent().parent().parent().next(".widget").slideToggle();
	});
	
	//**** File Transfer Toggle ****//	
	$(".file-transfer-widget > h3").click( function(){
		$(".file-transfer-widget > h3").toggleClass('active');
		$(this).next(".file-transfer-widget .toggle").slideToggle();
	});
	
	//**** Close Widget Area ****//	
	$(".close-sec").click( function(){
		$(this).parent().parent().parent().parent().parent().parent().slideToggle();
	});

	//**** Bootstrap Tooltip ****//	
	$("body").tooltip({ selector: '[data-toggle=tooltip]' });

	$(function() {
	$('#accordian1 .content').hide();
	$('#accordian1 h2:first').addClass('active').next().slideDown('slow');
	$('#accordian1 h2').click(function() {
	if($(this).next().is(':hidden')) {
	$('#accordian1 h2').removeClass('active').next().slideUp('slow');
	$(this).toggleClass('active').next().slideDown('slow');
	}
	});
	});
	
	$(function() {
	$('#accordian2 .content').hide();
	$('#accordian2 h2:first').addClass('active').next().slideDown('slow');
	$('#accordian2 h2').click(function() {
	if($(this).next().is(':hidden')) {
	$('#accordian2 h2').removeClass('active').next().slideUp('slow');
	$(this).toggleClass('active').next().slideDown('slow');
	}
	});
	});
	
	$(function() {
	$('#accordian3 .content').hide();
	$('#accordian3 h2:first').addClass('active').next().slideDown('slow');
	$('#accordian3 h2').click(function() {
	if($(this).next().is(':hidden')) {
	$('#accordian3 h2').removeClass('active').next().slideUp('slow');
	$(this).toggleClass('active').next().slideDown('slow');
	}
	});
	});

	$(window).resize(function() {
	
	if ($(window).width() < 1200) {
	$('.sub-menu').fadeOut();
	$('.single-menu > h2').removeClass("active");
	}
	else {
	$('.sub-menu').removeClass('slide');
	$('.page-container').removeClass('slide-menu');
	}   
	});	
	
	$(".responsive-header > span").click(function(){
	$(this).next('ul').slideToggle();
	$(".responsive-header > ul > li > ul").slideUp();
	$(".responsive-header > ul > li > ul > li > ul").slideUp();
	$(".responsive-header > ul > li").removeClass('opened');
	$(".responsive-header > ul > li > ul > li").removeClass('opened');
	});	

	$('.responsive-header ul li a').next('ul').parent().addClass('no-link')
	$('.no-link > a').click(function(){
	return false;
	});	


	$(".responsive-header > ul > li > a").click(function(){
	$(".responsive-header > ul > li > ul").slideUp();
	$(".responsive-header > ul > li").removeClass('opened');
	$(this).next('ul').slideDown();
	$(this).next('ul').parent().toggleClass('opened');
	});	
	$(".responsive-header > ul > li > ul > li a").click(function(){
	$(".responsive-header > ul > li > ul > li > ul").slideUp();
	$(".responsive-header > ul > li > ul > li").removeClass('opened');
	$(this).next('ul').slideDown();
	$(this).next('ul').parent().toggleClass('opened');
	});	



});

	
