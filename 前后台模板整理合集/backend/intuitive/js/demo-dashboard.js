"use strict";

var demo_dashboard = {
    init: function(){
        
        /* dashboard chart */        
        var myColors = ["#34495e","#85d6de","#82b440","#F3BC65","#E74E40","#3B5998",
                        "#80CDC2","#A6D969","#D9EF8B","#FFFF99","#F7EC37","#F46D43",
                        "#E08215","#D73026","#A12235","#8C510A","#14514B","#4D9220",
                        "#542688", "#4575B4", "#74ACD1", "#B8E1DE", "#FEE0B6","#FDB863",                                                
                        "#C51B7D","#DE77AE","#EDD3F2"];

        d3.scale.myColors = function() {
            return d3.scale.ordinal().range(myColors);
        };
        
        var test_data = stream_layers(3,128,.3).map(function(data, i) {
            return {
                key: (i == 1) ? 'Sales' : 'Returns',
                nonStackable: (i == 1),
                values: data
            };
        });
        
        nv.addGraph({
            generate: function() {                

                var chart = nv.models.multiBarChart()                    
                    .stacked(true)
                    .color(d3.scale.myColors().range())
                    .margin({top: 0, right: 0, bottom: 20, left: 20});

                var svg = d3.select('#dashboard-chart svg').datum(test_data);
                
                svg.transition().duration(0).call(chart);

                nv.utils.windowResize(chart.update);
                
                return chart;
            }
        });                
        /* ./dashboard chart */                
        
    }
};

$(function(){    
    demo_dashboard.init();
});

