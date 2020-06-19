/*  ==========================================================================
    Table of Content for Breadcrumb:

    === Function ===
	- runBreadCrumb


    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runBreadCrumb
    ========================================================================== */
function runBreadCrumb(breadcrumb){

  jQuery(breadcrumb).jBreadCrumb();

}



/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var breadCrumb1 = "#breadCrumb1";
    var breadCrumb2 = "#breadCrumb2";


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runBreadCrumb(breadCrumb1);
    runBreadCrumb(breadCrumb2);

});