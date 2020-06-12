//ORB JavaScript
// DOM Preload
(function($) {

    "use strict";

    $(document).ready(function() {


        // ========================================================================
        //	Bootstrap Tooltips and Popovers
        // ========================================================================

        if ($('.tooltiped').length) {
            $('.tooltiped').tooltip();
        }

        if ($('.popovered').length) {
            $('.popovered').popover({
                'html': 'true'
            });
        }
		
		
		
	// ========================================================================
    //	Portfolio and Gallery Isotope Filtering
    // ========================================================================

    if ($('#portfolio-filtering').length && jQuery()) {

        $(window).load(function() {
            var $container = $('#portfolio-filtering');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 150,
                    easing: 'linear',
                    queue: false,
                    resizable: false,
                    masonry: {
                        columnWidth: $container.width() / 4
                    }
                }
            });

            $(window).smartresize(function() {
                $container.isotope({
                    masonry: {
                        columnWidth: $container.width() / 4
                    }
                });
            });

            $('#filtering a').click(function() {
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                });
                return false;
            });

        });
    }
		
		

        // ========================================================================
        //	Easy Pie Charts in Front-End
        // ========================================================================


        if ($('#skills-easy-1').length) {
            $('#skills-easy-1').easyPieChart({
                easing: 'easeOutBounce',
                lineWidth: '20',
                size: 140,
                trackColor: '#f0ad4e',
                lineCap: 'butt',
                barColor: '#33383d',
                scaleColor: false,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }


        if ($('#skills-easy-2').length) {
            $('#skills-easy-2').easyPieChart({
                easing: 'easeOutBounce',
                lineWidth: '20',
                size: 140,
                trackColor: '#f0ad4e',
                lineCap: 'butt',
                barColor: '#33383d',
                scaleColor: false,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if ($('#skills-easy-3').length) {
            $('#skills-easy-3').easyPieChart({
                easing: 'easeOutBounce',
                lineWidth: '20',
                size: 140,
                trackColor: '#f0ad4e',
                lineCap: 'butt',
                barColor: '#33383d',
                scaleColor: false,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if ($('#skills-easy-4').length) {
            $('#skills-easy-4').easyPieChart({
                easing: 'easeOutBounce',
                lineWidth: '20',
                size: 140,
                trackColor: '#f0ad4e',
                lineCap: 'butt',
                barColor: '#33383d',
                scaleColor: false,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }



        // if there's google maps script on the page
        if (typeof google !== 'undefined') {

            // ========================================================================
            //	Google Maps
            // ========================================================================

            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

            var mapOptions = {

                map_canvas: {

                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // disable default UI
                    controls: false,

                    // The latitude and longitude to center the map (always required)
                    latitude: 40.6700, // New York,
                    longitude: -73.9400,



                    // How you would like to style the map. 
                    styles: [{
                        'featureType': 'water',
                        'stylers': [{
                            'visibility': 'on'
                        }, {
                            'color': '#638897'
                        }]
                    }, {
                        'featureType': 'landscape',
                        'stylers': [{
                            'color': '#f2e5d4'
                        }]
                    }, {
                        'featureType': 'road.highway',
                        'elementType': 'geometry',
                        'stylers': [{
                            'color': '#82b964'
                        }]
                    }, {
                        'featureType': 'road.arterial',
                        'elementType': 'geometry',
                        'stylers': [{
                            'color': '#e4d7c6'
                        }]
                    }, {
                        'featureType': 'road.local',
                        'elementType': 'geometry',
                        'stylers': [{
                            'color': '#fbfaf7'
                        }]
                    }, {
                        'featureType': 'poi.park',
                        'elementType': 'geometry',
                        'stylers': [{
                            'color': '#82b964'
                        }]
                    }, {
                        'featureType': 'administrative',
                        'stylers': [{
                            'visibility': 'on'
                        }, {
                            'lightness': 33
                        }]
                    }, {
                        'featureType': 'road'
                    }, {
                        'featureType': 'poi.park',
                        'elementType': 'labels',
                        'stylers': [{
                            'visibility': 'on'
                        }, {
                            'lightness': 20
                        }]
                    }, {}, {
                        'featureType': 'road',
                        'stylers': [{
                            'lightness': 20
                        }]
                    }]
                },

                map_canvas2: {
                    zoom: 11,

                    // disable default UI
                    controls: false,

                    latitude: 40.6700, // New York,
                    longitude: -73.9400,

                    styles: [{
                        "stylers": [{
                            "saturation": -100
                        }, {
                            "gamma": 1
                        }]
                    }, {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.business",
                        "elementType": "labels.text",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.business",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.place_of_worship",
                        "elementType": "labels.text",
                        "stylers": [{

                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.place_of_worship",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "water",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "saturation": 50
                        }, {
                            "gamma": 0
                        }, {
                            "hue": "#50a5d1"
                        }]
                    }, {
                        "featureType": "administrative.neighborhood",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#333333"
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "labels.text",
                        "stylers": [{
                            "weight": 0.5
                        }, {
                            "color": "#333333"
                        }]
                    }, {
                        "featureType": "transit.station",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "gamma": 1
                        }, {
                            "saturation": 10
                        }]
                    }]
                },

                map_canvas3: {
                    zoom: 11,

                    // disable default UI
                    controls: false,

                    latitude: 40.6700, // New York,
                    longitude: -73.9400,

                    styles: [{
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#81c1d9"
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f0f0ed"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#c4c5c5"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#e2e8e7"
                        }]
                    }, {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#e2e8e7"
                        }]
                    }, {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#81c1d9"
                        }, {
                            "weight": 6
                        }]
                    }, {
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    }, {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [{
                            "weight": 0.2
                        }, {
                            "color": "#1a3541"
                        }]
                    }, {
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#e2e8e7"
                        }]
                    }]
                },

                // settings for map in mega menu
                googlemaps1: {

                    // allow map controls
                    controls: {
                        panControl: true,
                        zoomControl: true,
                        mapTypeControl: true,
                        scaleControl: true,
                        streetViewControl: false,
                        overviewMapControl: true
                    },

                    // disable scroll wheel
                    scrollwheel: false,

                    // setup custom marker
                    markers: [{

                        latitude: 40.6700,
                        longitude: -73.9400,


                        html: "<strong>ORB Head Office</strong><br>Boulevard of Broken Dreams 66, Apt 99<br>",
                        icon: {
                            image: "images/pin.png",
                            iconsize: [35, 55],
                            iconanchor: [35, 55]
                        }
                    }],


                    styles: [{
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#a2daf2"
                        }]
                    }, {
                        "featureType": "landscape.man_made",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f7f1df"
                        }]
                    }, {
                        "featureType": "landscape.natural",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#d0e3b4"
                        }]
                    }, {
                        "featureType": "landscape.natural.terrain",
                        "elementType": "geometry",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#bde6ab"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.medical",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#fbd3da"
                        }]
                    }, {
                        "featureType": "poi.business",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#ffe15f"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#efd151"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "black"
                        }]
                    }, {
                        "featureType": "transit.station.airport",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#cfb2db"
                        }]
                    }],


                    // initial coordinates
                    latitude: 40.6700,
                    longitude: -73.9400,

                    zoom: 10
                }
            };

            // sometimes we want to resize map after it's container has been resized,
            // so we can specify an element and event to trigger map resize
            var resizeEvents = {
                googlemaps1: {
                    target: '.dropdown',
                    evt: 'show.bs.dropdown'
                }
            };

            // setup maps
            $('.map-container').each(function() {

                // for each map on the page, take it's options by id
                var mapSettings = mapOptions[this.id];

                // create map
                var $map = $(this).gMap(mapSettings);

                // store the reference to 'native' google map object
                var map = $map.data('gMap.reference');

                // apply styling if any
                var styles = mapSettings['styles'];
                if (styles) {
                    map.setOptions({
                        styles: styles
                    });
                }

                // do subscribe on events to resize after
                var evts;
                if (evts = resizeEvents[this.id] || resizeEvents['*']) {
                    $(evts.target).on(evts.evt, function() {
                        var center = map.getCenter();
                        setTimeout(function() {
                            google.maps.event.trigger($map[0], 'resize');
                            map.setCenter(center);
                        }, 10);
                    });
                }
            });

        }
    });




    //Datepicker


    // Inline datepicker
    if ($('#inline').length) {
        $('#inline').datepicker({
            dateFormat: 'dd.mm.yy',
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>'
        });
    }



    // Login Form Validation
    if ($('#login-form').length) {
        $("#login-form").validate({
            // Rules for form validation
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 20
                }
            },

            // Messages for form validation
            messages: {
                email: {
                    required: 'Please enter your email address',
                    email: 'Please enter a VALID email address'
                },
                password: {
                    required: 'Please enter your password'
                }
            },

            errorPlacement: function(error, element) {
                error.insertAfter(element.parent());
            }
        });

    }



    // Validation

    if ($('#contact-form-captcha').length) {
        $("#contact-form-captcha").validate({
            // Rules for form validation
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                },
                captcha: {
                    required: true,
                    remote: 'captcha/process.php'
                }
            },

            // Messages for form validation
            messages: {
                name: {
                    required: 'Please enter your name',
                },
                email: {
                    required: 'Please enter your email address',
                    email: 'Please enter a VALID email address'
                },
                message: {
                    required: 'Please enter your message'
                },
                captcha: {
                    required: 'Please enter characters',
                    remote: 'Correct captcha is required'
                }
            },

            // Ajax form submition					
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    beforeSend: function() {
                        $('#contact-form-captcha button[type="submit"]').attr('disabled', true);
                    },
                    success: function() {
                        $("#contact-form-captcha").addClass('submited');
                    }
                });
            },

            // Do not change code below
            errorPlacement: function(error, element) {
                error.insertAfter(element.parent());
            }
        });
    }



    //Registration Form Validation
    if ($('#registration-form').length) {
        $("#registration-form").validate({
            // Rules for form validation
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 3,
                    maxlength: 20
                },
                passwordConfirm: {
                    required: true,
                    minlength: 3,
                    maxlength: 20,
                    equalTo: '#password'
                },
                firstname: {
                    required: true
                },
                lastname: {
                    required: true
                },
                gender: {
                    required: true
                },
                terms: {
                    required: true
                }
            },

            // Messages for form validation
            messages: {
                login: {
                    required: 'Please enter your login'
                },
                email: {
                    required: 'Please enter your email address',
                    email: 'Please enter a VALID email address'
                },
                password: {
                    required: 'Please enter your password'
                },
                passwordConfirm: {
                    required: 'Please enter your password one more time',
                    equalTo: 'Please enter the same password as above'
                },
                firstname: {
                    required: 'Please select your first name'
                },
                lastname: {
                    required: 'Please select your last name'
                },
                gender: {
                    required: 'Please select your gender'
                },
                terms: {
                    required: 'You must agree with Terms and Conditions'
                }
            },

            errorPlacement: function(error, element) {
                error.insertAfter(element.parent());
            }
        });
    }



    //Subscription Form Validation
    if ($('#subscription-form').length) {
        $("#subscription-form").validate({
            // Rules for form validation
            rules: {


                email: {
                    required: true,
                    email: true
                }
            },

            // Messages for form validation
            messages: {

                email: {
                    required: 'Please enter your email address',
                    email: 'Please enter a VALID email address'
                }
            },

            // Ajax form submition					
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    beforeSend: function() {
                        $('#subscription-form button[type="submit"]').attr('disabled', true);
                    },
                    success: function() {
                        $("#subscription-form").addClass('submited');
                    }
                });
            },


            errorPlacement: function(error, element) {
                error.insertAfter(element.parent());
            }
        });
    }




    // ========================================================================
    //	Scroll To Top
    // ========================================================================

    $('.smooth-overflow').on('scroll', function() {

        if ($(this).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });

    $('.scroll-top-wrapper').on('click', scrollToTop);

    function scrollToTop() {
            var verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
            var element = $('body');
            var offset = element.offset();
            var offsetTop = offset.top;
            $('.smooth-overflow').animate({
                scrollTop: offsetTop
            }, 400, 'linear');
        }
        //----------------------------------------------------------------------







    // ========================================================================
    //	Quotes Rotator
    // ========================================================================
	
    if ($('#cbp-qtrotator').length) {
        $('#cbp-qtrotator').cbpQTRotator();
    }
	
	
	




})(jQuery);