/**
 * Created by mosaddek on 2/27/15.
 */

var cityAreaData = [
    500.70,
    410.16,
    210.69,
    120.17,
    64.31,
    150.35,
    130.22,
    120.71,
    300.32
]
$('#world-map').vectorMap({
    map: 'world_mill_en',
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    focusOn: {
        x: 5,
        y: 1,
        scale:.85
    },
    zoomOnScroll: false,
    zoomMin: 0.65,
    hoverColor: false,
    regionStyle: {
        initial: {
            fill: '#dddddd',
            "fill-opacity": 1,
            stroke: '#dddddd',
            "stroke-width": 0,
            "stroke-opacity": 0
        },
        hover: {
            "fill-opacity": 0.6
        }
    },
    markerStyle: {
        initial: {
            fill: '#a38cd2 ',
            stroke: 'rgba(212,204,227,.8)',
            "fill-opacity": 1,
            "stroke-width": 8,
            "stroke-opacity": 0.8,
            r: 3
        },
        hover: {
            stroke: 'rgba(212,204,227,1)',
            "stroke-width": 10
        },
        selected: {
            fill: 'blue'
        },
        selectedHover: {}
    },
    backgroundColor: '#ffffff',
    markers: [

        {
            latLng: [54.525961, 15.255119],
            name: 'Europe'
        }, {
            latLng: [-25.274398, 133.775136],
            name: 'Australia'
        }, {
            latLng: [-4.442038, -61.326854],
            name: 'Latin America'
        }

    ],
    series: {
        markers: [{
            attribute: 'r',
            scale: [3, 7],
            values: cityAreaData
        }]
    }
});