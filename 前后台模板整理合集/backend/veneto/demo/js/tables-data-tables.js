jQuery(function ($) {
    'use strict';
    $('#table-basic').dataTable();
    $('#table-basic_wrapper select.form-control').select2({minimumResultsForSearch: -1});
});
// Hidden row details example
jQuery(function () {
    'use strict';
    function format(data) {
        return '<p class="lead">Details</p>' +
            'Rendering engine: ' + data[1] + ' ' + data[4] + '<br>' +
            'Browser: ' + data[2] + '<br>' +
            '&hellip;';
    }

    var $rowDetailsTable = $('#table-hidden-row-details');
    // Insert a 'dt-details-control' column to the table
    $rowDetailsTable.find('thead tr, tfoot tr').each(function () {
        this.insertBefore(document.createElement('th'), this.childNodes[0]);
    });
    $rowDetailsTable.find('tbody tr').each(function () {
        $(this).prepend('<td class="dt-details-control"><i class="fa fa-fw dt-details-toggle"></i></td>');
    });

    var rowDetailsTable = $rowDetailsTable.dataTable({
        'processing': true,
        'aoColumnDefs': [
            { 'bSortable': false, 'aTargets': [ 0 ] }
        ],
        'order': [
            [1, 'asc']
        ]
    });
    $rowDetailsTable.find('tbody').on('click', 'tr td:first-child', function () {
        var tr = $(this).parents('tr');
        var row = $rowDetailsTable.api().row(tr);
        if (row.child.isShown()) {
            tr.removeClass('details');
            row.child.hide();

        } else {
            tr.addClass('details');
            row.child(format(row.data())).show();

        }
    });

    $('#table-hidden-row-details_wrapper select.form-control').select2({minimumResultsForSearch: -1});
});
