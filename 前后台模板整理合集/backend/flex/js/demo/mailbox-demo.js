jQuery(document).ready(function($) {
    $(".clickableRow").click(function() {
        window.document.location = "#";
    });
});

$(document).ready(function() {
    $('#selectall').click(function() {
        $('.selectedId').prop('checked', this.checked);
    });

    $('.selectedId').change(function() {
        var check = ($('.selectedId').filter(":checked").length == $('.selectedId').length);
        $('#selectall').prop("checked", check);
    });
});

//Activates Bootstrap Tooltips
$(function() {

    $('.button-tooltips').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    })

})
