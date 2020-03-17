$(function(){
    /* nvd3 charts */        
        /* color palette */
        var myColors = ["#34495e","#85d6de","#82b440","#F3BC65","#E74E40","#3B5998",//["#33414E","#8DCA35","#00BFDD","#FF702A","#DA3610",
                        "#80CDC2","#A6D969","#D9EF8B","#FFFF99","#F7EC37","#F46D43",
                        "#E08215","#D73026","#A12235","#8C510A","#14514B","#4D9220",
                        "#542688", "#4575B4", "#74ACD1", "#B8E1DE", "#FEE0B6","#FDB863",                                                
                        "#C51B7D","#DE77AE","#EDD3F2"];
                    
        d3.scale.myColors = function() {
            return d3.scale.ordinal().range(myColors);
        };
        /* ./ color palette */        
        
        /* #nvd3-line */
        d3.json('assets/plugins/nvd3/cumulativeLineData.json', function(data) {
            nv.addGraph(function() {
                var chart = nv.models.cumulativeLineChart().x(function(d) {
                        return d[0];
                }).y(function(d) {
                        return d[1] / 100;
                })//adjusting, 100% is 1.00, not 100 as it is in the data
                .color(d3.scale.myColors().range()).useInteractiveGuideline(true);

                chart.xAxis.tickValues([1078030800000, 1122782400000, 1167541200000, 1251691200000]).tickFormat(function(d) {
                        return d3.time.format('%x')(new Date(d));
                });

                chart.yAxis.tickFormat(d3.format(',.1%'));
                chart.yAxis.axisLabelDistance(40);

                d3.select('#nvd3-line svg').datum(data).call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            });
        });
        /* ./#nvd3-line */
        
        /* nvd3 stacked area chart */
        d3.json('assets/plugins/nvd3/stackedAreaData.json', function(data) {
            nv.addGraph(function() {

                var chart = nv.models.stackedAreaChart()
                .x(function(d) {
                        return d[0];
                })
                .y(function(d) {
                        return d[1];
                }).forceY([0, 8000]).useInteractiveGuideline(true).color(d3.scale.myColors().range());;
                var options = {
                    showControls : false,
                    showLegend : true
                };
                chart.options(options);
                chart.xAxis.tickFormat(function(d) {
                        return d3.time.format('%x')(new Date(d));
                }).showMaxMin(false);

                chart.yAxis.tickFormat(d3.format(',f'));
                d3.select('#nvd3-stacked svg').datum(data).call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            });
        });
        /* ./nvd3 stacked area chart */
        
        /* nvd3 column chart */        
        var test_data = stream_layers(3,128,.1).map(function(data, i) {
            return {
                key: (i == 1) ? 'Non-stackable Stream' + i: 'Stream' + i,
                nonStackable: (i == 1),
                values: data
            };
        });
        nv.addGraph({
            generate: function() {                

                var chart = nv.models.multiBarChart()                    
                    .stacked(true)
                    .color(d3.scale.myColors().range());               

                var svg = d3.select('#nvd3-column svg').datum(test_data);
                
                svg.transition().duration(0).call(chart);

                return chart;
            }
        });        
        /* ./nvd3 column chart */
        
        /* nvd3 donut chart */
        nv.addGraph(function() {
                var chart = nv.models.pieChart().x(function(d) {
                        return d.label;
                }).y(function(d) {
                        return d.value;
                }).showLabels(true)
                .labelThreshold(.05)
                .labelType("percent")
                .donut(true)
                .donutRatio(0.35)
                .color(d3.scale.myColors().range());;

                d3.select("#nvd3-donut svg").datum(exampleData()).transition().duration(350).call(chart);

                return chart;
        });
        /* ./nvd3 donut chart */
        
        /* Pie chart example data. Note how there is only a single array of key-value pairs */
        function exampleData() {
            return [{
                "label": "One",
                "value": 29.765957771107
            }, {
                "label": "Two",
                "value": 0
            }, {
                "label": "Three",
                "value": 32.807804682612
            }, {
                "label": "Four",
                "value": 196.45946739256
            }, {
                "label": "Five",
                "value": 0.19434030906893
            }, {
                "label": "Six",
                "value": 98.079782601442
            }, {
                "label": "Seven",
                "value": 13.925743130903
            }, {
                "label": "Eight",
                "value": 5.1387322875705
            }];
        }
        /* ./end */        
    /* ./nvd3 charts */
    
    
    
    /* rickshaw charts */
        
        /* lines chart */
            var seriesData = [ [], [], [] ];
            var random = new Rickshaw.Fixtures.RandomData(50);

            for(var i = 0; i < 50; i++) {
                random.addData(seriesData);
            }

            var rlc = new Rickshaw.Graph( {
                element: document.getElementById("rickshaw-lines"),
                renderer: 'line',
                min: 50,
                series: [{color: "#34495e",data: seriesData[0],name: 'New York'}, 
                         {color: "#85d6de",data: seriesData[1],name: 'London'}, 
                         {color: "#82b440",data: seriesData[2],name: 'Tokyo'}]
            });

            rlc.render();    

            var hoverDetail = new Rickshaw.Graph.HoverDetail({graph: rlc});
            var axes = new Rickshaw.Graph.Axis.Time({graph: rlc});
            axes.render();

            var rlc_resize = function() {                
                rlc.configure({
                    width: $("#rickshaw-lines").width(),
                    height: $("#rickshaw-lines").height()
                });
                rlc.render();
            }

            window.addEventListener('resize', rlc_resize); 
            rlc_resize();
        /* ./lines chart */
        
        /* column */
        var rbc = new Rickshaw.Graph({
                unstack: true,
                element: document.querySelector("#rickshaw-column"),            
                min: 30,
                renderer: 'bar',
                series: [{
                        color: '#34495e',
                        data: [{ x: 0, y: 50 }, { x: 1, y: 52 }, { x: 2, y: 36 }, { x: 3, y: 42 }, { x: 4, y: 36 }, { x: 5, y: 50 }]
                },{
                        color: '#85d6de',
                        data: [{ x: 0, y: 48 }, { x: 1, y: 40 }, { x: 2, y: 45 }, { x: 3, y: 32 }, { x: 4, y: 33 }, { x: 5, y: 45 }]
                },{
                        color: '#82b440',
                        data: [{ x: 0, y: 43 }, { x: 1, y: 35 }, { x: 2, y: 46 }, { x: 3, y: 49 }, { x: 4, y: 34 }, { x: 5, y: 42 }]
                }]
        });

        rbc.render();

        var rbc_resize = function() {                
                    rbc.configure({
                            width: $("#rickshaw-column").width(),
                            height: $("#rickshaw-column").height()
                    });
                    rbc.render();
            }

        var hoverDetail = new Rickshaw.Graph.HoverDetail({graph: rbc});

        window.addEventListener('resize', rbc_resize);
        /* ./column */
        
        /* legend and area */
        var seriesData = [ [], [], [] ];
        var random = new Rickshaw.Fixtures.RandomData(100);

        for (var i = 0; i < 100; i++) {
                random.addData(seriesData);
        }

        var graph = new Rickshaw.Graph( {
                element: document.getElementById("rickshaw-area"),
                renderer: 'area',
                width: $("#rickshaw-legend").width(),
                series: [{color: "#34495e",data: seriesData[0],name: 'Total'}, 
                         {color: "#E74E40",data: seriesData[1],name: 'New'}, 
                         {color: "#F3BC65",data: seriesData[2],name: 'Returned'}]
        } );

        graph.render();

        var legend = new Rickshaw.Graph.Legend({graph: graph, element: document.getElementById('rickshaw-legend')});
        var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({graph: graph,legend: legend});
        var order = new Rickshaw.Graph.Behavior.Series.Order({graph: graph,legend: legend});
        var highlight = new Rickshaw.Graph.Behavior.Series.Highlight({graph: graph,legend: legend});        
        
        var resize = function() {                
                graph.configure({
                        width: $("#rickshaw-area").width(),
                        height: $("#rickshaw-area").height()
                });
                graph.render();
        }

        window.addEventListener('resize', resize); 
        /* ./legend and area */
        
    /* ./rickshaw charts */
    
    
    setTimeout(function(){
        dev_layout_alpha_content.init(dev_layout_alpha_settings);
    },1000);    
});      