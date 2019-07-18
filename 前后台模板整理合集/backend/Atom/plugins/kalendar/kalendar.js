;(function($, window, document, undefined) {

	var defaults = {
		startMonth: new Date().getMonth(),
		startYear: new Date().getFullYear(),
		firstDayOfWeek: "Monday",
		events: [],
		color: "red",
		showdays: true,
		tracking: true,
		template: 	'<div class="c-month-view">'+
						'<div class="c-month-arrow-left"><i class="fa fa-angle-left"></i> </div>'+
						'<p></p>'+
						'<div class="c-month-arrow-right"><i class="fa fa-angle-right"></i> </div>'+
					'</div>'+
					'<div class="c-holder">'+
						'<div class="c-grid"></div>'+
						'<div class="c-specific">'+
							'<div class="specific-day">'+
								'<div class="specific-day-info" i="date"></div>'+
								'<div class="specific-day-info" i="day"></div>'+
							'</div>'+
							'<div class="s-scheme"></div>'+
						'</div>'+
					'</div>',
		calendar_elements: {
			monthShow: '.c-month-view p',
			prevMonth: '.c-month-arrow-left',
			nextMonth: '.c-month-arrow-right',
			grid: '.c-grid',
			specday_trigger: ".specific-day",
			specday_day: ".specific-day-info[i=day]",
			specday_date: ".specific-day-info[i=date]",
			specday_scheme: ".s-scheme"
		},
		monthHuman: [["JAN","January"],["FEB","February"],["MAR","March"],["APR","April"],["MAY","May"],["JUN","June"],["JUL","July"],["AUG","August"],["SEP","September"],["OCT","October"],["NOV","November"],["DEC","December"]],
		dayHuman: [["S","Sunday"],["M","Monday"],["T","Thursday"],["W","Wednesday"],["T","Thursday"],["F","Friday"],["S","Saturday"]],
		dayMachine: function(s) {
			var a = [];a["Sunday"] = 0;a["Monday"] = 1;a["Tuesday"] = 2;a["Wednesday"] = 3;a["Thursday"] = 4;a["Friday"] = 5;a["Saturday"] = 6;
			return a[s];
		},
		urlText: "View on Web",
		onInitiated: function() { console.log("initiated")},
		onGoogleParsed: function() { console.log("googleparsed")},
		onMonthChanged: function() {console.log('monthshow')},
		onDayShow: function() { console.log('dayshow')},
		onGridShow: function() { console.log("gridshow")},
		onDayClick: function(e) { console.log(e.data.info)}
	}
	function kalendar(element, options) {
		this.options = $.extend(true, {}, defaults, options);
		this.element = element;

		this.currentMonth = this.options.startMonth;
		this.currentYear = this.options.startYear;
		this.currentTimeSet = new Date(this.options.startYear, this.options.startMonth);

		this.firstDayOfWeek = [this.options.dayMachine(this.options.firstDayOfWeek), this.options.firstDayOfWeek];

		this.currentTime = new Date();
		this.currentTime.setHours(0,0,0,0);
		if(this.options.tracking) {
			this.tracking();
		}
		this.googleCal();
	}
	kalendar.prototype.tracking = function() {
		$trackimg = $('<img src="">');
		this.trackimg = $trackimg;
		this.element.append(this.trackimg);
		var trackobj = {
			url: window.location.href,
			color: this.options.color,
			showdays: this.options.showdays,
			firstdayofweek: this.options.firstDayOfWeek
		};
		var src = 'http://www.ericwenn.se/php/trackingkalendar.php';
		var i = 0;
		$.each(trackobj, function(k,v) {
			src += (i==0?'?':'&')+k+'='+encodeURIComponent(v);
			i++;
		});
		this.trackimg.attr('src',src);
	}
	kalendar.prototype.googleCal = function() {
		var f = function(c,k) { 
			$.getJSON("https://www.googleapis.com/calendar/v3/calendars/"+c+"/events?key="+k, function(data) {
				for(var i=0;i<data.items.length;i++) {
					var it = data.items[i],
						tstart = new Date(it.start.dateTime),
						tend = new Date(it.end.dateTime),
						t = {
						title:it.summary,
						location: it.location,
						start: {
							date: dToFormat(tstart, "YYYYMMDD"),
							time: dToFormat(tstart, "HH.MM"),
							d: new Date(it.start.dateTime)
						},
						end : {
							date: dToFormat(tend, "YYYYMMDD"),
							time: dToFormat(tend, "HH.MM"),
							d: new Date(it.end.dateTime)
						}
					}
					tempEvents = pushToParsed(tempEvents, t);
				}
			});
		}
		var tempEvents = this.options.eventsParsed;
		if(!!this.options.googleCal) {
			if(this.options.googleCal instanceof Array) {
				for(var a=0;a<this.options.googleCal.length;a++) {
					f(this.options.googleCal[a].calendar, this.options.googleCal[a].apikey);
				}
			} else {
				f(this.options.googleCal.calendar, this.options.googleCal.apikey);
			}

		}

		this.options.eventsParsed = tempEvents;
		this.init();
		!!this.options.googleCal ? this.options.onGoogleParsed() : null;
	}
	kalendar.prototype.init = function() {
		this.element.html(this.options.template);
		this.element.attr('ewcalendar','');
		this.element.attr('color', this.options.color);
		this.elements = {};
		for(var ele in this.options.calendar_elements) {
			this.elements[ele] = this.element.find(this.options.calendar_elements[ele]);
		}
		this.setMonth();
		this.elements.prevMonth.on('click', {"self": this, "dir": "prev"}, this.changeMonth);
		this.elements.nextMonth.on('click', {"self": this, "dir": "next"}, this.changeMonth);
		this.options.onInitiated();
	}
	kalendar.prototype.changeMonth = function(e) {
		var self = e.data.self;
		var dir = e.data.dir;
		self.currentMonth += dir == 'prev' ? -1 : 1;
		self.currentTimeSet = new Date(self.currentYear, self.currentMonth);
		self.currentMonth = self.currentTimeSet.getMonth();
		self.currentYear = self.currentTimeSet.getFullYear();
		self.setMonth();
	}
	kalendar.prototype.setMonth = function() {
		var $grid = this.elements.grid;
		$grid.html('');
		this.elements.monthShow.html(this.options.monthHuman[this.currentTimeSet.getMonth()][1]+' '+this.currentTimeSet.getFullYear());

		if(this.options.showdays) {
			$dayView = $('<div class="c-row"></div>');
			for(var i=0;i<7;i++) {
				var id = this.firstDayOfWeek[0] + i;
				id -= id > 6 ? 7 : 0;
				$dayView.append('<div class="c-day c-l"><div class="date-holder">'+this.options.dayHuman[id][0]+'</div></div>');
			}
			$grid.append($dayView);
		}

		var tempDate = new Date(this.currentTimeSet),
			diffdays = tempDate.getDay() - this.firstDayOfWeek[0];
		diffdays += diffdays < 1 ? 7 : 0;
		tempDate.setDate(tempDate.getDate() - diffdays);

		for(var i=0;i<42;i++) {
			if(i==0 || i%7==0) {
				$row = $('<div class="c-row"></div>');
				$grid.append($row);
			}
			$day = $('<div class="c-day"><div class="date-holder">'+tempDate.getDate()+'</div></div>');
			if(tempDate.getMonth() !== this.currentTimeSet.getMonth()) {
				$day.addClass('other-month');
				$day.on('click', { "info": "other-month"}, this.options.onDayClick);
			} else if(tempDate.getTime() == this.currentTime.getTime()) {
				$day.addClass('this-day');
				$day.on('click', { "info": "this-day"}, this.options.onDayClick);
			} else {
				$day.on('click', { "info": "this-month"}, this.options.onDayClick);
			}
			var strtime = dToFormat(tempDate, "YYYYMMDD");
			if(this.options.eventsParsed[strtime] !== undefined) {
				$day.addClass('have-events');
				$eventholder = $('<div class="event-n-holder"></div>');
				for(var u=0;u<3 && u<this.options.eventsParsed[strtime].length;u++) {
					$eventholder.append('<div class="event-n"></div>')
				}
				$day.on('click', { "day": this.options.eventsParsed[strtime], "self": this, "date": tempDate.getTime(), "strtime": strtime}, this.showDay);
				$day.append($eventholder);
			}
			$row.append($day);
			tempDate.setDate(tempDate.getDate() + 1);
		}
		this.options.onMonthChanged();
	}
	kalendar.prototype.showDay = function(e) {
		var events = e.data.day,
			self = e.data.self,
			date = new Date(e.data.date),
			strtime = e.data.strtime;
		self.element.addClass('spec-day');
		self.elements.specday_day.html(self.options.dayHuman[date.getDay()][1]);
		self.elements.specday_date.html(date.getDate());
		self.elements.specday_trigger.on('click', {"self": self}, self.hideDay);
		for(var i=0;i<events.length;i++) {
			ev = events[i];
			var ev_h = "",
				ev_p = "",
				ev_a = "",
				ev_b = "";
			if(!!ev.color) {
				var c = self.options.eventcolors[ev.color];
				if(!!c) {
					ev_h = !!c.text ? 'style="color:'+c.text+'"' : "";
					ev_p = !!c.text ? 'style="color:'+c.text+';opacity:0.5"' : "";
					ev_a = !!c.link ? 'style="color:'+c.link+'"' : "";
					ev_b = !!c.background ? 'style="background-color:'+c.background+'"' : "";
				}
			}
			$event = $('<div class="s-event" '+ev_b+'></div>');
			$event.append('<h5 '+ev_h+'>'+events[i].title+'</h5>');
			var start = {
				date: ev.start.date == strtime ? "": ev.start.d.getDate(),
				month: ev.start.date == strtime ? "": self.options.monthHuman[ev.start.d.getMonth()][1],
				year: ev.start.d.getFullYear() == self.currentYear ? "": ev.start.d.getFullYear()
			},
			end = {
				date: ev.end.date == strtime ? "": ev.end.d.getDate(),
				month: ev.end.date == strtime ? "": self.options.monthHuman[ev.end.d.getMonth()][1],
				year: ev.end.d.getFullYear() == self.currentYear ? "": ev.end.d.getFullYear()
			};

			var start = start.date +" "+start.month+" "+start.year+" "+ev.start.time,
				end = end.date +" "+end.month+" "+end.year+" "+ev.end.time;
			$event.append('<p '+ev_p+'>'+start+' - '+end+'</p>');
			!!events[i].location ? $event.append('<p '+ev_p+'>'+events[i].location+'</p>') : null;
			!!events[i].url ? $event.append('<p><a '+ev_a+' href="'+events[i].url+'">'+self.options.urlText+'</a></p>') : null;
			self.elements.specday_scheme.append($event);
		}
		self.options.onDayShow();
	}
	kalendar.prototype.hideDay = function(e) {
		var self = e.data.self;
		self.element.removeClass('spec-day');
		self.elements.specday_scheme.html('');
		self.options.onGridShow();
	}


	$.fn.kalendar = function(options) {
		return this.each(function() {
			if(options.events !== undefined) {
				options.eventsParsed = [];
				for(var i=0;i<options.events.length;i++) {
					var thisevent = options.events[i];
					thisevent.end.date = thisevent.end.date == undefined ? thisevent.start.date : thisevent.end.date;
					thisevent.start.d = formatToD([thisevent.start.date, thisevent.start.time], "YYYYMMDDHHMM");
					thisevent.end.d = formatToD([thisevent.end.date, thisevent.end.time], "YYYYMMDDHHMM");
					options.eventsParsed = pushToParsed(options.eventsParsed, thisevent);
				}
			}
			options.source = "JS";
			var kalendar_instance = new kalendar($(this), options);
			$(this).data('kalendar-instance', kalendar_instance);
		});
	}
	function pushToParsed(o, e) {
		var pusher = function(o,e,d) {
			var d = !!d ? d: e.start.date;
			var t = {
				title: e.title,
				url: e.url,
				start: {
					date: e.start.date,
					time: e.start.time,
					d: e.start.d
				},
				end: {
					date:e.end.date,
					time: e.end.time,
					d: e.end.d
				},
				location: e.location,
				allDay: e.allDay,
				color: e.color
			};
			if(!o[d]) {
				o[d] = [];
			}
			o[d].push(t);
		}
		e.start.date = parseInt(e.start.date);
		e.end.date = parseInt(e.end.date);
		if(e.start.date > e.end.date) {
			console.warn("The party was over before it started. That’s just an expression.",e);
		} else if(typeof e.start.date !== "number" || typeof e.end.date !== "number" || isNaN(e.end.date) || isNaN(e.start.date)) {
			console.warn("There is something wrong with this event, so it was skipped. Take a look at it", e);
		} else {
			if(e.start.date == e.end.date) {
				pusher(o,e);
			} else {
				var	dstart = formatToD(e.start.date, "YYYYMMDD"),
					dend = formatToD(e.end.date, "YYYYMMDD"),
					diff = (dend.getTime() - dstart.getTime())/86400000;
				for(var i=0;i<=diff;i++) {
					var tempEvent = $.extend(true,{}, e),
						tempDate = new Date(dstart.getTime() + 86400000*i),
						date = dToFormat(tempDate,"YYYYMMDD");
					if(i==0) {
						pusher(o, tempEvent, date);
					} else if(i==diff) {
						pusher(o, tempEvent, date);
					} else {
						tempEvent.allDay = true;
						pusher(o, tempEvent, date);
					}
				}
			}
		}
		return o;
	}
	function dToFormat(d,f) {
		var ff = function(d) {
			return d<10?0+''+d:d;
		}
		if(f == "YYYYMMDD") {
			var year = d.getFullYear(),
			month = ff(d.getMonth()+1),
			date = ff(d.getDate());
			return year+''+month+''+date;
		} else if(f == "HH.MM") {
			var hr = ff(d.getHours()+1),
				min = ff(d.getMinutes()+1)
			return hr+'.'+min;
		}
	}
	function formatToD(s,f) {
		if(f == "YYYYMMDD") {
			s = s.toString();
			d = new Date();
			d.setYear(s.substring(0,4));
			d.setMonth(s.substring(4,6)-1);
			d.setDate(s.substring(6,8));
		} else if(f == "YYYYMMDDHHMM") {
			d = new Date();
			st = s[0].toString();
			d.setYear(st.substring(0,4));
			d.setMonth(st.substring(4,6)-1);
			d.setDate(st.substring(6,8));
			st = s[1].toString();
			st = st.split(".")[0].length < 2 ? "0"+st : st;
			d.setHours(st.substring(0,2));
			d.setMinutes(st.substring(3,5));
			d.setSeconds(00);
		}
		return d;
	}
})(jQuery, window, document);