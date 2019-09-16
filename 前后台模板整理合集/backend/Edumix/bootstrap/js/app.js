//responsive menu slicknav

$(function() {
    "use strict";
    $('.slicknav').slicknav({
        label: "EDUMIX"
    });
    /*
     * INITIALIZE BUTTON TOGGLE
     * ------------------------
     * always use this code for toggle and close button effect
     */
    $(".side-bar").accordionze({
        accordionze: true,
        speed: 300,
        closedSign: '<b class="fa fa-circle"></b>',
        openedSign: '<b class="fa fa-circle"></b>'
    });
    $(".slim-scroll").slimscroll({
        height: "180px",
        alwaysVisible: false,
        size: "3px"
    });
    $(".slim-scroll-mail").slimscroll({
        height: "380px",
        alwaysVisible: true,
        size: "4px"
    });
});

/*     
 * Add collapse and remove events to boxes
 */

(function($) {
    "use strict";

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

})(jQuery);

//Find the box parent

(function($) {
    "use strict";
    $("[data-widget='remove']").click(function() {

        var box = $(this).parents(".box").first();
        box.slideUp();
    });
})(jQuery);




//scrool prettyfy dropdown menu



//background image slide show



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
