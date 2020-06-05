$( document ).ready(function() {
    var graph1 = new Rickshaw.Graph( {
        element: document.querySelector("#rickshaw1"),
        series: [{
            color: '#22BAA0',
            data: [ 
                { x: 0, y: 40 }, 
                { x: 1, y: 49 }, 
                { x: 2, y: 38 }, 
                { x: 3, y: 30 }, 
                { x: 4, y: 32 } ]
        }]
    });
 
    graph1.render();
    
    var graph2 = new Rickshaw.Graph( {
        element: document.querySelector("#rickshaw2"),
        renderer: 'area',
        stroke: true,
        series: [ {
                data: [ 
                    { x: 0, y: 40 }, 
                    { x: 1, y: 49 }, 
                    { x: 2, y: 38 }, 
                    { x: 3, y: 30 }, 
                    { x: 4, y: 32 } 
                ],
                color: '#22BAA0'
        }, {    
                data: [
                    { x: 0, y: 40 },
                    { x: 1, y: 49 },
                    { x: 2, y: 38 }, 
                    { x: 3, y: 30 }, 
                    { x: 4, y: 32 } 
                ],
                color: '#E9E9E9'
        }]  
    });
 
    graph2.render();
    
    var graph3 = new Rickshaw.Graph({
        element: document.querySelector("#rickshaw3"),
        renderer: 'line',
        series: [{
            data: [
                { x: 0, y: 40 }, 
                { x: 1, y: 49 }, 
                { x: 2, y: 38 },
                { x: 3, y: 30 }, 
                { x: 4, y: 32 } 
            ],
            color: '#22BAA0'
        }]
    });
 
    graph3.render();
    
    var graph4 = new Rickshaw.Graph({
        element: document.querySelector("#rickshaw4"),
        renderer: 'line',
        series: [{
            data: [
                { x: 0, y: 40 },
                { x: 1, y: 49 },
                { x: 2, y: 38 },
                { x: 3, y: 30 }, 
                { x: 4, y: 32 } 
            ],
            color: '#22BAA0'
        }, {
            data: [ 
                { x: 0, y: 20 },
                { x: 1, y: 24 },
                { x: 2, y: 19 },
                { x: 3, y: 15 }, 
                { x: 4, y: 16 } 
            ],
            color: '#E9E9E9'
        }]
    });
 
    graph4.render();
    
    var graph5 = new Rickshaw.Graph({
        element: document.querySelector("#rickshaw5"),
        renderer: 'bar',
        series: [{
            data: [ 
                { x: 0, y: 40 }, 
                { x: 1, y: 49 },
                { x: 2, y: 38 },
                { x: 3, y: 30 },
                { x: 4, y: 32 } 
            ],
            color: '#22BAA0'
        }]
    });
 
    graph5.render();
    
    var graph6 = new Rickshaw.Graph( {
        element: document.querySelector("#rickshaw6"),
        renderer: 'bar',
        series: [ 
            {
                data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
                color: '#22BAA0'
            }, {
                data: [ { x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 } ],
                color: '#E9E9E9'
            } ]
    });
    
    graph6.render();
    
    var graph7 = new Rickshaw.Graph( {
        element: document.querySelector("#rickshaw7"),
        renderer: 'bar',
        stack: false,
        series: [{
            data: [ 
                { x: 0, y: 40 }, 
                { x: 1, y: 49 }, 
                { x: 2, y: 38 }, 
                { x: 3, y: 30 }, 
                { x: 4, y: 32 } 
            ],
            color: '#22BAA0'
        }, {
            data: [ 
                { x: 0, y: 20 }, 
                { x: 1, y: 24 },
                { x: 2, y: 19 },
                { x: 3, y: 15 }, 
                { x: 4, y: 16 }
            ],
            color: '#E9E9E9'
        }]
    });
 
    graph7.render();
    
    var graph8 = new Rickshaw.Graph( {
        element: document.querySelector("#rickshaw8"),
        renderer: 'scatterplot',
        stroke: true,
        max: 50,
        series: [{
            data: [
                { x: 0, y: 22 },
                { x: 1, y: 26 }, 
                { x: 2, y: 30 }, 
                { x: 3, y: 28 }, 
                { x: 4, y: 31 }, 
                { x: 5, y: 35 },
                { x: 6, y: 38 },
                { x: 7, y: 42 }, 
                { x: 8, y: 34 }, 
                { x: 9, y: 27 },
                { x: 10, y: 26 } 
            ],
            color: '#22BAA0'
        }]
    });
 
    graph8.render();
    
    
    var seriesData = [ [], [], [], [], [], [], [], [], [] ];
    var random = new Rickshaw.Fixtures.RandomData(150);

    for (var i = 0; i < 150; i++) {
        random.addData(seriesData);
    }

    var graph9 = new Rickshaw.Graph( {
        element: document.querySelector("#rickshaw9"),
        renderer: 'area',
        stroke: true,
        preserve: true,
        series: [
            {
                color: '#22BAA0',
                data: seriesData[0],
                name: 'Moscow'
            }, {
                color: '#E9E9E9',
                data: seriesData[1],
                name: 'Shanghai'
            }
        ]
    });
 
    graph9.render();
    
    setInterval( function() {
        random.removeData(seriesData);
        random.addData(seriesData);
        graph9.update();
    }, 300 );
    
    $(window).resize(function(){
        graph9.render();
    });
});