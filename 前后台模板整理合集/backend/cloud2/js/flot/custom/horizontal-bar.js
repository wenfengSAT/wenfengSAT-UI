var $border_color = "#f9f9f9";
var $grid_color = "#eeeeee";
var $default_black = "#666666";
var $default_white = "#ffffff";
var $green = "#8ecf67";
var $blue = "#87ceeb";

$(function () {    
    var data1 = [
        [10, 10], [20, 20], [30, 30], [40, 40], [50, 50]
    ];
 
    var options = {
        series: {
              shadowSize: 0,
              bars: {
                show: true,
                }
            },

            bars:{
                horizontal:true,
                barWidth: 6
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
                position: 'ne',
                noColumns: 0,
            },
            tooltip: true,
            tooltipOpts: {
                content: '%x: %y'
            },


            colors: [$blue],
    };
 
    $.plot($("#horizontalBar"), [data1], options);  
     
});