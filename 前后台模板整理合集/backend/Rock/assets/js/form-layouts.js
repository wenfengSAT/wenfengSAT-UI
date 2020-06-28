$(function () {
    /* Begin jQuery Select2 */
    var placeholder = "Select a State";
    $(".select2, .select2-multiple").select2({ placeholder: placeholder } );

    function format(state) {
        if (!state.id) return state.text; // optgroup
        return "<img class='flag' src='global/images/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
    }
    $(".select2-country").select2({
        placeholder: "Select a Country",
        allowClear: true,
        formatResult: format,
        formatSelection: format,
        escapeMarkup: function (m) {
            return m;
        }
    });

    $(".select2-tags-support").select2({
        tags: ["orange", "green", "blue", "yellow", "pink"]
    });
    /* End jQuery Select2 */

});

