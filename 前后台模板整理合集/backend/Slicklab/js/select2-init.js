/**
 * Created by mosaddek on 3/9/15.
 */

// Select2

function format(state) {
    if (!state.id) return state.text; // optgroup
    return "<img class='flag' src='img/flags/" + state.id.toLowerCase() + ".png'/>" + state.text;
}
//        if ($.fn.select2) {
var placeholder = "Select a State";
$('.select2, .select2-multiple').select2({
    placeholder: placeholder
});
$("#e4").select2({
    formatResult: format,
    formatSelection: format,
    escapeMarkup: function(m) {
        return m;
    }
});
$('.select2-allow-clear').select2({
    allowClear: true,
    placeholder: placeholder
});
$('button[data-select2-open]').click(function() {
    $('#' + $(this).data('select2-open')).select2('open');
});
var select2OpenEventName = "select2-open";
$(':checkbox').on("click", function() {
    $(this).parent().nextAll('select').select2("enable", this.checked);
});

