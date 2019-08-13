var $border_color = "#f9f9f9";
var $grid_color = "#eeeeee";
var $default_black = "#666666";
var $default_white = "#ffffff";
var $green = "#8ecf67";
var $blue = "#87ceeb";

$(function () {
		var data1 = GenerateSeries(0);
		var data2 = GenerateSeries(100);
		var data3 = GenerateSeries(200);
		var dataset = [data1, data2, data3];

		function GenerateSeries(added){
				var data = [];
				var start = 100 + added;
				var end = 200 + added;

				for(i=1;i<=100;i++){
						var d = Math.floor(Math.random() * (end - start + 1) + start);
						data.push([i, d]);
						start++;
						end++;
				}

				return data;
		}

		var options = {
			series: {
				lines: {
					show: true,
					lineWidth: 1,
					fill: true, fillColor: { colors: [ { opacity: 0.1 }, { opacity: 0.2 } ] }
				},
				shadowSize: 0
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
				content: '%x: %y'
			},
			xaxis: {ticks:24, tickDecimals: 0},
      yaxis: {ticks:6, tickDecimals: 0},

			colors: [$blue],
		};

		var plot;
		
		
		function ToggleSeries(){
				var d = [];

				$("#example-section28 input[type='checkbox']").each(function(){
						if($(this).is(":checked")){
								var seqence = $(this).attr("id").replace("cbdata", "");
								d.push({label:"data" + seqence, data: dataset[seqence - 1]});
						} 
				});

				options.series.lines = {};
				options.series.bars = {};

				$("#example-section28 input[type='radio']").each(function(){
						if($(this).is(":checked")){
								if($(this).val() == "line"){
										options.series.lines = {fill: true};
								}else{
										options.series.bars = {show: true};
								}
						} 
				});

				$.plot($("#example-section28 #flotcontainer"), d, options); 
		}

		
		$("#example-section28 input").change(function(){
				ToggleSeries();
		});

		ToggleSeries();
});