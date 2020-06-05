!function($) {
	var ScrOoly = function(content, opts) {
		var self = this;
		this.opts = opts;
		this.$element = $(content);
		this.$element.wrap('<div />');
		this.isMoving = false;
		this.visibleTrack = {
			h: false,
			v: false
		};
		this.$wrapper = this.$element.parent().css({
			position: 'relative',
			overflow: 'hidden'
		}).attr({
			'class' : this.$element.attr('class'),
			'id' : this.$element.attr('id'),
			'style' : this.$element.attr('style')
		}).data('scrooly', this);
		this.$element.attr('class', 'scr_content').removeAttr('id').removeAttr('style');
		this.$element = $('.scr_content', this.$wrapper).css({
			position: 'absolute',
			top: 0,
			left: 0,
			width: 'auto',
			height: 'auto'
		});
		this.$wrapper.append('<div class="scr_track scr_trackV"><div class="scr_drag" /></div><div class="scr_track scr_trackH"><div class="scr_drag" /></div>');
		$('.scr_drag, .scr_track', this.$wrapper).css('position', 'absolute');
		$('.scr_drag', this.$wrapper).css({
			top: 0,
			left: 0
		});
		$('.scr_track', self.$wrapper).css('opacity', (!this.opts.visible ? 0 : this.opts.opacity));
		this.$trackV = $('.scr_trackV', this.$wrapper).css({
			top: 0,
			right: 0
		})
		this.dragV = $('.scr_drag', this.$trackV);
		this.$trackH = $('.scr_trackH', this.$wrapper).css({
			bottom: 0,
			left: 0
		});
		this.dragH = $('.scr_drag', this.$trackH);
		this.$wrapper.on({
			mouseenter: function() {
				self._toggleTracks(self.opts.opacity);
			},
			mouseleave: function() {
				self._toggleTracks(0);
			},
			mousewheel: function(event) {
				var e = event.originalEvent ? event.originalEvent : event;
				self._scroll(e.wheelDelta / 120, e.wheelDeltaX, e.shiftKey);
				return false;
			},
			DOMMouseScroll: function (event) {
				var e = event.originalEvent ? event.originalEvent : event;
				self._scroll(-e.detail / 3, false, e.shiftKey);
				return false;	
			},
			touchstart: function(event) {
				var e = event.originalEvent;
				self.previousMove = e.targetTouches[0];
				self.moveDrag = true;
				self._toggleTracks(self.opts.opacity);
			},
			touchmove: function(event) {
				event.preventDefault();
				var e = event.originalEvent;
				self._$drag = self.$trackV;
				self.move(self.previousMove, e.targetTouches[0]);
				self._$drag = self.$trackH;
				self.move(self.previousMove, e.targetTouches[0]);
				self.previousMove = {
					pageX : e.targetTouches[0].pageX,
					pageY : e.targetTouches[0].pageY
				};
			},
			touchend: function() {
				self.moveDrag = false;
				self._toggleTracks(0);
			}
		});
		$('.scr_drag', this.$wrapper).on({
			mousedown: function(e) {
				e.preventDefault();
				self.moveDrag = true;
				self.previousMove = e;
				self._$drag = $(this).parent();
			},
			mouseenter: function() {
				$(this).addClass('scr_hover');
			},
			mouseleave: function() {
				$(this).removeClass('scr_hover');
			}
		});
		$(document).on({
			mouseup: function() {
				self.moveDrag = false;
				$('.scr_drag', self._$drag).removeClass('scr_moving');
			},
			mousemove: function(e) {
				if (self.moveDrag) {
					self.move(e, self.previousMove);
					self.previousMove = e;
					$('.scr_drag', self._$drag).addClass('scr_moving');
				}
			}
		});
		$(window).on('resize', function () {
			self.resize();
		}).trigger('resize');
	};
	ScrOoly.prototype = {
		_scroll: function (delta, x, shift) {
			this._$drag = shift || x ? this.$trackH : this.$trackV;
			this.move((delta < 0 ? 1 : -1) * this.opts.step, 0);
		},
		_toggleTracks: function (o) {
			if (this.visibleTrack.h) 
				this.$trackH.stop().animate({
					opacity: o
				}, this.opts.speed);
			if (this.visibleTrack.v) 
				this.$trackV.stop().animate({
					opacity: o
				}, this.opts.speed);
		},
		resize: function () {
			this.height = this.$wrapper.height() - this.$trackH.outerHeight(true);
			this.width = this.$wrapper.width() - this.$trackV.outerWidth(true);
			this.$trackV.height(this.height);
			var $eh = this.$element.height(),
				$ew = this.$element.width(),
				h = Math.ceil(this.height * this.height / $eh),
				w = Math.ceil(this.width * this.width / $ew);
			if (h > this.height) h = this.height;
			if (w > this.width) w = this.width;
			this.visibleTrack = {
				v: !(h == this.height),
				h: !(w == this.width)
			};
			this.ratio = {
				v: this.height / $eh,
				h: this.width / $ew
			};
			this.dragV.height(h);
			this.dragH.width(w);
			this.maxT = this.height - h;
			this.maxL = this.width - w;
		},
		move: function (a, b) {
			var $drag = $('.scr_drag', this._$drag).eq(0);
			if (this._$drag.hasClass('scr_trackV')) {
				if (this.moveDrag) {
					a = a.pageY;
					b = b.pageY;
				}
				var t = parseInt($drag.css('top'));
				t += a - b;
				if (t > this.maxT) t = this.maxT;
				if (t < 0) t = 0;
				$drag.css('top', t);
				this.$element.css('top', Math.ceil(-t / this.ratio.v));
			} else {
				var t = parseInt($drag.css('left'));
				if (this.moveDrag) {
					a = a.pageX;
					b = b.pageX;
				}
				t += a - b;
				if (t > this.maxL) t = this.maxL;
				if (t < 0) t = 0;
				$drag.css('left', t);
				this.$element.css('left', Math.ceil(-t / this.ratio.h));
			}
		}
	};
	$.fn.scrooly = function(option) {
		return this.each(function() {
			var $this = $(this), 
				data = $this.data('scrooly'), 
				opts = $.extend({}, $.fn.scrooly.defaults, $this.data(), typeof option == 'object' && option);
			if (!data)
				$this.data('scrooly', ( data = new ScrOoly(this, opts)));
			if ( typeof option == 'string')
				data[option]();
		})
	};
	$.fn.scrooly.defaults = {
		step: 15,
		opacity: 0.5,
		speed: 200
	};
}(window.jQuery);