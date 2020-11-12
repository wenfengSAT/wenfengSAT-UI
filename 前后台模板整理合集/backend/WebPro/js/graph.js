"use strict";
var Graph = Graph || (function($) {
	var Private = {};
	Private.count = 0;
	var Graph = function(obj) {
		if (obj !== 0) {
			Private.setOptions.call(this, obj);
			++Private.count;
		}
	};
	Private.defaults = function() {
		return {
			//default options
			x: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			y: 10,
			attachTo: 'body',
			points: [0, 26, 33, 74, 12, 49, 18]
		};
	};
	//important stuff you might want automatically
	Private.basics = function(height, width, graphHeight, graphWidth) {
		//basically, if no graph height/width is given we just make it equal the svg height/width
		height = graphHeight || height || 300;
		width = graphWidth || width || 550;
		//make sure we can take substring
		height = height.toString();
		width = width.toString();
		//so we can let them use percentages, we need the CSS of container
		Private.attachTo = Private.attachTo || 'body';
		var containerHeight = $(Private.attachTo).css('height');
		var containerWidth = $(Private.attachTo).css('width');
		//if its a percentage they probably mean fill the container, so use it
		height = (height.substring(height.length - 1) === '%') ? containerHeight : height;
		width = (width.substring(width.length - 1) === '%') ? containerWidth : width;
		return {
			//if user inputed a % or px, chop it off with parseFloat
			Gheight: parseFloat(height),
			Gwidth: parseFloat(width),
			//Distances between lines
			xDist: 60,
			yDist: 30,
			scale: 10,
			//leave space for labels:
			xOffset: 25,
			yOffset: 20,
			yStart: 0, // what number do we want to start from for y labels
			mainOffset: 35, //to seperate everything from the ylabels
			padding: 10, //keep labels from touching edges
			//single points
			xOfPoints: [], //get x and y coordinates of points
			yOfPoints: [],
			//multiple points
			mxOfPoints: [],
			myOfPoints: [],
			multipleDataSets: false,
			legend: false,
			interactive: true,
			animations: false,
			animationDuration: 1,
			pointAnimation: true,
			lineAnimation: true,
			barAnimation: true,
			pieAnimation: true,
			grid: true,
			xGrid: true,
			yGrid: true,
			xName: null,
			yName: null,
			special: null,
			showPoints: true,
			noLines: false,
			pointRadius: 5,
			averagePointRadius: 5,
			pieSize: 200,
			tooltipWidth: 50,
			pieLegend: true,
			rx: 10, //tooltip roundedness
			//add some html before append
			before: '',
			//after append:
			after: '',
			title: '', //title of graph to be written in SVG
			id: 'SVGGraph' + Private.count
		};
	};
	//create jquery css header
	Private.parseS = function(id, then) {
		return 'svg[id="' + id + '"] ' + then;
	};
	//turn an id into jQuery selector format
	Private.id2selector = function(id) {
		var stuff = id.split(' '); //split into components
		id = stuff[0]; //only want the first word (id)
		var selector = 'svg[id="';
		if (id.charAt(0) === '#') { //make sure it's an id
			selector += id.substring(1) + '"]';
			//append everything else to the end
			for (var i = 1, len = stuff.length; i < len; ++i) {
				selector += ' ' + stuff[i];
			}
		} else {
			return id;
		}
		return selector;
	};
	Private.design = function(obj) {
		//first way to style is by creating an object representing the CSS
		obj.byCSS = obj.byCSS || {};
		//second way to style something is by modifying default design
		obj.design = obj.design || {};
		var xAnchor = (obj.type === 'bar') ? 'start' : 'middle';
		//which replaces defaults below
		var height = obj.height || '100%';
		var width = obj.width || '100%';
		var self = obj.design;
		var styling = {};
		styling.style = {};
		styling.style[this.parseS(obj.id, '')] = {
			"height": height,
			"width": width
		};
		styling.style[this.parseS(obj.id, '.grid')] = {
			"stroke": self.gridColor || "#000",
			"stroke-width": self.gridWidth || "1"
		};
		styling.style[this.parseS(obj.id, '.points')] = {
			"cursor": 'pointer'
		};
		styling.style[this.parseS(obj.id, 'circle:not(".middle"):not(".pie-tooltip")')] = {
			"opacity": 0.8
		};
		styling.style[this.parseS(obj.id, '.inset')] = {
			"fill": self.pointColor || "lightblue"
		};
		styling.style[this.parseS(obj.id, '.labels')] = {
			"fill": self.labelColor || "#000",
			"stroke": self.labelStroke || "none",
			"font-family": self.labelFont || "Arial",
			"font-size": self.labelFontSize || "13px",
			"kerning": self.labelKerning || "2"
		};
		styling.style[this.parseS(obj.id, '.lines')] = {
			"stroke": self.lineColor || "darkgrey",
			"stroke-width": self.lineWidth || "2"
		};
		styling.style[this.parseS(obj.id, '.averageLine')] = {
			"stroke": self.averageLineColor || "green",
			"stroke-width": self.lineWidth || "2"
		};
		styling.style[this.parseS(obj.id, '.line-of-1')] = {
			"stroke": self.lineColor || "green",
			"stroke-width": self.lineWidth || "2"
		};
		styling.style[this.parseS(obj.id, '.rect')] = {
			"stroke": self.borderColor || "#fff",
			"stroke-width": self.borderWidth || "2",
			'fill': self.barColor || 'blue',
			'opacity': 0.8
		};
		styling.style[this.parseS(obj.id, '.bar')] = {
			"stroke": self.barBorder || "#fff",
			'opacity': 0.8
		};
		styling.style[this.parseS(obj.id, '.SVG-tooltip')] = {
			"fill": self.tooltipColor || "#000",
			"font-family": self.tooltipFont || "Arial",
			"font-size": self.tooltipFontSize || "13px",
			"display": 'none',
			"opacity": '1'
		};
		styling.style[this.parseS(obj.id, '.SVG-tooltip-box')] = {
			"display": 'none',
			"fill": self.tooltipBoxColor || "none",
			"stroke": self.borderColor || "none",
			"stroke-width": self.borderWidth || "2",
		};
		styling.style[this.parseS(obj.id, '.area')] = {
			"stroke": (!obj.multipleDataSets) ? (self.lineColor || "green") : 'none',
			"stroke-width": self.borderWidth || "2",
			"fill": self.areaColor || 'none',
			"opacity": 0.8
		};
		styling.style[this.parseS(obj.id, '.middle')] = {
			"fill": self.donutCenterColor || '#fff',
		};
		styling.style[this.parseS(obj.id, '.slice')] = {
			"stroke": self.borderColor || "grey",
			"stroke-width": self.borderWidth || "2",
			"opacity": "0.8"
		};
		styling.style[this.parseS(obj.id, '.labels.x-labels')] = {
			"text-anchor": self.xLabelAnchor || xAnchor
		};
		styling.style[this.parseS(obj.id, '.labels.y-labels')] = {
			"text-anchor": self.yLabelAnchor || "end"
		};
		styling.style['table[id="' + obj.id + '"]'] = {
			"height": height,
			"width": width,
			"border-collapse": 'collapse',
			"text-align": 'center'
		};
		//when using multiple lines make them different colors automatically
		var colors = obj.colors || ['#d9534f', '#428bca', '#1caf9a', '#f0ad4e', '#9a4ef0', '#f0c44e', '#ad4ef0', '#f09a4e', '#656866', '#bbbbbb'];
		colors.push(''); //so bar spaces dont takeup colors
		for (var i = 0, len = colors.length; i < len; ++i) {
			styling.style[this.parseS(obj.id, '.line-of-' + i)] = {
				"stroke": self.lineColor || colors[i],
				"stroke-width": self.lineWidth || "2"
			};
			styling.style[this.parseS(obj.id, '.path-of-' + i)] = {
				"fill": colors[i],
				"opacity": 0.8
			};
			styling.style[this.parseS(obj.id, '.rect-of-' + i)] = {
				"fill": colors[i]
			};
			styling.style[this.parseS(obj.id, '.point-of-' + i)] = {
				"fill": colors[i]
			};
		}
		//for styling completely with your own object
		for (var name in obj.byCSS) {
			//make sure id is in proper form
			styling.style[this.id2selector(name)] = obj.byCSS[name]; //make styling = users object
		}
		return styling;
	};
	//decide between basics, defaults, styling; make obj a property of "this"; add some variables
	Private.setOptions = function(obj) {
		obj = obj || {};
		if (obj.points && $.isArray(obj.points[0])) obj.multipleDataSets = true;
		if (obj.attachTo) {
			obj.attachTo = (obj.attachTo.charAt(0) === '#') ? obj.attachTo : '#' + obj.attachTo; //make hash optional (attchTo)
			Private.attachTo = obj.attachTo; //for basics(), which cant access this.obj.attachTo in time
		}
		if (obj.id) obj.id = (obj.id.charAt(0) === '#') ? obj.id.substring(1) : obj.id; //make hash optional (id)
		//do basic setup automatically (unless user chooses not to)
		if (obj.basic === true || typeof obj.basic === 'undefined') {
			this.obj = Private.basics(obj.height, obj.width, obj.graphHeight, obj.graphWidth);
		}
		//merge with defaults (some example content)
		if ((obj && obj.example === true) || !$.isEmptyObject(obj)) { //if example chosen or no options given
			obj.id = obj.id || this.obj.id;
			//everything user did not specify is filled with defaults + basics + style
			//style needs id passed in so it can be replaced from basics().id
			$.extend(this.obj, Private.defaults(), obj, Private.design(obj)); //ORDER MATTERS WITH $.EXTEND
			this.obj.addStyle = true;
		} else if (obj && obj.addStyle === true) { //only add styling
			$.extend(this.obj, Private.design(obj), obj);
		} else if (obj) { //if user wants nothing done for them just rely only on the object they give
			this.obj = obj; //only use given args
		}
		//lets add some repetitive length vars to the object to reduce calculations
		this.obj.numPoints = this.obj.points.length;
		this.obj.xLength = this.obj.x.length;
	};
	Graph.prototype.getData = function() { //save a graph as stringified JSON (can expand later)
		return JSON.stringify(this.obj);
	};
	Graph.prototype.genToFunc = function(str) {
		//turn generic string into function name
		str = (str === 'area') ? 'linear' : ((str === 'combo') ? 'bar' : ((str === 'donut') ? 'pie' : str));
		return 'Graph' + str.charAt(0).toUpperCase() + str.substring(1);
	};
	Graph.prototype.expand = function(obj, thing) { //expand JSON into a graph (requires 'type' property of 'obj')
		obj = (typeof obj === 'string') ? jQuery.parseJSON(obj) : obj; //if in string form parse it
		var graph = new window[this.genToFunc(this.obj.type)](obj);
		thing = thing || '';
		graph.init(thing);
	};
	Graph.prototype.update = function(obj) { //recall script file to update graph with new obj
		obj = obj || {};
		obj.byCSS = this.obj.byCSS;
		//reset options with new stuff
		this.expand(obj, 'update'); //recreate graph
	};
	//turn one type of graph into another  (can also make changes with obj)
	Graph.prototype.to = function(what, newObj) {
		//update graph as a new type
		var ret = newObj || this.obj;
		this.obj.type = what;
		ret.type = what;
		this.expand(ret, 'update');
	};
	Graph.prototype.createGrid = function(xLines, yLines) {
		var self = this.obj;
		var xGrid = '',
			yGrid = '',
			weird = self.yDist - 30;
		//make sure they want the grid
		if (self.grid && !self.noLines) {
			//save final x of xlines so ylines dont pass that boundary
			var finalY = (self.height) - yLines * (self.yDist);
			var nxt;
			//X-GRID LINES
			if (self.xGrid) {
				for (var i = 0; i < xLines; ++i) {
					//x1 and x2 must be the same (dist. from left), 
					//start at very top (y1 = 0), all the way to the bottom (y = height)
					nxt = i * self.xDist + self.mainOffset;
					xGrid += '<line x1="' + nxt + '" x2="' + nxt + '" y1="' + (self.height - self.yOffset - self.padding - weird) +
						'" y2="' + (finalY) + '"></line>';
				}
			}
			var finalX = (xLines - 1) * self.xDist + self.mainOffset;
			//Y-GRID LINES
			if (self.yGrid) {
				for (var i = 1; i <= yLines; ++i) {
					//y1 and y2 must be the same (dist. from top),
					//ALL x1's & x2's must be the same so we start at same dist. from left & right
					nxt = (self.height) - i * (self.yDist);
					//finalX need not be added to mainoffset because nxt already accounts for it mathematically
					yGrid += '<line x1="' + self.mainOffset + '" x2="' + (finalX) + '" y1="' + nxt + '" y2="' + nxt + '"></line>';
				}
			}
		} else {
			//leave the first vert. and horiz. line for them for obvious styling purposes
			//they still have the option to remove this with noLines
			if (self.noLines === false) {
				xGrid += '<line x1="' + self.mainOffset + '" x2="' + self.mainOffset +
					'" y1="' + (self.height - self.yOffset - self.padding - weird) + '" y2="' + ((self.height) - yLines * (self.yDist)) + '"></line>';
				yGrid += '<line x1="' + self.mainOffset + '" x2="' + ((xLines - 1) * self.xDist + self.mainOffset) +
					'" y1="' + (self.height - self.yDist) + '" y2="' + (self.height - self.yDist) + '"></line>';
			}
		}
		return {
			xGrid: xGrid,
			yGrid: yGrid
		};
	};
	Graph.prototype.applyStyling = function() {
		//Add CSS as value for every key in style
		var self = this.obj;
		if (self.addStyle) {
			for (var i in self.style) {
				$(i).css(self.style[i]);
			}
		}
	};
	//initialize global tags
	Graph.prototype.openTags = function() {
		return {
			SVG: '<svg id="' + this.obj.id + '"class="graph"style="' + (this.obj.css || '') + '">', //begin all groups
			xGrid: '<g class="grid x-grid" id="xGrid">',
			yGrid: '<g class="grid y-grid" id="yGrid">',
			xLabels: '<g class="labels x-labels">',
			yLabels: '<g class="labels y-labels">',
			title: '<g class="labels title">'
		};
	};
	//add X and Y labels to graph
	Graph.prototype.addLabels = function() {
		var self = this.obj;
		var xLabels = '',
			yLabels = '';
		//xLABELS
		for (var i = 0, len = self.xLength; i < len; ++i) {
			xLabels += '<text x="' + (i * self.xDist + self.mainOffset) + '" y="' +
				(self.height - self.padding) + '">' + self.x[i] + '</text>';
		}
		//yLABELS
		for (var i = 1, len = self.y + 1; i <= len; ++i) {
			var digit = (i * self.scale - self.scale + self.yStart); //get multiple of scale as number displayed
			var x = (digit >= 10) ? self.xOffset : self.xOffset - 10; //clean it up: move 1 digit numbers 1 place to the left
			//y subtracted from height to invert graph
			yLabels += '<text x="' + x + '" y="' + ((self.height - (self.yDist * i - self.padding)) - 5) +
				'">' + digit + '</text>';
		}
		return {
			xLabels: xLabels,
			yLabels: yLabels
		};
	};
	Graph.prototype.addTitle = function(yLines) {
		var self = this.obj;
		return '<text x="' + (self.mainOffset) + '" y="' +
			((self.height) - yLines * (self.yDist) - self.yOffset) +
			'"font-weight="bold">' + self.title + '</text>';
	};
	//close all tags, include grid & labels, append to DOM, and add styling (SVG only
	Graph.prototype.finishGraph = function(xLines, yLines, E, thing) {
		var self = this.obj;
		if (self.type !== 'pie') {
			//build grid
			E.xGrid += this.createGrid(xLines, yLines).xGrid;
			E.yGrid += this.createGrid(xLines, yLines).yGrid;
			//LABELS
			E.xLabels += this.addLabels().xLabels;
			E.yLabels += this.addLabels().yLabels;
		}
		E.title += this.addTitle(yLines);
		if ((self.legend && self.pieLegend) || self.type === 'pie') E.legend = this.addLegend(thing);
		//COMBINING DYNAMICALLY
		E.points = E.points || '';
		for (var i in E) {
			if (E[i] !== E.points && E[i] !== E.tooltips) { //so we can add last to increase z-index
				if (i !== 'SVG') E.SVG += E[i] + '</g>';
			}
		}
		E.SVG += E.points + E.tooltips + '</svg>';
		//"thing" will determine where to put the new graph
		var finish = self.before + E.SVG + self.after;
		this.handleAppend(thing, finish);
		//STYLING
		this.applyStyling();
		return E.SVG;
	};
	Graph.prototype.handleAppend = function(thing, finish) {
		if (thing === 'update') $('#' + this.obj.id).replaceWith(finish); //replace old graph with this one
		else $(this.obj.attachTo).append(finish);
	};
	Graph.prototype.addLegend = function() {
		var self = this.obj;
		var hoverHandle = function(what) {
			var to = (what === 'add') ? 1 : 0.8;
			var clas = $(this).attr('class').substring(7);
			var selector = '[class*="' + clas + '"][id^="' + $(this).attr('id').split('-')[1] + '"]';
			$('line' + selector + ', rect' + selector + ', path' + selector).each(function() {
				$(this).css('opacity', to);
			});
		};
		if (self.interactive && self.multipleDataSets) {
			$(document).on('mouseover', 'g[id^="legend-"]', function() {
				hoverHandle.call(this, 'add');
			});
			$(document).on('mouseout', 'g[id^="legend-"]', function() {
				hoverHandle.call(this, 'take');
			});
		}
		var legend = '<g class="legend">';
		var x = self.legendX || (self.Gwidth - self.xDist);
		var width = 30; //width of rect
		var height = 30;
		var y = self.yOffset;
		self.dataNames = self.dataNames || [];
		if (self.multipleDataSets || self.type === 'pie') {
			for (var i = 0, len = self.numPoints; i < len; ++i) {
				legend += '<g id="legend-' + self.id + '"class="legend-of-' + i + '">';
				//RECT
				legend += '<rect class="rect-of-' + i + '"x="' + (x) +
					'" y="' + (y) + '"width="' + width + '"height="' + height + '"></rect>';
				//TEXT
				legend += '<text style="cursor:default;"class="legend-of-' + i + '"x="' + (x + width + 5) +
					'"y="' + (y + height / 2) + '">' + (self.dataNames[i] || 'Data' + (i === 0 ? '' : ' ' + i)) + '</text>';
				y += self.yDist + self.padding;
			}
		} else {
			for (var i = 0, len = self.xLength; i < len; ++i) {
				legend += '<g id="legend-' + self.id + '">';
				//TEXT
				legend += '<text style="cursor:default;"x="' + (1.5 * x) +
					'"y="' + (y + height / 2) + '">' + (self.x[i] + " : " + self.points[i]) + '</text>';
				y += self.yDist + self.padding;
			}
		}
		//we'll need a section for the average line for combo graphs
		if (self.special === 'combo') {
			legend += '<g id="legend-avg-' + self.id + '">';
			//RECT
			legend += '<rect fill="' + (self.design.averageLineColor || 'green') + '"class="averageLine"x="' + (x) +
				'" y="' + (y) + '"width="' + width + '"height="' + height + '"></rect>';
			//TEXT
			legend += '<text style="cursor:default;"x="' + (x + width + 5) +
				'"y="' + (y + height / 2) + '">' + 'Average' + '</text>';
		}
		legend += '</g>';
		return legend;
	};
	return Graph;
})(jQuery);
var GraphLinear = GraphLinear || (function($) {
	var GraphLinear = function(obj) { //extends "Graph"
		obj = obj || {};
		obj.type = 'linear';
		Graph.call(this, obj);
		var pointHandle = function(action) {
			var $nat = $(this).attr('id');
			var matcher = $nat.split('-');
			var id = matcher[0];
			var num = matcher[1];
			var thiz = this; //reference the point that called us
			$('svg line[id^="' + id + '"], svg path[id^="' + id + '"]').each(function() {
				if ($(this).attr('id').split('-')[1] === num) {
					var tooltip = '#' + $(thiz).attr('class').split(' ')[0] + '-tooltip';
					var tooltipRect = '#' + $(thiz).attr('class').split(' ')[0] + '-tooltip-rect';
					if (action === 'add') {
						$(this).css('stroke-width', obj.lineWidth || 3);
						$(this).css('opacity', 1);
						$(tooltip).show();
						$(tooltipRect).show();
					} else {
						$(this).css('stroke-width', obj.lineWidth - 1 || 2);
						$(this).css('opacity', 0.8);
						$(tooltip).hide();
						$(tooltipRect).hide();
					}
				}
			});
		};
		//set click handlers for tooltips
		if (this.obj.interactive) {
			var thiz = this;
			$(document).on('mouseover', 'svg circle[id$="point"]', function() {
				pointHandle.call(this, 'add');
				$(this).css('opacity', 1);
			});
			$(document).on('mouseleave', 'svg circle[id$="point"]', function() {
				pointHandle.call(this, 'sub');
				$(this).css('opacity', thiz.obj.style['svg[id="' + thiz.obj.id + '"] circle'].opacity || 0.8);
			});
		}
	};
	GraphLinear.prototype = Object.create(Graph.prototype);
	GraphLinear.prototype.constructor = GraphLinear;
	GraphLinear.prototype.buildPoints = function(arr, pts) {
		var inc, x, j, points, str, html, mult, num, i, r = (pts) ? this.obj.averagePointRadius : this.obj.pointRadius,
			self = this.obj;
		var finalPoints = pts || self.points;
		//stuff that changes based on multiple points:
		if (arr.length === 1) {
			//only have "i" var
			points = finalPoints[arr[0]];
			str = arr[0];
			i = arr[0];
			mult = false;
		} else if (arr.length === 2) {
			//have "i" and then "t" var
			points = finalPoints[arr[0]][arr[1]];
			str = '' + arr[0] + arr[1]; //to get proper identifier
			i = arr[1];
			mult = true;
		}
		inc = self.height - ((points + self.scale) * (self.yDist / self.scale)); //subtract from height to invert graph
		x = i * self.xDist + self.mainOffset;
		if (pts) x += self.xDist / (self.points.length + 1); //center avg lines amongst dataset bars
		num = (mult === false) ? 0 : arr[0];
		//circles
		html = '<circle id="' + self.id + '-' + num + '-point"class="' + self.id + '-point' + str +
			' ' + (self.multipleDataSets && !pts ? 'point-of-' + arr[0] + ' ' : '') + '"cx="' + x + '" cy="' + inc + '" r="' + r + '">';
		if (self.animations && self.pointAnimation && !(self.multipleDataSets && self.special === 'area'))
			html += '<animate attributeName="cy" from="0" to="' + inc + '" dur="' + (self.animationDuration + i / 7) + 's" fill="freeze">';
		html += '</circle>';
		//TOOLTIPS
		//rectangle
		html += '<g><rect class="' + (self.multipleDataSets && !pts ? 'rect-of-' + arr[0] + ' ' : '') + 'SVG-tooltip-box"id="' + self.id + '-point' +
			str + '-tooltip-rect"rx="' + self.rx + '"x="' + (x - self.padding * 2 - self.tooltipWidth / 2) + '"y="' + (inc - self.yDist - self.padding * 2) +
			'"height="' + (self.yDist + self.padding / 2) + '"width="' + (50 + self.tooltipWidth) + '"/>';
		//text
		html += '<text class="SVG-tooltip"id="' + self.id + '-point' + str + '-tooltip" x="' +
			(x - self.padding) + '" y="' + (inc - self.yDist) + '">' + points + '</text></g>';
		return html;
	};
	GraphLinear.prototype.animateLines = function() {
		//much thanks to http://jakearchibald.com/2013/animated-line-drawing-svg/ !
		var self = this.obj;
		var path = $('path[id^=' + self.id + ']');
		var length;
		for (var i = 0, len = $('path[id^=' + self.id + ']').length; i < len; ++i) {
			length = path[i].getTotalLength();
			// Clear any previous transition
			path[i].style.transition = path[i].style.WebkitTransition =
				'none';
			// Set up the starting positions
			path[i].style.strokeDasharray = length + ' ' + length;
			path[i].style.strokeDashoffset = length;
			// Trigger a layout so styles are calculated & the browser
			// picks up the starting position before animating
			path[i].getBoundingClientRect();
			// Define our transition
			path[i].style.transition = path[i].style.WebkitTransition =
				'stroke-dashoffset 2s ease-in-out';
			// Go!
			path[i].style.strokeDashoffset = '0';
		}
	};
	GraphLinear.prototype.init = function(thing) {
		var self = this.obj;
		//correct values (atm has user inputed version, whereas G... is clean)
		self.width = self.Gwidth;
		self.height = self.Gheight;
		var E = this.openTags(); //elements
		if (!area) E.lines = '<g class="lines">'; //connecting points
		E.points = '<g class="inset points">';
		var area = self.special === 'area';
		if (area && !self.multipleDataSets) E.path = '<g class="area"><path id="' + self.id + '-0-path"d="';
		//*remember: xLines are vertical, yLines are horizontal
		var xLines = self.x.length;
		var yLines = self.y + 1; //+1 because line 1 is at origin
		var hmdist = self.height - self.yDist; //height minus distance
		var inc, x, j;
		if (!self.multipleDataSets) { //single line graph
			//POINTS (INDIVIDUAL)
			for (var i = 0; i < xLines; ++i) {
				inc = self.height - ((self.points[i] + self.scale) * (self.yDist / self.scale)); //subtract from height to invert graph
				//set our x coor depending on i due to offset (first and last are special) :/;
				x = i * self.xDist + self.mainOffset;
				if (self.showPoints === true) {
					E.points += this.buildPoints([i]);
				}
				//store coordinates so we can easily connect them with lines
				self.xOfPoints.push(x);
				self.yOfPoints.push(inc);
			}
			//PATHS
			if (!area) {
				for (var i = 0, len = self.numPoints - 1; i < len; ++i) {
					E.lines += '<path fill="none"id="' + self.id + '-0-path"d="';
					E.lines += 'M' + self.xOfPoints[0] + ',' + (self.yOfPoints[0]) + ' '; //make sure origin is included
					for (var i = 1; i < self.xOfPoints.length; ++i) {
						E.lines += 'L' + self.xOfPoints[i] + ',' + self.yOfPoints[i]; //draw line to next point
					}
					E.lines += '"</path>';
				}
			} else {
				//PATHS 
				//building SVG path params
				//handling seprately because Moveto is important
				E.path += 'M' + self.xOfPoints[0] + ',' + (hmdist) + ' '; //make sure origin is included
				E.path += 'L' + self.xOfPoints[0] + ',' + self.yOfPoints[0] + ' '; //draw from origin to first point
				for (var i = 1; i < self.xOfPoints.length; ++i) {
					E.path += 'L' + self.xOfPoints[i] + ',' + self.yOfPoints[i] + ' '; //draw line to next point
				}
				E.path += 'L' + self.xOfPoints[self.xOfPoints.length - 1] + ',' + (hmdist) + ' "></path>';
			}
		} else { //this looks similar to the above but we're now using multi dimensional array and different vars
			//we need to push the right # of empty arrays into the multi arrays for points
			for (var i = 0, len = self.numPoints; i < len; ++i) {
				self.mxOfPoints.push([]);
				self.myOfPoints.push([]);
			}
			var paths = [];
			//if (area) {
			E.path = '<g class="area">';
			//var paths = [];
			//}
			//multiple points are in a multi-dimensional array, so treat it as such with double loops
			for (var i = 0, len = self.numPoints; i < len; ++i) {
				//POINTS (INDIVIDUAL)
				for (var t = 0, len2 = self.points[i].length; t < len2; ++t) {
					inc = self.height - ((self.points[i][t] + self.scale) * (self.yDist / self.scale));
					x = t * self.xDist + self.mainOffset;
					if (self.showPoints === true) {
						E.points += this.buildPoints([i, t]);
					}
					self.mxOfPoints[i].push(x);
					self.myOfPoints[i].push(inc);
				}
				if (!area) {
					//PATHS
					paths.push('<path fill="none"id="' + self.id + '-' + i + '-path"class="line-of-' + i + '" d="');
					paths[i] += 'M' + self.mxOfPoints[i][0] + ',' + self.myOfPoints[i][0] + ' ';
					for (var t = 0, len2 = self.points[i].length; t < len2; ++t) {
						paths[i] += 'L' + self.mxOfPoints[i][t] + ',' + self.myOfPoints[i][t];
					}
					paths[i] += '"></path>';
				} else {
					// //LINES
					for (var t = 0, len2 = self.points[i].length - 1; t < len2; ++t) {
						j = t + 1; //get next point coordinate
						//number class name for different colors
						E.lines += '<line id="' + self.id + '-' + i + '-line" class="line-of-' + i +
							'" x1="' + self.mxOfPoints[i][t] + '" x2="' + self.mxOfPoints[i][j] +
							'" y1="' + self.myOfPoints[i][t] + '" y2="' + self.myOfPoints[i][j] + '"></line>';
					}
					//PATHS
					paths.push('<path id="' + self.id + '-' + i + '-path"class="path-of-' + i + '" d="');
					paths[i] += 'M' + self.mxOfPoints[i][0] + ',' + (hmdist) + ' ';
					paths[i] += 'L' + self.mxOfPoints[i][0] + ',' + self.myOfPoints[i][0] + ' ';
					for (var t = 0, len2 = self.points[i].length; t < len2; ++t) {
						paths[i] += 'L' + self.mxOfPoints[i][t] + ',' + self.myOfPoints[i][t] + ' ';
					}
					paths[i] += 'L' + self.mxOfPoints[i][self.mxOfPoints[i].length - 1] + ',' + (hmdist) + '"></path>';
				}
			}
			//if (area) {
			E.path += paths.join('');
			//}
		}
		this.finishGraph(xLines, yLines, E, thing); //close tags, style, and append
		if (!(self.multipleDataSets && area) && self.animations && self.lineAnimation) this.animateLines();
	};
	return GraphLinear;
})(jQuery);
var GraphBar = GraphBar || (function($) {
	var Private = {};
	var GraphBar = function(obj) {
		obj = obj || {};
		obj.type = 'bar';
		Graph.call(this, obj);
		//set click handlers for tooltips
		if (this.obj.interactive) {
			var thiz = this;
			$(document).on('mouseover', 'svg rect', function() {
				$('#' + $(this).attr('id') + '-tooltip').show();
				$('#' + $(this).attr('id') + '-tooltip-rect').show();
				$(this).css('opacity', 1);
			});
			$(document).on('mouseleave', 'svg rect', function() {
				$('#' + $(this).attr('id') + '-tooltip').hide();
				$('#' + $(this).attr('id') + '-tooltip-rect').hide();
				$(this).css('opacity', thiz.obj.style['svg[id="' + thiz.obj.id + '"] .rect'].opacity || 0.8);
			});
		}
	};
	GraphBar.prototype = Object.create(Graph.prototype);
	GraphBar.prototype.constructor = GraphBar;
	Private.getAveragePoints = function(points) {
		var ret = [];
		var avg;
		var j = 0;
		for (var i = 0, len = points[0].length; i < len; ++i) {
			avg = 0;
			for (var t = 0, len2 = points.length; t < len2; ++t) { //this lets us loop array td instead of lr with j
				avg += points[t][j];
			}
			ret.push(avg / len2); //average of points in the same index
			++j;
		}
		return ret;
	};
	GraphBar.prototype.init = function(thing) {
		var self = this.obj;
		self.width = self.Gwidth;
		self.height = self.Gheight;
		var xLines = self.x.length + 1; //needs one more because each x label takes entire column
		var yLines = self.y + 1;
		var E = this.openTags();
		E.rects = '<g class="rects"transform="translate(0, 40) scale(1, -1)">'; //bar graphs need to be on cartesian coords for animation
		E.tooltips = '<g>';
		var inc, x, y, weird; //increment
		weird = self.yDist - 30;
		if (!self.multipleDataSets) {
			for (var i = 0, len = xLines - 1; i < len; ++i) {
				//height must = last section of "y"
				//if i = 0, let inc = 1 so we can at least see at line at origin
				inc = (self.points[i] !== 0) ? ((self.points[i] + self.scale) * (self.yDist / self.scale)) - self.yDist : 2;
				x = (i * self.xDist + self.mainOffset);
				//bars
				E.rects += '<rect class="rect bar"id="' + self.id + '-point-' + i + '" x="' + x +
					'" y="' + (-self.height + self.yDist + self.mainOffset + self.padding / 2) +
					'" width="' + self.xDist + '"height="' + inc + '"' + (self.animations === true ?
						'><animate attributeName="height" from="0" to="' + inc + '" dur="' + self.animationDuration + 's" fill="freeze"></animate></rect>' : '/>');
			}
			for (var i = 0, len = xLines - 1; i < len; ++i) {
				inc = (self.points[i] !== 0) ? ((self.points[i] + self.scale) * (self.yDist / self.scale)) - self.yDist : 2;
				x = (i * self.xDist + self.mainOffset);
				y = (self.height - self.padding - self.yOffset - (inc));
				//tooltip box
				E.tooltips += '<rect class="SVG-tooltip-box"id="' + self.id + '-point-' +
					i + '-tooltip-rect"rx="' + self.rx + '"x="' + (x + self.padding / 2 - self.tooltipWidth / 2) + '"y="' + (y - weird - self.yDist - self.padding * 2) +
					'"height="' + (self.yDist + self.padding / 2) + '"width="' + (self.xDist - self.padding + self.tooltipWidth) + '"/>';
				//tooltip text
				E.tooltips += '<text class="SVG-tooltip"id="' + self.id + '-point-' + i +
					'-tooltip" x="' + (x + (self.xDist) / 2 - self.padding) + '" y="' +
					(y - weird - self.yDist / 2 - self.padding) + '">' + self.points[i] + '</text>';
			}
		} else {
			//okay, so we need to get the first point of each array
			//then display them side by side and so on
			//add spaces between data sets
			var spaces = [];
			for (var i = 0, len = self.points[0].length; i < len; ++i) {
				spaces.push(0);
			}
			self.points.push(spaces);
			var numPoints = self.points.length;
			var max = self.points[0].length; //amount of points we'll go through (all arrays should be same length)
			var npm1 = numPoints - 1; //reducing calcs (num points minus 1)
			var xDist = self.xDist / numPoints;
			var all;
			var ref;
			//so we can loop through all the points and choose whether to do bars or tooltips in one go
			//this is neccesary because tooltips must be done after bars but in the exact same way
			//tooltips must come after so that they will be placed above all bars (SVG has no z-index)
			var loopThroughPoints = function(which) {
				var j = 0;
				for (var i = 0; i < max; ++i) { //so we get throguh the length of every array
					for (var t = 0, len = numPoints; t < len; ++t) { //this lets us loop array td instead of lr with j
						if (t !== npm1) { //skip over spaces array
							all = t + j + (i * (npm1));
							ref = t + j + i * 2;
							inc = (self.points[t][j] !== 0) ? ((self.points[t][j] + self.scale) * (self.yDist / self.scale)) - self.yDist : 2;
							x = ((all) * (xDist) + self.mainOffset);
							y = (self.height - self.padding - self.yOffset - (inc));
							//bars
							if (which === 0) {
								E.rects += '<rect class="rect-of-' + t + ' bar"id="' + self.id + '-point-' + (ref) + '" x="' + x +
									'" y="' + (-self.height + self.yDist + self.mainOffset + self.padding / 2) +
									'" width="' + (xDist) + '"height="' + inc + '"' + (self.animations && self.barAnimation ?
										'><animate attributeName="height" from="0" to="' + inc + '" dur="' + self.animationDuration + 's" fill="freeze"></animate></rect>' : '/>');
							} else if (which === 1) { //tooltips
								//tooltip box
								E.tooltips += '<g><rect class="rect-of-' + t + ' SVG-tooltip-box "id="' + self.id + '-point-' +
									(ref) + '-tooltip-rect"rx="' + self.rx + '"x="' + (x - self.tooltipWidth / 2) + '"y="' + (y - weird - self.yDist - self.padding * 2) +
									'"height="' + (self.yDist + self.padding / 2 + 10) + '"width="' + (xDist + self.tooltipWidth) + '"/>';
								//tooltip text
								E.tooltips += '<text class="SVG-tooltip"id="' + self.id + '-point-' + (ref) +
									'-tooltip" x="' + (x + (xDist) / 2 - self.padding) + '" y="' +
									(y - weird - self.yDist / 2 - self.padding) + '">' + self.points[t][j] + '</text></g>';
							}
						}
					}
					//make absolute sure too many values arent added to the array
					if (self.xOfPoints.length < max) self.xOfPoints.push(x);
					++j;
				}
			};
			loopThroughPoints(0);
			loopThroughPoints(1);
			self.points.pop(); //remove spacing array
			if (self.special === 'combo') {
				//AVERAGE LINES
				var points = Private.getAveragePoints(self.points); //our points will be the averages of each dataset
				var ln = new GraphLinear(self);
				E.lines = '<g class="lines">';
				E.points = '<g class="inset points">';
				//below is a near copy of single dataset lines
				//POINTS (INDIVIDUAL)
				for (var i = 0, len = xLines - 1; i < len; ++i) {
					inc = self.height - ((points[i] + self.scale) * (self.yDist / self.scale));
					x = i * self.xDist + self.mainOffset;
					if (self.showPoints === true) {
						E.points += ln.buildPoints([i], points);
					}
					//no need to push xOfPoints 'cause we did that in earlier func
					self.yOfPoints.push(inc);
				}
				//LINES
				var j;
				for (var i = 0, len = points.length - 1; i < len; ++i) {
					E.lines += '<path class="averageLine"fill="none"id="' + self.id + '-0-path"d="';
					E.lines += 'M' + self.xOfPoints[0] + ',' + (self.yOfPoints[0]) + ' '; //make sure origin is included
					for (var i = 1; i < self.xOfPoints.length; ++i) {
						E.lines += 'L' + self.xOfPoints[i] + ',' + self.yOfPoints[i]; //draw line to next point
					}
					E.lines += '"</path>';
				}
			}
		}
		this.finishGraph(xLines, yLines, E, thing);
		if (self.special === 'combo' && self.multipleDataSets && self.animations) ln.animateLines();
	};
	return GraphBar;
})(jQuery);
var GraphTable = GraphTable || (function() {
	var GraphTable = function(obj) {
		obj = obj || {};
		obj.type = 'table';
		Graph.call(this, obj);
	};
	GraphTable.prototype = Object.create(Graph.prototype);
	GraphTable.prototype.constructor = GraphTable;
	GraphTable.prototype.init = function(thing) {
		var self = this.obj;
		var headers = '<th>' + (self.dataNames ? self.dataNames[0] : 'Data') + '</th>';
		//within each row is [num | x | y] <td>'s
		var row = '<tr>';
		if (!self.multipleDataSets) {
			for (var i = 0, len = self.xLength; i < len; ++i) {
				row += '<td>' + i + '</td><td>' + self.x[i] + '</td><td>' + self.points[i] + '</td></tr><tr>';
			}
		} else {
			var tds; //build with 
			for (var i = 0, len = self.xLength; i < len; ++i) {
				if (i < self.numPoints - 1) headers += '<th>' + self.dataNames[i + 1] + '</th>'; //add headers numerically
				tds = '';
				for (var t = 0, len2 = self.numPoints; t < len2; ++t) {
					tds += '<td>' + self.points[t][i] + '</td>';
				}
				row += '<td>' + i + '</td><td>' + self.x[i] + '</td>' + tds + '</tr><tr>';
			}
		}
		var table = '<table class="SVG-table"id="' + self.id + '" border="1"cellpadding="5"><tr><th>#</th><th>' +
			(self.xName || 'X') + '</th>' + headers + '</tr>';
		table += row + '</tr>';
		this.handleAppend(thing, table);
		this.applyStyling();
	};
	return GraphTable;
})();
var GraphPie = GraphPie || (function($) {
	var Private = {};
	var GraphPie = function(obj) {
		obj = obj || {};
		obj.type = 'pie';
		Graph.call(this, obj);
		if (this.obj.interactive) {
			var thiz = this.obj;
			$(document).on('mouseover', 'svg path[id^="' + thiz.id + '"].slice', function() {
				$('#' + thiz.id + ' .SVG-tooltip').hide();
				$('#' + thiz.id + ' .SVG-tooltip-title').hide();
				$('#' + $(this).attr('id') + '-tooltip').show();
				$('#' + $(this).attr('id') + '-tooltip-title').show();
				$('svg path[id^="' + thiz.id + '"].slice').css('opacity', 0.8);
				$('svg path[id^="' + thiz.id + '"].slice').css('stroke', self.borderColor || 'grey');
				$(this).css('opacity', 1);
				$(this).css('stroke', '#000');
			});
			$(document).on('mouseleave', 'svg path[id^="' + thiz.id + '"].slice', function() {
				//$(this).css('opacity', 0.8);
			});
		}
	};
	GraphPie.prototype = Object.create(Graph.prototype);
	GraphPie.prototype.constructor = GraphPie;
	Private.lineTo = function(x, y) {
		return 'L' + x + ',' + y;
	};
	Private.percent = function(dec) {
		return Math.round(dec * 100) + '%';
	};
	GraphPie.prototype.init = function(thing) {
		if (!this.obj.multipleDataSets) {
			var self = this.obj;
			var E = this.openTags();
			E.pie = '<g class="paths">';
			var max = 0; //sum of all points
			var center = self.pieSize || 200;
			var radius = center - 20; //leave padding for pie
			var CENTER = 'M' + center + ',' + center;
			var ARC = 'A' + radius + ',' + radius;
			var STD = '0 0,1'; //arc options
			var HORZ; //x component of line
			var VERT; //y component of line
			var sizing = 20;
			var LINETO = Private.lineTo(sizing, center); //intiial starting point
			var howMuchOfPie = 0;
			var howMuchOfPieInRadians;
			var howMuchUp;
			var howMuchLeft;
			var firstD;
			self.dataNames = self.x.slice(0);
			var tooltipCenter = center - center / 4;
			// if (self.shadow && self.special !== 'donut') {
			// 	E.pie += '<defs><filter id="dropshadow" width="120%" height="120%"><feGaussianBlur stdDeviation="4"/></filter></defs>' +
			// 		'<circle cx="' + (center + 5) + '" cy="' + (center + 5) + '" r="' + radius + '"style="fill: black; fill-opacity:0.6; stroke:none;filter:url(#dropshadow)"/>';
			// }
			for (var i = 0, len = self.numPoints; i < len; ++i) {
				max += self.points[i];
			}
			for (var i = 0, len = self.numPoints; i < len; ++i) {
				if (i !== 0) LINETO = Private.lineTo(HORZ, VERT);
				howMuchOfPie += self.points[i] / max;
				howMuchOfPieInRadians = howMuchOfPie * 2 * Math.PI; //2pi = 360 deg
				howMuchUp = Math.sin(howMuchOfPieInRadians);
				howMuchLeft = Math.cos(howMuchOfPieInRadians);
				HORZ = center - (radius * howMuchLeft); //x component of line
				VERT = center - (radius * howMuchUp); //y component of line
				if(i === 0) firstD = CENTER + LINETO + ARC + ' ' + STD + HORZ + ',' + VERT;
				//path
				E.pie += '<path title="' + self.points[i] + ' (' + Private.percent(self.points[i] / max) +
					')"id="' + self.id + '-point-' + i + '"class="path-of-' + i +
					' slice" d="' + CENTER + LINETO + ARC + ' ' + STD + HORZ + ',' + VERT + 'Z">';
				// if(self.animations && self.pieAnimation){
				// 	E.pie += '<animate attributeName="d" from="M200,200" to="' + CENTER + LINETO + ARC + ' ' + STD + HORZ + ',' + VERT + 'Z" dur="' + (self.animationDuration + i/2) + 's" fill="freeze">'
				// 	E.pie += '<animate attributeName="opacity" from="0" to="0" dur="' + (self.animationDuration) + 's" fill="freeze">'
				// }
				E.pie += '</path>';
			}
			//tooltip box
			E.tooltips += '<g><circle class="pie-tooltip"id="' + self.id + '-point-' +
				(i) + '-tooltip-rect"style="fill:' + (self.design.pieTooltipFill || '#fff') + ';opacity:' + (self.design.pieTooltipOpacity || 0.5) + '"r="' + (self.design.pieTooltipRadius || 60) + '"cx="' + center + '"cy="' + center +
				'"height="' + (self.design.donutCenterRadius || center / 2) + '"width="' + (self.design.donutCenterRadius || center / 2) + '"/>';
			//tooltips have their own loop for good old SVG z-index reasons
			for (var i = 0; i < len; ++i) {
				//tooltip text
				E.tooltips += '<text class="SVG-tooltip"id="' + self.id + '-point-' + (i) +
					'-tooltip" x="' + (self.design.pieTooltipTextX || tooltipCenter + 10) + '" y="' +
					(tooltipCenter + center / 4 + sizing) + '">' + self.points[i] + ' (' + Private.percent(self.points[i] / max) + ')</text>';
				E.tooltips += '<text class="SVG-tooltip-title"style="display:none;font-weight:bold;font-size:25px;"id="' + self.id + '-point-' + (i) +
					'-tooltip-title" x="' + (self.design.pieTooltipTitleX || tooltipCenter + 20) + '" y="' +
					(tooltipCenter + center / 8) + '">' + self.dataNames[i] + '</text></g>';
			}
			if (self.special === 'donut') //just stick some color circle in the middle :P
				E.middle = '<g><circle class="middle"cx="' + center + '" cy="' + center + '" r="' + (self.design.donutCenterRadius || center / 2) + '"/>';
			//add percentages to names for legend by modifying the names taken by legend func
			if (self.dataNames) {
				for (var i = 0, len = self.dataNames.length; i < len; ++i) {
					self.dataNames[i] += ' : ' + self.points[i] + ' (' + Private.percent(self.points[i] / max) + ')';
				}
			}
			this.finishGraph(0, 0, E, thing);
			$('svg path[id^="' + self.id + '"].slice').eq(2).mouseover(); //select upper slice automatically
		}
	};
	return GraphPie;
})(jQuery);

//UI/jQuery plugin for displaying SVGGraph.js graphs with all their functionality
(function($) {
	$.fn.graphify = $.fn.graphify || function(options) {
		options = options || {};
		//SETUP
		var opts = $.extend({
			height: this.css('height'),
			width: this.css('width'),
			start: 'linear', //type of graph to start with
			pos: 'top',
			obj: {} //actual obj for module
		}, options);
		var types;
		var self = opts.obj;
		var id = self.id;
		var SVG = new Graph(0); //so we can use general functions
		var graph;
		var serializer;
		var thisHTML = {}; //storing html for each type that has already been created to we dont have to redo stuff
		//var specials = ['area', 'combo', 'donut']; //subsets of major graphs
		//if graph has multiple datasets we can not make a pie graph or combo graph:
		if ($.isArray(self.points[0])) {
			types = ['linear', 'area', 'bar', 'combo', 'table'];
		} else {
			types = ['linear', 'area', 'bar', 'pie', 'donut', 'table'];
		}
		var wrapper = this.attr('id') + '-wrapper';
		this.append('<div id="' + wrapper + '"><div id="' + wrapper + '-g-area"></div></div>');
		self.attachTo = wrapper + '-g-area';
		//UI
		var buttons = (function() {
			var btns = '';
			for (var i = 0, len = types.length; i < len; ++i) {
				btns += '<button id="' + id + '-graphify-button-' + types[i] + '">' +
					types[i].charAt(0).toUpperCase() + types[i].substring(1) +
					'</button>&emsp;';
			}
			return btns;
		})();
		if (opts.pos === 'top') $('#' + wrapper).prepend(buttons + '<br/><br />');
		var start = opts.start;
		if (start !== 'area' && start !== 'combo' && start !== 'donut') {
			graph = new window[SVG.genToFunc(start)](self);
		} else {
			self.special = start;
			graph = new window[SVG.genToFunc(start)](self);
		}
		graph.init();
		if (opts.pos === 'bottom') this.append(buttons);
		//click handlers
		//changing graph type
		$(document).on('click', 'button[id^="' + id + '-graphify-button-"]', function() {
			var type = $(this).attr('id').split('-')[3];
			//weve created this graph before
			if (thisHTML.hasOwnProperty(type) && !self.animations) {
				$('#' + wrapper + '-g-area').html(thisHTML[type]); //just stick old html into graph
			} else { //first time running this graph
				if (type !== 'area' && type !== 'combo' && type !== 'donut') {
					self.special = false;
					graph.to(type, self);
				} else { //area graphs are a subset of linear graphs, combo of bar graphs...so on
					self.special = type;
					switch (type) {
						case 'area':
							graph.to('linear', self);
							break;
						case 'combo':
							graph.to('bar', self);
							break;
						case 'donut':
							graph.to('pie', self);
							break;
					}
				}
				//innerHTML doesnt work with SVG so use xml serializer
				serializer = new XMLSerializer();
				thisHTML[type] = serializer.serializeToString(document.getElementById(self.id)); //save graph
			}
			self.type = type;
		});
	};
})(jQuery);