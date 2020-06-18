/*
Name: 			UI Elements / Loading Overlay - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	1.4.1
*/

(function( $ ) {

	'use strict';

	$(function() {
		var $el = $('#LoadingOverlayApi');

		// to show the overlay on previously initialized element
		// just trigger the following event
		$('#ApiShowOverlay').click(function() {
			$el.trigger('loading-overlay:show');
		});

		// to hide the overlay on previously initialized element
		// just trigger the following event
		$('#ApiHideOverlay').click(function() {
			$el.trigger('loading-overlay:hide');
		});

		// You can also initialize by yourself, like:
		//$('.el').loadingOverlay({
		// ... your options
		//});

		// available options via data-overlay-options or passing object via javascript initialization
		//{
		//	"startShowing": true | false, // defaults to false
		//	"hideOnWindowLoad": true | false, // defaults to false
		//	"css": {} // object container css stuff, defaults to match backgroundColor and border-radius
		//}

		// note: the loader color is black or white based on color contrast,
		// this is done automatically if you does not supply the html,
		// otherwise you need to the class dark or light to the loader element
	});

}).apply( this, [ jQuery ]);