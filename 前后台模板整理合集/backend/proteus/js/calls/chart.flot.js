/*  ==========================================================================
    Table of Content for Flot Charts:

    === Function ===
	- runFlotRealtime
    - runFlotLine
    - runFlotPie
    - runFlotDonut
    - runFlotStacked
    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runFlotRealtime
    ========================================================================== */
function runFlotRealtime(flotRealtime){

    // We use an inline data source in the example, usually data would be fetched from a server

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

    var color_1 = $('.flot-realtime').css('color');

    // setup plot
    var options = {
        colors: [color_1],
        series: {
            shadowSize: 0,
            lines: { show: true , fill: true, fillColor: { colors: [ { opacity: 0.12 }, { opacity: 0.6 } ] }}
        },
        yaxis: { min: 0, max: 100 },
        xaxis: { show: false },
        grid: { color: '#BBBBBB', backgroundColor: '#FAFAFA', borderWidth: 1, borderColor: '#EDEDED' }
    };

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

    var plot = $.plot(flotRealtime, [ getRandomData() ], options);

    function update() {

        plot.setData([getRandomData()]);

        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(update, updateInterval);
    }

    update();

}

/*
    runFlotLine
    ========================================================================== */
function runFlotLine(flotLine){


    var sin = [], cos = [];
    for (var i = 0; i < 14; i += 0.5) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
    }

    var chart = $(flotLine);

    var color_1 = $('.flot-line-1').css('color'),
        color_2 = $('.flot-line-2').css('color');

    var plot1 = $.plot(chart,
       [ { data: sin, label: "sin(x)",color: color_1}, { data: cos, label: "cos(x)", color: color_2 } ], {
           series: {
               lines: { show: true },
               points: { show: true }
           },
           grid: { hoverable: true, clickable: true, color: '#BBBBBB', backgroundColor: '#FAFAFA', borderWidth: 1, borderColor: '#EDEDED' },
           yaxis: { min: -1.3, max: 1.3 },
           legend: {
            labelBoxBorderColor: '#EDEDED',
            noColumns: 2
          }
    });

    function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css( {
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            color: '#545454',
            border: '1px solid #d5d5d5',
            padding: '4px 6px',
            'font-size': '11px',
            'border-radius': '2px',
            'background-color': '#f3f3f3',
            opacity: 0.80
        }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    chart.bind("plothover", function (event, pos, item) {

        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;

                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);

                    showTooltip(item.pageX, item.pageY,
                                item.series.label + " of " + x + " = " + y);
                }
            }
            else {
                $("#tooltip").remove();
                previousPoint = null;
            }
    });

    chart.bind("plotclick", function (event, pos, item) {
        if (item) {
            plot1.highlight(item.series, item.datapoint);
            // showNotification("You clicked point " + item.dataIndex + " in " + item.series.label + ".", "Line chart info");
        }
    });

}

/*
    runFlotPie
    ========================================================================== */
function runFlotPie(flotPie){


    // Randomly Generated Data
    var color_1 = $('.flot-pie-1').css('color'),
        color_2 = $('.flot-pie-2').css('color'),
        color_3 = $('.flot-pie-3').css('color'),
        color_4 = $('.flot-pie-4').css('color'),
        color_5 = $('.flot-pie-5').css('color');

    var data = [],
        // series = Math.floor(Math.random() * 6) + 3
        label = [' Search Engines', ' Social Networks', ' Ad Campaigns', ' Direct Traffic', ' Other'],
        color = [color_1, color_2, color_3, color_4, color_5 ];

    for (var i = 0; i < label.length; i++) {
        data[i] = {
            label: label[i],
            data: Math.floor(Math.random() * 100) + 1,
            color: color[i]

        }
    }

    $.plot(flotPie, data, {
        series: {
            pie: {
                show: true,
                label: {
                    show: true,
                    radius: 1,
                    formatter: labelFormatter,
                    background: {
                        opacity: 0.8,
                        color: '#535353'
                    }
                }
            }
        },
        legend: {
            show: false
        }
    });
}

/*
    runFlotDonut
    ========================================================================== */
function runFlotDonut(flotDonut){


    // Randomly Generated Data
    var color_1 = $('.flot-donut-1').css('color'),
        color_2 = $('.flot-donut-2').css('color'),
        color_3 = $('.flot-donut-3').css('color'),
        color_4 = $('.flot-donut-4').css('color'),
        color_5 = $('.flot-donut-5').css('color');

    var data = [],
        // series = Math.floor(Math.random() * 6) + 3
        label = [' Search Engines', ' Social Networks', ' Ad Campaigns', ' Direct Traffic', ' Other'],
        color = [color_1, color_2, color_3, color_4, color_5 ];

    for (var i = 0; i < label.length; i++) {
        data[i] = {
            label: label[i],
            data: Math.floor(Math.random() * 100) + 1,
            color: color[i]
        }
    }

    $.plot(flotDonut, data, {
        series: {
            pie: {
                show: true,
                innerRadius: 0.5,
                label: {
                    show: true,
                    radius: 1,
                    formatter: labelFormatter,
                    background: {
                        opacity: 0.8
                    }
                }
            }
        }
    });
}


function labelFormatter(label, series) {
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'> " + Math.round(series.percent) + "%</div>";
}

/*
    runFlotStacked
    ========================================================================== */
function runFlotStacked(flotStacked, type){


    // Randomly Generated Data
    var color_1 = $('.flot-bars-1').css('color'),
        color_2 = $('.flot-bars-2').css('color'),
        color_3 = $('.flot-bars-3').css('color'),
        color_4 = $('.flot-lines-1').css('color'),
        color_5 = $('.flot-lines-2').css('color'),
        color_6 = $('.flot-lines-3').css('color');

    var d1 = [];
    for (var i = 0; i <= 10; i += 1)
        d1.push([i, parseInt(Math.random() * 30)]);

    var d2 = [];
    for (var i = 0; i <= 10; i += 1)
        d2.push([i, parseInt(Math.random() * 30)]);

    var d3 = [];
    for (var i = 0; i <= 10; i += 1)
        d3.push([i, parseInt(Math.random() * 30)]);

    var chart = $(flotStacked);
    var plot = "";

    if(type == "bars"){
        plot =  $.plot(chart, [ d1, d2, d3 ], {
            series: {
                stack: true,
                bars: { show: true, barWidth: 0.6 ,lineWidth: 1}
            },
            colors: [color_1, color_2, color_3],
            grid: { hoverable: true, clickable: true,  backgroundColor: '#f8f8f8', borderWidth: 1, borderColor: '#d5d5d5' }
        });
    }

    if(type == "lines"){
        plot =  $.plot(chart, [ d1, d2, d3 ], {
            series: {
                stack: true,
                lines: { show: true, fill: true }
            },
            colors: [color_4, color_5, color_6],
            grid: { hoverable: true, clickable: true,  backgroundColor: '#f8f8f8', borderWidth: 1, borderColor: '#d5d5d5' }
        });
    }

    chart.bind("plotclick", function (event, pos, item) {
        if (item) {
            plot.highlight(item.series, item.datapoint);
            // showNotification("You clicked point " + item.dataIndex, "Stacked chart info");
        }
    });

}

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var flotRealtime     = '#flotRealtime';
    var flotLine         = '#flotLine';
    var flotPie          = '#flotPie';
    var flotDonut        = '#flotDonut';
    var flotStackedBars  = '#flotStackedBars';
    var flotStackedLines = '#flotStackedLines';

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runFlotRealtime(flotRealtime);
    runFlotLine(flotLine);
    runFlotPie(flotPie);
    runFlotDonut(flotDonut);
    runFlotStacked(flotStackedBars, 'bars');
    runFlotStacked(flotStackedLines, 'lines');

});