$(document).ready(function(){

    // Start Sidebar Function
    $('.sidebar-left ul.sidebar-menu li a').click(function() {
        "use strict";
        $('.sidebar-left li').removeClass('active');
        $(this).closest('li').addClass('active');
        var checkElement = $(this).next();
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('fast');
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('.sidebar-left ul.sidebar-menu ul:visible').slideUp('fast');
            checkElement.slideDown('fast');
        }
        if($(this).closest('li').find('ul').children().length == 0) {
            return true;
        } else {
            return false;
        }
    });

    if ($(window).width() < 1025) {
        $(".sidebar-left").removeClass("sidebar-nicescroller");
        $(".sidebar-right").removeClass("sidebar-nicescroller");
        $(".nav-dropdown-content").removeClass("scroll-nav-dropdown");
    }
    // End Sidebar Function


    // Start Button Toogle Function
    $(".btn-collapse-sidebar-left").click(function(){
        "use strict";
        $(".top-navbar").toggleClass("toggle");
        $(".sidebar-left").toggleClass("toggle");
        $(".page-content").toggleClass("toggle");
        $(".icon-dinamic").toggleClass("rotate-180");
    });
    $(".btn-collapse-sidebar-right").click(function(){
        "use strict";
        $(".top-navbar").toggleClass("toggle-left");
        $(".sidebar-left").toggleClass("toggle-left");
        $(".sidebar-right").toggleClass("toggle-left");
        $(".page-content").toggleClass("toggle-left");
    });
    $(".btn-collapse-nav").click(function(){
        "use strict";
        $(".icon-plus").toggleClass("rotate-45");
    });
    // End Button Toogle Function


    // Start Tooltip Function
    $('.tooltips').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    })
    $('.popovers').popover({
        selector: "[data-toggle=popover]",
        container: "body"
    })
    // End Tootltip Function

    // Start Nicescroll and Slimscroll Function
    $(".sidebar-nicescroller").niceScroll({
        cursorcolor: "#121212",
        cursorborder: "0px solid #fff",
        cursorborderradius: "0px",
        cursorwidth: "0px"
    });
    $(".sidebar-nicescroller").getNiceScroll().resize();
    $(".right-sidebar-nicescroller").niceScroll({
        cursorcolor: "#111",
        cursorborder: "0px solid #fff",
        cursorborderradius: "0px",
        cursorwidth: "0px"
    });
    $(".right-sidebar-nicescroller").getNiceScroll().resize();

    $(function () {
        "use strict";
        $('.scroll-nav-dropdown').slimScroll({
            height: '200px',
            position: 'right',
            size: '4px',
            railOpacity: 0.3
        });
    });

    $(function () {
        "use strict";
        $('.scroll-chat-widget').slimScroll({
            height: '200px',
            position: 'right',
            size: '4px',
            railOpacity: 0.3,
            railVisible: true,
            alwaysVisible: true,
            start : 'bottom'
        });
    });
    if ($(window).width() < 768) {
        $(".chat-wrap").removeClass("scroll-chat-widget");
    }
    // End Nicescroll and Slimscroll Function

    // Start Panel Header Button Collapse
    $(function () {
        "use strict";
        $('.collapse').on('show.bs.collapse', function() {
            var id = $(this).attr('id');
            $('button.to-collapse[data-target="#' + id + '"]').html('<i class="fa fa-chevron-up"></i>');
        });
        $('.collapse').on('hide.bs.collapse', function() {
            var id = $(this).attr('id');
            $('button.to-collapse[data-target="#' + id + '"]').html('<i class="fa fa-chevron-down"></i>');
        });

        $('.collapse').on('show.bs.collapse', function() {
            var id = $(this).attr('id');
            $('a.block-collapse[href="#' + id + '"] span.right-icon').html('<i class="glyphicon glyphicon-minus icon-collapse"></i>');
        });
        $('.collapse').on('hide.bs.collapse', function() {
            var id = $(this).attr('id');
            $('a.block-collapse[href="#' + id + '"] span.right-icon').html('<i class="glyphicon glyphicon-plus icon-collapse"></i>');
        });
    });
    // End Panel Header Button Collapse

    $('.btn').popover();

});
