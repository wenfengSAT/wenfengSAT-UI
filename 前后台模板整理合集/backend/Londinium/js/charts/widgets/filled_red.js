$(document).ready(function () {
    var d1 = [[1262304000000, 6], [1264982400000, 60], [1267401600000, 2043], [1270080000000, 2198], [1272672000000, 2660], [1275350400000, 2782], [1277942400000, 2430], [1280620800000, 2427], [1283299200000, 2100], [1285891200000, 1214], [1288569600000, 1057], [1291161600000, 1025]];
 
    var data1 = [
        { 
            label: "Earnings", 
            data: d1, 
            color: '#f1553c' 
            //6fc8dd
        }
    ];
 
    $.plot($("#filled_red"), data1, {
        xaxis: {
            show: true,
            min: (new Date(2009, 12, 1)).getTime(),
            max: (new Date(2010, 11, 2)).getTime(),
            mode: "time",
            tickSize: [1, "month"],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            tickLength: 1,
            axisLabel: 'Month',
            axisLabelFontSizePixels: 11,
        },
        yaxis: {
            axisLabel: 'Amount',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 11,
            autoscaleMargin: 0.01,
            axisLabelPadding: 5
        },
        series: {
            lines: {
                show: true, 
                fill: true,
                fillColor: { colors: [ { opacity: 0.2 }, { opacity: 0.2 } ] },
                lineWidth: 1.5
            },
            points: {
                show: true,
                radius: 2.5,
                fill: true,
                fillColor: "#ffffff",
                symbol: "circle",
                lineWidth: 1.1
            }
        },
       grid: { hoverable: true, clickable: true },
        legend: {
            show: false
        }
    });

    function showTooltip(x, y, contents) {
        $('<div id="tooltip" class="chart-tooltip">' + contents + '</div>').css( {
            position: 'absolute',
            display: 'none',
            top: y - 46,
            left: x - 9,
            'z-index': '9999',
            opacity: 0.9
        }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    $("#filled_red").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));

        if ($("#filled_red").length > 0) {
            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);
                    
                    showTooltip(item.pageX, item.pageY,
                                item.series.label + " " + "<strong>" + "$" + y + "</strong>");
                }
            }
            else {
                $("#tooltip").remove();
                previousPoint = null;            
            }
        }
    });

    $("#filled_red").bind("plotclick", function (event, pos, item) {
        if (item) {
            $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
            plot.highlight(item.series, item.datapoint);
        }
    });


});