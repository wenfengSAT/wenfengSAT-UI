$( document ).ready(function() {
    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(40.7033127,-73.979681,10),
            zoom: 9
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions); 
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    
});
