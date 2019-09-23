/*------------------------------------------------------------------
 [ Google Map Trigger Javascript ]

 Project     :	Fickle Responsive Admin Template
 Version     :	1.0
 Author      : 	AimMateTeam
 URL         :  http://aimmate.com
 Support     :  aimmateteam@gmail.com
 Primary use :	Google Map

 -------------------------------------------------------------------*/

var $branch;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

google.maps.event.addDomListener(window, 'load', calculate_route_initialize);

/*-----------------------------------------------*/
jQuery(document).ready(function($) {
    'use strict';

    direction_go_map();
    find_location_go_map();
    branch_locator_go_map();
    route_direction_go_map();
    add_marker_go_map();

    groupMarker();

});

/*---------------- DIRECTION GO MAP -----------------*/
function direction_go_map(){
    'use strict';

    $("#direction").goMap({
        mapTypeControl: true,
        mapTypeControlOptions: {
            position: 'TOP',
            style: 'DROPDOWN_MENU'
        },
        markers: [{
            address: 'Paris, France',
            html: {
                content: 'AimMate<br/>aimmate.com',
                popup: false
            }
        }],
        icon: 'assets/images/icons/office-i-32.png',
        addMarker: 'single',
        disableDoubleClickZoom: true,
        zoom: 14
    });
}

/*---------------------- FIND LOCATION GO MAP --------------------------*/
function find_location_go_map(){
    'use strict';

    $("#findLocation").goMap({
        style: 'SMALL',
        maptype: 'ROADMAP',
        markers: [{
            address: 'Paris, France',
            html: {
                content: 'AimMate<br/>aimmate.com',
                popup: false
            }
        }],
        icon: 'assets/images/icons/gmapsingle-i-32.png',
        addMarker: 'single',
        disableDoubleClickZoom: true,
        zoom: 14
    });

    $("#findLocationForm").submit(function(){

        var localion = $("#findLocationArea").val();

        $("#findLocation").goMap();

        var content= '<div class="map-marking">' +
            '<h4>'+localion+'</h4>' +
            '<p> Here it is </p>' +
            '</div>';

        $.goMap.clearMarkers();
        $.goMap.createMarker({
            id: 'storeMarker',
            address:localion,
            icon: 'assets/images/icons/gmapsingle-i-32.png',
            html: {
                content: content,
                popup: true
            },
            draggable: false
        });

        $.goMap.setMap({address:localion,zoom: 12 });
        return false;
    });
}


/*------------------- BRANCH LOCATOR GO MAP --------------------*/
function branch_locator_go_map(){
    'use strict';

    var $branch = $("#branch").goMap({
        maptype: 'ROADMAP',
        style: 'SMALL',
        scrollwheel: false,
        markers: [{
            address:"paris, france",
            title: 'Office',
            icon: 'assets/images/icons/office-i-32.png'
        },{
            address: 'Dhaka, Bangladesh',
            title: 'Home',
            icon: 'assets/images/icons/home-i-32.png'
        },{
            address:"sydney, australia",
            draggable: false,
            icon: 'assets/images/icons/shop-i-32.png',
            html: {
                content: 'Show Room',
                popup:false
            }
        },{
            address:"Peru",
            draggable: true,
            icon: 'assets/images/icons/factory-i-32.png',
            html: {
                content: 'Industry',
                popup:false
            }
        }],
        icon: 'assets/images/icons/gmapsingle-i-32.png',
        addMarker: 'single',
        disableDoubleClickZoom: true,
        zoom: 2

    });

    // branch map controller
    $('.branchLocator li a').click(function(){
        var address = $(this).data('address');
        $('.branchLocator li a').removeClass('active');
        $(this).addClass('active');
        $("#branch").goMap();
        if(address){
            $.goMap.setMap({address:address,zoom: 12 });
        }else{
            $.goMap.setMap({zoom:2});
        }

    });


}


/*---------------------- ROUTE DIRECTION GO MAP --------------------------*/
function route_direction_go_map(){
    'use strict';

    $('#mapDirectionsForm').submit(function(){
        calcRoute();
        return false;
    });

}


/*----------------- CALC-ROUTE GOOGLE MAP -------------------*/
function calcRoute() {
    'use strict';

    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var request = {
        origin:start,
        destination:end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}


/*------------- CALCULATE ROUTE INITIALIZE GOOGLE MAP -------------*/
function calculate_route_initialize() {
    'use strict';

    directionsDisplay = new google.maps.DirectionsRenderer();
    var chicago = new google.maps.LatLng(41.850033, -87.6500523);
    var mapOptions = {
        zoom:7,
        center: chicago
    }
    map = new google.maps.Map(document.getElementById('mapDirections'), mapOptions);
    directionsDisplay.setMap(map);

    calcRoute();
}


/*----------------- ADD MARKER GO MAP ----------------*/
function add_marker_go_map(){
    'use strict';

    $("#addMarkerMap").goMap({
        style: 'SMALL',
        maptype: 'ROADMAP',
        markers: [{
            address: 'Paris, France',
            html: {
                content: 'Click to map for add new markers!Drag all new markers!<br/>' +
                'Double click to new marker for remove it!',
                popup: true
            }
        }],
        icon: 'assets/images/icons/gmapsingle-i-32.png',
        addMarker: true,
        disableDoubleClickZoom: true
    });

    $("#json").click(function(){
        $("#dump").html($.goMap.getMarkers("json"));
    });

    $("#data").click(function(){
        $("#dump").html($.goMap.getMarkers("data"));
    });

    $("#default").click(function(){
        $("#addMarkerMap").goMap();
        $("#dump").html($.goMap.getMarkers("json"));
    });
}


/*---------------------- --------------------------*/
function groupMarker(){
    'use strict';

    $("#groupMarker").goMap({
        style: 'SMALL',
        maptype: 'ROADMAP',
        markers: [{
            latitude: 56.948813,
            longitude: 24.704004,
            id: 'test1',
            title: 'marker title 1'
        }]
    });

    $("#groupMarker").goMap();

    $.goMap.ready(function() {
        var bounds = $.goMap.getBounds();
        var southWest = bounds.getSouthWest();
        var northEast = bounds.getNorthEast();
        var lngSpan = northEast.lng() - southWest.lng();
        var latSpan = northEast.lat() - southWest.lat();

        for (var i = 0; i < 25; i++) {
            $.goMap.createMarker({
                latitude: southWest.lat() + latSpan * Math.random(),
                longitude: southWest.lng() + lngSpan * Math.random(),
                group: 'first',
                icon: 'http://www.google.com/intl/en_ALL/mapfiles/marker_green'+String.fromCharCode(i + 65)+'.png'

            });
        }

        var markers = [];

        for (var i in $.goMap.markers) {
            var temp = $($.goMap.mapId).data($.goMap.markers[i]);
            markers.push(temp);
        }

        var markerclusterer = new MarkerClusterer($.goMap.map, markers);
    });
}

