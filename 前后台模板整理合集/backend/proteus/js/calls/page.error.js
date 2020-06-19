/*  ==========================================================================
    Table of Content for Error Pages:

    === Function ===
	- runParticleground

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runParticleground
    ========================================================================== */
function runParticleground(particleBg, particleColors){

    var dotColor  = $(particleColors).css('background-color');
    var lineColor = $(particleColors).css('color');

    $(particleBg).particleground({
        dotColor: dotColor,
        lineColor: lineColor
    });
}

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var errorBg    = "#error-bg";
    var errorColor = "#error-particle";

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runParticleground(errorBg, errorColor);

});