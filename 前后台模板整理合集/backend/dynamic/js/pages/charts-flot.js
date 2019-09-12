//------------- charts-flot.js -------------//
$(document).ready(function() {

	//------------- Sparklines in header stats -------------//
	$('#spark-visitors').sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-templateviews').sparkline([12,11,6,13,8,5,8,10,12,11,6,13,8,5,8,10,12,11,6,13,8,5,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-sales').sparkline([19,18,20,17,20,18,22,24,23,19,18,20,17,20,18,22,24,23,19,18,20,17], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	//------------- Flot charts -------------//

	//define chart colours first
	var chartColours = {
		gray: '#bac3d2',
		teal: '#43aea8',
		blue: '#60b1cc',
		red: '#df6a78',
		orange: '#cfa448',
		gray_lighter: '#e8ecf1',
		gray_light: '#777777',
		gridColor: '#bfbfbf'
	}

	//convert the object to array for flot use
	var chartColoursArr = Object.keys(chartColours).map(function (key) {return chartColours[key]});

	//generate random number for charts
	randNum = function(){
		//return Math.floor(Math.random()*101);
		return (Math.floor( Math.random()* (1+40-20) ) ) + 20;
	}

	//-------------Line chart -------------//
	$(function () {
		//some data
		var d1 = [[1, 3+randNum()], [2, 6+randNum()], [3, 9+randNum()], [4, 12+randNum()],[5, 15+randNum()],[6, 18+randNum()],[7, 21+randNum()],[8, 15+randNum()],[9, 18+randNum()],[10, 21+randNum()],[11, 24+randNum()],[12, 27+randNum()],[13, 30+randNum()],[14, 33+randNum()],[15, 24+randNum()],[16, 27+randNum()],[17, 30+randNum()],[18, 33+randNum()],[19, 36+randNum()],[20, 39+randNum()],[21, 42+randNum()],[22, 45+randNum()],[23, 36+randNum()],[24, 39+randNum()],[25, 42+randNum()],[26, 45+randNum()],[27,38+randNum()],[28, 51+randNum()],[29, 55+randNum()], [30, 60+randNum()]];
		var d2 = [[1, randNum()-5], [2, randNum()-4], [3, randNum()-4], [4, randNum()],[5, 4+randNum()],[6, 4+randNum()],[7, 5+randNum()],[8, 5+randNum()],[9, 6+randNum()],[10, 6+randNum()],[11, 6+randNum()],[12, 2+randNum()],[13, 3+randNum()],[14, 4+randNum()],[15, 4+randNum()],[16, 4+randNum()],[17, 5+randNum()],[18, 5+randNum()],[19, 2+randNum()],[20, 2+randNum()],[21, 3+randNum()],[22, 3+randNum()],[23, 3+randNum()],[24, 2+randNum()],[25, 4+randNum()],[26, 4+randNum()],[27,5+randNum()],[28, 2+randNum()],[29, 2+randNum()], [30, 3+randNum()]];

		var options = {
			grid: {
				show: true,
			    aboveData: true,
			    color: chartColours.gridColor,
			    labelMargin: 15,
			    axisMargin: 0, 
			    borderWidth: 0,
			    borderColor:null,
			    minBorderMargin: 5,
			    clickable: true, 
			    hoverable: true,
			    autoHighlight: true,
			    mouseActiveRadius: 20
			},
	        series: {
	        	grow: {active:true},
	            lines: {
            		show: true,
            		fill: false,
            		lineWidth: 2,
            		steps: false
	            	},
	            points: {show:false}
	        },
	        legend: { 
	        	position: "ne", 
	        	margin: [0,-25], 
	        	noColumns: 0,
	        	labelBoxBorderColor: null,
	        	labelFormatter: function(label, series) {
				    // just add some space to labes
				    return '&nbsp;&nbsp;' + label + ' &nbsp;&nbsp;';
				},
				width: 30,
				height: 2
	    	},
	        yaxis: { min: 0 },
		    xaxis: {ticks:11, tickDecimals: 0, tickLength: 0},
	        colors: chartColoursArr,
	        shadowSize:1,
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.0" + " $",
				shifts: {
					x: -30,
					y: -50
				}
			}
	    };   

    	$.plot($("#line-chart"), [ 
    		{
    			label: "PayPal", 
    			data: d1,
    			lines: {fillColor: chartColours.gray}	
    		}, 
    		{	
    			label: "Credit Card", 
    			data: d2,
    			lines: {fillColor: chartColours.teal}
    		} 

    	], options);

	});

	//------------- Line charts with dots -------------//
	$(function () {
		var d1 = [[1, 3+randNum()], [2, 6+randNum()], [3, 9+randNum()], [4, 12+randNum()],[5, 15+randNum()],[6, 18+randNum()],[7, 21+randNum()],[8, 15+randNum()],[9, 18+randNum()],[10, 21+randNum()]];
		var d2 = [[1, randNum()-5], [2, randNum()-4], [3, randNum()-4], [4, randNum()],[5, 4+randNum()],[6, 4+randNum()],[7, 5+randNum()],[8, 5+randNum()],[9, 6+randNum()],[10, 6+randNum()]];
	    //graph options
		var options = {
			grid: {
				show: true,
			    aboveData: true,
			    color: chartColours.gridColor,
			    labelMargin: 15,
			    axisMargin: 0, 
			    borderWidth: 0,
			    borderColor:null,
			    minBorderMargin: 0,
			    clickable: true, 
			    hoverable: true,
			    autoHighlight: true,
			    mouseActiveRadius: 20
			},
	        series: {
	        	grow: {active:false},
	            lines: {
            		show: true,
            		fill: false,
            		lineWidth: 2,
            		steps: false
	            	},
	            points: {
	            	show:true,
	            	radius: 4,
	            	symbol: "circle",
	            	fill: true
	            }
	        },
	        legend: { 
	        	position: "ne", 
	        	margin: [0,-25], 
	        	noColumns: 0,
	        	labelBoxBorderColor: null,
	        	labelFormatter: function(label, series) {
				    // just add some space to labes
				    return '&nbsp;&nbsp;' + label + ' &nbsp;&nbsp;';
				},
				width: 30,
				height: 2
	    	},
	        colors: chartColoursArr,
	        shadowSize:1,
	        yaxis: { min: 0, tickSize: 15},
		    xaxis: {ticks:10, tickDecimals: 0, tickLength: 0},
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.0" + " $",
				shifts: {
					x: -30,
					y: -50
				}
			}
		};  
		var plot = $.plot($("#line-chart-dots"),
           [{
    			label: "PayPal",
    			data: d1,    			
    			points: {fillColor: '#fff'}	
    		}, 
    		{	
    			label: "Credit Card",
    			data: d2,    			
    			points: {fillColor: '#fff'}
    		}], options);
	});

	/* ------------------ Line charts filled --------------------*/
	$(function () {
		//some data
		var d1 = [[1, 3+randNum()], [2, 6+randNum()], [3, 9+randNum()], [4, 12+randNum()],[5, 15+randNum()],[6, 18+randNum()],[7, 21+randNum()],[8, 15+randNum()],[9, 18+randNum()],[10, 21+randNum()],[11, 24+randNum()],[12, 27+randNum()],[13, 30+randNum()],[14, 33+randNum()],[15, 24+randNum()],[16, 27+randNum()],[17, 30+randNum()],[18, 33+randNum()],[19, 36+randNum()],[20, 39+randNum()],[21, 42+randNum()],[22, 45+randNum()],[23, 36+randNum()],[24, 39+randNum()],[25, 42+randNum()],[26, 45+randNum()],[27,38+randNum()],[28, 51+randNum()],[29, 55+randNum()], [30, 60+randNum()]];

		var options = {
			grid: {
				show: true,
			    aboveData: true,
			    color: chartColours.gridColor,
			    labelMargin: 15,
			    axisMargin: 0, 
			    borderWidth: 0,
			    borderColor:null,
			    minBorderMargin: 5 ,
			    clickable: true, 
			    hoverable: true,
			    autoHighlight: true,
			    mouseActiveRadius: 20
			},
	        series: {
	        	grow: {active:false},
	            lines: {
            		show: true,
            		fill: true,
            		lineWidth: 2,
            		steps: false
	            	},
	            points: {show:false}
	        },
	        legend: { 
	        	position: "ne", 
	        	margin: [0,-25], 
	        	noColumns: 0,
	        	labelBoxBorderColor: null,
	        	labelFormatter: function(label, series) {
				    // just add some space to labes
				    return '&nbsp;&nbsp;' + label + ' &nbsp;&nbsp;';
				},
				width: 30,
				height: 2
	    	},
	        yaxis: { min: 0, tickSize: 20},
		    xaxis: {ticks:11, tickDecimals: 0, tickLength: 0},
	        colors: chartColoursArr,
	        shadowSize:1,
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.0" + " $",
				shifts: {
					x: -30,
					y: -50
				}
			}
	    };   

    	$.plot($("#line-chart-filled"), [ 

    		{
    			label: "Visits", 
    			data: d1,
    			lines: {fillColor: chartColours.gray_lighter},
    			points: {fillColor: chartColours.gray}
    		}

    	], options);

	});

	//------------- Auto update chart -------------//
 	$(function () {
		// we use an inline data source in the example, usually data would
	    // be fetched from a server
	    var data = [], totalPoints = 300;
	    function getRandomData() {
	        if (data.length > 0)
	            data = data.slice(1);

	        // do a random walk
	        while (data.length < totalPoints) {
	            var prev = data.length > 0 ? data[data.length - 1] : 50;
	            var y = prev + Math.random() * 10 - 5;
	            if (y < 0)
	                y = 0;
	            if (y > 100)
	                y = 100;
	            data.push(y);
	        }

	        // zip the generated y values with the x values
	        var res = [];
	        for (var i = 0; i < data.length; ++i)
	            res.push([i, data[i]])
	        return res;
	    }

	    // Update interval
	    var updateInterval = 200;

	    // setup plot
	    var options = {
	        series: { 
	        	grow: {active:false}, //disable auto grow
	        	shadowSize: 0, // drawing is faster without shadows
	        	lines: {
            		show: true,
            		fill: true,
            		lineWidth: 2,
            		steps: false
	            }
	        },
	        grid: {
				show: true,
			    aboveData: false,
			    color: chartColours.gridColor ,
			    labelMargin: 15,
			    axisMargin: 0, 
			    borderWidth: 0,
			    borderColor:null,
			    minBorderMargin: 5 ,
			    clickable: true, 
			    hoverable: true,
			    autoHighlight: false,
			    mouseActiveRadius: 20
			}, 
			colors: chartColoursArr,
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "Value is : %y.0" + " $",
				shifts: {
					x: -30,
					y: -50
				}
			},	
	        yaxis: { min: 0, max: 100 },
	        xaxis: {show:true, tickLength: 0},
	    };
	    var plot = $.plot($("#auto-update-chart"), [ getRandomData() ], options);

	    function update() {
	        plot.setData([ getRandomData() ]);
	        // since the axes don't change, we don't need to call plot.setupGrid()
	        plot.draw();
	        
	        setTimeout(update, updateInterval);
	    }

	    update();
	});

	//------------- Bars chart -------------//
	$(function () {	
    	
    	var d1 = [ ["JAN", 1500], ["FEB", 1345], ["MAR", 1800], ["APR", 1670], ["MAY", 1780], ["JUN", 1500], ["JUL", 1350], ["AUG", 1700], ["SEP", 1890], ["OCT", 2000], ["NOV", 1950], ["DEC", 2000] ];
    	var d2 = [ ["JAN", 1200], ["FEB", 1545], ["MAR", 1300], ["APR", 1870], ["MAY", 1180], ["JUN", 1200], ["JUL", 1750], ["AUG", 1200], ["SEP", 1990], ["OCT", 2200], ["NOV", 1450], ["DEC", 1000] ];
    	

    	var options = {
    		series : {
				stack: true
			},
			bars: {
				show:true,
				barWidth: 0.5,
				fill:1,
				align: "center"
			},
			grid: {
				show:true,
				hoverable: true,
				borderWidth: 0,
			    borderColor:null
			},
	        colors: chartColoursArr,
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "$%y.0",
				shifts: {
					x: -30,
					y: -50
				}
			},
			yaxis: {
				tickLength: 0,
				show:false
			},
			xaxis: { 
	        	mode: "categories",
				tickLength: 0
	        }
		};
		 
		$.plot($("#bars-chart"), [d1, d2], options);
	});

	//------------- Ordered bars chart -------------//
	$(function () {
		//some data
		var d1 = [];
	    for (var i = 0; i <= 10; i += 1)
	        d1.push([i, parseInt(Math.random() * 30)]);
	 
	    var d2 = [];
	    for (var i = 0; i <= 10; i += 1)
	        d2.push([i, parseInt(Math.random() * 30)]);
	 
	    var d3 = [];
	    for (var i = 0; i <= 10; i += 1)
	        d3.push([i, parseInt(Math.random() * 30)]);
	 
	    var ds = new Array();
	 
	    ds.push({
	     	label: "Data One",
	        data:d1,
	        bars: {order: 1}
	    });
	    ds.push({
	    	label: "Data Two",
	        data:d2,
	        bars: {order: 2}
	    });
	    ds.push({
	    	label: "Data Three",
	        data:d3,
	        bars: {order: 3}
	    });

	    var stack = 0, bars = false, lines = false, steps = false;

		var options = {
				bars: {
					show:true,
					barWidth: 0.2,
					fill:1
				},
				grid: {
					show: true,
				    aboveData: false,
				    color: chartColours.gridColor,
				    labelMargin: 5,
				    axisMargin: 0, 
				    borderWidth: 0,
				    borderColor:null,
				    minBorderMargin: 5 ,
				    clickable: true, 
				    hoverable: true,
				    autoHighlight: false,
				    mouseActiveRadius: 20
				},
		        series: {
		        	stack: stack
		        },
		        legend: { 
		        	position: "ne", 
		        	margin: [0,-25], 
		        	noColumns: 0,
		        	labelBoxBorderColor: null,
		        	labelFormatter: function(label, series) {
					    // just add some space to labes
					    return '&nbsp;&nbsp;' + label + ' &nbsp;&nbsp;';
					},
					width: 30,
					height: 2
		    	},
		        colors: chartColoursArr,
		        tooltip: true, //activate tooltip
				tooltipOpts: {
					content: "%s : %y.0",
					shifts: {
						x: -30,
						y: -50
					}
				}
		};

		$.plot($("#ordered-bars-chart"), ds, options);
	});

	//------------- Pie chart -------------//
	$(function () {
		var options = {
			series: {
				pie: { 
					show: true,
					innerRadius: 0,
					radius: 'auto',
					highlight: {
						opacity: 0.1
					},
					stroke: {
						width: 2,
					}
				}					
			},
			legend:{
				show:true,
				labelFormatter: function(label, series) {
				    return '<div style="font-weight:bold;font-size:13px;">&nbsp;'+ label +'</div>'
				},
				labelBoxBorderColor: null,
				margin: 50,
				width: 20,
				padding: 1
			},
			grid: {
	            hoverable: true,
	            clickable: true,
	        },
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.1"+"%",
				shifts: {
					x: -30,
					y: -50
				},
				theme: 'dark',
				defaultTheme: false
			}
		};
		var data = [
		    { label: "Coding",  data: 68, color: chartColours.gray},
		    { label: "Design",  data: 20, color: chartColours.red},
		    { label: "SEO",  data: 12, color: chartColours.blue}
		];
	    $.plot($("#pie-chart"), data, options);

	});

	//------------- Donut chart -------------//
	$(function () {
		var options = {
			series: {
				pie: { 
					show: true,
					innerRadius: 0.55,
					highlight: {
						opacity: 0.1
					},
					radius: 1,
					stroke: {
						width: 10
					},
					startAngle: 2.15
				}					
			},
			legend:{
				show:true,
				labelFormatter: function(label, series) {
				    return '<div style="font-weight:bold;font-size:13px;">&nbsp;'+ label +'</div>'
				},
				labelBoxBorderColor: null,
				margin: 50,
				width: 20,
				padding: 1
			},
			grid: {
	            hoverable: true,
	            clickable: true,
	        },
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.1"+"%",
				shifts: {
					x: -30,
					y: -50
				},
				theme: 'dark',
				defaultTheme: false
			}
		};
		var data = [
		    { label: "Coding",  data: 68, color: chartColours.gray},
		    { label: "Design",  data: 20, color: chartColours.red},
		    { label: "SEO",  data: 12, color: chartColours.blue}
		];
	    $.plot($("#donut-chart"), data, options);

	});
	
});