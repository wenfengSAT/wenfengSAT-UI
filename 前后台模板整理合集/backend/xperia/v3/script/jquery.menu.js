$(function () {
    var flag;
    if($('body').hasClass('sidebar-colors')){
        flag = true;
    } else{
        flag = false;
    }
    $('#menu-toggle').toggle(
        function() {
            if($('#wrapper').hasClass('right-sidebar')) {
                $('body').addClass('right-side-collapsed')
                $('#sidebar .slimScrollDiv').css('overflow', 'initial');
                $('#sidebar .menu-scroll').css('overflow', 'initial');
            } else{
                $('body').addClass('left-side-collapsed').removeClass('sidebar-colors');
                $('#sidebar .slimScrollDiv').css('overflow', 'initial');
                $('#sidebar .menu-scroll').css('overflow', 'initial');
            }
        }, function() {
            if($('#wrapper').hasClass('right-sidebar')) {
                $('body').removeClass('right-side-collapsed');
                $('#sidebar .slimScrollDiv').css('overflow', 'hidden');
                $('#sidebar .menu-scroll').css('overflow', 'hidden');
            } else{
                $('body').removeClass('left-side-collapsed')
                if(flag == true){
                    $('body').addClass('sidebar-colors');
                }
                $('#sidebar .slimScrollDiv').css('overflow', 'hidden');
                $('#sidebar .menu-scroll').css('overflow', 'hidden');
            }
        }
    );

    if($('#wrapper').hasClass('right-sidebar')) {
        $('ul#side-menu li').hover(function () {
            if ($('body').hasClass('right-side-collapsed')) {
                $(this).addClass('nav-hover');
            }
        }, function () {
            if ($('body').hasClass('right-side-collapsed')) {
                $(this).removeClass('nav-hover');
            }
        });
    } else{
        $('ul#side-menu li').hover(function () {
            if ($('body').hasClass('left-side-collapsed')) {
                $(this).addClass('nav-hover');
            }
        }, function () {
            if ($('body').hasClass('left-side-collapsed')) {
                $(this).removeClass('nav-hover');
            }
        });
    }

});