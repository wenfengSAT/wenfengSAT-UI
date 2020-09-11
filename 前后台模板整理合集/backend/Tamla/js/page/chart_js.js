$(function() {
    "use strict";
	
	/**
 * Created by westilian on 1/19/14.
 */

(function(){
    var t;
    function size(animate){
        if (animate == undefined){
            animate = false;
        }
        clearTimeout(t);
        t = setTimeout(function(){
            $("canvas").each(function(i,el){
                $(el).attr({
                    "width":$(el).parent().width(),
                    "height":$(el).parent().outerHeight()
                });
            });
            redraw(animate);
            var m = 0;
            $(".chartJS").height("");
            $(".chartJS").each(function(i,el){ m = Math.max(m,$(el).height()); });
            $(".chartJS").height(m);
        }, 30);
    }
    $(window).on('resize', function(){ size(false); });


    function redraw(animation){
        var options = {};
        if (!animation){
            options.animation = false;
        } else {
            options.animation = true;
        }


        var barChartData = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [
                {
                    fillColor : "#72d0eb",
                    strokeColor : "#72d0eb",
                    data : [65,59,90,81,56,55,40]
                },
                {
                    fillColor : "#1781a0",
                    strokeColor : "#1781a0",
                    data : [28,48,40,19,96,27,100]
                }
            ]

        }

        var myLine = new Chart(document.getElementById("bar-chart-js").getContext("2d")).Bar(barChartData);


        var Linedata = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [
                {
                    fillColor : "#06708e",
                    strokeColor : "#06708e",
                    pointColor : "#06708e",
                    pointStrokeColor : "#fff",
                    data : [100,159,190,281,156,155,140]
                },
                {
                    fillColor : "#69cce8",
                    strokeColor : "#69cce8",
                    pointColor : "#69cce8",
                    pointStrokeColor : "#fff",
                    data : [65,59,90,181,56,55,40]
                },
                {
                    fillColor : "#3fa5c2",
                    strokeColor : "#3fa5c2",
                    pointColor : "#3fa5c2",
                    pointStrokeColor : "#fff",
                    data : [28,48,40,19,96,27,100]
                }

            ]
        }
        var myLineChart = new Chart(document.getElementById("line-chart-js").getContext("2d")).Line(Linedata);


        var pieData = [
            {
                value: 30,
                color:"#72d0eb"
            },
            {
                value : 50,
                color : "#3d9db9"
            },
            {
                value : 100,
                color : "#08718f"
            }

        ];

        var myPie = new Chart(document.getElementById("pie-chart-js").getContext("2d")).Pie(pieData);



        var donutData = [
            {
                value: 30,
                color:"#72d0eb"
            },
            {
                value : 50,
                color : "#4caeca"
            },
            {
                value : 100,
                color : "#3696b2"
            },
            {
                value : 40,
                color : "#2786a1"
            },
            {
                value : 120,
                color : "#0d6882"
            }

        ]
        var myDonut = new Chart(document.getElementById("donut-chart-js").getContext("2d")).Doughnut(donutData);
    }




    size(true);

}());

	
	
	
	
}); 