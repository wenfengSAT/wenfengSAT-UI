/**
 * @Package: Ultra Admin HTML Theme
 * @Since: Ultra 1.0
 * This file is part of Ultra Admin Theme HTML package.
 */


jQuery(function($) {

    'use strict';

    var ULTRA_SETTINGS = window.ULTRA_SETTINGS || {};

    /*--------------------------------
        Chart Js Chart
     --------------------------------*/
    ULTRA_SETTINGS.chartJS = function() {





        /*Bar Chart*/
        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100)
        };

        var barChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                fillColor: "rgba(31,181,172,1)",
                strokeColor: "rgba(31,181,172,0.8)",
                highlightFill: "rgba(31,181,172,0.8)",
                highlightStroke: "rgba(31,181,172,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }, {
                fillColor: "rgba(153,114,181,1.0)",
                strokeColor: "rgba(153,114,181,0.8)",
                highlightFill: "rgba(153,114,181,0.8)",
                highlightStroke: "rgba(153,114,181,1.0)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }]

        }

        var ctxb = document.getElementById("bar-chartjs").getContext("2d");
        window.myBar = new Chart(ctxb).Bar(barChartData, {
            responsive: true
        });


        /*Line Chart*/

        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100)
        };
        var lineChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                fillColor: "rgba(31,181,172,0.5)",
                strokeColor: "rgba(31,181,172,1)",
                pointColor: "rgba(31,181,172,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(31,181,172,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }, {
                label: "My Second dataset",
                fillColor: "rgba(153,114,181,0.5)",
                strokeColor: "rgba(153,114,181,1.0)",
                pointColor: "rgba(153,114,181,1.0)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(153,114,181,1.0)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }]

        }

        var ctx = document.getElementById("line-chartjs").getContext("2d");
        window.myLine = new Chart(ctx).Line(lineChartData, {
            responsive: true
        });




        /*PIE Chart*/


        var pieData = [{
                value: 300,
                color: "rgba(250,133,100,1.0)",
                highlight: "rgba(250,133,100,0.8)",
                label: "Orange"
            }, {
                value: 150,
                color: "rgba(31,181,172,1)",
                highlight: "rgba(31,181,172,0.8)",
                label: "Primary"
            }, {
                value: 50,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }, {
                value: 120,
                color: "rgba(153,114,181,1.0)",
                highlight: "rgba(153,114,181,0.8)",
                label: "Purple"
            }

        ];

        var ctx = document.getElementById("pie-chartjs").getContext("2d");
        window.myPie = new Chart(ctx).Pie(pieData);




        /* Donut Chart*/

        var doughnutData = [{
                value: 300,
                color: "rgba(250,133,100,1.0)",
                highlight: "rgba(250,133,100,0.8)",
                label: "Orange"
            }, {
                value: 150,
                color: "rgba(31,181,172,1)",
                highlight: "rgba(31,181,172,0.8)",
                label: "Primary"
            }, {
                value: 50,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }, {
                value: 120,
                color: "rgba(153,114,181,1.0)",
                highlight: "rgba(153,114,181,0.8)",
                label: "Purple"
            }

        ];

        var ctxd = document.getElementById("donut-chartjs").getContext("2d");
        window.myDoughnut = new Chart(ctxd).Doughnut(doughnutData, {
            responsive: true
        });





        /*Polar Chart*/

        var polarData = [{
                value: 300,
                color: "rgba(250,133,100,1.0)",
                highlight: "rgba(250,133,100,0.8)",
                label: "Orange"
            }, {
                value: 150,
                color: "rgba(31,181,172,1)",
                highlight: "rgba(31,181,172,0.8)",
                label: "Primary"
            }, {
                value: 50,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }, {
                value: 120,
                color: "rgba(153,114,181,1.0)",
                highlight: "rgba(153,114,181,0.8)",
                label: "Purple"
            }

        ];

        var ctxp = document.getElementById("polar-chartjs").getContext("2d");
        window.myPolarArea = new Chart(ctxp).PolarArea(polarData, {
            responsive: true
        });









        /*Radar Chart*/
        var radarChartData = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                fillColor: "rgba(31,181,172,0.4)",
                strokeColor: "rgba(31,181,172,1)",
                pointColor: "rgba(31,181,172,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(31,181,172,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                label: "My Second dataset",
                fillColor: "rgba(153,114,181,0.4)",
                strokeColor: "rgba(153,114,181,1.0)",
                pointColor: "rgba(153,114,181,1.0)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(153,114,181,1.0)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        };

        window.myRadar = new Chart(document.getElementById("radar-chartjs").getContext("2d")).Radar(radarChartData, {
            responsive: true
        });


    };






    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {});

    $(window).resize(function() {});

    $(window).load(function() {
        ULTRA_SETTINGS.chartJS();
    });

});
