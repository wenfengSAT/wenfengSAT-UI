/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(f,b,g){var a=/\+/g;function e(h){return h}function c(h){return decodeURIComponent(h.replace(a," "))}var d=f.cookie=function(p,o,u){if(o!==g){u=f.extend({},d.defaults,u);if(o===null){u.expires=-1}if(typeof u.expires==="number"){var q=u.expires,s=u.expires=new Date();s.setDate(s.getDate()+q)}o=d.json?JSON.stringify(o):String(o);return(b.cookie=[encodeURIComponent(p),"=",d.raw?o:encodeURIComponent(o),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join(""))}var h=d.raw?e:c;var r=b.cookie.split("; ");for(var n=0,k=r.length;n<k;n++){var m=r[n].split("=");if(h(m.shift())===p){var j=h(m.join("="));return d.json?JSON.parse(j):j}}return null};d.defaults={};f.removeCookie=function(i,h){if(f.cookie(i)!==null){f.cookie(i,null,h);return true}return false}})(jQuery,document);

/*!
 * jQuery UI Widget October 23, 2012
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
(function(b,e){var a=0,d=Array.prototype.slice,c=b.cleanData;b.cleanData=function(f){for(var g=0,h;(h=f[g])!=null;g++){try{b(h).triggerHandler("remove")}catch(j){}}c(f)};b.widget=function(g,j,f){var m,l,i,k,h=g.split(".")[0];g=g.split(".")[1];m=h+"-"+g;if(!f){f=j;j=b.Widget}b.expr[":"][m.toLowerCase()]=function(n){return !!b.data(n,m)};b[h]=b[h]||{};l=b[h][g];i=b[h][g]=function(n,o){if(!this._createWidget){return new i(n,o)}if(arguments.length){this._createWidget(n,o)}};b.extend(i,l,{version:f.version,_proto:b.extend({},f),_childConstructors:[]});k=new j();k.options=b.widget.extend({},k.options);b.each(f,function(o,n){if(b.isFunction(n)){f[o]=(function(){var p=function(){return j.prototype[o].apply(this,arguments)},q=function(r){return j.prototype[o].apply(this,r)};return function(){var t=this._super,r=this._superApply,s;this._super=p;this._superApply=q;s=n.apply(this,arguments);this._super=t;this._superApply=r;return s}})()}});i.prototype=b.widget.extend(k,{widgetEventPrefix:g},f,{constructor:i,namespace:h,widgetName:g,widgetBaseClass:m,widgetFullName:m});if(l){b.each(l._childConstructors,function(o,p){var n=p.prototype;b.widget(n.namespace+"."+n.widgetName,i,p._proto)});delete l._childConstructors}else{j._childConstructors.push(i)}b.widget.bridge(g,i)};b.widget.extend=function(k){var g=d.call(arguments,1),j=0,f=g.length,h,i;for(;j<f;j++){for(h in g[j]){i=g[j][h];if(g[j].hasOwnProperty(h)&&i!==e){if(b.isPlainObject(i)){k[h]=b.isPlainObject(k[h])?b.widget.extend({},k[h],i):b.widget.extend({},i)}else{k[h]=i}}}}return k};b.widget.bridge=function(g,f){var h=f.prototype.widgetFullName;b.fn[g]=function(k){var i=typeof k==="string",j=d.call(arguments,1),l=this;k=!i&&j.length?b.widget.extend.apply(null,[k].concat(j)):k;if(i){this.each(function(){var n,m=b.data(this,h);if(!m){return b.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")}if(!b.isFunction(m[k])||k.charAt(0)==="_"){return b.error("no such method '"+k+"' for "+g+" widget instance")}n=m[k].apply(m,j);if(n!==m&&n!==e){l=n&&n.jquery?l.pushStack(n.get()):n;return false}})}else{this.each(function(){var m=b.data(this,h);if(m){m.option(k||{})._init()}else{new f(k,this)}})}return l}};b.Widget=function(){};b.Widget._childConstructors=[];b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(f,g){g=b(g||this.defaultElement||this)[0];this.element=b(g);this.uuid=a++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=b.widget.extend({},this.options,this._getCreateOptions(),f);this.bindings=b();this.hoverable=b();this.focusable=b();if(g!==this){b.data(g,this.widgetName,this);b.data(g,this.widgetFullName,this);this._on({remove:function(h){if(h.target===g){this.destroy()}}});this.document=b(g.style?g.ownerDocument:g.document||g);this.window=b(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:b.noop,widget:function(){return this.element},option:function(j,k){var f=j,l,h,g;if(arguments.length===0){return b.widget.extend({},this.options)}if(typeof j==="string"){f={};l=j.split(".");j=l.shift();if(l.length){h=f[j]=b.widget.extend({},this.options[j]);for(g=0;g<l.length-1;g++){h[l[g]]=h[l[g]]||{};h=h[l[g]]}j=l.pop();if(k===e){return h[j]===e?null:h[j]}h[j]=k}else{if(k===e){return this.options[j]===e?null:this.options[j]}f[j]=k}}this._setOptions(f);return this},_setOptions:function(f){var g;for(g in f){this._setOption(g,f[g])}return this},_setOption:function(f,g){this.options[f]=g;if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(h,g){if(!g){g=h;h=this.element}else{h=b(h);this.bindings=this.bindings.add(h)}var f=this;b.each(g,function(n,m){function k(){if(f.options.disabled===true||b(this).hasClass("ui-state-disabled")){return}return(typeof m==="string"?f[m]:m).apply(f,arguments)}if(typeof m!=="string"){k.guid=m.guid=m.guid||k.guid||b.guid++}var l=n.match(/^(\w+)\s*(.*)$/),j=l[1]+f.eventNamespace,i=l[2];if(i){f.widget().delegate(i,j,k)}else{h.bind(j,k)}})},_off:function(g,f){f=(f||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;g.unbind(f).undelegate(f)},_delay:function(i,h){function g(){return(typeof i==="string"?f[i]:i).apply(f,arguments)}var f=this;return setTimeout(g,h||0)},_hoverable:function(f){this.hoverable=this.hoverable.add(f);this._on(f,{mouseenter:function(g){b(g.currentTarget).addClass("ui-state-hover")},mouseleave:function(g){b(g.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(f){this.focusable=this.focusable.add(f);this._on(f,{focusin:function(g){b(g.currentTarget).addClass("ui-state-focus")},focusout:function(g){b(g.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(f,g,h){var k,j,i=this.options[f];h=h||{};g=b.Event(g);g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();g.target=this.element[0];j=g.originalEvent;if(j){for(k in j){if(!(k in g)){g[k]=j[k]}}}this.element.trigger(g,h);return !(b.isFunction(i)&&i.apply(this.element[0],[g].concat(h))===false||g.isDefaultPrevented())}};b.each({show:"fadeIn",hide:"fadeOut"},function(g,f){b.Widget.prototype["_"+g]=function(j,i,l){if(typeof i==="string"){i={effect:i}}var k,h=!i?g:i===true||typeof i==="number"?f:i.effect||f;i=i||{};if(typeof i==="number"){i={duration:i}}k=!b.isEmptyObject(i);i.complete=l;if(i.delay){j.delay(i.delay)}if(k&&b.effects&&(b.effects.effect[h]||b.uiBackCompat!==false&&b.effects[h])){j[g](i)}else{if(h!==g&&j[h]){j[h](i.duration,i.easing,l)}else{j.queue(function(m){b(this)[g]();if(l){l.call(j[0])}m()})}}}});if(b.uiBackCompat!==false){b.Widget.prototype._getCreateOptions=function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]}}})(jQuery);


/*!
 * Bootstrap Wizard plugin
 *
 * Licensed under the GPL license:
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function( $, undefined ) {
$.widget("bootstrap.bwizard", {
	//default option values
	options: {
			// Determines whether step tabs are clickable
		clickableSteps: true,
			// Determines whether panels are automatically displayed in order.
		autoPlay: false,
			// Determines the time span between panels in autoplay mode.
		delay: 3000,
			// Determines whether start from the first panel
			// when reaching the end in autoplay mode.
		loop: false,
			// This is an animation option for hiding the panel content.
			// e.g. { blind: true, fade: true, duration: 200}
		hideOption: { fade: true },
			// This is an animation option for showing the panel content.
			// e.g. { blind: true, fade: true, duration: 200}
		showOption: { fade: true, duration: 400 },
			// Additional Ajax options to consider when
			// loading panel content (see $.ajax).
		ajaxOptions: null,
			// Whether or not to cache remote bwizard content;
			// Cached content is being lazy loaded; e.g once and
			// only once for the panel is displayed.
			// Note that to prevent the actual Ajax requests from being cached
			// by the browser you need to provide an extra cache:
			// false flag to ajaxOptions.
		cache: false,
			// Store the latest active index in a cookie.
			// The cookie is then used to determine the initially active index
			// if the activeIndex option is not defined.
			// Requires cookie plugin. The object needs to have key/value pairs
			// of the form the cookie plugin expects as options.
			// e.g. { expires: 7, path: '/', domain: 'jquery.com', secure: true }
		cookie: null,
			// HTML template for step header when a new panel is added with the
			// add method or  when creating a panel for a remote panel on the fly.
		stepHeaderTemplate: '',
			// HTML template from which a new panel is created
			// by adding a panel with the add method or
			// when creating a panel for a remote panel on the fly.
		panelTemplate: '',
			// The HTML content of this string is shown in a panel
			// while remote content is loading.
			// Pass in empty string to deactivate that behavior.
		spinner: '',
			// A value that indicates the text of back button.
			// Code example:
			// $("#element").bwizard("option", "backBtnText", "Back Button");
		backBtnText: '&larr; Previous',
			// A value that indicates the text of next button.
			// Code example:
			// $("#element").bwizard("option", "nextBtnText", "next Button");
		nextBtnText: 'Next &rarr;',
			// The add event handler. A function called when a panel is added.
			// Default: null.
			// Type: Function.
			// Code example: $("#element").bwizard({ add: function (e, ui) { } });
		add: null,
			// The remove event handler. A function called when a panel is removed.
			// Default: null.
			// Type: Function.
			// Code example: $("#element").bwizard({ remove: function (e, ui) { } });
		remove: null,
			// The activeIndexChanged event handler.
			// A function called when the activeIndex changed.
			// Default: null.
			// Type: Function.
			// Code example:
			// $("#element").bwizard({ activeIndexChanged: function (e, ui) { } });
		activeIndexChanged: null,
			// The show event handler. A function called when a panel is shown.
			// Default: null.
			// Type: Function.
			// Code example: $("#element").bwizard({ show: function (e, ui) { } });
		show: null,
			// The load event handler.
			// A function called after the content of a remote panel has been loaded.
			// Default: null.
			// Type: Function.
			// Code example: $("#element").bwizard({ load: function (e, ui) { } });
		load: null,
			// The validating event handler.
			// A function called before moving to next panel. Cancellable.
			// Default: null.
			// Type: Function.
			// Code example: $("#element").bwizard({ validating: function (e, ui) { } });
		validating: null
	},

	_defaults: {
		stepHeaderTemplate: '<li>#{title}</li>',
		panelTemplate: '<div></div>',
		spinner: '<em>Loading&#8230;</em>'
	},

	_create: function () {
		var self = this;
		self._pageLize(true);
	},

	_init: function () {
		var o = this.options,
			dis = o.disabled;
		if (o.disabledState) {
			this.disable();
			o.disabled = dis;
		} else {
			if (o.autoPlay) {
				this.play();
			}
		}
	},

	_setOption: function (key, value) {
		$.Widget.prototype._setOption.apply(this, arguments);

		switch (key) {
		case 'activeIndex':
			this.show(value);
			break;

		case 'navButtons':
			this._createButtons();
			break;

		default:
			this._pageLize();
			break;
		}
	},

	play: function () {
		var o = this.options, self = this, id;
		if (!this.element.data('intId.bwizard')) {
			id = window.setInterval(function () {
				var index = o.activeIndex + 1;
				if (index >= self.panels.length) {
					if (o.loop) {
						index = 0;
					} else {
						self.stop();
						return;
					}
				}
				self.show(index);
			}, o.delay);

			this.element.data('intId.bwizard', id);
		}
	},

	stop: function () {
		var id = this.element.data('intId.bwizard');
		if (id) {
			window.clearInterval(id);
			this.element.removeData('intId.bwizard');
		}
	},

	_normalizeBlindOption: function (o) {
		if (o.blind === undefined) {
			o.blind = false;
		}
		if (o.fade === undefined) {
			o.fade = false;
		}
		if (o.duration === undefined) {
			o.duration = 200;
		}
		if (typeof o.duration === 'string') {
			try {
				o.duration = parseInt(o.duration, 10);
			}
			catch (e) {
				o.duration = 200;
			}
		}
	},

	_createButtons: function () {
		var self = this, o = this.options, bt,
			backBtnText = o.backBtnText,
			nextBtnText = o.nextBtnText;

		this._removeButtons();
		if (o.navButtons === 'none') {
			return;
		}

		if (!this.buttons) {
			bt = o.navButtons;

			var requiresPager = false;
			this.buttons = $('<ul class="pager"/>');
			this.buttons.addClass('bwizard-buttons');
			if(backBtnText != ''){
				this.backBtn =
					$("<li class='previous'><a href='#'>" +
						backBtnText + "</a></li>")
					.appendTo(this.buttons).bind({
						'click': function () {
							self.back();
							return false;
						}
					}).attr("role", "button");
				var requiresPager = true;
			}
			if(nextBtnText != ''){
				this.nextBtn =
					$("<li class='next'><a href='#'>" +
						nextBtnText + "</a>")
					.appendTo(this.buttons).bind({
						'click': function () {
							self.next();
							return false;
						}
					}).attr("role", "button");
				var requiresPager = true;
			}
			if(requiresPager) {
				this.buttons.appendTo(this.element);
			} else {
				this.buttons = null;
			}
		}
	},

	_removeButtons: function () {
		if (this.buttons) {
			this.buttons.remove();
			this.buttons = undefined;
		}
	},

	_pageLize: function (init) {
		var self = this, o = this.options,
			fragmentId = /^#.+/; // Safari 2 reports '#' for an empty hash;

		//Fix a bug that when no title and has ul li element in its content
		//this.list = this.element.find('ol,ul').eq(0);
		var isOL = false;
		this.list = this.element.children('ol,ul').eq(0);
		var l = this.list.length;
		if (this.list && l === 0) {
			this.list = null;
		}
		if (this.list) {
			if (this.list.get(0).tagName.toLowerCase() === "ol") {
				isOL = true;
			}
			this.lis = $('li', this.list);
			this.lis.each(function(i){
				if (o.clickableSteps){
					$(this).click(function (args) {
						args.preventDefault();
						self.show(i);
					});
					$(this).contents().wrap('<a href="#step' + (i+1) + '" class="hidden-phone"/>');
				} else {
					$(this).contents().wrap('<span class="hidden-phone"/>');
				}
				$(this).attr("role", "tab")
				$(this).css('z-index',self.lis.length-i);
				$(this).prepend('<span class="label">' + (i+1) + '</span>');
				if (!isOL) {
					$(this).find('.label').addClass('visible-phone');
				}
			});
		}

		if (init) {
			this.panels = $('> div', this.element);

			this.panels.each(function (i, p) {
				$(this).attr('id', 'step'+(i+1))
				var url = $(p).attr('src');
				// inline
				if (url && !fragmentId.test(url)) {
					// mutable data
					$.data(p, 'load.bwizard', url.replace(/#.*$/, ''));
				}
			});

			this.element.addClass('bwizard clearfix');
			if (this.list) {
				this.list
					.addClass('bwizard-steps clearfix')
					.attr("role", "tablist");
				if (o.clickableSteps){
					this.list.addClass('clickable')
				}
			}
			this.container = $('<div/>');
			this.container.addClass('well');
			this.container.append(this.panels);
			this.container.appendTo(this.element);
			this.panels.attr("role", "tabpanel");

			// Activate a panel
			// use "activeIndex" option or try to retrieve:
			// 1. from cookie
			// 2. from actived class attribute on panel
			if (o.activeIndex === undefined) {
				if (typeof o.activeIndex !== 'number' && o.cookie) {
					o.activeIndex = parseInt(self._cookie(), 10);
				}
				if (typeof o.activeIndex !== 'number' &&
						this.panels.filter('.bwizard-activated').length) {
					o.activeIndex = this.panels
						.index(this.panels.filter('.bwizard-activated'));
				}
				o.activeIndex = o.activeIndex || (this.panels.length ? 0 : -1);
			} else if (o.activeIndex === null) {
				// usage of null is deprecated, TODO remove in next release
				o.activeIndex = -1;
			}

			// sanity check - default to first page...
			o.activeIndex = ((o.activeIndex >= 0 && this.panels[o.activeIndex]) ||
				o.activeIndex < 0) ? o.activeIndex : 0;

			this.panels.addClass('hide').attr('aria-hidden', true);
			if (o.activeIndex >= 0 && this.panels.length) {
				// check for length avoids error when initializing empty pages
				this.panels.eq(o.activeIndex).removeClass('hide')
					.addClass('bwizard-activated').attr('aria-hidden', false);
				this.load(o.activeIndex);
			}

			this._createButtons();
		} else {
			this.panels = $('> div', this.container);
			o.activeIndex = this.panels
				.index(this.panels.filter('.bwizard-activated'));
		}

		this._refreshStep();

		// set or update cookie after init and add/remove respectively
		if (o.cookie) {
			this._cookie(o.activeIndex, o.cookie);
		}

		// reset cache if switching from cached to not cached
		if (o.cache === false) {
			this.panels.removeData('cache.bwizard');
		}

		if (o.showOption === undefined || o.showOption === null) {
			o.showOption = {};
		}
		this._normalizeBlindOption(o.showOption);

		if (o.hideOption === undefined || o.hideOption === null) {
			o.hideOption = {};
		}
		this._normalizeBlindOption(o.hideOption);

		// remove all handlers
		this.panels.unbind('.bwizard');
	},

	_refreshStep: function () {
		var o = this.options;

		if (this.lis) {
			this.lis.removeClass('active').attr('aria-selected', false).find('.label').removeClass('badge-inverse');
			if (o.activeIndex >= 0 && o.activeIndex <= this.lis.length - 1) {
				if (this.lis) {
					this.lis.eq(o.activeIndex).addClass('active').attr('aria-selected', true).find('.label').addClass('badge-inverse');
				}
			}
		}

		if (this.buttons && !o.loop) {
			this.backBtn[o.activeIndex <= 0 ? 'addClass' :
				'removeClass']('disabled')
				.attr('aria-disabled', o.activeIndex === 0);
			this.nextBtn[o.activeIndex >= this.panels.length - 1 ?
				'addClass' : 'removeClass']('disabled')
				.attr('aria-disabled', (o.activeIndex >= this.panels.length - 1));
		}
	},

	_sanitizeSelector: function (hash) {
		// we need this because an id may contain a ":"
		return hash.replace(/:/g, '\\:');
	},

	_cookie: function () {
		var cookie = this.cookie || (this.cookie = this.options.cookie.name);
		return $.cookie.apply(null, [cookie].concat($.makeArray(arguments)));
	},

	_ui: function (panel) {
		return {
			panel: panel,
			index: this.panels.index(panel)
		};
	},

	_removeSpinner: function () {
		// restore all former loading bwizard labels
		var spinner = this.element.data('spinner.bwizard');
		if (spinner) {
			this.element.removeData('spinner.bwizard');
			spinner.remove();
		}
	},

	// Reset certain styles left over from animation
	// and prevent IE's ClearType bug...
	_resetStyle: function ($el) {
		$el.css({ display: '' });
		if (!$.support.opacity) {
			$el[0].style.removeAttribute('filter');
		}
	},

	destroy: function () {
		var o = this.options;
		this.abort();
		this.stop();
		this._removeButtons();
		this.element.unbind('.bwizard')
			.removeClass([
				'bwizard',
				'clearfix'
			].join(' '))
			.removeData('bwizard');

		if (this.list) {
			this.list.removeClass('bwizard-steps clearfix')
				.removeAttr('role');
		}

		if (this.lis) {
			this.lis.removeClass('active').removeAttr('role');
			this.lis.each(function () {
				if ($.data(this, 'destroy.bwizard')) {
					$(this).remove();
				} else {
					$(this).removeAttr('aria-selected');
				}
			});
		}

		this.panels.each(function () {
			var $this = $(this).unbind('.bwizard');
			$.each(['load', 'cache'], function (i, prefix) {
				$this.removeData(prefix + '.bwizard');
			});

			if ($.data(this, 'destroy.bwizard')) {
				$(this).remove();
			} else {
				$(this).removeClass([
					'bwizard-activated',
					'hide'
				].join(' ')).css({ position: '', left: '', top: '' })
				.removeAttr('aria-hidden');
			}
		});

		this.container.replaceWith(this.container.contents());

		if (o.cookie) {
			this._cookie(null, o.cookie);
		}

		return this;
	},

	add: function (index, title) {
		if (index === undefined) {
			index = this.panels.length; // append by default
		}

		if (title === undefined) {
			title = "Step " + index;
		}

		var self = this, o = this.options,
			$panel = $(o.panelTemplate || self._defaults.panelTemplate)
				.data('destroy.bwizard', true),
			$li;
		$panel.addClass('hide')
			.attr('aria-hidden', true);

		if (index >= this.panels.length) {
			if (this.panels.length > 0) {
				$panel.insertAfter(this.panels[this.panels.length - 1]);
			} else {
				$panel.appendTo(this.container);
			}
		} else {
			$panel.insertBefore(this.panels[index]);
		}

		if (this.list && this.lis) {
			$li = $((o.stepHeaderTemplate || self._defaults.stepHeaderTemplate)
				.replace(/#\{title\}/g, title));
			$li.data('destroy.bwizard', true);

			if (index >= this.lis.length) {
				$li.appendTo(this.list);
			} else {
				$li.insertBefore(this.lis[index]);
			}
		}

		this._pageLize();

		if (this.panels.length === 1) { // after pagelize
			o.activeIndex = 0;
			$li.addClass('ui-priority-primary');
			$panel.removeClass('hide')
				.addClass('bwizard-activated')
				.attr('aria-hidden', false);
			this.element.queue("bwizard", function () {
				self._trigger('show', null, self._ui(self.panels[0]));
			});

			this._refreshStep();
			this.load(0);
		}

		// callback
		this._trigger('add', null, this._ui(this.panels[index]));
		return this;
	},

	remove: function (index) {
		var o = this.options,
			//$li = this.lis.eq(index).remove(),
			$panel = this.panels.eq(index).remove();

		this.lis.eq(index).remove();
		if (index < o.activeIndex) {
			o.activeIndex--;
		}

		this._pageLize();

		//Ajust the active panel index in some case
		if ($panel.hasClass('bwizard-activated') && this.panels.length >= 1) {
			this.show(index + (index < this.panels.length ? 0 : -1));
		}

		// callback
		this._trigger('remove', null, this._ui($panel[0]));
		return this;
	},

	_showPanel: function (p) {
		var self = this, o = this.options, $show = $(p), props;
		$show.addClass('bwizard-activated');
		if ((o.showOption.blind || o.showOption.fade) && o.showOption.duration > 0) {
			props = { duration: o.showOption.duration };
			if (o.showOption.blind) {
				props.height = 'toggle';
			}
			if (o.showOption.fade) {
				props.opacity = 'toggle';
			}
			$show.hide().removeClass('hide') // avoid flicker that way
				.animate(props, o.showOption.duration || 'normal', function () {
					self._resetStyle($show);
					self._trigger('show', null, self._ui($show[0]));
					self._removeSpinner();
					$show.attr('aria-hidden', false);
					self._trigger('activeIndexChanged', null, self._ui($show[0]));
				});
		} else {
			$show.removeClass('hide').attr('aria-hidden', false);
			self._trigger('show', null, self._ui($show[0]));
			self._removeSpinner();
			self._trigger('activeIndexChanged', null, self._ui($show[0]));
		}
	},

	_hidePanel: function (p) {
		var self = this, o = this.options, $hide = $(p), props;
		$hide.removeClass('bwizard-activated');
		if ((o.hideOption.blind || o.hideOption.fade) && o.hideOption.duration > 0) {
			props = { duration: o.hideOption.duration };
			if (o.hideOption.blind) {
				props.height = 'toggle';
			}
			if (o.hideOption.fade) {
				props.opacity = 'toggle';
			}
			$hide.animate(props, o.hideOption.duration || 'normal', function () {
				$hide.addClass('hide').attr('aria-hidden', true);
				self._resetStyle($hide);
				self.element.dequeue("bwizard");
			});
		} else {
			$hide.addClass('hide').attr('aria-hidden', true);
			this.element.dequeue("bwizard");
		}
	},

	show: function (index) {
		if (index < 0 || index >= this.panels.length) {
			return this;
		}

		// previous animation is still processing
		if (this.element.queue("bwizard").length > 0) {
			return this;
		}

		var self = this, o = this.options,
			args = $.extend({}, this._ui(this.panels[o.activeIndex])),
			$hide, $show;
		args.nextIndex = index;
		args.nextPanel = this.panels[index];
		if (this._trigger('validating', null, args) === false) {
			return this;
		}

		$hide = this.panels.filter(':not(.hide)');
		$show = this.panels.eq(index);
		o.activeIndex = index;

		this.abort();

		if (o.cookie) {
			this._cookie(o.activeIndex, o.cookie);
		}

		this._refreshStep();
		// show new panel
		if ($show.length) {
			if ($hide.length) {
				this.element.queue("bwizard", function () {
					self._hidePanel($hide);
				});
			}

			this.element.queue("bwizard", function () {
				self._showPanel($show);
			});

			this.load(index);
		}
		else {
			throw 'Bootstrap Wizard: Mismatching fragment identifier.';
		}

		return this;
	},

	next: function () {
		var o = this.options,
			index = o.activeIndex + 1;
		if (o.disabled) {
			return false;
		}
		if (o.loop) {
			index = index % this.panels.length;
		}

		if (index < this.panels.length) {
			this.show(index);
			return true;
		}
		return false;
	},

	back: function () {
		var o = this.options,
			index = o.activeIndex - 1;
		if (o.disabled) {
			return false;
		}
		if (o.loop) {
			index = index < 0 ? this.panels.length - 1 : index;
		}

		if (index >= 0) {
			this.show(index);
			return true;
		}
		return false;
	},

	load: function (index) {
		var self = this,
			o = this.options,
			p = this.panels.eq(index)[0],
			url = $.data(p, 'load.bwizard'),
			spinner;

		this.abort();

		// not remote or from cache
		if (!url || this.element.queue("bwizard").length !== 0 &&
				$.data(p, 'cache.bwizard')) {
			this.element.dequeue("bwizard");
			return;
		}

		// load remote from here on
		if (o.spinner) {
			spinner = this.element.data('spinner.bwizard');
			if (!spinner) {
				spinner = $('<div class="modal" id="spinner" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"/>');
				spinner.html(o.spinner || self._defaults.spinner);
				spinner.appendTo(document.body);
				this.element.data('spinner.bwizard', spinner);
				spinner.modal();
			}
		}

		this.xhr = $.ajax($.extend({}, o.ajaxOptions, {
			url: url,
			dataType: 'html',
			success: function (r, s) {
				$(p).html(r);

				if (o.cache) {
					// if loaded once do not load them again
					$.data(p, 'cache.bwizard', true);
				}

				// callbacks
				self._trigger('load', null, self._ui(self.panels[index]));
				try {
					if (o.ajaxOptions && o.ajaxOptions.success) {
						o.ajaxOptions.success(r, s);
					}
				}
				catch (e1) { }
			},
			error: function (xhr, s) {
				// callbacks
				self._trigger('load', null, self._ui(self.panels[index]));
				try {
					// Passing index avoid a race condition when this method is
					// called after the user has selected another panel.
					if (o.ajaxOptions && o.ajaxOptions.error) {
						o.ajaxOptions.error(xhr, s, index, p);
					}
				}
				catch (e2) { }
			}
		}));

		// last, so that load event is fired before show...
		self.element.dequeue("bwizard");

		return this;
	},

	abort: function () {
		// Terminate all running panel ajax requests and animations.
		this.element.queue([]);
		this.panels.stop(false, true);

		// "bwizard" queue must not contain more than two elements,
		// which are the callbacks for hide and show
		this.element.queue("bwizard",
			this.element.queue("bwizard").splice(-2, 2));

		// terminate pending requests from other bwizard
		if (this.xhr) {
			this.xhr.abort();
			delete this.xhr;
		}

		// take care of spinners
		this._removeSpinner();
		return this;
	},

	url: function (index, url) {
		this.panels.eq(index).removeData('cache.bwizard')
			.data('load.bwizard', url);
		return this;
	},

	count: function () {
		return this.panels.length;
	}

});
} (jQuery));