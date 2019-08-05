$(function() {

    /*
     * INITIALIZE BUTTON TOGGLE
     * ------------------------
     * always use this code for toggle and close button effect
     */

    $("[data-widget='remove']").click(function() {
        //Find the box parent        
        var box = $(this).parents(".box").first();
        box.slideUp();
    });

    /*     
     * Add collapse and remove events to boxes
     */
    $("[data-widget='collapse']").click(function() {
        //Find the box parent        
        var box = $(this).parents(".box").first();
        //Find the body and the footer
        var bf = box.find(".box-body, .box-footer");
        if (!box.hasClass("collapsed-box")) {
            box.addClass("collapsed-box");
            bf.slideUp();
        } else {
            box.removeClass("collapsed-box");
            bf.slideDown();
        }
    });

    //Donut chart sidemenu
    $("#doughnutChart").drawDoughnutChart([{
        title: "Tokyo",
        value: 232,
        color: "#2C3E50"
    }, {
        title: "San Francisco",
        value: 165,
        color: "#FC4349"
    }, {
        title: "New York",
        value: 183,
        color: "#6DBCDB"
    }]);


    //scrool prettyfy dropdown menu

    $(".menu").slimscroll({
        height: "200px",
        alwaysVisible: true,
        size: "5px"
    }).css("width", "100%");


    //tooltip menu sidebar setting

    $("[data-toggle='tooltip']").tooltip();
    $(".topnav").accordionze({
        accordionze: true,
        speed: 300,
        closedSign: '<b class="icon-chevron-left"></b>',
        openedSign: '<b class="icon-chevron-down"></b>'
    });

    $('.tooltip-tip').tooltipster({
        position: 'top-left',
        animation: 'fade',
        theme: '.tooltipster-shadow',
        delay: 1,
        offsetY: '-50px',
        offsetX: '33px',
        onlyOne: true

    });

    //background image slide show


});
//BACKGROUND CHANGER

$(function() {
    $("#button-bg").click(function() {
        $("body").css({
            "background": "url('img/2Nrxex6.jpg')repeat fixed"
        });
    });

    $("#button-bg2").click(function() {
        $("body").css({
            "background": "url('img/PIJWrEi.jpg')repeat fixed"
        });
    });


    $("#button-bg3").click(function() {
        $("body").css({
            "background": "url('img/KCa8KHY.png')repeat fixed"
        });
    });

    $("#button-bg4").click(function() {
        $("body").css({
            "background": "url('img/oavv3DC.jpg')repeat fixed"
        });
    });


    $("#button-bg5").click(function() {
        $("body").css({
            "background": "url('img/Mw8xBU4.png')repeat fixed"
        });

    });

    $("#button-bg6").click(function() {
        $("body").css({
            "background": "url('img/wood.jpg')repeat fixed"
        });

    });

    $("#button-bg7").click(function() {
        $("body").css({
            "background": "url('img/dark_wood.png')repeat"
        });

    });

    $("#button-bg8").click(function() {
        $("body").css({
            "background": "url('img/purty_wood_@2X.png')repeat fixed"
        });
    });

    $("#button-bg9").click(function() {
        $("body").css({
            "background": "#1d2c3a"
        });
    });

    $("#button-bg10").click(function() {
        $("body").css({
            "background": "#8BA987"
        });
    });
    $("#button-bg11").click(function() {
        $("body").css({
            "background": "#067B82"
        });
    });
    $("#button-bg12").click(function() {
        $("body").css({
            "background": "#79B4D5"
        });
    });

    $("#button-bg13").click(function() {
        $("body").css({
            "background": "#20243F"
        });

    });
    /**
     * Background Changer end
     */
});
