/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Testimonials Slider


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menu = $('.menu');
	var menuActive = false;
	var hamb = $('.hamburger');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initHomeSlider();
	initTestSlider();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		hamb.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		hamb.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				animateOut: 'slideOutDown',
   				animateIn: 'fadeIn',
				autoplay:true,
				loop:true,
				mouseDrag:false,
				smartSpeed:1200,
				dotsContainer:'home_slider_custom_dots'
			});

			/* Custom dots events */
			if($('.home_slider_custom_dot').length)
			{
				$('.home_slider_custom_dot').on('click', function()
				{
					$('.home_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			homeSlider.on('changed.owl.carousel', function(event)
			{
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});
		}
	}

	/* 

	5. Testimonials Slider

	*/

	function initTestSlider()
	{
		if($('.testimonials_slider').length)
		{
			var testSlider = $('.testimonials_slider');
			testSlider.owlCarousel(
			{
				items:1,
				animateOut: 'slideOutDown',
   				animateIn: 'fadeIn',
				loop:true,
				autoplay:true,
				mouseDrag:false,
				smartSpeed:1200,
				dotsContainer:'test_slider_custom_dots'
			});

			/* Custom dots events */
			if($('.test_slider_custom_dot').length)
			{
				$('.test_slider_custom_dot').on('click', function()
				{
					$('.test_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					testSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			testSlider.on('changed.owl.carousel', function(event)
			{
				$('.test_slider_custom_dot').removeClass('active');
				$('.test_slider_custom_dots li').eq(event.page.index).addClass('active');
			});
		}
	}

});