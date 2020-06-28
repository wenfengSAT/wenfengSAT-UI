$(function () {
    /* Begin jQuery Select2 */
    var placeholder = "Select a State";
    $(".select2, .select2-multiple").select2({ placeholder: placeholder } );
    $("#select2-disabled").select2("enable", false);
    $( "button[data-select2-open]" ).click( function() {
        $( "#" + $( this ).data( "select2-open" ) ).select2( "open" );
    });

    $('.select2-disabled-checkbox-multiple').on('ifChecked ifUnchecked', function(event) {
        if (event.type == 'ifChecked') {
            $(this).closest('.input-group').find('select').select2('enable', false);
        } else {
            $(this).closest('.input-group').find('select').select2('enable', true);
        }
    });

    function format(state) {
        if (!state.id) return state.text; // optgroup
        return "<img class='flag' src='global/images/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
    }
    $("#select2-country").select2({
        placeholder: "Select a Country",
        allowClear: true,
        formatResult: format,
        formatSelection: format,
        escapeMarkup: function (m) {
            return m;
        }
    });

    $("#select2-loading-data").select2({
        minimumInputLength: 1,
        query: function (query) {
            var data = {results: []}, i, j, s;
            for (i = 1; i < 5; i++) {
                s = "";
                for (j = 0; j < i; j++) {s = s + query.term;}
                data.results.push({id: query.term + i, text: s});
            }
            query.callback(data);
        }
    });

    $("#select2-tags-support").select2({
        tags: ["orange", "green", "blue", "yellow", "pink"]
    });
    /* End jQuery Select2 */

    /* Begin jQuery Multi Select */
    $('#multi-select-default, #multi-select-disabled').multiSelect();
    $('#multi-select-keep-order').multiSelect({ keepOrder: true });
    $('#multi-select-optgroup').multiSelect({ selectableOptgroup: true });
    $('#multi-select-searchable').multiSelect({
        selectableHeader: "<input type='text' class='search-input form-control mbs' autocomplete='off' placeholder='try \"7\"'>",
        selectionHeader: "<input type='text' class='search-input form-control mbs' autocomplete='off' placeholder='try \"5\"'>",
        afterInit: function(ms){
            var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                $selectionSearch = that.$selectionUl.prev(),
                selectableSearchString = '#'+that.$container.attr('id')+' .ms-elem-selectable:not(.ms-selected)',
                selectionSearchString = '#'+that.$container.attr('id')+' .ms-elem-selection.ms-selected';

            that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                .on('keydown', function(e){
                    if (e.which === 40){
                        that.$selectableUl.focus();
                        return false;
                    }
                });

            that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                .on('keydown', function(e){
                    if (e.which == 40){
                        that.$selectionUl.focus();
                        return false;
                    }
                });
        },
        afterSelect: function(){
            this.qs1.cache();
            this.qs2.cache();
        },
        afterDeselect: function(){
            this.qs1.cache();
            this.qs2.cache();
        }
    });

    /* End jQuery Multi Select */

});

