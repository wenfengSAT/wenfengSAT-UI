/*------- Radar Chart -------*/
var radarChartData = {
	labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [65,59,90,81,56,55,40]
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [28,48,40,19,96,27,100]
		}
	]
	
}			

var myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData,{scaleShowLabels : true, pointLabelFontSize : 10});

/*------- Easy Pie Chart Init -------*/

$('.language-skill1').easyPieChart({
    barColor: '#78cd51',
    trackColor: 'e9ebec',
    scaleColor: false,
    lineCap: 'butt',
    rotate: -90,
    lineWidth: 10,
    animate: 1000,
	onStep: function(from, to, percent) {
		$(this.el).find('.percent').text(Math.round(percent));
	}
});

$('.language-skill2').easyPieChart({
    barColor: '#67c2ef',
    trackColor: 'e9ebec',
    scaleColor: false,
    lineCap: 'butt',
    rotate: -90,
    lineWidth: 10,
    animate: 1000,
	onStep: function(from, to, percent) {
		$(this.el).find('.percent').text(Math.round(percent));
	}
});

$('.language-skill3').easyPieChart({
    barColor: '#fa603d',
    trackColor: 'e9ebec',
    scaleColor: false,
    lineCap: 'butt',
    rotate: -90,
    lineWidth: 10,
    animate: 1000,
	onStep: function(value) {
        this.$el.find('span').text(~~value);
    }
});