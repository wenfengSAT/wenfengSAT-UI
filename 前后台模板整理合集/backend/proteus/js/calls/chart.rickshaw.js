/*  ==========================================================================
    Table of Content for Rickshaw Charts:

    === Function ===
     - bootstrapTab
     - runRickshaw

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    bootstrapTab
    ========================================================================== */
function bootstrapTab(){

    $("ul.nav-tabs a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

}


/*
    runRickshaw
    ========================================================================== */
function runRickshaw(type, subType, element, legend, init){

    var seriesData = [ [], [], [], [], [], [], [], [], [] ];
    var random = new Rickshaw.Fixtures.RandomData(100);

    for (var i = 0; i < 100; i++) {
        random.addData(seriesData);
    }

    switch (type) {
        case 'area':

            var color_1 = $('.rickshaw-area-1').css('color'),
                color_2 = $('.rickshaw-area-2').css('color'),
                color_3 = $('.rickshaw-area-3').css('color');

            break;
        case 'bar':

            var color_1 = $('.rickshaw-bar-1').css('color'),
                color_2 = $('.rickshaw-bar-2').css('color'),
                color_3 = $('.rickshaw-bar-3').css('color');

            break;
        case 'line':

            var color_1 = $('.rickshaw-line-1').css('color'),
                color_2 = $('.rickshaw-line-2').css('color'),
                color_3 = $('.rickshaw-line-3').css('color');

            break;
        case 'scatterplot':

            var color_1 = $('.rickshaw-scatter-1').css('color'),
                color_2 = $('.rickshaw-scatter-2').css('color'),
                color_3 = $('.rickshaw-scatter-3').css('color');

            break;
    }

    var graph = new Rickshaw.Graph( {
        element: document.getElementById(element),
        height: 300,
        renderer: type,

        stroke: true,
        preserve: true,

        offset: 'zero',
        interpolation: 'cardinal',

        series: [
            {
                color: color_1,
                data: seriesData[0],
                name: 'Madrid'
            }, {
                color: color_2,
                data: seriesData[1],
                name: 'Tokyo'
            }, {
                color: color_3,
                data: seriesData[2],
                name: 'New York'
            }
        ]
    } );

    var config = {};

    switch (subType) {
        case 'stack':
            config.offset = 'zero';
            break;

        case 'stream':
            config.offset = 'wiggle';
            break;

        case 'pct':
            config.unstack = false;
            config.offset = 'expand';
            break;

        case 'value':
            config.unstack = true;
            config.offset = 'zero';
            break;
    }


    graph.configure(config);

    graph.render();


    var hoverDetail = new Rickshaw.Graph.HoverDetail( {
        graph: graph,
        xFormatter: function(x) {
            return new Date(x * 1000).toString();
        }
    } );

    var legend = new Rickshaw.Graph.Legend( {
        graph: graph,
        element: document.getElementById(legend)

    } );

    var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
        graph: graph,
        legend: legend
    } );

    var order = new Rickshaw.Graph.Behavior.Series.Order( {
        graph: graph,
        legend: legend
    } );

    var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight( {
        graph: graph,
        legend: legend
    } );

    var ticksTreatment = 'glow';

    var xAxis = new Rickshaw.Graph.Axis.Time( {
        graph: graph,
        ticksTreatment: ticksTreatment,
        timeFixture: new Rickshaw.Fixtures.Time.Local()
    } );

    xAxis.render();

    var yAxis = new Rickshaw.Graph.Axis.Y( {
        graph: graph,
        tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
        ticksTreatment: ticksTreatment
    } );

    yAxis.render();

    return graph;
}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var init = true;
    // === Checkers ===

    // === Setters ===

    // === Executions ===

    // Tabs Initializations
    bootstrapTab();

    // Chart Initializations
    var areaStackGraph        = runRickshaw('area', 'stack',  'rickshawStackArea',  'rickshawStackAreaLegend');
    var areaStreamGraph       = runRickshaw('area', 'stream', 'rickshawStreamArea', 'rickshawStreamAreaLegend');
    var areaPctGraph          = runRickshaw('area', 'pct',    'rickshawPctArea',    'rickshawPctAreaLegend');
    var areaValueGraph        = runRickshaw('area', 'value',  'rickshawValueArea',  'rickshawValueAreaLegend');

    var barStackGraph         = runRickshaw('bar',  'stack',  'rickshawStackBar',  'rickshawStackBarLegend');
    var barStreamGraph        = runRickshaw('bar',  'stream', 'rickshawStreamBar', 'rickshawStreamBarLegend');
    var barPctGraph           = runRickshaw('bar',  'pct',    'rickshawPctBar',    'rickshawPctBarLegend');
    var barValueGraph         = runRickshaw('bar',  'value',  'rickshawValueBar',  'rickshawValueBarLegend');

    var linePctGraph          = runRickshaw('line',  'pct',    'rickshawPctLine',    'rickshawPctLineLegend');
    var lineValueGraph        = runRickshaw('line',  'value',  'rickshawValueLine',  'rickshawValueLineLegend');

    var scatterplotValueGraph = runRickshaw('scatterplot',  'value',  'rickshawValueScatter',  'rickshawValueScatterLegend');


    // Area Chart Setup
    var areaResize = function() {
        var rickshawGraphWidth = $('.rickshaw_graph').width();

        areaStackGraph.configure({ width : rickshawGraphWidth, height: 300 });
        areaStackGraph.render();

        areaStreamGraph.configure({ width : rickshawGraphWidth, height: 300 });
        areaStreamGraph.render();

        areaPctGraph.configure({ width : rickshawGraphWidth, height: 300 });
        areaPctGraph.render();

        areaValueGraph.configure({ width : rickshawGraphWidth, height: 300 });
        areaValueGraph.render();

    }

    window.addEventListener('resize', areaResize);

    $('#areaTabs a').on('click', function(e){ e.preventDefault();  areaResize(); });


    // Bar Chart Setup
    var barResize = function() {
        var rickshawGraphWidth = $('.rickshaw_graph').width();

        barStackGraph.configure({ width : rickshawGraphWidth, height: 300 });
        barStackGraph.render();

        barStreamGraph.configure({ width : rickshawGraphWidth, height: 300 });
        barStreamGraph.render();

        barPctGraph.configure({ width : rickshawGraphWidth, height: 300 });
        barPctGraph.render();

        barValueGraph.configure({ width : rickshawGraphWidth, height: 300 });
        barValueGraph.render();

    }

    window.addEventListener('resize', barResize);

    $('#barTabs a').on('click', function(e){ e.preventDefault();  barResize(); });


    // Line Chart Setup
    var lineResize = function() {
        var rickshawGraphWidth = $('.rickshaw_graph').width();

        linePctGraph.configure({ width : rickshawGraphWidth, height: 300 });
        linePctGraph.render();

        lineValueGraph.configure({ width : rickshawGraphWidth, height: 300 });
        lineValueGraph.render();

    }

    window.addEventListener('resize', lineResize);

    $('#lineTabs a').on('click', function(e){ e.preventDefault();  lineResize(); });


    // Scatterplot Chart Setup
    var scatterplotResize = function() {
        var rickshawGraphWidth = $('.rickshaw_graph').width();

        scatterplotValueGraph.configure({ width : rickshawGraphWidth, height: 300 });
        scatterplotValueGraph.render();

    }

    window.addEventListener('resize', scatterplotResize);

});

