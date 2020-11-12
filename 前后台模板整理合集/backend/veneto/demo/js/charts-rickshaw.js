jQuery(function ($) {
    'use strict';
    function rickshawResize(graph, $el) {
        return function () {
            graph.configure({
                width: $el.parent().width()
            });
            graph.render();
        };
    }

    function rickshawBasic() {
        var graph = new Rickshaw.Graph({
            element: document.querySelector('#rickshaw-basic'),
            height: 250,
            series: [
                {
                    color: 'rgba(28, 175, 154, 0.8)',
                    data: [
                        { x: 0, y: 31 },
                        { x: 1, y: 36 },
                        { x: 2, y: 35 },
                        { x: 3, y: 42 },
                        { x: 4, y: 49 }
                    ]
                },
                {
                    color: '#eff2f4',
                    data: [
                        { x: 0, y: 25 },
                        { x: 1, y: 26 },
                        { x: 2, y: 30 },
                        { x: 3, y: 38 },
                        { x: 4, y: 45 }
                    ]
                }
            ]
        });
        graph.render();

        window.addEventListener('resize', rickshawResize(graph, $('#rickshaw-basic')));
    }

    function rickshawLive() {
        var series = [
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(50);

        for (var i = 0; i < 60; i++) {
            random.addData(series);
        }
        var graph = new Rickshaw.Graph({
            element: document.querySelector('#rickshaw-live'),
            height: 250,
            series: [
                {
                    data: series[0],
                    color: 'rgba(52, 168, 219, 0.6)',
                    name: 'Server No. 1'
                },
                {
                    data: series[1],
                    color: '#eff2f4',
                    name: 'Server No. 2'
                }
            ]
        });
        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph
        });
        hoverDetail.hide();

        setInterval(function () {
            random.removeData(series);
            random.addData(series);
            graph.update();
        }, 1100);
        window.addEventListener('resize', rickshawResize(graph, $('#rickshaw-live')));
    }

    function rickshawLine() {
        var graph = new Rickshaw.Graph({
            element: document.querySelector('#rickshaw-line'),
            renderer: 'line',
            height: 250,
            series: [
                {
                    color: 'rgba(28, 175, 154, 0.8)',
                    data: [
                        { x: 0, y: 12 },
                        { x: 1, y: 6 },
                        { x: 2, y: 20 },
                        { x: 3, y: 29 },
                        { x: 4, y: 18 }
                    ]
                }
            ]
        });
        graph.render();

        window.addEventListener('resize', rickshawResize(graph, $('#rickshaw-line')));
    }

    function rickshawMultiLine() {
        var graph = new Rickshaw.Graph({
            element: document.querySelector('#rickshaw-multi-line'),
            renderer: 'line',
            height: 250,
            series: [
                {
                    color: 'rgba(28, 175, 154, 0.8)',
                    data: [
                        { x: 0, y: 30 },
                        { x: 1, y: 39 },
                        { x: 2, y: 28 },
                        { x: 3, y: 20 },
                        { x: 4, y: 22 }
                    ]
                },
                {
                    color: '#4682b4',
                    data: [
                        { x: 0, y: 4 },
                        { x: 1, y: 26 },
                        { x: 2, y: 15 },
                        { x: 3, y: 32 },
                        { x: 4, y: 39 }
                    ]
                }
            ]
        });
        graph.render();

        window.addEventListener('resize', rickshawResize(graph, $('#rickshaw-multi-line')));
    }

    function rickshawBar() {
        var graph = new Rickshaw.Graph({
            element: document.querySelector('#rickshaw-bar'),
            renderer: 'bar',
            gapSize: 0.1,
            stack: false,
            height: 250,
            series: [
                {
                    color: 'rgba(52, 168, 219, 0.6)',
                    data: [
                        { x: 0, y: 30 },
                        { x: 1, y: 39 },
                        { x: 2, y: 28 },
                        { x: 3, y: 20 },
                        { x: 4, y: 22 }
                    ]
                },
                {
                    color: '#edeff0',
                    data: [
                        { x: 0, y: 4 },
                        { x: 1, y: 26 },
                        { x: 2, y: 15 },
                        { x: 3, y: 32 },
                        { x: 4, y: 39 }
                    ]
                }
            ]
        });
        graph.render();

        window.addEventListener('resize', rickshawResize(graph, $('#rickshaw-bar')));
    }

    function rickshawStackedBar() {
        var graph = new Rickshaw.Graph({
            element: document.querySelector('#rickshaw-stacked-bar'),
            renderer: 'bar',
            height: 250,
            gapSize: 0.1,
            series: [
                {
                    color: 'rgba(52, 168, 219, 0.6)',
                    data: [
                        { x: 0, y: 30 },
                        { x: 1, y: 39 },
                        { x: 2, y: 28 },
                        { x: 3, y: 20 },
                        { x: 4, y: 22 }
                    ]
                },
                {
                    color: '#edeff0',
                    data: [
                        { x: 0, y: 4 },
                        { x: 1, y: 26 },
                        { x: 2, y: 15 },
                        { x: 3, y: 32 },
                        { x: 4, y: 39 }
                    ]
                }
            ]
        });
        graph.render();

        window.addEventListener('resize', rickshawResize(graph, $('#rickshaw-stacked-bar')));
    }

    if (!$('html').hasClass('ie8')) {
        rickshawBasic();
        rickshawLive();
        rickshawLine();
        rickshawMultiLine();
        rickshawBar();
        rickshawStackedBar();
    }
});
