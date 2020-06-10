$(function () {

    var heightDocs = $(window).height() - 70;
    var window_h = $(window).height() - 70;
    var content_h = $('#page-wrapper').height();
    if (window_h <= content_h) {
        $('.page-footer').css('position', 'relative');
        $('#page-wrapper').css('min-height', heightDocs);
    } else {
        $('.page-footer').css('position', 'absolute');
        $('#sidebar').css('height', heightDocs);
        $('#page-wrapper').css('height', window_h);
    }

    /*********************/
    /*** Menu SideBar ***/
    $('#side-menu').metisMenu();

    $(window).bind("load resize", function () {
        if ($(this).width() < 768) {
            $('body').removeClass('left-side-collapsed');
            $('.navbar-header').removeClass('logo-collapsed');
            $('div.sidebar-collapse').addClass('collapse');
            $('#sidebar').css('height', 'auto');
        } else {
            $('div.sidebar-collapse').removeClass('collapse');
            $('#sidebar').css('height', 'auto');
        }
    });
    var page_wrapper_h = $('#page-wrapper').height();
    var menu_h = $('#side-menu').height();
    var sidebar_h;
    if (page_wrapper_h < menu_h) {
        sidebar_h = page_wrapper_h;
        //BEGIN JQUERY SLIMSCROLL
        $('.menu-scroll').slimScroll({
            "height": sidebar_h,
            "wheelStep": 5
        });
        //END JQUERY SLIMSCROLL
    }
    /*** Menu SideBar ***/
    /*******************/

    //BEGIN TOOTLIP
    $("[data-toggle='tooltip'], [data-hover='tooltip']").tooltip();
    //END TOOLTIP

    //BEGIN POPOVER
    $("[data-toggle='popover'], [data-hover='popover']").popover();
    //END POPOVER

    /*************************/
    /*** Template Setting ***/
    $('#template-setting > a.btn-template-setting').click(function () {
        if ($('#template-setting').css('right') < '0') {
            $('#template-setting').css('right', '0');
        } else {
            $('#template-setting').css('right', '-250px');
        }
    });

    // Begin Change Color Theme
    var setColorTheme = function (color) {
        $.cookie('#color-style', color);
        $('#color-style').attr('href', 'css/themes/' + color + '.css');
    }
    $('ul.color-theme > li').click(function () {
        var color = $(this).attr('data-style');
        setColorTheme(color);
    });
    if ($.cookie('#color-style')) {
        setColorTheme($.cookie('#color-style'));
    }
    // End Change Color Theme

    // Begin Change Style
    $('#change-style').change(function () {
        if ($(this).val() == '0') {
            $('#theme-style').attr('href', 'css/style-mango.css');
        } else {
            $('#theme-style').attr('href', 'css/style-none-border-bottom.css');
        }
    });
    // End Change Style

    /*** Template Setting ***/
    /***********************/

    /****************************/
    /******* Full Screen *******/
    $('.btn-fullscreen').click(function () {

        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
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
        }
    });
    /******* Full Screen *******/
    /**************************/

    /*************************/
    /******** Portlet *******/
    $(".portlet").each(function (index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function (e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
            else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }
            else if ($(this).hasClass('fa-cog')) {
                //Show modal
            }
            else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function () {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            }
            else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    /******** Portlet *******/
    /***********************/

    /******************************************/
    /********** Jquery Digital Clock *********/
    window.onload = function () {
        date()
    }, setInterval(function () {
        date()
    }, 1000);
    function date() {
        var dt = new Date();
        var day = dt.getDay();
        var mm, dd, h, m, s;
        mm = (mm = dt.getMonth() + 1) < 10 ? '0' + mm : mm
        dd = (dd = dt.getDate()) < 10 ? '0' + dd : dd
        h = (h = dt.getHours()) < 10 ? '0' + h : h
        m = (m = dt.getMinutes()) < 10 ? '0' + m : m
        s = (s = dt.getSeconds()) < 10 ? '0' + s : s
        var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        $('#get-date').html(days[day] + ', ' + dd + '.' + mm + '.' + dt.getFullYear());
        $('#getHours').html(h);
        $('#getMinutes').html(m);
        $('#getSeconds').html(s);
    }

    /********** Jquery Digital Clock *********/
    /****************************************/

    /***********************************/
    /************ Back To Top *********/
    $(window).scroll(function () {
        if ($(this).scrollTop() < 200) {
            $('#totop').fadeOut();
        } else {
            $('#totop').fadeIn();
        }
    });
    $('#totop').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 'fast');
        return false;
    });
    /************ Back To Top *********/
    /*********************************/


});


