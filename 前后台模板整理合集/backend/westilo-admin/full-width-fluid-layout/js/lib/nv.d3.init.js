"use strict";

d3.json("data/linePlusBarData.json",function(error,data) {
    nv.addGraph(function() {
        var chart = nv.models.linePlusBarChart()
                .margin({top: 30, right: 60, bottom: 50, left: 70})
                //We can set x data accessor to use index. Reason? So the bars all appear evenly spaced.
                .x(function(d,i) { return i })
                .y(function(d,i) {return d[1] })
            ;

        chart.xAxis.tickFormat(function(d) {
            var dx = data[0].values[d] && data[0].values[d][0] || 0;
            return d3.time.format('%x')(new Date(dx))
        });

        chart.y1Axis
            .tickFormat(d3.format(',f'));

        chart.y2Axis
            .tickFormat(function(d) { return '$' + d3.format(',f')(d) });

        chart.bars.forceY([0]);

        d3.select('#nvd-barline-chart svg')
            .datum(data)
            .transition()
            .duration(0)
            .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
    });

});

// nvd3 line chart
var chart;
var data;

var randomizeFillOpacity = function() {
    var rand = Math.random(0,1);
    for (var i = 0; i < 100; i++) { // modify sine amplitude
        data[4].values[i].y = Math.sin(i/(5 + rand)) * .4 * rand - .25;
    }
    data[4].fillOpacity = rand;
    chart.update();
};

nv.addGraph(function() {
    chart = nv.models.lineChart()
        .options({
            transitionDuration: 300,
            useInteractiveGuideline: true
        })
    ;

    // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
    chart.xAxis
        .axisLabel("Time (s)")
        .tickFormat(d3.format(',.1f'))
        .staggerLabels(true)
    ;

    chart.yAxis
        .axisLabel('Voltage (v)')
        .tickFormat(function(d) {
            if (d == null) {
                return 'N/A';
            }
            return d3.format(',.2f')(d);
        })
    ;

    data = sinAndCos();

    d3.select('#nvd-line').append('svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});

function sinAndCos() {
    var sin = [],
        sin2 = [],
        cos = [],
        rand = [],
        rand2 = []
        ;

    for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) }); //the nulls are to show how defined works
        sin2.push({x: i, y: Math.sin(i/5) * 0.4 - 0.25});
        cos.push({x: i, y: .5 * Math.cos(i/10)});
        rand.push({x:i, y: Math.random() / 10});
        rand2.push({x: i, y: Math.cos(i/10) + Math.random() / 10 })
    }

    return [
        {
            area: true,
            values: sin,
            key: "Sine Wave",
            color: "#66bb6a",
            strokeWidth: 2,
            classed: 'dashed'
        },
        {
            values: cos,
            key: "Cosine Wave",
            color: "#00acc1"
        },
        {
            values: rand,
            key: "Random Points",
            color: "#00897b"
        },
        {
            values: rand2,
            key: "Random Cosine",
            color: "#e57373",
            strokeWidth: 2
        },
        {
            area: true,
            values: sin2,
            key: "Fill opacity",
            color: "#ab47bc",
            strokeWidth: 1,
            fillOpacity: .1
        }
    ];
}


function HistoricalBar(){

    var chart;
    nv.addGraph(function() {
        chart = nv.models.historicalBarChart();
        chart
            .margin({left: 100, bottom: 100})
            .useInteractiveGuideline(true)
            .duration(250)
        ;

        // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
        chart.xAxis
            .axisLabel("Time (s)")
            .tickFormat(d3.format(',.1f'));

        chart.yAxis
            .axisLabel('Voltage (v)')
            .tickFormat(d3.format(',.2f'));

        chart.showXAxis(true);

        d3.select('#nvd-historical-bar')
            .datum(sinData())
            .transition()
            .call(chart);

        nv.utils.windowResize(chart.update);
        chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
        return chart;
    });

//Simple test data generators
    function sinAndCos() {
        var sin = [],
            cos = [];

        for (var i = 0; i < 100; i++) {
            sin.push({x: i, y: Math.sin(i/10)});
            cos.push({x: i, y: .5 * Math.cos(i/10)});
        }

        return [
            {values: sin, key: "Sine Wave", color: "#ff7f0e"},
            {values: cos, key: "Cosine Wave", color: "#2ca02c"}
        ];
    }

    function sinData() {
        var sin = [];

        for (var i = 0; i < 100; i++) {
            sin.push({x: i, y: Math.sin(i/10) * Math.random() * 100});
        }

        return [{
            values: sin,
            key: "Sine Wave",
            color: "#26a69a"
        }];
    }
}

HistoricalBar();

function StackNvdChart(){
    d3.json('data/stackedAreaData.json', function(data) {
        nv.addGraph(function() {
            var chart = nv.models.stackedAreaChart()
                .margin({right: 100})
                .x(function(d) { return d[0] })   //We can modify the data accessor functions...
                .y(function(d) { return d[1] })   //...in case your data is formatted differently.
                .useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
                .rightAlignYAxis(true)      //Let's move the y-axis to the right side.
//                .transitionDuration(500)
                .showControls(true)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                .clipEdge(true);

            //Format x-axis labels with custom function.
            chart.xAxis
                .tickFormat(function(d) {
                    return d3.time.format('%x')(new Date(d))
                });

            chart.yAxis
                .tickFormat(d3.format(',.2f'));

            d3.select('#nvd-stack-chart svg')
                .datum(data)
                .call(chart);

            nv.utils.windowResize(chart.update);

            return chart;
        });
    })
}

StackNvdChart();

function NvdMultiBar(){
    nv.addGraph(function() {
        var chart = nv.models.multiBarChart()
//                .transitionDuration(350)
                .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
                .rotateLabels(0)      //Angle to rotate x-axis labels.
                .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                .groupSpacing(0.1)    //Distance between each group of bars.
            ;

        chart.xAxis
            .tickFormat(d3.format(',f'));

        chart.yAxis
            .tickFormat(d3.format(',.1f'));

        d3.select('#nvd-multibar-chart svg')
            .datum(exampleData())
            .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
    });

//Generate some nice data.
    function exampleData() {
        return stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
            return {
                key: 'Stream #' + i,
                values: data
            };
        });
    }
}
NvdMultiBar();