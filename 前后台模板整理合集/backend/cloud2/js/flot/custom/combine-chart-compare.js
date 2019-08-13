var $border_color = "#f9f9f9";
var $grid_color = "#eeeeee";
var $default_black = "#666666";
var $default_white = "#ffffff";
var $green = "#8ecf67";
var $blue = "#87ceeb";

$(function () {    
    var data24Hours = [
        [0, 10],[1, 120],[2, 300],[3, 200],[4, 157],[5, 78],[6, 58],[7, 48],[8, 54],[9, 38],[10, 88],[11, 214],[12, 364],
        [13, 449],[14, 558],[15, 282]
    ];
 
    var data48Hours = [
        [0, 80],[1, 220],[2, 400],[3, 300],[4, 257],[5, 278],[6, 358],[7, 148],[8, 154],[9, 338],[10, 188],[11, 314],[12, 464],
        [13, 559],[14, 658],[15, 382]
    ];
 
    var dataDifference = [
        [15, 10],[14, 420],[13, 500],[12, 490],
        [11, 100],[10, 200],[9, -50],[8, -100],[7, -150],[6, -340],[5, -65],[4, -90],[3, -280],[2, -400],[1, -120],[0, 280]
    ];
 
    var ticks = [
        [0, "22h"],[1, ""],[2, "00h"],[3, ""],[4, "02h"],[5, ""],[6, "04h"],[7, ""],[8, "06h"],[9, ""],[10, "08h"],
        [11, ""],[12, "10h"],[13, ""],[14, "12h"],[15, ""]
    ];
 
    var data = [{
        label: "Last 24 Hours",
        data: data24Hours,
        lines: {show: true},
        points: {show:true}
    },{
        label: "Last 48 Hours",
        data: data48Hours,
        lines: {show: true},
        points: {show:true}
    },{
        label: "Difference",
        data: dataDifference,
        bars: {show: true}
    }];
 
    var options = {
      series: {
        shadowSize: 0,
        bars: {
          lineWidth: 1,
        }
      },

            xaxis: {
              ticks: ticks
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
              noColumns: 0, //In single row
              // labelBoxBorderColor: "#000000",
              // container: $("#legendcontainer"),
            },
            tooltip: true,
            tooltipOpts: {
              content: '%x: %y'
            },

            colors: [$green, $blue, $default_black],
    };
 
    var plot = $.plot($("#combineChartCompare"), 
        data
    , options);  
});