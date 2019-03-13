/* =========================================================
 * bootstrap-datepaginator.js
 * =========================================================
 * Copyright 2013 Jonathan Miles 
 * Project URL : http://www.jonathandanielmiles.com/bootstrap-datepaginator
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

;(function($, window, document, undefined) {

	'use strict';

	var pluginName = 'datepaginator';

	var DatePaginator = function(element, options) {
		this._element = element;
		this.$element = $(element);
		this._init(options);
	}

	DatePaginator.defaults = {
		fillWidth: true,
		highlightSelectedDate: true,
		highlightToday: true,
		hint: 'dddd, Do MMMM YYYY',
		injectStyle: true,
		itemWidth: 35,
		navItemWidth: 20,
		offDays: 'Sat,Sun',
		offDaysFormat: 'ddd',
		onSelectedDateChanged: null,
		selectedDate: moment().clone().startOf('day'),
		selectedDateFormat: 'YYYY-MM-DD',
		selectedItemWidth: 140,
		showCalendar: true,
		showOffDays: true, 
		showStartOfWeek: true,
		size: undefined,
		startOfWeek: 'Mon',
		startOfWeekFormat: 'ddd',
		squareEdges: false,
		text: 'ddd<br/>Do',
		textSelected: 'dddd<br/>Do, MMMM YYYY',
		useBootstrap2: false,
		width: 0,
	}

	DatePaginator.prototype = {

		setSelectedDate: function(date, format) {
			this._setSelectedDate(moment(date, format ? format : this.options.selectedDateFormat));
			this._render();
		},

		remove: function() {

			// Cleanup dom and remove events
			this._destroy();

			// Only remove data if user initiated
			$.removeData(this, 'plugin_' + pluginName);
		},

		_init: function(options) {

			this.options = $.extend({}, DatePaginator.defaults, options);

			// If no width provided, default to fill full width
			// this.options.width = this.options.width ? this.options.width : this.$element.width();
			if (this.options.width) { 
				this.options.fillWidth = false;
			}
			else {
				this.options.width = this.$element.width();
				this.options.fillWidth = true;
			}

			// Set the initially selected date, overridding the default value of today
			if (typeof this.options.selectedDate === 'string') {
				this.options.selectedDate = moment(this.options.selectedDate, this.options.selectedDateFormat).clone().startOf('day');
			}

			// Parse and nomalize size options
			if (this.options.size === 'small') {
				this.options.size = 'sm';
			}
			else if (this.options.size === 'large') {
				this.options.size = 'lg';
			}

			this._destroy();
			this._subscribeEvents();
			this._render();
		},

		_unsubscribeEvents: function() {

			// $(window).off(); // TODO Turns off all resize events not just the one being destroyed
			this.$element.off('click');
			this.$element.off('selectedDateChanged');
		},

		_subscribeEvents: function() {

			this._unsubscribeEvents();

			this.$element.on('click', $.proxy(this._clickedHandler, this));

			if (typeof (this.options.onSelectedDateChanged) === 'function') {
				this.$element.on("selectedDateChanged", this.options.onSelectedDateChanged);
			}

			if (this.options.fillWidth) {
				$(window).on('resize', $.proxy(this._resize, this));
			}
		},

		_destroy: function() {

			if (this.initialized) {

				// Cleanup dom
				if (this.$calendar) {
					this.$calendar.datepicker('remove');	
				}
				this.$wrapper.remove();
				this.$wrapper = null;
				// this.$element.remove();

				// Switch off events
				this._unsubscribeEvents();
			}

			// Reset flag
			this.initialized = false;
		},

		_clickedHandler: function(event) {
			event.preventDefault();
			var target = $(event.target);
			var classList = target.attr('class');
			if (classList.indexOf('dp-nav-left') != -1) {
				this._back();
			}
			else if (classList.indexOf('dp-nav-right') != -1) {
				this._forward();
			}
			else if (classList.indexOf('dp-item') != -1) {
				this._select(target.attr('data-moment'));
			}
		},

		_setSelectedDate: function(selectedDate) {

			if (false === selectedDate.isSame(this.options.selectedDate)) {
				this.options.selectedDate = selectedDate.startOf('day');
				this.$element.trigger("selectedDateChanged", [selectedDate.clone()]);
			}			
		},

		_back: function() {
			this._setSelectedDate(this.options.selectedDate.clone().subtract('day', 1));
			this._render();
		},

		_forward: function() {
			this._setSelectedDate(this.options.selectedDate.clone().add('day', 1));
			this._render();
	    },

	    _select: function(date) {
	    	this._setSelectedDate(moment(date, this.options.selectedDateFormat));
      		this._render();
	    },

	    _calendarSelect: function(event) {
			this._setSelectedDate(moment(event.date));
      		this._render();
		},

		_resize: function() {
			this.options.width = this.$element.width();
			this._render();
		},

		_render: function() {

			var self = this;

			if (!this.initialized) {

				// Setup first time only components, reused on later _renders
				this.$element
					.addClass(this.options.useBootstrap2 ? 'pagination' : '')
					.removeClass('datepaginator datepaginator-sm datepaginator-lg')
					.addClass(this.options.size === 'sm' ? 'datepaginator-sm' : this.options.size === 'lg' ? 'datepaginator-lg' : 'datepaginator');
				this.$wrapper = $(this._template.list);
				this.$leftNav = $(this._template.listItem)
					.append($(this._template.navItem)
						.addClass('dp-nav-left')
						.addClass(this.options.size === 'sm' ? 'dp-nav-sm' : this.options.size === 'lg' ? 'dp-nav-lg' : '')
						.addClass(this.options.squareEdges ? 'dp-nav-square-edges' : '')
						.append($(this._template.icon)
							.addClass('fa-angle-left')
							.addClass('dp-nav-left'))
						.width(this.options.navItemWidth)
					);
				this.$rightNav = $(this._template.listItem)
					.append($(this._template.navItem)
						.addClass('dp-nav-right')
						.addClass(this.options.size === 'sm' ? 'dp-nav-sm' : this.options.size === 'lg' ? 'dp-nav-lg' : '')
						.addClass(this.options.squareEdges ? 'dp-nav-square-edges' : '')
						.append($(this._template.icon)
							.addClass('fa-angle-right')
							.addClass('dp-nav-right'))
						.width(this.options.navItemWidth)
					);
				this.$calendar = this.options.showCalendar ? $(this._template.calendar) : undefined;
				this._injectStyle();
				this.initialized = true;
			}
			else {

				// Remove datepicker from DOM
				if (this.$calendar) {
					this.$calendar.datepicker('remove');
				}
			}

			// Piece together DOM elements
			this.$element.empty().append(this.$wrapper.empty());
			this.$wrapper.append(this.$leftNav);
			$.each(this._buildData(), function(id, data) {

				var $a = $(self._template.dateItem)
					.attr('data-moment', data.m)
					.attr('title', data.hint)
					.width(data.itemWidth);

				if (data.isSelected && self.options.highlightSelectedDate) { 
					$a.addClass('dp-selected'); 
				}
				if (data.isToday && self.options.highlightToday) { 
					$a.addClass('dp-today'); 
				}
				if (data.isStartOfWeek && self.options.showStartOfWeek) { 
					$a.addClass('dp-divider'); 
				}
				if (data.isOffDay && self.options.showOffDays) { 
					$a.addClass('dp-off'); 
				}
				if (data.isSelected && self.options.showCalendar) { 
					$a.append(self.$calendar); 
				}
				if (self.options.size === 'sm') { 
					$a.addClass('dp-item-sm');
				}
				else if (self.options.size === 'lg') {
					$a.addClass('dp-item-lg');
				}
				$a.append(data.text);

				self.$wrapper.append($(self._template.listItem).append($a));
			});
			this.$wrapper.append(this.$rightNav);

			// Add datepicker and setup event handling
			if (this.$calendar) {
				this.$calendar
					.datepicker({
						autoclose: true,
						forceParse: true,
						startView: 0, //2
						minView: 0, //2
						// todayBtn: true,
						todayHighlight: true//,
						// initialDate: this.options.selectedDate.toDate()
			        })
			        .datepicker('update', this.options.selectedDate.toDate())
			        .on('changeDate', $.proxy(this._calendarSelect, this));
			}
		},

		_injectStyle: function() {
			// Make sure we only add it once
			if (this.options.injectStyle && !document.getElementById('bootstrap-datepaginator-style')) {
				$("<style type='text/css' id='bootstrap-datepaginator-style'> " + this._css + " </style>").appendTo("head");
			}
		},

		_buildData: function() {

			var viewWidth = (this.options.width - ((this.options.selectedItemWidth - this.options.itemWidth) + (this.options.navItemWidth * 2))), 
				units = Math.floor(viewWidth / this.options.itemWidth),
				unitsPerSide = parseInt(units / 2),
				adjustedItemWidth = Math.floor(viewWidth / units),
				adjustedSelectedItemWidth = Math.floor(this.options.selectedItemWidth + (viewWidth - (units * adjustedItemWidth))),
				today = moment().startOf('day'),
				start = this.options.selectedDate.clone().subtract('days', unitsPerSide),
				end = this.options.selectedDate.clone().add('days', (units - unitsPerSide)),
				data = new Array();

			for (var m = start; m.isBefore(end); m.add('days', 1)) {
				data[data.length] = { 
					m: m.clone().format(this.options.selectedDateFormat),
					isSelected: (m.isSame(this.options.selectedDate)) ? true : false,
					isToday: (m.isSame(today)) ? true : false,
					isOffDay: (this.options.offDays.split(",").indexOf(m.format(this.options.offDaysFormat)) !== -1) ? true : false,
					isStartOfWeek: (this.options.startOfWeek.split(",").indexOf(m.format(this.options.startOfWeekFormat)) !== -1) ? true : false, 
					text: (m.isSame(this.options.selectedDate)) ? m.format(this.options.textSelected) : m.format(this.options.text),
					hint: m.format(this.options.hint),
					itemWidth: (m.isSame(this.options.selectedDate)) ? adjustedSelectedItemWidth : adjustedItemWidth
				};
			}

			return data;
		},

		_template: {
			list: '<ul class="pagination"></ul>',
			listItem: '<li></li>',
			navItem: '<a href="#" class="dp-nav"></a>',
			dateItem: '<a href="#" class="dp-item"></a>',
			icon: '<i class="fa"></i>',
			calendar: '<i id="dp-calendar" class="fa fa-calendar"></i>'
		},

		_css: '.datepaginator{font-size:12px;height:60px}.datepaginator-sm{font-size:10px;height:40px}.datepaginator-lg{font-size:14px;height:80px}.pagination{margin:0;padding:0;white-space:nowrap}.dp-nav{height:60px;padding:22px 0!important;width:20px;margin:0!important;text-align:center}.dp-nav-square-edges{border-radius:0!important}.dp-item{height:60px;padding:13px 0!important;width:35px;margin:0!important;border-left-style:hidden!important;text-align:center}.dp-item-sm{height:40px!important;padding:5px!important}.dp-item-lg{height:80px!important;padding:22px 0!important}.dp-nav-sm{height:40px!important;padding:11px 0!important}.dp-nav-lg{height:80px!important;padding:33px 0!important}a.dp-nav-right{border-left-style:hidden!important}.dp-divider{border-left:2px solid #ddd!important}.dp-off{background-color:#F0F0F0!important}.dp-today{background-color:#88B5DB!important;color:#fff!important}.dp-selected{background-color:#428bca!important;color:#fff!important;width:140px}#dp-calendar{padding:3px 5px 0 0!important;position:absolute;right:0;top:10}'
	};

	var logError = function(message) {
        if(window.console) {
            window.console.error(message);
        }                                   
    };

	// Prevent against multiple instantiations,
	// handle updates and method calls
	$.fn[pluginName] = function(options, args) {
		return this.each(function() {
			var self = $.data(this, 'plugin_' + pluginName);
			if (typeof options === 'string') {
				if (!self) {
					logError("Not initialized, can not call method : " + options);
				}
				else if (!$.isFunction(self[options]) || options.charAt(0) === '_') {
					logError("No such method : " + options);
				}
				else {
					if (typeof args === 'string') {
						args = [args];
					}
					self[options].apply(self, args);
				}
			} 
			else {
				if (!self) {
					$.data(this, 'plugin_' + pluginName, new DatePaginator(this, options));
				}
				else {
					self._init(options);
				}	
			}
		});
	}

	// Don't break the chain
	// return this;

})(jQuery, window, document);	