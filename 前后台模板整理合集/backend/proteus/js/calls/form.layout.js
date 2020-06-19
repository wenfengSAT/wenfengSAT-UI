/*  ==========================================================================
    Table of Content for Form LAyout:

    === Function ===
    - runCheckradios

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runCheckradios
    ========================================================================== */
function runCheckradios(input){

    $(input).checkradios({

        checkbox: {

           iconClass:'fa fa-check'

        },

        radio: {

           iconClass:'fa fa-circle'

        }

    });

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var checkradios = '.checkradios';


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runCheckradios(checkradios);

});