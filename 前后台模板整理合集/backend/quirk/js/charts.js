$(document).ready(function() {

	'use strict';

  function showTooltip(x, y, contents) {
		$('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css( {
		  position: 'absolute',
		  display: 'none',
		  top: y + 5,
		  left: x + 5
		}).appendTo('body').fadeIn(200);
	}


	/*****SIMPLE CHART*****/

	var newCust = [[0, 0], [1, 10], [2,5], [3, 12], [4, 5], [5, 8], [6, 0]];
	var retCust = [[0, 0], [1, 8], [2,3], [3, 10], [4, 3], [5, 6], [6,0]];

	var plot = $.plot($('#basicflot'),[
	{
		data: newCust,
		label: 'New Customer',
		color: '#03c3c4'
	},
	{
		data: retCust,
		label: 'Returning Customer',
		color: '#905dd1'
	}],
	{
		series: {
			lines: {
				show: false
			},
			splines: {
				show: true,
				tension: 0.4,
				lineWidth: 1,
				fill: 0.4
			},
			shadowSize: 0
		},
		points: {
			show: true,
		},
		legend: {
			container: '#basicFlotLegend',
			noColumns: 0
		},
		grid: {
			hoverable: true,
			clickable: true,
			borderColor: '#ddd',
			borderWidth: 0,
			labelMargin: 5,
			backgroundColor: '#fff'
		},
		yaxis: {
			min: 0,
			max: 15,
			color: '#eee'
		},
		xaxis: {
			color: '#eee'
		}
	});

	var previousPoint = null;

	$('#basicflot').bind('plothover', function (event, pos, item) {
		$('#x').text(pos.x.toFixed(2));
		$('#y').text(pos.y.toFixed(2));

		if(item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;

				$('#tooltip').remove();
				var x = item.datapoint[0].toFixed(2),
				y = item.datapoint[1].toFixed(2);

				showTooltip(item.pageX, item.pageY, item.series.label + ' of ' + x + ' = ' + y);
			}
		} else {
			
			$('#tooltip').remove();
			previousPoint = null;
		}
	});

	$('#basicflot').bind('plotclick', function (event, pos, item) {
		if (item) {
			plot.highlight(item.series, item.datapoint);
		}
	});


  /***** USING OTHER SYMBOLS *****/

  var firefox = [[0, 5], [1, 8], [2,6], [3, 11], [4, 7], [5, 13], [6, 9], [7,8], [8,10], [9,9],[10,13]];
	var chrome = [[0, 3], [1, 6], [2,4], [3, 9], [4, 5], [5, 11], [6, 7], [7,6], [8,8], [9,7],[10,11]];

	var plot2 = $.plot($('#basicflot2'),
		[ { data: firefox,
          label: 'Firefox',
          color: '#D9534F',
          points: {
            symbol: 'square'
          }
        },
        { data: chrome,
          label: 'Chrome',
          color: '#428BCA',
          lines: {
            fill: true
          },
          points: {
            symbol: 'diamond',
            lineWidth: 2
          }
        }
      ],
      {
		  series: {
			 lines: {
            show: true,
            lineWidth: 2
          },
			 points: {
            show: true
          },
          shadowSize: 0
		  },
		  legend: {
          position: 'nw'
        },
		  grid: {
          hoverable: true,
          clickable: true,
          borderColor: '#ddd',
          borderWidth: 1,
          labelMargin: 10,
          backgroundColor: '#fff'
        },
		  yaxis: {
          min: 0,
          max: 15,
          color: '#eee'
        },
        xaxis: {
          color: '#eee',
          max: 10
        }
		});

	 var previousPoint2 = null;
	 $('#basicflot2').bind('plothover', function (event, pos, item) {
      $('#x').text(pos.x.toFixed(2));
      $('#y').text(pos.y.toFixed(2));

		if(item) {
		  if (previousPoint2 != item.dataIndex) {
			previousPoint2 = item.dataIndex;

			$('#tooltip').remove();
			var x = item.datapoint[0].toFixed(2),
			y = item.datapoint[1].toFixed(2);

			showTooltip(item.pageX, item.pageY,
			item.series.label + ' of ' + x + ' = ' + y);
		  }

		} else {
		  $('#tooltip').remove();
		  previousPoint2 = null;
		}

	 });

	 $('#basicflot2').bind('plotclick', function (event, pos, item) {
		if (item) {
		  plot2.highlight(item.series, item.datapoint);
		}
	 });


    /***** TRACKING WITH CROSSHAIR *****/

    var sin = [], cos = [];
	 for (var i = 0; i < 14; i += 0.1) {
        sin.push([i, Math.sin(i)]);
		  cos.push([i, Math.cos(i)]);
	 }

	 var plot3 = $.plot('#trackingchart', [
        { data: sin, label: 'sin(x) = -0.00', color: '#666' },
		  { data: cos, label: 'cos(x) = -0.00', color: '#999' }
	 ], {
        series: {
            lines: {
		show: true,
               lineWidth: 2,
				},
            shadowSize: 0
		  },
        legend: {
            show: false
        },
		  crosshair: {
				mode: 'xy',
            color: '#D9534F'
		  },
		  grid: {
            borderColor: '#ddd',
            borderWidth: 1,
            labelMargin: 10
		  },
		  yaxis: {
            color: '#eee'
		  },
        xaxis: {
            color: '#eee'
        }
	 });

	 var legends = $('#trackingchart .legendLabel');

	 legends.each(function () {
		  // fix the widths so they don't jump around
		  $(this).css('width', $(this).width());
	 });

	 var updateLegendTimeout = null;
	 var latestPosition = null;

	 function updateLegend() {

		  updateLegendTimeout = null;

		  var pos = latestPosition;

		  var axes = plot3.getAxes();
		  if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
				pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
				return;
		  }

		  var i, j, dataset = plot3.getData();
		  for (i = 0; i < dataset.length; ++i) {

				var series = dataset[i];

				// Find the nearest points, x-wise
				for (j = 0; j < series.data.length; ++j) {
					if (series.data[j][0] > pos.x) {
                    break;
					}
				}

				// Now Interpolate
				var y,
					p1 = series.data[j - 1],
					p2 = series.data[j];

				if (p1 == null) {
					y = p2[1];
				} else if (p2 == null) {
					y = p1[1];
				} else {
					y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);
				}

				legends.eq(i).text(series.label.replace(/=.*/, '= ' + y.toFixed(2)));
		  }
	 }

	 $('#trackingchart').bind('plothover',  function (event, pos, item) {
		  latestPosition = pos;
		  if (!updateLegendTimeout) {
				updateLegendTimeout = setTimeout(updateLegend, 50);
		  }
	 });


    /***** REAL TIME UPDATES *****/

    var data = [], totalPoints = 50;

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


    // Set up the control widget
	 var updateInterval = 1000;

	 var plot4 = $.plot('#realtimechart', [ getRandomData() ], {
        colors: ['#F0AD4E'],
		  series: {
            lines: {
              fill: true,
              lineWidth: 0
            },
            shadowSize: 0	// Drawing is faster without shadows
		  },
        grid: {
            borderColor: '#ddd',
            borderWidth: 1,
            labelMargin: 10
		  },
        xaxis: {
            color: '#eee'
        },
		  yaxis: {
				min: 0,
				max: 100,
            color: '#eee'
		  }
	 });

	 function update() {

		  plot4.setData([getRandomData()]);

		  // Since the axes don't change, we don't need to call plot.setupGrid()
		  plot4.draw();
		  setTimeout(update, updateInterval);
	 }

	 update();


    /***** BAR CHART *****/

    var bardata = [['Jan', 10], ['Feb', 23], ['Mar', 18], ['Apr', 13], ['May', 17], ['Jun', 30],
									 ['Jul', 26], ['Aug', 16], ['Sep', 17], ['Oct', 5], ['Nov', 8], ['Dec', 15]];

	 $.plot('#barchart', [ bardata ], {
		  series: {
            lines: {
              lineWidth: 1
            },
				bars: {
					show: true,
					barWidth: 0.5,
					align: 'center',
               lineWidth: 0,
               fillColor: '#428BCA'
				}
		  },
        grid: {
            borderColor: '#ddd',
            borderWidth: 1,
            labelMargin: 10
		  },
		  xaxis: {
				mode: 'categories',
				tickLength: 0
		  }
	 });


    /***** PIE CHART *****/

    var piedata = [
        { label: 'Series 1', data: [[1,10]], color: '#D9534F'},
        { label: 'Series 2', data: [[1,30]], color: '#1CAF9A'},
        { label: 'Series 3', data: [[1,90]], color: '#F0AD4E'},
        { label: 'Series 4', data: [[1,70]], color: '#428BCA'},
        { label: 'Series 5', data: [[1,80]], color: '#5BC0DE'}
	 ];

    $.plot('#piechart', piedata, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 2/3,
                    formatter: labelFormatter,
                    threshold: 0.1
                }
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        }
    });

    function labelFormatter(label, series) {
		return '<div style="font-size:8pt; text-align:center; padding:2px; color:white;">' + label + '<br>' + Math.round(series.percent) + '%</div>';
	}


   /***** MORRIS CHARTS *****/

   var m1 = new Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { y: '2006', a: 30, b: 20 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#D9534F', '#428BCA'],
        lineWidth: '2px',
        hideHover: true
    });

   var m2 = new Morris.Area({
        // ID of the element in which to draw the chart.
        element: 'area-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { y: '2006', a: 30, b: 20 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#1CAF9A', '#F0AD4E'],
        lineWidth: '1px',
        fillOpacity: 0.8,
        smooth: false,
        hideHover: true
    });

   var m3 = new Morris.Bar({
        // ID of the element in which to draw the chart.
        element: 'bar-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { y: '2006', a: 30, b: 20 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineWidth: '1px',
        fillOpacity: 0.8,
        smooth: false,
        hideHover: true
    });

   var m4 = new Morris.Bar({
        // ID of the element in which to draw the chart.
        element: 'stacked-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { y: '2006', a: 30, b: 20 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        barColors: ['#1CAF9A', '#428BCA'],
        lineWidth: '1px',
        fillOpacity: 0.8,
        smooth: false,
        stacked: true,
        hideHover: true
   });

   var m5 = new Morris.Donut({
        element: 'donut-chart',
        data: [
          {label: 'Download Sales', value: 12},
          {label: 'In-Store Sales', value: 30},
          {label: 'Mail-Order Sales', value: 20}
        ]
   });

   var m6 = new Morris.Donut({
        element: 'donut-chart2',
        data: [
          {label: 'Chrome', value: 30},
          {label: 'Firefox', value: 20},
          {label: 'Opera', value: 20},
          {label: 'Safari', value: 20},
          {label: 'Internet Explorer', value: 10}
        ],
        colors: ['#D9534F','#1CAF9A','#428BCA','#5BC0DE','#428BCA']
   });


    /***** SPARKLINE CHARTS *****/

    $('#sparkline').sparkline([4,3,3,1,4,3,2,2,3], {
		  type: 'bar',
		  height:'30px',
        barColor: '#428BCA'
    });

    $('#sparkline2').sparkline([4,3,3,1,4,3,2,2,3], {
		  type: 'line',
		  height:'33px',
        width: '50px',
        lineColor: false,
        fillColor: '#1CAF9A'
    });

    $('#sparkline3').sparkline([4,3,3,1,4,3,2,2,3], {
		  type: 'pie',
		  height:'33px',
        sliceColors: ['#F0AD4E','#428BCA','#D9534F','#1CAF9A','#5BC0DE']
    });

    $('#sparkline4').sparkline([4,3,3,5,4,3,2,5,3], {
		  type: 'line',
		  height:'33px',
        width: '50px',
        lineColor: '#5BC0DE',
        fillColor: false
    });

    $('#sparkline4').sparkline([3,6,6,2,6,5,3,2,1], {
		  type: 'line',
		  height:'33px',
        width: '50px',
        lineColor: '#D9534F',
        fillColor: false,
        composite: true
    });

	var delay = (function() {
		var timer = 0;
		return function(callback, ms) {
			clearTimeout(timer);
			timer = setTimeout(callback, ms);
		};
   })();

   $(window).resize(function() {
		delay(function() {
			m1.redraw();
			m2.redraw();
			m3.redraw();
			m4.redraw();
			m5.redraw();
			m6.redraw();
	}, 200);
   }).trigger('resize');


});
