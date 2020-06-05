$( document ).ready(function() {
    
    // CounterUp Plugin
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    setTimeout(function() {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut',
            timeOut: 5000
        };
        toastr.success('Checkout settings menu on left!', 'Welcome to Modern!');
    }, 1800);
    
    var flot2 = function () {

		// We use an inline data source in the example, usually data would
		// be fetched from a server

		var data = [],
			totalPoints = 100;
        
		function getRandomData() {

			if (data.length > 0)
				data = data.slice(1);

			// Do a random walk

			while (data.length < totalPoints) {

				var prev = data.length > 0 ? data[data.length - 1] : 50,
					y = prev + Math.random() * 10 - 5;

				if (y < 0) {
					y = 0;
				} else if (y > 100) {
					y = 100;
				}

				data.push(y);
			}

			// Zip the generated y values with the x values

			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}

			return res;
		}

		var plot2 = $.plot("#flotchart2", [ getRandomData() ], {
			series: {
				shadowSize: 0	// Drawing is faster without shadows
			},
			yaxis: {
				min: 0,
				max: 100
			},
			xaxis: {
				show: false
			},
            colors: ["#22BAA0"],
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "Y: %y",
                defaultTheme: false
            }
		});

		function update() {
			plot2.setData([getRandomData()]);

			plot2.draw();
			setTimeout(update, 30);
		}

		update();
        
    };
    
    flot2();
    var flot1 = function () {
        var data = [[0, 65], [1, 59], [2, 80], [3, 81], [4, 56], [5, 55], [6, 40]];
        var data2 = [[0, 28], [1, 48], [2, 40], [3, 19], [4, 86], [5, 27], [6, 90]];
        var dataset =  [
            {
                data: data,
                color: "rgba(220,220,220,1)",
                lines: {
                    show: true,
                    fill: 0.2,
                },
                shadowSize: 0,
            }, {
                data: data,
                color: "#fff",
                lines: {
                    show: false,
                },
                points: {
                    show: true,
                    fill: true,
                    radius: 4,
                    fillColor: "rgba(220,220,220,1)",
                    lineWidth: 2
                },
                curvedLines: {
                    apply: false,
                },
                shadowSize: 0
            }, {
                data: data2,
                color: "rgba(34,186,160,1)",
                lines: {
                    show: true,
                    fill: 0.2,
                },
                shadowSize: 0,
            },{
                data: data2,
                color: "#fff",
                lines: {
                    show: false,
                },
                curvedLines: {
                    apply: false,
                },
                points: {
                    show: true,
                    fill: true,
                    radius: 4,
                    fillColor: "rgba(34,186,160,1)",
                    lineWidth: 2
                },
                shadowSize: 0
            }
        ];
        
        var ticks = [[0, "1"], [1, "2"], [2, "3"], [3, "4"], [4, "5"], [5, "6"], [6, "7"], [7, "8"]];

        var plot1 = $.plot("#flotchart1", dataset, {
            series: {
                color: "#14D1BD",
                lines: {
                    show: true,
                    fill: 0.2
                },
                shadowSize: 0,
                curvedLines: {
                    apply: true,
                    active: true
                }
            },
            xaxis: {
                ticks: ticks,
            },
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            }
        });
        
    };
    
    flot1();
    
    $(".live-tile").liveTile();
    
});