'use strict';
//  Author: ThemeREX.com
//
//  .html scripts
//

(function($) {

    $(document).ready(function() {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();

        // Initilize Gmap1 - basic
        if ($('#map_canvas1').length) {
            $('#map_canvas1').gmap({
                'center': '40.7127837,-74.00594130000002',
                'zoom': 10,
                'disableDefaultUI': true,
                'callback': function() {
                    var self = this;
                    self.addMarker({
                        'position': this.get('map').getCenter()
                    }).click(function() {
                        self.openInfoWindow({
                            'content': 'Welcome to New York!'
                        }, this);
                    });
                }
            });
        }

        // Initilize Gmap2 - clickable movements
        $(function() {
            $('#map_canvas2').gmap({
                'disableDefaultUI': true,
                'callback': function() {
                    var self = this;
                    $("[data-gmapping]").each(function(i, el) {
                        var data = $(el).data('gmapping');
                        var title = $(el).data('title');
                        self.addMarker({
                            'id': data.id,
                            'tags': data.tags,
                            'position': new google.maps.LatLng(data.latlng.lat, data.latlng.lng),
                            'bounds': true
                        }, function(map, marker) {
                            $(el).click(function() {
                                $(marker).triggerEvent('click');
                            });
                        }).click(function() {
                            self.openInfoWindow({
                                'content': title
                            }, this);
                        });
                    });
                }
            });
        });

        // Initilize Gmap3 - Navigation Pager
        $(function() {
            var markers = [{
                'position': '40.7127837,-74.00594130000002',
                'title': 'New York, USA'
            }, {
                'position': '48.856614, 2.3522219000000177',
                'title': 'Paris, France'
            }, {
                'position': '19.4326077, -99.13320799999997',
                'title': 'Mexico, Mexico'
            }, {
                'position': '51.5073509, -0.12775829999998223',
                'title': 'London, Great Britain'
            }, {
                'position': '45.458626, 9.181872999999996',
                'title': 'Milan, Italy'
            }];
            $('#map_canvas3').gmap({
                'zoom': 5,
                'disableDefaultUI': true,
                'callback': function() {
                    var self = this;
                    $.each(markers, function(i, marker) {
                        self.addMarker(marker).click(function() {
                            self.openInfoWindow({
                                'content': this.title
                            }, this);
                        });
                    });
                }
            }).gmap('pagination', 'title');
        });

        // Initilize Gmap4 - Navigation Menu
        $(function() {

            String.prototype.format = function() {
                var a = this;
                for (var k in arguments) {
                    a = a.replace("{" + k + "}", arguments[k]);
                }
                return a;
            };
            $('#map_canvas4').gmap({
                'disableDefaultUI': true
            }).bind('init', function(evt, map) {
                $('#map_canvas4').gmap('addControl', 'radio', google.maps.ControlPosition.TOP_LEFT);
                var southWest = map.getBounds().getSouthWest();
                var northEast = map.getBounds().getNorthEast();
                var lngSpan = northEast.lng() - southWest.lng();
                var latSpan = northEast.lat() - southWest.lat();
                var tags = ['English', 'Spanish', 'Chinese', 'French', 'Dutch'];
                $.each(tags, function(i, tag) {
                    $('#radio').append(('<div class="checkbox-custom mb5"><input type="checkbox" id="' + tag + '" value="{0}"/><label for="' + tag + '">{1}</label></div>').format(tag, tag));
                });
                for (var i = 0; i < 20; i++) {
                    var temp = [];
                    for (var j = 0; j < Math.random() * 5; j++) {
                        temp.push(tags[Math.floor(Math.random() * 5)]);
                    }
                    $('#map_canvas4').gmap('addMarker', {
                        'tags': temp,
                        'bound': true,
                        'position': new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random())
                    }).click(function() {
                        var visibleInViewport = ($('#map_canvas4').gmap('inViewport', $(this)[0])) ? 'I\'m visible in the viewport.' : 'I\'m sad and hidden.';
                        $('#map_canvas4').gmap('openInfoWindow', {
                            'content': $(this)[0].tags + '<br/>' + visibleInViewport
                        }, this);
                    });
                }
                $('input:checkbox').click(function() {
                    $('#map_canvas4').gmap('closeInfoWindow');
                    $('#map_canvas4').gmap('set', 'bounds', null);
                    var filters = [];
                    $('input:checkbox:checked').each(function(i, checkbox) {
                        filters.push($(checkbox).val());
                    });
                    if (filters.length > 0) {
                        $('#map_canvas4').gmap('find', 'markers', {
                            'property': 'tags',
                            'value': filters,
                            'operator': 'OR'
                        }, function(marker, found) {
                            if (found) {
                                $('#map_canvas4').gmap('addBounds', marker.position);
                            }
                            marker.setVisible(found);
                        });
                    } else {
                        $.each($('#map_canvas4').gmap('get', 'markers'), function(i, marker) {
                            $('#map_canvas4').gmap('addBounds', marker.position);
                            marker.setVisible(true);
                        });
                    }
                });

            });
        });

        // Init GMaps Plugin - NOT the same plugin as above
        var map = new GMaps({
            div: '#map1',
            lat: 40.7127837,
            lng: -74.00594130000002
        });
        // Add a working search bar to GMap
        $('#geocoding_form').submit(function(e) {
            e.preventDefault();
            GMaps.geocode({
                address: $('#address').val().trim(),
                callback: function(results, status) {
                    if (status == 'OK') {
                        var latlng = results[0].geometry.location;
                        map.setCenter(latlng.lat(), latlng.lng());
                        map.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng()
                        });
                    }
                }
            });
        });

        // Init GMaps Plugin - Streetview Panorama
        var panorama = GMaps.createPanorama({
            el: '#panorama',
            lat: 40.7489078,
            lng: -73.9810006,
            pov: {
                heading: 194,
                pitch: 8
            }
        });
    });

})(jQuery);
