/* ---------- functions used to demonsatration ---------- */

function randNum(){
	return ((Math.floor( Math.random()* (1+40-20) ) ) + 20)* 1200;
}

function randNum2(){
	return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 500;
}

function randNum3(){
	return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 300;
}

function randNum4(){
	return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 100;
}

function randNum5(){
	return ((Math.floor( Math.random()* (1+40-20) ) ) + 1) * 1;
}

$(document).ready(function(){
	
	/* ---------- Placeholder Fix for IE ---------- */
	$('input, textarea').placeholder();

	/* ---------- Auto Height texarea ---------- */
	$('textarea').autosize();   
	
	/*------- Main Calendar -------*/
	
	$('#external-events div.external-event').each(function() {

		// it doesn't need to have a start or end
		var eventObject = {
			title: $.trim($(this).text()) // use the element's text as the event title
		};
		
		// store the Event Object in the DOM element so we can get to it later
		$(this).data('eventObject', eventObject);
		
		// make the event draggable using jQuery UI
		$(this).draggable({
			zIndex: 999,
			revert: true,      // will cause the event to go back to its
			revertDuration: 0  //  original position after the drag
		});
		
	});
	
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	
	$('.calendar-small').fullCalendar({
		header: {
			right: 'title',
			left: 'prev,next,today'
		},
		defaultView: 'month',
		editable: true,
		events: [
			{
				title: 'All Day Event',
				start: new Date(date.getFullYear(), date.getMonth(), date.getDate() -17),
				allDay: true
			},
			{
				title: 'Long Event',
				start: new Date(date.getFullYear(), date.getMonth(), date.getDate() -15, 11,30,0),
				end: new Date(date.getFullYear(), date.getMonth(), date.getDate()-10, 12,30,0)
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(date.getFullYear(), date.getMonth(), date.getDate() -9, 8,0,0),
				end: new Date(date.getFullYear(), date.getMonth(), date.getDate() -9, 10,0,0),
				allDay: false
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(date.getFullYear(), date.getMonth(), date.getDate() -2, 8,0,0),
				end: new Date(date.getFullYear(), date.getMonth(), date.getDate() -2, 10,0,0),
				allDay: false
			},
			{
				title: 'Meeting',
				start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11,30,0),
				end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12,30,0),
				allDay: false
			},
			{
				title: 'Lunch',
				start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14,00,0),
				end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 15,30,0),
				allDay: false
			},
			{
				title: 'Birthday Party',
				start: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 19,30,0),
				end: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 22,30,0),
				allDay: false
			},
			{
				title: 'Click for Google',
				start: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 10, 14,30,0),
				end: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 11, 12,30,0),
				url: 'http://google.com/'
			}
		],
		dayClick: function(date, allDay, jsEvent, view) {
			
			$('.calendar-details > .events').html('');
			
			var weekday=new Array(7);
				weekday[0]="Sunday";
				weekday[1]="Monday";
				weekday[2]="Tuesday";
				weekday[3]="Wednesday";
				weekday[4]="Thursday";
				weekday[5]="Friday";
				weekday[6]="Saturday";
			
			var month=new Array();
				month[0]="January";
				month[1]="February";
				month[2]="March";
				month[3]="April";
				month[4]="May";
				month[5]="June";
				month[6]="July";
				month[7]="August";
				month[8]="September";
				month[9]="October";
				month[10]="November";
				month[11]="December";
				
			var date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
		   	var todaysEvents = $('.calendar-small').fullCalendar('clientEvents', function(event) {
			
				function pad(n){return n<10 ? '0'+n : n}
				
				if (event.start >= date && event.start < date2) {
					
					var title = event.title;
					var start = event.start;
					var end = event.end;
					
					$('.calendar-details > .day').html(weekday[date.getDay()]);
					$('.calendar-details > .date').html(month[date.getMonth()] + ' ' + date.getDate());
					
					if(event.allDay) {
						
						$('.calendar-details > .events').append(
							'<li>'
							+ title 
							+ ' - all day' 
							+ '</li>');
						
					} else {
						
						$('.calendar-details > .events').append(
							'<li>'
							+ title 
							+ ' - ' 
							+ start.getHours() 
							+ ':'  
							+ pad(start.getMinutes())
							+ ' - '
							+ end.getHours() 
							+ ':'  
							+ pad(end.getMinutes())
							+'</li>');
						
					}
				
				} else if (date >= event.start && date <= event.end) {
					
					var title = event.title;
					var start = event.start;
					var end = event.end;
					
					$('.calendar-details > .day').html(weekday[date.getDay()]);
					$('.calendar-details > .date').html(month[date.getMonth()] + ' ' + date.getDate());
					$('.calendar-details > .events').append(
						'<li>'
						+ title 
						+ ' - '
						+ month[start.getMonth()] + ' ' + start.getDate()
						+ ' ' 
						+ start.getHours() 
						+ ':'  
						+ pad(start.getMinutes())
						+ ' - '
						+ month[end.getMonth()] + ' ' + end.getDate()
						+ ' '
						+ end.getHours() 
						+ ':'  
						+ pad(end.getMinutes())
						+'</li>');	
																				
				} else {
					
					$('.calendar-details > .day').html(weekday[date.getDay()]);
					$('.calendar-details > .date').html(month[date.getMonth()] + ' ' + date.getDate());
															
				}	
			
		   	});
		
			//count li elements
			
			if ( $('.calendar-details ul li').length == 0 ) {
				$('.calendar-details > .events').html('<li>no events :)</li>');
			}

		}
	});
		
	/* ---------- Vertical Chart ---------- */
	if($('.verticalChart')) {
		
		$('.verticalChart > .singleBar').each(function(){
			
			var percent = $(this).find('.value span').html();
			
			$(this).find('.value').animate({height:percent}, 2000, function() {
			    
				$(this).find('span').fadeIn();
			 
			});
			
		});
		
	}
	
	/* ---------- Main Chart ---------- */
	if($('.main-chart')) {
		
		$('.main-chart > .bar').each(function(){
			
			var percent = $(this).find('.value').html();
			
			$(this).find('.value').html('');
			
			$(this).find('.value').animate({height:percent}, 2000);
			
		});
		
	}
	
	if($(".multi-stat-box-chart").length){
		
		$('.multi-stat-box-chart').each(function(){
			
			var data2 = [[1111, 5+randNum5()], [1112, 10+randNum5()], [1113, 15+randNum5()], [1114, 20+randNum5()], [1115, 25+randNum5()],[1116, 30+randNum5()], [1117, 25+randNum5()]];
			
			var data = [[gd(2013, 1, 7), 5+randNum5()], [gd(2013, 1, 8), 10+randNum5()], [gd(2013, 1, 9), 15+randNum5()], [gd(2013, 1, 10), 20+randNum5()],[gd(2013, 1, 11), 25+randNum5()],[gd(2013, 1, 12), 30+randNum5()],[gd(2013, 1, 13), 25+randNum5()]];
		
			var chartColor = $(this).parent().parent().css("color");
		
			var dayOfWeek = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
		
		function gd(year, month, day) {
		     return new Date(year, month - 1, day).getTime();
		}
		
		var plot = $.plot($(".multi-stat-box-chart"),
			   [ { data: data } ], {
				   series: {
					   lines: { show: true,
								lineWidth: 3, 
								fill: false
							 },
					   points: { show: true, 
								 lineWidth: 3,
								 fill: true,
								 fillColor: '#fff' 
							 },	
					   shadowSize: 0
				   },
				   grid: { hoverable: true, 
						   clickable: true, 
						   tickColor: "#fff",
						   borderColor: false
				   },
				   colors: ["#c7cbd5"],
				   xaxis: {
						mode: "time",       
							tickFormatter: function (val, axis) {           
						        return dayOfWeek[new Date(val).getDay()];
						    },
						color: "#c7cbd5",
						autoscaleMargin: 0.000000000000000001
				   },
				   yaxis: {
						ticks:4, 
						tickDecimals: 0,
						color: "#fff",
				   },
				 });

		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#dfeffc',
				opacity: 0.80
			}).appendTo("body").fadeIn(200);
		}

		var previousPoint = null;
		$(".multi-stat-box-chart").bind("plothover", function (event, pos, item) {
			$("#x").text(pos.x.toFixed(2));
			$("#y").text(pos.y.toFixed(2));

				if (item) {
					if (previousPoint != item.dataIndex) {
						previousPoint = item.dataIndex;

						$("#tooltip").remove();
						var x = item.datapoint[0].toFixed(2),
							y = item.datapoint[1].toFixed(2);

						showTooltip(item.pageX, item.pageY,
									item.series.label + " of " + x + " = " + y);
					}
				}
				else {
					$("#tooltip").remove();
					previousPoint = null;
				}
		});
		
	});
	
	}
	
	/* ---------- Chart with points ---------- */
	if($('.chart-type1').length) {
		
		$('.chart-type1').each(function(){
			
			var data1 = [[0, 5], [5, 6], [11, 9], [17, 8], [21, 6], [27, 8],[31,4]];
			var data2 = [[0, 1], [1, 2], [2, 3], [3, 4],[4, 5], [5, 4], [6, 3], [7, 3],[8, 4], [9, 5], [10, 5], [11, 6],[12, 6], [13, 5], [14, 5], [15, 4],[16, 6], [17, 5], [18, 4], [19, 3],[20, 2], [21, 1], [22, 2], [23, 2],[24, 3], [25, 4], [26, 5], [27, 6],[28, 5], [29, 4], [30, 3], [31, 2]];
			
			
			var chartColor = $(this).parent().parent().css("color");
			
			
			var plot = $.plot($(".chart-type1"),

				[ { data: data1, 
					label: "Visits", 
					lines: { 
						show: true, 
						fill: true,
						fillColor: rgbToRgba(chartColor,0.25),
						lineWidth: 3 
					},
					points: { 
						show: true, 
						lineWidth: 3,
						fill: true 
					},
					shadowSize: 0	
				  }, {
					data: data2,
					bars: { 
						show: true,
						fill: false, 
						barWidth: 0.1, 
						align: "center",
						lineWidth: 8
					}
				  }
				], {

					grid: { 
						hoverable: true, 
						clickable: true, 
						tickColor: "#eee",
						borderWidth: 0
					},
					legend: {
						show: false
					},	
					colors: [chartColor, rgbToRgba(chartColor,0.25)],
					xaxis: {ticks:5, tickDecimals: 0 },
					yaxis: {ticks:5, tickDecimals: 0 },
				}
			);
			
			function showTooltip(x, y, contents) {
				$('<div id="tooltip">' + contents + '</div>').css( {
					position: 'absolute',
					display: 'none',
					top: y + 5,
					left: x + 5,
					border: '1px solid #fdd',
					padding: '2px',
					'background-color': '#dfeffc',
					opacity: 0.80
				}).appendTo("body").fadeIn(200);
			}
			
			var previousPoint = null;
			$(this).bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});		
			
		});
	
	}
	
	if($(".chart-type2").length){
		
		$('.chart-type2').each(function(){
			
		var likes = [[1, 5+randNum()], [2, 10+randNum()], [3, 15+randNum()], [4, 20+randNum()],[5, 25+randNum()],[6, 30+randNum()],[7, 35+randNum()],[8, 40+randNum()],[9, 45+randNum()],[10, 50+randNum()],[11, 55+randNum()],[12, 60+randNum()]];
		
		var chartColor = $(this).parent().parent().css("color");
		
		var plot = $.plot($(".chart-type2"),
			   [ { data: likes} ], {
				   series: {
					   lines: { 
							show: true,
							lineWidth: 3, 
							fill: false
					   },
					   points: { 
							show: true, 
							lineWidth: 3,
							fill: true,
							fillColor: chartColor 
					   },	
					   shadowSize: 0
				   },
				   grid: { hoverable: true, 
						   clickable: true, 
						   tickColor: "rgba(255,255,255,.15)",
						   borderColor: "rgba(255,255,255,0)"
						 },
				   colors: ["#fff"],
				   xaxis: {
						font: {
						    color: "#fff"
						},
						ticks:6, 
						tickDecimals: 0, 
						tickColor: chartColor,
				   },
				   yaxis: {
						font: {
						    color: "#fff"
						},
						ticks:4, 
						tickDecimals: 0,
						autoscaleMargin: 0.000001
				   },
				 });

		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#dfeffc',
				opacity: 0.80
			}).appendTo("body").fadeIn(200);
		}

		var previousPoint = null;
		$(".chart-type2").bind("plothover", function (event, pos, item) {
			$("#x").text(pos.x.toFixed(2));
			$("#y").text(pos.y.toFixed(2));

				if (item) {
					if (previousPoint != item.dataIndex) {
						previousPoint = item.dataIndex;

						$("#tooltip").remove();
						var x = item.datapoint[0].toFixed(2),
							y = item.datapoint[1].toFixed(2);

						showTooltip(item.pageX, item.pageY,
									item.series.label + " of " + x + " = " + y);
					}
				}
				else {
					$("#tooltip").remove();
					previousPoint = null;
				}
		});
		
	});
	
	}
	
	/* ---------- Chart with points ---------- */
	if($("#stats-chart2").length)
	{	
		var tickets = [[1, 5+randNum3()], [2, 10+randNum3()], [3, 15+randNum3()], [4, 20+randNum3()],[5, 25+randNum3()],[6, 30+randNum3()],[7, 35+randNum3()],[8, 40+randNum3()],[9, 45+randNum3()],[10, 50+randNum3()],[11, 55+randNum3()],[12, 60+randNum3()],[13, 65+randNum3()],[14, 70+randNum3()],[15, 75+randNum3()],[16, 80+randNum3()],[17, 85+randNum3()],[18, 90+randNum3()],[19, 85+randNum3()],[20, 80+randNum3()],[21, 75+randNum3()],[22, 80+randNum3()],[23, 75+randNum3()],[24, 70+randNum3()],[25, 65+randNum3()],[26, 75+randNum3()],[27,80+randNum3()],[28, 85+randNum3()],[29, 90+randNum3()], [30, 95+randNum3()]];
		var solved = [[1, 5+randNum3()], [2, 10+randNum3()], [3, 15+randNum3()], [4, 20+randNum3()],[5, 25+randNum3()],[6, 30+randNum3()],[7, 35+randNum3()],[8, 40+randNum3()],[9, 45+randNum3()],[10, 50+randNum3()],[11, 55+randNum3()],[12, 60+randNum3()],[13, 65+randNum3()],[14, 70+randNum3()],[15, 75+randNum3()],[16, 80+randNum3()],[17, 85+randNum3()],[18, 90+randNum3()],[19, 85+randNum3()],[20, 80+randNum3()],[21, 75+randNum3()],[22, 80+randNum3()],[23, 75+randNum3()],[24, 70+randNum3()],[25, 65+randNum3()],[26, 75+randNum3()],[27,80+randNum3()],[28, 85+randNum3()],[29, 90+randNum3()], [30, 95+randNum3()]];

		var plot = $.plot($("#stats-chart2"),
			   [ { data: tickets, label: "Tickets" }, 
				 { data: solved, label: "Solved Tickets"} ], {
				   series: {
					   lines: { show: true,
								lineWidth: 1,
								fill: true,
								fillColor: { colors: [ { opacity: 0.1 }, { opacity: 0.1 } ] } 
							 },
					   points: { show: false, 
								 lineWidth: 1 
							 },
					   shadowSize: 0
				   },
				   grid: { hoverable: true, 
						   clickable: true, 
						   borderWidth: 0,
						 },
				 legend: {
						    show: false
						},	
				   colors: ["#bdea74", "#2FABE9"],
					xaxis: {ticks:10, tickDecimals: 0, tickColor: "#fff"},
					yaxis: {ticks:5, tickDecimals: 0, tickColor: "#c7cbd5"},
				 });

		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#dfeffc',
				opacity: 0.80
			}).appendTo("body").fadeIn(200);
		}

		var previousPoint = null;
		$("#stats-chart2").bind("plothover", function (event, pos, item) {
			$("#x").text(pos.x.toFixed(2));
			$("#y").text(pos.y.toFixed(2));

				if (item) {
					if (previousPoint != item.dataIndex) {
						previousPoint = item.dataIndex;

						$("#tooltip").remove();
						var x = item.datapoint[0].toFixed(2),
							y = item.datapoint[1].toFixed(2);

						showTooltip(item.pageX, item.pageY,
									item.series.label + " of " + x + " = " + y);
					}
				}
				else {
					$("#tooltip").remove();
					previousPoint = null;
				}
		});
	
	}
	
});