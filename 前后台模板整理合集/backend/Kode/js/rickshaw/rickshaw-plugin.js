



/* ======================================================================
LINES
====================================================================== */

// set up our data series with 50 random data points

var seriesData = [ [], [], [] ];
var random = new Rickshaw.Fixtures.RandomData(150);

for (var i = 0; i < 100; i++) {
	random.addData(seriesData);
}

// instantiate our graph!

var graph = new Rickshaw.Graph( {
	element: document.getElementById("rickshaw-lines"),

	renderer: 'line',
	series: [
		{
			color: "#399BFF",
			data: seriesData[0],
			name: 'London'
		}, {
			color: "#33577B",
			data: seriesData[1],
			name: 'New York'
		}, {
			color: "#26A65B",
			data: seriesData[2],
			name: 'Tokyo'
		}
	]
} );

graph.render();

var hoverDetail = new Rickshaw.Graph.HoverDetail( {
	graph: graph,
	formatter: function(series, x, y) {
		var date = '<span class="date">' + new Date(x * 1000).toUTCString() + '</span>';
		var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
		var content = swatch + series.name + ": " + parseInt(y) + '<br>' + date;
		return content;
	}
} );


/* ======================================================================
BARS
====================================================================== */

// set up our data series with 50 random data points

var seriesData = [ [], [], [] ];
var random = new Rickshaw.Fixtures.RandomData(150);

for (var i = 0; i < 50; i++) {
  random.addData(seriesData);
}

// instantiate our graph!

var graph = new Rickshaw.Graph( {
  element: document.getElementById("rickshaw-bars"),
  height: 250,
  renderer: 'bar',
  series: [
    {
      color: "#399BFF",
      data: seriesData[0],
    }, {
      color: "#33577B",
      data: seriesData[1],
    }, {
      color: "#26A65B",
      data: seriesData[2],
    }
  ]
} );

graph.render();

  var hoverDetail = new Rickshaw.Graph.HoverDetail( {
    graph: graph
  } );


/* ======================================================================
SCALED
====================================================================== */
var data, graph, i, max, min, point, random, scales, series, _i, _j, _k, _l, _len, _len1, _len2, _ref;

data = [[], []];

random = new Rickshaw.Fixtures.RandomData(12 * 60 * 60);

for (i = _i = 0; _i < 100; i = ++_i) {
  random.addData(data);
}

scales = [];

_ref = data[1];
for (_j = 0, _len = _ref.length; _j < _len; _j++) {
  point = _ref[_j];
  point.y *= point.y;
}

for (_k = 0, _len1 = data.length; _k < _len1; _k++) {
  series = data[_k];
  min = Number.MAX_VALUE;
  max = Number.MIN_VALUE;
  for (_l = 0, _len2 = series.length; _l < _len2; _l++) {
    point = series[_l];
    min = Math.min(min, point.y);
    max = Math.max(max, point.y);
  }
  if (_k === 0) {
    scales.push(d3.scale.linear().domain([min, max]).nice());
  } else {
    scales.push(d3.scale.pow().domain([min, max]).nice());
  }
}

graph = new Rickshaw.Graph({
  element: document.getElementById("rickshaw-scaled"),
  renderer: 'line',
  series: [
    {
      color: '#399BFF',
      data: data[0],
      name: 'Series A',
      scale: scales[0]
    }, {
      color: '#33577B',
      data: data[1],
      name: 'Series B',
      scale: scales[1]
    }
  ]
});

new Rickshaw.Graph.Axis.Y.Scaled({
  element: document.getElementById('axis0'),
  graph: graph,
  orientation: 'left',
  scale: scales[0],
  tickFormat: Rickshaw.Fixtures.Number.formatKMBT
});

new Rickshaw.Graph.Axis.Y.Scaled({
  element: document.getElementById('axis1'),
  graph: graph,
  grid: false,
  orientation: 'right',
  scale: scales[1],
  tickFormat: Rickshaw.Fixtures.Number.formatKMBT
});

new Rickshaw.Graph.Axis.Time({
  graph: graph
});

new Rickshaw.Graph.HoverDetail({
  graph: graph
});

graph.render();

/* ======================================================================
TIME SCALE
====================================================================== */
var seriesData = [ [], [] ];
var random = new Rickshaw.Fixtures.RandomData(1540000);

for (var i = 0; i < 200; i++) {
	random.addData(seriesData);
}

var graph = new Rickshaw.Graph({
	element: document.getElementById("rickshaw-timescale"),
	height: 215,
	stroke: true,
	strokeWidth: 0.5,
	renderer: 'area',
	xScale: d3.time.scale(),
	yScale: d3.scale.sqrt(),
	series:[
		{ color: '#33577B', data: seriesData[0] },
		{ color: '#399BFF', data: seriesData[1] }
	] 
});

graph.render();

var xAxis = new Rickshaw.Graph.Axis.X({
	graph: graph,
	tickFormat: graph.x.tickFormat()
});

xAxis.render();

var yAxis = new Rickshaw.Graph.Axis.Y({
	graph: graph
});

yAxis.render();

var slider = new Rickshaw.Graph.RangeSlider.Preview({
	graph: graph,
	element: document.getElementById('slider')
});


new Rickshaw.Graph.HoverDetail({
  graph: graph
});


/* ======================================================================
GAPS
====================================================================== */
var palette = new Rickshaw.Color.Palette();

var graph = new Rickshaw.Graph( {
	element: document.getElementById("rickshaw-gaps"),
	renderer: 'area',
	stroke: true,
	series: [
		{
			data: [ { x: 0, y: 19 }, { x: 1, y: 30 }, { x: 2, y: 22 }, { x: 3, y: 29 }, { x: 4, y: 21 }, { x: 5, y: 29 } ],
			name: 'new york',
			color: palette.color()
		}, {
			data: [ { x: 0, y: 19 }, { x: 1, y: 29 }, { x: 2, y: 22 }, { x: 3, y: 27 }, { x: 4, y: 21 }, { x: 5, y: 29 } ],
			name: 'boston',
			color: palette.color()
		}, {
			data: [ { x: 0, y: 19 }, { x: 1, y: 22 }, { x: 2, y: 10 }, { x: 3, y: null }, { x: 4, y: 21 }, { x: 5, y: 29 } ],
			name: 'los angeles',
			color: palette.color()
		}, {
			data: [ { x: 0, y: 19 }, { x: 1, y: 10 }, { x: 2, y: 22 }, { x: 3, y: null }, { x: 4, y: 21 }, { x: 5, y: 29 } ],
			name: 'san francisco',
			color: palette.color()
		}
	]
} );

graph.render();

new Rickshaw.Graph.HoverDetail({ graph: graph });




/* ======================================================================
FIXED
====================================================================== */
var tv = 250;

// instantiate our graph!
var graph = new Rickshaw.Graph( {
	element: document.getElementById("rickshaw-fixed"),
	height: 250,
	renderer: 'line',
	series: new Rickshaw.Series.FixedDuration([{ name: 'one' }], undefined, {
		timeInterval: tv,
		maxDataPoints: 100,
		timeBase: new Date().getTime() / 1000
	}) 
} );

graph.render();

// add some data every so often

var i = 0;
var iv = setInterval( function() {

	var data = { one: Math.floor(Math.random() * 40) + 200 };

	var randInt = Math.floor(Math.random()*100);
	data.two = (Math.sin(i++ / 40) + 4) * (randInt + 100);
	data.three = randInt + 300;

	graph.series.addData(data);
	graph.render();

}, tv );

  var hoverDetail = new Rickshaw.Graph.HoverDetail( {
    graph: graph
  } );