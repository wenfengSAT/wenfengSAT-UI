'use strict';
//  Author: ThemeREX.com
//
//  .html scripts
//

(function($) {

    $(document).ready(function() {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();

        var modalContent = $('#modal-content');

        modalContent.on('click', '.holder-style', function(e) {
            e.preventDefault();

            modalContent.find('.holder-style').removeClass('holder-active');
            $(this).addClass('holder-active');
        });

        function findActive() {
            var activeModal = modalContent.find('.holder-active').attr('href');
            return activeModal;
        };

        // Form Skin Switcher
        $('#animation-switcher button').on('click', function() {
            $('#animation-switcher').find('button').removeClass('active-animation');
            $(this).addClass('active-animation item-checked');

            // Inline Admin-Form example
            $.magnificPopup.open({
                removalDelay: 500, //delay removal by X to allow out-animation,
                items: {
                    src: findActive()
                },
                // overflowY: 'hidden', //
                callbacks: {
                    beforeOpen: function(e) {
                        var Animation = $("#animation-switcher").find('.active-animation').attr('data-effect');
                        this.st.mainClass = Animation;
                    }
                },
                midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
            });

        });
    });

})(jQuery);
