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

        /* @month picker
         ------------------------------------------------------------------ */
        $("#monthpicker1, #monthpicker2").monthpicker({
            changeYear: false,
            stepYears: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            showButtonPanel: true,
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        // Demo code - active navigation btns
        $('.animation-nav').click(function() {
            $('.animation-nav').removeClass('btn-primary').addClass('btn-default');
            $(this).addClass('btn-primary');
        });

        // Form switcher nav
        var formSwitches = $('.admin-form-list a');
        formSwitches.on('click', function() {
            formSwitches.removeClass('item-active');
            $(this).addClass('item-active');

            if ($(this).attr('href') === "#contact3") {
                setTimeout(function() {
                }, 100);
            }

        });

    });

})(jQuery);
