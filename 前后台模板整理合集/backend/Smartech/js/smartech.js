$(function() {

    $('#side-menu').metisMenu();

    $('.sidebar-toggle').on('click', function() {
        $('body').toggleClass('sidebar-collapse');
        setTimeout(function() {
            $(window).resize()
        }, 850)
    });

    $('.sidebar-search-collapse').on('click', function() {
        $('body').toggleClass('sidebar-collapse');
        $('.sidebar-search input').focus()
        setTimeout(function() {
            $(window).resize()
        }, 500)
    });

    $('.panel').on('click', '.panel-collapse', function() {
        var $panel = $(this).closest('.panel')
        $('.panel-heading .panel-collapse i', $panel).toggleClass('fa-caret-down').toggleClass('fa-caret-up')
        $('.panel-body', $panel).toggleClass('hidden')
    })


    if (jQuery().sparkline)
        $("#page-title-statistics").sparkline([10, 3, 4, -3, -2, 5, 8, 11, 6, 7, -7, -5, 8, 9, 5, 6, 7, 2, 0, -4, -2, 4], {
            type: 'bar',
            barColor: '#00a652',
            negBarColor: '#00a652'
        });

    $('#toggle-right-sidebar').on('click', function() {
        $('.sidebar-right').toggleClass('open')

        var width = $(window).width();
        if (width < 768) {
            $('.sidebar-right').attr('style', '')
        } else {
            $('.sidebar-right').height($('body').height() - 50)
        }

        $('.sidebar-right').css('display', 'block');

        setTimeout(function() {
            $(window).resize()
            if (!$('.sidebar-right').hasClass('open'))
                $('.sidebar-right').hide(0);
        }, 500)
    })

});

$(window).resize(function() {
    var width = $(window).width();
    if (width < 768) {
        $('.sidebar-right.open').attr('style', '')
    } else {
        $('.sidebar-right.open').height($('body').height() - 50)
    }
})


//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse')
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse')
        }

        height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
        height = height - topOffset;
        if (height < 1)
            height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    })
})
