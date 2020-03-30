$(function () {
	var d1 = [[2, 5], [4, 8], [6, 2], [7, 3], [10, 4], [12, 5], [13, 6], [14, 4]];
	var d2 = [[2, 5], [4, 8], [6, 2], [7, 3], [10, 4], [12, 5], [13, 6], [14, 4]];
    	
	var plot = $.plotAnimator (
		$("#animated_3"), 
		[
			{ 
				data: d2, 
				points: { 
					show: true, 
					fill: true, 
					radius: 2,
					fillColor: "#ffffff"
				},
				label: "Bars" 
			}, 
			{ 
				data: d1, 
				animator: {
					steps: 136, 
					duration: 2500, 
					start:0
				}, 
				lines: { 
					show: true, 
					fill: false,
					lineWidth: 2
				},
				label: "Evolution" 
			}
		],
		{
			colors: ["#555555", "#bf2222"]
		}
	);


});



