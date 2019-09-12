//------------- chart-chartjs.js -------------//
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

	//------------- Chartjs -------------//

	//generate random number for charts
	randNum = function(){
		//return Math.floor(Math.random()*101);
		return (Math.floor( Math.random()* (1+40-20) ) ) + 20;
	}
	
	//------------- Line chart -------------//
	var lineData = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				label: "PayPal",
				fillColor : "rgba(186,195,210,0.2)",
				strokeColor : "rgba(186,195,210,1)",
				pointColor : "rgba(186,195,210,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(186,195,210,1)",
				data : [3+randNum(),5+randNum(),8+randNum(),13+randNum(),17+randNum(),21+randNum(),23+randNum()]
			},
			{
				label: "Credit card",
				fillColor : "rgba(96,177,204,0.2)",
				strokeColor : "rgba(96,177,204,1)",
				pointColor : "rgba(96,177,204,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(96,177,204,1)",
				data : [randNum()-5,randNum()-2,randNum()-4,randNum()-1,randNum()-3,randNum()-2,randNum()-5]
			}
		]

	}
	var ctx = document.getElementById("line-chartjs").getContext("2d");
	var myLineChart = new Chart(ctx).Line(lineData, {
		responsive: true,
		scaleShowGridLines : true,
    	scaleGridLineColor : "#bfbfbf",
    	scaleGridLineWidth : 0.2,
    	bezierCurve : false,
    	//points
    	pointDot : false,
    	datasetStroke : true,
    	datasetStrokeWidth : 2,
    	datasetFill : true,
    	//animations
    	animation: true,
    	animationSteps: 60,
    	animationEasing: "easeOutQuart",
    	//scale
    	showScale: true,
    	scaleFontFamily: "'Roboto'",
    	scaleFontSize: 13,
    	scaleFontStyle: "normal",
    	scaleFontColor: "#333",
    	//tooltips
    	showTooltips: true,
    	tooltipFillColor: "#344154",
    	tooltipFontFamily: "'Roboto'",
    	tooltipFontSize: 13,
    	tooltipFontColor: "#fff",
    	tooltipYPadding: 8,
    	tooltipXPadding: 10,
    	tooltipCornerRadius: 2,
    	tooltipTitleFontFamily: "'Roboto'",
	});

	//------------- Line chart with dots -------------//
	var lineDotsData = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				label: "PayPal",
				fillColor : "rgba(223,106,120,0.2)",
				strokeColor : "rgba(223,106,120,1)",
				pointColor : "rgba(223,106,120,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(223,106,120,1)",				
				data : [3+randNum(),5+randNum(),8+randNum(),13+randNum(),17+randNum(),21+randNum(),23+randNum()]
			},
			{
				label: "Credit card",
				fillColor : "rgba(96,177,204,0.2)",
				strokeColor : "rgba(96,177,204,1)",
				pointColor : "rgba(96,177,204,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(96,177,204,1)",
				data : [randNum()-5,randNum()-2,randNum()-4,randNum()-1,randNum()-3,randNum()-2,randNum()-5]
			}
		]

	}
	var ctxDots = document.getElementById("line-dots-chartjs").getContext("2d");
	var myLineDotsChart = new Chart(ctxDots).Line(lineDotsData, {
		responsive: true,
		scaleShowGridLines : true,
    	scaleGridLineColor : "#bfbfbf",
    	scaleGridLineWidth : 0.2,
    	bezierCurve : false,
    	bezierCurveTension : 0.4,
    	//points
    	pointDot : true,
    	pointDotRadius : 4,
    	pointDotStrokeWidth : 1,
    	pointHitDetectionRadius : 20,
    	datasetStroke : true,
    	datasetStrokeWidth : 2,
    	datasetFill : true,
    	//animations
    	animation: true,
    	animationSteps: 60,
    	animationEasing: "easeOutQuart",
    	//scale
    	showScale: true,
    	scaleFontFamily: "'Roboto'",
    	scaleFontSize: 13,
    	scaleFontStyle: "normal",
    	scaleFontColor: "#333",
    	//tooltips
    	showTooltips: true,
    	tooltipFillColor: "#344154",
    	tooltipFontFamily: "'Roboto'",
    	tooltipFontSize: 13,
    	tooltipFontColor: "#fff",
    	tooltipYPadding: 8,
    	tooltipXPadding: 10,
    	tooltipCornerRadius: 2,
    	tooltipTitleFontFamily: "'Roboto'",
	});

	//------------- Line chart unfilled -------------//
	var lineData1 = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				label: "PayPal",
				fillColor : "rgba(186,195,210,0.2)",
				strokeColor : "rgba(186,195,210,1)",
				pointColor : "rgba(186,195,210,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#a1a1a1",
				pointHighlightStroke : "#fff",
				data : [3+randNum(),5+randNum(),8+randNum(),13+randNum(),17+randNum(),21+randNum(),23+randNum()]
			},
			{
				label: "Credit card",
				fillColor : "rgba(67,174,168,0.2)",
				strokeColor : "rgba(67,174,168,1)",
				pointColor : "rgba(67,174,168,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(67,174,168,1)",
				data : [randNum()-5,randNum()-2,randNum()-4,randNum()-1,randNum()-3,randNum()-2,randNum()-5]
			}
		]

	}
	var ctx1 = document.getElementById("line-unfilled-chartjs").getContext("2d");
	var myLineChart1 = new Chart(ctx1).Line(lineData1, {
		responsive: true,
		scaleShowGridLines : true,
    	scaleGridLineColor : "#bfbfbf",
    	scaleGridLineWidth : 0.2,
    	bezierCurve : true,
    	//points
    	pointDot : false,
    	datasetFill : false,
    	//animations
    	animation: true,
    	animationSteps: 60,
    	animationEasing: "easeOutQuart",
    	//scale
    	showScale: true,
    	scaleFontFamily: "'Roboto'",
    	scaleFontSize: 13,
    	scaleFontStyle: "normal",
    	scaleFontColor: "#333",
    	//tooltips
    	showTooltips: true,
    	tooltipFillColor: "#344154",
    	tooltipFontFamily: "'Roboto'",
    	tooltipFontSize: 13,
    	tooltipFontColor: "#fff",
    	tooltipYPadding: 8,
    	tooltipXPadding: 10,
    	tooltipCornerRadius: 2,
    	tooltipTitleFontFamily: "'Roboto'",
	});

	//------------- Bar chart  -------------//
	var barChartData = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				fillColor : "rgba(186,195,210,0.5)",
				strokeColor : "rgba(186,195,210,0.3)",
				highlightFill: "rgba(186,195,210,0.75)",
				highlightStroke: "rgba(186,195,210,1)",
				data : [3+randNum(),5+randNum(),8+randNum(),13+randNum(),17+randNum(),21+randNum(),23+randNum()]
			},
			{
				fillColor : "rgba(96,177,204,0.5)",
				strokeColor : "rgba(96,177,204,0.3)",
				highlightFill : "rgba(96,177,204,0.75)",
				highlightStroke : "rgba(96,177,204,1)",
				data : [randNum()-5,randNum()-2,randNum()-4,randNum()-1,randNum()-3,randNum()-2,randNum()-5]
			}
		]
	}

	var ctxBar = document.getElementById("bar-chartjs").getContext("2d");
	myBar = new Chart(ctxBar).Bar(barChartData, {
		responsive : true,
		scaleShowGridLines : true,
    	scaleGridLineColor : "#bfbfbf",
    	scaleGridLineWidth : 0.2,
    	//bar options
    	barShowStroke : true,
    	barStrokeWidth : 2,
    	barValueSpacing : 5,
    	barDatasetSpacing : 2,
    	//animations
    	animation: true,
    	animationSteps: 60,
    	animationEasing: "easeOutQuart",
    	//scale
    	showScale: true,
    	scaleFontFamily: "'Roboto'",
    	scaleFontSize: 13,
    	scaleFontStyle: "normal",
    	scaleFontColor: "#333",
    	scaleBeginAtZero : true,
    	//tooltips
    	showTooltips: true,
    	tooltipFillColor: "#344154",
    	tooltipFontFamily: "'Roboto'",
    	tooltipFontSize: 13,
    	tooltipFontColor: "#fff",
    	tooltipYPadding: 8,
    	tooltipXPadding: 10,
    	tooltipCornerRadius: 2,
    	tooltipTitleFontFamily: "'Roboto'",
	});

	//------------- Pie chart  -------------//
	var pieData = [
		{
			value: 300,
			color:"#df6a78",
			highlight: "#db5565",
			label: "SEO"
		},
		{
			value: 50,
			color: "#29b6d8",
			highlight: "#0bacd3",
			label: "Coding"
		},
		{
			value: 100,
			color: "#66c796",
			highlight: "#51bf87",
			label: "Hosting"
		},
		{
			value: 40,
			color: "#f5b75f",
			highlight: "#f4ad49",
			label: "Design"
		},
		{
			value: 120,
			color: "#444c58",
			highlight: "#262d37",
			label: "Other"
		}

	];

	var ctxPie = document.getElementById("pie-chartjs").getContext("2d");
	myPie = new Chart(ctxPie).Pie(pieData, {
		responsive : true,
    	//pie options
    	segmentShowStroke : true,
    	segmentStrokeColor : "#fff",
    	segmentStrokeWidth : 2,
    	percentageInnerCutout : 0, // This is 0 for Pie charts
    	//animations
    	animation: true,
    	animationSteps: 100,
    	animationEasing: "easeOutBounce",
    	animateRotate : true,
    	animateScale : false,
    	//tooltips
    	showTooltips: true,
    	tooltipFillColor: "#344154",
    	tooltipFontFamily: "'Roboto'",
    	tooltipFontSize: 13,
    	tooltipFontColor: "#fff",
    	tooltipYPadding: 8,
    	tooltipXPadding: 10,
    	tooltipCornerRadius: 2,
    	tooltipTitleFontFamily: "'Roboto'",
	});

	//------------- Donut chart  -------------//
	var donutData = [
		{
			value: 300,
			color:"#df6a78",
			highlight: "#db5565",
			label: "SEO"
		},
		{
			value: 50,
			color: "#29b6d8",
			highlight: "#0bacd3",
			label: "Coding"
		},
		{
			value: 100,
			color: "#66c796",
			highlight: "#51bf87",
			label: "Hosting"
		},
		{
			value: 40,
			color: "#f5b75f",
			highlight: "#f4ad49",
			label: "Design"
		},
		{
			value: 120,
			color: "#444c58",
			highlight: "#262d37",
			label: "Other"
		}

	];

	var ctxDonut = document.getElementById("donut-chartjs").getContext("2d");
	myDonut = new Chart(ctxDonut).Doughnut(donutData, {
		responsive : true,
    	//donut options
    	segmentShowStroke : true,
    	segmentStrokeColor : "#fff",
    	segmentStrokeWidth : 2,
    	percentageInnerCutout : 45, // This is 0 for Pie charts
    	//animations
    	animation: true,
    	animationSteps: 100,
    	animationEasing: "easeOutBounce",
    	animateRotate : true,
    	animateScale : true,
    	//tooltips
    	showTooltips: true,
    	tooltipFillColor: "#344154",
    	tooltipFontFamily: "'Roboto'",
    	tooltipFontSize: 13,
    	tooltipFontColor: "#fff",
    	tooltipYPadding: 8,
    	tooltipXPadding: 10,
    	tooltipCornerRadius: 2,
    	tooltipTitleFontFamily: "'Roboto'",
	});

	//------------- Radar chart -------------//
	var radarChartData = {
		labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
			{
				label: "My First dataset",
				fillColor: "rgba(186,195,210,0.2)",
				strokeColor: "rgba(186,195,210,1)",
				pointColor: "rgba(186,195,210,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(186,195,210,1)",
				data: [65,59,90,81,56,55,40]
			},
			{
				label: "My Second dataset",
				fillColor: "rgba(96,177,204,0.2)",
				strokeColor: "rgba(96,177,204,1)",
				pointColor: "rgba(96,177,204,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(96,177,204,1)",
				data: [28,48,40,19,96,27,100]
			}
		]
	};
	
	myRadar = new Chart(document.getElementById("radar-chartjs").getContext("2d")).Radar(radarChartData, {
		responsive: true,
		//radar options
		scaleShowLine : true,
		angleShowLineOut : true,
		scaleShowLabels : false,
		angleLineColor : "rgba(0,0,0,.0.5)",
		angleLineWidth : 1,
		pointDotRadius : 3,
		pointDotStrokeWidth : 1,
		//points
		pointLabelFontFamily : "'Roboto'",
		pointDot : true,
		//animations
    	animation: true,
    	animationSteps: 100,
    	animationEasing: "easeOutBounce",
    	animateRotate : true,
    	animateScale : true,
    	//tooltips
    	showTooltips: true,
    	tooltipFillColor: "#344154",
    	tooltipFontFamily: "'Roboto'",
    	tooltipFontSize: 13,
    	tooltipFontColor: "#fff",
    	tooltipYPadding: 8,
    	tooltipXPadding: 10,
    	tooltipCornerRadius: 2,
    	tooltipTitleFontFamily: "'Roboto'",
	});

	//------------- Polar area -------------//	
	var polarData = [
		{
			value: 300,
			color:"#df6a78",
			highlight: "#db5565",
			label: "SEO"
		},
		{
			value: 50,
			color: "#29b6d8",
			highlight: "#0bacd3",
			label: "Coding"
		},
		{
			value: 100,
			color: "#66c796",
			highlight: "#51bf87",
			label: "Hosting"
		},
		{
			value: 40,
			color: "#f5b75f",
			highlight: "#f4ad49",
			label: "Design"
		},
		{
			value: 120,
			color: "#444c58",
			highlight: "#262d37",
			label: "Other"
		}

	];

    var ctxPolar = document.getElementById("polar-chartjs").getContext("2d");
	myPolarArea = new Chart(ctxPolar).PolarArea(polarData, {
		responsive:true,
		//animations
    	animation: true,
    	animationSteps: 100,
    	animationEasing: "easeOutBounce",
    	animateRotate : true,
    	animateScale : false,
    	//tooltips
    	showTooltips: true,
    	tooltipFillColor: "#344154",
    	tooltipFontFamily: "'Roboto'",
    	tooltipFontSize: 13,
    	tooltipFontColor: "#fff",
    	tooltipYPadding: 8,
    	tooltipXPadding: 10,
    	tooltipCornerRadius: 2,
    	tooltipTitleFontFamily: "'Roboto'",
	});
			
});