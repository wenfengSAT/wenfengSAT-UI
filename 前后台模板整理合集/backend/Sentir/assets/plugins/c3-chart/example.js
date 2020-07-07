var chart = c3.generate({
bindto: '#c3-bar',
data: {
  columns: [
	['data1', 30, 200, 100, 400, 150, 250],
	['data2', 130, 100, 140, 200, 150, 50]
  ],
  types: {
	data1: 'bar',
	data2: 'bar'
  }
},
axis: {
  x: {
	type: 'categorized'
  }
}
});


var chart = c3.generate({
bindto: '#c3-line',
data: {
  columns: [
	['sample', 30, 200, 100, 400, 150, 250]
  ]
}
});

var chart = c3.generate({
bindto: '#c3-line2',
data: {
  columns: [
	 ['data1', 30, 200, 100, 400, 150, 250],
	['data2', 50, 20, 10, 40, 15, 25]
  ]
}
});


var chart = c3.generate({
bindto: '#c3-bar-stacked',
data: {
  columns: [
	['data1', 30, 200, 100, 400, 150, 250],
	['data2', 130, 100, 140, 200, 150, 50]
  ],
  types: {
	data1: 'bar',
	data2: 'bar'
  },
  groups: [
	['data1', 'data2']
  ]
},
axis: {
  x: {
	type: 'categorized'
  }
}
});


var chart = c3.generate({
bindto: '#c3-spline',
data: {
  columns: [
	['data1', 30, 200, 100, 400, 150, 250],
	['data2', 130, 100, 140, 200, 150, 50]
  ],
  types: {
	data1: 'spline',
	data2: 'spline'
  }
}
});

var chart = c3.generate({
bindto: '#c3-area',
data: {
	columns: [
		['data1', 300, 350, 300, 0, 0, 0],
		['data2', 130, 100, 140, 200, 150, 50]
	],
	types: {
		data1: 'area',
		data2: 'area-spline'
	}
}
});

var chart = c3.generate({
bindto: '#c3-kombi',
data: {
	columns: [
		['data1', 30, 20, 50, 40, 60, 50],
		['data2', 200, 130, 90, 240, 130, 220],
		['data3', 300, 200, 160, 400, 250, 250],
		['data4', 200, 130, 90, 240, 130, 220],
		['data5', 130, 120, 150, 140, 160, 150],
		['data6', 90, 70, 20, 50, 60, 120],
	],
	type: 'bar',
	types: {
		data3: 'spline',
		data4: 'line',
		data6: 'area',
	},
	groups: [
		['data1','data2']
	]
},
axis: {
	x: {
		type: 'categorized'
	}
}
});

var chart = c3.generate({
bindto: '#c3-pie',
data: {
	// iris data from R
	columns: [
		['data1', 30],
		['data2', 120],
	],
	type : 'pie',
},
legend: {
show: true
}
});