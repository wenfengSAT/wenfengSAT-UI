/*  ==========================================================================
    Table of Content for Foo Tables:

    === Function ===
	- runFooTable

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runFooTable
    ========================================================================== */
function runFooTable(fooTableId){

    $(fooTableId).footable({ bookmarkable: { enabled: true }}).bind({
        'footable_filtering': function (e) {
            var selected = $('#status').find(':selected').text();
            if (selected && selected.length > 0) {
                e.filter += (e.filter && e.filter.length > 0) ? ' ' + selected : selected;
                e.clear = !e.filter;
            }
        },
        'footable_filtered': function() {
            var count = $(fooTableId+' tbody tr:not(.footable-filtered)').length;
            $('.row-count').html(count + ' rows found');
        }
    });

    $('.clear-filter').click(function (e) {
        e.preventDefault();
        $('#status').val('');
        $(fooTableId).trigger('footable_clear_filter');
        $('.row-count').html('');
    });

    $('#status').change(function (e) {
        e.preventDefault();
        $(fooTableId).data('footable-filter').filter( $('#filter').val() );
    });

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var fooTableId = "#fooTableId";

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runFooTable(fooTableId);


});