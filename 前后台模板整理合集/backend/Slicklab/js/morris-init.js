
// bar chart

Morris.Bar({
    element: 'bar-chart',
    data: [
        {x: '2015 Q1', y: 2, z: 4, a: 3},
        {x: '2015 Q2', y: 2, z: null, a: 1},
        {x: '2015 Q3', y: 0, z: 2, a: 4},
        {x: '2015 Q4', y: 2, z: 4, a: 3}
    ],
    xkey: 'x',
    ykeys: ['y', 'z', 'a'],
    labels: ['Y', 'Z', 'A'],
    barColors:['#4EC9B4','#868BB8','#ffe157']

});


var day_data = [
    {"elapsed": "I", "value": 8},
    {"elapsed": "II", "value": 34},
    {"elapsed": "III", "value": 53},
    {"elapsed": "IV", "value": 12},
    {"elapsed": "V", "value": 13},
    {"elapsed": "VI", "value": 22},
    {"elapsed": "VII", "value": 5},
    {"elapsed": "VIII", "value": 26},
    {"elapsed": "IX", "value": 12},
    {"elapsed": "X", "value": 19}
];

// line chart

Morris.Line({
    element: 'line-chart',
    data: day_data,
    xkey: 'elapsed',
    ykeys: ['value'],
    labels: ['value'],
    lineColors:['#868BB8'],
    parseTime: false,
    lineWidth: 1
});


// area line chart

Morris.Area({
    element: 'area-line-chart',
    behaveLikeLine: false,
    data: [
        {x: '2011 Q1', y: 2, z: 1},
        {x: '2011 Q2', y: 3, z: 3},
        {x: '2011 Q3', y: 5, z: 5},
        {x: '2011 Q4', y: 4, z: 3},
        {x: '2011 Q5', y: 3, z: 2}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z'],
    lineColors:['#4EC9B4','#79D1CF'],
    pointSize: 4,
    lineWidth: 1

});


// donut chart

Morris.Donut({
    element: 'donut-chart',
    data: [
        {value: 70, label: 'Frosted', formatted: 'at least 55%' },
        {value: 15, label: 'Custard', formatted: 'approx. 25%' },
        {value: 10, label: 'Sugar', formatted: 'approx. 10%' },
        {value: 5, label: 'Long title chart', formatted: 'at most 10%' }
    ],
    backgroundColor: '#fff',
    labelColor: '#1fb5ac',
    colors: [
        '#4EC9B4','#FFEA80','#FF834D','#868BB8'
    ],
    formatter: function (x, data) { return data.formatted; }
});


// area chart

Morris.Area({
    element: 'area-chart',
    behaveLikeLine: true,
    gridEnabled: false,
    gridLineColor: '#dddddd',
    axes: true,
    fillOpacity:.7,
    data: [
        {period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
        {period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
        {period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
        {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
        {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
        {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
        {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
        {period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
        {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
        {period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
    ],
    lineColors:['#4EC9B4','#FFEA80','#81CDEA'],
    xkey: 'period',
    ykeys: ['iphone', 'ipad', 'itouch'],
    labels: ['iPhone', 'iPad', 'iPod Touch'],
    pointSize: 4,
    lineWidth: 1,
    hideHover: 'auto'

});



