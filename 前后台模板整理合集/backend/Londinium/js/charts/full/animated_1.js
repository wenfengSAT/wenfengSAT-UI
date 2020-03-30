$(function () {
	var d1 = [[0, 4], [2, 2], [4, 4], [6, 2], [8, 4], [10, 2], [15, 4], [20, 2]];
	var d2 = [[0, 3], [20, 3]];

	var plot = $.plotAnimator(
		$("#animated_1"), 
		[
			{ 
				data: d1, 
				animator: {
					steps: 136, 
					duration: 2000, 
					start:0
				}, 
				lines: { 
					show: true, 
					fill: true,
					fillColor: { colors: [ { opacity: 0.2 }, { opacity: 0.2 } ] },
					lineWidth: 2 
				},
				label: "Fill this"
			}, 
			{ 
				data: d2, 
				lines: { 
					show: true, 
					fill: false,
					lineWidth: 2
				}, 
				label: "Standard Values"
			}
		],
		{
			colors: ["#ee7951", "#3bb2d9", "#95c832", "#993eb7", "#3ba3aa"]
		}
	);


});



