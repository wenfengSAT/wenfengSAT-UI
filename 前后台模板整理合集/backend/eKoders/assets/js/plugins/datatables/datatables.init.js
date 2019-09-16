'use strict';

$(document).ready(function () {
    var responsiveHelper = undefined;
    var breakpointDefinition = {
        tablet: 1024,
        phone : 480
    };
    var tableElement = $('#SampleDT');

    tableElement.dataTable({
        "autoWidth"        : false,
        preDrawCallback: function () {
            // Initialize the responsive datatables helper once.
            if (!responsiveHelper) {
                responsiveHelper = new ResponsiveDatatablesHelper(tableElement, breakpointDefinition);
            }
        },
        rowCallback    : function (nRow) {
            responsiveHelper.createExpandIcon(nRow);
        },
        drawCallback   : function (oSettings) {
            responsiveHelper.respond();
        }
    });
});



// Products list example 
$(document).ready(function () {
    var responsiveHelper = undefined;
    var breakpointDefinition = {
        tablet: 1024,
        phone : 480
    };
    var tableElement = $('#products');

    tableElement.dataTable({
        //"paginationType": 'bootstrap',
        "language"      : {
            'lengthMenu': "_MENU_ products per page",
			//"zeroRecords": "Nothing found - sorry",
			//"info": "Showing page _PAGE_ of _PAGES_",
            //"infoEmpty": "No records available",
            //"infoFiltered": "(filtered from _MAX_ total records)"
        },
        // disable sorting on the checkbox column
        "columnDefs"   : [
            {
                'targets' : [ 0 ],             // Column number which needs to be modified
                'sortable': false,             // Column is not sortable
				
				// Custom render function - add checkbox
                'render'  : function (data, type) {
                    return '<label><input type="checkbox" class="tc"><span class="labels"></span></label>';
			},
			 'class'   : 'col-small center'    // Optional - class to be applied to this table cell
			},
			
			{
                'targets': [ 8 ],              // Column number which needs to be modified
				'sortable': false,			   // Column is not sortable
                'class'  : 'col-medium center' // Optional - class to be applied to this table cell
            }
        ],
		"order": [[ 2, "desc" ]],			  // Default ordering (sorting)
        "autoWidth"     : false,
		//"ajax"           : './arrays.txt',
		
		// for more option please see http://datatables.net/examples/index
		
        preDrawCallback: function () {
            // Initialize the responsive datatables helper once.
            if (!responsiveHelper) {
                responsiveHelper = new ResponsiveDatatablesHelper(tableElement, breakpointDefinition);
            }
        },
        rowCallback    : function (nRow) {
            responsiveHelper.createExpandIcon(nRow);
        },
        drawCallback   : function (oSettings) {
            responsiveHelper.respond();
        }
    });
});