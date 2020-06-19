
"use strict";
$(document).ready(function() {
/*******************************
CHART.JS
*******************************/
    //RANDOM MATH
    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

/*******************************
LINE CHART
*******************************/
    var lineChartData = {
    labels : ["2015","2014","2013","2012","2011","2010","2009"],
    datasets : [
        {
        label: "My First dataset",

        fillColor : "rgba(54,54,54,0.1)",
        strokeColor : "rgba(54,54,54,0.1)",
        pointColor : "rgba(54,54,54,0.1)",
        pointHighlightFill : "rgba(54,54,54,0.9)",
        pointHighlightStroke : "rgba(54,54,54,0.1)",
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },
        {
        label: "My Second dataset",
        fillColor : "rgba(131,191,23,0.4)",
        strokeColor : "rgba(131,191,23,0.1)",
        pointColor : "rgba(131,191,23,0.1)",
        pointHighlightFill : "rgba(131,191,23,0.9)",
        pointHighlightStroke : "rgba(131,191,23,0.1)",
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]
    }

/*******************************
BAR CHART
*******************************/
    var barChartData = {
    labels : ["2015","2014","2013","2012","2011","2010","2009"],
    datasets : [
        {
        fillColor : "rgba(241,93,88,0.8)",
        strokeColor : "rgba(241,93,88,0.2)",
        highlightFill: "rgba(241,93,88,0.9)",
        highlightStroke: "rgba(241,93,88,0.3)",
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },
        {
        fillColor : "rgba(54,54,54,0.2)",
        strokeColor : "rgba(54,54,54,0.1)",
        highlightFill : "rgba(54,54,54,0.3)",
        highlightStroke : "rgba(54,54,54,0.2)",
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]
    }

/*******************************
PIE CHART
*******************************/
    var pieData = [
    {
        value: 250,
        color: "rgba(131,191,23,0.9)",
        highlight: "rgba(131,191,23,1)",
        label: "2015"
    },
    {
        value: 50,
        color: "rgba(54,54,54,0.9)",
        highlight: "rgba(54,54,54,1)",
        label: "2014"
    },
    {
        value: 100,
        color: "rgba(241,93,88,0.9)",
        highlight: "rgba(241,93,88,1)",
        label: "2013"
    },
    {
        value: 40,
        color: "rgba(166,143,88,0.9)",
        highlight: "rgba(166,143,88,1)",
        label: "2012"
    },
    {
        value: 120,
        color: "rgba(220,221,205,0.9)",
        highlight: "rgba(220,221,205,1)",
        label: "2011"
    }

    ];

/*******************************
DOUGHNUT CHART
*******************************/
    var doughnutData = [
    {
        value: 200,
        color: "rgba(241,93,88,0.9)",
        highlight: "rgba(241,93,88,1)",
        label: "2015"
    },
    {
        value: 50,
        color: "rgba(220,221,205,0.9)",
        highlight: "rgba(220,221,205,1)",
        label: "2014"
    },
    {
        value: 100,
        color: "rgba(131,191,23,0.9)",
        highlight: "rgba(131,191,23,1)",
        label: "2013"
    }
    ];

/*******************************
RADAR CHART
*******************************/
    var radarChartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
        label: "My First dataset",
        fillColor: "rgba(220,221,205,0.6)",
        strokeColor: "rgba(220,221,205,0.6)",
        pointColor: "rgba(220,221,205,1)",
        pointStrokeColor: "rgba(220,221,205,1)",
        pointHighlightFill: "rgba(220,221,205,0.5)",
        pointHighlightStroke: "#999",
        data: [65,59,90,81,56,55,40]
        },
        {
        label: "My Second dataset",
        fillColor: "rgba(166,143,88,0.6)",
        strokeColor: "rgba(166,143,88,0.6)",
        pointColor: "rgba(166,143,88,1)",
        pointStrokeColor: "rgba(166,143,88,1)",
        pointHighlightFill: "rgba(166,143,88,0.5)",
        pointHighlightStroke: "#999",
        data: [28,48,40,19,96,27,100]
        }
    ]
    };

/*******************************
POLAR CHART
*******************************/
    var polarData = [
    {
        value: 300,
        color: "rgba(54,54,54,0.9)",
        highlight: "rgba(54,54,54,1)",
        label: "2015"
    },
    {
        value: 50,
        color: "rgba(241,93,88,0.9)",
        highlight: "rgba(241,93,88,1)",
        label: "2014"
    },
    {
        value: 100,
        color: "rgba(131,191,23,0.9)",
        highlight: "rgba(131,191,23,1)",
        label: "2013"
    },
    {
        value: 40,
        color: "rgba(220,221,205,0.9)",
        highlight: "rgba(220,221,205,1)",
        label: "2012"
    },
    {
        value: 120,
        color: "rgba(166,143,88,0.9)",
        highlight: "rgba(166,143,88,1)",
        label: "2011"
    }
    ];

/*******************************
INIT CHARTS
*******************************/
    window.onload = function(){
    //LINE
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true,
        maintainAspectRatio: false
    });
    //BAR
    var ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx).Bar(barChartData, {
        responsive : true,
        maintainAspectRatio: false
    });
    //PIE
    var ctx = document.getElementById("pie-chart").getContext("2d");
    window.myPie = new Chart(ctx).Pie(pieData, {
        responsive : true,
        maintainAspectRatio: false,
        animateScale: true
    });
    //DOUGHNUT
    var ctx = document.getElementById("doughnut-chart").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
        responsive : true,
        maintainAspectRatio: false,
        animateScale: true
    });
    //RADAR
    window.myRadar = new Chart(document.getElementById("radar-chart").getContext("2d")).Radar(radarChartData, {
        responsive: true,
        maintainAspectRatio: false
    });
    //POLAR
    var ctx = document.getElementById("polar-chart").getContext("2d");
    window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
        responsive:true,
        maintainAspectRatio: false
    });
    }
});//END
