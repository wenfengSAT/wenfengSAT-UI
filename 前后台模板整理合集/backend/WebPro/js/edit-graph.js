
		$(function(){
			$('#graph').graphify({
				//options: true,
				start: 'combo',
				obj: {
					id: 'ggg',
					width: '100%',
					height: 375,
					xGrid: false,
					legend: true,
					title: 'Linux vs Mac',
					points: [
						[7, 26, 33, 74, 12, 49, 33, 33, 74, 12, 49, 33],
						[32, 46, 75, 38, 62, 20, 52, 75, 38, 62, 20, 52]
					],
					pointRadius: 3,
					colors: ['#428bca', '#1caf9a'],
					xDist: 100,
					dataNames: ['Linux', 'Mac'],
					xName: 'Day',
					tooltipWidth: 15,
					animations: true,
					pointAnimation: true,
					averagePointRadius: 5,
					design: {
						tooltipColor: '#fff',
						gridColor: '#f3f1f1',
						tooltipBoxColor: '#d9534f',
						averageLineColor: '#d9534f',
						pointColor: '#d9534f',
						lineStrokeColor: 'grey',
					}
				}
			});
			$('#graph2').graphify({
				start: 'area',
				obj: {
					id: 'lol',
					legend: false,
					showPoints: true,
					width: '100%',
					legendX: 450,
					pieSize: 200,
					shadow: true,
					height: 400,
					animations: true,
					x: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
					points: [17, 33, 64, 22, 87, 45, 38, 33, 64, 22, 87, 45, 38, 33, 64, 22, 87, 45, 38],
					xDist: 100,
					scale: 12,
					yDist: 35,
					grid: false,
					xName: 'Year',
					dataNames: ['Amount'],
					design: {
						lineColor: '#d9534f',
						tooltipFontSize: '20px',
						pointColor: '#d9534f',
						barColor: '#428bca',
						areaColor: '#f0ad4e'
					}
				}
			});
			var bar = new GraphBar({
				attachTo: '#graph3',
				special: 'combo',
				height: 725,
				width: '100%',
				yDist: 60,
				xDist: 150,
				showPoints: false,
				xGrid: false,
					legend: true,
					points: [
						[17, 21, 51, 74, 12, 49, 33],
						[32, 15, 75, 20, 45, 90, 52]
					],
					colors: ['red', 'orange'],
					dataNames: ['Hot', 'Warm'],
					xName: 'Day',
					tooltipWidth: 15,
					design: {
						tooltipColor: '#fff',
						gridColor: 'black',
						tooltipBoxColor: 'green',
						averageLineColor: 'blue',
					}
			});
			bar.init();
		});

