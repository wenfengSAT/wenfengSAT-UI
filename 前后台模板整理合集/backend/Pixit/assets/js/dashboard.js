$(function () {

    /* Display message header */
    setTimeout(function () {
        $('#chat-notification').removeClass('hide').addClass('animated bounceIn');
        $('#chat-popup').removeClass('hide').addClass('animated fadeIn');
    }, 5000);

    /* Hide message header */
    setTimeout(function () {
        $('#chat-popup').removeClass('animated fadeIn').addClass('animated fadeOut').delay(800).hide(0);
    }, 8000);

    //****************** LINE & BAR SWITCH CHART ******************//
    var d1 = [
        [0, 950], [1, 1300], [2, 1600], [3, 1900], [4, 2100], [5, 2500], [6, 2200], [7, 2000], [8, 1950], [9, 1900], [10, 2000], [11, 2120]
    ];
    var d2 = [
        [0, 450], [1, 500], [2, 600], [3, 550], [4, 600], [5, 800], [6, 900], [7, 800], [8, 850], [9, 830], [10, 1000], [11, 1150]
    ];

    var tickArray = ['Janv', 'Fev', 'Mars', 'Apri', 'May', 'June', 'July', 'Augu', 'Sept', 'Nov'];

    /****  Line Chart  ****/
        var graph_lines = [{
        label: "Line 1",
        data: d1,
        lines: {
            lineWidth: 2
        },
        shadowSize: 0,
        color: '#0090D9'
    }, {
        label: "Line 1",
        data: d1,
        points: {
            show: true,
            fill: true,
            radius: 6,
            fillColor: "#0090D9",
            lineWidth: 3
        },
        color: '#fff'
    }, {
        label: "Line 2",
        data: d2,
        animator: {
            steps: 300,
            duration: 1000,
            start: 0
        },
        lines: {
            fill: 0.7,
            lineWidth: 0,
        },
        color: '#18A689'
    }, {
        label: "Line 2",
        data: d2,
        points: {
            show: true,
            fill: true,
            radius: 6,
            fillColor: "#18A689",
            lineWidth: 3
        },
        color: '#fff'
    }, ];

    function lineCharts(){
        var line_chart = $.plotAnimator($('#graph-lines'), graph_lines, {
            xaxis: {
                tickLength: 0,
                tickDecimals: 0,
                min: 0,
                ticks: [
                    [0, 'Jan'], [1, 'Fev'], [2, 'Mar'], [3, 'Apr'], [4, 'May'], [5, 'Jun'], [6, 'Jul'], [7, 'Aug'], [8, 'Sept'],  [9, 'Oct'], [10, 'Nov'], [11, 'Dec']
                ],
                font: {
                    lineHeight: 12,
                    weight: "bold",
                    family: "Open sans",
                    color: "#8D8D8D"
                }
            },
            yaxis: {
                ticks: 3,
                tickDecimals: 0,
                tickColor: "#f3f3f3",
                font: {
                    lineHeight: 13,
                    weight: "bold",
                    family: "Open sans",
                    color: "#8D8D8D"
                }
            },
            grid: {
                backgroundColor: {
                    colors: ["#fff", "#fff"]
                },
                borderColor: "transparent",
                margin: 0,
                minBorderMargin: 0,
                labelMargin: 15,
                hoverable: true,
                clickable: true,
                mouseActiveRadius: 4
            },
            legend: {
                show: false
            }
        });
    }
    lineCharts();

    /****  Bars Chart  ****/
    var graph_bars = [{
        // Visitors
        data: d1,
        color: '#00b5f3'
    }, {
        // Returning Visitors
        data: d2,
        color: '#008fc0',
        points: {
            radius: 4,
            fillColor: '#008fc0'
        }
    }];

    function barCharts(){
        bar_chart = $.plotAnimator($('#graph-bars'), graph_bars, {
            series: {
                bars: {
                    fill: 1,
                    show: true,
                    barWidth: .6,
                    align: 'center'
                },
                shadowSize: 0
            },
            xaxis: {
                tickColor: 'transparent',
                ticks: [
                    [0, 'Jan'], [1, 'Fev'], [2, 'Mar'], [3, 'Apr'], [4, 'May'], [5, 'Jun'], [6, 'Jul'], [7, 'Aug'], [8, 'Sept'], [9, 'Oct'], [10, 'Nov'], [11, 'Dec']
                ],
                font: {
                    lineHeight: 12,
                    weight: "bold",
                    family: "Open sans",
                    color: "#9a9a9a"
                }
            },
            yaxis: {
                ticks: 3,
                tickDecimals: 0,
                tickColor: "#f3f3f3",
                font: {
                    lineHeight: 13,
                    weight: "bold",
                    family: "Open sans",
                    color: "#9a9a9a"
                }
            },
            grid: {
                backgroundColor: {
                    colors: ["#fff", "#fff"]
                },
                borderColor: "transparent",
                margin: 0,
                minBorderMargin: 0,
                labelMargin: 15,
                hoverable: true,
                clickable: true,
                mouseActiveRadius: 4
            },
            legend: {
                show: false
            }
        });
    }

    $("#graph-lines").on("animatorComplete", function () {
        $("#lines, #bars").removeAttr("disabled");
    });

    $("#lines").on("click", function () {
        $('#bars').removeClass('active');
        $('#graph-bars').fadeOut();
        $(this).addClass('active');
        $("#lines, #bars").attr("disabled", "disabled");
        $('#graph-lines').fadeIn();
        lineCharts();
    });

    $("#graph-bars").on("animatorComplete", function () {
        $("#bars, #lines").removeAttr("disabled")
    });

    $("#bars").on("click", function () {
        $("#bars, #lines").attr("disabled", "disabled");
        $('#lines').removeClass('active');
        $('#graph-lines').fadeOut();
        $(this).addClass('active');
        $('#graph-bars').fadeIn().removeClass('hidden');
        barCharts();
    });

    $('#graph-bars').hide();

    function showTooltip(x, y, contents) {
        $('<div id="flot-tooltip">' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            color: '#fff',
            padding: '2px 5px',
            'background-color': '#717171',
            opacity: 0.80
        }).appendTo("body").fadeIn(200);
    };

    $("#graph-lines, #graph-bars").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(0));
        $("#y").text(pos.y.toFixed(0));
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;
                $("#flot-tooltip").remove();
                var x = item.datapoint[0].toFixed(0),
                    y = item.datapoint[1].toFixed(0);
                showTooltip(item.pageX, item.pageY, y + " visitors");
            }
        } else {
            $("#flot-tooltip").remove();
            previousPoint = null;
        }
    });


    //******************** DONUT CHART ********************//
    new Morris.Donut({
        element: 'donut-chart1',
        data: [{
            label: "Chrome",
            value: 34
        }, {
            label: "Firefox",
            value: 24
        }, {
            label: "Opera",
            value: 12
        }, {
            label: "Safari",
            value: 25
        }, {
            label: "Internet Explorer",
            value: 5
        }],
        colors: ['#C75757', '#18A689', '#0090D9', '#2B2E33', '#0090D9'],
        formatter: function (x) {
            return x + "%"
        }
    });


    //************** SPARKLINE SMALL CHART *****************//
    $(function () {
        /* Sparklines can also take their values from the first argument passed to the sparkline() function */
        var myvalues1 = [13, 14, 16, 15, 11, 14, 20, 14, 12, 16, 11, 17];
        var myvalues2 = [14, 17, 16, 12, 18, 16, 22, 15, 14, 17, 11, 18];
        $('.spark-chart-1').sparkline(myvalues1, {
            type: 'line',
            lineColor: '#18A689',
            fillColor: '#18A689',
            spotColor: '#18A689',
            height: '32px',
            width: '100%'
        });
        $('.spark-chart-2').sparkline(myvalues2, {
            type: 'line',
            lineColor: '#6B787F',
            fillColor: '#0090D9',
            spotColor: '#6B787F',
            height: '32px',
            width: '100%'
        });
    });

    /* We have to recreate charts on resize to make them responsive */
    $(window).resize(function () {
        var myvalues1 = [13, 14, 16, 15, 11, 14, 20, 14, 12, 16, 11, 17];
        var myvalues2 = [14, 17, 16, 12, 18, 16, 22, 15, 14, 17, 11, 18];
        $('.spark-chart-1').sparkline(myvalues1, {
            type: 'line',
            lineColor: '#18A689',
            fillColor: '#18A689',
            spotColor: '#18A689',
            height: '32px',
            width: '100%'
        });
        $('.spark-chart-2').sparkline(myvalues2, {
            type: 'line',
            lineColor: '#6B787F',
            fillColor: '#0090D9',
            spotColor: '#6B787F',
            height: '32px',
            width: '100%'
        });
        new Morris.Donut({
            element: 'donut-chart1',
            data: [{
                label: "Chrome",
                value: 30
            }, {
                label: "Firefox",
                value: 20
            }, {
                label: "Opera",
                value: 20
            }, {
                label: "Safari",
                value: 20
            }, {
                label: "Internet Explorer",
                value: 10
            }],
            colors: ['#C75757', '#18A689', '#0090D9', '#2B2E33', '#0090D9']
        });
    });


    //******************** TO DO LIST ********************//
    $("#sortable-todo").sortable();

    $('.my_checkbox_all').on('click', function (event) {
        if ($(this).prop('checked') ==  true){
            $(this).closest('#task-manager').find('input:checkbox').prop('checked', true);
        } else {
            $(this).closest('#task-manager').find('input:checkbox').prop('checked', false);
        }
    });


    //******************** REVENUE CHART ********************//
    function randomValue() {
        return (Math.floor(Math.random() * (1 + 24))) + 8;
    }

    var data1 = [
        [1, 5 + randomValue()], [2, 10 + randomValue()], [3, 10 + randomValue()], [4, 15 + randomValue()], [5, 20 + randomValue()], [6, 25 + randomValue()], [7, 30 + randomValue()], [8, 35 + randomValue()], [9, 40 + randomValue()], [10, 45 + randomValue()], [11, 50 + randomValue()], [12, 55 + randomValue()], [13, 60 + randomValue()], [14, 70 + randomValue()], [15, 75 + randomValue()], [16, 80 + randomValue()], [17, 85 + randomValue()], [18, 90 + randomValue()], [19, 95 + randomValue()], [20, 100 + randomValue()]
    ];
    var data2 = [
        [6, 1425], [7, 1754], [8, 1964], [9, 2145], [10, 2550], [11, 2210], [12, 1760], [13, 1820], [14, 1880], [15, 1985],  [16, 2240]
    ];

    var plot = $.plot(
        $('#chart_revenue'), [{
            label: "Revenue",
            data: data1,
            color: '#fff',
            points: {
                fillColor: "#9182d4"
            }
        }], {
            grid: {
                color: '#fff',
                borderColor: "transparent",
                clickable: true,
                hoverable: true
            },
            series: {
                lines: {
                    show: true,
                    fill: false,
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                show: false
            },
            yaxis: {
                tickColor: '#B992DB'
            },
            legend: {
                show: false
            },
            tooltip: true
        });

    var previousPoint = null;
    $("#chart_revenue").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;
                $("#flot-tooltip").remove();
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                showTooltip(item.pageX, item.pageY, y + "0 $");
            }
        } else {
            $("#flot-tooltip").remove();
            previousPoint = null;
        }
    });


    //**************** GOOGLE MAP WIDGET WITH FINDER ****************//
    if ($('#geocoding-map').length) {
        var geocoding_map;
        geocoding_map = new GMaps({
            el: '#geocoding-map',
            lat: 25.771912,
            lng: -80.186868,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            zoom: 11,
            styles: [{
                "featureType": "water",
                "stylers": [{
                    "color": "#0090d9"
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "landscape",
                "stylers": [{
                    "color": "#ccdae5"
                }]
            }, {
                "featureType": "road",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 45
                }]
            }, {
                "featureType": "road.highway",
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
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            }, {
                "featureType": "transit",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            }]
        });
        $('#geocoding_form').submit(function (e) {
            e.preventDefault();
            GMaps.geocode({
                address: $('#address').val().trim(),
                callback: function (results, status) {
                    if (status == 'OK') {
                        var latlng = results[0].geometry.location;
                        geocoding_map.setCenter(latlng.lat(), latlng.lng());
                        geocoding_map.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng()
                        });
                    }
                }
            });
        });
    }

    //******************** WEATHER WIDGET ********************//

    /* We initiate widget with a city (can be changed) */
    var city = 'Miami';
    $.simpleWeather({
        location: city,
        woeid: '',
        unit: 'f',
        success: function (weather) {
            city = weather.city;
            region = weather.country;
            tomorrow_date = weather.tomorrow.date;
            weather_icon = '<i class="icon-' + weather.code + '"></i>';
            $(".weather-city").html(city);
            $(".weather-currently").html(weather.currently);
            $(".today-img").html('<i class="big-img-weather icon-' + weather.code + '"></i>');
            $(".today-temp").html(weather.low + '° / ' + weather.high + '°');
            $(".weather-region").html(region);
            $(".weather-day").html(tomorrow_date);
            $(".weather-icon").html(weather_icon);
            $(".1-days-day").html(weather.forecasts.one.day);
            $(".1-days-image").html('<i class="icon-' + weather.forecasts.one.code + '"></i>');
            $(".1-days-temp").html(weather.forecasts.one.low + '° / ' + weather.forecasts.one.high + '°');
            $(".2-days-day").html(weather.forecasts.two.day);
            $(".2-days-image").html('<i class="icon-' + weather.forecasts.two.code + '"></i>');
            $(".2-days-temp").html(weather.forecasts.two.low + '° / ' + weather.forecasts.two.high + '°');
            $(".3-days-day").html(weather.forecasts.three.day);
            $(".3-days-image").html('<i class="icon-' + weather.forecasts.three.code + '"></i>');
            $(".3-days-temp").html(weather.forecasts.three.low + '° / ' + weather.forecasts.three.high + '°');
            $(".4-days-day").html(weather.forecasts.four.day);
            $(".4-days-image").html('<i class="icon-' + weather.forecasts.four.code + '"></i>');
            $(".4-days-temp").html(weather.forecasts.four.low + '° / ' + weather.forecasts.four.high + '°');
        }
    });

    /* We get city from input on change */
    $("#city-form").change(function () {
        city = document.getElementById("city-form").value;
        $.simpleWeather({
            location: city,
            woeid: '',
            unit: 'f',
            success: function (weather) {
                city = weather.city;
                region = weather.country;
                tomorrow_date = weather.tomorrow.date;
                weather_icon = '<i class="icon-' + weather.code + '"></i>';
                $(".weather-city").html(city);
                $(".weather-currently").html(weather.currently);
                $(".today-img").html('<i class="big-img-weather icon-' + weather.code + '"></i>');
                $(".today-temp").html(weather.low + '° / ' + weather.high + '°');
                $(".weather-region").html(region);
                $(".weather-day").html(tomorrow_date);
                $(".weather-icon").html(weather_icon);
                $(".1-days-day").html(weather.forecasts.one.day);
                $(".1-days-image").html('<i class="icon-' + weather.forecasts.one.code + '"></i>');
                $(".1-days-temp").html(weather.forecasts.one.low + '° / ' + weather.forecasts.one.high + '°');
                $(".2-days-day").html(weather.forecasts.two.day);
                $(".2-days-image").html('<i class="icon-' + weather.forecasts.two.code + '"></i>');
                $(".2-days-temp").html(weather.forecasts.two.low + '° / ' + weather.forecasts.two.high + '°');
                $(".3-days-day").html(weather.forecasts.three.day);
                $(".3-days-image").html('<i class="icon-' + weather.forecasts.three.code + '"></i>');
                $(".3-days-temp").html(weather.forecasts.three.low + '° / ' + weather.forecasts.three.high + '°');
                $(".4-days-day").html(weather.forecasts.four.day);
                $(".4-days-image").html('<i class="icon-' + weather.forecasts.four.code + '"></i>');
                $(".4-days-temp").html(weather.forecasts.four.low + '° / ' + weather.forecasts.four.high + '°');
            }
        });
    });

});