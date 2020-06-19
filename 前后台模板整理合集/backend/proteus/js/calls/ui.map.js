/*  ==========================================================================
    Table of Content for Maps:

    === Function ===
	- runGoogleMap


    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runGoogleMap
    ========================================================================== */
function runGoogleMap(map, type){

    switch(type){

        case 'basic':
            new GMaps({
              div: map,
              lat: 40.7056308,
              lng: -73.9780035
            });
        break;

        case 'marker':
            var myMap = new GMaps({
                div: map,
                lat: 40.7590615,
                lng: -73.969231
            });

            myMap.addMarker({
                lat: myMap.getCenter().lat(),
                lng: myMap.getCenter().lng(),
                title: 'Manhattan',
                infoWindow: {
                    content: '<p>Manhattan</p>'
                }
            });
        break;

        case 'overlay':
            var myMap = new GMaps({
                div: map,
                lat: 40.4169163,
                lng: -3.702427
            });

            myMap.drawOverlay({
                lat: myMap.getCenter().lat(),
                lng: myMap.getCenter().lng(),
                content: '<div class="map-overlay">Puerta de Sol</div>',
                verticalAlign: 'top',
                horizontalAlign: 'center'
            });
        break;

        case 'static':
            var url = GMaps.staticMapURL({
                size: [640, 300],
                lat: 47.49682,
                lng: 19.03744
            });

            $('<img/>').attr('src', url).appendTo(map);


        break;
    }

}

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var gmap_1 = '#gmap_1';
    var gmap_2 = '#gmap_2';
    var gmap_3 = '#gmap_3';
    var gmap_4 = '#gmap_4';


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runGoogleMap(gmap_1,'basic');
    runGoogleMap(gmap_2,'marker');
    runGoogleMap(gmap_3,'overlay');
    runGoogleMap(gmap_4,'static');

});