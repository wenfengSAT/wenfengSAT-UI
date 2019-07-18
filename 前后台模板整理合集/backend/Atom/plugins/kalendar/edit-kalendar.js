$(document).ready(function() {
	$('.kalendar').kalendar({ 
		events: [
			{
				title:"Colored events",
				url: "http://www.google.se",
				start: {
					date: 20140115,
					time: "12.00"
				},
				end: {
					date: "20140116",
					time: "14.00"
				},
				location: "London",
				color: "yellow"

			},
			{
				title:"Colored events",
				url: "http://www.google.se",
				start: {
					date: 20140115,
					time: "12.00"
				},
				end: {
					date: "20140116",
					time: "14.00"
				},
				location: "London",
				color: "blue"

			},
			{
				title:"Colored events",
				url: "http://www.google.se",
				start: {
					date: 20140115,
					time: "12.00"
				},
				end: {
					date: "20140116",
					time: "14.00"
				},
				location: "London"

			},
			{
				title:"Way Out West",
				start: {
					date: 20131230,
					time: "12.00"
				},
				end: {
					date: "20140106",
					time: "14.00"
				},
				location: "Gothenburg",
				color: "yellow"

			}
		],
		color: "green",
		firstDayOfWeek: "Sunday",
		eventcolors: {
			yellow: {
				background: "#FC0",
				text: "#000",
				link: "#000"
			},
			blue: {
				background: "#6180FC",
				text: "#FFF",
				link: "#FFF"
			}
		}
	});

});