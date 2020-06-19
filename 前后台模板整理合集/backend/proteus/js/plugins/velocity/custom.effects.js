/*  ==========================================================================
    Table of Content for Velocity Custom Effects:

    === Function ===
	- runCalloutAsonPulse
    - runTransitionAsonFlipX
    - runTransitionAsonSlide

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runCalloutAsonPulse
    ========================================================================== */
function runCalloutAsonPulse(){

    $.Velocity.RegisterEffect("callout.ason.pulse", {
        defaultDuration: 900,
        calls: [
            [ { scaleX: 1.1 }, 0.50 ],
            [ { scaleX: 1 }, 0.50 ]
        ]
    });

}

/*
    runTransitionAsonFlipX
    ========================================================================== */
function runTransitionAsonFlipX(){

    $.Velocity
        .RegisterEffect("transition.ason.flipXIn", {
            defaultDuration: 700,
            calls: [
                [ { opacity: 1, rotateY: [ 0, -55 ] } ]
            ]
        })
        .RegisterEffect("transition.ason.flipXOut", {
            defaultDuration: 700,
            calls: [
                [ { opacity: 0, rotateY: 55 } ]
            ],
            reset: { rotateY: 0 }
        });
}

/*
    runTransitionAsonTin
    ========================================================================== */
function runTransitionAsonSlide(){

    $.Velocity
        .RegisterEffect("transition.ason.slideRightIn", {
            defaultDuration: 800,
                calls: [
                [ { translateX: [ 0, 40 ], translateZ: 0 } ]
            ]
        })
        .RegisterEffect("transition.ason.slideLeftIn", {
            defaultDuration: 600,
                calls: [
                [ { opacity: [ 1, 0.70 ], translateX: [ 0, -40 ], translateZ: 0 } ]
            ]
        });

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runCalloutAsonPulse();
    runTransitionAsonFlipX();
    runTransitionAsonSlide();

});