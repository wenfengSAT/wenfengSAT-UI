var $border_color = "#eee";
var $grid_color = "#eee";
var $default_black = "#666";

var $info = "#5B90BF";
var $danger = "#D66061";
var $warning = "#ffaa3a";
var $success = "#76BBAD";
var $yellow = "#ffee00";
var $facebook = "#4c66a4";
var $twitter = "#00acee";
var $linkedin = "#1a85bd";
var $gplus = "#dc4937";
var $brown = "#ab7967";

var $blue_one =   "#6d9cc6";
var $blue_two =   "#7ca6cc";
var $blue_three = "#8bb0d2";
var $blue_four =  "#99bad7";
var $blue_five =  "#a8c4dd";
	
$(function () {

	var data, chartOptions;
	
	data = [
		{ label: "Apples", data: Math.floor (Math.random() * 100 + 150) }, 
		{ label: "Oranges", data: Math.floor (Math.random() * 100 + 390) }, 
		{ label: "Pinaples", data: Math.floor (Math.random() * 100 + 530) }, 
		{ label: "Grapes", data: Math.floor (Math.random() * 100 + 90) },
		{ label: "Bananas", data: Math.floor (Math.random() * 100 + 320) }
	];

	chartOptions = {        
		series: {
			pie: {
				show: true,  
				innerRadius: .5, 
				stroke: {
					width: 1,
				}
			}
		}, 
		shadowSize: 0,
		legend: {
			position: 'sw'
		},
		
		tooltip: true,

		tooltipOpts: {
			content: '%s: %y'
		},
		
		grid:{
      hoverable: true,
      clickable: false,
      borderWidth: 1,
			tickColor: $border_color,
      borderColor: $grid_color,
    },
    shadowSize: 0,
		colors: [$blue_one, $blue_two, $blue_three, $blue_four, $blue_five ],
	};

	var holder = $('#donut-chart');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}		
		
});