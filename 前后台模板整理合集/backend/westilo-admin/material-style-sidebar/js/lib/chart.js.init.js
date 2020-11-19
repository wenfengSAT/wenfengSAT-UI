    var lineChartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                label: "Expense",
                fillColor : "rgba(0, 196, 178,.3)",
                strokeColor : "#00C4B2",
                pointColor : "#00897b",
                pointStrokeColor : "#00897b",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "#66bb6a",
                data : [200,80,170,50,20,180,250]
            },
            {
                label: "Earning",
                fillColor : "rgba(229, 115, 115,0.2)",
                strokeColor : "#E57373",
                pointColor : "#ef5350",
                pointStrokeColor : "#ef5350",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "#e57373",
                data : [400,200,300,250,100,250,300]
            }
        ]

    }

    var pieData = [
        {
            value: 300,
            color:"#26a69a",
            highlight: "#009688",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 40,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 120,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }

    ];

    var doughnutData = [
        {
            value: 300,
            color:"#26a69a",
            highlight: "#009688",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 40,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 120,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }

    ];

    var barChartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                fillColor : "rgba(128, 222, 234,0.5)",
                strokeColor : "rgba(128, 222, 234,0.8)",
                highlightFill: "rgba(128, 222, 234,0.75)",
                highlightStroke: "rgba(128, 222, 234,1)",
                data : [200,80,170,50,20,180,250]
            },
            {
                fillColor : "rgba(77, 182, 172,0.5)",
                strokeColor : "rgba(77, 182, 172,0.8)",
                highlightFill : "rgba(77, 182, 172,0.75)",
                highlightStroke : "rgba(77, 182, 172,1)",
                data : [400,200,300,250,100,250,300]
            },
            {
                fillColor : "rgba(102, 187, 106,0.5)",
                strokeColor : "rgba(102, 187, 106,0.8)",
                highlightFill : "rgba(102, 187, 106,0.75)",
                highlightStroke : "rgba(102, 187, 106,1)",
                data : [500,400,400,350,200,350,400]
            }
        ]
    };

    window.onload = function(){
        var ctxLine = document.getElementById("line-canvas").getContext("2d");
        window.myLine = new Chart(ctxLine).Line(lineChartData, {
            responsive: true,
            datasetStrokeWidth : 1.5,
            pointDotRadius : 3,
            tooltipCornerRadius: 3,
            bezierCurve: false
        });
        var ctxCurvedLine = document.getElementById("curved-line-canvas").getContext("2d");
        window.myLine = new Chart(ctxCurvedLine).Line(lineChartData, {
            responsive: true,
            datasetStrokeWidth : 1.5,
            pointDotRadius : 3,
            tooltipCornerRadius: 3,
            bezierCurve: true
        });
        document.getElementById('js-line-chart-legend').innerHTML = window.myLine.generateLegend();
        document.getElementById('js-curved-line-legend').innerHTML = window.myLine.generateLegend();
        var ctxPie = document.getElementById("pie-chart").getContext("2d");
        window.myPie = new Chart(ctxPie).Pie(pieData,{
            responsive : true,
            animation: false,
            tooltipCornerRadius: 3,
            // Number - Tooltip label font size in pixels
            tooltipFontSize: 12,
            // Number - Tooltip title font size in pixels
            tooltipTitleFontSize: 12,
            //String - The colour of each segment stroke
            segmentStrokeColor : "rgba(255,255,255,.01)",

            //Number - The width of each segment stroke
            segmentStrokeWidth : 1
        });

        var ctxDonut = document.getElementById("donut-chart-area").getContext("2d");
        window.myDoughnut = new Chart(ctxDonut).Doughnut(doughnutData, {
            responsive : true,
            animation: false,
            tooltipCornerRadius: 3,
            // Number - Tooltip label font size in pixels
            tooltipFontSize: 12,
            // Number - Tooltip title font size in pixels
            tooltipTitleFontSize: 12,
            //String - The colour of each segment stroke
            segmentStrokeColor : "rgba(255,255,255,.01)",

            //Number - The width of each segment stroke
            segmentStrokeWidth : 1,
            //The percentage of the chart that we cut out of the middle.
            percentageInnerCutout : 70
        });

        var ctxBar = document.getElementById("bar-canvas").getContext("2d");
        window.myBar = new Chart(ctxBar).Bar(barChartData, {
            responsive : true,
            tooltipCornerRadius: 3,
            barStrokeWidth : 1
        });
        var ctxStackedBar = document.getElementById("stacked-canvas").getContext("2d");
        window.myBar = new Chart(ctxStackedBar).StackedBar(barChartData, {
            responsive : true,
            tooltipCornerRadius: 3,
            barStrokeWidth : 1
        });
    }


