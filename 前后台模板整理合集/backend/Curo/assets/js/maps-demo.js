/*global $, gmap3, google, vectorMap */
$(document).ready(function () {
    "use strict";
   
    var googleMap = $('#google-map'),
        vectormap = $('#vectormap');
    
    googleMap.height('400px').width('100%').gmap3({
        map: {
            options: {
                center: [25.8098276, -80.2117983],
                zoom: 12,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                },
                navigationControl: true,
                scrollwheel: true,
                streetViewControl: true
            }
        },
        marker: {
            address: "1002 NW 36th St, Miami, FL 33127, USA",
            options: {
                icon: new google.maps.MarkerImage(
                    "assets/img/gmap3/map-marker.png",
                    new google.maps.Size(32, 37, "px", "px")
                )
            }
        },
        action: "autofit"
    });
    
    vectormap.height('400px').width('100%').vectorMap({
        hoverOpacity: 0.7,
        hoverColor: '#405264',
        markerStyle: {
            initial: {
                fill: '#F8E23B',
                stroke: '#383f47'
            },
            hover: {
                fill: '#ffe150',
                stroke: 'rgba(56, 63, 71, 0.74)'
            }
        },
        backgroundColor: '#383f47',
        markers: [
            {latLng: [41.90, 12.45], name: 'Vatican City'},
            {latLng: [25.7877, -80.2241], name: 'Miami, Florida'},
            {latLng: [18.1824, -77.3218], name: 'Jamaica'},
            {latLng: [-8.51, 179.21], name: 'Tuvalu'},
            {latLng: [43.93, 12.46], name: 'San Marino'},
            {latLng: [47.14, 9.52], name: 'Liechtenstein'},
            {latLng: [7.11, 171.06], name: 'Marshall Islands'},
            {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
            {latLng: [3.2, 73.22], name: 'Canada'},
            {latLng: [35.88, 14.5], name: 'Malta'},
            {latLng: [12.05, -61.75], name: 'Grenada'},
            {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
            {latLng: [13.16, -59.55], name: 'Barbados'},
            {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
            {latLng: [-4.61, 55.45], name: 'Seychelles'},
            {latLng: [7.35, 134.46], name: 'Palau'},
            {latLng: [42.5, 1.51], name: 'Andorra'},
            {latLng: [14.01, -60.98], name: 'Saint Lucia'},
            {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
            {latLng: [1.3, 103.8], name: 'Singapore'},
            {latLng: [1.46, 173.03], name: 'Kiribati'},
            {latLng: [-21.13, -175.2], name: 'Tonga'},
            {latLng: [15.3, -61.38], name: 'Dominica'},
            {latLng: [-20.2, 57.5], name: 'Mauritius'},
            {latLng: [26.02, 50.55], name: 'Bahrain'},
            {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
        ]
    });
    
    function triggerResize() {
        var ev, element, event;
        if (document.createEvent) {
            ev = document.createEvent('Event');
            ev.initEvent('resize', true, true);
            window.dispatchEvent(ev);
        } else { // IE
            element = document.documentElement;
            event = document.createEventObject();
            element.fireEvent("onresize", event);
        }
    }
    $('.sidebar').on('hidden.bs.collapse', function () {
        triggerResize();
    });
});