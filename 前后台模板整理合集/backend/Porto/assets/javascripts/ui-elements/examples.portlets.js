/*
Name: 			UI Elements / Portlets - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	1.4.1
*/

(function( $ ) {

	'use strict';

	/*
	Refresh page
	*/
	$('#portletRefresh').on('click', function(ev) {
		ev.preventDefault();
		window.location.reload();
	});

	/*
	Restore to default
	*/
	$('#portletReset').on('click', function(ev) {
		ev.preventDefault();
		store.remove('__portletOrder');
		store.remove('__portletState');
		window.location.reload();
	});



}).apply( this, [ jQuery ]);