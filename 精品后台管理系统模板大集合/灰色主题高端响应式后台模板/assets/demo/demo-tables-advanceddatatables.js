$(document).ready(function() {
	var oTable = $('#tabletools').dataTable({
        "language": {
            "lengthMenu": "_MENU_"
        }
    });

	var tableTools = new $.fn.dataTable.TableTools( oTable, {
        "buttons": [
            "copy",
            "csv",
            "xls",
            "pdf",
            { "type": "print", "buttonText": "Print me!" }
        ],
        "sSwfPath" : "assets/plugins/datatables/TableTools/swf/copy_csv_xls_pdf.swf"
    });



    //DOM Manipulation to move datatable elements integrate to panel
    $('#panel-tabletools .panel-ctrls').append($('.dataTables_filter').addClass("pull-right"));
    $('#panel-tabletools .panel-ctrls .dataTables_filter').find("label").addClass("panel-ctrls-center");

    $('#panel-tabletools .panel-ctrls').append("<i class='separator pull-right mt10'></i>");

    $('#panel-tabletools .panel-ctrls').append($('.dataTables_length').addClass("pull-right"));
    $('#panel-tabletools .panel-ctrls .dataTables_length label').addClass("mb0");

    $('#panel-tabletools .panel-ctrls').append("<i class='separator pull-right mt10'></i>");
	$( tableTools.fnContainer()).appendTo('#panel-tabletools .panel-ctrls').addClass("pull-right mt10");

    $('#panel-tabletools .panel-footer').append($(".dataTable+.row"));
    $('.dataTables_paginate>ul.pagination').addClass("pull-right");


    var oTable2 = $('#colreorder').dataTable({
        "language": {
            "lengthMenu": "_MENU_"
        }
    });
    new $.fn.dataTable.ColReorder( oTable2 );


    //DOM Manipulation to move datatable elements integrate to panel
    $('#panel-reorder .panel-ctrls').append($('#panel-reorder .dataTables_filter').addClass("pull-right"));
    $('#panel-reorder .panel-ctrls .dataTables_filter').find("label").addClass("panel-ctrls-center");

    $('#panel-reorder .panel-ctrls').append("<i class='separator'></i>");
    $('#panel-reorder .panel-ctrls').append($('#panel-reorder .dataTables_length').addClass("pull-left"));
    $('#panel-reorder .panel-ctrls .dataTables_length label').addClass("mb0");

    $('#panel-reorder .panel-footer').append($("#panel-reorder .dataTable+.row"));
    $('.dataTables_paginate>ul.pagination').addClass("pull-right");




    var oTable3 = $('#keytable').dataTable({
        "language": {
            "lengthMenu": "_MENU_"
        }
    });
    $.fn.dataTable.KeyTable(oTable3);



$('.dataTables_filter input').attr('placeholder','Search...');


$('#panel-spreadsheet .panel-ctrls').append($('#panel-spreadsheet .dataTables_filter').addClass("pull-right"));
$('#panel-spreadsheet .panel-ctrls .dataTables_filter').find("label").addClass("panel-ctrls-center");

$('#panel-spreadsheet .panel-ctrls').append("<i class='separator'></i>");
$('#panel-spreadsheet .panel-ctrls').append($('#panel-spreadsheet .dataTables_length').addClass("pull-left"));
$('#panel-spreadsheet .panel-ctrls .dataTables_length label').addClass("mb0");

$('#panel-spreadsheet .panel-footer').append($("#panel-spreadsheet .dataTable+.row"));
$('.dataTables_paginate>ul.pagination').addClass("pull-right");

});