var Error404 = function () {
	"use strict";
    //function to initiate RainyDay
    var getURLParameter = function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    };
    var runRainyDay = function () {
        var image = document.getElementById('background');
        image.onload = function () {
            var engine = new RainyDay('canvas', 'background', window.innerWidth, window.innerHeight, 1, getURLParameter("blur") || 20);
            var preset = 3 || 1;
            if (preset == 1) {
                engine.gravity = engine.GRAVITY_NON_LINEAR;
                engine.trail = engine.TRAIL_DROPS;
                engine.rain([engine.preset(3, 3, 0.88), engine.preset(5, 5, 0.9), engine.preset(6, 2, 1)], 100);
            } else if (preset == 2) {
                engine.gravity = engine.GRAVITY_NON_LINEAR;
                engine.trail = engine.TRAIL_DROPS;
                engine.VARIABLE_GRAVITY_ANGLE = Math.PI / 8;
                engine.rain([engine.preset(0, 2, 0.5), engine.preset(4, 4, 1)], 50);
            } else if (preset == 3) {
                engine.gravity = engine.GRAVITY_NON_LINEAR;
                engine.trail = engine.TRAIL_SMUDGE;
                engine.rain([engine.preset(0, 2, 0.5), engine.preset(4, 4, 1)], 50);
            }
        };
        image.crossOrigin = "anonymous";
        image.src = "assets/images/back-error-page.jpg";
    };
    return {
        //main function to initiate template pages
        init: function () {
            runRainyDay();
        }
    };
}();