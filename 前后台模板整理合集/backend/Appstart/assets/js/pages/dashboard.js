//------------- Dashboard.js -------------//
$(document).ready(function() {

	//get object with colros from plugin and store it.
	var objColors = $('body').data('appStart').getColors();
	var colours = {
		white: objColors.white,
		dark: objColors.dark,
		red : objColors.red,
		blue: objColors.blue,
		green : objColors.green,
		yellow: objColors.yellow,
		brown: objColors.brown,
		orange : objColors.orange,
		purple : objColors.purple,
		pink : objColors.pink,
		lime : objColors.lime,
		magenta: objColors.magenta,
		teal: objColors.teal,
		textcolor: '#5a5e63',
		gray: objColors.gray
	}

	//define chart colours
	var chartColours = ['#3fc3a8', '#ed7a53', '#9FC569', '#bbdce3', '#9a3b1b', '#5a8022', '#2c7282'];

 	//generate random number for charts
	randNum = function(){
		//return Math.floor(Math.random()*101);
		return (Math.floor( Math.random()* (1+40-20) ) ) + 20;
	}

	//------------- Line charts with dots -------------//
	$(function () {
		var d1 = [[1, 3+randNum()], [2, 6+randNum()], [3, 9+randNum()], [4, 12+randNum()],[5, 15+randNum()],[6, 18+randNum()],[7, 21+randNum()],[8, 15+randNum()],[9, 18+randNum()],[10, 21+randNum()],[11, 24+randNum()],[12, 27+randNum()],[13, 30+randNum()],[14, 33+randNum()],[15, 24+randNum()],[16, 27+randNum()],[17, 30+randNum()],[18, 33+randNum()],[19, 36+randNum()],[20, 39+randNum()],[21, 42+randNum()],[22, 45+randNum()],[23, 36+randNum()],[24, 39+randNum()],[25, 42+randNum()],[26, 45+randNum()],[27,38+randNum()],[28, 51+randNum()],[29, 55+randNum()], [30, 60+randNum()]];
		var d2 = [[1, randNum()-5], [2, randNum()-4], [3, randNum()-4], [4, randNum()],[5, 4+randNum()],[6, 4+randNum()],[7, 5+randNum()],[8, 5+randNum()],[9, 6+randNum()],[10, 6+randNum()],[11, 6+randNum()],[12, 2+randNum()],[13, 3+randNum()],[14, 4+randNum()],[15, 4+randNum()],[16, 4+randNum()],[17, 5+randNum()],[18, 5+randNum()],[19, 2+randNum()],[20, 2+randNum()],[21, 3+randNum()],[22, 3+randNum()],[23, 3+randNum()],[24, 2+randNum()],[25, 4+randNum()],[26, 4+randNum()],[27,5+randNum()],[28, 2+randNum()],[29, 2+randNum()], [30, 3+randNum()]];
	    //graph options
		var options = {
			grid: {
				show: true,
			    aboveData: true,
			    color:'#3f3f3f',
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
            		fill: true,
            		lineWidth: 2,
            		steps: false
	            	},
	            points: {
	            	show:true,
	            	radius: 4,
	            	symbol: "circle",
	            	fill: true,
	            	borderColor: "#fff"
	            }
	        },
	        legend: { position: "se" },
	        colors: chartColours,
	        shadowSize:1,
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.0",
				shifts: {
					x: -30,
					y: -50
				}
			}
		};  
		var plot = $.plot($("#views-statistics"),
           [{
    			label: "Visits",
    			data: d1,
    			lines: {fillColor: "#f2f7f9"},
    			points: {fillColor: "#3fc3a8"}
    		}, 
    		{	
    			label: "Unique Visits",
    			data: d2,
    			lines: {fillColor: "#fff8f2"},
    			points: {fillColor: "#ed7a53"}
    		}], options);
	});

	//------------- Init pie charts -------------//
    //pass the variables to pie chart init function
    //first is line width, size for pie, animated time , and colours object for theming.
	initPieChartPage(20,100,1500, colours);

	//------------- Full calendar -------------//
	$(function(){
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			buttonText: {
	        	prev: '<i class="im-arrow-left2 s20"></i>',
	        	next: '<i class="im-arrow-right3 s20"></i>',
	        	today:'Today'
	    	},
			editable: true,
			events: [
				{
					title: 'All Day Event',
					start: new Date(y, m, 1),
					backgroundColor: colours.green,
					borderColor: colours.green
				},
				{
					title: 'Long Event',
					start: new Date(y, m, d-5),
					end: new Date(y, m, d-2),
					backgroundColor: colours.red,
					borderColor: colours.red
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d-3, 16, 0),
					allDay: false
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d+4, 16, 0),
					allDay: false
				},
				{
					title: 'Meeting',
					start: new Date(y, m, d, 10, 30),
					allDay: false,
					backgroundColor: colours.orange,
					borderColor: colours.orange
				},
				{
					title: 'Lunch',
					start: new Date(y, m, d, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false,
					backgroundColor: colours.teal,
					borderColor: colours.teal
				},
				{
					title: 'Birthday Party',
					start: new Date(y, m, d+1, 19, 0),
					end: new Date(y, m, d+1, 22, 30),
					allDay: false,
					backgroundColor: colours.pink,
					borderColor: colours.pink
				},
				{
					title: 'Click for SuggeElson',
					start: new Date(y, m, 28),
					end: new Date(y, m, 29),
					url: 'http://suggeelson.com/',
					backgroundColor: colours.dark,
					borderColor: colours.dark
				}
			]
		});
	});

	//------------- Weather icons -------------//
	var today = new Skycons({
		"color": colours.teal,
		"resizeClear": true
	});
	today.set("weather-now", "rain");
	today.play();
   	//set forecast icons too
   	var forecast = new Skycons({
		"color": colours.white,
		"resizeClear": true
	});
   	forecast.set("forecast-now", "rain");
   	forecast.set("forecast-day1", "partly-cloudy-day");
   	forecast.set("forecast-day2", "clear-day");
   	forecast.set("forecast-day3", "wind");
   	forecast.play();

   	//------------- Todo basic functions -------------//
	$(function() {
		var todos = $('.todo-widget');
        var items = todos.find('.todo-task-item');
        var chboxes = items.find('input[type="checkbox"]');
        var close = items.find('.close');

        $(chboxes).on('ifChecked', function(event){
            $(this).closest('.todo-task-item').addClass('task-done');
        });

        $(chboxes).on('ifUnchecked', function(event){
            $(this).closest('.todo-task-item').removeClass('task-done');
        });

        close.click(function() {
            $(this).closest('.todo-task-item').fadeOut('500');
        });
	});

	//------------- Instagram widget carousel -------------//
	$('#instagram-widget').carousel({
		interval:   4000
	});

});

//Setup easy pie charts in page
var initPieChartPage = function(lineWidth, size, animateTime, colours) {

	$(".easy-pie-chart").easyPieChart({
        barColor: colours.dark,
        borderColor: colours.dark,
        trackColor: colours.gray,
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-red").easyPieChart({
        barColor: colours.red,
        borderColor: colours.red,
        trackColor: '#fbccbf',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-green").easyPieChart({
        barColor: colours.green,
        borderColor: colours.green,
        trackColor: '#b1f8b1',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-blue").easyPieChart({
        barColor: colours.blue,
        borderColor: colours.blue,
        trackColor: '#d2e4fb',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-teal").easyPieChart({
        barColor: colours.teal,
        borderColor: colours.teal,
        trackColor: '#c3e5e5',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
}