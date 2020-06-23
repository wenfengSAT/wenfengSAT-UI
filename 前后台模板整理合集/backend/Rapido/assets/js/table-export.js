var TableExport = function() {
	"use strict";
	//function to initiate HTML Table Export
	var runTableExportTools = function() {
		$(".export-pdf").on("click", function(e) {
					e.preventDefault();
					var exportTable = $(this).data("table");
					var ignoreColumn = $(this).data("ignorecolumn");
					$(exportTable).tableExport({
						type: 'pdf',
						escape: 'false',
						ignoreColumn: '['+ignoreColumn+']'
					});
				});
				$(".export-png").on("click", function(e) {
					e.preventDefault();
					e.preventDefault();
					var exportTable = $(this).data("table");
					var ignoreColumn = $(this).data("ignorecolumn");
					$(exportTable).tableExport({
						type: 'png',
						escape: 'false',
						ignoreColumn: '['+ignoreColumn+']'
					});
				});
				$(".export-excel").on("click", function(e) {
					e.preventDefault();
					var exportTable = $(this).data("table");
					var ignoreColumn = $(this).data("ignorecolumn");
					$(exportTable).tableExport({
						type: 'excel',
						escape: 'false',
						ignoreColumn: '['+ignoreColumn+']'
					});
				});
				$(".export-doc").on("click", function(e) {
					e.preventDefault();
					var exportTable = $(this).data("table");
					var ignoreColumn = $(this).data("ignorecolumn");
					$(exportTable).tableExport({
						type: 'doc',
						escape: 'false',
						ignoreColumn: '['+ignoreColumn+']'
					});
				});
				$(".export-powerpoint").on("click", function(e) {
					e.preventDefault();
					var exportTable = $(this).data("table");
					var ignoreColumn = $(this).data("ignorecolumn");
					$(exportTable).tableExport({
						type: 'powerpoint',
						escape: 'false',
						ignoreColumn: '['+ignoreColumn+']'
					});
				});
				$(".export-csv").on("click", function(e) {
					e.preventDefault();
					var exportTable = $(this).data("table");
					var ignoreColumn = $(this).data("ignorecolumn");
					$(exportTable).tableExport({
						type: 'csv',
						escape: 'false',
						ignoreColumn: '['+ignoreColumn+']'
					});
				});
				$(".export-txt").on("click", function(e) {
					e.preventDefault();
					var exportTable = $(this).data("table");
					var ignoreColumn = $(this).data("ignorecolumn");
					$(exportTable).tableExport({
						type: 'txt',
						escape: 'false',
						ignoreColumn: '['+ignoreColumn+']'
					});
				});
				$(".export-xml").on("click", function(e) {
					e.preventDefault();
					var exportTable = $(this).data("table");
					var ignoreColumn = $(this).data("ignorecolumn");
					$(exportTable).tableExport({
						type: 'xml',
						escape: 'false',
						ignoreColumn: '['+ignoreColumn+']'
					});
				});
				$(".export-sql").on("click", function(e) {
					e.preventDefault();
					var exportTable = $(this).data("table");
					var ignoreColumn = $(this).data("ignorecolumn");
					$(exportTable).tableExport({
						type: 'sql',
						escape: 'false',
						ignoreColumn: '['+ignoreColumn+']'
					});
				});
				$(".export-json").on("click", function(e) {
					e.preventDefault();
					var exportTable = $(this).data("table");
					var ignoreColumn = $(this).data("ignorecolumn");
					$(exportTable).tableExport({
						type: 'json',
						escape: 'false',
						ignoreColumn: '['+ignoreColumn+']'
					});
				});
	};
	
	//function to initiate DataTable
	//DataTable is a highly flexible tool, based upon the foundations of progressive enhancement,
	//which will add advanced interaction controls to any HTML table
	//For more information, please visit https://datatables.net/
	var runDataTable_example2 = function() {
		var newRow = false;
		var actualEditingRow = null;

		function restoreRow(oTable, nRow) {
			var aData = oTable.fnGetData(nRow);
			var jqTds = $('>td', nRow);

			for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
				oTable.fnUpdate(aData[i], nRow, i, false);
			}

			oTable.fnDraw();
		}

		function editRow(oTable, nRow) {
			var aData = oTable.fnGetData(nRow);
			var jqTds = $('>td', nRow);
			jqTds[0].innerHTML = '<input type="text" class="form-control" value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';

			jqTds[3].innerHTML = '<a class="save-row" href="">Save</a>';
			jqTds[4].innerHTML = '<a class="cancel-row" href="">Cancel</a>';

		}

		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate('<a class="edit-row" href="">Edit</a>', nRow, 3, false);
			oTable.fnUpdate('<a class="delete-row" href="">Delete</a>', nRow, 4, false);
			oTable.fnDraw();
			newRow = false;
			actualEditingRow = null;
		}

		$('body').on('click', '.add-row', function(e) {
			e.preventDefault();
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['', '', '', '', '']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
		});
		$('#sample-table-2').on('click', '.cancel-row', function(e) {

			e.preventDefault();
			if (newRow) {
				newRow = false;
				actualEditingRow = null;
				var nRow = $(this).parents('tr')[0];
				oTable.fnDeleteRow(nRow);

			} else {
				restoreRow(oTable, actualEditingRow);
				actualEditingRow = null;
			}
		});
		$('#sample-table-2').on('click', '.delete-row', function(e) {
			e.preventDefault();
			if (newRow && actualEditingRow) {
				oTable.fnDeleteRow(actualEditingRow);
				newRow = false;

			}
			var nRow = $(this).parents('tr')[0];
			bootbox.confirm("Are you sure to delete this row?", function(result) {
				if (result) {
					$.blockUI({
					message : '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
					});
					$.mockjax({
						url : '/tabledata/delete/webservice',
						dataType : 'json',
						responseTime : 1000,
						responseText : {
							say : 'ok'
						}
					});
					$.ajax({
						url : '/tabledata/delete/webservice',
						dataType : 'json',
						success : function(json) {
							$.unblockUI();
							if (json.say == "ok") {
							oTable.fnDeleteRow(nRow);
							}
						}
					});				
					
				}
			});
			

			
		});
		$('#sample-table-2').on('click', '.save-row', function(e) {
			e.preventDefault();

			var nRow = $(this).parents('tr')[0];
			$.blockUI({
					message : '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
					});
					$.mockjax({
						url : '/tabledata/add/webservice',
						dataType : 'json',
						responseTime : 1000,
						responseText : {
							say : 'ok'
						}
					});
					$.ajax({
						url : '/tabledata/add/webservice',
						dataType : 'json',
						success : function(json) {
							$.unblockUI();
							if (json.say == "ok") {
								saveRow(oTable, nRow);
							}
						}
					});	
		});
		$('#sample-table-2').on('click', '.edit-row', function(e) {
			e.preventDefault();
			if (actualEditingRow) {
				if (newRow) {
					oTable.fnDeleteRow(actualEditingRow);
					newRow = false;
				} else {
					restoreRow(oTable, actualEditingRow);

				}
			}
			var nRow = $(this).parents('tr')[0];
			editRow(oTable, nRow);
			actualEditingRow = nRow;

		});
		var oTable = $('#sample-table-2').dataTable({
			"aoColumnDefs" : [{
				"aTargets" : [0]
			}],
			"oLanguage" : {
				"sLengthMenu" : "Show _MENU_ Rows",
				"sSearch" : "",
				"oPaginate" : {
					"sPrevious" : "",
					"sNext" : ""
				}
			},
			"aaSorting" : [[1, 'asc']],
			"aLengthMenu" : [[5, 10, 15, 20, -1], [5, 10, 15, 20, "All"] // change per page values here
			],
			// set the initial value
			"iDisplayLength" : 10,
		});
		$('#sample-table-2_wrapper .dataTables_filter input').addClass("form-control input-sm").attr("placeholder", "Search");
		// modify table search input
		$('#sample-table-2_wrapper .dataTables_length select').addClass("m-wrap small");
		// modify table per page dropdown
		$('#sample-table-2_wrapper .dataTables_length select').select2();
		// initialzie select2 dropdown
		$('#sample-table-2_column_toggler input[type="checkbox"]').change(function() {
			/* Get the DataTables object again - this is not a recreation, just a get of the object */
			var iCol = parseInt($(this).attr("data-column"));
			var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
			oTable.fnSetColumnVis(iCol, ( bVis ? false : true));
		});
	};
	return {
		//main function to initiate template pages
		init : function() {
			runTableExportTools();
			runDataTable_example2();
		}
	};
}();
