var BlankonVectorMap = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonVectorMap.mapWorld();
            BlankonVectorMap.mapUSA();
            BlankonVectorMap.mapRusia();
            BlankonVectorMap.mapAlgeria();
            BlankonVectorMap.mapGermany();
            BlankonVectorMap.mapContinents();
        },

        // =========================================================================
        // WORLD MAP
        // =========================================================================
        mapWorld: function () {
            if($('#world-map').length){
                $('#world-map').vectorMap({
                    map: 'world_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#E9573F',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#81b71a', '#8CC152'],
                    normalizeFunction: 'polynomial'
                });
            }
        },

        // =========================================================================
        // USA MAP
        // =========================================================================
        mapUSA: function () {
            if($('#usa-map').length){
                $('#usa-map').vectorMap({
                    map: 'usa_en',
                    enableZoom: true,
                    showTooltip: true,
                    selectedRegion: 'MO',
                    backgroundColor: null,
                    selectedColor: '#81b71a'
                });
            }
        },

        // =========================================================================
        // RUSIA MAP
        // =========================================================================
        mapRusia: function () {
            if($('#rusia-map').length){
                $('#rusia-map').vectorMap({
                    map: 'russia_en',
                    backgroundColor: null,
                    selectedColor: '#81b71a',
                    enableZoom: true,
                    showTooltip: true
                });
            }
        },

        // =========================================================================
        // ALGERIA MAP
        // =========================================================================
        mapAlgeria: function () {
            if($('#algeria-map').length){
                $('#algeria-map').vectorMap({
                    map: 'dz_fr',
                    enableZoom: true,
                    showTooltip: true,
                    backgroundColor: null,
                    selectedColor: '#81b71a'
                });
            }
        },

        // =========================================================================
        // GERMANY MAP
        // =========================================================================
        mapGermany: function () {
            if($('#germany-map').length){
                $('#germany-map').vectorMap({
                    map: 'germany_en',
                    backgroundColor: null,
                    selectedColor: '#81b71a',
                    onRegionClick: function(element, code, region)
                    {
                        var message = 'You clicked "'
                            + region
                            + '" which has the code: '
                            + code.toUpperCase();

                        alert(message);
                    }
                });
            }
        },

        // =========================================================================
        // CONTINENTS MAP
        // =========================================================================
        mapContinents: function () {
            if($('#continents').length){
                // Optimalisation: Store the references outside the event handler:
                var $window = $(window);
                function checkWidth() {
                    var windowsize = $window.width();
                    // Check if view screen on greater then 720px and smaller then 1024px
                    if (windowsize > 1024) {
                        $('.map-continent').width(752);
                    }
                    if (windowsize < 800) {
                        $('.map-continent').width(500);
                    }
                    if (windowsize < 500) {
                        $('.map-continent').width(280);
                    }
                }
                // Execute on load
                checkWidth();
                // Bind event listener
                $(window).resize(checkWidth);
                $('#asia-map').vectorMap({
                    map: 'asia_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#81b71a', '#8CC152'],
                    normalizeFunction: 'polynomial'
                });
                $('#europe-map').vectorMap({
                    map: 'europe_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#E9573F', '#ba4a34'],
                    normalizeFunction: 'polynomial'
                });
                $('#australia-map').vectorMap({
                    map: 'australia_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#C8EEFF', '#006491'],
                    normalizeFunction: 'polynomial'
                });
                $('#africa-map').vectorMap({
                    map: 'africa_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#37BC9B', '#28846e'],
                    normalizeFunction: 'polynomial'
                });
                $('#northamerica-map').vectorMap({
                    map: 'north-america_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#906094', '#6e4972'],
                    normalizeFunction: 'polynomial'
                });
                $('#southamerica-map').vectorMap({
                    map: 'south-america_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#5577B4', '#455b8c'],
                    normalizeFunction: 'polynomial'
                });
            }
        }

    };

}();

// Call main app init
BlankonVectorMap.init();


