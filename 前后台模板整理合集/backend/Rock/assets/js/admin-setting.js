$(function () {

    var body = $('body');
    var header = $('.header');
    var wrapper = $('.wrapper');
    var page_sidebar = $('.page-sidebar');
    var layout_css_path = 'assets/css/';
    var layout_script_path = 'assets/js/';
    var layout_plugin_path = 'assets/plugins/';
    var admin_option = $('#admin-setting > .admin-setting-content > ul.admin-setting-list > li');

    /* Begin Theme Option - Change Theme Colors */
    var setThemeColor = function (color) {
        $('#theme-color').attr("href", layout_css_path + 'themes/' + color + ".css");
    }
    admin_option.find('.theme-option > li').on('click',function(e) {
        e.preventDefault();
        var color = $(this).attr("data-color");
        setThemeColor(color);
        admin_option.find('.theme-option > li').removeClass("active");
        $(this).addClass("active");
    });
    /* End Theme Option - Change Theme Colors */

    /* Begin Layout Option */
    admin_option.find('.layout-option').on('change',function(e) {
        e.preventDefault();
        body.toggleClass('page-layout-boxed');
        header.toggleClass('container');
        $('> div', body).toggleClass('container');
    });
    /* End Layout Option */

    /* Begin Header Option */
    admin_option.find('.header-option').on('change',function(e) {
        e.preventDefault();
        body.toggleClass('page-header-fixed');
    });
    /* End Header Option */

    /* Begin Sidebar Position Option */
    admin_option.find('.sidebar-position-option').on('change',function(e) {
        e.preventDefault();
        body.toggleClass('page-sidebar-right');
    });
    /* End Sidebar Position Option */

    /* Begin Sidebar Option */
    admin_option.find('.sidebar-option').on('change',function(e) {
        e.preventDefault();
        body.toggleClass('page-sidebar-fixed');
        if(body.hasClass('page-sidebar-fixed')){
            $('.sidebar').slimScroll({
                "width": '220px',
                "height": $(window).height() - 50,
                "wheelStep": 5
            });
        } else{
            $('.sidebar').slimScroll({destroy:true});
            $('.sidebar').attr('style', '');
        }
    });
    /* End Sidebar Option */

    /* Begin Add Rippler Effect to Admin Template */
//    $(document).ready(function() {
//        $('ul.sidebar-menu li a, .btn').addClass('rippler rippler-inverse');
//        $(".rippler").rippler({
//            effectClass      :  'rippler-effect'
//            ,effectSize      :  16      // Default size (width & height)
//            ,addElement      :  'div'   // e.g. 'svg'(feature)
//            ,duration        :  400
//        });
//    });
    /* End Add Rippler Effect to Admin Template */
});


