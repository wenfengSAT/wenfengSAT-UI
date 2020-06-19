/*  ==========================================================================
    Table of Content for Search Result Page:

    === Function ===
	- easyResponsiveTab
	- runCheckradios
	- runTooltips

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

/*
    runTooltips
    ========================================================================== */
    function runTooltips(tip){

        $(tip).tooltip();

    }

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    var activeView = 'list';

    // Variables
    var horizEasyRespTab = "#search",
        checkradios = '.checkradios',
        tooltip = ".toolt";

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    easyResponsiveTab(horizEasyRespTab,'default');
    runCheckradios(checkradios);
    runTooltips(tooltip);

    // ----------------------------------------------
    $( ".btn-list-view" ).on( "click", function(e) {
        e.preventDefault();
        if(activeView == 'grid'){

            $(".grid-view")
              .velocity("transition.slideDownOut", 300);

            $(".list-view")
              .delay(400)
              .velocity("transition.slideUpIn", 400);

            activeView = 'list';
        }
    });

    $( ".btn-grid-view" ).on( "click", function(e) {
        e.preventDefault();
        if(activeView == 'list'){

            $(".list-view")
              .velocity("transition.slideDownOut", 300);

            $(".grid-view")
              .delay(400)
              .velocity("transition.slideUpIn", 400);

            activeView = 'grid';
        }
    });

});