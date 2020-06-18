/*
Name: 			Pages / Locked Screen - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	1.4.1
*/

(function($) {

	'use strict';

	var $document,
		idleTime;

	$document = $(document);

	$(function() {
		$.idleTimer( 10000 ); // ms

		$document.on( 'idle.idleTimer', function() {
			// if you don't want the modal
			// you can make a redirect here
			LockScreen.show();
		});
	});

}).apply( this, [ jQuery ]);