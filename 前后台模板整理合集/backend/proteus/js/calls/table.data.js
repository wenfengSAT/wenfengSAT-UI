/*  ==========================================================================
    Table of Content for Data Tables:

    === Function ===
	- runDataTable
	- easyResponsiveTab

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runDataTable
    ========================================================================== */
function runDataTable(dataTableId,type,event){

    switch(type){

        case 'default':

            $(dataTableId).DataTable();

        break;

        case 'vscroll':
            var table_2 = $(dataTableId).DataTable( {
                "scrollY":        "200px",
                "scrollCollapse": true,
                "paging":         false
            } );

            $('#vscrollTable').on('click',function(){
                table_2.draw();
            });
        break;

        case 'autofill':
            var table = $(dataTableId).DataTable();
            new $.fn.dataTable.AutoFill( table, {
                mode: 'both'
            } );
        break;

        case 'colreorder':
            $(dataTableId).DataTable( {
                dom: 'Rlfrtip'
            } );
        break;

        case 'responsive':

            var table_5 = $(dataTableId).DataTable();
            $('#responsiveTable').on('click',function(){
                table_5.destroy();
                table_5 = $(dataTableId).DataTable();
            });
        break;
    }


}

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

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var dataTableId_1 = "#dataTableId",
        dataTableId_2 = "#dataTableIdVerticalScroll",
        dataTableId_3 = "#dataTableIdAutoFill",
        dataTableId_4 = "#dataTableIdColReorder",
        dataTableId_5 = "#dataTableIdResponsive",
        tabs          = "#tables";

    // === Checkers ===

    // === Setters ===

    // === Executions ===
    easyResponsiveTab(tabs,'default');

    runDataTable(dataTableId_1,'default');
    runDataTable(dataTableId_2,'vscroll');
    runDataTable(dataTableId_3,'autofill');
    runDataTable(dataTableId_4,'colreorder');
    runDataTable(dataTableId_5,'responsive');


});