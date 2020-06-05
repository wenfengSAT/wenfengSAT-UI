
/**
* Theme: Ubold Admin Template
* Author: Coderthemes
* Morris Chart
*/

!function($) {
    "use strict";

    var MorrisCharts = function() {};


    //creates line chart
    //creates area chart
    MorrisCharts.prototype.createAreaChart = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 0,
            lineWidth: 0,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true,
            gridLineColor: '#eef0f2',
            lineColors: lineColors
        });
    },
    //creates Donut chart
    MorrisCharts.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true, //defaulted to true
            colors: colors
        });
    },

    MorrisCharts.prototype.init = function() {
         //creating area chart
        var $areaData = [
                { y: '2009', a: 10, b: 20, c:30 },
                { y: '2010', a: 75, b: 65, c:30 },
                { y: '2011', a: 50, b: 40, c:30 },
                { y: '2012', a: 75, b: 65, c:30 },
                { y: '2013', a: 50, b: 40, c:30 },
                { y: '2014', a: 75, b: 65, c:30 },
                { y: '2015', a: 90, b: 60, c:30 }
            ];
        this.createAreaChart('dashboard-chart-1', 0, 0, $areaData, 'y', ['a', 'b','c'], ['Series A', 'Series B','Series C'], ['#5fbeaa', '#7e57c2', '#bbbbbb']);

        //creating donut chart
        var $donutData = [
                {label: "Download Sales", value: 12},
                {label: "In-Store Sales", value: 30},
                {label: "Mail-Order Sales", value: 20}
            ];
        this.createDonutChart('morris-donut-example', $donutData, ['#7e57c2', '#00b19d', '#ebeff2']);

    },
    //init
    $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.MorrisCharts.init();
}(window.jQuery);