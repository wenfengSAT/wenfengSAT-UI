$(function () {
	var d1 = [];
	var d2 = [[0, 0], [20, 0]];

	for (var i = 0 ; i < 20.1 ; i += 0.1) d1.push([i, Math.sin(i)]);

	var plot = $.plotAnimator (
		$("#animated_2"), 
		[
			{ 
				data: d1, 
				animator: {
					steps: 136, 
					duration: 3000, 
					start:0
				}, 

				lines: { 
					show: true,
					lineWidth: 2, 
					fill: true,
					fillColor: { colors: [ { opacity: 0.2 }, { opacity: 0.2 } ] } 
				}, 
				label: "sin(x)" 
			}, 
			{ 
				data: d2, 
				lines: { 
					show: true, 
					fill: false,
					lineWidth: 1
				} 
			}, 
			{ 
				data: d1, 
				lines: { 
					show: true, 
					lineWidth: 2,
					fill: false 
				} 
			}
		],
		{
			colors: ["#3bb2d9", "#cb3f1f"]
		}
	);



});



