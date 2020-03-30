	/* Lines with autodrowing */

	$(function () {
		// we use an inline data source in the example, usually data would
		// be fetched from a server
		var data = [], totalPoints = 100;
		function getRandomData() {
			if (data.length > 0)
				data = data.slice(1);
	
			// do a random walk
			while (data.length < totalPoints) {
				var prev = data.length > 0 ? data[data.length - 1] : 20;
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
			yaxis: { min: 0, max: 20 },
			xaxis: { min: 0, max: 20 },
			colors: ["#4dc279", "#6db6ee", "#95c832", "#993eb7", "#3ba3aa"],
			grid: { hoverable: true, clickable: true },
			series: {
					   lines: { 
							fill: true,
							fillColor: { colors: [ { opacity: 0.2 }, { opacity: 0.2 } ] },
							show: true,
							lineWidth: 2
						},
			            points: {
			                show: true,
			                fill: true,
			                fillColor: "#ffffff",
			                symbol: "circle"
			            }
				   }
		};
		var plot = $.plot($("#auto_filled"), [ getRandomData() ], options);
	
		function update() {
			plot.setData([ getRandomData() ]);
			// since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			
			setTimeout(update, updateInterval);
		}
	
		update();
	});
