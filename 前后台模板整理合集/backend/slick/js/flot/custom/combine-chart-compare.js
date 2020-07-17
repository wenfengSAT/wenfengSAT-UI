var $border_color = "#eee";
var $grid_color = "#eee";
var $default_black = "#666";

var $dark_blue = "#005387";
var $info = "#87CEEB";
var $danger = "#F56B6B";
var $warning = "#F38733";
var $success = "#2ecc71";
var $yellow = "#fdd922";
var $facebook = "#3b5999";
var $twitter = "#00acee";
var $linkedin = "#1a85bd";
var $gplus = "#dc4937";

$(function () {    
    var data24Hours = [
        [0, 10],[1, 120],[2, 100],[3, 100],[4, 157],[5, 78],[6, 58],[7, 428],[8, 194],[9, 38],[10, 388],[11, 14],[12, 864],
        [13, 449],[14, 558],[15, 282]
    ];
 
    var data48Hours = [
        [0, 80],[1, 320],[2, 400],[3, 500],[4, 357],[5, 278],[6, 358],[7, 248],[8, 54],[9, 338],[10, 188],[11, 314],[12, 464],
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
        lines: {show: true, lineWidth: 1.5},
        points: {show:true,
        radius: 4,
        fill: true,
        fillColor: "#ffffff",
        lineWidth: 1.5}
    },{
        label: "Last 48 Hours",
        data: data48Hours,
        lines: {show: true, lineWidth: 1.5},
        points: {show:true,
        radius: 4,
        fill: true,
        fillColor: "#ffffff",
        lineWidth: 1.5}
    },{
        label: "Difference",
        data: dataDifference,
        bars: {show: true, fillColor: { colors: [ { opacity: 0.8 }, { opacity: 0.6 } ] }}
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

            colors: [$dark_blue, $gplus, $info, $success, $warning, $danger, $info, $facebook, $gplus, $yellow],
    };
 
    var plot = $.plot($("#combineChartCompare"), 
        data
    , options);  
});