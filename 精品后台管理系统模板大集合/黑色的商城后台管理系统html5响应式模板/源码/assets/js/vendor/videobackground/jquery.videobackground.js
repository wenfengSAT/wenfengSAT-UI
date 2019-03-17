/*!
 * jQuery Video Background plugin
 * https://github.com/georgepaterson/jquery-videobackground
 *
 * Copyright 2012, George Paterson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function ($, document, window) {
	/*
	 * Resize function.
	 * Triggered if the boolean setting 'resize' is true.
	 * It will resize the video background based on a resize event initiated on the browser window.
	 *
	 */
	"use strict";
	function resize(that) {
		var documentHeight = $(document).height(),
			windowHeight = $(window).height();
		if (that.settings.resizeTo === 'window') {
			$(that).css('height', windowHeight);
		} else {
			if (windowHeight >= documentHeight) {
				$(that).css('height', windowHeight);
			} else {
				$(that).css('height', documentHeight);
			}
		}
	}
	/*
	 * Preload function.
	 * Allows for HTML and JavaScript designated in settings to be used while the video is preloading.
	 *
	 */
	function preload(that) {
		$(that.controlbox).append(that.settings.preloadHtml);
		if (that.settings.preloadCallback) {
			(that.settings.preloadCallback).call(that);
		}
	}
	/*
	 * Play function.
	 * Can either be called through the default control interface or directly through the public method.
	 * Will set the video to play or pause depending on existing state.
	 * Requires the video to be loaded.	
	 *
	 */
	function play(that) {
		var video = that.find('video').get(0),
			controller;
		if (that.settings.controlPosition) {
			controller = $(that.settings.controlPosition).find('.ui-video-background-play a');
		} else {
			controller = that.find('.ui-video-background-play a');
		}
		if (video.paused) {
			video.play();
			controller.toggleClass('ui-icon-pause ui-icon-play').text(that.settings.controlText[1]);
		} else {
			if (video.ended) {
				video.play();
				controller.toggleClass('ui-icon-pause ui-icon-play').text(that.settings.controlText[1]);
			} else {
				video.pause();
				controller.toggleClass('ui-icon-pause ui-icon-play').text(that.settings.controlText[0]);
			}
		}
	}
	/*
	 * Mute function.
	 * Can either be called through the default control interface or directly through the public method.
	 * Will set the video to mute or unmute depending on existing state.
	 * Requires the video to be loaded.
	 *
	 */
	function mute(that) {
		var video = that.find('video').get(0),
			controller;
		if (that.settings.controlPosition) {
			controller = $(that.settings.controlPosition).find('.ui-video-background-mute a');
		} else {
			controller = that.find('.ui-video-background-mute a');
		}
		if (video.volume === 0) {
			video.volume = 1;
			controller.toggleClass('ui-icon-volume-on ui-icon-volume-off').text(that.settings.controlText[2]);
		} else {
			video.volume = 0;
			controller.toggleClass('ui-icon-volume-on ui-icon-volume-off').text(that.settings.controlText[3]);
		}
	}
	/*
	 * Loaded events function.
	 * When the video is loaded we have some default HTML and JavaScript to trigger.	
	 *
	 */
	function loadedEvents(that) {
		/*
		 * Trigger the resize method based if the browser is resized.
		 *
		 */
		if (that.settings.resize) {
			$(window).on('resize', function () {
				resize(that);
			});
		}
		/*
		 * Default play/pause control	
		 *
		 */
		that.controls.find('.ui-video-background-play a').on('click', function (event) {
			event.preventDefault();
			play(that);
		});
		/*
		 * Default mute/unmute control	
		 *
		 */
		that.controls.find('.ui-video-background-mute a').on('click', function (event) {
			event.preventDefault();
			mute(that);
		});
		/*
		 * Firefox doesn't currently use the loop attribute.
		 * Loop bound to the video ended event.
		 *
		 */
		if (that.settings.loop) {
			that.find('video').on('ended', function () {
				$(this).get(0).play();
				$(this).toggleClass('paused').text(that.settings.controlText[1]);
			});
		}
	}
	/*
	 * Loaded function.
	 * Allows for HTML and JavaScript designated in settings to be used when the video is loaded.
	 *
	 */
	function loaded(that) {
		$(that.controlbox).html(that.controls);
		loadedEvents(that);
		if (that.settings.loadedCallback) {
			(that.settings.loadedCallback).call(that);
		}
	}
	/*
	 * Public methods accessible through a string declaration equal to the method name.
	 *
	 */
	var methods = {
		/*
		 * Default initiating public method.
		 * It will created the video background, default video controls and initiate associated events. 
		 *
		 */
		init: function (options) {
			return this.each(function () {
				var that = $(this),
					compiledSource = '',
					attributes = '',
					data = that.data('video-options'),
					image,
					isArray;
				if (document.createElement('video').canPlayType) {
					that.settings = $.extend(true, {}, $.fn.videobackground.defaults, data, options);
					if (!that.settings.initialised) {
						that.settings.initialised = true;
						/*
						 * If the resize option is set.
						 * Set the height of the container to be the height of the document
						 * The video can expand in to the space using min-height: 100%;
						 *
						 */
						if (that.settings.resize) {
							resize(that);
						}
						/*
						 * Compile the different HTML5 video attributes.	
						 *
						 */
						$.each(that.settings.videoSource, function () {
							isArray = Object.prototype.toString.call(this) === '[object Array]';
							if (isArray && this[1] !== undefined) {
								compiledSource = compiledSource + '<source src="' + this[0] + '" type="' + this[1] + '">';
							} else {
								if (isArray) {
									compiledSource = compiledSource + '<source src="' + this[0] + '">';
								} else {
									compiledSource = compiledSource + '<source src="' + this + '">';
								}
							}
						});
						attributes = attributes + 'preload="' + that.settings.preload + '"';
						if (that.settings.poster) {
							attributes = attributes + ' poster="' + that.settings.poster + '"';
						}
						if (that.settings.autoplay) {
							attributes = attributes + ' autoplay="autoplay"';
						}
						if (that.settings.loop) {
							attributes = attributes + ' loop="loop"';
						}
						$(that).html('<video ' + attributes + '>' + compiledSource + '</video>');
						/*
						 * Append the control box either to the supplied that or the video background that.	
						 *
						 */
						that.controlbox = $('<div class="ui-video-background ui-widget ui-widget-content ui-corner-all"></div>');
						if (that.settings.controlPosition) {
							$(that.settings.controlPosition).append(that.controlbox);
						} else {
							$(that).append(that.controlbox);
						}
						/*
						 *	HTML string for the video controls.
						 *
						 */
						that.controls = $('<ul class="ui-video-background-controls"><li class="ui-video-background-play">'
							+ '<a class="ui-icon ui-icon-pause" href="#">' + that.settings.controlText[1] + '</a>'
							+ '</li><li class="ui-video-background-mute">'
							+ '<a class="ui-icon ui-icon-volume-on" href="#">' + that.settings.controlText[2] + '</a>'
							+ '</li></ul>');
						/*
						 * Test for HTML or JavaScript function that should be triggered while the video is attempting to load.
						 * The canplaythrough event signals when when the video can play through to the end without disruption.
						 * We use this to determine when the video is ready to play.
						 * When this happens preloaded HTML and JavaSCript should be replaced with loaded HTML and JavaSCript.
						 *
						 */
						if (that.settings.preloadHtml || that.settings.preloadCallback) {
							preload(that);
							that.find('video').on('canplaythrough', function () {
								/*
								 * Chrome doesn't currently using the autoplay attribute.
								 * Autoplay initiated through JavaScript.
								 *
								 */
								if (that.settings.autoplay) {
									that.find('video').get(0).play();
								}
								loaded(that);
							});
						} else {
							that.find('video').on('canplaythrough', function () {
								/*
								 * Chrome doesn't currently using the autoplay attribute.
								 * Autoplay initiated through JavaScript.
								 *
								 */
								if (that.settings.autoplay) {
									that.find('video').get(0).play();
								}
								loaded(that);
							});
						}
						that.data('video-options', that.settings);
					}
				} else {
					that.settings = $.extend(true, {}, $.fn.videobackground.defaults, data, options);
					if (!that.settings.initialised) {
						that.settings.initialised = true;
						if (that.settings.poster) {
							image = $('<img class="ui-video-background-poster" src="' + that.settings.poster + '">');
							that.append(image);
						}
						that.data('video-options', that.settings);
					}
				}
			});
		},
		/*
		 * Play public method.
		 * When attached to a video background it will trigger the associated video to play or pause.
		 * The event it triggeres is dependant on the existing state of the video.
		 * This method can be triggered from an event on a external that.
		 * If the that has a unique controlPosition this will have to be declared.
		 * Requires the video to be loaded first.
		 *
		 */
		play: function (options) {
			return this.each(function () {
				var that = $(this),
					data = that.data('video-options');
				that.settings = $.extend(true, {}, data, options);
				if (that.settings.initialised) {
					play(that);
					that.data('video-options', that.settings);
				}
			});
		},
		/*
		 * Mute public method.
		 * When attached to a video background it will trigger the associated video to mute or unmute.
		 * The event it triggeres is dependant on the existing state of the video.
		 * This method can be triggered from an event on a external that.
		 * If the that has a unique controlPosition this will have to be declared.
		 * Requires the video to be loaded first.
		 *
		 */
		mute: function (options) {
			return this.each(function () {
				var that = $(this),
					data = that.data('video-options');
				that.settings = $.extend(true, {}, data, options);
				if (that.settings.initialised) {
					mute(that);
					that.data('video-options', that.settings);
				}
			});
		},
		/*
		 * Resize public method.
		 * When invoked will resize the video background to the height of the document or window.
		 * The video background height affects the height of the document.
		 * Affecting the video background's ability to negatively resize.  
		 *
		 */
		resize: function (options) {
			return this.each(function () {
				var that = $(this),
					data = that.data('video-options');
				that.settings = $.extend(true, {}, data, options);
				if (that.settings.initialised) {
					resize(that);
					that.data('video-options', that.settings);
				}
			});
		},
		/*
		 * Destroy public method.
		 * Will unbind event listeners and remove HTML created by the plugin.
		 * If the that has a unique controlPosition this will have to be declared.
		 *
		 */
		destroy: function (options) {
			return this.each(function () {
				var that = $(this),
					data = that.data('video-options');
				that.settings = $.extend(true, {}, data, options);
				if (that.settings.initialised) {
					that.settings.initialised = false;
					if (document.createElement('video').canPlayType) {
						that.find('video').off('ended');
						if (that.settings.controlPosition) {
							$(that.settings.controlPosition).find('.ui-video-background-mute a').off('click');
							$(that.settings.controlPosition).find('.ui-video-background-play a').off('click');
						} else {
							that.find('.ui-video-background-mute a').off('click');
							that.find('.ui-video-background-play a').off('click');
						}
						$(window).off('resize');
						that.find('video').off('canplaythrough');
						if (that.settings.controlPosition) {
							$(that.settings.controlPosition).find('.ui-video-background').remove();
						} else {
							that.find('.ui-video-background').remove();
						}
						$('video', that).remove();
					} else {
						if (that.settings.poster) {
							that.find('.ui-video-background-poster').remove();
						}
					}
					that.removeData('video-options');
				}
			});
		}
	};
	/*
	 * The video background namespace.
	 * The gate way for the plugin.	
	 *
	 */
	$.fn.videobackground = function (method) {
		/*
		 * Allow for method calling.
		 * If not a method initialise the plugin.
		 *
		 */
		if (!this.length) {
			return this;
		}
	    if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	    }
		if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
	    }
		$.error('Method ' +  method + ' does not exist on jQuery.videobackground');
	};
	/*
	 * Default options, can be extend by options passed to the function.
	 *
	 */
	$.fn.videobackground.defaults = {
		videoSource: [],
		poster: null,
		autoplay: true,
		preload: 'none',
		loop: false,
		controlPosition: null,
		controlText: ['Play', 'Pause', 'Mute', 'Unmute'],
		resize: true,
		preloadHtml: '',
		preloadCallback: null,
		loadedCallback: null,
		resizeTo: 'document'
	};
}(jQuery, document, window));