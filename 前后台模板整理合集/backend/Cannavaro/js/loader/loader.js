(function ($, window, document, undefined) {
	'use strict';

	var pluginName = "loader",
			defaults = {
				progress: 0,
				frontSpeed: 0.021,
				frontColor: 'green',
				frontOpacity: 0.5,
				backSpeed: 0.025,
				backColor: 'green',
				backOpacity: 0.2
			},
			requestAnimationFrame = (function () {
				var vendors = ['ms', 'moz', 'webkit', 'o'],
						raf = null,
						lastTime = 0;

				for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
					raf = window[vendors[x] + 'RequestAnimationFrame'];
				}

				if (!raf) {
					raf = function (callback, element) {
						var currTime = new Date().getTime(),
								timeToCall = Math.max(0, 16 - (currTime - lastTime)),
								id = window.setTimeout(function () {
											callback(currTime + timeToCall);
										},
										timeToCall);

						lastTime = currTime + timeToCall;

						return id;
					};
				}

				return raf;
			}()),
			cancelAnimationFrame = (function () {
				var vendors = ['ms', 'moz', 'webkit', 'o'],
						caf = null;

				for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
					caf = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
				}

				if (!caf) {
					caf = function (id) {
						clearTimeout(id);
					};
				}

				return caf;
			}());

	/**
	 * Oscillator class for sine wave generation
	 * @param variation
	 * @param max
	 * @param speed
	 * @param horizon
	 * @constructor
	 */
	function Oscillator(variation, max, speed, horizon) {
		this.variation = variation || 0.1;
		this.max = max || 5;
		this.speed = speed || 0.02;
		this.horizon = horizon || 0;

		this._pt = 0;
		this._max = this._getMax();
	}

	$.extend(Oscillator.prototype, {

		/**
		 * Get next point in sine amplitude
		 * @returns {*} amplitude
		 */
		getAmp: function () {
			this._pt += this.speed;

			if (this._pt >= 2.0) {
				this._pt = 0;
				this._max = this._getMax();
			}

			return (this._max * Math.sin(this._pt * Math.PI)) + this.horizon;
		},

		_getMax: function () {
			return Math.random() * this.max * this.variation + this.max * (1 - this.variation);
		}

	});

	function Plugin(element, options) {
		this.element = element;
		this.$el = $(element);
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;

		this._width = this.$el.width();
		this._height = this.$el.height();

		this.init();
	}

	Plugin.prototype = {

		init: function () {
			var canvas = $('<canvas></canvas>'),
					counter = $('<div></div>', {
						'class': 'counter'
					}),
					STEPS = 20;

			canvas[0].width = this._width;
			canvas[0].height = this._height;

			this._ctx = canvas[0].getContext('2d');
			this._counter = counter;

			this.$el.append(canvas);
			this.$el.append(counter);

			this._frontOscillator = new Oscillator();
			this._backOscillator = new Oscillator();

			// Config
			this._frontOscillator.speed = this.options.frontSpeed;
			this._frontOscillator.horizon = this.options.progress;
			this._backOscillator.speed = this.options.backSpeed;
			this._backOscillator.horizon = this.options.progress;

			// Points
			this._frontOscillatorPts = new Array(STEPS);
			this._backOscillatorPts = new Array(STEPS);

			// Fill initial points values
			this._fillOscillatorPts(this._frontOscillatorPts, this._frontOscillator);
			this._fillOscillatorPts(this._backOscillatorPts, this._backOscillator);

			this._step = Math.ceil(this._width / (STEPS - 1));

			this._writeProgress(this.options.progress);
			this.animate();
		},

		_fillOscillatorPts: function (pts, oscillator) {
			for (var i = 0, l = pts.length; i < l; i++) {
				pts[i] = oscillator.getAmp();
			}
		},

		_shiftPts: function (pts) {
			for (var i = 0, l = pts.length - 1; i < l; i++) {
				pts[i] = pts[i + 1];
			}
		},

		_draw: function (pts) {
			this._ctx.beginPath();

			// Draw each point
			for (var i = 0, l = pts.length; i < l; i++) {
				this._ctx.lineTo(i * this._step, this._height - pts[i]);
			}

			// Close path to bottom
			this._ctx.lineTo(this._width, this._height);
			this._ctx.lineTo(0, this._height);
			this._ctx.lineTo(0, this._height - pts[0]);

			this._ctx.fill();
		},

		_writeProgress: function (progress) {
			this._counter.text(progress + '%');
		},

		animate: function () {
			// Shift points
			this._shiftPts(this._frontOscillatorPts);
			this._shiftPts(this._backOscillatorPts);

			// Get new points
			this._frontOscillatorPts[this._frontOscillatorPts.length - 1] = this._frontOscillator.getAmp();
			this._backOscillatorPts[this._backOscillatorPts.length - 1] = this._backOscillator.getAmp();

			// Clear canvas
			this._ctx.clearRect(0, 0, this._width, this._height);

			// Draw lines
			this._ctx.globalAlpha = this.options.backOpacity;
			this._ctx.fillStyle = this.options.backColor;
			this._draw(this._backOscillatorPts);
			this._ctx.globalAlpha = this.options.frontOpacity;
			this._ctx.fillStyle = this.options.frontColor;
			this._draw(this._frontOscillatorPts);

			this._animateFrame = requestAnimationFrame($.proxy(this.animate, this));
		},

		setProgress: function (progress) {
			if (progress < 0) {
				progress = 0;
			} else if (progress > 100) {
				progress = 100;
			}

			this._frontOscillator.horizon = progress;
			this._backOscillator.horizon = progress;

			this._writeProgress(progress);
		},

		destroy: function () {
			cancelAnimationFrame(this._animateFrame);
		}
	};

	$.fn[pluginName] = function (options) {
		var args = Array.prototype.slice.call(arguments, 0);

		return this.each(function () {
			var plugin = $.data(this, "plugin_" + pluginName),
					method = null;

			if (!plugin) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			} else if ($.type(args[0]) === 'string' && args[0].charAt(0) !== '_') {
				method = plugin[args[0]];

				if (method) {
					method.apply(plugin, args.slice(1));
				}
			}
		});
	};

})(jQuery, window, document);