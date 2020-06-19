/*  ==========================================================================
    Table of Content for Buttons:

    === Function ===
	- easyResponsiveTab

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    easyResponsiveTab
    ========================================================================== */
function easyResponsiveTab(tab,type){

	$(tab).easyResponsiveTabs({
        type: type, //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true,   // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function(event) {
             // Callback function if tab is switched
        }
    });

}

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

	   	// Variables
		var horizEasyRespTab 	= "#buttons";

		// === Checkers ===

		// === Setters ===

		// === Executions ===

		easyResponsiveTab(horizEasyRespTab,'default');

});