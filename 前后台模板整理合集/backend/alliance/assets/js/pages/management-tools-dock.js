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

        // Demo only javascript. no real use
        var contentType = $('#content-type');
        var Content = $('#dock-content');

        contentType.on('click', '.holder-style', function(e) {
            e.preventDefault();

            var This = $(this);
            var activeContent = This.attr('href');

            // Content button active
            contentType.find('.holder-style').removeClass('holder-active');
            This.addClass('holder-active');

            Content.children('div').removeClass('active-content');
            $(activeContent).addClass('active-content');
        });

        $('#dock-push').on('click', function() {

            var findPush = Content.children('.active-content').find('.dock-item');

            // Admin Dock Plugin
            findPush.dockmodal({
                minimizedWidth: 220,
                height: 430,
                title: function() {
                    // note this is a panel specific callback
                    // will return undefined if nonexistant
                    return this.data('title');
                },
                initialState: "minimized"
            });

        });
    });

})(jQuery);
