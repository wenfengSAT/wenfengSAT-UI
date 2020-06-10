$(function () {
    var menu_h = $('#sidebar').height();
    $('#form-layouts ul.nav-pills li a').live('click', function () {
        var tab_id = $(this).attr('href');
        var tab_h = $(tab_id).height();
        if (tab_h < menu_h) {
            $(tab_id).css('height', '960px');
        }
    });
});