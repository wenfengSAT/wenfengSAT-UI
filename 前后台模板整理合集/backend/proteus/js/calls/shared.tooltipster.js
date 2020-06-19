/*  ==========================================================================
    Table of Content for Shared Tooltipsters:

    === Function ===
	- runSharedTooltipster

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runSharedTooltipster
    ========================================================================== */
    function runSharedTooltipster(tip,pos){

        $(tip).tooltipster({
            animation: 'grow',
            theme: 'tooltipster-cool',
            position: pos
        });
    }


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var ttTop    = ".tt-top",
        ttRight  = ".tt-right",
        ttBottom = ".tt-bottom",
        ttLeft   = ".tt-left";

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runSharedTooltipster(ttTop,'top');
    runSharedTooltipster(ttLeft,'left');
    runSharedTooltipster(ttRight,'right');
    runSharedTooltipster(ttBottom,'bottom');

});