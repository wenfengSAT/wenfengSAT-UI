/**
 * Defines a new instance of the rainyday.js.
 * @param canvasid DOM id of the canvas used for rendering
 * @param sourceid DOM id of the image element used as background image
 * @param width width of the rendering
 * @param height height of the rendering
 * @param opacity opacity attribute value of the glass canvas (default: 1)
 * @param blur blur radius (default: 20)
 */

function RainyDay(canvasid, sourceid, width, height, opacity, blur) {
	this.canvasid = canvasid;
	this.canvas = document.getElementById(canvasid);

	this.sourceid = sourceid;
	this.img = document.getElementById(sourceid);
	this.opacity = opacity ? opacity : 1;
	this.blurRadius = blur ? blur : 20;

	// draw and blur the background image
	this.prepareBackground(width, height);
	this.w = this.canvas.width;
	this.h = this.canvas.height;

	// create the glass canvas
	this.prepareGlass();

	this.drops = [];
	this.animateDrops();

	// assume default reflection mechanism
	this.reflection = this.REFLECTION_MINIATURE;

	// assume default trail mechanism
	this.trail = this.TRAIL_DROPS;

	// assume default gravity
	this.gravity = this.GRAVITY_NON_LINEAR;

	// drop size threshold for the gravity algorhitm
	this.VARIABLE_GRAVITY_THRESHOLD = 3;

	// gravity angle
	this.VARIABLE_GRAVITY_ANGLE = Math.PI / 2;

	// angle variance
	this.VARIABLE_GRAVITY_ANGLE_VARIANCE = 0;

	// frames per second animation speed
	this.VARIABLE_FPS = 15;

	// context fill style when no REFLECTION_NONE is used
	this.VARIABLE_FILL_STYLE = '#8ED6FF';

	// collisions enabled by default
	this.VARIABLE_COLLISIONS = true;

	this.REFLECTION_SCALEDOWN_FACTOR = 5;
	this.REFLECTION_DROP_MAPPING_WIDTH = 200;
	this.REFLECTION_DROP_MAPPING_HEIGHT = 200;

	// assume default collision algorhitm
	this.collision = this.COLLISION_SIMPLE;

}

RainyDay.prototype.animateDrops = function() {
	var raf = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / this.rainyday.VARIABLE_FPS);
		};
	if (this.addDropCallback)
		this.addDropCallback();
	// |this.drops| array may be changed as we iterate over drops
	var dropsClone = this.drops.slice();
	var newDrops = [];
	for (var i = 0; i < dropsClone.length; ++i) {
		if (dropsClone[i].animate())
			newDrops.push(dropsClone[i]);
	}
	this.drops = newDrops;
	raf(this.animateDrops.bind(this));
}

/**
 * Create the helper canvas for rendering raindrop reflections.
 */
RainyDay.prototype.prepareReflections = function() {
	// new canvas
	this.reflected = document.createElement('canvas');
	this.reflected.width = this.canvas.width / this.REFLECTION_SCALEDOWN_FACTOR;
	this.reflected.height = this.canvas.height / this.REFLECTION_SCALEDOWN_FACTOR;

	var ctx = this.reflected.getContext('2d');

	ctx.drawImage(this.img, 0, 0, this.reflected.width, this.reflected.height);
};

/**
 * Create the glass canvas and position it directly over the main one.
 */
RainyDay.prototype.prepareGlass = function() {
	this.glass = document.createElement('canvas');
	this.glass.width = this.canvas.width;
	this.glass.height = this.canvas.height;
	this.context = this.glass.getContext('2d');
};

/**
 * Creates a new preset object with given attributes.
 * @param min minimum size of a drop
 * @param base base value for randomizing drop size
 * @param quan probability of selecting this preset (must be between 0 and 1)
 * @returns present object with given attributes
 */
RainyDay.prototype.preset = function(min, base, quan) {
	return {
		"min": min,
		"base": base,
		"quan": quan
	}
};

/**
 * Main function for starting rain rendering.
 * @param presets list of presets to be applied
 * @param speed speed of the animation (if not provided or 0 static image will be generated)
 */
RainyDay.prototype.rain = function(presets, speed) {
	// prepare canvas for drop reflections
	if (this.reflection != this.REFLECTION_NONE) {
		this.prepareReflections();
	}

	if (speed > 0) {
		// animation
		this.presets = presets;

		this.PRIVATE_GRAVITY_FORCE_FACTOR_Y = (this.VARIABLE_FPS * 0.005) / 25;
		this.PRIVATE_GRAVITY_FORCE_FACTOR_X = ((Math.PI / 2) - this.VARIABLE_GRAVITY_ANGLE) * (this.VARIABLE_FPS * 0.005) / 50;

		// prepare gravity matrix
		if (this.VARIABLE_COLLISIONS) {

			// calculate max radius of a drop to establish gravity matrix resolution
			var maxDropRadius = 0;
			for (var i = 0; i < presets.length; i++) {
				if (presets[i].base + presets[i].min > maxDropRadius) {
					maxDropRadius = Math.floor(presets[i].base + presets[i].min);
				}
			}

			if (maxDropRadius > 0) {
				// initialize the gravity matrix
				var mwi = Math.ceil(this.w / maxDropRadius);
				var mhi = Math.ceil(this.h / maxDropRadius);
				this.matrix = new CollisionMatrix(mwi, mhi, maxDropRadius);
			} else {
				this.VARIABLE_COLLISIONS = false;
			}
		}
		var lastExecutionTime = 0;
		this.addDropCallback = function() {
			var timestamp = new Date().getTime();
			if (timestamp - lastExecutionTime < speed)
				return;
			lastExecutionTime = timestamp;
			var context = this.canvas.getContext("2d");
			context.clearRect(0,0,this.canvas.width,this.canvas.height);
			context.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
			var random = Math.random();
			// select matching preset
			var preset;
			for (var i = 0; i < presets.length; i++) {
				if (random < presets[i].quan) {
					preset = presets[i];
					break;
				}
			}
			if (preset) {
				this.putDrop(new Drop(this, Math.random() * this.w, Math.random() * this.h, preset.min, preset.base));
			}
			context.save();
			context.globalAlpha = this.opacity;
			context.drawImage(this.glass, 0, 0, this.canvas.width, this.canvas.height);
			context.restore();
		}.bind(this);

	} else {
		// static picture
		for (var i = 0; i < presets.length; i++) {
			var preset = presets[i];
			for (var c = 0; c < preset.quan; ++c) {
				this.putDrop(new Drop(this, Math.random() * this.w, Math.random() * this.h, preset.min, preset.base));
			}
		}
	}
};

/**
 * Adds a new raindrop to the animation.
 * @param drop drop object to be added to the animation
 */
RainyDay.prototype.putDrop = function(drop) {
	drop.draw();
	if (this.gravity && drop.r1 > this.VARIABLE_GRAVITY_THRESHOLD) {

		if (this.VARIABLE_COLLISIONS) {
			// put on the gravity matrix
			this.matrix.update(drop);
		}
		this.drops.push(drop);

	}
};

RainyDay.prototype.clearDrop = function(drop, force) {
	var result = drop.clear(force);
	if (result) {
		var index = this.drops.indexOf(drop);
		if (index >= 0)
			this.drops.splice(index, 1);
	}
	return result;
}

/**
 * Imperfectly approximates shape of a circle.
 * @param iterations number of iterations applied to the size approximation algorithm
 * @returns list of points approximating a circle shape
 */
RainyDay.prototype.getLinepoints = function(iterations) {
	var pointList = {};
	pointList.first = {
		x: 0,
		y: 1
	};
	var lastPoint = {
		x: 1,
		y: 1
	}
	var minY = 1;
	var maxY = 1;
	var point;
	var nextPoint;
	var dx, newX, newY;

	pointList.first.next = lastPoint;
	for (var i = 0; i < iterations; i++) {
		point = pointList.first;
		while (point.next != null) {
			nextPoint = point.next;

			dx = nextPoint.x - point.x;
			newX = 0.5 * (point.x + nextPoint.x);
			newY = 0.5 * (point.y + nextPoint.y);
			newY += dx * (Math.random() * 2 - 1);

			var newPoint = {
				x: newX,
				y: newY
			};

			//min, max
			if (newY < minY) {
				minY = newY;
			} else if (newY > maxY) {
				maxY = newY;
			}

			//put between points
			newPoint.next = nextPoint;
			point.next = newPoint;

			point = nextPoint;
		}
	}

	//normalize to values between 0 and 1
	if (maxY != minY) {
		var normalizeRate = 1 / (maxY - minY);
		point = pointList.first;
		while (point != null) {
			point.y = normalizeRate * (point.y - minY);
			point = point.next;
		}
	} else {
		point = pointList.first;
		while (point != null) {
			point.y = 1;
			point = point.next;
		}
	}

	return pointList;
};

/**
 * Defines a new raindrop object.
 * @param rainyday reference to the parent object
 * @param centerX x position of the center of this drop
 * @param centerY y position of the center of this drop
 * @param min minimum size of a drop
 * @param base base value for randomizing drop size
 */

function Drop(rainyday, centerX, centerY, min, base) {
	this.x = Math.floor(centerX);
	this.y = Math.floor(centerY);
	this.r1 = (Math.random() * base) + min;
	this.rainyday = rainyday;
	var iterations = 4;
	this.r2 = 0.8 * this.r1;
	this.linepoints = rainyday.getLinepoints(iterations);
	this.context = rainyday.context;
	this.reflection = rainyday.reflected;
}

/**
 * Draws a raindrop on canvas at the current position.
 */
Drop.prototype.draw = function() {
	var phase = 0;
	var point;
	var rad, theta;
	var x0, y0;

	this.context.save();
	this.context.beginPath();
	point = this.linepoints.first;
	theta = phase;
	rad = this.r2 + 0.5 * Math.random() * (this.r2 - this.r1);
	x0 = this.x + rad * Math.cos(theta);
	y0 = this.y + rad * Math.sin(theta);
	this.context.lineTo(x0, y0);
	while (point.next != null) {
		point = point.next;
		theta = (Math.PI * 2 * point.x) + phase;
		rad = this.r2 + 0.5 * Math.random() * (this.r2 - this.r1);
		x0 = this.x + rad * Math.cos(theta);
		y0 = this.y + rad * Math.sin(theta);
		this.context.lineTo(x0, y0);
	}

	this.context.clip();

	if (this.rainyday.reflection) {
		this.rainyday.reflection(this);
	}

	this.context.restore();
};

/**
 * Clears the raindrop region.
 * @param force force stop
 * @returns true if the animation is stopped
 */
Drop.prototype.clear = function(force) {
	this.context.clearRect(this.x - this.r1 - 1, this.y - this.r1 - 1, 2 * this.r1 + 2, 2 * this.r1 + 2);
	if (force) {
		// forced
		this.terminate = true;
		return true;
	}
	if (this.y - this.r1 > this.rainyday.h) {
		// over the bottom edge, stop the thread
		return true;
	}
	if ((this.x - this.r1 > this.rainyday.w) || (this.x + this.r1 < 0)) {
		// over the right or left edge, stop the thread
		return true;
	}
	return false;
};

/**
 * Moves the raindrop to a new position according to the gravity.
 */
Drop.prototype.animate = function() {
	if (this.terminate) {
		return false;
	}
	var stopped = this.rainyday.gravity(this);
	if (!stopped && this.rainyday.trail) {
		this.rainyday.trail(this);
	}
	if (this.rainyday.VARIABLE_COLLISIONS) {
		var collisions = this.rainyday.matrix.update(this, stopped);
		if (collisions) {
			this.rainyday.collision(this, collisions);
		}
	}
	return !stopped || this.terminate
};

/**
 * Merge linepoints with another drop
 * @param drop the other drop
 */
Drop.prototype.merge = function(drop) {

};

/**
 * TRAIL function: no trail at all
 * @param drop raindrop object
 */
RainyDay.prototype.TRAIL_NONE = function(drop) {
	// nothing going on here
};

/**
 * TRAIL function: trail of small drops (default)
 * @param drop raindrop object
 */
RainyDay.prototype.TRAIL_DROPS = function(drop) {
	if (!drop.trail_y || drop.y - drop.trail_y >= Math.random() * 10 * drop.r1) {
		drop.trail_y = drop.y;
		this.putDrop(new Drop(this, drop.x, drop.y - drop.r1 - 5, 0, Math.ceil(drop.r1 / 5)));
	}
};

/**
 * TRAIL function: trail of unblurred image
 * @param drop raindrop object
 */
RainyDay.prototype.TRAIL_SMUDGE = function(drop) {
	var context = this.canvas.getContext('2d');
	var y = drop.y - drop.r1 - 2;
	var x = drop.x - drop.r2 + (Math.random() * 2);
	if (y < 0 || x < 0) {
		return;
	}
	var w = drop.r2;

	this.context.drawImage(this.img,
		// coordinates of source image
		(x * this.img.width) / this.w, (y * this.img.height) / this.h, w, 2,
		// destination
		x, y, w, 2);
};

/**
 * GRAVITY function: no gravity at all
 * @param drop raindrop object
 * @returns true if the animation is stopped
 */
RainyDay.prototype.GRAVITY_NONE = function(drop) {
	return true;
};

/**
 * GRAVITY function: linear gravity
 * @param drop raindrop object
 * @returns true if the animation is stopped
 */
RainyDay.prototype.GRAVITY_LINEAR = function(drop) {
	if (this.clearDrop(drop)) {
		return true;
	}

	if (drop.yspeed) {
		drop.yspeed += this.PRIVATE_GRAVITY_FORCE_FACTOR_Y * Math.floor(drop.r1);
		drop.xspeed += this.PRIVATE_GRAVITY_FORCE_FACTOR_X * Math.floor(drop.r1);
	} else {
		drop.yspeed = this.PRIVATE_GRAVITY_FORCE_FACTOR_Y;
		drop.xspeed = this.PRIVATE_GRAVITY_FORCE_FACTOR_X;
	}

	drop.y += drop.yspeed;
	drop.draw();
	return false;
};

/**
 * GRAVITY function: non-linear gravity (default)
 * @param drop raindrop object
 * @returns true if the animation is stopped
 */
RainyDay.prototype.GRAVITY_NON_LINEAR = function(drop) {
	if (this.clearDrop(drop)) {
		return true;
	}

	if (drop.collided) {
		drop.collided = false;
		drop.seed = Math.floor(drop.r1 * Math.random() * this.VARIABLE_FPS);
		drop.skipping = false;
		drop.slowing = false;
	} else if (!drop.seed || drop.seed < 0) {
		drop.seed = Math.floor(drop.r1 * Math.random() * this.VARIABLE_FPS);
		drop.skipping = drop.skipping == false ? true : false;
		drop.slowing = true;
	}

	drop.seed--;

	if (drop.yspeed) {
		if (drop.slowing) {
			drop.yspeed /= 1.1;
			drop.xspeed /= 1.1;
			if (drop.yspeed < this.PRIVATE_GRAVITY_FORCE_FACTOR_Y) {
				drop.slowing = false;
			}

		} else if (drop.skipping) {
			drop.yspeed = this.PRIVATE_GRAVITY_FORCE_FACTOR_Y;
			drop.xspeed = this.PRIVATE_GRAVITY_FORCE_FACTOR_X;
		} else {
			drop.yspeed += 1 * this.PRIVATE_GRAVITY_FORCE_FACTOR_Y * Math.floor(drop.r1);
			drop.xspeed += 1 * this.PRIVATE_GRAVITY_FORCE_FACTOR_X * Math.floor(drop.r1);
		}
	} else {
		drop.yspeed = this.PRIVATE_GRAVITY_FORCE_FACTOR_Y;
		drop.xspeed = this.PRIVATE_GRAVITY_FORCE_FACTOR_X;
	}

	if (this.VARIABLE_GRAVITY_ANGLE_VARIANCE != 0) {
		drop.xspeed += ((Math.random() * 2 - 1) * this.VARIABLE_GRAVITY_ANGLE_VARIANCE);
	}

	drop.y += drop.yspeed;
	drop.x += drop.xspeed;

	drop.draw();
	return false;
};

/**
 * REFLECTION function: no reflection at all
 * @param drop raindrop object
 */
RainyDay.prototype.REFLECTION_NONE = function(drop) {
	this.context.fillStyle = this.VARIABLE_FILL_STYLE;
	this.context.fill();
};

/**
 * REFLECTION function: miniature reflection (default)
 * @param drop raindrop object
 */
RainyDay.prototype.REFLECTION_MINIATURE = function(drop) {
	// this maps the area of size (REFLECTION_DROP_MAPPING_WIDTH * 2, REFLECTION_DROP_MAPPING_HEIGHT * 2)
	// around point (drop.x, drop.y) into the drop area
	var sx = Math.max((drop.x - this.REFLECTION_DROP_MAPPING_WIDTH) / this.REFLECTION_SCALEDOWN_FACTOR, 0);
	var sy = Math.max((drop.y - this.REFLECTION_DROP_MAPPING_HEIGHT) / this.REFLECTION_SCALEDOWN_FACTOR, 0);
	var sw = Math.min(this.REFLECTION_DROP_MAPPING_WIDTH * 2 / this.REFLECTION_SCALEDOWN_FACTOR, this.reflected.width - sx);
	var sh = Math.min(this.REFLECTION_DROP_MAPPING_HEIGHT * 2 / this.REFLECTION_SCALEDOWN_FACTOR, this.reflected.height - sy);
	this.context.drawImage(this.reflected,
		// coordinates of source image
		sx, sy, sw, sh,
		// destination
		drop.x - drop.r1,
		drop.y - drop.r1,
		drop.r1 * 2,
		drop.r1 * 2);
};

/**
 * COLLISION function: default collision implementation
 * @param drop one of the drops colliding
 * @param colllisions list of potential collisions
 */
RainyDay.prototype.COLLISION_SIMPLE = function(drop, collisions) {
	var item = collisions;
	var drop2;
	while (item != null) {
		var p = item.drop;
		if (Math.sqrt(Math.pow(drop.x - p.x, 2) + Math.pow(drop.y - p.y, 2)) < (drop.r1 + p.r1)) {
			drop2 = p;
			break;
		}
		item = item.next;
	}

	if (!drop2) {
		return;
	}

	// rename so that we're dealing with low/high drops
	var higher, lower;
	if (drop.y > drop2.y) {
		higher = drop;
		lower = drop2;
	} else {
		higher = drop2;
		lower = drop;
	}

	this.clearDrop(lower);
	// force stopping the second drop
	this.clearDrop(higher, true);
	lower.draw();

	// combine linepoints
	higher.merge(lower);

	lower.r1 = 0.8 * Math.sqrt((lower.r1 * lower.r1) + (higher.r2 * higher.r2));
	lower.r2 = 0.8 * lower.r1;
	lower.collided = true;
};

var mul_table = [
	512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512,
	454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512,
	482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456,
	437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512,
	497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328,
	320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456,
	446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
	329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512,
	505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405,
	399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328,
	324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271,
	268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456,
	451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388,
	385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
	332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
	289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259
];

var shg_table = [
	9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
	17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
	19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
	20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
	21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
	21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
	22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
	22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
	23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
	23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
	23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
	23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
	24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
	24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
	24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
	24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24
];

/**
 * Resizes canvas, draws original image and applies bluring algorithm.
 * @param width width of the canvas
 * @param height height of the canvas
 */
RainyDay.prototype.prepareBackground = function(width, height) {
	if (width && height) {
		this.canvas.style.width = width + "px";
		this.canvas.style.height = height + "px";
		this.canvas.width = width;
		this.canvas.height = height;
	} else {
		width = this.canvas.width;
		height = this.canvas.height;
	}

	this.background = document.createElement('canvas');
	this.background.width = this.canvas.width;
	this.background.height = this.canvas.height;

	var context = this.background.getContext("2d");
	context.clearRect(0, 0, width, height);
	context.drawImage(this.img, 0, 0, width, height);

	if (isNaN(this.blurRadius) || this.blurRadius < 1) return;

	this.stackBlurCanvasRGB(0, 0, width, height, this.blurRadius);
};

/**
 * Implements the Stack Blur Algorithm (@see http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html).
 * @param top_x x of top-left corner of the blurred rectangle
 * @param top_y y of top-left corner of the blurred rectangle
 * @param width width of the canvas
 * @param height height of the canvas
 * @param radius blur radius
 */
RainyDay.prototype.stackBlurCanvasRGB = function(top_x, top_y, width, height, radius) {
	radius |= 0;

	var context = this.background.getContext("2d");
	var imageData = context.getImageData(top_x, top_y, width, height);

	var pixels = imageData.data;

	var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
		r_out_sum, g_out_sum, b_out_sum,
		r_in_sum, g_in_sum, b_in_sum,
		pr, pg, pb, rbs;

	var div = radius + radius + 1;
	var w4 = width << 2;
	var widthMinus1 = width - 1;
	var heightMinus1 = height - 1;
	var radiusPlus1 = radius + 1;
	var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

	var stackStart = new BlurStack();
	var stack = stackStart;
	for (i = 1; i < div; i++) {
		stack = stack.next = new BlurStack();
		if (i == radiusPlus1) var stackEnd = stack;
	}
	stack.next = stackStart;
	var stackIn = null;
	var stackOut = null;

	yw = yi = 0;

	var mul_sum = mul_table[radius];
	var shg_sum = shg_table[radius];

	for (y = 0; y < height; y++) {
		r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;

		r_out_sum = radiusPlus1 * (pr = pixels[yi]);
		g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
		b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

		r_sum += sumFactor * pr;
		g_sum += sumFactor * pg;
		b_sum += sumFactor * pb;

		stack = stackStart;

		for (i = 0; i < radiusPlus1; i++) {
			stack.r = pr;
			stack.g = pg;
			stack.b = pb;
			stack = stack.next;
		}

		for (i = 1; i < radiusPlus1; i++) {
			p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
			r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
			g_sum += (stack.g = (pg = pixels[p + 1])) * rbs;
			b_sum += (stack.b = (pb = pixels[p + 2])) * rbs;

			r_in_sum += pr;
			g_in_sum += pg;
			b_in_sum += pb;

			stack = stack.next;
		}

		stackIn = stackStart;
		stackOut = stackEnd;
		for (x = 0; x < width; x++) {
			pixels[yi] = (r_sum * mul_sum) >> shg_sum;
			pixels[yi + 1] = (g_sum * mul_sum) >> shg_sum;
			pixels[yi + 2] = (b_sum * mul_sum) >> shg_sum;

			r_sum -= r_out_sum;
			g_sum -= g_out_sum;
			b_sum -= b_out_sum;

			r_out_sum -= stackIn.r;
			g_out_sum -= stackIn.g;
			b_out_sum -= stackIn.b;

			p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

			r_in_sum += (stackIn.r = pixels[p]);
			g_in_sum += (stackIn.g = pixels[p + 1]);
			b_in_sum += (stackIn.b = pixels[p + 2]);

			r_sum += r_in_sum;
			g_sum += g_in_sum;
			b_sum += b_in_sum;

			stackIn = stackIn.next;

			r_out_sum += (pr = stackOut.r);
			g_out_sum += (pg = stackOut.g);
			b_out_sum += (pb = stackOut.b);

			r_in_sum -= pr;
			g_in_sum -= pg;
			b_in_sum -= pb;

			stackOut = stackOut.next;

			yi += 4;
		}
		yw += width;
	}


	for (x = 0; x < width; x++) {
		g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;

		yi = x << 2;
		r_out_sum = radiusPlus1 * (pr = pixels[yi]);
		g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
		b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

		r_sum += sumFactor * pr;
		g_sum += sumFactor * pg;
		b_sum += sumFactor * pb;

		stack = stackStart;

		for (i = 0; i < radiusPlus1; i++) {
			stack.r = pr;
			stack.g = pg;
			stack.b = pb;
			stack = stack.next;
		}

		yp = width;

		for (i = 1; i <= radius; i++) {
			yi = (yp + x) << 2;

			r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
			g_sum += (stack.g = (pg = pixels[yi + 1])) * rbs;
			b_sum += (stack.b = (pb = pixels[yi + 2])) * rbs;

			r_in_sum += pr;
			g_in_sum += pg;
			b_in_sum += pb;

			stack = stack.next;

			if (i < heightMinus1) {
				yp += width;
			}
		}

		yi = x;
		stackIn = stackStart;
		stackOut = stackEnd;
		for (y = 0; y < height; y++) {
			p = yi << 2;
			pixels[p] = (r_sum * mul_sum) >> shg_sum;
			pixels[p + 1] = (g_sum * mul_sum) >> shg_sum;
			pixels[p + 2] = (b_sum * mul_sum) >> shg_sum;

			r_sum -= r_out_sum;
			g_sum -= g_out_sum;
			b_sum -= b_out_sum;

			r_out_sum -= stackIn.r;
			g_out_sum -= stackIn.g;
			b_out_sum -= stackIn.b;

			p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

			r_sum += (r_in_sum += (stackIn.r = pixels[p]));
			g_sum += (g_in_sum += (stackIn.g = pixels[p + 1]));
			b_sum += (b_in_sum += (stackIn.b = pixels[p + 2]));

			stackIn = stackIn.next;

			r_out_sum += (pr = stackOut.r);
			g_out_sum += (pg = stackOut.g);
			b_out_sum += (pb = stackOut.b);

			r_in_sum -= pr;
			g_in_sum -= pg;
			b_in_sum -= pb;

			stackOut = stackOut.next;

			yi += width;
		}
	}

	context.putImageData(imageData, top_x, top_y);

};

/**
 * Defines a new helper object for Stack Blur Algorithm.
 */

function BlurStack() {
	this.r = 0;
	this.g = 0;
	this.b = 0;
	this.a = 0;
	this.next = null;
}

/**
 * Defines a gravity matrix object which handles collision detection.
 * @param x number of columns in the matrix
 * @param y number of rows in the matrix
 * @param r grid size
 */

function CollisionMatrix(x, y, r) {
	this.resolution = r;
	this.xc = x;
	this.yc = y;
	this.matrix = new Array(x);
	for (var i = 0; i <= (x + 5); i++) {
		this.matrix[i] = Array(y);
		for (var j = 0; j <= (y + 5); ++j) {
			this.matrix[i][j] = new DropItem(null);
		}
	}
}

/**
 * Updates position of the given drop on the collision matrix.
 * @param drop raindrop to be positioned/repositioned
 * @forceDelete if true the raindrop will be removed from the matrix
 * @returns collisions if any
 */
CollisionMatrix.prototype.update = function(drop, forceDelete) {
	if (drop.gid) {
		this.matrix[drop.gmx][drop.gmy].remove(drop);
		if (forceDelete) {
			return null;
		}

		drop.gmx = Math.floor(drop.x / this.resolution);
		drop.gmy = Math.floor(drop.y / this.resolution);
		this.matrix[drop.gmx][drop.gmy].add(drop);

		var collisions = this.collisions(drop);
		if (collisions && collisions.next != null) {
			return collisions.next;
		}
	} else {
		drop.gid = Math.random().toString(36).substr(2, 9);
		drop.gmx = Math.floor(drop.x / this.resolution);
		drop.gmy = Math.floor(drop.y / this.resolution);
		this.matrix[drop.gmx][drop.gmy].add(drop);
	}
	return null;
};

/**
 * Looks for collisions with the given raindrop.
 * @param drop raindrop to be checked
 * @returns list of drops that collide with it
 */
CollisionMatrix.prototype.collisions = function(drop) {
	var item = new DropItem(null);
	var first = item;

	item = this.addAll(item, drop.gmx - 1, drop.gmy + 1);
	item = this.addAll(item, drop.gmx, drop.gmy + 1);
	item = this.addAll(item, drop.gmx + 1, drop.gmy + 1);

	return first;
};

/**
 * Appends all found drop at a given location to the given item.
 * @param to item to which the results will be appended to
 * @param x x position in the matrix
 * @param y y position in the matrix
 * @returns last discovered item on the list
 */
CollisionMatrix.prototype.addAll = function(to, x, y) {
	if (x > 0 && y > 0 && x < this.xc && y < this.yc) {
		var items = this.matrix[x][y];
		while (items.next != null) {
			items = items.next;
			to.next = new DropItem(items.drop);
			to = to.next;
		}
	}
	return to;
};

/**
 * Defines a linked list item.
 */

function DropItem(drop) {
	this.drop = drop;
	this.next = null;
}

/**
 * Adds the raindrop to the end of the list.
 * @param drop raindrop to be added
 */
DropItem.prototype.add = function(drop) {
	var item = this;
	while (item.next != null) {
		item = item.next;
	}
	item.next = new DropItem(drop);
};

/**
 * Removes the raindrop from the list.
 * @param drop raindrop to be removed
 */
DropItem.prototype.remove = function(drop) {
	var item = this;
	var prevItem = null;
	while (item.next != null) {
		prevItem = item;
		item = item.next;
		if (item.drop.gid == drop.gid) {
			prevItem.next = item.next;
		}
	}
};