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

        // Demo Code - Filter Icons Functionality
        function iconHide(iconVal) {
            $(".tab-pane.active .icon-demo-list > li").hide(); // hide all icons
            $('.tab-pane.active .icon-demo-list > li > span[class*="' + iconVal + '"]').parent().show(); // matched icons
        }
        $("#icon-filter").keyup(function() {
            var iconVal = $.trim(this.value);
            if (iconVal === "") {
                return
            } else {
                iconHide(iconVal);
            }
        });
        $("#icon-tabs > li > a").on('click', function() {
            $("#icon-filter").val(''); // clear search value
            $(".icon-demo-list > li").show(); // show all icons on tab switch
        });
    });

})(jQuery);
