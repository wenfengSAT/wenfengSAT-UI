/*
Name: 			Tables / Advanced - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	1.4.1
*/

(function( $ ) {

	'use strict';

	var datatableInit = function() {
		var $table = $('#datatable-tabletools');

		$table.dataTable({
			sDom: "<'text-right mb-md'T>" + $.fn.dataTable.defaults.sDom,
			oTableTools: {
				sSwfPath: $table.data('swf-path'),
				aButtons: [
					{
						sExtends: 'pdf',
						sButtonText: 'PDF'
					},
					{
						sExtends: 'csv',
						sButtonText: 'CSV'
					},
					{
						sExtends: 'xls',
						sButtonText: 'Excel'
					},
					{
						sExtends: 'print',
						sButtonText: 'Print',
						sInfo: 'Please press CTR+P to print or ESC to quit'
					}
				]
			}
		});

	};

	$(function() {
		datatableInit();
	});

}).apply( this, [ jQuery ]);
