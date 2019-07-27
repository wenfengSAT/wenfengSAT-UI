function initialize()
{
	
	
	/*****************************************
	Simple Map
	*****************************************/
	var simpleMapProp = {
	  center:new google.maps.LatLng(51.508742,-0.120850),
	  zoom:5,
	  mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var simpleMap = new google.maps.Map(document.getElementById("simpleMap"), simpleMapProp);

	
	
	/*****************************************
	Weather Map
	*****************************************/
	var weatherMapProp = {
	zoom: 6,
	center: new google.maps.LatLng(49.265984,-123.127491)
	};
	
	var weatherMap = new google.maps.Map(document.getElementById('weatherMap'), weatherMapProp);
	
	var weatherLayer = new google.maps.weather.WeatherLayer({
		temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
	});
	weatherLayer.setMap(weatherMap);
	
	var cloudLayer = new google.maps.weather.CloudLayer();
	cloudLayer.setMap(weatherMap);
	
	
	
	/*****************************************
	Traffic Map
	*****************************************/
	var trafficMapProp = {
	zoom: 13,
	center: new google.maps.LatLng(34.04924594193164, -118.24104309082031)
	}
	
	var trafficMap = new google.maps.Map(document.getElementById('trafficMap'), trafficMapProp);
	
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(trafficMap);
	
	
	
	

	
	
	/*****************************************
	Street View Map
	*****************************************/
	var panoMapProp = {
	  position: new google.maps.LatLng(42.345573,-71.098326),
	  addressControlOptions: {
		position: google.maps.ControlPosition.BOTTOM
	  },
	  linksControl: false,
	  panControl: false,
	  zoomControlOptions: {
		style: google.maps.ZoomControlStyle.SMALL
	  },
	  enableCloseButton: false
	};

	var panorama = new google.maps.StreetViewPanorama( document.getElementById('streetviewMap'), panoMapProp);
	
	
	
	/*****************************************
	Transit Map
	*****************************************/
	var transitMapProp = {
	zoom: 13,
	center: new google.maps.LatLng(51.501904,-0.115871)
	}
	
	var transitMap = new google.maps.Map(document.getElementById('transitMap'), transitMapProp);
	
	var transitLayer = new google.maps.TransitLayer();
	transitLayer.setMap(transitMap);




}






google.maps.event.addDomListener(window, 'load', initialize);