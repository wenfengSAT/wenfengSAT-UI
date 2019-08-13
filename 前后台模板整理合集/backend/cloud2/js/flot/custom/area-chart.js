var $border_color = "#f9f9f9";
var $grid_color = "#eeeeee";
var $default_black = "#666666";
var $default_white = "#ffffff";
var $green = "#8ecf67";
var $blue = "#87ceeb";

var data11_1 = [
    [1354586000000, 253], [1364587000000, 658], [1374588000000, 398],
    [1384589000000, 663], [1394590000000, 800], [1404591000000, 1080],
    [1414592000000, 353], [1424593000000, 749], [1434594000000, 523],
    [1444595000000, 258], [1454596000000, 688], [1464597000000, 364]
];
 
var data11_2 = [
    [1354586000000, 53], [1364587000000, 458], [1374588000000, 198],
    [1384589000000, 453], [1394590000000, 600], [1404591000000, 880],
    [1414592000000, 153], [1424593000000, 549], [1434594000000, 323],
    [1444595000000, 58], [1454596000000, 488], [1464597000000, 164]
];
 
$(function () {    
    var options = {
        series: {
          shadowSize: 0,
            lines: {                         
                show: true, 
                    fill: true,
                    lineWidth: 1
            },
            points: {
                    show: true,
                    radius: 4.5,
                    fill: true,
                    fillColor: "#ffffff",
                    lineWidth: 1
                }
        },
        grid: {
            hoverable: true,
            clickable: false,
            borderWidth: 1,
            tickColor: $border_color,
            borderColor: $grid_color,
            backgroundColor: { colors: [$default_white, $default_white] }
            },
            legend:{   
                show: true,
                position: 'nw',
                noColumns: 0,
            },
            tooltip: true,
            tooltipOpts: {
                content: '%: %y'
            },

            xaxis: {mode: "time", ticks:12, tickDecimals: 0},
            yaxis: {ticks:6, tickDecimals: 0},

            colors: [$blue],
    };
 
    var plot = $.plot($("#areaChart"), [data11_1, data11_2], options);  
});