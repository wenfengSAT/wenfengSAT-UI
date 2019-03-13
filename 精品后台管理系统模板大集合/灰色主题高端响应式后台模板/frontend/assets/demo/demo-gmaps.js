/**
 * Basic Map
 */
$(document).ready(function () {

    //Basic Maps
    var map = new GMaps({
        el:'#basic-map',
        lat:-12.043333,
        lng:-77.028333
    });

    GMaps.geolocate({
        success:function (position) {
            map.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error:function (error) {
            alert('Geolocation failed: ' + error.message);
        },
        not_supported:function () {
            alert("Your browser does not support geolocation");
        }
    });

//advance  Route
    var route = new GMaps({
        el:'#advance-route',
        lat:-12.043333,
        lng:-77.028333
    });

    $('#start_travel').click(function (e) {
        e.preventDefault();
        route.travelRoute({
            origin:[-12.044012922866312, -77.02470665341184],
            destination:[-12.090814532191756, -77.02271108990476],
            travelMode:'driving',
            step:function (e) {
                $('#instructions').append('<li>' + e.instructions + '</li>');
                $('#instructions li:eq(' + e.step_number + ')').delay(450 * e.step_number).fadeIn(200, function () {
                    route.setCenter(e.end_location.lat(), e.end_location.lng());
                    route.drawPolyline({
                        path:e.path,
                        strokeColor:'#131540',
                        strokeOpacity:0.6,
                        strokeWeight:6
                    });
                });
            }
        });
    });


    //street view panaroma
    var panorama = GMaps.createPanorama({
        el:'#panorama',
        lat:42.3455,
        lng:-71.0983
    });

//fusion table
    var fusion, infoWindow;

    infoWindow = new google.maps.InfoWindow({});
    fusion = new GMaps({
        el:'#fusion',
        zoom:11,
        lat:41.850033,
        lng:-87.6500523
    });

    fusion.loadFromFusionTables({
        query:{
            select:'\'Geocodable address\'',
            from:'1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg'
        },
        suppressInfoWindows:true,
        events:{
            click:function (point) {
                infoWindow.setContent('You clicked here!');
                infoWindow.setPosition(point.latLng);
                infoWindow.open(fusion.map);
            }
        }
    });


    //polyLInes

    path = [[-12.044012922866312, -77.02470665341184], [-12.05449279282314, -77.03024273281858], [-12.055122327623378, -77.03039293652341], [-12.075917129727586, -77.02764635449216], [-12.07635776902266, -77.02792530422971], [-12.076819390363665, -77.02893381481931], [-12.088527520066453, -77.0241058385925], [-12.090814532191756, -77.02271108990476]];

    var  polylines = new GMaps({
        el: '#polylines',
        lat: -12.043333,
        lng: -77.028333,
        click: function(e){
            console.log(e);
        }
    });

    polylines.drawPolyline({
        path: path,
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6
    });

    //geo coding

    var geoCoding = new GMaps({
        el: '#geocoding',
        lat: -12.043333,
        lng: -77.028333
    });
    $('#geocoding_form').submit(function(e){
        e.preventDefault();
        GMaps.geocode({
            address: $('#address').val().trim(),
            callback: function(results, status){
                if(status=='OK'){
                    var latlng = results[0].geometry.location;
                    geoCoding.setCenter(latlng.lat(), latlng.lng());
                    geoCoding.addMarker({
                        lat: latlng.lat(),
                        lng: latlng.lng()
                    });
                }
            }
        });
    });

    //polygons

    var polygons = new GMaps({
        el: '#polygons',
        lat: -12.043333,
        lng: -77.028333
    });

    var path = [[-12.040397656836609,-77.03373871559225],
        [-12.040248585302038,-77.03993927003302],
        [-12.050047116528843,-77.02448169303511],
        [-12.044804866577001,-77.02154422636042]];

    polygon = polygons.drawPolygon({
        paths: path,
        strokeColor: '#BBD8E9',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#BBD8E9',
        fillOpacity: 0.6
    });
});

