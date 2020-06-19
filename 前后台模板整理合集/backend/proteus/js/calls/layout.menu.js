/*  ==========================================================================
    Table of Content for Menu:

    === Function ===
    - runMainMenu


    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runMainMenu
    ========================================================================== */
function runMainMenu(c3Chart){

    $(mainMenu).asonwidget({ type: 'menu', animInit: 'transition.slideLeftBigIn',  animOpen: 'transition.expandIn', animOpenStagger: 100, closeSameLevel: false, navScroll:false });

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var mainMenu   = '#mainMenu';


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runMainMenu(mainMenu)

});