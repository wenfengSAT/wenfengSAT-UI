$(function () {
    var body = $('body');
    var header = $('.header');
    var wrapper = $('.wrapper');
    var content = $('.content');
    var page_sidebar = $('.page-sidebar');

    /* Begin Function Load Fixed Sidebar */
    var load_sidebar_fixed = function(){
        var w_sidebar;
        if(body.hasClass('page-sidebar-fixed')){
            if(body.hasClass('page-sidebar-left-closed') || body.hasClass('page-sidebar-right-closed')){
                w_sidebar = '50px';
            } else{
                w_sidebar = '220px';
            }
            $('.sidebar').slimScroll({
                "width": w_sidebar,
                "height": $(window).height() - 50,
                "wheelStep": 5
            });
        }
    }
    /* End Function Load Fixed Sidebar */

    $(window).on('load resize', function(){
       if(($(window).width() >= 480) && ($(window).width() < 992)){
           body.addClass('page-sidebar-left-closed');
           $('.sidebar').slimScroll({
               "width": '50px',
               "height": $(window).height() - 50,
               "wheelStep": 5
           });
       } else if($(window).width() > 768){
           load_sidebar_fixed();
       }
    });

    /* Begin Enable sidebar toggle */
    $('.sidebar-toggle').click(function (e) {
        if($(window).width() > 480){
            e.preventDefault();
            if (body.hasClass('page-sidebar-right') || body.hasClass('page-sidebar-right-closed')) {
                body.toggleClass('page-sidebar-right');
                body.toggleClass('page-sidebar-right-closed');
            } else {
                body.toggleClass('page-sidebar-left-closed');
            }
            if(body.hasClass('page-sidebar-fixed')) {
                $('.sidebar').slimScroll({'destroy': true});
                load_sidebar_fixed();
            }
        } else{
            $('.row-offcanvas').toggleClass('active')
        }
    });
    /* End Enable sidebar toggle */

    /* Begin Sidebar metisMenu */
    $('.sidebar-menu').metisMenu();
    /* End Sidebar metisMenu */

    /* Begin Set Height Page Wrapper Full Screen */
    var content_header = $('.content-header');
    var main_content = $('.main-content');
    var h_content = content_header.outerHeight() + main_content.outerHeight();
    if(page_sidebar.outerHeight() <= h_content){
        main_content.css('min-height', $(window).height() - content_header.outerHeight() - header.outerHeight());
    } else{
        main_content.css('min-height', page_sidebar.outerHeight() - content_header.outerHeight());
    }
    /* End Set Height Page Wrapper Full Screen */



    /* Begin Hover Fixed Sidebar */
    page_sidebar.hover(function() {
        if(body.hasClass('page-sidebar-fixed')){
            if(body.hasClass('page-sidebar-right-closed')){
                body.removeClass('page-sidebar-right-closed');
                body.addClass('page-sidebar-right');
                body.addClass('page-hover-right');
                $('.sidebar').slimScroll({'destroy': true});
                $('.sidebar').slimScroll({
                    "width": '220px',
                    "height": $(window).height() - 50,
                    "wheelStep": 5
                });
            } else if(body.hasClass('page-sidebar-left-closed')){
                body.removeClass('page-sidebar-left-closed');
                body.addClass('page-hover-left');
                $('.sidebar').slimScroll({'destroy': true});
                $('.sidebar').slimScroll({
                    "width": '220px',
                    "height": $(window).height() - 50,
                    "wheelStep": 5
                });
            } else{
                return;
            }
        }

    }, function() {
        if(body.hasClass('page-sidebar-fixed')) {
            if(body.hasClass('page-hover-right')){
                body.removeClass('page-hover-right');
                body.removeClass('page-sidebar-right');
                body.addClass('page-sidebar-right-closed');
                $('.sidebar').slimScroll({'destroy': true});
                $('.sidebar').slimScroll({
                    "width": '50px',
                    "height": $(window).height() - 50,
                    "wheelStep": 5
                });
            } else if(body.hasClass('page-hover-left')){
                body.removeClass('page-hover-left');
                body.addClass('page-sidebar-left-closed');
                $('.sidebar').slimScroll({'destroy': true});
                $('.sidebar').slimScroll({
                    "width": '50px',
                    "height": $(window).height() - 50,
                    "wheelStep": 5
                });
            } else{
                return;
            }
        }
    });
    /* End Hover Fixed Sidebar */

    /* Begin Load Default Quick Sidebar Push */
    if(body.hasClass('page-quick-sidebar-content-push') || body.hasClass('page-quick-sidebar-content-over')){
        body.removeClass('page-quick-sidebar-push');
        $('.chat-box-list').slimScroll({
            "width": '250px',
            "height": $(window).height() - 50,
            "wheelStep": 5
        });
    } else{
        body.addClass('page-quick-sidebar-push');
        $('.chat-box-list').slimScroll({
            "width": '250px',
            "height": $(window).height(),
            "wheelStep": 5
        });
    }
    /* End Load Default Quick Sidebar Push */


    /* Begin Slimscroll Topbar Menu */
    $('.dropdown-scroller').slimScroll({
        "width": '233px',
        "height": '250px',
        "wheelStep": 5
    });
    /* End Slimscroll Topbar  Menu */

    /* Begin Full Screen */
    $('.fullscreen-toggle').click(function() {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            $('> i', this).removeClass('icon-size-fullscreen').addClass('icon-size-actual');
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            $('> i', this).addClass('icon-size-fullscreen').removeClass('icon-size-actual');
        }
    });
    /* End Full Screen */

});


