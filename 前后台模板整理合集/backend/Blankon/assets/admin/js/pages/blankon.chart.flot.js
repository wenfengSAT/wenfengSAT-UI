var BlankonChartFlot = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonChartFlot.basicChartFlot();
            BlankonChartFlot.barChartFlot();
            BlankonChartFlot.pieChartFlot();
            BlankonChartFlot.realtimeChartFlot();
        },

        // =========================================================================
        // FLOT CHART / BASIC
        // =========================================================================
        basicChartFlot: function () {
            function showTooltip(x, y, contents) {
                jQuery('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css( {
                    position: 'absolute',
                    display: 'none',
                    top: y + 5,
                    left: x + 5
                }).appendTo("body").fadeIn(200);
            }

            if($('#flot-basic-chart').length){
                var series1 = [[0, 10], [1, 6], [2,3], [3, 8], [4, 5], [5, 13], [6, 8]];
                var series2 = [[0, 5], [1, 4], [2,4], [3, 1], [4, 9], [5, 10], [6, 13]];

                var plot = $.plot($("#flot-basic-chart"),
                    [ { data: series1,
                        label: "Series 1",
                        color: "#E9573F"
                    },
                        { data: series2,
                            label: "Series 2",
                            color: "#00B1E1"
                        }
                    ],
                    {
                        series: {
                            lines: {
                                show: true,
                                fill: true,
                                lineWidth: 1,
                                fillColor: {
                                    colors: [ { opacity: 0.5 },
                                        { opacity: 0.5 }
                                    ]
                                }
                            },
                            points: {
                                show: true
                            },
                            shadowSize: 0
                        },
                        legend: {
                            position: 'nw'
                        },
                        grid: {
                            hoverable: true,
                            clickable: true,
                            borderColor: '#ddd',
                            borderWidth: 1,
                            labelMargin: 10,
                            backgroundColor: '#fff'
                        },
                        yaxis: {
                            min: 0,
                            max: 15,
                            color: '#eee'
                        },
                        xaxis: {
                            color: '#eee'
                        }
                    });

                var previousPoint = null;
                $("#flot-basic-chart").bind("plothover", function (event, pos, item) {
                    $("#x").text(pos.x.toFixed(2));
                    $("#y").text(pos.y.toFixed(2));

                    if(item) {
                        if (previousPoint != item.dataIndex) {
                            previousPoint = item.dataIndex;

                            $("#tooltip").remove();
                            var x = item.datapoint[0].toFixed(2),
                                y = item.datapoint[1].toFixed(2);

                            showTooltip(item.pageX, item.pageY,
                                item.series.label + " of " + x + " = " + y);
                        }

                    } else {
                        $("#tooltip").remove();
                        previousPoint = null;
                    }

                });

                $("#flot-basic-chart").bind("plotclick", function (event, pos, item) {
                    if (item) {
                        plot.highlight(item.series, item.datapoint);
                    }
                });
            }
        },

        // =========================================================================
        // FLOT CHART / BAR
        // =========================================================================
        barChartFlot: function () {
            if($('#flot-bar-chart').length){
                var bardata = [ ["Jan", 5], ["Feb", 20], ["Mar", 18], ["Apr", 8], ["May", 13], ["Jun", 24], ["Jul", 22], ["Aug", 20], ["Sep", 10], ["Oct", 5], ["Nov", 8], ["Dec", 15] ];

                $.plot("#flot-bar-chart", [ bardata ], {
                    series: {
                        lines: {
                            lineWidth: 1
                        },
                        bars: {
                            show: true,
                            barWidth: 0.5,
                            align: "center",
                            lineWidth: 0,
                            fillColor: "#81b71a"
                        }
                    },
                    grid: {
                        borderColor: '#ddd',
                        borderWidth: 1,
                        labelMargin: 10
                    },
                    xaxis: {
                        mode: "categories",
                        tickLength: 0
                    }
                });
            }
        },

        // =========================================================================
        // FLOT CHART / PIE
        // =========================================================================
        pieChartFlot: function () {
            if($('#flot-pie-chart').length){
                var piedata = [
                    { label: "Series 1", data: [[1,40]], color: '#37BC9B'},
                    { label: "Series 2", data: [[1,20]], color: '#8CC152'},
                    { label: "Series 3", data: [[1,50]], color: '#00B1E1'},
                    { label: "Series 4", data: [[1,90]], color: '#E9573F'},
                    { label: "Series 5", data: [[1,80]], color: '#906094'}
                ];

                function labelFormatter(label, series) {
                    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
                }

                $.plot('#flot-pie-chart', piedata, {
                    series: {
                        pie: {
                            show: true,
                            radius: 1,
                            label: {
                                show: true,
                                radius: 2/3,
                                formatter: labelFormatter,
                                threshold: 0.1
                            }
                        }
                    },
                    grid: {
                        hoverable: true,
                        clickable: true
                    }
                });

            }
        },

        // =========================================================================
        // FLOT CHART / REAL TIME UPDATE
        // =========================================================================
        realtimeChartFlot: function () {
            if($('#flot-realtime-chart').length){
                var data = [], totalPoints = 50;

                function getRandomData() {

                    if (data.length > 0)
                        data = data.slice(1);

                    // Do a random walk
                    while (data.length < totalPoints) {

                        var prev = data.length > 0 ? data[data.length - 1] : 50,
                            y = prev + Math.random() * 10 - 5;

                        if (y < 0) {
                            y = 0;
                        } else if (y > 100) {
                            y = 100;
                        }
                        data.push(y);
                    }

                    // Zip the generated y values with the x values
                    var res = [];
                    for (var i = 0; i < data.length; ++i) {
                        res.push([i, data[i]])
                    }
                    return res;
                }


                // Set up the control widget
                var updateInterval = 1000;

                var plot4 = $.plot("#flot-realtime-chart", [ getRandomData() ], {
                    colors: ["#F6BB42"],
                    series: {
                        lines: {
                            fill: true,
                            lineWidth: 0
                        },
                        shadowSize: 0	// Drawing is faster without shadows
                    },
                    grid: {
                        borderColor: '#ddd',
                        borderWidth: 1,
                        labelMargin: 10
                    },
                    xaxis: {
                        color: '#eee'
                    },
                    yaxis: {
                        min: 0,
                        max: 100,
                        color: '#eee'
                    }
                });

                function update() {

                    plot4.setData([getRandomData()]);

                    // Since the axes don't change, we don't need to call plot.setupGrid()
                    plot4.draw();
                    setTimeout(update, updateInterval);
                }

                update();
            }
        }

    };

}();

// Call main app init
BlankonChartFlot.init();