var $border_color = "#f9f9f9";
var $grid_color = "#eeeeee";
var $default_black = "#999999";
var $default_white = "#ffffff";
var $sky_blue = "#edf5fa";
var $green = "#8ecf67";
var $blue = "#87ceeb";

  var data = [
    { label: "IE",  data: 19.5},
    { label: "Safari",  data: 4.5},
    { label: "Firefox",  data: 36.6},
    { label: "Opera",  data: 2.3},
    { label: "Chrome",  data: 36.3},
    { label: "Other",  data: 0.8}
];

$(document).ready(function () {
    $.plot($("#simplePieChart"), data, {
    	series: {
			pie: {show: true},
		},
		legend:{  
			show: true,
			position: 'ne',
			labelBoxBorderColor: "none"	
		},
		grid: {
      hoverable: false,
  	},

		colors: [$green, $blue, $default_black],

    });
    $("#simplePieChart").bind("plothover", pieHover);
});
 
function pieHover(event, pos, obj) {
    if (!obj)
        return;
 
    percent = parseFloat(obj.series.percent).toFixed(2);
    $("#pieHover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
}