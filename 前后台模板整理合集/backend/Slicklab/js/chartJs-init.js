
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
                    fillColor : "#4EC9B4",
                    strokeColor : "#4EC9B4",
                    data : [43,54,95,71,66,45,70]
                },
                {
                    fillColor : "#868BB8",
                    strokeColor : "#868BB8",
                    data : [38,80,50,29,96,37,100]
                }
            ]

        }

        var myLine = new Chart(document.getElementById("bar-chart-js").getContext("2d")).Bar(barChartData);


        var Linedata = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [
                {
                    fillColor : "#4EC9B4",
                    strokeColor : "#4EC9B4",
                    pointColor : "#4EC9B4",
                    pointStrokeColor : "#fff",
                    data : [150,119,190,281,156,55,140]
                },
                {
                    fillColor : "#81CDEA",
                    strokeColor : "#81CDEA",
                    pointColor : "#81CDEA",
                    pointStrokeColor : "#fff",
                    data : [165,59,90,181,56,155,40]
                },
                {
                    fillColor : "#ffea80",
                    strokeColor : "#ffea80",
                    pointColor : "#ffea80",
                    pointStrokeColor : "#fff",
                    data : [28,148,40,19,96,27,100]
                }

            ]
        }
        var myLineChart = new Chart(document.getElementById("line-chart-js").getContext("2d")).Line(Linedata);


        var pieData = [
            {
                value: 44,
                color:"#4EC9B4"
            },
            {
                value : 70,
                color : "#FF834D"
            },
            {
                value : 100,
                color : "#868BB8"
            }

        ];

        var myPie = new Chart(document.getElementById("pie-chart-js").getContext("2d")).Pie(pieData);



        var donutData = [
            {
                value: 40,
                color:"#4EC9B4"
            },
            {
                value : 60,
                color : "#FF834D"
            },
            {
                value : 130,
                color : "#868BB8"
            },
            {
                value : 70,
                color : "#81CDEA"
            },
            {
                value : 80,
                color : "#ffd200"
            }

        ]
        var myDonut = new Chart(document.getElementById("donut-chart-js").getContext("2d")).Doughnut(donutData);
    }


    size(true);

}());
