$(function () {

    var body = $('body');

    $('.toggle-quick-sidebar').click(function() {
        /* Begin Page Quick Sidebar Push */
        if(body.hasClass('page-quick-sidebar-push')){
            body.toggleClass('page-quick-sidebar-push-open');
        }
        /* End Page Quick Sidebar Push */

        /* Begin Page Quick Sidebar Inside Content Push */
        if(body.hasClass('page-quick-sidebar-content-push')){
            body.toggleClass('page-quick-sidebar-content-push-open');
        }
        /* End Page Quick Sidebar Inside Content Push */

        /* Begin Page Quick Sidebar Inside Content Over */
        if(body.hasClass('page-quick-sidebar-content-over')){
            body.toggleClass('page-quick-sidebar-content-over-open');
        }
        /* End Page Quick Sidebar Inside Content Over */

    });

});


