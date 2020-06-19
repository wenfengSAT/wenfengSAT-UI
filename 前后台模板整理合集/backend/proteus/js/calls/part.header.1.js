/*  ==========================================================================
    Table of Content for Header 1:

    === Function ===
	- runTooltipsterHeader

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
     runTooltipster
     ========================================================================== */
function runTooltipsterHeader(tip){

    $(tip).tooltipster({
        animation: 'grow',
        theme: 'tooltipster-cool'
    });
}

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var nftTip = ".nft-tip",
        msgTip = ".msg-tip";


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runTooltipsterHeader(nftTip);
    runTooltipsterHeader(msgTip);

});