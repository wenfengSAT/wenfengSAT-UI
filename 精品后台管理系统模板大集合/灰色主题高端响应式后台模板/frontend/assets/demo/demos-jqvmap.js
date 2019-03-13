jQuery(document).ready(function() {
    jQuery('#worldmap').vectorMap({
        map: 'world_en',
        backgroundColor: 'transparent',
        color: '#f5f5f5',
        hoverOpacity: 0.7,
        selectedColor: '#0264d2',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#7cb4f2', '#1e80ee'],
        normalizeFunction: 'polynomial'
    });

    jQuery('#usamap').vectorMap({
        map: 'usa_en',
        backgroundColor: 'transparent',
        color: '#509BBD',
        hoverOpacity: 0.7,
        selectedColor: '#1278a6',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#C8EEFF', '#006491'],
        normalizeFunction: 'polynomial'
    });

    jQuery('#euromap').vectorMap({
        map: 'europe_en',
        backgroundColor: 'transparent',
        color: '#dddddd',
        hoverOpacity: 0.7,
        selectedColor: '#1dda1d',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#b6ddb7', '#51d951'],
        normalizeFunction: 'polynomial'
    });

    jQuery('#germanymap').vectorMap({
        map: 'germany_en',
        backgroundColor: 'transparent',
        color: '#dddddd',
        hoverOpacity: 0.7,
        selectedColor: '#1dda1d',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#b6ddb7', '#51d951'],
        normalizeFunction: 'polynomial'
    });


    jQuery('#russiamap').vectorMap({
        map: 'russia_en',
        backgroundColor: 'transparent',
        color: '#dddddd',
        hoverOpacity: 0.7,
        selectedColor: '#1dda1d',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#b6ddb7', '#51d951'],
        normalizeFunction: 'polynomial'
    });


    jQuery('#francemap').vectorMap({
        map: 'france_fr',
        backgroundColor: 'transparent',
        color: '#dddddd',
        hoverOpacity: 0.7,
        selectedColor: '#1dda1d',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#b6ddb7', '#51d951'],
        normalizeFunction: 'polynomial'
    });


    jQuery('#algeriamap').vectorMap({
        map: 'dz_fr',
        backgroundColor: 'transparent',
        color: '#dddddd',
        hoverOpacity: 0.7,
        selectedColor: '#1dda1d',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#b6ddb7', '#51d951'],
        normalizeFunction: 'polynomial'
    });
});