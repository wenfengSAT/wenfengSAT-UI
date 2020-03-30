	/* Lines with autodrowing */

	$(function () {
		// we use an inline data source in the example, usually data would
		// be fetched from a server
		var data = [], totalPoints = 25;
		function getRandomData() {
			if (data.length > 0)
				data = data.slice(1);
	
			// do a random walk
			while (data.length < totalPoints) {
				var prev = data.length > 0 ? data[data.length - 1] : 5;
				var y = prev + Math.random() * 10 - 5;
				if (y < 0)
					y = 0;
				if (y > 20)
					y = 20;
				data.push(y);
			}
	
			// zip the generated y values with the x values
			var res = [];
			for (var i = 0; i < data.length; ++i)
				res.push([i, data[i]])
			return res;
		}
	
		// setup control widget
		var updateInterval = 1000;
		$("#updateInterval").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1)
					updateInterval = 1;
				if (updateInterval > 2000)
					updateInterval = 2000;
				$(this).val("" + updateInterval);
			}
		});
	
		// setup plot
		var options = {
			yaxis: { min: 0, max: 20, reserveSpace: false, font: { size: 11, lineHeight: 1, color: "#ffffff" } },
			xaxis: { min: 0, max: 20, tickLength: 0, show: false },
			colors: ["#ffffff"],
			grid: { hoverable: true, clickable: true, tickColor: "rgba(255,255,255,0.16)" },
			series: {
					   lines: { 
							lineWidth: 1,
							fill: false,
							fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] },
							show: true
						},
			            points: {
			                show: true,
			                radius: 2.5,
			                fill: true,
			                fillColor: "#ffffff",
			                symbol: "circle",
			                lineWidth: 1.1
			            }
				   }
		};
		var plot = $.plot($("#updating-widget-1"), [ getRandomData() ], options);
	
		function update() {
			plot.setData([ getRandomData() ]);
			// since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			
			setTimeout(update, updateInterval);
		}
	
		update();
	});
