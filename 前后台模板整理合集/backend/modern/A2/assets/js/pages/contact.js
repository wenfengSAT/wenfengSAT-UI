$( document ).ready(function() {
    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(27.284836,-81.075513),
            zoom: 9
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions); 
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});