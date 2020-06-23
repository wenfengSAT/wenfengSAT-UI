$(function() {

  'use strict';

  var styleShadesOfGrey = [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
      "saturation": 36
    }, {
      "color": "#000000"
    }, {
      "lightness": 40
    }]
  }, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#000000"
    }, {
      "lightness": 16
    }]
  }, {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 20
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 17
    }, {
      "weight": 1.2
    }]
  }, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 20
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 21
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 17
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 29
    }, {
      "weight": 0.2
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 18
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 16
    }]
  }, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 19
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 17
    }]
  }];

  var mapShadesOfGrey = new GMaps({
    el: '#mapShadesOfGrey',
    zoom: 14,
    lat: 40.702247,
    lng: -73.996349
  });


  // Map style is based on:
  // https://snazzymaps.com/style/4183/mostly-grayscale
  mapShadesOfGrey.addStyle({
    styledMapName:"Shades Of Grey Map",
    styles: styleShadesOfGrey,
    mapTypeId: "map_shades_of_grey"
  });

  mapShadesOfGrey.setStyle("map_shades_of_grey");

});
