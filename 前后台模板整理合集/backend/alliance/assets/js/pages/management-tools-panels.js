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


        // Init Widget Demo JS
        // demoWidgets.init();

        // Because we are using Admin Panels we use the OnFinish
        // callback to activate the demoWidgets. It's smoother if
        // when we let the panels be moved and organized before
        // filling them with content from various plugins

        // Init plugins used on this page
        // HighCharts, JvectorMap, Admin Panels

        // Init Admin Panels on widgets inside the ".admin-panels" container
        $('.admin-panels').adminpanel({
            grid: '.admin-grid',
            draggable: true,
            mobile: false,
            callback: function() {
                bootbox.confirm('<h3>A Custom Callback!</h3>', function() {});
            },
            onFinish: function() {
                $('.admin-panels').addClass('animated fadeIn').removeClass('fade-onload');

                // Init Demo settings
                $('#p1 .panel-control-title').click();

                // Create an example admin panel filter
                $('#admin-panel-filter a').on('click', function() {
                    var This = $(this);
                    var Value = This.attr('data-filter');

                    // Toggle any elements whos name matches
                    // that of the buttons attr value
                    $('.admin-filter-panels').find($(Value)).each(function(i, e) {
                        if (This.hasClass('active')) {
                            $(this).slideDown('fast').removeClass('panel-filtered');
                        } else {
                            $(this).slideUp().addClass('panel-filtered');
                        }
                    });
                    This.toggleClass('active');
                });

            },
            onSave: function() {
                $(window).trigger('resize');
            }
        });
    });

})(jQuery);
