//------------- blank.js -------------//
$(document).ready(function() {

	//get object with colros from plugin and store it.
	var objColors = $('body').data('appStart').getColors();
	var colours = {
		white: objColors.white,
		dark: objColors.dark,
		red : objColors.red,
		blue: objColors.blue,
		green : objColors.green,
		yellow: objColors.yellow,
		brown: objColors.brown,
		orange : objColors.orange,
		purple : objColors.purple,
		pink : objColors.pink,
		lime : objColors.lime,
		magenta: objColors.magenta,
		teal: objColors.teal,
		textcolor: '#5a5e63',
		gray: objColors.gray
	}

	//------------- Extend table tools -------------//
	$.extend( true, $.fn.DataTable.TableTools.classes, {
		"container": "DTTT btn-group",
		"buttons": {
			"normal": "btn btn-default",
			"disabled": "disabled"
		},
		"collection": {
			"container": "DTTT_dropdown dropdown-menu",
			"buttons": {
				"normal": "",
				"disabled": "disabled"
			}
		},
		"print": {
			"info": "DTTT_print_info modal"
		}
	} );

	// Have the collection use a bootstrap compatible dropdown
	$.extend( true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
		"collection": {
			"container": "ul",
			"button": "li",
			"liner": "a"
		}
	});

	//------------- Datatables -------------//
	$('#datatable').dataTable({
		"sPaginationType": "bs_full", //"bs_normal", "bs_two_button", "bs_four_button", "bs_full"
		"fnPreDrawCallback": function( oSettings ) {
	    	$('.dataTables_filter input').addClass('form-control input-large').attr('placeholder', 'Search');
			$('.dataTables_length select').addClass('form-control input-small');
	    },
	    "oLanguage": {
		    "sSearch": "",
		    "sLengthMenu": "<span>_MENU_ entries</span>"
		},
		"bJQueryUI": false,
		"bAutoWidth": false,
		"sDom": "<'row'<'col-lg-6 col-md-6 col-sm-12 text-left'l><'col-lg-6 col-md-6 col-sm-12 text-right'f>r>t<'row-'<'col-lg-4 col-md-4 col-sm-12'i><'col-lg-8 col-md-8 col-sm-12'p>>",
	});

	$('#datatable1').dataTable({
		"sPaginationType": "bs_full", //"bs_normal", "bs_two_button", "bs_four_button", "bs_full"
		"fnPreDrawCallback": function( oSettings ) {
	    	$('.dataTables_filter input').addClass('form-control input-large').attr('placeholder', 'Search');
			$('.dataTables_length select').addClass('form-control input-small');
	    },
	    "oLanguage": {
		    "sSearch": "",
		    "sLengthMenu": "<span>_MENU_ entries</span>"
		},
		"bJQueryUI": false,
		"bAutoWidth": false,
		"sDom": "<'row'<'col-lg-3 col-md-3 col-sm-12 text-left'l><'col-lg-6 col-md-6 col-sm-12 text-center'T><'col-lg-3 col-md-3 col-sm-12 text-right'f>r>t<'row'<'col-lg-4 col-md-4 col-sm-12'i><'col-lg-8 col-md-8 col-sm-12'p>>",
		"oTableTools": {
			"sSwfPath": "assets/plugins/tables/datatables/tabletools/swf/copy_csv_xls_pdf.swf",
			"aButtons": [
				{
					"sExtends":    "print",
					"sButtonText": '<i class="im-print2"></i> Print',
					"aButtons":    [ "print" ]
				},
				{
					"sExtends":    "xls",
					"sButtonText": '<i class="im-file-excel"></i> XLS',
					"aButtons":    [ "xls" ]
				},
				{
					"sExtends":    "pdf",
					"sButtonText": '<i class="im-file-pdf"></i> PDF',
					"aButtons":    [ "pdf" ]
				},
				{
					"sExtends":    "csv",
					"sButtonText": '<i class="im-file-xml"></i> CSV',
					"aButtons":    [ "csv" ]
				},
				{
					"sExtends":    "copy",
					"sButtonText": '<i class="im-copy"></i> Copy',
					"aButtons":    [ "copy" ]
				}
			]
		}
	});
 	
});