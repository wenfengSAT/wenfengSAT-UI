/*Basic*/
    var map;
    $(document).ready(function(){
      map = new GMaps({
        div: '#gmaps-basic',
        lat: -12.043333,
        lng: -77.028333
      });
    });

/* Markers */
var map;
$(document).ready(function(){
  map = new GMaps({
    div: '#gmaps-markers',
    lat: -12.043333,
    lng: -77.028333
  });
  map.addMarker({
    lat: -12.043333,
    lng: -77.03,
    title: 'Lima',
    details: {
      database_id: 42,
      author: 'HPNeo'
    },
    click: function(e){
      if(console.log)
        console.log(e);
      alert('You clicked in this marker');
    }
  });
  map.addMarker({
    lat: -12.042,
    lng: -77.028333,
    title: 'Marker with InfoWindow',
    infoWindow: {
      content: '<p>HTML Content</p>'
    }
  });
});

/* Polygon */
var map;
$(document).ready(function(){
  map = new GMaps({
    div: '#gmaps-polygons',
    lat: -12.043333,
    lng: -77.028333
  });

  var path = [[-12.040397656836609,-77.03373871559225],
              [-12.040248585302038,-77.03993927003302],
              [-12.050047116528843,-77.02448169303511],
              [-12.044804866577001,-77.02154422636042]];

  polygon = map.drawPolygon({
    paths: path,
    strokeColor: '#BBD8E9',
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: '#BBD8E9',
    fillOpacity: 0.6
  });
});

/* Overlay */
var map;
$(document).ready(function(){
  map = new GMaps({
    div: '#gmaps-overlay',
    lat: -12.043333,
    lng: -77.028333
  });
  map.drawOverlay({
    lat: map.getCenter().lat(),
    lng: map.getCenter().lng(),
    content: '<div class="gmaps-overlay">You are Here!<div class="gmaps-overlay_arrow above"></div></div>',
    verticalAlign: 'top',
    horizontalAlign: 'center'
  });
});

/* Street View */
var panorama;
$(document).ready(function(){
  panorama = GMaps.createPanorama({
    el: '#panorama',
    lat : 42.3455,
    lng : -71.0983
  });
});

/* Routes */
var map;
$(document).ready(function(){
  map = new GMaps({
    div: '#gmaps-route',
    lat: -12.043333,
    lng: -77.028333
  });
  $('#start_travel').click(function(e){
    e.preventDefault();
    map.travelRoute({
      origin: [-12.044012922866312, -77.02470665341184],
      destination: [-12.090814532191756, -77.02271108990476],
      travelMode: 'driving',
      step: function(e){
        $('#instructions').append('<li>'+e.instructions+'</li>');
        $('#instructions li:eq('+e.step_number+')').delay(450*e.step_number).fadeIn(200, function(){
          map.setCenter(e.end_location.lat(), e.end_location.lng());
          map.drawPolyline({
            path: e.path,
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
          });
        });
      }
    });
  });
});

/* Map Types */
var map;
$(document).ready(function(){
  map = new GMaps({
    div: '#gmaps-types',
    lat: -12.043333,
    lng: -77.028333,
    mapTypeControlOptions: {
      mapTypeIds : ["hybrid", "roadmap", "satellite", "terrain", "osm", "cloudmade"]
    }
  });
  map.addMapType("osm", {
    getTileUrl: function(coord, zoom) {
      return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
    },
    tileSize: new google.maps.Size(256, 256),
    name: "OpenStreetMap",
    maxZoom: 18
  });
  map.addMapType("cloudmade", {
    getTileUrl: function(coord, zoom) {
      return "http://b.tile.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/1/256/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
    },
    tileSize: new google.maps.Size(256, 256),
    name: "CloudMade",
    maxZoom: 18
  });
  map.setMapTypeId("osm");
});

/* Static */
    var map;
    $(document).ready(function(){
      map = new GMaps({
        div: '#gmaps-menu',
        lat: -12.043333,
        lng: -77.028333
      });
      map.setContextMenu({
        control: 'map',
        options: [{
          title: 'Add marker',
          name: 'add_marker',
          action: function(e){
            this.addMarker({
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
              title: 'New marker'
            });
            this.hideContextMenu();
          }
        }, {
          title: 'Center here',
          name: 'center_here',
          action: function(e){
            this.setCenter(e.latLng.lat(), e.latLng.lng());
          }
        }]
      });
    });