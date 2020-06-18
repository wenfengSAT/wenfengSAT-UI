$(document).ready(function() {
    $('#world-vmap').vectorMap({
        map: 'world_en',
        backgroundColor: null,
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        borderWidth:1,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#795841', '#54bc75'],
        normalizeFunction: 'polynomial'
    });
    $('#asia-vmap').vectorMap({
        map: 'asia_en',
        backgroundColor: null,
        color: '#ffffff',
        borderWidth:1,
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: false,
        showTooltip: false,
        values: sample_data,
        scaleColors: ['#795841', '#54bc75'],
        normalizeFunction: 'polynomial'
    });
    $('#australia-vmap').vectorMap({
        map: 'australia_en',
        backgroundColor: null,
        color: '#ffffff',
        borderWidth:1,
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: false,
        showTooltip: false,
        values: sample_data,
        scaleColors: ['#795841', '#54bc75'],
        normalizeFunction: 'polynomial'
    });
});