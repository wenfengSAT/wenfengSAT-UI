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
    ULTRA_SETTINGS.RickshawChart = function() {



        /*------------------- extensions chart - start----------------------*/

        // set up our data series with 100 random data points

        var seriesData = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(150);

        for (var i = 0; i < 100; i++) {
            random.addData(seriesData);
        }

        // instantiate our graph!

        var graph = new Rickshaw.Graph({
            element: document.getElementById("chart"),
            width: 700,
            height: 500,
            renderer: 'area',
            stroke: true,
            preserve: true,
            series: [{
                color: '#1fb5ac',
                data: seriesData[0],
                name: 'Moscow'
            }, {
                color: '#FDB45C',
                data: seriesData[1],
                name: 'Shanghai'
            }, {
                color: '#9972b5',
                data: seriesData[2],
                name: 'Amsterdam'
            }, {
                color: '#fa8564',
                data: seriesData[3],
                name: 'Paris'
            }, {
                color: '#a9a9a9',
                data: seriesData[4],
                name: 'Tokyo'
            }]
        });

        graph.render();

        var preview = new Rickshaw.Graph.RangeSlider({
            graph: graph,
            element: document.getElementById('preview'),
        });

        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph,
            xFormatter: function(x) {
                return new Date(x * 1000).toString();
            }
        });

        var annotator = new Rickshaw.Graph.Annotate({
            graph: graph,
            element: document.getElementById('timeline')
        });

        var legend = new Rickshaw.Graph.Legend({
            graph: graph,
            element: document.getElementById('legend')

        });

        var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({
            graph: graph,
            legend: legend
        });

        var order = new Rickshaw.Graph.Behavior.Series.Order({
            graph: graph,
            legend: legend
        });

        var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight({
            graph: graph,
            legend: legend
        });

        var smoother = new Rickshaw.Graph.Smoother({
            graph: graph,
            element: document.querySelector('#smoother')
        });

        var ticksTreatment = 'glow';

        var xAxis = new Rickshaw.Graph.Axis.Time({
            graph: graph,
            ticksTreatment: ticksTreatment,
            timeFixture: new Rickshaw.Fixtures.Time.Local()
        });

        xAxis.render();

        var yAxis = new Rickshaw.Graph.Axis.Y({
            graph: graph,
            tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
            ticksTreatment: ticksTreatment
        });

        yAxis.render();


        var controls = new RenderControls({
            element: document.querySelector('form#rickshaw_side_panel'),
            graph: graph
        });

        // add some data every so often

        var messages = [
            "Changed home page welcome message",
            "Minified JS and CSS",
            "Changed button color from blue to green",
            "Refactored SQL query to use indexed columns",
            "Added additional logging for debugging",
            "Fixed typo",
            "Rewrite conditional logic for clarity",
            "Added documentation for new methods"
        ];

        setInterval(function() {
            random.removeData(seriesData);
            random.addData(seriesData);
            graph.update();

        }, 3000);

        function addAnnotation(force) {
            if (messages.length > 0 && (force || Math.random() >= 0.95)) {
                annotator.add(seriesData[2][seriesData[2].length - 1].x, messages.shift());
                annotator.update();
            }
        }

        addAnnotation(true);
        setTimeout(function() {
            setInterval(addAnnotation, 6000)
        }, 6000);

        var previewXAxis = new Rickshaw.Graph.Axis.Time({
            graph: graph,
            timeFixture: new Rickshaw.Fixtures.Time.Local(),
            ticksTreatment: ticksTreatment
        });

        previewXAxis.render();


        /*------------------- extensions chart - end----------------------*/





        /*------------------- series chart - start ----------------------*/


        // instantiate our graph!
        var sergraph = new Rickshaw.Graph({
            element: document.getElementById("serchart"),
            width: $(".serchart_container").width(),
            height: 400,
            interpolation: 'step-after',
            series: new Rickshaw.Series([{
                name: 'Paris',
                color: '#fa8564'
            }, {
                name: 'Chicago',
                color: '#9972b5'
            }, {
                name: 'London',
                color: '#1fb5ac'
            }])
        });

        var serslider = new Rickshaw.Graph.RangeSlider({
            graph: sergraph,
            element: $('#serslider')
        });

        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: sergraph
        });

        var annotator = new Rickshaw.Graph.Annotate({
            graph: sergraph,
            element: document.getElementById('sertimeline')
        });

        var serlegend = new Rickshaw.Graph.Legend({
            graph: sergraph,
            element: document.getElementById('serlegend')
        });

        var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({
            graph: sergraph,
            legend: serlegend
        });

        // a little monkey punching
        serlegend.shelving = shelving;
        sergraph.series.legend = serlegend;

        var order = new Rickshaw.Graph.Behavior.Series.Order({
            graph: sergraph,
            legend: serlegend
        });

        var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight({
            graph: sergraph,
            legend: serlegend
        });

        var axes = new Rickshaw.Graph.Axis.Time({
            graph: sergraph
        });
        axes.render();

        var sersmoother = new Rickshaw.Graph.Smoother({
            graph: sergraph,
            element: $('#sersmoother')
        });

        var seroffset_form = document.getElementById('seroffset_form');

        seroffset_form.addEventListener("change", function(e) {

            var seroffsetMode = e.target.value;

            if (seroffsetMode == 'lines') {
                sergraph.setRenderer('line');
                sergraph.seroffset = 'zero';
            } else {
                sergraph.setRenderer('stack');
                sergraph.seroffset = seroffsetMode;
            }
            sergraph.update();

        }, false);

        // add some data every so often
        var tv = 1000;
        sergraph.series.setTimeInterval(tv);

        setInterval(function() {
            var data = {
                Paris: 3
            };
            var randInt = Math.floor(Math.random() * 100);
            if (randInt > 10) {
                data.Chicago = randInt;
            }
            if (randInt > 15) {
                data.London = randInt;
            }

            sergraph.series.addData(data);
            sergraph.update();
        }, tv);

        /*------------------- series chart - end----------------------*/






        /*------------------- scatter chart - start ----------------------*/

        // set up our data series with 50 random data points

        var seriesData = [
            [],
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(150);

        for (var i = 0; i < 100; i++) {
            random.addData(seriesData);
        }

        // instantiate our graph!

        var scattergraph = new Rickshaw.Graph({
            element: document.getElementById("scatterchart"),
            width: $(".scatterchart_container").width(),
            height: 300,
            renderer: 'scatterplot',
            series: [{
                color: "#9972b5",
                data: seriesData[0],
            }, {
                color: "#fa8564",
                data: seriesData[1],
            }, {
                color: "#1fb5ac",
                data: seriesData[2],
            }]
        });

        scattergraph.renderer.dotSize = 6;

        new Rickshaw.Graph.HoverDetail({
            graph: scattergraph
        });

        scattergraph.render();


        /*------------------- scatter chart - end----------------------*/




        /*------------------- milliseconds chart - start ----------------------*/

        /*milliseconds*/
        // set up our data series with 50 random data points

        var seriesData = [
            [],
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(0.01);

        for (var i = 0; i < 150; i++) {
            random.addData(seriesData);
        }

        // instantiate our graph!

        var milligraph = new Rickshaw.Graph({
            element: document.getElementById("millichart"),
            width: $(".millichart_container").width(),
            height: 400,
            renderer: 'line',
            series: [{
                color: "#1fb5ac",
                data: seriesData[0],
                name: 'New York'
            }, {
                color: "#9972b5",
                data: seriesData[1],
                name: 'London'
            }, {
                color: "#fa8564",
                data: seriesData[2],
                name: 'Tokyo'
            }]
        });

        milligraph.render();

        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: milligraph
        });

        var axes = new Rickshaw.Graph.Axis.Time({
            graph: milligraph,
            timeFixture: new Rickshaw.Fixtures.Time.Local()
        });

        axes.render();


        /*------------------- milliseconds chart - end----------------------*/




    };






    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {});

    $(window).resize(function() {});

    $(window).load(function() {
        ULTRA_SETTINGS.RickshawChart();
    });

});
