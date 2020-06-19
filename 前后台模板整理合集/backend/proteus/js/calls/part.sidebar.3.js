/*  ==========================================================================
    Table of Content for Sidebar 3:

    === Function ===
	- runTooltips

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runCheckBoSidebar2
    ========================================================================== */
    function runCheckBoSidebar2(input){

        $(input).checkBo();
    }


/*
    runSidebarSwitchery
    ========================================================================== */
    function runSidebarSwitchery(checkbox, color){

        var switchery = new Switchery(checkbox, { color: color, size : 'small' });

    }


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var checkbo = '.side-checkbo',
        switcheryDefaults = Array.prototype.slice.call(document.querySelectorAll('.switcheryDefault')),
        switcherySuccess  = document.querySelector('.switcherySuccess'),
        switcheryDark     = document.querySelector('.switcheryDark'),
        switcheryWarning  = document.querySelector('.switcheryWarning'),
        switcheryInfo_1   = document.querySelector('.switcheryInfo-1'),
        switcheryInfo_2   = document.querySelector('.switcheryInfo-2'),
        switcheryDanger   = document.querySelector('.switcheryDanger');

    var defaultColor = $('.switchery-default').css('color'),
        successColor = $('.switchery-success').css('color'),
        darkColor    = $('.switchery-dark').css('color'),
        warningColor = $('.switchery-warning').css('color'),
        infoColor    = $('.switchery-info').css('color'),
        dangerColor  = $('.switchery-danger').css('color');


    // === Checkers ===

    // === Setters ===

    // === Executions ===
    switcheryDefaults.forEach(function(selector) {
        runSidebarSwitchery(selector, defaultColor);
    });

    runSidebarSwitchery(switcherySuccess, successColor);
    runSidebarSwitchery(switcheryDark,    darkColor);
    runSidebarSwitchery(switcheryWarning, warningColor);

    runSidebarSwitchery(switcheryInfo_1,    infoColor);
    runSidebarSwitchery(switcheryInfo_2,    infoColor);
    runSidebarSwitchery(switcheryDanger,    dangerColor);


});