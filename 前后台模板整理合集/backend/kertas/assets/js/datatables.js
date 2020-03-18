/*
 * Template name: Kertas - Responsive Bootstrap 3 Admin Template
 * Version: 1.0.0
 * Author: VergoLabs
 */

/* DATATABLES */
function initDatatables() {
	/* BASIC DATATABLES */
	$('#dataTables1').dataTable();
	
	/* ROW DETAILS */
	var nCloneTh = document.createElement('th');
	var nCloneTd = document.createElement('td');
	nCloneTd.innerHTML = '<i class="fa fa-angle-down link"></i>';
	nCloneTd.className = "center";

	$('#dataTables2 thead tr').each(function(){
		this.insertBefore(nCloneTh, this.childNodes[0]);
	});

	$('#dataTables2 tbody tr').each(function(){
		this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
	});

	function fnFormatDetails(oTable, nTr) {
		var aData = oTable.fnGetData(nTr);
		var sOut = '<table cellpadding="5" cellspacing="0" border="0" class="detail-row">';
			sOut += '<tr><td>Name</td><td>:</td><td>'+aData[1]+'</td></tr>';
			sOut += '<tr><td>Link to source</td><td>:</td><td>Could provide a link here</td></tr>';
			sOut += '<tr><td>Extra info</td><td>:</td><td>And any further details here (images etc)</td></tr>';
			sOut += '</table>';

		return sOut;
	}

	var oTable = $('#dataTables2').dataTable({
		"aoColumnDefs": [{
			"bSortable": false,
			"aTargets": [0]
		}],
		"aaSorting": [[1, 'asc']]
	});

	$('#dataTables2 tbody').on('click', 'i', function(){
		var nTr = $(this).parents('tr')[0];
		if(oTable.fnIsOpen(nTr)){
			$(this).removeClass("fa-angle-up").addClass("fa-angle-down");
			oTable.fnClose(nTr);
		}else{
			$(this).removeClass("fa-angle-down").addClass("fa-angle-up");
			oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
		}
	});
}

$(function() {
	"use strict";
	
	initDatatables();
});