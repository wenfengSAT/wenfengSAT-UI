$(function(){
    

    // line chart
    var sin = [], cos = [], sin2 = [];

        for (var i = 0; i < 10; i += 0.3) {
            sin.push({x: i, y: Math.sin(i)})            
            sin2.push({x: i, y: Math.sin(i-1.57)});
            cos.push({x: i, y: Math.cos(i)});            
        }

    var rlp = new Rickshaw.Graph( {	
        element: document.getElementById("charts-lineplot"),
        renderer: 'lineplot',
        min: -1.2,
        max: 1.2,
        padding: { top: 0.1 },
        series: [{data: sin,color: '#33414E',name: "sin"}, 
                 {data: sin2,color: '#3FBAE4',name: "sin2"},
                 {data: cos,color: '#B64645',name: "cos"}]
    });

    var hover = new Rickshaw.Graph.HoverDetail({ graph: rlp });

    rlp.render();

    var rlp_resize = function() {                
        rlp.configure({
                width: $("#charts-lineplot").width(),
                height: $("#charts-lineplot").height()
        });
        rlp.render();
    }

    window.addEventListener('resize', rlp_resize); 
    rlp_resize();
    // eof lineplot


    // Line chart
    var seriesData = [ [], [], [] ];
    var random = new Rickshaw.Fixtures.RandomData(50);

    for (var i = 0; i < 50; i++) {
            random.addData(seriesData);
    }

    var rlc = new Rickshaw.Graph( {
            element: document.getElementById("charts-lines"),
            renderer: 'line',
            min: 50,
            series: [{color: "#33414E",data: seriesData[0],name: 'New York'}, 
                     {color: "#3FBAE4",data: seriesData[1],name: 'London'}, 
                     {color: "#B64645",data: seriesData[2],name: 'Tokyo'}]
    });

    rlc.render();    

    var hoverDetail = new Rickshaw.Graph.HoverDetail({graph: rlc});
    var axes = new Rickshaw.Graph.Axis.Time({graph: rlc});
    axes.render();

        var rlc_resize = function() {                
                    rlc.configure({
                            width: $("#charts-lines").width(),
                            height: $("#charts-lines").height()
                    });
                    rlc.render();
            }

        window.addEventListener('resize', rlc_resize); 
        rlc_resize();
    // eof line chart

    // Bar chart 
        var rbc = new Rickshaw.Graph({
                unstack: true,
                element: document.querySelector("#charts-column"),            
                min: 30,
                renderer: 'bar',
                series: [{
                        color: '#33414E',
                        data: [{ x: 0, y: 50 }, { x: 1, y: 52 }, { x: 2, y: 36 }, { x: 3, y: 42 }, { x: 4, y: 36 }, { x: 5, y: 50 }]
                },{
                        color: '#3FBAE4',
                        data: [{ x: 0, y: 48 }, { x: 1, y: 40 }, { x: 2, y: 45 }, { x: 3, y: 32 }, { x: 4, y: 33 }, { x: 5, y: 45 }]
                },{
                        color: '#B64645',
                        data: [{ x: 0, y: 43 }, { x: 1, y: 35 }, { x: 2, y: 46 }, { x: 3, y: 49 }, { x: 4, y: 34 }, { x: 5, y: 42 }]
                }]
        });

        rbc.render();

        var rbc_resize = function() {                
                    rbc.configure({
                            width: $("#charts-column").width(),
                            height: $("#charts-column").height()
                    });
                    rbc.render();
            }

        var hoverDetail = new Rickshaw.Graph.HoverDetail({graph: rbc});

        window.addEventListener('resize', rbc_resize);        
        rbc_resize();            
    // eof bar chart 
    
    // Area Chart 
        var seriesData = [ [], [], [] ];
        var random = new Rickshaw.Fixtures.RandomData(100);

        for (var i = 0; i < 100; i++) {
                random.addData(seriesData);
        }

        var graph = new Rickshaw.Graph( {
                element: document.getElementById("charts-legend"),
                renderer: 'area',
                width: $("#charts-legend").width(),
                series: [{color: "#33414E",data: seriesData[0],name: 'Total'}, 
                         {color: "#3FBAE4",data: seriesData[1],name: 'New'}, 
                         {color: "#B64645",data: seriesData[2],name: 'Returned'}]
        } );

        graph.render();

        var legend = new Rickshaw.Graph.Legend({graph: graph, element: document.getElementById('legend')});
        var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({graph: graph,legend: legend});
        var order = new Rickshaw.Graph.Behavior.Series.Order({graph: graph,legend: legend});
        var highlight = new Rickshaw.Graph.Behavior.Series.Highlight( {graph: graph,legend: legend} );        
        
        var resize = function() {                
                graph.configure({
                        width: $("#charts-legend").width(),
                        height: $("#charts-legend").height()
                });
                graph.render();
        }

        window.addEventListener('resize', resize); 
        resize();    
    // eof Area Chart 
});