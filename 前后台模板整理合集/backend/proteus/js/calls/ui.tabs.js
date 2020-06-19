/*  ==========================================================================
    Table of Content for Tabs:

    === Function ===
	- easyResponsiveTab
    - responsiveTabs
    - tabslet

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

/*
    responsiveTabs
    ========================================================================== */
function responsiveTabs(tab){

    $(tab).responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        disabled: [3,4],
        activate: function(e, tab) {
            // Callback function if tab is switched
        }
    });

}

/*
    tabslet
    ========================================================================== */
function tabslet(tab){

    $(tab).tabslet({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });

}

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

	   	// Variables
		var horizEasyRespTab 	= "#horizEasyRespTab";
		var vertEasyRespTab 	= "#vertEasyRespTab";
        var horizRespTab        = "#horizontalTab";
        var horizTabslet        = ".horizTabslet";
        var vertTabslet        	= ".vertTabslet";

		// === Checkers ===

		// === Setters ===

		// === Executions ===

		easyResponsiveTab(horizEasyRespTab,'default');
		easyResponsiveTab(vertEasyRespTab,'vertical');

        responsiveTabs(horizRespTab);

        tabslet(horizTabslet);
        tabslet(vertTabslet);

});