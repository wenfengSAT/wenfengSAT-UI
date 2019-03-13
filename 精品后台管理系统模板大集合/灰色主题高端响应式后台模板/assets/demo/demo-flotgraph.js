$(function () {

    //Interacting with Data Points example

    var sin = [], cos = [];

    for (var i = 0; i < 14; i += 0.5) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
    }

    var plot = $.plot($("#sincos"),
        [{ data: sin, label: "sin(x)" }, { data: cos, label: "cos(x)" }], {
            series: {

                shadowSize: 0,
                lines: { 
                    show: true,
                    lineWidth: 1.5,
                    //fill: 0.1,
                    //fillColor: { colors: [ { opacity: 0.05 }, { opacity: 0.01 }, { opacity: 0.05 } ] }
                    
                    
                },
                points: { show: true }
            },
            grid: {
                //backgroundColor: {colors: ['rgba(0, 0, 0, 0.04)', 'rgba(0, 0, 0, 0)']},
                labelMargin: 10,
                hoverable: true,
                clickable: true,
                borderWidth: 1,
                borderColor: 'rgba(0, 0, 0, 0.06)'
            },
            legend: {
                backgroundColor: '#fff'
            },
            yaxis: { min: -1.2, max: 1.2, tickColor: 'rgba(0, 0, 0, 0.06)', font: {color: 'rgba(0, 0, 0, 0.4)'}},
            xaxis: { tickColor: 'rgba(0, 0, 0, 0.06)', font: {color: 'rgba(0, 0, 0, 0.4)'}},
            colors: [getBrandColor('success'), getBrandColor('inverse')],
            tooltip: true,
            tooltipOpts: {
                content: "x: %x, y: %y"
            }
        });

    var previousPoint = null;
    $("#sincos").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));
    });

    $("#sincos").bind("plotclick", function (event, pos, item) {
        if (item) {
            $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
            plot.highlight(item.series, item.datapoint);
        }
    });



    //Multiple

    var d1 = [];
    for (var i = 0; i < 14; i += 0.1)
        d1.push([i, Math.sin(i)]);

    var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

    var d3 = [];
    for (var i = 0; i < 15; i += 1)
        d3.push([i, Math.cos(i) + 10]);

    var d4 = [];
    for (var i = 0; i < 14; i += 0.01)
        d4.push([i, Math.sqrt(i * 10)]);

    var d5 = [];
    for (var i = 0; i < 15; i += 1)
        d5.push([i, Math.sqrt(i)]);

    var d6 = [];
    for (var i = 0; i < 15; i += 1)
        d6.push([i, Math.sqrt(5*i + Math.sin(i) + 5)]);

    $.plot($("#multiple"), [

        {
            data: d1,
            lines: { show: true, fill: 0.2, lineWidth: 0.75 },
            shadowSize: 0,

        },
        {
            data: d2,
            bars: { show: true, fill: 0.2, lineWidth: 0.75 },
            shadowSize: 0
        },
        {
            data: d3,
            points: { show: true, fill: 0, },
            shadowSize: 0
        },
        {
            data: d4,
            lines: { show: true, fill: 0, lineWidth: 0.75 },
            shadowSize: 0
        },
        {
            data: d5,
            lines: { show: true, fill: 0, lineWidth: 0.75 },
            points: { show: true, fill: 0.2 },
            shadowSize: 0
        },
        {
            data: d6,
            lines: { show: true, steps: true, fill: 0.05, lineWidth: 0.75 },
            shadowSize: 0
        },


    ], {
        grid: {
            labelMargin: 10,
            hoverable: true,
            clickable: true,
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.06)',
        },
        yaxis: { tickColor: 'rgba(0, 0, 0, 0.06)', font: {color: 'rgba(0, 0, 0, 0.4)'}},
        xaxis: { tickColor: 'rgba(0, 0, 0, 0.06)', font: {color: 'rgba(0, 0, 0, 0.4)'}},
        colors: [getBrandColor('midnightblue'), getBrandColor('danger'), getBrandColor('indigo'), getBrandColor('inverse'), getBrandColor('inverse'), getBrandColor('midnightblue')],
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    });




    // Ordered Bars

    var do1 = [];
    var do2 = [];
    var do3 = [];

    for (var i = 1; i < 11; i++) {
        do1.push([i, parseInt(Math.random() * 100)]);
        do2.push([i, parseInt(Math.random() * 100)]);
        do3.push([i, parseInt(Math.random() * 100)]);
    }

 
    var dos = new Array();

    dos.push({
    data:do1,
    label: "Label 1",
    bars: {
        show: true,
        barWidth: 0.15,
        order: 1
    }
    });
    dos.push({
        data:do2,
        label: "Label 2",
        bars: {
            show: true,
            barWidth: 0.15,
            order: 2,
        }
    });
    dos.push({
        data:do3,
        label: "Label 3",
        bars: {
            show: true,
            barWidth: 0.15,
            order: 3,
        }
    });

    var variance = $.plot($("#ordered"), dos, {
        series: {
            bars: {
                show: true,
                lineWidth: 0.75
            }
        },
        grid: {
            labelMargin: 10,
            hoverable: true,
            clickable: true,
            tickColor: 'rgba(0, 0, 0, 0.06)',
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.06)'
        },
        colors: [getBrandColor('info'), getBrandColor('inverse'), getBrandColor('midnightblue')],
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        },
        xaxis: {
            autoscaleMargin: 0.05,
            tickColor: 'rgba(0, 0, 0, 0.06)',
            //ticks: [[1, "Q1"], [2, "Q2"], [3, "Q3"], [4, "Q4"]],
            tickDecimals: 0,
            font: {
                color: 'rgba(0, 0, 0, 0.4)'
            }
        },
        yaxis: {
            //ticks: [0, 25, 50, 75, 100, 125, 150],
            font: {
                color: 'rgba(0, 0, 0, 0.4)'
            },
            // tickFormatter: function (val, axis) {
            //     return "$" + val + "K";
            // }
        },
        legend : {
            //labelBoxBorderColor: 'transparent'
        }
    });





    // We use an inline data source in the example, usually data would
    // be fetched from a server

        var dxta = [],
            totalPoints = 300;
        var updateInterval = 1000;

        function getRandomData() {

            if (dxta.length > 0)
                dxta = dxta.slice(1);

            // Do a random walk

            while (dxta.length < totalPoints) {

                var prev = dxta.length > 0 ? dxta[dxta.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }

                dxta.push(y);
            }

            // Zip the generated y values with the x values

            var res = [];
            for (var i = 0; i < dxta.length; ++i) {
                res.push([i, dxta[i]])
            }

            return res;
        }

        var plot = $.plot("#realtime-updates", [ getRandomData() ], {
            series: {
                    lines: {
                    show: true,
                    lineWidth: 0.75,
                    fill: 0.15,
                    fillColor: { colors: [ { opacity: 0.01 }, { opacity: 0.3 } ] }
                },
                shadowSize: 0   // Drawing is faster without shadows
            },
            grid: {
                labelMargin: 10,
                hoverable: true,
                clickable: true,
                borderWidth: 1,
                borderColor: 'rgba(0, 0, 0, 0.06)'
            },
            yaxis: {
                min: 0,
                max: 100,
                tickColor: 'rgba(0, 0, 0, 0.06)',
                font: {color: 'rgba(0, 0, 0, 0.4)'}
            },
            xaxis: {
                show: false
            },
            colors: ["#95a5a6"],
            tooltip: true,
            tooltipOpts: {
                content: "CPU Utilization: %y%"
            }

        });

        function update() {

            plot.setData([getRandomData()]);

            // Since the axes don't change, we don't need to call plot.setupGrid()

            plot.draw();
            setTimeout(update, updateInterval);
        }

        update();








        var d1 = [];
        for (var i = 0; i <= 10; i += 1) {
            d1.push([i, parseInt(Math.random() * 30)]);
        }

        var d2 = [];
        for (var i = 0; i <= 10; i += 1) {
            d2.push([i, parseInt(Math.random() * 30)]);
        }

        var d3 = [];
        for (var i = 0; i <= 10; i += 1) {
            d3.push([i, parseInt(Math.random() * 30)]);
        }

        var stack = 0,
            bars = true,
            lines = false,
            steps = false;

        function plotWithOptions() {
            $.plot("#stacking", [ d1, d2, d3 ], {
                series: {
                    shadowSize: 0,
                    stack: stack,
                    lines: {
                        show: lines,
                        fill: 0.2,
                        steps: steps,
                        lineWidth: 0.75
                    },
                    bars: {
                        show: bars,
                        barWidth: 0.3,
                        lineWidth: 0.75
                    }
                },
                grid: {
                    labelMargin: 10,
                    hoverable: true,
                    clickable: true,
                    borderWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.06)'
                },
                yaxis: { tickColor: 'rgba(0, 0, 0, 0.06)', font: {color: 'rgba(0, 0, 0, 0.4)'}},
                xaxis: { tickColor: 'rgba(0, 0, 0, 0.06)', font: {color: 'rgba(0, 0, 0, 0.4)'}},
                colors: [getBrandColor('midnightblue'), getBrandColor('info'), getBrandColor('success')],
                tooltip: true,
                tooltipOpts: {
                    content: "X: %x | Y: %y"
                }
                
            });
        }

        plotWithOptions();

        $(".stackControls button").click(function (e) {
            e.preventDefault();
            stack = $(this).text() == "With stacking" ? true : null;
            plotWithOptions();
        });

        $(".graphControls button").click(function (e) {
            e.preventDefault();
            bars = $(this).text().indexOf("Bars") != -1;
            lines = $(this).text().indexOf("Lines") != -1;
            steps = $(this).text().indexOf("steps") != -1;
            plotWithOptions();
        });





    // data
    var datax = [
        { label: "Series1",  data: 10, color: getBrandColor('danger')},
        { label: "Series2",  data: 30, color: getBrandColor('warning')},
        { label: "Series3",  data: 90, color: getBrandColor('midnightblue')},
        { label: "Series4",  data: 70, color: getBrandColor('info')},
        { label: "Series5",  data: 80, color: getBrandColor('success')},
        { label: "Series6",  data: 110, color: getBrandColor('inverse')}
    ];


//    for( var i = 0; i<series; i++)
//    var series = Math.floor(Math.random()*10)+1;
// /   {
//        datax[i] = { label: "Series"+(i+1), data: Math.floor(Math.random()*100)+1 }
//    }

        $.plot($("#graph0"), datax,
            {
                    series: {
                        pie: {
                            show: true
                        }
                    },
                    grid: {
                        hoverable: true
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: "%p.0%, %s"    
                    }
                    //,
                    //colors: [getBrandColor('primary'), getBrandColor('warning'),getBrandColor('success')]
            });

    // DONUT
        $.plot($("#donut"), datax,
            {
                series: {
                        pie: {
                                innerRadius: 0.5,
                                show: true
                        }
                },
                legend: {
                    show: false
                },
                grid: {
                    hoverable: true
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%p.0%, %s"
                }

            });

    // INTERACTIVE
        $.plot($("#interactive"), datax,
            {
                series: {
                        pie: {
                                show: true
                        }
                },
                grid: {
                        hoverable: true,
                        clickable: true
                },
                legend: {
                    show: false
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%p.0%, %s"
                }

            });
            $("#interactive").bind("plothover", pieHover);


    function pieHover(event, pos, obj)
    {
            if (!obj)
                    return;
            percent = parseFloat(obj.series.percent).toFixed(2);
            $("#hover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
    }


});