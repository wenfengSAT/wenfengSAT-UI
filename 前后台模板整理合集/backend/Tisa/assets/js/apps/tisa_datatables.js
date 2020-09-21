	
	$(function() {
		// datatables
		tisa_datatables.basic_example();
		tisa_datatables.tableTools_example();
		tisa_datatables.scroller_example();
		tisa_datatables.scrollX_example();
	})
	
	// datatables
	tisa_datatables = {
		basic_example: function() {
			if($('#dt_basic').length) {
				$('#dt_basic').dataTable();
			}
		},
		tableTools_example: function() {
			if($('#dt_tableTools').length) {
				$('#dt_tableTools').dataTable({
					"sDom":
						'<"well well-sm"<"row"<"col-md-4 clearfix"l><"col-md-8 clearfix"fT>r>>'+
						't'+
						'<"row"<"col-md-5 clearfix"i><"col-md-7 clearfix"p>>',
					tableTools: {
						"sSwfPath": "assets/lib/DataTables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
					}
				});
			}
		},
		scroller_example: function() {
			if($('#dt_scroller').length) {
				var data = [];
				for ( var i=0 ; i<20000 ; i++ ) {
					data.push( [ i, i, i, i, i ] );
				}
				 
				var oTable = $('#dt_scroller').dataTable( {
					data: data,
					deferRender: true,
					"aaSorting": [],
					"sDom":
						'<"well well-sm"<"row"<"col-md-12"f>r>>'+
						't'+
						'<"row"<"col-md-12"iS>>',
					scrollY:        222,
					scrollCollapse: true
				});
			}
		},
		scrollX_example: function() {
			if($('#dt_scroll_x').length) {
				$('#dt_scroll_x').dataTable({
					"scrollX": true
				});
			}
		}
	}