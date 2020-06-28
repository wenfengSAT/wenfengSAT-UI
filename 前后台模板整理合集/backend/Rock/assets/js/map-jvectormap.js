$(function () {
    $('#world-map-markers').vectorMap({
        map: 'world_mill_en',
        scale: ['#7b3990', '#0071A4'],
        normalizeFunction: 'polynomial',
        regionStyle: {
            initial: {
                fill: "#7b3990"
            },
            hover: {
                fill: "#7b3990"
            }
        },
        markerStyle: {
            initial: {
                fill: "#F8E23B",
                stroke: "rgba(248,226,59,.6)",
                "fill-opacity": 1,
                "stroke-width": 9,
                "stroke-opacity": .8
            },
            hover: {
                stroke: "F8E23B",
                "stroke-width": 7
            }
        },
        backgroundColor: 'transparent',
        markers: [
            {latLng: [41.90, 12.45], name: 'Vatican City'},
            {latLng: [-0.52, 166.93], name: 'Nauru'},
            {latLng: [-8.51, 179.21], name: 'Tuvalu'},
            {latLng: [47.14, 9.52], name: 'Liechtenstein'},
            {latLng: [7.11, 171.06], name: 'Marshall Islands'},
            {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
            {latLng: [3.2, 73.22], name: 'Maldives'},
            {latLng: [35.88, 14.5], name: 'Malta'},
            {latLng: [12.05, -61.75], name: 'Grenada'},
            {latLng: [-4.61, 55.45], name: 'Seychelles'},
            {latLng: [7.35, 134.46], name: 'Palau'},
            {latLng: [42.5, 1.51], name: 'Andorra'},
            {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
            {latLng: [1.3, 103.8], name: 'Singapore'},
            {latLng: [1.46, 173.03], name: 'Kiribati'},
            {latLng: [-21.13, -175.2], name: 'Tonga'},
            {latLng: [-20.2, 57.5], name: 'Mauritius'},
            {latLng: [26.02, 50.55], name: 'Bahrain'},
            {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
        ]
    });

    var map,
        markers = [
            {latLng: [52.50, 13.39], name: 'Berlin'},
            {latLng: [53.56, 10.00], name: 'Hamburg'},
            {latLng: [48.13, 11.56], name: 'Munich'},
            {latLng: [50.95, 6.96], name: 'Cologne'},
            {latLng: [50.11, 8.68], name: 'Frankfurt am Main'},
            {latLng: [48.77, 9.17], name: 'Stuttgart'},
            {latLng: [51.23, 6.78], name: 'Düsseldorf'},
            {latLng: [51.51, 7.46], name: 'Dortmund'},
            {latLng: [51.45, 7.01], name: 'Essen'},
            {latLng: [53.07, 8.80], name: 'Bremen'}
        ],
        cityAreaData = [
            887.70,
            755.16,
            310.69,
            405.17,
            248.31,
            207.35,
            217.22,
            280.71,
            210.32,
            325.42
        ]

    map = new jvm.WorldMap({
        container: $('#map'),
        map: 'de_merc_en',
        regionsSelectable: true,
        markersSelectable: true,
        markers: markers,
        markerStyle: {
            initial: {
                fill: '#4DAC26'
            },
            selected: {
                fill: '#CA0020'
            }
        },
        regionStyle: {
            initial: {
                fill: '#B8E186'
            },
            selected: {
                fill: '#F4A582'
            }
        },
        series: {
            markers: [
                {
                    attribute: 'r',
                    scale: [5, 15],
                    values: cityAreaData
                }
            ]
        },
        onRegionSelected: function () {
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-regions',
                    JSON.stringify(map.getSelectedRegions())
                );
            }
        },
        onMarkerSelected: function () {
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-markers',
                    JSON.stringify(map.getSelectedMarkers())
                );
            }
        }
    });
    map.setSelectedRegions(JSON.parse(window.localStorage.getItem('jvectormap-selected-regions') || '[]'));
    map.setSelectedMarkers(JSON.parse(window.localStorage.getItem('jvectormap-selected-markers') || '[]'));

});

