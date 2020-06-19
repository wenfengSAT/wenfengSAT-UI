/*  ==========================================================================
    Table of Content for Draggables:

    === Function ===
	- runDraggable

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runDraggable
    ========================================================================== */
    function runDraggable(tab,type){

        $( ".ui-drag-container" ).sortable({
            items: '.ui-drag-item',
            connectWith: '.ui-drag-container',
            handle: '.ui-drag-handle',
            cancel: '.ui-drag-disabled',
            placeholder: 'ui-drag-placeholder',
            opacity: 0.8,
            revert: true,
            delay: 120,
            forcePlaceholderSize: true,
            forceHelperSize: true,

            update: function( event, ui ) {

            }
        });

    }

/*
    runGridstack
     ========================================================================== */
    function runGridstack(gridtack){

        var options = {
            cell_height: 80,
            vertical_margin: 10
        };
        $(gridtack).gridstack(options);

    }

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var gridtack 	= ".grid-stack";

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runDraggable();
    runGridstack(gridtack);

});