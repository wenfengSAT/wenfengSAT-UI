///////////////////////
// Tables Datatables //
///////////////////////

"use strict";

$(document).ready(function(){

	/* DataTables */
    /**
     * DEMO CODE
     * These lines of code below are merely demo purposes. Build upon them and create your own
     * Check documentation for usage
     */
	// DataTable 1
	$('#datatable-1').DataTable();

	// DataTable 2
	$('#datatable-2').dataTable( {
        "dom": 'T<"clear">lfrtip',
        "tableTools": {
            "sSwfPath": "assets/js/optional/datatables/tabletools/swf/copy_csv_xls_pdf.swf"
        },
        paging: false
    });
});