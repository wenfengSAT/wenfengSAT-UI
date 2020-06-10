$(document).ready(function () {
    $('#change-transitions').change(function () {
        var ani = $('#change-transitions').val();
        $("body").removeClass().addClass("animated " + ani);
        switch (ani) {
            case "bounceOut" :
                setTimeout(function () {
                    $('#change-transitions').val("bounceIn");
                    reload_page('bounceIn');
                }, 1000);
                break;
            case "bounceOutDown" :
                setTimeout(function () {
                    $('#change-transitions').val("bounceInDown");
                    reload_page('bounceInDown');
                }, 1000);
                break;
            case "bounceOutLeft" :
                setTimeout(function () {
                    $('#change-transitions').val("bounceInLeft");
                    reload_page('bounceInLeft');
                }, 1000);
                break;
            case "bounceOutRight" :
                setTimeout(function () {
                    $('#change-transitions').val("bounceInRight");
                    reload_page('bounceInRight');
                }, 1000);
                break;
            case "bounceOutUp" :
                setTimeout(function () {
                    $('#change-transitions').val("bounceInUp");
                    reload_page('bounceInUp');
                }, 1000);
                break;
            case "fadeOut" :
                setTimeout(function () {
                    $('#change-transitions').val("fadeIn");
                    reload_page('fadeIn');
                }, 1000);
                break;
            case "fadeOutDown" :
                setTimeout(function () {
                    $('#change-transitions').val("fadeInDown");
                    reload_page('fadeInDown');
                }, 1000);
                break;
            case "fadeOutDownBig" :
                setTimeout(function () {
                    $('#change-transitions').val("fadeInDownBig");
                    reload_page('fadeInDownBig');
                }, 1000);
                break;
            case "fadeOutLeft" :
                setTimeout(function () {
                    $('#change-transitions').val("fadeInLeft");
                    reload_page('fadeInLeft');
                }, 1000);
                break;
            case "fadeOutLeftBig" :
                setTimeout(function () {
                    $('#change-transitions').val("fadeInLeftBig");
                    reload_page('fadeInLeftBig');
                }, 1000);
                break;
            case "fadeOutRight" :
                setTimeout(function () {
                    $('#change-transitions').val("fadeInRight");
                    reload_page('fadeInRight');
                }, 1000);
                break;
            case "fadeOutRightBig" :
                setTimeout(function () {
                    $('#change-transitions').val("fadeInRightBig");
                    reload_page('fadeInRightBig');
                }, 1000);
                break;
            case "fadeOutUp" :
                setTimeout(function () {
                    $('#change-transitions').val("fadeInUp");
                    reload_page('fadeInUp');
                }, 1000);
                break;
            case "fadeOutUpBig" :
                setTimeout(function () {
                    $('#change-transitions').val("fadeInUpBig");
                    reload_page('fadeInUpBig');
                }, 1000);
                break;
            case "flipOutX" :
                setTimeout(function () {
                    $('#change-transitions').val("flipInX");
                    reload_page('flipInX');
                }, 1000);
                break;
            case "flipOutY" :
                setTimeout(function () {
                    $('#change-transitions').val("flipInY");
                    reload_page('flipInY');
                }, 1000);
                break;
            case "lightSpeedOut" :
                setTimeout(function () {
                    $('#change-transitions').val("lightSpeedIn");
                    reload_page('lightSpeedIn');
                }, 1000);
                break;
            case "rotateOut" :
                setTimeout(function () {
                    $('#change-transitions').val("rotateIn");
                    reload_page('rotateIn');
                }, 1000);
                break;
            case "rotateOutDownLeft" :
                setTimeout(function () {
                    $('#change-transitions').val("rotateInDownLeft");
                    reload_page('rotateInDownLeft');
                }, 1000);
                break;
            case "rotateOutDownRight" :
                setTimeout(function () {
                    $('#change-transitions').val("rotateInDownRight");
                    reload_page('rotateInDownRight');
                }, 1000);
                break;
            case "rotateOutUpLeft" :
                setTimeout(function () {
                    $('#change-transitions').val("rotateInUpLeft");
                    reload_page('rotateInUpLeft');
                }, 1000);
                break;
            case "rotateOutUpRight" :
                setTimeout(function () {
                    $('#change-transitions').val("rotateInUpRight");
                    reload_page('rotateInUpRight');
                }, 1000);
                break;
            case "slideOutUp" :
                setTimeout(function () {
                    $('#change-transitions').val("slideInDown");
                    reload_page('slideInDown');
                }, 1000);
                break;
            case "slideOutLeft" :
                setTimeout(function () {
                    $('#change-transitions').val("slideInLeft");
                    reload_page('slideInLeft');
                }, 1000);
                break;
            case "slideOutRight" :
                setTimeout(function () {
                    $('#change-transitions').val("slideInRight");
                    reload_page('slideInRight');
                }, 1000);
                break;
            case "rollOut" :
                setTimeout(function () {
                    $('#change-transitions').val("rollIn");
                    reload_page('rollIn');
                }, 1000);
                break;
            case "hinge" :
                setTimeout(function () {
                    $('#change-transitions').val("fadeInDown");
                    reload_page('fadeInDown');
                }, 1000);
                break;
        }
    });
    function reload_page(animated) {
        $("body").removeClass().addClass("animated " + animated);
    }
});