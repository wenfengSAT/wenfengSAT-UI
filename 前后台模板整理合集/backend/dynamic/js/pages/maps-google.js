//------------- maps-google.js -------------//
$(document).ready(function() {

	//------------- Sparklines in header stats -------------//
    $('#spark-visitors').sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8], {
        type: 'bar',
        width: '100%',
        height: '20px',
        barColor: '#dfe2e7',
        zeroAxis: false,
    });

    $('#spark-templateviews').sparkline([12,11,6,13,8,5,8,10,12,11,6,13,8,5,8,10,12,11,6,13,8,5,8], {
        type: 'bar',
        width: '100%',
        height: '20px',
        barColor: '#dfe2e7',
        zeroAxis: false,
    });

    $('#spark-sales').sparkline([19,18,20,17,20,18,22,24,23,19,18,20,17,20,18,22,24,23,19,18,20,17], {
        type: 'bar',
        width: '100%',
        height: '20px',
        barColor: '#dfe2e7',
        zeroAxis: false,
    });
	
	//------------- Google maps -------------//
	//basic map
	var bmap = new GMaps({
        el: '#gmap',
        lat: -12.043333,
        lng: -77.028333,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
    });

    //geolocation
    var gmap = new GMaps({
        el: '#gmap-geolocation',
        lat: -12.043333,
        lng: -77.028333
    });

    GMaps.geolocate({
        success: function(position){
          gmap.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error){
            $.gritter.add({
				title: 'Error !!!',
				text: 'Geolocation failed: '+error.message,
				close_icon: 'en-cross',
				icon: 'ec-location',
				class_name: 'error-notice'
			});	
        },
        not_supported: function(){
        	$.gritter.add({
				title: 'Error !!!',
				text: 'Your browser do not support geolocation',
				close_icon: 'en-cross',
				icon: 'ec-location',
				class_name: 'error-notice'
			});	
        },
        always: function(){
        	$.gritter.add({
				title: 'Done !!!',
				text: 'Your location is detected',
				close_icon: 'en-cross',
				icon: 'ec-location',
				class_name: 'success-notice'
			});		
        }
    });

    //routes
    var rmap = new GMaps({
        el: '#gmap-routes',
        lat: -12.043333,
        lng: -77.028333
    });
    rmap.drawRoute({
        origin: [-12.044012922866312, -77.02470665341184],
        destination: [-12.090814532191756, -77.02271108990476],
        travelMode: 'driving',
        strokeColor: '#db5565',
        strokeOpacity: 0.6,
        strokeWeight: 10
    });

    //street panorama
    panorama = GMaps.createPanorama({
		el: '#gmap-street-panorama',
		lat : 42.3455,
		lng : -71.0983
	});

});