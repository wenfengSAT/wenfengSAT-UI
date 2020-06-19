
"use strict";
$(document).ready(function() {
/*******************************
FLOT CHART
*******************************/
    //RANDOM DATA - FOR DEMO PURPOSE ONLY
    function GenerateSeries(added){
        var i = GenerateSeries;
        var data = [];
        var start = 100 + added;
        var end = 500 + added;

        for(i=1;i<=20;i++){
            var d = Math.floor(Math.random() * (end - start + 1) + start);
            data.push([i, d]);
            start++;
            end++;
        }

        return data;
    }

    var data1 = GenerateSeries(0);
    var data2 = GenerateSeries(100);

    //Horizontal Bar Chart Data
    var data3 = [
        [10, 10], [20, 20], [30, 30], [40, 40], [50, 50]
    ];

/*******************************
LINE CHART
*******************************/
    $.plot($("#line-chart"), [{data: data1}, {data: data2}],
        {
            lines: {
                show: true,
                lineWidth: 1,
                fill: false
            },
            points: {
                show: true,
                radius: 5,
            },
            shadowSize: 0,
            grid: {
                clickable: true,
                hoverable: true,
                borderWidth: 1,
                borderColor: "#ddd",
                tickColor: "#f1f1f1",
            },
            colors: ["#F15D58", "#83BF17"],
            tooltip: true,
            tooltipOpts: {
                content: "%x.1 = %y.4"
            },
        }
    );

/*******************************
BAR CHART
*******************************/
    $.plot($("#bar-chart"), [{data: data1}],
        {
            bars: {
                show: true,
                lineWidth: 0,
                barWidth: 0.7,
                fillColor: {colors: [ {opacity: 0.6}, {opacity: 0.6} ] }
            },
            shadowSize: 0,
            grid: {
                clickable: true,
                hoverable: true,
                borderWidth: 1,
                borderColor: "#ddd",
                tickColor: "#f1f1f1",
            },
            colors: ["#DCDDCD"],
            tooltip: true,
            tooltipOpts: {
                content: "%x.1 = %y.4"
            },
        }
    );

/*******************************
HORIZONTAL BAR CHART
*******************************/
    $.plot($("#hor-bar-chart"), [{data: data3}],
        {
            bars: {
                show: true,
                horizontal:true,
                lineWidth: 0,
                barWidth: 4,
                fill: true,
                fillColor: {colors: [ {opacity: 0.5}, {opacity: 0.5} ] }
            },
            shadowSize: 0,
            grid: {
                clickable: true,
                hoverable: true,
                borderWidth: 1,
                borderColor: "#ddd",
                tickColor: "#f1f1f1",
            },
            colors: ["#A68F58"],
            tooltip: true,
            tooltipOpts: {
                content: "%x.1 = %y.4"
            },

        }
    );

/*******************************
PIE CHART
*******************************/
    //Pie Chart Data
    var piedata = [
        {label: "HTML 5", data: 16.6},
        {label: "CSS3", data: 16.6},
        {label: "Jquery", data: 16.6},
        {label: "Java", data: 16.6},
        {label: "Objective-C", data: 16.6},
        {label: "PHP", data: 16.6}
    ];

    //PIE
    $.plot($("#pie-chart"), piedata,
        {
            series: {
                pie: {
                    show: true,
                    stroke: {width: 1, color: "#fff"},
                }
            },
            legend: {
                show: true,
            },
            colors: ["#83BF17"],
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s Level: %p.0%",
            },
        }
    );

    //Doughnut
    $.plot($("#doughnut-chart"), piedata,
        {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5,
                    stroke: {width: 1, color: "#fff"},
                }
            },
            legend: {
                show: true,
            },
            colors: ["#F15D58"],
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s Level: %p.0%",
                defaultTheme: false,
            },
        }
    );

    //Tilted
    $.plot($("#tilted-chart"), piedata,
        {
            series: {
                pie: {
                    show: true,
                    tilt: 0.4,
                    stroke: {width: 1, color: "#fff"},
                }
            },
            legend: {
                show: true,
            },
            colors: ["#A68F58"],
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s Level: %p.0%",
                defaultTheme: false,
            },
        }
    );

/*******************************
REAL TIME CHART
*******************************/
    var data = [], totalPoints = 100;
    function getRandomData() {

        if (data.length > 0)
        data = data.slice(1);

        while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50;
        var y = prev + Math.random() * 10 - 5;
        if (y < 0)
            y = 0;
        if (y > 100)
            y = 100;
        data.push(y);
        }

        var res = [];
        for (var i = 0; i < data.length; ++i)
        res.push([i, data[i]])
        return res;
    }

    var updateInterval = 500;
    $("#updateInterval").val(updateInterval).change(function () {
    var v = $(this).val();
    if (v && !isNaN(+v)) {
        updateInterval = +v;
        if (updateInterval < 1)
            updateInterval = 1;
            if (updateInterval > 2000)
            updateInterval = 2000;
            $(this).val("" + updateInterval);
            }
    });

    var options = {
        lines: {
            show: true,
            lineWidth: 0,
            fill: true,
            fillColor: "rgba(147, 155, 148, 0.3)",
        },
        grid:{
            borderWidth: 1,
            borderColor: "#ddd",
            tickColor: "#c5ccc7"
        },
        series: {
            shadowSize: 0,
        },
        yaxis:{
            min: 0,
            max: 100
        },
        xaxis:{
            show: false
        }
    };

    var plot = $.plot($("#real-chart"), [ getRandomData() ], options);

    function update() {
        plot.setData([ getRandomData() ]);
        plot.draw();
        setTimeout(update, updateInterval);
    }

    update();
});//END
