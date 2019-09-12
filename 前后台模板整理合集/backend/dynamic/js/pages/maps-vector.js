//------------- maps-vector.js -------------//
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

	//------------- Vector maps -------------//
	$('#world-map-markers').vectorMap({
	    map: 'world_mill_en',
	    scaleColors: ['#f7f9fe', '#29b6d8'],
	    normalizeFunction: 'polynomial',
	    hoverOpacity: 0.7,
	    hoverColor: false,
		focusOn:{
			x: 0.5,
			y: 0.5,
			scale: 2.0
		},
		zoomMin:0.85,
	    markerStyle: {
	      initial: {
	        fill: '#df6a78',
	        stroke: '#df6a78'
	      }
	    },
	    backgroundColor: '#fff',
	    regionStyle:{
			initial: {
				fill: '#dde1e7',
				"fill-opacity": 1,
				stroke: '#f7f9fe',
				"stroke-width": 0,
				"stroke-opacity": 0
			},
			hover: {
				"fill-opacity": 0.8
			},
			selected: {
				fill: 'yellow'
			}
		},
	    markers: [
	    	//http://www.latlong.net/
			{latLng: [51.507351, -0.127758], name: 'London'},
			{latLng: [41.385064, 2.173403], name: 'Barcelona'},
			{latLng: [40.712784, -74.005941], name: 'New York'},
			{latLng: [-22.911632, -43.188286], name: 'Rio De Janeiro'},
			{latLng: [49.282729, -123.120738], name: 'Vancuver'},
			{latLng: [35.689487, 139.691706], name: 'Tokio'},
			{latLng: [55.755826, 37.617300], name: 'Moskva'},
			{latLng: [43.214050, 27.914733], name: 'Varna'},
			{latLng: [30.044420, 31.235712], name: 'Cairo'}			
	    ]
	});
	
});