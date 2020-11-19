// **---------------
// Jquery Vector Map
// **---------------
    var mBlue = {
            fill: 'rgba(255,255,255,0.6)',
            stroke: '#039be5'
        },
        mRed = {
            fill: 'rgba(255,255,255,0.6)',
            stroke: '#ef9a9a'
        },
        mOrange = {
            fill: 'rgba(255,255,255,0.6)',
            stroke: '#ff5722'
        },
        mDark = {
            fill: 'rgba(255,255,255,0.6)',
            stroke: '#455a64'
        };
    var map,
        markers = [{
            latLng: [-25.274398, 133.775136],
            name: 'AU - 8000',
            style: mBlue
        }, {
            latLng: [23.684994, 90.356331],
            name: 'BD - 2500',
            style: mBlue
        }, {
            latLng: [55.378051, -3.435973],
            name: 'GB - 3100',
            style: mRed
        }, {
            latLng: [20.593684, 78.96288],
            name: 'IN - 4000',
            style: mRed
        }, {
            latLng: [61.52401, 105.318756],
            name: 'RU - 6800',
            style: mOrange
        }, {
            latLng: [56.130366, -106.346771],
            name: 'CA - 5200',
            style: mOrange
        }, {
            latLng: [37.09024, -95.712891],
            name: 'US - 4200',
            style: mBlue
        }, {
            latLng: [35.86166, 104.195397],
            name: 'CH - 2800',
            style: mDark
        }],
        cityAreaData = [
            8000,
            2500,
            3100,
            4000,
            6800,
            5200,
            4200,
            2800
        ]

    map = new jvm.Map({
        container: $('#regional-visitors'),
        map: 'world_mill',
        regionsSelectable: true,
        markersSelectable: true,
        zoomOnScroll: false,
        markers: markers,
        markerStyle: {
            initial: {
                fill: '#4DAC26',
                "stroke-width": 2
            },
            hover: {
                fill: 'rgba(255,255,255,0.6',
                stroke: '#0097a7',
                "stroke-width": 3
            },
            selected: {
                fill: 'rgba(255,255,255,0.1)',
                "stroke-width": 4
            }
        },
        regionStyle: {
            initial: {
                fill: '#cfd8dc'
            },
            selected: {
                fill: '#4dd0e1'
            }
        },
        series: {
            markers: [{
                attribute: 'r',
                scale: [5, 15],
                values: cityAreaData
            }]
        },
        backgroundColor: '#fff',
        onRegionSelected: function() {
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-regions',
                    JSON.stringify(map.getSelectedRegions())
                );
            }
        },
        onMarkerSelected: function() {
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-markers',
                    JSON.stringify(map.getSelectedMarkers())
                );
            }
        }
    });
    // map.setSelectedRegions(JSON.parse(window.localStorage.getItem('jvectormap-selected-regions') || '[]'));
    // map.setSelectedMarkers(JSON.parse(window.localStorage.getItem('jvectormap-selected-markers') || '[]'));
