
/**
* Theme: Montran Admin Template
* Author: Coderthemes
* Component: Peity Chart
* Usage: $.PeityChart.createLine(<params>);
* 
*/

!function($) {
    "use strict";

    var PeityChart = function() {};

    //create pie
    PeityChart.prototype.createPie = function ($element, $colors) {
        $($element).peity("pie", {
            fill: $colors
        });
        return $element;
    },
    //create line
    PeityChart.prototype.createLine = function ($element, $strokeColor, $fillColor, $width) {
        $($element).peity("line", {
            fill: $strokeColor,
            stroke: $fillColor,
            width: $width
        });
        return $($element);
    },

    //create bar with width
    PeityChart.prototype.createBar = function ($element, $colors, $width) {
        $($element).peity("bar", {
            fill: $colors,
            width: $width
        });
        return $element;
    },

    //create donut
    PeityChart.prototype.createDonut = function ($element, $colors) {
        $($element).peity("donut", {
            fill: $colors
        });
        return $element;
    },

    //init
    PeityChart.prototype.init = function() {
        // creating some example chart
        this.createPie("span.pie", ['#6e8cd7', '#d7d7d7', '#ffffff']);

        //line
        this.createLine(".line", '#6e8cd7', '#169c81');        

        //bar
        this.createBar('.bar', ["#6e8cd7", "#d7d7d7"]);

        //bar
        this.createBar('.bar_dashboard', ["#6e8cd7", "#d7d7d7"], 100);

        //donut
        this.createDonut('.donut', ["#6e8cd7", "#d7d7d7"]);

        //this would use data attributes specified in html
        this.createDonut('.data-attributes span');

        //live graph
        var updatingChart = this.createLine(".updating-chart",'#6e8cd7','#169c81', 64);

        setInterval(function() {
            var random = Math.round(Math.random() * 10)
            var values = updatingChart.text().split(",")
            values.shift()
            values.push(random)

            updatingChart
                .text(values.join(","))
                .change()
        }, 1000);
    },
    //init
    $.PeityChart = new PeityChart, $.PeityChart.Constructor = PeityChart
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.PeityChart.init()
}(window.jQuery);
