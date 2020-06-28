$(function() {

    /* Begin Chart Flot Line */
    var d1 = [
        [0, 1200], [1, 1280], [2, 1300], [3, 1400], [4, 1450], [5, 1600], [6, 1700], [7, 1750], [8, 1850], [9, 1890], [10, 1900], [11, 1950]
    ];
    var d2 = [
        [0, 550], [1, 550], [2, 700], [3, 650], [4, 700], [5, 900], [6, 950], [7, 900], [8, 950], [9, 930], [10, 1100], [11, 1250]
    ];
    $.plot('#flot-line', [{
        data : d1,
        label : "Unique Visits"
    }, {
        data : d2,
        label : "Page Views"
    }], {
        series : {
            lines : {
                show : true,
                lineWidth : 2,
                fill : true,
                fillColor : {
                    colors : [{
                        opacity : 0.8
                    }, {
                        opacity : 0.8
                    }]
                }
            },
            points : {
                show : true
            },
            shadowSize : 0
        },
        grid : {
            backgroundColor: "transparent",
            borderColor: "transparent",
            margin: 0,
            minBorderMargin: 0,
            labelMargin: 15,
            hoverable: true,
            clickable: true,
            mouseActiveRadius: 4
        },
        colors : ['#de1771', '#6d2382'],
        xaxis: {
            tickLength: 0,
            tickDecimals: 0,
            min: 0,
            ticks: [
                [0, 'Jan'], [1, 'Feb'], [2, 'Mar'], [3, 'Apr'], [4, 'May'], [5, 'Jun'], [6, 'Jul'], [7, 'Aug'], [8, 'Sep'],  [9, 'Oct'], [10, 'Nov'], [11, 'Dec']
            ],
            font: {
                lineHeight: 12,
                color: "#555555"
            }
        },
        yaxis: {
            ticks: 3,
            tickDecimals: 0,
            tickColor: "#ffffff",
            font: {
                lineHeight: 13,
                color: "#555555"
            }
        },
        tooltip : true,
        tooltipOpts : {
            content: "%x : %y",
            defaultTheme : false,
            shifts : {
                x : 0,
                y : 20
            }
        }
    });
    /* End Chart Flot Line */


    /* Begin Chart Flot Real Time */
    if (!jQuery.plot) {
        return;
    }

    var data = [],
        totalPoints = 300;

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

    var updateInterval = 30;
    $("#updateInterval").val(updateInterval).change(function () {
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

    var plot = $.plot("#flot-real-time", [ getRandomData() ], {
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor : {
                    colors : [{
                        opacity : 0.8
                    }, {
                        opacity : 0.8
                    }]
                }
            },
            shadowSize: 0
        },
        yaxis: {
            tickColor: "#ffffff"
        },
        xaxis: {
            tickColor: "#ffffff"
        },
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#f9f9f9",
            borderWidth: 0,
            borderColor: "#f0f0f0"
        },
        colors: ["#68b828"],
        tooltip : true,
        tooltipOpts : {
            content: "%x : %y",
            defaultTheme : false,
            shifts : {
                x : 0,
                y : 20
            }
        }
    });

    function update() {
        plot.setData([getRandomData()]);
        // Since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        setTimeout(update, updateInterval);
    }

    update();
    /* End Chart Flot Real Time */

    /* Begin Chart Flot bar */
    var d5 = [
        ["Jan", 126],
        ["Feb", 43],
        ["Mar", 94],
        ["Apr", 54],
        ["May", 92],
        ["Jun", 141],
        ["Jul", 89],
        ["Aug", 64],
        ["Sep", 90],
        ["Oct", 105],
        ["Nov", 67],
        ["Dec", 92]
    ];

    $.plot("#flot-bar", [
        {
            data: d5,
            label: "New Visitor",
            color: "#40bbea"
        }
    ], {
        series: {
            bars: {
                align: "center",
                lineWidth: 0,
                show: true,
                barWidth: .6,
                fill: .9
            }
        },
        grid: {
            borderColor: "#fafafa",
            borderWidth: 1,
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%x : %y",
            defaultTheme: false
        },
        xaxis: {
            tickColor: "#fff",
            mode: "categories"
        },
        yaxis: {
            tickColor: "#fff"
        },
        shadowSize: 0
    });
    /* End Chart Flot bar */

    /* Begin Chart Flot Bar Horizontal */
    var data1 = [
        [10, 10], [20, 20], [30, 30], [40, 40], [50, 50]
    ];

    var options = {
        series:{
            bars:{show: true}
        },
        bars:{
            horizontal:true,
            lineWidth: 0,
            show: true,
            barWidth: 5,
            fill: .9
        },
        grid: {
            borderColor: "#fafafa",
            borderWidth: 1,
            hoverable: true
        },
        xaxis: {
            tickColor: "#fff"
        },
        yaxis: {
            tickColor: "#fff"
        },
        colors: ["#6d2382"],
        tooltip : true,
        tooltipOpts : {
            content: "%x : %y",
            defaultTheme : false,
            shifts : {
                x : 0,
                y : 20
            }
        }
    };

    $.plot($("#flot-bar-horizontal"), [data1], options);
    /* End Chart Flot Bar Horizontal */

    /* Begin Chart Flot Pie Donut */
    var d3 = [],
        series = Math.floor(Math.random() * 6) + 3;

    for (var i = 0; i < 5; i++) {
        d3[i] = {
            label: "Series" + (i + 1),
            data: Math.floor(Math.random() * 100) + 1
        }
    }
    $.plot('#flot-pie-donut', d3, {
        series : {
            pie : {
                innerRadius : 0.4,
                show : true,
                stroke : {
                    width : 0
                },
                label : {
                    show : true,
                    threshold : 0.05
                }
            }
        },
        colors : ['#6d2382','#de1771','#68b828','#40bbea','#ffba00'],
        grid : {
            hoverable : true,
            clickable : false
        }
    });
    /* End Chart Flot Pie Donut */

    /* Begin Chart Flot Pie */
    var d4 = [],
        series = Math.floor(Math.random() * 6) + 3;

    for (var i = 0; i < 5; i++) {
        d4[i] = {
            label: "Series" + (i + 1),
            data: Math.floor(Math.random() * 100) + 1
        }
    }
    $.plot('#flot-pie', d4, {
        series : {
            pie : {
                combine : {
                    color  : '#de1771',
                    threshold : 0.05
                },
                show : true
            }
        },
        colors : ['#6d2382','#de1771','#68b828','#40bbea','#ffba00'],
        legend : {
            show : false
        },
        grid : {
            hoverable : true,
            clickable : false
        }
    });
    /* End Chart Flot Pie */

    /* Begin Chart Flot - Full width */
    function getRandomData() {
        if (data.length > 0) data = data.slice(1);
        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0) y = 0;
            if (y > 100) y = 100;
            data.push(y);
        }
        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) res.push([i, data[i]])
        return res;
    }

    function randValue() {
        return (Math.floor(Math.random() * (1 + 50 - 20))) + 10;
    }

    var data_com2 = [
        [1, randValue()],
        [2, randValue()],
        [3, 2 + randValue()],
        [4, 3 + randValue()],
        [5, 5 + randValue()],
        [6, 10 + randValue()],
        [7, 15 + randValue()],
        [8, 20 + randValue()],
        [9, 25 + randValue()],
        [10, 30 + randValue()],
        [11, 35 + randValue()],
        [12, 25 + randValue()],
        [13, 15 + randValue()],
        [14, 20 + randValue()],
        [15, 45 + randValue()],
        [16, 50 + randValue()],
        [17, 65 + randValue()],
        [18, 70 + randValue()],
        [19, 85 + randValue()],
        [20, 80 + randValue()],
        [21, 75 + randValue()],
        [22, 80 + randValue()],
        [23, 75 + randValue()]
    ];
    var data_com = [
        [1, randValue()],
        [2, randValue()],
        [3, 10 + randValue()],
        [4, 15 + randValue()],
        [5, 20 + randValue()],
        [6, 25 + randValue()],
        [7, 30 + randValue()],
        [8, 35 + randValue()],
        [9, 40 + randValue()],
        [10, 45 + randValue()],
        [11, 50 + randValue()],
        [12, 55 + randValue()],
        [13, 60 + randValue()],
        [14, 70 + randValue()],
        [15, 75 + randValue()],
        [16, 80 + randValue()],
        [17, 85 + randValue()],
        [18, 90 + randValue()],
        [19, 95 + randValue()],
        [20, 100 + randValue()],
        [21, 110 + randValue()],
        [22, 120 + randValue()],
        [23, 130 + randValue()]
    ];
    var names = [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
        "Zeta",
        "Eta",
        "Theta"
    ];
    var plot_statistics = $.plot($("#chart-full-width"), [{
        data: data_com, showLabels: true, label: "New Visitors", labelPlacement: "below", canvasRender: true, cColor: "#FFFFFF"
    },{
        data: data_com2, showLabels: true, label: "Old Visitors", labelPlacement: "below", canvasRender: true, cColor: "#FFFFFF"
    }
    ], {
        series: {
            lines: {
                show: true,
                lineWidth: 0,
                fill: true,
                fillColor: { colors: [{ opacity: 0.8}, { opacity: 0.8}] }
            },
            fillColor: "rgba(0, 0, 0, 1)",
            points: {
                show: false,
                fill: true
            },
            shadowSize: 0
        },
        legend:{
            show: true,
            position:"nw",
            backgroundColor: "green",
            container: $("#chart-full-width-legend")
        },
        grid: {
            show:false,
            margin: 0,
            labelMargin: 0,
            axisMargin: 0,
            hoverable: true,
            clickable: true,
            tickColor: "rgba(255,255,255,1)",
            borderWidth: 0
        },
        colors: ["#E3E6E8","#6d2382"],
        xaxis: {
            tickColor: "#fff"
        },
        yaxis: {
            tickColor: "#fff"
        }
    });
    /* End Chart Flot - Full width */

});

