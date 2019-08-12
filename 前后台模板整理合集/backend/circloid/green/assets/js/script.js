/////////////////////////////////////////
// Call All Required Circloid Function //
/////////////////////////////////////////

"use strict";

$(document).ready(function(){

	/* Call Function: circloidRFMisc() */
	// Miscellaneous - Always load first
	circloidRFMisc();

	/* Call Function: circloidRFResponsiveness() */
	// Load immediately after "circloidRFMisc Function" for proper responsive behaviour
	circloidRFResponsiveness();

	/* Call Function: circloidMenuNav() */
	// Let Menu
	circloidMenuNav({
		container: ".mainnav",
		eventtype: "click"
	});
	
	/* Call Function: circloidMenuNav() */
	// Horizontal
	circloidMenuNav({
		container: ".mainnav-horizontal",
		eventtype: "click",
		menuposition: "top"
	});

	/* Call Function: circloidLanguageMenu() */
	circloidLanguageMenu();

	/* Call Function: circloidSearchBar() */
	circloidSearchBar();

	/* Call Function: circloidNotificationAlert() */
	circloidNotificationAlert({
		eventtype: "click"
	});

	/* Call Function: circloidProfileMenu() */
	circloidProfileMenu({
		eventtype: "click"
	});

	/* Call Function: circloidBlocks() */
	circloidBlocks({
		colorcollapsed: "red"
	});

	/* Call Function: circloidRevealBugFix() */
	/* IMPORTANT: Always place this at the bottom of Circloid main functions if you wish to use animated menus */
	circloidRevealBugFix();

	/* Call Any Required User-Defined Functions & Plugins - Start */

	/* Call Any Required User-Defined Functions & Plugins - End */


});