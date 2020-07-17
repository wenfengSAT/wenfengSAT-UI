

    jQuery('#world-vmap').vectorMap({
        map: 'world_en',
        backgroundColor: null,
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        borderWidth:1,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#a4a4a4', '#eaeaea'],
        normalizeFunction: 'polynomial'
    });


 jQuery(document).ready(function() {
   
        jQuery('#europe-vmap').vectorMap({
            map: 'europe_en',
            backgroundColor: null,
            color: '#ffffff',
            borderWidth:1,
            hoverOpacity: 0.7,
            selectedColor: '#666666',
            enableZoom: true,
            showTooltip: true,
            values: sample_data,
            scaleColors: ['#a4a4a4', '#eaeaea'],
            normalizeFunction: 'polynomial'
        });
 




        jQuery('#asia-vmap').vectorMap({
            map: 'asia_en',
            backgroundColor: null,
            color: '#ffffff',
            borderWidth:1,
            hoverOpacity: 0.7,
            selectedColor: '#666666',
            enableZoom: true,
            showTooltip: true,
            values: sample_data,
            scaleColors: ['#a4a4a4', '#eaeaea'],
            normalizeFunction: 'polynomial'
        });



        jQuery('#australia-vmap').vectorMap({
            map: 'australia_en',
            backgroundColor: null,
            color: '#ffffff',
            borderWidth:1,
            hoverOpacity: 0.7,
            selectedColor: '#666666',
            enableZoom: true,
            showTooltip: true,
            values: sample_data,
            scaleColors: ['#a4a4a4', '#eaeaea'],
            normalizeFunction: 'polynomial'
        });

 });