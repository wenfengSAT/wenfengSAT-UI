	$(function () {
    var sin = [], cos = [];
    for (var i = 0; i < 16; i += 0.5) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
    }

    var plot = $.plot($("#simple_graph"),
           [ { data: sin, label: "sin(x)"}, { data: cos, label: "cos(x)" } ], {
                colors: ["#ee7951", "#6db6ee", "#95c832", "#993eb7", "#3ba3aa"],
                series: {
                   lines: { show: true },
                   points: { show: true }
                },
                grid: { hoverable: true, clickable: true },
                yaxis: { min: -1.1, max: 1.1, font: { size: 11, lineHeight: 1, color: "#333333" } },
                xaxis: { min: 0, max: 15 }
             });

    function showTooltip(x, y, contents, areAbsoluteXY) {
        var rootElt = 'body';
    
        $('<div id="tooltip" class="chart-tooltip">' + contents + '</div>').css( {
            top: y - 50,
            left: x - 9,
            opacity: 0.9
        }).prependTo(rootElt).show();
    };

    var previousPoint = null;
    $("#simple_graph").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));

        if ($("#simple_graph").length > 0) {
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
        }
    });

    $("#simple_graph").bind("plotclick", function (event, pos, item) {
        if (item) {
            $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
            plot.highlight(item.series, item.datapoint);
        }
    });
});
