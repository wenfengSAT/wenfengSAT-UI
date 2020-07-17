
var data7_1 = [
    [1000000, 53],
    [2000000, 125],
    [3000000, 98],
    [4000000, 283],
    [5000000, 320],
    [6000000, 420],
    [7000000, 236]
];
var data7_2 = [
    [1000000, 43],
    [2000000, 150],
    [3000000, 80],
    [4000000, 283],
    [5000000, 98],
    [6000000, 125],
    [7000000, 50]
];
$(function() {
    $.plot($("#multi-sates #multi-states-container"), [{
        data: data7_1,
        label: "Page View",
        lines: {
            fill: true
        }
    }, {
        data: data7_2,
        label: "Online User",

        points: {
            show: true
        },
        lines: {
            show: true
        },
        yaxis: 2
    }
    ],
        {
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
                borderColor: "#dddddd"
            },
            colors: ["#53d192", "#ffd200"],
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
        }
    );
});

    $(function() {
        var data1 = [];
        var totalPoints = 300;
        function GetData() {
        data1.shift();
        while (data1.length < totalPoints) {
        var prev = data1.length > 0 ? data1[data1.length - 1] : 50;
        var y = prev + Math.random() * 10 - 5;
        y = y < 0 ? 0 : (y > 100 ? 100 : y);
        data1.push(y);
        }
    var result = [];
    for (var i = 0; i < data1.length; ++i) {
        result.push([i, data1[i]])
        }
    return result;
    }
    var updateInterval = 100;
    var plot = $.plot($("#real-time #real-time-container"), [
            GetData()], {
            series: {
                lines: {
                    show: true,
                    fill: true
                },
                shadowSize: 0
            },
            yaxis: {
                min: 0,
                max: 100,
                ticks: 10
            },
            xaxis: {
                show: false
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: ["#d7d7d7"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            }
        });
        function update() {
            plot.setData([GetData()]);
            plot.draw();
            setTimeout(update, updateInterval);
        }
        update();
    });

    $(function() {
        var data = [{
            label: "Paid Signup",
            data: 60
        }, {
            label: "Free Signup",
            data: 30
        }, {
            label: "Guest Signup",
            data: 10
        }];
        var options = {
            series: {
                pie: {
                    show: true
                }
            },
            legend: {
                show: false
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            colors: ["#868BB8", "#4EC9B4", "#81CDEA"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            }
        };
        $.plot($("#pie-chart #pie-chart-container"), data, options);
    });

    $(function() {
        var data = [{
            label: "Direct Sales",
            data: 35
        }, {
            label: "Online Sales",
            data: 20
        }, {
            label: "Agent Sales",
            data: 10
        }, {
            label: "Post Sales",
            data: 15
        },
            {
            label: "Pre Sales",
            data: 20
        }];
        var options = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5,
                    show: true
                }
            },
            legend: {
                show: false
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            colors: ["#4EC9B4", "#ffd200", "#FF834D","#868BB8","#81CDEA"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            }
        };
        $.plot($("#donut-chart #donut-chart-container"), data, options);
    });

    $(function() {
        var data24Hours = [
            [0, 201],
            [1, 520],
            [2, 337],
            [3, 261],
            [4, 157],
            [5, 78],
            [6, 58],
            [7, 48],
            [8, 54],
            [9, 38],
            [10, 88],
            [11, 214],
            [12, 364],
            [13, 449],
            [14, 558],
            [15, 282],
            [16, 379],
            [17, 429],
            [18, 518],
            [19, 470],
            [20, 330],
            [21, 245],
            [22, 358],
            [23, 74]
        ];
        var data48Hours = [
            [0, 245],
            [1, 492],
            [2, 538],
            [3, 332],
            [4, 234],
            [5, 143],
            [6, 147],
            [7, 63],
            [8, 64],
            [9, 43],
            [10, 486],
            [11, 201],
            [12, 315],
            [13, 397],
            [14, 612],
            [15, 281],
            [16, 370],
            [17, 279],
            [18, 425],
            [19, 53],
            [20, 122],
            [21, 355],
            [22, 340],
            [23, 801]
        ];
        var dataDifference = [
            [23, 727],
            [22, 128],
            [21, 110],
            [20, 92],
            [19, 172],
            [18, 63],
            [17, 150],
            [16, 592],
            [15, 12],
            [14, 246],
            [13, 52],
            [12, 149],
            [11, 123],
            [10, 2],
            [9, 325],
            [8, 10],
            [7, 15],
            [6, 89],
            [5, 65],
            [4, 77],
            [3, 271],
            [2, 401],
            [1, 72],
            [0, 156]
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
        var data = [{
            label: "Last 24 Hours",
            data: data24Hours,
            lines: {
                show: true,
                fill: true
            },
            points: {
                show: true
            }
        }, {
            label: "Last 48 Hours",
            data: data48Hours,
            lines: {
                show: true
            },
            points: {
                show: true
            }
        }, {
            label: "Difference",
            data: dataDifference,
            bars: {
                show: true
            }
        }];
        var options = {
            xaxis: {
                ticks: ticks
            },
            series: {
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: ["#4EC9B4", "#975197", "#6bd3f3"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            legend: {
                labelBoxBorderColor: "#000000",
                container: $("#legendcontainer26"),
                noColumns: 0
            }
        };
        var plot = $.plot($("#combine-chart #combine-chart-container"),
                data, options);
    });

    $(function() {
        var data1 = GenerateSeries(0);
        var data2 = GenerateSeries(100);
        var data3 = GenerateSeries(200);
        var dataset = [data1, data2, data3];
        function GenerateSeries(added) {
            var data = [];
            var start = 100 + added;
            var end = 200 + added;
            for (i = 1; i <= 100; i++) {
                var d = Math.floor(Math.random() * (end - start + 1) + start);
                data.push([i, d]);
                start++;
                end++;
            }
            return data;
        }
        var options = {
            series: {
                stack: true,
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: ["#adadad", "#efefef", "#dcdcdc"],
            legend: {
                position: 'nw',
                labelBoxBorderColor: "#000000",
                container: $("#bar-chart #legend-placeholder"),
                noColumns: 0
            }
        };
        var plot;
        function ToggleSeries() {
            var d = [];
            $("#toggle-chart input[type='checkbox']").each(function() {
        if ($(this).is(":checked")) {
        var seqence = $(this).attr("id").replace("cbdata", "");
        d.push({
        label: "data" + seqence,
        data: dataset[seqence - 1]
        });
    }
    });
    options.series.lines = {};
    options.series.bars = {};
    $("#toggle-chart input[type='radio']").each(function() {
        if ($(this).is(":checked")) {
        if ($(this).val() == "line") {
        options.series.lines = {
        fill: true
        };
    } else {
        options.series.bars = {
            show: true
        };
    }
    }
    });
    $.plot($("#toggle-chart #toggle-chart-container"), d, options);
        }
        $("#toggle-chart input").change(function() {
            ToggleSeries();
        });
        ToggleSeries();
    });
