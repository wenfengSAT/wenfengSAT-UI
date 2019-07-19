/* file:           maps.js
 * version:        1.3
 * last changed:   23.03.2014
 * description:    Map inits
*/

$(document).ready(function(){

    /* jVectorMaps */    
    var europe_markers = [{latLng: [52, 21], name: 'Warszawa: 5'},
                            {latLng: [50.27, 30.31], name: 'Kyiv: 8'},
                            {latLng: [53.54, 27.34], name: 'Minsk: 1'},
                            {latLng: [56.56, 24.6], name: 'Riga: 3'},
                            {latLng: [54.41, 25.17], name: 'Vilnius: 5'},
                            {latLng: [59.26, 24.44], name: 'Tallinn: 2'},                                                                                                                  
                            {latLng: [52.52, 13.40], name: 'Berlin: 3'},
                            {latLng: [55.68, 12.57], name: 'Copenhagen: 1'},
                            {latLng: [44.43, 26.1], name: 'Bucharest: 1'},
                            {latLng: [41.9, 12.48], name: 'Rome: 3'},
                            {latLng: [52.37, 4.90], name: 'Amsterdam: 15'},
                            {latLng: [48.85, 2.35], name: 'Paris: 7'},
                            {latLng: [40.42, -3.70], name: 'Madrid: 5'},
                            {latLng: [51.51, -0.13], name: 'London: 12'},                                                        
                            {latLng: [59.33, 18.06], name: 'Stockholm: 2'},                                                             
                            {latLng: [55.75, 37.62], name: 'Moscow: 7'}];
    
    gMap = {
        init: function(){
            if($("#vector_map").length > 0){
                var init_jvm_wm = function(){

                    var jvm_wm = new jvm.WorldMap({container: $('#vector_map'),
                                                map: 'world_mill_en', 
                                                backgroundColor: '#f0eff5',                                      
                                                regionsSelectable: true,
                                                regionStyle: {selected: {fill: '#1CAF9A'},
                                                                initial: {fill: '#33414E'}},
                                                onRegionSelected: function(){
                                                    $("#vector_world_map_value").val(jvm_wm.getSelectedRegions().toString());                                          
                                                }
                                            });                         
                }
                init_jvm_wm();
            }

            if($("#europe-map").length > 0){
                var init_europe = function(){        
                    $('#europe-map').vectorMap({map: 'europe_mill_en', 
                                                backgroundColor: false,                                      
                                                regionsSelectable: true,                                    
                                                zoomOnScroll: false,
                                                regionStyle: {selected: {fill: '#1CAF9A'},
                                                              initial: {fill: '#33414E'}},
                                                markerStyle: {initial: {fill: '#2f9fe0',
                                                                        stroke: '#FFFFFF'}},
                                                              markers: europe_markers                                                           
                                              });                         
                    $('#europe-map').vectorMap('set', 'focus', 1.8, 0.4, 0.6);
                }
                init_europe();
            }                    
            
            /* Google maps */
            if($("#main-map-google").length > 0){
                var gKyivCords = new google.maps.LatLng(50.43, 30.60); 
                var gKyivOptions = {zoom: 10,center: gKyivCords, mapTypeId: google.maps.MapTypeId.ROADMAP}    
                var gKyiv = new google.maps.Map(document.getElementById("main-map-google"), gKyivOptions);    

                var kcords = new google.maps.LatLng(50.43, 30.60);
                var kmarker = new google.maps.Marker({position: kcords, map: gKyiv, title: "Conference place"});        
            }
            if($("#google_map").length > 0){

                function google_map_search() {

                    var gSearch = new google.maps.Map(document.getElementById('google_map'), {
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    });

                    var defaultBounds = new google.maps.LatLngBounds(
                        new google.maps.LatLng(-33.8902, 151.1759),
                        new google.maps.LatLng(-33.8474, 151.2631));

                    gSearch.fitBounds(defaultBounds);

                    var input = (document.getElementById('google_map_search'));

                    var searchBox = new google.maps.places.SearchBox(input);
                    var markers = [];

                    google.maps.event.addListener(searchBox, 'places_changed', function() {
                        var places = searchBox.getPlaces();

                        for (var i = 0, marker; marker = markers[i]; i++) {
                        marker.setMap(null);
                        }

                        markers = [];
                        var bounds = new google.maps.LatLngBounds();
                        for (var i = 0, place; place = places[i]; i++) {
                        var image = {
                            url: place.icon,
                            size: new google.maps.Size(71, 71),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(17, 34),
                            scaledSize: new google.maps.Size(25, 25)
                        };

                        var marker = new google.maps.Marker({
                            map: gSearch,
                            icon: image,
                            title: place.name,
                            position: place.geometry.location
                        });

                        markers.push(marker);

                        bounds.extend(place.geometry.location);
                        }

                        gSearch.fitBounds(bounds);
                    });

                    google.maps.event.addListener(gSearch, 'bounds_changed', function() {
                        var bounds = gSearch.getBounds();
                        searchBox.setBounds(bounds);
                    });
                }

                google.maps.event.addDomListener(window, 'load', google_map_search);    

            }
            /* EOF Google maps */            
            
            $.updateMaps = function(){
        
                if($("#europe-map").length > 0){
                    $("#europe-map").off().empty();
                    init_europe();
                }
                if($("#vector_map").length > 0){
                    $("#vector_map").off().empty();
                    init_jvm_wm();
                }

            }
            
        }
    }    
    gMap.init();

});

function gMaps(){
    gMap.init();
}