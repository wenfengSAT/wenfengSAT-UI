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

        // Demo Code - Email Template Switcher
        $('ul.tray-nav > li > a').on('click', function(e) {
            e.preventDefault();

            // Change active navigation element
            $(this).parents('.tray-nav').children('li').removeClass('active')
            $(this).parent('li').addClass('active');

            // Change active email template
            $('.template-tray').children('.email-template').removeClass('active');

            var btnHref = $(this).attr('href');
            $(btnHref).addClass('active');
        });
    });

})(jQuery);
