/* file:           charts.js
 * version:        1.3
 * last changed:   23.03.2014
 * description:    This file can be removed before you use template in production. 
 *                 It contains with elements used only for charts demo preivew
*/

$(document).ready(function(){
    
    gCharts = {        
        init: function(){

            if( $("#charts-lineplot").length > 0 ){

            // Rickshas charts

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
                    series: [{data: sin,color: '#2f9fe0',name: "sin"}, 
                             {data: sin2,color: '#95B75D',name: "sin2"},
                             {data: cos,color: '#D9534F',name: "cos"}]
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
                        series: [{color: "#2f9fe0",data: seriesData[0],name: 'New York'}, 
                                 {color: "#95B75D",data: seriesData[1],name: 'London'}, 
                                 {color: "#D9534F",data: seriesData[2],name: 'Tokyo'}]
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
                                    color: '#2f9fe0',
                                    data: [{ x: 0, y: 50 }, { x: 1, y: 52 }, { x: 2, y: 36 }, { x: 3, y: 42 }, { x: 4, y: 36 }, { x: 5, y: 50 }]
                            },{
                                    color: '#95B75D',
                                    data: [{ x: 0, y: 48 }, { x: 1, y: 40 }, { x: 2, y: 45 }, { x: 3, y: 32 }, { x: 4, y: 33 }, { x: 5, y: 45 }]
                            },{
                                    color: '#D9534F',
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
                    }
                // eof bar chart

                // eof Rickshas

            if($("#chart-flot-line").length > 0){
            //jFlot

            function labelFormatter(label, series) {
                return "<div style='text-shadow: 1px 2px 1px rgba(0,0,0,0.2); font-size: 11px; text-align:center; padding:2px; color: #FFF; line-height: 13px;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
            }

            var sin = [], cos = [], sin2 = [];

                for (var i = 0; i < 10; i += 0.3) {
                    sin.push([i, Math.sin(i)]);            
                    sin2.push([i, Math.sin(i-1.57)]);
                    cos.push([i, Math.cos(i)]);            
                }        
                $.plot($("#chart-flot-line"), [{ data: sin, label: "sin(x)"}, { data: cos, label: "cos(x)"}, { data: sin2, label: "sin(y)"}],{ 
                                                series: {lines: { show: true }, points: { show: true }},
                                                grid: { hoverable: true, clickable: true },
                                                yaxis: { min: -1.1, max: 1.1 } });

            }
            if($("#chart-flot-bar").length > 0){
                var data1 = [ [1, 25], [2, 28], [3, 22], [4, 18], [5, 30], [6, 18] ];
                var data2 = [ [1, 15], [2, 22], [3, 16], [4, 12], [5, 25], [6, 7] ];
                var data3 = [ [1, 10], [2, 16], [3, 10], [4, 6], [5, 18], [6, 3] ];        

                $.plot($("#chart-flot-bar"), [ { data: data1, label: "Data 1" }, { data: data2, label: "Data 2" }, { data: data3, label: "Data 3" }], {                                   
                                                series: { stack: 0, bars: { show: true, barWidth: 0.8, align: "center"}},                                
                                                grid: { hoverable: true, clickable: true }}); 


                var data = [];            
                    data[0] = { label: "Data 1", data: 40 };
                    data[1] = { label: "Data 2", data: 30 };
                    data[2] = { label: "Data 3", data: 30 };

                $.plot("#chart-flot-pie", data, {
                    series: {pie: {radius: 1, show: true, 
                                   label: {show: true, radius: 2/3, formatter: labelFormatter, threshold: 0.1} }
                            },
                    legend: {show: false}
                });       

                $.plot($("#chart-flot-bar_2"), [ { data: data1, label: "Data 1" }, { data: data2, label: "Data 2" }, { data: data3, label: "Data 3" }], {                                   
                                              series: { stack: 0, 
                                                  lines: {show: true,fill: true},
                                                  bars: { show: false }},                                
                                              grid: { hoverable: true, clickable: true }});  



            //EOF jFlot

            function showTooltip(x, y, contents) {
                $('<div class="ftooltip">' + contents + '</div>').css({
                    position: 'absolute',
                    'z-index': '10',
                    display: 'none',
                    top: y - 20,
                    left: x,            
                    padding: '3px',
                    'background-color': 'rgba(0,0,0,0.5)',
                    'font-size': '11px',
                    'border-radius': '3px',
                    color: '#FFF'            
                }).appendTo("body").fadeIn(200);
            }

            $("#main-chart").bind("plothover", function (event, pos, item) {

                $("#x").text(pos.x.toFixed(2));
                $("#y").text(pos.y.toFixed(2));

                if (item) {
                    if (previousPoint != item.dataIndex) {
                        previousPoint = item.dataIndex;

                        $(".ftooltip").remove();
                        var x = item.datapoint[0].toFixed(2),
                            y = item.datapoint[1].toFixed(2);

                        showTooltip(item.pageX, item.pageY,
                                    item.series.label + ": " + y);
                    }
                }else {
                    $(".ftooltip").remove();
                    previousPoint = null;            
                }

            });
            }

            if($("#dashboard-chart").length > 0){

                var seriesData = [ [], [], [] ];
                var random = new Rickshaw.Fixtures.RandomData(100);

                for (var i = 0; i < 100; i++) {
                        random.addData(seriesData);
                }

                var rdc = new Rickshaw.Graph( {
                        element: document.getElementById("dashboard-chart"),
                        renderer: 'area',
                        width: $("#dashboard-chart").width(),
                        height: 250,
                        series: [{color: "#1D2939",data: seriesData[0],name: 'Total'}, 
                                 {color: "#95B75D",data: seriesData[1],name: 'New'}, 
                                 {color: "#F3C022",data: seriesData[2],name: 'Returned'}]
                } );

                rdc.render();

                var legend = new Rickshaw.Graph.Legend({graph: rdc, element: document.getElementById('dashboard-legend')});
                var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({graph: rdc,legend: legend});
                var order = new Rickshaw.Graph.Behavior.Series.Order({graph: rdc,legend: legend});
                var highlight = new Rickshaw.Graph.Behavior.Series.Highlight( {graph: rdc,legend: legend} );        

                var rdc_resize = function() {                
                        rdc.configure({
                                width: $("#dashboard-chart").width(),
                                height: $("#dashboard-chart").height()
                        });
                        rdc.render();
                }

                var hoverDetail = new Rickshaw.Graph.HoverDetail({graph: rdc});

                window.addEventListener('resize', rdc_resize);        

                rdc_resize();

            }

            if($("#charts-legend").length > 0){

                var seriesData = [ [], [], [] ];
                var random = new Rickshaw.Fixtures.RandomData(100);

                for (var i = 0; i < 100; i++) {
                        random.addData(seriesData);
                }

                var rcl = new Rickshaw.Graph( {
                        element: document.getElementById("charts-legend"),
                        renderer: 'area',
                        width: $("#charts-legend").width(),
                        series: [{color: "#2f9fe0",data: seriesData[0],name: 'Total'}, 
                                 {color: "#95B75D",data: seriesData[1],name: 'New'}, 
                                 {color: "#D9534F",data: seriesData[2],name: 'Returned'}]
                } );

                rcl.render();

                var legend = new Rickshaw.Graph.Legend({graph: rcl, element: document.getElementById('legend')});
                var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({graph: rcl,legend: legend});
                var order = new Rickshaw.Graph.Behavior.Series.Order({graph: rcl,legend: legend});
                var highlight = new Rickshaw.Graph.Behavior.Series.Highlight( {graph: rcl,legend: legend} );        

                var rcl_resize = function() {                
                        rcl.configure({
                                width: $("#charts-legend").width(),
                                height: $("#charts-legend").height()
                        });
                        rcl.render();
                }

                var hoverDetail = new Rickshaw.Graph.HoverDetail({graph: rcl});

                window.addEventListener('resize', rcl_resize); 
                rcl_resize();

            }            
            
            // List of charts to update on window resize
            $.updateCharts = function(){

                if($("#charts-lineplot").length > 0){
                    rlp_resize();
                    rlc_resize();
                    rbc_resize();
                }
                if($("#dashboard-chart").length > 0) rdc_resize();
                if($("#charts-legend").length > 0) rcl_resize();
            }
            
        }
    }
    gCharts.init();
        
});

function gChart(){
    gCharts.init();
}
