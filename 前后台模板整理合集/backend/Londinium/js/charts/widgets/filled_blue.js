$(document).ready(function () {
    var d1 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 1129], [1272672000000, 1163], [1275350400000, 1905], [1277942400000, 2002], [1280620800000, 2917], [1283299200000, 2700], [1285891200000, 2700], [1288569600000, 2100], [1291161600000, 1700]];
 
    var data1 = [
        { 
            label: "Total visitors", 
            data: d1, 
            color: '#1aacf0' 
            //6fc8dd
        }
    ];
 
    $.plot($("#filled_blue"), data1, {
        xaxis: {
            min: (new Date(2009, 12, 1)).getTime(),
            max: (new Date(2010, 11, 2)).getTime(),
            mode: "time",
            tickSize: [1, "month"],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            tickLength: 0,
            axisLabel: 'Month',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 11,
            axisLabelPadding: 5
        },
        yaxis: {
            axisLabel: 'Amount',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 11,
            autoscaleMargin: 0.01,
            axisLabelPadding: 5,
            tickLength: "full"
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
    $("#filled_blue").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));

        if ($("#filled_blue").length > 0) {
            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(0),
                        y = item.datapoint[1].toFixed(0);
                    
                    showTooltip(item.pageX, item.pageY,
                                item.series.label + ": " + "<strong>" + y + "</strong>");
                }
            }
            else {
                $("#tooltip").remove();
                previousPoint = null;            
            }
        }
    });

    $("#filled_blue").bind("plotclick", function (event, pos, item) {
        if (item) {
            $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
            plot.highlight(item.series, item.datapoint);
        }
    });


});