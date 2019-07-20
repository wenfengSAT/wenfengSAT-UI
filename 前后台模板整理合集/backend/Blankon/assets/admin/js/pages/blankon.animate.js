var BlankonAnimate = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonAnimate.animate();
        },

        // =========================================================================
        // ANIMATE TRIGGER
        // =========================================================================
        animate: function () {
            $('#animate-action button').click(function(e){
                e.preventDefault();
                $('#animation-sample').removeClass().addClass($(this).data('animate') + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass();
                });
            });
        }

    };

}();

// Call main app init
BlankonAnimate.init();