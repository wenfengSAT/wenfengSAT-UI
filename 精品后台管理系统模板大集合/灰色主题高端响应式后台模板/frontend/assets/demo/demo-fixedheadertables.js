$(document).ready( function () {
	//initialize datatable
	var oTable = $('#example').dataTable( {
		"bPaginate": false,
		"sDom" : "t" // just show table, no other controls
	});
	
	var offsetTop = 80;
	var oFH = new FixedHeader( oTable, {offsetTop: offsetTop} );
	

	//redraw fixedHeaders as necessary
	$(window).resize(function () {
		redrawFixedTable();
	});

	function redrawFixedTable () {
		oFH._fnUpdateClones(true);
		oFH._fnUpdatePositions();
	}

});