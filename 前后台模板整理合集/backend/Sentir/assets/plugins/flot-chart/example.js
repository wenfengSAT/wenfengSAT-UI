var data_satu = [
    [1354586000000, 253],
    [1354587000000, 465],
    [1354588000000, 498],
    [1354589000000, 383],
    [1354590000000, 280],
    [1354591000000, 108],
    [1354592000000, 120],
    [1354593000000, 474],
    [1354594000000, 623],
    [1354595000000, 479],
    [1354596000000, 788],
    [1354597000000, 836]
];
var data_dua = [
    [1354586000000, 353],
    [1354587000000, 565],
    [1354588000000, 598],
    [1354589000000, 483],
    [1354590000000, 380],
    [1354591000000, 208],
    [1354592000000, 220],
    [1354593000000, 574],
    [1354594000000, 723],
    [1354595000000, 579],
    [1354596000000, 888],
    [1354597000000, 936]
];


if ($('#visitors-chart').length > 0){
    $.plot($("#visitors-chart #visitors-container"), [{
        data: data_satu,
        label: "Online User",
        lines: {
            fill: true
        }
    }, {
        data: data_dua,
        label: "Page View",

        points: {
            show: true
        },
        lines: {
            show: true
        },
        yaxis: 1
    }
    ],
        {
            series: {
                lines: {
                    show: true,
                    fill: false
                },
                points: {
                    show: true,
                    lineWidth: 5,
                    fill: true,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 5
                },
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: ["#F6BB42", "#8CC152"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                mode: "time"
            },
            yaxes: [{
                /* First y axis */
            }, {
                /* Second y axis */
                position: "right" /* left or right */
            }]
        }
    );
}



if ($('#reatltime-chart').length > 0){
	var data1 = [];
	var totalPoints = 300;
	function GetData() {
	data1.shift();
	while (data1.length < totalPoints) {
	var prev = data1.length > 0 ? data1[data1.length - 1] : 50;
	var y = prev + Math.random() * 10 - 5;
	y = y < 0 ? 0 : (y > 100 ? 100 : y);
	data1.push(y);
	}
var result = [];
for (var i = 0; i < data1.length; ++i) {
	result.push([i, data1[i]])
	}
return result;
}
var updateInterval = 100;
var plot = $.plot($("#reatltime-chart #reatltime-chartContainer"), [
		GetData()], {
		series: {
			lines: {
				show: true,
				fill: true
			},
			shadowSize: 0
		},
		yaxis: {
			min: 0,
			max: 100,
			ticks: 10,
			show: true
		},
		xaxis: {
			show: true
		},
		grid: {
			hoverable: true,
			clickable: true,
			tickColor: "#f9f9f9",
			borderWidth: 0,
			borderColor: "#eeeeee"
		},
		colors: ["#8CC152"],
		tooltip: true,
		tooltipOpts: {
			defaultTheme: false
		}
	});
	function update() {
		plot.setData([GetData()]);
		plot.draw();
		setTimeout(update, updateInterval);
	}
	update();
}