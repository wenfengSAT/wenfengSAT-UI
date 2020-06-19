/*  ==========================================================================
    Table of Content for Basic Widgets:

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


/*
    bootstrapTab
    ========================================================================== */
function bootstrapTab(){

    $("ul.nav-tabs a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

}


/*
    runUiSlider
    ========================================================================== */
function runUiSlider(uislider){

    $(uislider).slider();

}

/*
    runSparklineBar
    ========================================================================== */
function runSparklineBar(spark){

    $(spark).sparkline(
        [5,6,7,2,0,-4,-2,4],
        {
            type: 'bar',
            height: '',
            barWidth: 5,
            barColor: '#0aaf9a',
            negBarColor: '#f05049'
        }
    );

}

/*
    runListScrollbar
    ========================================================================== */
function runListScrollbar(listScroll){

    $(listScroll).perfectScrollbar();
}

/*
    widgetSearch
    ========================================================================== */
function widgetSearch(){

    new UISearch( document.getElementById( 'search-exp' ) );
}

/*
    runTooltipSetup
    ========================================================================== */
function runTooltipSetup(){

    $('[data-toggle="tooltip"]').tooltip({
        position: {
            my: "center bottom-10",
            at: "center top"
          }
    });
}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var jqueryUiSlider_1  = "#jqueryUiSlider_1",
        sparkBar          = '.sparkBar',
        horizEasyRespTab  = "#widgets";

    // === Checkers ===

    // === Setters ===

    // === Executions ===
    easyResponsiveTab(horizEasyRespTab,'default');
    runUiSlider(jqueryUiSlider_1);
    runSparklineBar(sparkBar);
    bootstrapTab();
    widgetSearch();
    runTooltipSetup();

});