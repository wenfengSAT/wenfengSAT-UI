$(function() {

  'use strict';

  var styleShiftWorker = [{
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [{
      "visibility": "on"
    }, {
      "lightness": 33
    }]
  }, {
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [{
      "saturation": "-100"
    }]
  }, {
    "featureType": "administrative",
    "elementType": "labels.text",
    "stylers": [{
      "gamma": "0.75"
    }]
  }, {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.fill",
    "stylers": [{
      "lightness": "-37"
    }]
  }, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
      "color": "#f9f9f9"
    }]
  }, {
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [{
      "saturation": "-100"
    }, {
      "lightness": "40"
    }, {
      "visibility": "off"
    }]
  }, {
    "featureType": "landscape.natural",
    "elementType": "labels.text.fill",
    "stylers": [{
      "saturation": "-100"
    }, {
      "lightness": "-37"
    }]
  }, {
    "featureType": "landscape.natural",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "saturation": "-100"
    }, {
      "lightness": "100"
    }, {
      "weight": "2"
    }]
  }, {
    "featureType": "landscape.natural",
    "elementType": "labels.icon",
    "stylers": [{
      "saturation": "-100"
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "saturation": "-100"
    }, {
      "lightness": "80"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{
      "saturation": "-100"
    }, {
      "lightness": "0"
    }]
  }, {
    "featureType": "poi.attraction",
    "elementType": "geometry",
    "stylers": [{
      "lightness": "-4"
    }, {
      "saturation": "-100"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
      "color": "#c5dac6"
    }, {
      "visibility": "on"
    }, {
      "saturation": "-95"
    }, {
      "lightness": "62"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [{
      "visibility": "on"
    }, {
      "lightness": 20
    }]
  }, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
      "lightness": 20
    }]
  }, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{
      "saturation": "-100"
    }, {
      "gamma": "1.00"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text",
    "stylers": [{
      "gamma": "0.50"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [{
      "saturation": "-100"
    }, {
      "gamma": "0.50"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
      "color": "#c5c6c6"
    }, {
      "saturation": "-100"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
      "lightness": "-13"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [{
      "lightness": "0"
    }, {
      "gamma": "1.09"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
      "color": "#e4d7c6"
    }, {
      "saturation": "-100"
    }, {
      "lightness": "47"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [{
      "lightness": "-12"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
      "saturation": "-100"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
      "color": "#fbfaf7"
    }, {
      "lightness": "77"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [{
      "lightness": "-5"
    }, {
      "saturation": "-100"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [{
      "saturation": "-100"
    }, {
      "lightness": "-15"
    }]
  }, {
    "featureType": "transit.station.airport",
    "elementType": "geometry",
    "stylers": [{
      "lightness": "47"
    }, {
      "saturation": "-100"
    }]
  }, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#acbcc9"
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "saturation": "53"
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
      "lightness": "-42"
    }, {
      "saturation": "17"
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "lightness": "61"
    }]
  }];

  var mapShiftWorker = new GMaps({
    el: '#mapShiftWorker',
    zoom: 14,
    lat: 40.702247,
    lng: -73.996349
  });

  // Map style is based on:
  // https://snazzymaps.com/style/4183/mostly-grayscale
  mapShiftWorker.addStyle({
    styledMapName:"Shift Worker Map",
    styles: styleShiftWorker,
    mapTypeId: "map_shift_worker"
  });

  mapShiftWorker.setStyle("map_shift_worker");


  var mapShiftWorker2 = new GMaps({
    el: '#mapShiftWorker2',
    zoom: 14,
    lat: 40.702247,
    lng: -73.996349
  });

  // Map style is based on:
  // https://snazzymaps.com/style/4183/mostly-grayscale
  mapShiftWorker2.addStyle({
    styledMapName:"Shift Worker Map",
    styles: styleShiftWorker,
    mapTypeId: "map_shift_worker"
  });

  mapShiftWorker2.setStyle("map_shift_worker");

});
