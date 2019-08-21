/*global $, Event */
$(document).ready(function () {
    "use strict";

    //Start: Autohides Navigation Based on Screen Width 
    function sidebarAutoHide() {
        if ($(window).width() < 991) {
            $('.sidebarLeft').addClass('collapse').addClass('in');
            $('.sidebarRight').addClass('collapse');
        }
    }
    
    sidebarAutoHide();
    //End: Autohides Navigation Based on Screen Width 

    //Invoke window resize event 
    function invokeResize() {
        var ev, element, event;
        if (document.createEvent) {
            ev = document.createEvent('Event');
            ev.initEvent('resize', true, true);
            window.dispatchEvent(ev);
        } else { // IE
            element = document.documentElement;
            event = document.createEventObject();
            element.fireEvent("onresize", event);
        }
    }
    
    invokeResize();
    //End Invoke window resize event

    //Start: Invokes page resize event whenever a navigation button is clicked.
    $('header .nav-button').on('click', function (e) {
        invokeResize();
    });
    //End: Invokes page resize event whenever a navigation button is clicked.
 
});

//SlimScroll
$(function () {
    "use strict";

    var bottomOffset = 140,
        navHeight = 350;

    //Start: Sidebar Left
    if ($('.header-fixed').length) {
        bottomOffset = 140;
        navHeight = $('.sidebar-left').height();
        $('.sidebar-left > .side-panel').each(function (num, ele) {
            navHeight -= $(this).height();
        });

        $('.sidebar-nav-wrapper').slimScroll({
            height: navHeight - bottomOffset
        });
    }
    //End: Sidebar Left

    //Start: Sidebar Right
    if ($('.header-fixed').length) {
        $('.sidebar-right .chat-list-wrapper').slimScroll({
            height: $('.sidebar-right').height() - 80
        });
    }
    //End: Sidebar Right

    //Start: Nav Button Dropdown Menus
    $('.item-list').slimScroll({
        height: 280
    });
    $('.item-grid').slimScroll({
        height: 280
    });
    //End: Nav Button Dropdown Menus

    //Start: Readjust Scroll Container Height based on Screen Size
    $(window).resize(function () {

        //Start: Sidebar Left
        if ($('.header-fixed').length) {
            navHeight = $('.sidebar-left').height();
            $('.sidebar-left > .side-panel').each(function (num, ele) {
                navHeight -= $(this).height();
            });

            $('.sidebar-nav-wrapper').slimScroll({
                height: navHeight - bottomOffset
            });
        }
        //End: Sidebar Left

        //Start: Sidebar Right
        if ($('.header-fixed').length) {
            $('.sidebar-right .chat-list-wrapper').slimScroll({
                height: $('.sidebar-right').height() - 80
            });
        }
        //End: Sidebar Right

    });
    //End: Readjust Scroll Container based on Screen Size

});
//End SlimScroll

//Auto Collapse Menu Item
$(document).ready(function () {
    "use strict";

    $('.sidebar-nav>li>a').on('click', function (e) {

        var menuItem = this;

        $('.sidebar-nav>li>a').each(function (num, ele) {
            if (menuItem !== ele) {
                $(ele).siblings('ul').removeClass('in');
            }
        });

    });
});
//End Auto Collapse Menu Item

//Hides Chatlist
$(document).mouseup(function (e) {
    "use strict";

    var container = $(".sidebar-right"),
        searchContainer = $('.chat-search');

    if (!container.is(e.target) && container.has(e.target).length === 0 && !searchContainer.is(e.target) && searchContainer.has(e.target).length === 0) {
        if (!$('.sidebar-right').hasClass('in')) {
            $('#sidebarRightToggle').trigger('click');
        }
    }
});
//End Hides Chatlist