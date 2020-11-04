/**
 * @Package: Ultra Admin HTML Theme
 * @Since: Ultra 1.0
 * This file is part of Ultra Admin Theme HTML package.
 */


jQuery(function($) {

    'use strict';

    var ULTRA_SETTINGS = window.ULTRA_SETTINGS || {};

    /*--------------------------------
        Flot Chart
     --------------------------------*/
    ULTRA_SETTINGS.chartFlot = function() {


        /*------------------ Real Time ------------------------*/

        // We use an inline data source in the example, usually data would
        // be fetched from a server

        var rtdata = [],
            totalPoints = 300;

        function RealTimegetRandomData() {

            if (rtdata.length > 0)
                rtdata = rtdata.slice(1);

            // Do a random walk

            while (rtdata.length < totalPoints) {

                var prev = rtdata.length > 0 ? rtdata[rtdata.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }

                rtdata.push(y);
            }

            // Zip the generated y values with the x values

            var res = [];
            for (var i = 0; i < rtdata.length; ++i) {
                res.push([i, rtdata[i]])
            }

            return res;
        }

        // Set up the control widget

        var updateInterval = 30;
        $("#updateInterval").val(updateInterval).change(function() {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                if (updateInterval < 1) {
                    updateInterval = 1;
                } else if (updateInterval > 2000) {
                    updateInterval = 2000;
                }
                $(this).val("" + updateInterval);
            }
        });

        var realplot = $.plot("#flot-realtime", [RealTimegetRandomData()], {
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            },
            colors: ["#9972b5"],
            grid: {
                tickColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#eaeaea"
            },
        });

        function realtimeupdate() {

            realplot.setData([RealTimegetRandomData()]);

            // Since the axes don't change, we don't need to call realplot.setupGrid()

            realplot.draw();
            setTimeout(realtimeupdate, updateInterval);
        }

        realtimeupdate();






        /*---------------------- Percentile ------------------------*/

        var males = {
            "15%": [
                [2, 88.0],
                [3, 93.3],
                [4, 102.0],
                [5, 108.5],
                [6, 115.7],
                [7, 115.6],
                [8, 124.6],
                [9, 130.3],
                [10, 134.3],
                [11, 141.4],
                [12, 146.5],
                [13, 151.7],
                [14, 159.9],
                [15, 165.4],
                [16, 167.8],
                [17, 168.7],
                [18, 169.5],
                [19, 168.0]
            ],
            "90%": [
                [2, 96.8],
                [3, 105.2],
                [4, 113.9],
                [5, 120.8],
                [6, 127.0],
                [7, 133.1],
                [8, 139.1],
                [9, 143.9],
                [10, 151.3],
                [11, 161.1],
                [12, 164.8],
                [13, 173.5],
                [14, 179.0],
                [15, 182.0],
                [16, 186.9],
                [17, 185.2],
                [18, 186.3],
                [19, 186.6]
            ],
            "25%": [
                [2, 89.2],
                [3, 94.9],
                [4, 104.4],
                [5, 111.4],
                [6, 117.5],
                [7, 120.2],
                [8, 127.1],
                [9, 132.9],
                [10, 136.8],
                [11, 144.4],
                [12, 149.5],
                [13, 154.1],
                [14, 163.1],
                [15, 169.2],
                [16, 170.4],
                [17, 171.2],
                [18, 172.4],
                [19, 170.8]
            ],
            "10%": [
                [2, 86.9],
                [3, 92.6],
                [4, 99.9],
                [5, 107.0],
                [6, 114.0],
                [7, 113.5],
                [8, 123.6],
                [9, 129.2],
                [10, 133.0],
                [11, 140.6],
                [12, 145.2],
                [13, 149.7],
                [14, 158.4],
                [15, 163.5],
                [16, 166.9],
                [17, 167.5],
                [18, 167.1],
                [19, 165.3]
            ],
            "mean": [
                [2, 91.9],
                [3, 98.5],
                [4, 107.1],
                [5, 114.4],
                [6, 120.6],
                [7, 124.7],
                [8, 131.1],
                [9, 136.8],
                [10, 142.3],
                [11, 150.0],
                [12, 154.7],
                [13, 161.9],
                [14, 168.7],
                [15, 173.6],
                [16, 175.9],
                [17, 176.6],
                [18, 176.8],
                [19, 176.7]
            ],
            "75%": [
                [2, 94.5],
                [3, 102.1],
                [4, 110.8],
                [5, 117.9],
                [6, 124.0],
                [7, 129.3],
                [8, 134.6],
                [9, 141.4],
                [10, 147.0],
                [11, 156.1],
                [12, 160.3],
                [13, 168.3],
                [14, 174.7],
                [15, 178.0],
                [16, 180.2],
                [17, 181.7],
                [18, 181.3],
                [19, 182.5]
            ],
            "85%": [
                [2, 96.2],
                [3, 103.8],
                [4, 111.8],
                [5, 119.6],
                [6, 125.6],
                [7, 131.5],
                [8, 138.0],
                [9, 143.3],
                [10, 149.3],
                [11, 159.8],
                [12, 162.5],
                [13, 171.3],
                [14, 177.5],
                [15, 180.2],
                [16, 183.8],
                [17, 183.4],
                [18, 183.5],
                [19, 185.5]
            ],
            "50%": [
                [2, 91.9],
                [3, 98.2],
                [4, 106.8],
                [5, 114.6],
                [6, 120.8],
                [7, 125.2],
                [8, 130.3],
                [9, 137.1],
                [10, 141.5],
                [11, 149.4],
                [12, 153.9],
                [13, 162.2],
                [14, 169.0],
                [15, 174.8],
                [16, 176.0],
                [17, 176.8],
                [18, 176.4],
                [19, 177.4]
            ]
        };

        var females = {
            "15%": [
                [2, 84.8],
                [3, 93.7],
                [4, 100.6],
                [5, 105.8],
                [6, 113.3],
                [7, 119.3],
                [8, 124.3],
                [9, 131.4],
                [10, 136.9],
                [11, 143.8],
                [12, 149.4],
                [13, 151.2],
                [14, 152.3],
                [15, 155.9],
                [16, 154.7],
                [17, 157.0],
                [18, 156.1],
                [19, 155.4]
            ],
            "90%": [
                [2, 95.6],
                [3, 104.1],
                [4, 111.9],
                [5, 119.6],
                [6, 127.6],
                [7, 133.1],
                [8, 138.7],
                [9, 147.1],
                [10, 152.8],
                [11, 161.3],
                [12, 166.6],
                [13, 167.9],
                [14, 169.3],
                [15, 170.1],
                [16, 172.4],
                [17, 169.2],
                [18, 171.1],
                [19, 172.4]
            ],
            "25%": [
                [2, 87.2],
                [3, 95.9],
                [4, 101.9],
                [5, 107.4],
                [6, 114.8],
                [7, 121.4],
                [8, 126.8],
                [9, 133.4],
                [10, 138.6],
                [11, 146.2],
                [12, 152.0],
                [13, 153.8],
                [14, 155.7],
                [15, 158.4],
                [16, 157.0],
                [17, 158.5],
                [18, 158.4],
                [19, 158.1]
            ],
            "10%": [
                [2, 84.0],
                [3, 91.9],
                [4, 99.2],
                [5, 105.2],
                [6, 112.7],
                [7, 118.0],
                [8, 123.3],
                [9, 130.2],
                [10, 135.0],
                [11, 141.1],
                [12, 148.3],
                [13, 150.0],
                [14, 150.7],
                [15, 154.3],
                [16, 153.6],
                [17, 155.6],
                [18, 154.7],
                [19, 153.1]
            ],
            "mean": [
                [2, 90.2],
                [3, 98.3],
                [4, 105.2],
                [5, 112.2],
                [6, 119.0],
                [7, 125.8],
                [8, 131.3],
                [9, 138.6],
                [10, 144.2],
                [11, 151.3],
                [12, 156.7],
                [13, 158.6],
                [14, 160.5],
                [15, 162.1],
                [16, 162.9],
                [17, 162.2],
                [18, 163.0],
                [19, 163.1]
            ],
            "75%": [
                [2, 93.2],
                [3, 101.5],
                [4, 107.9],
                [5, 116.6],
                [6, 122.8],
                [7, 129.3],
                [8, 135.2],
                [9, 143.7],
                [10, 148.7],
                [11, 156.9],
                [12, 160.8],
                [13, 163.0],
                [14, 165.0],
                [15, 165.8],
                [16, 168.7],
                [17, 166.2],
                [18, 167.6],
                [19, 168.0]
            ],
            "85%": [
                [2, 94.5],
                [3, 102.8],
                [4, 110.4],
                [5, 119.0],
                [6, 125.7],
                [7, 131.5],
                [8, 137.9],
                [9, 146.0],
                [10, 151.3],
                [11, 159.9],
                [12, 164.0],
                [13, 166.5],
                [14, 167.5],
                [15, 168.5],
                [16, 171.5],
                [17, 168.0],
                [18, 169.8],
                [19, 170.3]
            ],
            "50%": [
                [2, 90.2],
                [3, 98.1],
                [4, 105.2],
                [5, 111.7],
                [6, 118.2],
                [7, 125.6],
                [8, 130.5],
                [9, 138.3],
                [10, 143.7],
                [11, 151.4],
                [12, 156.7],
                [13, 157.7],
                [14, 161.0],
                [15, 162.0],
                [16, 162.8],
                [17, 162.2],
                [18, 162.8],
                [19, 163.3]
            ]
        };

        var dataset = [{
                label: "Female mean",
                data: females["mean"],
                lines: {
                    show: true
                },
                color: "rgba(31,181,172,1)"
            }, {
                id: "f15%",
                data: females["15%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: false
                },
                color: "rgba(31,181,172,1)"
            }, {
                id: "f25%",
                data: females["25%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.2
                },
                color: "rgba(31,181,172,1)",
                fillBetween: "f15%"
            }, {
                id: "f50%",
                data: females["50%"],
                lines: {
                    show: true,
                    lineWidth: 0.5,
                    fill: 0.4,
                    shadowSize: 0
                },
                color: "rgba(31,181,172,1)",
                fillBetween: "f25%"
            }, {
                id: "f75%",
                data: females["75%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.4
                },
                color: "rgba(31,181,172,1)",
                fillBetween: "f50%"
            }, {
                id: "f85%",
                data: females["85%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.2
                },
                color: "rgba(31,181,172,1)",
                fillBetween: "f75%"
            },

            {
                label: "Male mean",
                data: males["mean"],
                lines: {
                    show: true
                },
                color: "rgba(153,114,181,1.0)"
            }, {
                id: "m15%",
                data: males["15%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: false
                },
                color: "rgba(153,114,181,1.0)"
            }, {
                id: "m25%",
                data: males["25%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.2
                },
                color: "rgba(153,114,181,1.0)",
                fillBetween: "m15%"
            }, {
                id: "m50%",
                data: males["50%"],
                lines: {
                    show: true,
                    lineWidth: 0.5,
                    fill: 0.4,
                    shadowSize: 0
                },
                color: "rgba(153,114,181,1.0)",
                fillBetween: "m25%"
            }, {
                id: "m75%",
                data: males["75%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.4
                },
                color: "rgba(153,114,181,1.0)",
                fillBetween: "m50%"
            }, {
                id: "m85%",
                data: males["85%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.2
                },
                color: "rgba(153,114,181,1.0)",
                fillBetween: "m75%"
            }
        ];

        $.plot($("#flot-percentile"), dataset, {
            xaxis: {
                tickDecimals: 0
            },
            yaxis: {
                tickFormatter: function(v) {
                    return v + " cm";
                }
            },
            grid: {
                tickColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#eaeaea"
            },
            legend: {
                position: "se"
            }
        });








        /* -------------------- Navigate ------------------------*/



        // generate data set from a parametric function with a fractal look

        function sumf(f, t, m) {
            var res = 0;
            for (var i = 1; i < m; ++i) {
                res += f(i * i * t) / (i * i);
            }
            return res;
        }

        var d1 = [];
        for (var t = 0; t <= 2 * Math.PI; t += 0.01) {
            d1.push([sumf(Math.cos, t, 10), sumf(Math.sin, t, 10)]);
        }

        var data1 = [d1],
            placeholder = $("#flot-navigate");

        var navplot = $.plot(placeholder, data1, {
            series: {
                lines: {
                    show: true
                },
                shadowSize: 0
            },
            xaxis: {
                zoomRange: [0.1, 10],
                panRange: [-10, 10]
            },
            yaxis: {
                zoomRange: [0.1, 10],
                panRange: [-10, 10]
            },
            zoom: {
                interactive: true
            },
            pan: {
                interactive: true
            },
            colors: ["#1fb5ac"],
            grid: {
                tickColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#eaeaea"
            },
        });

        // show pan/zoom messages to illustrate events 

        placeholder.bind("plotpan", function(event, navplot) {
            var axes = navplot.getAxes();
            $(".message").html("Panning to x: " + axes.xaxis.min.toFixed(2) + " &ndash; " + axes.xaxis.max.toFixed(2) + " and y: " + axes.yaxis.min.toFixed(2) + " &ndash; " + axes.yaxis.max.toFixed(2));
        });

        placeholder.bind("plotzoom", function(event, navplot) {
            var axes = navplot.getAxes();
            $(".message").html("Zooming to x: " + axes.xaxis.min.toFixed(2) + " &ndash; " + axes.xaxis.max.toFixed(2) + " and y: " + axes.yaxis.min.toFixed(2) + " &ndash; " + axes.yaxis.max.toFixed(2));
        });

        // add zoom out button 

        $("<div class='button' style='right:20px;top:20px'>zoom out</div>")
            .appendTo(placeholder)
            .click(function(event) {
                event.preventDefault();
                navplot.zoomOut();
            });

        // and add panning buttons

        // little helper for taking the repetitive work out of placing
        // panning arrows

        function addArrow(dir, right, top, offset) {
            $("<img class='button' src='assets/plugins/flot-chart/images/arrow-" + dir + ".gif' style='right:" + right + "px;top:" + top + "px'>")
                .appendTo(placeholder)
                .click(function(e) {
                    e.preventDefault();
                    navplot.pan(offset);
                });
        }

        addArrow("left", 55, 60, {
            left: -100
        });
        addArrow("right", 25, 60, {
            left: 100
        });
        addArrow("up", 40, 45, {
            top: -100
        });
        addArrow("down", 40, 75, {
            top: 100
        });



        /*------------------------ Series Pie -----------------------*/



        var data = [],
            series = Math.floor(Math.random() * 6) + 3;

        for (var i = 0; i < series; i++) {
            data[i] = {
                label: "Series" + (i + 1),
                data: Math.floor(Math.random() * 100) + 1
            }
        }

        var placeholder = $("#placeholder");

        $("#example-1").click(function() {

            placeholder.unbind();

            $("#title").text("Default pie chart");
            $("#description").text("The default pie chart with no options set.");

            $.plot(placeholder, data, {
                series: {
                    pie: {
                        show: true
                    }
                }
            });

            setCode([
                "$.plot('#placeholder', data, {",
                "    series: {",
                "        pie: {",
                "            show: true",
                "        }",
                "    }",
                "});"
            ]);
        });


        /* ------------------------ FLOT PIE ---------------------*/




        var data = [],
            //series = Math.floor(Math.random() * 6) + 3;
            series = 5;

        for (var i = 0; i < series; i++) {
            data[i] = {
                label: "Series" + (i + 1),
                data: Math.floor(Math.random() * 100) + 1
            }
        }

        var flotpie = $("#flotpie");

        $("#pieexample-1").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        show: true,
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
            });

        });

        $("#pieexample-2").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        show: true
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
                legend: {
                    show: false
                }
            });


        });

        $("#pieexample-3").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 1,
                            formatter: labelFormatter,
                            background: {
                                opacity: 0.8
                            }
                        }
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
                legend: {
                    show: false
                }
            });

        });

        $("#pieexample-4").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 3 / 4,
                            formatter: labelFormatter,
                            background: {
                                opacity: 0.5
                            }
                        }
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
                legend: {
                    show: false
                }
            });

        });

        $("#pieexample-5").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 3 / 4,
                            formatter: labelFormatter,
                            background: {
                                opacity: 0.5,
                                color: "#000"
                            }
                        }
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
                legend: {
                    show: false
                }
            });

        });

        $("#pieexample-6").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        show: true,
                        radius: 3 / 4,
                        label: {
                            show: true,
                            radius: 3 / 4,
                            formatter: labelFormatter,
                            background: {
                                opacity: 0.5,
                                color: "#000"
                            }
                        }
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
                legend: {
                    show: false
                }
            });

        });

        $("#pieexample-7").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 2 / 3,
                            formatter: labelFormatter,
                            threshold: 0.1
                        }
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
                legend: {
                    show: false
                }
            });

        });

        $("#pieexample-8").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        show: true,
                        combine: {
                            color: "#999",
                            threshold: 0.05
                        }
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
                legend: {
                    show: false
                }
            });

        });

        $("#pieexample-9").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        show: true,
                        radius: 500,
                        label: {
                            show: true,
                            formatter: labelFormatter,
                            threshold: 0.1
                        }
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
                legend: {
                    show: false
                }
            });

        });

        $("#pieexample-10").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        tilt: 0.5,
                        label: {
                            show: true,
                            radius: 1,
                            formatter: labelFormatter,
                            background: {
                                opacity: 0.8
                            }
                        },
                        combine: {
                            color: "#999",
                            threshold: 0.1
                        }
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
                legend: {
                    show: false
                }
            });

        });

        $("#pieexample-11").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        innerRadius: 0.5,
                        show: true
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
            });

        });

        $("#pieexample-12").click(function() {

            flotpie.unbind();

            $.plot(flotpie, data, {
                series: {
                    pie: {
                        show: true
                    }
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979", "#da2527"],
                grid: {
                    hoverable: true,
                    clickable: true
                },
            });


            flotpie.bind("plothover", function(event, pos, obj) {

                if (!obj) {
                    return;
                }

                var percent = parseFloat(obj.series.percent).toFixed(2);
                $("#hover").html("<span style='font-weight:bold; color:" + obj.series.color + "'>" + obj.series.label + " (" + percent + "%)</span>");
            });

            flotpie.bind("plotclick", function(event, pos, obj) {

                if (!obj) {
                    return;
                }

                var percent = parseFloat(obj.series.percent).toFixed(2);
                alert("" + obj.series.label + ": " + percent + "%");
            });
        });

        // Show the initial default chart

        $("#flotpiemenu button").click(function() {
            $("#flotpiemenu button").removeClass("btn-success").addClass("btn-default");
            $(this).addClass("btn-success").removeClass("btn-default");
        });


        $("#pieexample-1").click();





        /*------------------ Series Toggle ---------------------*/


        var togdatasets = {
            "usa": {
                label: "USA",
                data: [
                    [1988, 483994],
                    [1989, 479060],
                    [1990, 457648],
                    [1991, 401949],
                    [1992, 424705],
                    [1993, 402375],
                    [1994, 377867],
                    [1995, 357382],
                    [1996, 337946],
                    [1997, 336185],
                    [1998, 328611],
                    [1999, 329421],
                    [2000, 342172],
                    [2001, 344932],
                    [2002, 387303],
                    [2003, 440813],
                    [2004, 480451],
                    [2005, 504638],
                    [2006, 528692]
                ]
            },
            "russia": {
                label: "Russia",
                data: [
                    [1988, 218000],
                    [1989, 203000],
                    [1990, 171000],
                    [1992, 42500],
                    [1993, 37600],
                    [1994, 36600],
                    [1995, 21700],
                    [1996, 19200],
                    [1997, 21300],
                    [1998, 13600],
                    [1999, 14000],
                    [2000, 19100],
                    [2001, 21300],
                    [2002, 23600],
                    [2003, 25100],
                    [2004, 26100],
                    [2005, 31100],
                    [2006, 34700]
                ]
            },
            "uk": {
                label: "UK",
                data: [
                    [1988, 62982],
                    [1989, 62027],
                    [1990, 60696],
                    [1991, 62348],
                    [1992, 58560],
                    [1993, 56393],
                    [1994, 54579],
                    [1995, 50818],
                    [1996, 50554],
                    [1997, 48276],
                    [1998, 47691],
                    [1999, 47529],
                    [2000, 47778],
                    [2001, 48760],
                    [2002, 50949],
                    [2003, 57452],
                    [2004, 60234],
                    [2005, 60076],
                    [2006, 59213]
                ]
            },
            "germany": {
                label: "Germany",
                data: [
                    [1988, 55627],
                    [1989, 55475],
                    [1990, 58464],
                    [1991, 55134],
                    [1992, 52436],
                    [1993, 47139],
                    [1994, 43962],
                    [1995, 43238],
                    [1996, 42395],
                    [1997, 40854],
                    [1998, 40993],
                    [1999, 41822],
                    [2000, 41147],
                    [2001, 40474],
                    [2002, 40604],
                    [2003, 40044],
                    [2004, 38816],
                    [2005, 38060],
                    [2006, 36984]
                ]
            },
            "denmark": {
                label: "Denmark",
                data: [
                    [1988, 3813],
                    [1989, 3719],
                    [1990, 3722],
                    [1991, 3789],
                    [1992, 3720],
                    [1993, 3730],
                    [1994, 3636],
                    [1995, 3598],
                    [1996, 3610],
                    [1997, 3655],
                    [1998, 3695],
                    [1999, 3673],
                    [2000, 3553],
                    [2001, 3774],
                    [2002, 3728],
                    [2003, 3618],
                    [2004, 3638],
                    [2005, 3467],
                    [2006, 3770]
                ]
            },
            "sweden": {
                label: "Sweden",
                data: [
                    [1988, 6402],
                    [1989, 6474],
                    [1990, 6605],
                    [1991, 6209],
                    [1992, 6035],
                    [1993, 6020],
                    [1994, 6000],
                    [1995, 6018],
                    [1996, 3958],
                    [1997, 5780],
                    [1998, 5954],
                    [1999, 6178],
                    [2000, 6411],
                    [2001, 5993],
                    [2002, 5833],
                    [2003, 5791],
                    [2004, 5450],
                    [2005, 5521],
                    [2006, 5271]
                ]
            },
            "norway": {
                label: "Norway",
                data: [
                    [1988, 4382],
                    [1989, 4498],
                    [1990, 4535],
                    [1991, 4398],
                    [1992, 4766],
                    [1993, 4441],
                    [1994, 4670],
                    [1995, 4217],
                    [1996, 4275],
                    [1997, 4203],
                    [1998, 4482],
                    [1999, 4506],
                    [2000, 4358],
                    [2001, 4385],
                    [2002, 5269],
                    [2003, 5066],
                    [2004, 5194],
                    [2005, 4887],
                    [2006, 4891]
                ]
            }
        };

        // hard-code color indices to prevent them from shifting as
        // countries are turned on/off

        var i = 0;
        $.each(togdatasets, function(key, val) {
            val.color = i;
            ++i;
        });

        // insert checkboxes 
        var choiceContainer = $("#choices");
        $.each(togdatasets, function(key, val) {
            choiceContainer.append("<br/><input class='iCheck' type='checkbox' name='" + key +
                "' checked='checked' id='id" + key + "'></input>" +
                "<label class='form-label' for='id" + key + "'>" + val.label + "</label>");
        });

        // if icheck is not applied, then use this code below
        //choiceContainer.find("input").click(plotAccordingToChoices);

        if ($.isFunction($.fn.iCheck)) {
            $('#choices input').on('ifChanged', function(event) {
                plotAccordingToChoices();
            });
        }


        function plotAccordingToChoices() {

            var data = [];

            choiceContainer.find("input:checked").each(function() {
                var key = $(this).attr("name");
                if (key && togdatasets[key]) {
                    data.push(togdatasets[key]);
                }
            });

            if (data.length > 0) {
                $.plot("#flot-toggle", data, {
                    yaxis: {
                        min: 0
                    },
                    xaxis: {
                        tickDecimals: 0
                    },
                    series: {
                        shadowSize: 0 // Drawing is faster without shadows
                    },
                    colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                    grid: {
                        tickColor: "#f5f5f5",
                        borderWidth: 1,
                        borderColor: "#eaeaea"
                    },

                });
            }
        }

        plotAccordingToChoices();



        /* -------------------- Series Types ------------------*/



        var typed1 = [];
        for (var i = 0; i < 14; i += 0.5) {
            typed1.push([i, Math.sin(i)]);
        }

        var typed2 = [
            [0, 3],
            [4, 8],
            [8, 5],
            [9, 13]
        ];

        var typed3 = [];
        for (var i = 0; i < 14; i += 0.5) {
            typed3.push([i, Math.cos(i)]);
        }

        var typed4 = [];
        for (var i = 0; i < 14; i += 0.1) {
            typed4.push([i, Math.sqrt(i * 10)]);
        }

        var typed5 = [];
        for (var i = 0; i < 14; i += 0.5) {
            typed5.push([i, Math.sqrt(i)]);
        }

        var typed6 = [];
        for (var i = 0; i < 14; i += 0.5 + Math.random()) {
            typed6.push([i, Math.sqrt(2 * i + Math.sin(i) + 5)]);
        }

        $.plot("#flot-types", [{
            data: typed1,
            lines: {
                show: true,
                fill: true
            }
        }, {
            data: typed2,
            bars: {
                show: true
            }
        }, {
            data: typed3,
            points: {
                show: true
            }
        }, {
            data: typed4,
            lines: {
                show: true
            }
        }, {
            data: typed5,
            lines: {
                show: true
            },
            points: {
                show: true
            }
        }, {
            data: typed6,
            lines: {
                show: true,
                steps: true
            }
        }], {
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
            colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
            grid: {
                tickColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#eaeaea"
            },

        });




        /*------------------ Stacking -------------------------*/


        var stackd1 = [];
        for (var i = 0; i <= 10; i += 1) {
            stackd1.push([i, parseInt(Math.random() * 30)]);
        }

        var stackd2 = [];
        for (var i = 0; i <= 10; i += 1) {
            stackd2.push([i, parseInt(Math.random() * 30)]);
        }

        var stackd3 = [];
        for (var i = 0; i <= 10; i += 1) {
            stackd3.push([i, parseInt(Math.random() * 30)]);
        }

        var stack = 0,
            bars = true,
            lines = false,
            steps = false;

        function plotWithOptions() {
            $.plot("#flot-stack", [stackd1, stackd2, stackd3], {
                series: {
                    stack: stack,
                    lines: {
                        show: lines,
                        fill: true,
                        steps: steps
                    },
                    bars: {
                        show: bars,
                        barWidth: 0.6
                    },
                    shadowSize: 0 // Drawing is faster without shadows
                },
                colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
                grid: {
                    tickColor: "#f5f5f5",
                    borderWidth: 1,
                    borderColor: "#eaeaea"
                },
            });
        }

        plotWithOptions();

        $(".stackControls button").click(function(e) {
            e.preventDefault();
            stack = $(this).text() == "With stacking" ? true : null;
            plotWithOptions();

            $(".stackControls button").removeClass("btn-success").addClass("btn-default");
            $(this).addClass("btn-success").removeClass("btn-default");

        });

        $(".graphControls button").click(function(e) {
            e.preventDefault();
            bars = $(this).text().indexOf("Bars") != -1;
            lines = $(this).text().indexOf("Lines") != -1;
            steps = $(this).text().indexOf("steps") != -1;
            plotWithOptions();

            $(".graphControls button").removeClass("btn-success").addClass("btn-default");
            $(this).addClass("btn-success").removeClass("btn-default");

        });



        /*------------------- Tracking -------------------------*/



        var sin = [],
            cos = [];
        for (var i = 0; i < 14; i += 0.1) {
            sin.push([i, Math.sin(i)]);
            cos.push([i, Math.cos(i)]);
        }

        var trackplot = $.plot("#flot-track", [{
            data: sin,
            label: "sin(x) = -0.00"
        }, {
            data: cos,
            label: "cos(x) = -0.00"
        }], {
            series: {
                lines: {
                    show: true
                }
            },
            crosshair: {
                mode: "x"
            },
            grid: {
                hoverable: true,
                autoHighlight: true,
                tickColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#eaeaea"
            },
            yaxis: {
                min: -1.2,
                max: 1.2
            },
            colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
        });

        var legends = $("#flot-track .legendLabel");

        legends.each(function() {
            // fix the widths so they don't jump around
            $(this).css('width', $(this).width());
        });

        var updateLegendTimeout = null;
        var latestPosition = null;

        function updateLegend() {

            updateLegendTimeout = null;

            var pos = latestPosition;

            var axes = trackplot.getAxes();
            if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
                pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
                return;
            }

            var i, j, trackdataset = trackplot.getData();
            for (i = 0; i < trackdataset.length; ++i) {

                var series = trackdataset[i];

                // Find the nearest points, x-wise

                for (j = 0; j < series.data.length; ++j) {
                    if (series.data[j][0] > pos.x) {
                        break;
                    }
                }

                // Now Interpolate

                var y,
                    p1 = series.data[j - 1],
                    p2 = series.data[j];

                if (p1 == null) {
                    y = p2[1];
                } else if (p2 == null) {
                    y = p1[1];
                } else {
                    y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);
                }

                legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
            }
        }

        $("#flot-track").bind("plothover", function(event, pos, item) {
            latestPosition = pos;
            if (!updateLegendTimeout) {
                updateLegendTimeout = setTimeout(updateLegend, 50);
            }
        });









        /*------------------- Visitor -------------------------*/


        var visitd = [
            [1196463600000, 0],
            [1196550000000, 0],
            [1196636400000, 0],
            [1196722800000, 77],
            [1196809200000, 3636],
            [1196895600000, 3575],
            [1196982000000, 2736],
            [1197068400000, 1086],
            [1197154800000, 676],
            [1197241200000, 1205],
            [1197327600000, 906],
            [1197414000000, 710],
            [1197500400000, 639],
            [1197586800000, 540],
            [1197673200000, 435],
            [1197759600000, 301],
            [1197846000000, 575],
            [1197932400000, 481],
            [1198018800000, 591],
            [1198105200000, 608],
            [1198191600000, 459],
            [1198278000000, 234],
            [1198364400000, 1352],
            [1198450800000, 686],
            [1198537200000, 279],
            [1198623600000, 449],
            [1198710000000, 468],
            [1198796400000, 392],
            [1198882800000, 282],
            [1198969200000, 208],
            [1199055600000, 229],
            [1199142000000, 177],
            [1199228400000, 374],
            [1199314800000, 436],
            [1199401200000, 404],
            [1199487600000, 253],
            [1199574000000, 218],
            [1199660400000, 476],
            [1199746800000, 462],
            [1199833200000, 448],
            [1199919600000, 442],
            [1200006000000, 403],
            [1200092400000, 204],
            [1200178800000, 194],
            [1200265200000, 327],
            [1200351600000, 374],
            [1200438000000, 507],
            [1200524400000, 546],
            [1200610800000, 482],
            [1200697200000, 283],
            [1200783600000, 221],
            [1200870000000, 483],
            [1200956400000, 523],
            [1201042800000, 528],
            [1201129200000, 483],
            [1201215600000, 452],
            [1201302000000, 270],
            [1201388400000, 222],
            [1201474800000, 439],
            [1201561200000, 559],
            [1201647600000, 521],
            [1201734000000, 477],
            [1201820400000, 442],
            [1201906800000, 252],
            [1201993200000, 236],
            [1202079600000, 525],
            [1202166000000, 477],
            [1202252400000, 386],
            [1202338800000, 409],
            [1202425200000, 408],
            [1202511600000, 237],
            [1202598000000, 193],
            [1202684400000, 357],
            [1202770800000, 414],
            [1202857200000, 393],
            [1202943600000, 353],
            [1203030000000, 364],
            [1203116400000, 215],
            [1203202800000, 214],
            [1203289200000, 356],
            [1203375600000, 399],
            [1203462000000, 334],
            [1203548400000, 348],
            [1203634800000, 243],
            [1203721200000, 126],
            [1203807600000, 157],
            [1203894000000, 288]
        ];

        // first correct the timestamps - they are recorded as the daily
        // midnights in UTC+0100, but Flot always displays dates in UTC
        // so we have to add one hour to hit the midnights in the plot

        for (var i = 0; i < visitd.length; ++i) {
            visitd[i][0] += 60 * 60 * 1000;
        }

        // helper for returning the weekends in a period

        function weekendAreas(axes) {

            var markings = [],
                d = new Date(axes.xaxis.min);

            // go to the first Saturday

            d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7))
            d.setUTCSeconds(0);
            d.setUTCMinutes(0);
            d.setUTCHours(0);

            var i = d.getTime();

            // when we don't set yaxis, the rectangle automatically
            // extends to infinity upwards and downwards

            do {
                markings.push({
                    xaxis: {
                        from: i,
                        to: i + 2 * 24 * 60 * 60 * 1000
                    }
                });
                i += 7 * 24 * 60 * 60 * 1000;
            } while (i < axes.xaxis.max);

            return markings;
        }

        var options = {
            xaxis: {
                mode: "time",
                tickLength: 5
            },
            selection: {
                mode: "x"
            },
            colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
            grid: {
                markings: weekendAreas,
                tickColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#eaeaea"
            }

        };

        var visitplot = $.plot("#flot-visitors", [visitd], options);

        var overview = $.plot("#flot-visit-overview", [visitd], {
            series: {
                lines: {
                    show: true,
                    lineWidth: 1
                },
                shadowSize: 0
            },
            xaxis: {
                ticks: [],
                mode: "time"
            },
            yaxis: {
                ticks: [],
                min: 0,
                autoscaleMargin: 0.1
            },
            selection: {
                mode: "x"
            },
            colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
            grid: {
                tickColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#eaeaea"
            }


        });

        // now connect the two

        $("#flot-visitors").bind("plotselected", function(event, ranges) {

            // do the zooming
            $.each(visitplot.getXAxes(), function(_, axis) {
                var opts = axis.options;
                opts.min = ranges.xaxis.from;
                opts.max = ranges.xaxis.to;
            });
            visitplot.setupGrid();
            visitplot.draw();
            visitplot.clearSelection();

            // don't fire event on the overview to prevent eternal loop

            overview.setSelection(ranges, true);
        });

        $("#flot-visit-overview").bind("plotselected", function(event, ranges) {
            visitplot.setSelection(ranges);
        });



        /*------------------ Zoom -------------------------*/



        // setup plot

        function getData(x1, x2) {

            var d = [];
            for (var i = 0; i <= 100; ++i) {
                var x = x1 + i * (x2 - x1) / 100;
                d.push([x, Math.sin(x * Math.sin(x))]);
            }

            return [{
                label: "sin(x sin(x))",
                data: d
            }];
        }

        var zoomoptions = {
            legend: {
                show: false
            },
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                },
                shadowSize: 0
            },
            yaxis: {
                ticks: 10
            },
            colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
            grid: {
                tickColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#eaeaea",
            },

            selection: {
                mode: "xy"
            }
        };

        var startData = getData(0, 3 * Math.PI);

        var plot = $.plot("#flot-zoom", startData, zoomoptions);

        // Create the overview plot

        var zoomoverview = $.plot("#flot-zoom-overview", startData, {
            legend: {
                show: false
            },
            series: {
                lines: {
                    show: true,
                    lineWidth: 1
                },
                shadowSize: 0
            },
            xaxis: {
                ticks: 4
            },
            yaxis: {
                ticks: 3,
                min: -2,
                max: 2
            },
            colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
            grid: {
                tickColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#eaeaea",
            },
            selection: {
                mode: "xy"
            }
        });

        // now connect the two

        $("#flot-zoom").bind("plotselected", function(event, ranges) {

            // clamp the zooming to prevent eternal zoom

            if (ranges.xaxis.to - ranges.xaxis.from < 0.00001) {
                ranges.xaxis.to = ranges.xaxis.from + 0.00001;
            }

            if (ranges.yaxis.to - ranges.yaxis.from < 0.00001) {
                ranges.yaxis.to = ranges.yaxis.from + 0.00001;
            }

            // do the zooming

            plot = $.plot("#flot-zoom", getData(ranges.xaxis.from, ranges.xaxis.to),
                $.extend(true, {}, zoomoptions, {
                    xaxis: {
                        min: ranges.xaxis.from,
                        max: ranges.xaxis.to
                    },
                    yaxis: {
                        min: ranges.yaxis.from,
                        max: ranges.yaxis.to
                    }
                })
            );

            // don't fire event on the overview to prevent eternal loop

            zoomoverview.setSelection(ranges, true);
        });

        $("#flot-zoom-overview").bind("plotselected", function(event, ranges) {
            plot.setSelection(ranges);
        });



        /* ------------------ Area Chart ------------------------*/


        var data7_1 = [
            [1354586111100, 153],
            [1354587111100, 65],
            [1354588111100, 98],
            [1354589111100, 83],
            [1354591111000, 80],
            [1354591111100, 89],
            [1354592111100, 220],
            [1354593111100, 74],
            [1354594111100, 23],
            [1354595111100, 79],
            [1354596111100, 88],
            [1354597111100, 36]
        ];
        var data7_2 = [
            [1354586111100, 153],
            [1354587111100, 65],
            [1354588111100, 298],
            [1354589111100, 83],
            [1354591111000, 80],
            [1354591111100, 89],
            [1354592111100, 20],
            [1354593111100, 74],
            [1354594111100, 23],
            [1354595111100, 79],
            [1354596111100, 788],
            [1354597111100, 836]
        ];


        $.plot($("#demoarea-chart #demoarea-container"), [{
            data: data7_1,
            label: "Views",
            lines: {
                fill: true
            }
        }, {
            data: data7_2,
            label: "Logins",

            points: {
                show: true
            },
            lines: {
                show: true
            },
            yaxis: 2
        }], {
            series: {
                lines: {
                    show: true,
                    fill: false
                },
                points: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 5
                },
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                mode: "time"
            },
            yaxes: [{
                /* First y axis */
            }, {
                /* Second y axis */
                position: "right" /* left or right */
            }]
        });






        /*---------------- Combined Chart --------------------*/

        var data_1type = [
            [0, 2601],
            [1, 3520],
            [2, 4337],
            [3, 6261],
            [4, 3157],
            [5, 4788],
            [6, 5588],
            [7, 6848],
            [8, 7854],
            [9, 6838],
            [10, 188],
            [11, 2214],
            [12, 8364],
            [13, 4489],
            [14, 558],
            [15, 2682],
            [16, 3769],
            [17, 4269],
            [18, 5618],
            [19, 1470],
            [20, 3130],
            [21, 2425],
            [22, 3583],
            [23, 743]
        ];
        var data_2type = [
            [0, 4145],
            [1, 5192],
            [2, 7138],
            [3, 5132],
            [4, 2234],
            [5, 1423],
            [6, 1347],
            [7, 633],
            [8, 634],
            [9, 493],
            [10, 836],
            [11, 2301],
            [12, 3315],
            [13, 3397],
            [14, 5712],
            [15, 2871],
            [16, 3760],
            [17, 4779],
            [18, 4925],
            [19, 4953],
            [20, 4292],
            [21, 3525],
            [22, 3420],
            [23, 8201]
        ];
        var data_diff = [
            [23, 1727],
            [22, 118],
            [21, 1210],
            [20, 922],
            [19, 1227],
            [18, 923],
            [17, 520],
            [16, 1229],
            [15, 1],
            [14, 46],
            [13, 5452],
            [12, 4444],
            [11, 1653],
            [10, 255],
            [9, 54],
            [8, 1760],
            [7, 1665],
            [6, 8669],
            [5, 665],
            [4, 767],
            [3, 2671],
            [2, 4061],
            [1, 726],
            [0, 1566]
        ];
        var ticks = [
            [0, "22h"],
            [1, ""],
            [2, "00h"],
            [3, ""],
            [4, "02h"],
            [5, ""],
            [6, "04h"],
            [7, ""],
            [8, "06h"],
            [9, ""],
            [10, "08h"],
            [11, ""],
            [12, "10h"],
            [13, ""],
            [14, "12h"],
            [15, ""],
            [16, "14h"],
            [17, ""],
            [18, "16h"],
            [19, ""],
            [20, "18h"],
            [21, ""],
            [22, "20h"],
            [23, ""]
        ];
        var combinedata = [{
            label: "Data Set 1",
            data: data_1type,
            lines: {
                show: true,
                fill: true
            },
            points: {
                show: true
            }
        }, {
            label: "Data Set 2",
            data: data_2type,
            lines: {
                show: true
            },
            points: {
                show: true
            }
        }, {
            label: "Data Set 3",
            data: data_diff,
            bars: {
                show: true
            }
        }];
        var combineoptions = {
            xaxis: {
                ticks: ticks
            },
            series: {
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#eaeaea"
            },
            colors: ["#1fb5ac", "#9972b5", "#fa8564", "#FDB45C", "#797979"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            legend: {
                labelBoxBorderColor: "#000000",
                container: $("#democombine"),
                noColumns: 0
            }
        };
        var combineplot = $.plot($("#flotcombine"),
            combinedata, combineoptions);


        /*-----------------------------------------------------*/
    };


    function labelFormatter(label, series) {
        return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
    }




    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        ULTRA_SETTINGS.chartFlot();
    });

    $(window).resize(function() {
    });

    $(window).load(function() {});

});
