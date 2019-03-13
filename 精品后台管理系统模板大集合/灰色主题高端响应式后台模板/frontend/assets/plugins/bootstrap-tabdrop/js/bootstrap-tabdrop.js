/* =========================================================
 * bootstrap-tabdrop.js 
 * http://www.eyecon.ro/bootstrap-tabdrop
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
!function( $ ) {

	var WinReszier = (function(){
		var registered = [];
		var inited = false;
		var timer;
		var resize = function(ev) {
			clearTimeout(timer);
			timer = setTimeout(notify, 100);
		};
		var notify = function() {
			for(var i=0, cnt=registered.length; i<cnt; i++) {
				registered[i].apply();
			}
		};
		return {
			register: function(fn) {
				registered.push(fn);
				if (inited === false) {
					$(window).bind('resize', resize);
					inited = true;
				}
			},
			unregister: function(fn) {
				for(var i=0, cnt=registered.length; i<cnt; i++) {
					if (registered[i] == fn) {
						delete registered[i];
						break;
					}
				}
			}
		}
	}());

	var TabDrop = function(element, options) {
		this.element = $(element);
		this.dropdown = $('<li class="dropdown hide pull-right tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#">'+options.text+' </a><ul class="dropdown-menu"></ul></li>')
							.prependTo(this.element);
		if (this.element.parent().is('.tabs-below')) {
			this.dropdown.addClass('dropup');
		}
		WinReszier.register($.proxy(this.layout, this));
		var that = this;
		setTimeout( function () {
			that.layout();
		}, 50);
	};

	TabDrop.prototype = {
		constructor: TabDrop,

		layout: function() {
			var that = this;

			if ($(this.element).closest('.panel-heading').length<1) {
				var collection = [];
				this.dropdown.removeClass('hide');
				this.element
					.append(this.dropdown.find('li'))
					.find('>li')
					.not('.tabdrop')
					.each(function(){
						if(this.offsetTop > 0) {
							collection.push(this);
						}
					});
				if (collection.length > 0) {
					collection = $(collection);
					this.dropdown
						.find('ul')
						.empty()
						.append(collection);
					if (this.dropdown.find('.active').length == 1) {
						this.dropdown.addClass('active');
					} else {
						this.dropdown.removeClass('active');
					}
				} else {
					this.dropdown.addClass('hide');
				}
				return;
			}

			var collection = [];
			this.dropdown.removeClass('hide');

			// haxoring
			var dropdownEnabled = false;

			var lis = this.element
				.append(this.dropdown.find('li'))
				.find('>li')
				.not('.tabdrop');
				// .each(function(){
				// 	if(this.offsetTop > 0 || $(that.element)[0].offsetTop > 5) {
				// 		// collection.push(this);
				// 		that.dropdown
				// 			.find('ul')
				// 			.append(this);
				// 		dropdownEnabled = true;
				// 	}
				// });
			var headerItems = $(this.element).closest('.panel-heading').children();
			var childrenPushedDown = false;
			for (var i1 = headerItems.length - 1; i1 >= 0; i1--) {
				if (headerItems[i1].offsetTop > 40)
					childrenPushedDown = true;
			};

			for (var i = lis.length - 1; i >= 0; i--) {
				if (lis[i].offsetTop > 0 || $(that.element)[0].offsetTop > 5 || childrenPushedDown) {
					that.dropdown
						.find('ul')
						.append(lis[i]);

					childrenPushedDown = false;
					for (var i2 = headerItems.length - 1; i2 >= 0; i2--) {
						if (headerItems[i2].offsetTop > 5)
							childrenPushedDown = true;
					};
					dropdownEnabled = true;
				}
			};

			// if (collection.length > 0) {
			// 	collection = $(collection);
			// 	this.dropdown
			// 		.find('ul')
			// 		.empty()
			// 		.append(collection);
			// } else {
			// 	this.dropdown.addClass('hide');
			// }
			// moar haxoring ._.
			if (this.dropdown.find('.active').length == 1) {
				this.dropdown.addClass('active');
			} else {
				this.dropdown.removeClass('active');
			}
			if (dropdownEnabled)
				this.dropdown.removeClass('hide');
			else
				this.dropdown.addClass('hide');
		}
	}

	$.fn.tabdrop = function ( option ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('tabdrop'),
				options = typeof option === 'object' && option;
			if (!data)  {
				$this.data('tabdrop', (data = new TabDrop(this, $.extend({}, $.fn.tabdrop.defaults,options))));
			}
			if (typeof option == 'string') {
				data[option]();
			}
		})
	};

	$.fn.tabdrop.defaults = {
		text: '<i class="fa fa-angle-down"></i>'
	};

	$.fn.tabdrop.Constructor = TabDrop;

}( window.jQuery );