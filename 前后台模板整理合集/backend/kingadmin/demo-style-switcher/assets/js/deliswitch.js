/*	
*	############################################################################
*	
*	Delicate Theme Switcher Script
*	---------------------------------------------------------------------
*	@version	1.1
*	@author		The Develovers
*	@link		http://www.thedevelovers.com
*	@copyright	Copyright 2013 The Develovers
*	---------------------------------------------------------------------
*	
*	Manage layout and texture changes
*
*	############################################################################
*/


jQuery(document).ready(function($) {

	// switcher toggle 	
	if( $('body').hasClass('home')){

		$('.del-style-switcher').css('right', '0').delay(1000).animate({
			right: '-=250'
		}, 300);
	
	}else{
	
		$('.del-style-switcher').css('right', '-250px');
	}
		
	$('.del-switcher-toggle').clickToggle(
		function(){
		
			$('.del-style-switcher').animate({
				right: '+=250'
				
			}, 300);
		}, 
		function(){
		
			$('.del-style-switcher').animate({
				right: '-=250'
				
			}, 300);
		}
	);

	// check if skin has already applied before
	var skin = localStorage.getItem('skin');
	var skinLogo = localStorage.getItem('skinLogo');
	var skinLogoDefault = 'assets/img/kingadmin-logo-white.png';

	if(skin != null) {
		$('head').append('<link rel="stylesheet" href="' + skin + '" type="text/css" />');

		// set the selected button style		
		if( skin.toLowerCase().indexOf('fulldark') >= 0 ) {
			$('.switch-skin-full.fulldark').addClass('selected');
		}else if( skin.toLowerCase().indexOf('fullbright') >= 0 ) {
			$('.switch-skin-full.fullbright').addClass('selected');
		}
	}

	if(skinLogo != null) {
		$('.logo img').attr('src', skinLogo);
	}

	// switch items
	$('.switch-skin, .switch-skin-full').click( function(e) {

		e.preventDefault();

		resetStyle();
		$('head').append('<link rel="stylesheet" href="' + $(this).attr('data-skin') + '" type="text/css" />');

		if($(this).hasClass('fullbright')) {
			skinLogo = 'assets/img/kingadmin-logo.png';
		}else {
			skinLogo = skinLogoDefault;
		}

		$('.logo img').attr('src', skinLogo);

		localStorage.setItem('skin', $(this).attr('data-skin'));
		localStorage.setItem('skinLogo', skinLogo);
	});

	$('.switch-skin-full').click( function() {
		$('.switch-skin-full').removeClass('selected');
		$(this).addClass('selected');
	});

	// fixed top nav checkbox
	$('.del-style-switcher form').change( function() {
		if( $('#fixed-top-nav').is(':checked') ) {
			$('.top-bar').addClass('navbar-fixed-top');
		} else {
			$('.top-bar').removeClass('navbar-fixed-top');
		}
	});

	// reset stlye
	$('.del-reset-style').click( function() {
		resetStyle();
	});

	function resetStyle() {

		// remove skins and reset logo to default
		$('head link[rel="stylesheet"]').each( function() {

			if( $(this).attr('href').toLowerCase().indexOf("skins") >= 0 )
				$(this).remove();
		});

		$('.logo img').attr('src', 'assets/img/kingadmin-logo-white.png');

		localStorage.removeItem('skin');
		localStorage.setItem('skinLogo', skinLogoDefault);

		// remove fixed top navigation
		$('.top-bar').removeClass('navbar-fixed-top');
	}
	
	// toggle function
	$.fn.clickToggle = function( f1, f2 ) {
		return this.each( function() {
			var clicked = false;
			$(this).bind('click', function() {
				if(clicked) {
					clicked = false;
					return f2.apply(this, arguments);
				}

				clicked = true;
				return f1.apply(this, arguments);
			});
		});

	}	
});
