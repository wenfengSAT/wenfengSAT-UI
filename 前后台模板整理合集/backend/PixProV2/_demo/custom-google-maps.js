var map;
function initialize() {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644),
		styles: [
			{
				"featureType": "water",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#acbcc9"
					}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
					{
						"color": "#f2e5d4"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#c5c6c6"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e4d7c6"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#fbfaf7"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#c5dac6"
					}
				]
			},
			{
				"featureType": "administrative",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 33
					}
				]
			},
			{
				"featureType": "road"
			},
			{
				"featureType": "poi.park",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 20
					}
				]
			},
			{},
			{
				"featureType": "road",
				"stylers": [
					{
						"lightness": 20
					}
				]
			}
		]
	};
	if (document.getElementById('map-canvas-1')) {
		map = new google.maps.Map(document.getElementById('map-canvas-1'), mapOptions);
	}
}

google.maps.event.addDomListener(window, 'load', initialize);

var map2;
function initialize2() {
	var mapOptions2 = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644),
		styles: [
			{
				"featureType": "landscape",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 65
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 51
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.highway",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 30
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road.local",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 40
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "administrative.province",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": -25
					},
					{
						"saturation": -100
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"hue": "#ffff00"
					},
					{
						"lightness": -25
					},
					{
						"saturation": -97
					}
				]
			}
		]
	};
	if (document.getElementById('map-canvas-2')) {
		map2 = new google.maps.Map(document.getElementById('map-canvas-2'), mapOptions2);
	}
}

google.maps.event.addDomListener(window, 'load', initialize2);

var map3;
function initialize3() {
	var mapOptions3 = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644),
		styles: [
			{
				"featureType": "water",
				"stylers": [
					{
						"color": "#021019"
					}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
					{
						"color": "#08304b"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#0c4152"
					},
					{
						"lightness": 5
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#0b434f"
					},
					{
						"lightness": 25
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#0b3d51"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 13
					}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
					{
						"color": "#146474"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#144b53"
					},
					{
						"lightness": 14
					},
					{
						"weight": 1.4
					}
				]
			}
		]
	};

	if (document.getElementById('map-canvas-3')) {
		map3 = new google.maps.Map(document.getElementById('map-canvas-3'), mapOptions3);
	}
}

google.maps.event.addDomListener(window, 'load', initialize3);

var map4;
function initialize4() {
	var mapOptions4 = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644),
		styles: [
			{
				"featureType": "water",
				"stylers": [
					{
						"color": "#46bcec"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
					{
						"color": "#f2f2f2"
					}
				]
			},
			{
				"featureType": "road",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					}
				]
			},
			{
				"featureType": "road.highway",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
					}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			}
		]
	};
	if (document.getElementById('map-canvas-4')) {
		map4 = new google.maps.Map(document.getElementById('map-canvas-4'), mapOptions4);
	}
}

google.maps.event.addDomListener(window, 'load', initialize4);


var map5;
function initialize5() {
	var mapOptions5 = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644),
		styles:[
			{
				"featureType": "administrative",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "water",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.highway",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.local",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "water",
				"stylers": [
					{
						"color": "#84afa3"
					},
					{
						"lightness": 52
					}
				]
			},
			{
				"stylers": [
					{
						"saturation": -17
					},
					{
						"gamma": 0.36
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#3f518c"
					}
				]
			}
		]
	};

	if (document.getElementById('map-canvas-5')) {
		map5 = new google.maps.Map(document.getElementById('map-canvas-5'), mapOptions5);
	}
}

google.maps.event.addDomListener(window, 'load', initialize5);


var map6;
function initialize6() {
	var mapOptions6 = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644),
		styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
	};
	if (document.getElementById('map-canvas-6')) {
		map6 = new google.maps.Map(document.getElementById('map-canvas-6'), mapOptions6);
	}
}

google.maps.event.addDomListener(window, 'load', initialize6);