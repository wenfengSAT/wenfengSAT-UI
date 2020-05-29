$('document').ready(function() {

    $('#side-menu').metisMenu();

//Loads the correct sidebar on window load
    $(function() {

        $(window).bind("load", function() {
            console.log($(this).width())
            if ($(this).width() < 753) {
                $('div.sidebar-collapse').addClass('collapse')
            } else {
                $('div.sidebar-collapse').removeClass('collapse')
            }
        })
    })

//Collapses the sidebar on window resize
    $(function() {

        $(window).bind("resize", function() {
            console.log($(this).width())
            if (this.innerWidth < 768) {
                $('div.sidebar-collapse').addClass('collapse')
            } else {
                $('div.sidebar-collapse').removeClass('collapse')
            }
        })
    });

    var allchecked = false;
    $(".btn-chk").click(function() {
        if (allchecked) {
            allchecked = false;
            $('input:checkbox').prop('checked', 0);
        } else {
            allchecked = true;
            $('input:checkbox').prop('checked', 1);
        }
    });



});

