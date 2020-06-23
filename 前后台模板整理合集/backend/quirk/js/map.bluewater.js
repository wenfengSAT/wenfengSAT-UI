$(function() {

  'use strict';

  var styleBlueWater = [{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#444444"
    }]
  }, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
      "color": "#f2f2f2"
    }]
  }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
      "saturation": -100
    }, {
      "lightness": 45
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{
      "visibility": "simplified"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
      "color": "#46bcec"
    }, {
      "visibility": "on"
    }]
  }];

  var mapBlueWater = new GMaps({
    el: '#mapBlueWater',
    zoom: 14,
    lat: 40.702247,
    lng: -73.996349
  });


  // Map style is based on:
  // https://snazzymaps.com/style/4183/mostly-grayscale
  mapBlueWater.addStyle({
    styledMapName:"Blue Water Map",
    styles: styleBlueWater,
    mapTypeId: "map_blue_water"
  });

  mapBlueWater.setStyle("map_blue_water");

});
