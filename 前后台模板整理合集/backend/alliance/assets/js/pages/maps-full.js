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

        // Init new GMap
        var map = new GMaps({
            div: '#map1',
            lat: -12.043333,
            lng: -77.125333,
            zoom: 7
        });

        // Add working search bar to GMap
        $('#geocoding_form').submit(function(e) {
            e.preventDefault();
            GMaps.geocode({
                address: $('#address').val().trim(),
                callback: function(results, status) {
                    if (status == 'OK') {
                        var latlng = results[0].geometry.location;
                        map.setCenter(latlng.lat(), latlng.lng());
                        map.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng()
                        });
                    }
                }
            });
        });

        // Toolbar Functionality - On Flag click gather location and refocus GMap
        $('.flag-sm').on('click', function() {
            var Loc = $(this).data('loc');
            GMaps.geocode({
                address: Loc.trim(),
                callback: function(results, status) {
                    if (status == 'OK') {
                        var latlng = results[0].geometry.location;
                        map.setCenter(latlng.lat(), latlng.lng());
                        map.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng()
                        });
                    }
                }
            });
        });

        // Toolbar Functionality - On Toggle click expand/collapse Toolbar
        $('.expanding-header .map-header-icon').on('click', function() {
            $(this).parent('.expanding-header').toggleClass('collapsed');
        });


    });

})(jQuery);
