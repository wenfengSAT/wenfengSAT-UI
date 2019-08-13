var $border_color = "#f9f9f9";
var $grid_color = "#eeeeee";
var $default_black = "#666666";
var $default_white = "#ffffff";
var $green = "#8ecf67";
var $blue = "#87ceeb";

$(function () { 
    function GenerateSeries(added){
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
 
    var options = {
            series: {
              shadowSize: 0,
              bars: {
                lineWidth: 1,
                show: true,
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
                position: 'ne',
                noColumns: 0,
            },
            tooltip: true,
            tooltipOpts: {
                content: '%x: %y'
            },

            colors: [$blue, $green],
    };
 
    var data1 = GenerateSeries(0);
    var data2 = GenerateSeries(100);
    var data3 = GenerateSeries(200);
    var dataset = [data1, data2, data3];
 
    $.plot($("#stackedBarChart"), dataset, options);  
     
});