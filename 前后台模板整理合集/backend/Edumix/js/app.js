//responsive menu slicknav


$(function() {
    "use strict";
    $('.counter-up').counterUp({
        delay: 10,
        time: 3000
    });
    $('.counter-up-fast').counterUp({
        delay: 5,
        time: 1000
    });
    //circular progress animation
    $('.circlestat').circliful();
});


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

    $(".sidebar-fixed").slimscroll({
        height: "460px",
        width: "260px",
        position: 'left',
        alwaysVisible: true,
        allowPageScroll: true,
        distance: '-1px',
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



