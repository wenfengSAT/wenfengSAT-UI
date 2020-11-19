// **----
// Charts
// **----
jQuery(document).ready(function($) {
    "use strict";

    // Combine Flot Chart

    var combine_chart_data1 = [
        [1, 600],
        [2, 500],
        [3, 400],
        [4, 600],
        [5, 800],
        [6, 1000],
        [7, 900],
        [8, 1000],
        [9, 1100],
        [10,1200]
    ];
    var combine_chart_data2 = [
        [1, 300],
        [2, 300],
        [3, 420],
        [4, 500],
        [5, 350],
        [6, 470],
        [7, 590],
        [8, 680],
        [9, 700],
        [10, 780]
    ];
    var combine_chart_data3 = [
        [1, 400],
        [2, 300],
        [3, 200],
        [4, 400],
        [5, 600],
        [6, 800],
        [7, 700],
        [8, 800],
        [9, 900],
        [10,1000]
    ];

    var combine_chart_data_set = [{
        data: combine_chart_data1,
        label: "Mobile",
        lines: {
            show: true,
            fill:0.1,
            lineWidth: 1.5
        },
        points: {
            show: true,
            lineWidth: 1.5,
            radius: 3,
            symbol: "diamond",
            fill: true,
            fillColor: "#ffffff"

        }
    }, {
        data: combine_chart_data2,
        label: "Tablet",
        bars: {
            show: true,
            fill: 0.6,
            lineWidth: 0,
            barWidth: 0.3
        }


    }, {
        data: combine_chart_data3,
        label: "Desktop",
        lines: {
            show: true,
            fill: 0.1,
            lineWidth: 1.5
        },
        points: {
            show: true,
            lineWidth: 1.5,
            radius: 3,
            symbol: "square",
            fill: true,
            fillColor: "#ffffff"

        }
    }];
    var combine_chart_data_options = {
        legend: {
            position: "nw",
            noColumns: 3,
            container: $("#combine-chart-legend")
        },
        grid: {
            hoverable: true,
            borderWidth: {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            },
            clickable: true,
            borderColor: "#eee",
            margin: {
                top: 10,
                right: 20,
                bottom: 0,
                left: 20
            },
            minBorderMargin: 1,
            labelMargin: 20,
            mouseActiveRadius: 30,
            backgroundColor: {
                colors: ["#fff", "#fff"]
            }
        },
        series: {
            stack: false,
            shadowSize: 0
        },
        xaxis: {
            tickSize: 1,
            show: true,
            color: '#eee'
        },
        yaxis: {
            show: true,
            color: '#eee'
        },
        tooltip: {
            show: true,
            cssClass: "MainFlotTip",
            content: "<strong>" + "%s" + ": </strong>" + "%y"
        },
        colors: ["#e57373", "#d84315", "#009688"]
    }

    var CombineChart = $.plot($("#combine-chart"), combine_chart_data_set, combine_chart_data_options);


    // Line Chart
    var line_chart_data1 = [
        [1, 600],
        [2, 500],
        [3, 600],
        [4, 500],
        [5, 600],
        [6, 500],
        [7, 600],
        [8, 500],
        [9, 600],
        [10,500],
        [11,600],
        [12,500],
        [13,600],
        [14,700],
        [15,800]
    ];
    var line_chart_data2 = [
        [1, 500],
        [2, 400],
        [3, 500],
        [4, 400],
        [5, 500],
        [6, 400],
        [7, 500],
        [8, 400],
        [9, 500],
        [10,400],
        [11,500],
        [12,400],
        [13,500],
        [14,600],
        [15,700]
    ]
    var line_chart_data_set = [{
        data: line_chart_data1,
        label: "Admin Template",
        lines: {
            show: true,
            fill: 0,
            lineWidth: 1.5
        },
        points: {
            show: true,
            lineWidth: 1.5,
            radius: 3,
            symbol: "circle",
            fill: true,
            fillColor: "#ffffff"

        }
    },
        {
        data: line_chart_data2,
        label: "WP Theme",
        lines: {
            show: true,
            fill: 0.2,
            lineWidth: 1.5
        },
        points: {
            show: true,
            lineWidth: 1.5,
            radius: 3,
            symbol: "circle",
            fill: true,
            fillColor: "#ffffff"

        }
    }];
    var line_chart_data_options = {
        legend: {
            position: "nw",
            noColumns: 3,
            container: $("#line-chart-legend")
        },
        grid: {
            hoverable: true,
            borderWidth: {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            },
            clickable: true,
            borderColor: "#eee",
            margin: {
                top: 10,
                right: 20,
                bottom: 0,
                left: 20
            },
            minBorderMargin: 1,
            labelMargin: 20,
            mouseActiveRadius: 30,
            backgroundColor: {
                colors: ["#fff", "#fff"]
            }
        },
        series: {
            stack: false,
            shadowSize: 0
        },
        xaxis: {
            tickSize: 1,
            show: true,
            color: '#eee'
        },
        yaxis: {
            tickSize: 100,
            show: true,
            color: '#eee'
        },
        tooltip: {
            show: true,
            cssClass: "MainFlotTip",
            content: "<strong>" + "%s" + ": </strong>" + "$%y (USD)"
        },
        colors: ["#5c6bc0", "#00838f"]
    }

    var LineChart = $.plot($("#line-chart"), line_chart_data_set, line_chart_data_options);


    // Spline Chart
    var spline_chart_options = {
        grid: {
            hoverable: true,
            borderWidth: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            clickable: true,
            borderColor: "#f0f0f0",
            margin: {
                top: 10,
                right: 10,
                bottom: 0,
                left: 10
            },
            minBorderMargin: 1,
            labelMargin: 20,
            mouseActiveRadius: 30,
            backgroundColor: {
                colors: ["#fff", "#fff"]
            }
        },
        legend: {
            noColumns: 0,
            show: true,
            container: $("#spline-chart-legend"),
            labelFormatter: function (label, series) {
                return "<span class=\"w_legend\">" + label + "</span>";
            },
            backgroundOpacity: 0.9,
            labelBoxBorderColor: "#000000",
            position: "nw"
        },
        series: {
            stack: true,
            shadowSize: 1

        },
        xaxis: {
            tickLength: 0,
            show: true,
            color: '#eee',
            ticks: [
                [1, "Sat"],
                [2, "Sun"],
                [3, "Mon"],
                [4, "Tue"],
                [5, "Wed"],
                [6, "Thu"],
                [7, "Fri"]
            ]

        },
        yaxis: {
            ticks: false,
            tickLength: 0

        },
        tooltip: {
            show: true,
            cssClass: "StatsFlotTip",
            content: "$%y(USD)"
        },
        colors: ["#4db6ac"]
    };
    var spline_chart_data = {
        label: "Earning",
        lines: {
            show: false,
            fill: true,
            lineWidth:1.5
        },
        splines: {
            show: true,
            tension: 0.5,
            lineWidth:1.5,
            fill:0
        },
        points: {
            show: true,
            lineWidth: 1.5,
            radius: 3,
            symbol: "circle",
            fill: true,
            fillColor: "#ffffff"

        },
        data: [
            [1, 3500],
            [2, 3600],
            [3, 4000],
            [4, 3800],
            [5, 5000],
            [6, 3800],
            [7, 4200]
        ]
    };


    var SpLineChart = $.plot($("#spline-chart"), [spline_chart_data], spline_chart_options);




    var multi_spline_data1 = [
        [1, 500],
        [2, 400],
        [3, 500],
        [4, 400],
        [5, 600],
        [6, 400],
        [7, 500],
        [8, 400],
        [9, 500],
        [10,600]
    ];
    var multi_spline_data2 = [
        [1, 700],
        [2, 600],
        [3, 700],
        [4, 600],
        [5, 1000],
        [6, 600],
        [7, 700],
        [8, 600],
        [9, 700],
        [10,800]
    ];
    var multi_spline_data3 = [
        [1, 600],
        [2, 500],
        [3, 600],
        [4, 500],
        [5, 800],
        [6, 500],
        [7, 600],
        [8, 500],
        [9, 600],
        [10,700]
    ];

    var multi_spline_data_set = [{
        data: multi_spline_data1,
        label: "SMS",
        lines: {
            show: false,
            fill: 0.2,
            lineWidth: 1.5
        },
        splines: {
            show: true,
            tension: 0.3,
            lineWidth: 1,
            fill: 0.4
        },
        points: {
            show: false,
            lineWidth: 1.5,
            radius: 3,
            symbol: "diamond",
            fill: true,
            fillColor: "#ffffff"

        }
    }, {
        data: multi_spline_data2,
        label: "CALL",
        lines: {
            show: false,
            fill: 0.2,
            lineWidth: 1.5
        },
        splines: {
            show: true,
            tension: 0.3,
            lineWidth: 1,
            fill: 0
        },
        points: {
        show: false,
            lineWidth: 1.5,
            radius: 3,
            symbol: "circle",
            fill: true,
            fillColor: "#ffffff"

    }


    }, {
        data: multi_spline_data3,
        label: "EMAIL",
        lines: {
            show: false,
            fill: 0.2,
            lineWidth: 1.5
        },
        splines: {
            show: true,
            tension: 0.3,
            lineWidth: 1,
            fill: 0
        },
        points: {
            show: false,
            lineWidth: 1.5,
            radius: 3,
            symbol: "square",
            fill: true,
            fillColor: "#ffffff"

        }
    }];
    var multi_spline_data_options = {
        legend: {
            position: "nw",
            noColumns: 4,
            container: $("#multi-spline-chart-legend")
        },
        grid: {
            hoverable: true,
            borderWidth: {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            },
            clickable: false,
            borderColor: "#eee",
            margin: {
                top: 10,
                right: 20,
                bottom: 0,
                left: 20
            },
            minBorderMargin: 1,
            labelMargin: 20,
            mouseActiveRadius: 30,
            backgroundColor: {
                colors: ["#fff", "#fff"]
            }
        },
        series: {
            stack: false,
            shadowSize: 0
        },
        xaxis: {
            show: true,
            color: '#eee',
            tickSize: 1
        },
        yaxis: {
            show: true,
            color: '#eee',
            tickSize: 200
        },
        tooltip: {
            show: true,
            cssClass: "MainFlotTip",
            content: "%s: %y"
        },
        colors: ["#5c6bc0", "#009688", "#e65100"]
    }

    var MultiSpLineChart = $.plot($("#multi-spline-chart"),multi_spline_data_set, multi_spline_data_options);


    // Curved Line

    var curved_line_data1 = [
        [1, 400],
        [2, 200],
        [3, 300],
        [4, 200],
        [5, 800],
        [6, 400],
        [7, 300],
        [8, 200],
        [9, 300],
        [10, 200],
        [11, 300],
        [12, 200]
    ];

    var curved_line_data2 = [
        [1, 600],
        [2, 500],
        [3, 600],
        [4, 500],
        [5, 800],
        [6, 500],
        [7, 600],
        [8, 500],
        [9, 600],
        [10,700],
        [11,800],
        [12,700]
    ];

    var curved_line_data3 = [
        [1, 500],
        [2, 400],
        [3, 500],
        [4, 400],
        [5, 800],
        [6, 500],
        [7, 400],
        [8, 500],
        [9, 400],
        [10,500],
        [11,600],
        [12,700]
    ];

    var curved_line_data_set = [{
        data: curved_line_data1,
        label: "WP Theme",
        lines: {
            show: true,
            fill: 1,
            lineWidth: 0
        }
    }, {
        data: curved_line_data2,
        label: "Admin Template",
        lines: {
            show: true,
            fill: 0.8,
            lineWidth: 0
        }


    }, {
        data: curved_line_data3,
        label: "Joomla",
        lines: {
            show: true,
            fill: 0.8,
            lineWidth: 0
        }
    }];
    var curved_line_options = {
        legend: {
            position: "nw",
            noColumns: 4,
            container: $("#curved-line-chart-legend")
        },
        grid: {
            hoverable: true,
            borderWidth: {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            },
            clickable: false,
            borderColor: "#eee",
            margin: {
                top: 10,
                right: 20,
                bottom: 0,
                left: 20
            },
            minBorderMargin: 1,
            labelMargin: 20,
            mouseActiveRadius: 30,
            backgroundColor: {
                colors: ["#fff", "#fff"]
            }
        },
        series: {
            stack: true,
            shadowSize: 0,

            curvedLines: {
                apply: true,
                active: true,
                monotonicFit: true
            }
        },
        xaxis: {
            show: true,
            color: '#eee',
            tickSize:1
        },
        yaxis: {
            show: true,
            color: '#eee',
            tickSize:400
        },
        tooltip: {
            show: true,
            cssClass: "MainFlotTip",
            content: '<h5>%s</h5>' + "Sold: %y"
        },
        colors: ["#80cbc4", "#81c784", "#ffab91"]
    }



    var CurvedLineChart = $.plot($("#curved-line-chart"),curved_line_data_set, curved_line_options);


    // Area Chart



    var area_chart_data1 = [
        [1, 200],
        [2, 300],
        [3, 400],
        [4, 300],
        [5, 200],
        [6, 300],
        [7, 400],
        [8, 300],
        [9, 200],
        [10, 300],
        [11, 400],
        [12, 500]
    ];
    var area_chart_data2 = [
        [1, 400],
        [2, 500],
        [3, 600],
        [4, 500],
        [5, 400],
        [6, 500],
        [7, 600],
        [8, 500],
        [9, 400],
        [10,500],
        [11,600],
        [12,700]
    ];
    var area_chart_data3 = [
        [1, 300],
        [2, 400],
        [3, 500],
        [4, 400],
        [5, 300],
        [6, 400],
        [7, 500],
        [8, 400],
        [9, 300],
        [10, 400],
        [11, 500],
        [12, 600]
    ];

    var area_chart_data_set = [{
        data: area_chart_data3,
        label: "2012",
        lines: {
            show: true,
            fill: 0.3,
            lineWidth: 1.5
        },
        points: {
            show: true,
            lineWidth: 1.5,
            radius: 3,
            symbol: "diamond",
            fill: true,
            fillColor: "#ffffff"

        }
    }, {
        data: area_chart_data2,
        label: "2013",
        lines: {
            show: true,
            fill: 0.3,
            lineWidth: 1.5
        },
        points: {
            show: true,
            lineWidth: 1.5,
            radius: 3,
            symbol: "triangle",
            fill: true,
            fillColor: "#ffffff"

        }


    }, {
        data: area_chart_data1,
        label: "2014",
        lines: {
            show: true,
            fill:0.5,
            lineWidth: 1.5
        },
        points: {
            show: true,
            lineWidth: 1.5,
            radius: 3,
            symbol: "circle",
            fill: true,
            fillColor: "#ffffff"

        }
    }];
    var area_chart_data_options = {
        legend: {
            position: "nw",
            noColumns: 3,
            container: $("#area-chart-legend")
        },
        grid: {
            hoverable: true,
            borderWidth: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            clickable: true,
            borderColor: "#f5f5f5",
            margin: {
                top: 10,
                right: 20,
                bottom: 0,
                left: 20
            },
            minBorderMargin: 1,
            labelMargin: 20,
            mouseActiveRadius: 30,
            backgroundColor: {
                colors: ["#fff", "#fff"]
            }
        },
        series: {
            stack: false,
            shadowSize: 0
        },
        xaxis: {
            show: true,
            color: "#f5f5f5",
            tickSize:0.5
        },
        yaxis: {
            show: true,
            tickSize: 50,
            color: "#f5f5f5"
        },
        tooltip: {
            show: true,
            cssClass: "MainFlotTip",
            content: "Year: %s,  %x %y"
        },
        colors: ["#26c6da", "#ef9a9a", "#80cbc4"]
    }

    var AreaChart = $.plot($("#area-chart"),area_chart_data_set, area_chart_data_options);


    //Real Time Chart

    function RealTimeChart() {
        var data = [];
        var dataset;
        var totalPoints = 50;
        var updateInterval = 1000;
        var now = new Date().getTime();


        function GetData() {
            data.shift();

            while (data.length < totalPoints) {
                var y = Math.random() * 100;
                var temp = [now += updateInterval, y];

                data.push(temp);
            }
        }

        var options = {
            series: {
                lines: {
                    show: false,
                    lineWidth: 2,
                    fill: true
                },
                splines: {
                    show: true,
                    tension: 0.5,
                    lineWidth: 1.5,
                    fill: 0.0
                }
            },
            yaxis: {
                min: 0,
                max: 100,
                color: "#eee"
            },
            xaxis: {
                show: false
            },
            grid: {
                hoverable: true,
                borderWidth: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1
                },
                clickable: true,
                borderColor: "#f0f0f0",
                margin: {
                    top: 10,
                    right: 10,
                    bottom: 0,
                    left: 10
                },
                minBorderMargin: 1,
                labelMargin: 20,
                mouseActiveRadius: 30,
                backgroundColor: {
                    colors: ["#fff", "#fff"]
                }
            },
            legend: {
                labelBoxBorderColor: "#fff",
                container: $("#reatime-chart-legend")
            },
            colors: ["#4db6ac"]
        };


        // Load Chart
        GetData();

        dataset = [{
            label: "Visitors",
            data: data
        }];

        $.plot($("#realtime-chart"), dataset, options);

        function update() {
            GetData();

            $.plot($("#realtime-chart"), dataset, options)
            setTimeout(update, updateInterval);
        }

        update();

    }
    RealTimeChart();


    // Pie Chart

    var pie_chart_data_set = [{
        label: "Dribbble",
        data: 30
    }, {
        label: "Google",
        data: 30
    }, {
        label: "Envato",
        data: 40
    }];

    var pie_chart_data_options = {
        series: {
            pie: {
                innerRadius: 0.7,
                show: true,
                stroke: {
                    width: 0.1
                }
            }
        },
        legend: {
            position: "nw",
            noColumns: 3,
            container: $("#pie-chart-legend")
        },
        grid: {
            hoverable: true
        },
        tooltip: {
            show: true,
            cssClass: "MainFlotTip",
            content: "%p.0%, From: %s", //"%p.0%, %s, n=%n",
            shifts: {
                x: 20,
                y: 0
            }
        },
        colors: ["#EC4A89", "#2B71ED", "#7CB553"]
    };

    var pieChart = $.plot($("#pie-chart"), pie_chart_data_set, pie_chart_data_options);

});