var BlankonGallery = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonGallery.mixitup();
        },

        // =========================================================================
        // MIXITUP
        // =========================================================================
        mixitup : function () {
            $('#gallery').mixItUp({
                animation: {
                    animateResizeContainer: false,
                    duration: 400,
                    effects: 'fade translateZ(-360px) stagger(34ms)',
                    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }
            });
            setTimeout(function () {
                $('#gallery').mixItUp('setOptions', {
                    animation: {
                        easing: 'ease'
                    }
                });
            }, 1000)
        }

    };

}();

// Call main app init
BlankonGallery.init();