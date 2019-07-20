var BlankonChartChartJS = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonChartChartJS.barChartChartJS();
            BlankonChartChartJS.doughnutChartChartJS();
            BlankonChartChartJS.lineChartChartJS();
            BlankonChartChartJS.pieChartChartJS();
            BlankonChartChartJS.polarareaChartChartJS();
            BlankonChartChartJS.radarChartChartJS();
        },

        // =========================================================================
        // CHARTJS CHART / BAR
        // =========================================================================
        barChartChartJS: function () {
            if($('#chartjs-bar-chart').length){
                var barChartData = {
                    labels : ["January","February","March","April","May","June","July"],
                    datasets : [
                        {
                            fillColor : "#E9573F",
                            strokeColor : "#f55b43",
                            data : [65,59,90,81,56,55,40]
                        },
                        {
                            fillColor : "#00B1E1",
                            strokeColor : "#00c3f4",
                            data : [28,48,40,19,96,27,100]
                        }
                    ]

                };

                var myLine = new Chart(document.getElementById("chartjs-bar-chart").getContext("2d")).Bar(barChartData);
            }
        },

        // =========================================================================
        // CHARTJS CHART / DOUGHNUT
        // =========================================================================
        doughnutChartChartJS: function () {
            if($('#chartjs-doughnut-chart').length){
                var doughnutData = [
                    {
                        value: 20,
                        color:"#37BC9B"
                    },
                    {
                        value : 70,
                        color : "#8CC152"
                    },
                    {
                        value : 50,
                        color : "#00B1E1"
                    },
                    {
                        value : 40,
                        color : "#E9573F"
                    },
                    {
                        value : 90,
                        color : "#F6BB42"
                    }

                ];

                var myDoughnut = new Chart(document.getElementById("chartjs-doughnut-chart").getContext("2d")).Doughnut(doughnutData);
            }
        },

        // =========================================================================
        // CHARTJS CHART / LINE
        // =========================================================================
        lineChartChartJS: function () {
            if($('#chartjs-line-chart').length){
                var lineChartData = {
                    labels : ["January","February","March","April","May","June","July"],
                    datasets : [
                        {
                            fillColor : "#F6BB42",
                            pointColor : "rgba(220,220,220,1)",
                            pointStrokeColor : "#fff",
                            data : [30,60,90,120,150,180,210]
                        },
                        {
                            fillColor : "#8D8D6E",
                            pointColor : "rgba(151,187,205,1)",
                            pointStrokeColor : "#fff",
                            data : [20,40,60,80,90,110,130]
                        }
                    ]

                }

                var myLine = new Chart(document.getElementById("chartjs-line-chart").getContext("2d")).Line(lineChartData);
            }
        },

        // =========================================================================
        // CHARTJS CHART / PIE
        // =========================================================================
        pieChartChartJS: function () {
            if($('#chartjs-pie-chart').length){
                var pieData = [
                    {
                        value: 30,
                        color:"#8CC152"
                    },
                    {
                        value : 40,
                        color : "#E9573F"
                    },
                    {
                        value : 50,
                        color : "#F6BB42"
                    }

                ];

                var myPie = new Chart(document.getElementById("chartjs-pie-chart").getContext("2d")).Pie(pieData);
            }
        },

        // =========================================================================
        // CHARTJS CHART / POLAR AREA
        // =========================================================================
        polarareaChartChartJS: function () {
            if($('#chartjs-polararea-chart').length){
                var chartData = [
                    {
                        value : Math.random(),
                        color: "#D97041"
                    },
                    {
                        value : Math.random(),
                        color: "#C7604C"
                    },
                    {
                        value : Math.random(),
                        color: "#21323D"
                    },
                    {
                        value : Math.random(),
                        color: "#9D9B7F"
                    },
                    {
                        value : Math.random(),
                        color: "#7D4F6D"
                    },
                    {
                        value : Math.random(),
                        color: "#584A5E"
                    }
                ];
                var myPolarArea = new Chart(document.getElementById("chartjs-polararea-chart").getContext("2d")).PolarArea(chartData);
            }
        },

        // =========================================================================
        // CHARTJS CHART / RADAR
        // =========================================================================
        radarChartChartJS: function () {
            if($('#chartjs-radar-chart').length){
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

                var myRadar = new Chart(document.getElementById("chartjs-radar-chart").getContext("2d")).Radar(radarChartData,{scaleShowLabels : false, pointLabelFontSize : 10});
            }
        }

    };

}();

// Call main app init
BlankonChartChartJS.init();