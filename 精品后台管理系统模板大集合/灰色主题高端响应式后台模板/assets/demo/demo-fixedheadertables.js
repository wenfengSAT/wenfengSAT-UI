$(document).ready( function () {
	//initialize datatable
	var oTable = $('#example').dataTable( {
		"bPaginate": false,
		"sDom" : "t" // just show table, no other controls
	});
	//initialize FixedHeader
	// get header height if fixed
	var offsetTop = 0;
	if ($('.navbar-fixed-top').length>0)
		offsetTop = $('.navbar-fixed-top').eq(0).innerHeight();
	var oFH = new FixedHeader( oTable, {offsetTop: offsetTop} );
	

	//redraw fixedHeaders as necessary
	$(window).resize(function () {
		redrawFixedTable();
	});

	function redrawFixedTable () {
		oFH._fnUpdateClones(true);
		oFH._fnUpdatePositions();
	}

	$( "#rightmenu-trigger, #leftmenu-trigger" ).click(function() {
		setTimeout( function () {
			redrawFixedTable();
			setTimeout( function () {
				$('body').scroll()
			}, 500);
		}, 50)
	});

});