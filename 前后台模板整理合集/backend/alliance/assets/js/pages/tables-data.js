'use strict';
//  Author: ThemeREX.com
//
//  .html scripts
//

(function($) {

    $(document).ready(function() {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();

        // Init DataTables
        $('#datatable').dataTable({
            "sDom": 't<"dt-panelfooter clearfix"ip>',
            "oTableTools": {
                "sSwfPath": "assets/js/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
            }
        });

        $('#datatable2').dataTable({
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [-1]
            }],
            "oLanguage": {
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            },
            "iDisplayLength": 5,
            "aLengthMenu": [
                [5, 10, 25, 50, -1],
                [5, 10, 25, 50, "All"]
            ],
            "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
            "oTableTools": {
                "sSwfPath": "assets/js/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
            }
        });

        $('#datatable3').dataTable({
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [-1]
            }],
            "oLanguage": {
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            },
            "iDisplayLength": 5,
            "aLengthMenu": [
                [5, 10, 25, 50, -1],
                [5, 10, 25, 50, "All"]
            ],
            "sDom": '<"dt-panelmenu clearfix"Tfr>t<"dt-panelfooter clearfix"ip>',
            "oTableTools": {
                "sSwfPath": "assets/js/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
            }
        });

        $('#datatable4').dataTable({
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [-1]
            }],
            "oLanguage": {
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            },
            "iDisplayLength": 5,
            "aLengthMenu": [
                [5, 10, 25, 50, -1],
                [5, 10, 25, 50, "All"]
            ],
            "sDom": 'T<"panel-menu dt-panelmenu"lfr><"clearfix">tip',

            "oTableTools": {
                "sSwfPath": "assets/js/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
            }
        });

        // Multi-Column Filtering
        $('#datatable5 thead th').each(function() {
            var title = $('#datatable5 tfoot th').eq($(this).index()).text();
            $(this).html('<input type="text" class="form-control" placeholder="Search ' + title + '" />');
        });

        // DataTable
        var table5 = $('#datatable5').DataTable({
            "sDom": 't<"dt-panelfooter clearfix"ip>',
            "ordering": false
        });

        // Apply the search
        table5.columns().eq(0).each(function(colIdx) {
            $('input', table5.column(colIdx).header()).on('keyup change', function() {
                table5
                    .column(colIdx)
                    .search(this.value)
                    .draw();
            });
        });

        // ABC FILTERING
        var table6 = $('#datatable6').DataTable({
            "sDom": 't<"dt-panelfooter clearfix"ip>',
            "ordering": false
        });

        var alphabet = $('<div class="dt-abc-filter"/>').append('<span class="abc-label">Search: </span> ');
        var columnData = table6.column(0).data();
        var bins = bin(columnData);

        $('<span class="active"/>')
            .data('letter', '')
            .data('match-count', columnData.length)
            .html('None')
            .appendTo(alphabet);

        for (var i = 0; i < 26; i++) {
            var letter = String.fromCharCode(65 + i);

            $('<span/>')
                .data('letter', letter)
                .data('match-count', bins[letter] || 0)
                .addClass(!bins[letter] ? 'empty' : '')
                .html(letter)
                .appendTo(alphabet);
        }

        $('#datatable6').parents('.panel').find('.panel-menu').addClass('dark').html(alphabet);

        alphabet.on('click', 'span', function() {
            alphabet.find('.active').removeClass('active');
            $(this).addClass('active');

            _alphabetSearch = $(this).data('letter');
            table6.draw();
        });

        var info = $('<div class="alphabetInfo"></div>')
            .appendTo(alphabet);

        var _alphabetSearch = '';

        $.fn.dataTable.ext.search.push(function(settings, searchData) {
            if (!_alphabetSearch) {
                return true;
            }
            if (searchData[0].charAt(0) === _alphabetSearch) {
                return true;
            }
            return false;
        });

        function bin(data) {
            var letter, bins = {};
            for (var i = 0, ien = data.length; i < ien; i++) {
                letter = data[i].charAt(0).toUpperCase();

                if (bins[letter]) {
                    bins[letter]++;
                } else {
                    bins[letter] = 1;
                }
            }
            return bins;
        }

        // ROW GROUPING
        var table7 = $('#datatable7').DataTable({
            "columnDefs": [{
                "visible": false,
                "targets": 2
            }],
            "order": [
                [2, 'asc']
            ],
            "sDom": 't<"dt-panelfooter clearfix"ip>',
            "displayLength": 25,
            "drawCallback": function(settings) {
                var api = this.api();
                var rows = api.rows({
                    page: 'current'
                }).nodes();
                var last = null;

                api.column(2, {
                    page: 'current'
                }).data().each(function(group, i) {
                    if (last !== group) {
                        $(rows).eq(i).before(
                            '<tr class="row-label ' + group.replace(/ /g, '').toLowerCase() + '"><td colspan="5">' + group + '</td></tr>'
                        );
                        last = group;
                    }
                });
            }
        });

        // Order by the grouping
        $('#datatable7 tbody').on('click', 'tr.row-label', function() {
            var currentOrder = table7.order()[0];
            if (currentOrder[0] === 2 && currentOrder[1] === 'asc') {
                table7.order([2, 'desc']).draw();
            } else {
                table7.order([2, 'asc']).draw();
            }
        });

        $('#datatable8').DataTable({
            "sDom": 'Rt<"dt-panelfooter clearfix"ip>'
        });


        // COLLAPSIBLE ROWS
        function format ( d ) {
            // `d` is the original data object for the row
            return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
                '<tr>'+
                '<td class="fw600 pr10">Full name:</td>'+
                '<td>'+d.name+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td class="fw600 pr10">Extension:</td>'+
                '<td>'+d.extn+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td class="fw600 pr10">Extra info:</td>'+
                '<td>And any further details here (images etc)...</td>'+
                '</tr>'+
                '</table>';
        }

        // MISC DATATABLE HELPER FUNCTIONS

        // Add Placeholder text to datatables filter bar
        $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    });

})(jQuery);
