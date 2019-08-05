$(function() {
    paceOptions = {
        ajax: false, // disabled
        document: false, // disabled
        eventLag: false, // disabled
        elements: {
            selectors: ['.my-page']
        }
    };

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

    $(".side-bar").accordionze({
        accordionze: true,
        speed: 300,
        closedSign: '<b class="fa fa-caret-left"></b>',
        openedSign: '<b class="fa fa-caret-down"></b>'
    });

    $('.tooltip-tip').tooltipster({
        position: 'top-left',
        animation: 'slide',
        theme: '.tooltipster-shadow',
        delay: 1,
        offsetY: '-50px',
        offsetX: '-60px',
        onlyOne: true

    });

    //background image slide show


});
//BACKGROUND CHANGER

$(function() {
    $("#button-bg").click(function() {
        $("body").css({
            "background": "url('img/wg_blurred_backgrounds_11.jpg')no-repeat center center fixed"
        });
    });

    $("#button-bg2").click(function() {
        $("body").css({
            "background": "url('img/wg_blurred_backgrounds_5.jpg')no-repeat center center fixed"
        });
    });


    $("#button-bg3").click(function() {
        $("body").css({
            "background": "url('img/wg_blurred_backgrounds_9.jpg')no-repeat center center fixed"
        });
    });

    $("#button-bg4").click(function() {
        $("body").css({
            "background": "url('img/wg_blurred_backgrounds_19.jpg')no-repeat center center fixed"
        });
    });


    $("#button-bg5").click(function() {
        $("body").css({
            "background": "url('img/wg_blurred_backgrounds_3.jpg')no-repeat center center fixed"
        });

    });

    $("#button-bg6").click(function() {
        $("body").css({
            "background": "url('img/wg_blurred_backgrounds_6.jpg')no-repeat center center fixed"
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
