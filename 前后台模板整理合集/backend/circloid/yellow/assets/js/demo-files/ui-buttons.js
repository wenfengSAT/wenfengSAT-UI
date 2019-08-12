////////////////
// UI Buttons //
////////////////

"use strict";

$(document).ready(function(){
	/**
	 * DEMO CODE
	 * These lines of code below are merely demo purposes. Build upon them and create your own
	 * Check documentation for usage
	 */
	$("#loading-state").click(function() {
		var $btn = $(this);
		$btn.button('loading');

		// Simulating a timeout
		setTimeout(function () {
			$btn.button('reset');
		}, 1000);
	});
});