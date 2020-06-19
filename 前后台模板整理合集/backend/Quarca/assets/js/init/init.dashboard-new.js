"use strict";
$(document).ready(function() {
/*******************************
DRAG & DROP
*******************************/
    $('#widgets-container').gridstack({
	width: 4,
	cell_height: 110,
	vertical_margin: 10,
	animate: true,
	handle: '.widget .drag'
    });
    
/*******************************
SCROLL PANEL
*******************************/
    $('.scrollpane').each(function() {
        $(this).jScrollPane({
            autoReinitialise: true
        })
        
        .on('mousewheel',function(e){
            e.preventDefault();
        });
        
        var api = $(this).data('jsp');
        var throttleTimeout;
        $(window).on('resize',function() {
            if (!throttleTimeout) {
                throttleTimeout = setTimeout(function(){
                    api.reinitialise();
                    throttleTimeout = null;
                },
                50
                );
            }
        });
    });

/*******************************
FLOT CHART RANDOM DATA
*******************************/
    function GenerateSeries(added){
	var i = GenerateSeries;
	var data = [];
	var start = 1 + added;
	var end = 100 + added;
    
	for(i=1;i<=20;i++){
	    var d = Math.floor(Math.random() * (end - start + 1) + start);        
	    data.push([i, d]);
	    start++;
	    end++;
	}
    
	return data;
    }
    
/*******************************
MONTHLY STATISTICS
*******************************/
    //TYPOGRAPHY - Fit Text
    jQuery(".widget-monthly-statistics h4").fitText(1.2, { minFontSize: '14px', maxFontSize: '26px' });
    jQuery(".widget-monthly-statistics h5").fitText(1.2, { minFontSize: '16px', maxFontSize: '28px' });

    //DATA
    var data1 = GenerateSeries(200);
    var data2 = GenerateSeries(120);
    var data3 = GenerateSeries(20);
    
    $.plot($("#monthly-stats"), [{data: data1},{data: data2},{data: data3}],
	{
	    lines: {
		show: true,
		lineWidth: 0,
		fill: true
	    },
	    points: {
		show: false,
		radius: 3,
	    },
	    shadowSize: 0,
	    grid: {
		clickable: true,
		hoverable: true,
		borderWidth: 1,
		borderColor: "#f6f6f6",
		tickColor: "#f6f6f6",
	    },
	    colors: ["#87D37C", "#19B5FE", "#E4F1FE"],
	    tooltip: true,
	    tooltipOpts: {
		content: "%x = %y"
	    },
	}
    );
    
/*******************************
QUICK ALERTS
*******************************/
    //TYPOGRAPHY - Fit Text
    jQuery(".quick-alerts .fit-text").fitText(0.9, { minFontSize: '10px', maxFontSize: '18px' });
    
/*******************************
ANALYTICS
*******************************/
    //GENERATE RANDOM NUMBERS
    setInterval(function() {
	jQuery.each(jQuery('.random-numbers'),function(){
	    var number = 20 + Math.floor(Math.random() * 30);
	    jQuery(this).text(number);  
	});
    }, 1000);
    
    //SESSIONS
    var data4 = [
	[1, 0],
	[2, 0],
	[3, 0],
	[4, 25],
	[5, 80],
	[6, 125],
	[7, 63],
	[8, 48],
	[9, 178],
	[10, 152]
    ];
    $.plot($("#sessions"), [{data: data4}],
	{
	    lines: {
		show: true,
		lineWidth: 1,
		fill: false
	    },
	    points: {
		show: true,
		radius: 5,
	    },
	    shadowSize: 0,
	    grid: {
		clickable: true,
		hoverable: true,
		borderWidth: 1,
		borderColor: "#c44e77",
		tickColor: "#c44e77",
	    },
	    xaxis: {
		ticks: [
		    [1,"March 15"],
		    [2, "March 16"],
		    [3, "March 17"],
		    [4, "March 18"],
		    [5, "March 19"],
		    [6, "March 20"],
		    [7, "March 21"],
		    [8, "March 22"],
		    [9, "March 23"],
		    [10, "March 24"]
		]
	    },
	    colors: ["#fff"],
	    tooltip: true,
	    tooltipOpts: {
		content: "%x: %y Sessions"
	    },
	}
    );


/*******************************
SERVER STATUS
*******************************/
    var data = [], totalPoints = 100;
    function getRandomData() {
	
	if (data.length > 0)
	data = data.slice(1);
	
	while (data.length < totalPoints) {
	var prev = data.length > 0 ? data[data.length - 1] : 50;
	var y = prev + Math.random() * 10 - 5;
	if (y < 0)
	    y = 0;
	if (y > 100)
	    y = 100;
	data.push(y);
	}
    
	var res = [];
	for (var i = 0; i < data.length; ++i)
	res.push([i, data[i]])
	return res;
    }
    
    var updateInterval = 500;
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
    
    var options = {
	lines: {
	    show: true,
	    lineWidth: 0,
	    fill: true,
	    fillColor: "rgba(255, 255, 255, 0.5)",
	},
	grid:{
	    borderWidth: 0,
	    tickColor: "#4ed8cd"
	},
	series: {
	    shadowSize: 0,
	},
	yaxis:{
	    min: 0,
	    max: 100
	},
	xaxis:{
	    show: false
	}
    };
    
    var plot = $.plot($("#server-status"), [ getRandomData() ], options);
	
    function update() {
	plot.setData([ getRandomData() ]);
	plot.draw();
	setTimeout(update, updateInterval);
    }
    
    update();

/*******************************
SOCIAL STATISTICS
*******************************/
    var piedata = [
	{label: "New Visitors", data: 3143},
	{label: "Returning Visitors", data: 510}
    ];
    
    $.plot($("#social-stats"), piedata,
	{
	    series: {
		pie: {
		    show: true,
		    stroke: {width: 2, color: "#fff"},
		}
	    },
	    legend: {
		show: true,
	    },
	    colors: ["#87D37C", "#19B5FE"],
	    grid: {
		hoverable: true
	    },
	    tooltip: true,
	    tooltipOpts: {
		content: "%s: %p.0%",
	    },
	}
    );

});//END