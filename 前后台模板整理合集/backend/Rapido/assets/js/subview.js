(function($) {
	"use strict";
	var subViews = $(".subviews"), show_functions = [], close_functions = [], hide_functions = [], subview_id = [], screenPosition, $this, subViewElement, subviewShowClass = ".show-sv", subviewHideClass = ".hide-sv", subviewBackClass = ".back-sv", subview_action = "", thisBody = document.body || document.documentElement, thisStyle = thisBody.style, supportTransition = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;

	$(subviewShowClass).on("click", function(e) {
		subViewElement = $(this);
		var customOptions = new Object;

		customOptions.content = subViewElement.attr('href');
		customOptions.startFrom = subViewElement.data("startfrom"), customOptions.onShow = subViewElement.data("onshow"), customOptions.onHide = subViewElement.data("onhide"), customOptions.onClose = subViewElement.data("onclose");
		$.subview(customOptions);
		e.preventDefault();
	});
	$(subviewHideClass).on("click", function(e) {
		subview_action = "close";
		$.hideSubview();
		e.preventDefault();
	});
	$(subviewBackClass).on("click", function(e) {
		$.hideSubview();
		e.preventDefault();
	});
	$.extend({
		subview: function(options) {
			// extend the options from pre-defined values:
			var defaults = {
				content: "",
				startFrom: "top",
				onShow: "",
				onHide: "",
				onClose: ""
			};

			var settings = $.extend({}, defaults, options);
			$this = this;
			show_functions.push(settings.onShow);
			hide_functions.push(settings.onHide);
			close_functions.push(settings.onClose);
			subview_id.push(settings.content);

			if(subViews.is(":visible") == false) {
				if(supportTransition) {

					$(".toolbar-tools").css({
						opacity: 0,
						left: "-20px"
					}).on('webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd', function() {
						$(this).off().hide();
						$(".close-subviews").show(0, function(e) {
							$(this).css({
								opacity: 1,
								left: "0px"
							});
						}).off().on("click", function(e) {
							subview_action = "close";

							if(jQuery.isFunction(close_functions[close_functions.length - 1])) {
								close_functions[close_functions.length - 1].call($this);
								return false;
							}
							$.hideSubview();
						});
					});
					screenPosition = $(window).scrollTop();
					$("html, body").animate({
						scrollTop: 0
					}, "slow", function() {
						$('.main-container').css({
							'max-height': $windowHeight - topBar.outerHeight(true),
							'min-height': $windowHeight - topBar.outerHeight(true),
							'overflow': 'hidden',
						});
					});
					switch (settings.startFrom) {
						case "right" :

							subViews.addClass("subviews-right").css({
								"right": 0,
								"top": $(".toolbar").outerHeight(true),
								height: $windowHeight - topBar.outerHeight(true) - $(".toolbar").outerHeight(true)
							}).show(0, function() {
								$(this).css({
									width: "100%"
								}).on('webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd', function() {

									$(this).off();
									if($(subview_id[0]).length) {
										$(subview_id[0]).appendTo(".subviews-container").show(0, function() {
											if(jQuery.isFunction(show_functions[show_functions.length - 1])) {
												show_functions[show_functions.length - 1].call($this);
											}
										});
									} else {
										$(".subviews-container").html("<h3 class='center'>Sorry this page is not available</h3>");
									}

								});
							});
							break;
						default :

							subViews.addClass("subviews-top").css("top", $(".toolbar").outerHeight(true)).show(0, function() {
								$(this).css({
									height: $windowHeight - topBar.outerHeight(true) - $(".toolbar").outerHeight(true)

								}).on('webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd', function() {

									$(this).off();
									if($(subview_id[0]).length) {
										$(subview_id[0]).appendTo(".subviews-container").show(0, function() {
											if(jQuery.isFunction(show_functions[show_functions.length - 1])) {
												show_functions[show_functions.length - 1].call($this);
											}
										});
									} else {
										$(".subviews-container").html("<h3 class='center'>Sorry this page is not available</h3>");
									}
								});
							});
							break;
					}
				} else {
					$(".toolbar-tools").animate({
						opacity: 0,
						left: "-20px"
					}, 300, function() {
						$(this).hide();
						$(".close-subviews").show(0, function(e) {
							$(this).animate({
								opacity: 1,
								left: "0px"
							});
						}).on("click", function(e) {
							subview_action = "close";

							if(jQuery.isFunction(close_functions[close_functions.length - 1])) {
								close_functions[close_functions.length - 1].call($this);
								return false;
							}
							$.hideSubview();
						});
					});
					screenPosition = $(window).scrollTop();
					$("html, body").animate({
						scrollTop: 0
					}, "slow", function() {

						$('.main-container').css({
							'max-height': $windowHeight - topBar.outerHeight(true),
							'min-height': $windowHeight - topBar.outerHeight(true),
							'overflow': 'hidden',
						});
					});
					switch (settings.startFrom) {
						case "right" :
							subViews.addClass("subviews-right").css({
								"right": 0,
								"top": $(".toolbar").outerHeight(true),
								height: $windowHeight - topBar.outerHeight(true) - $(".toolbar").outerHeight(true)
							}).show(0, function() {
								$(this).animate({
									width: "100%"
								}, 300, function() {

									if($(subview_id[0]).length) {
										$(subview_id[0]).appendTo(".subviews-container").show(0, function() {
											if(jQuery.isFunction(show_functions[show_functions.length - 1])) {
												show_functions[show_functions.length - 1].call($this);
											}
										});
									} else {
										$(".subviews-container").html("<h3 class='center'>Sorry this page is not available</h3>");
									}

								});
							});
							break;
						default :

							subViews.addClass("subviews-top").css("top", $(".toolbar").outerHeight(true)).show(0, function() {
								$(this).animate({
									height: $windowHeight - topBar.outerHeight(true) - $(".toolbar").outerHeight(true)

								}, 300, function() {

									$(this).off();
									if($(subview_id[0]).length) {
										$(subview_id[0]).appendTo(".subviews-container").show(0, function() {
											if(jQuery.isFunction(show_functions[show_functions.length - 1])) {
												show_functions[show_functions.length - 1].call($this);
											}
										});
									} else {
										$(".subviews-container").html("<h3 class='center'>Sorry this page is not available</h3>");
									}
								});
							});
							break;
					}
				}
			} else {
				$(".back-subviews").show(300, function(e) {
					$(this).css({
						opacity: 1,
						left: "0px"
					});
				}).off().on("click", function(e) {
					subview_action = "back";

					if(jQuery.isFunction(close_functions[close_functions.length - 1])) {
						close_functions[close_functions.length - 1].call($this);
						return false;
					}
					close_functions.pop();
					$.hideSubview();
					e.preventDefault();
				});
				$(".subviews-container").children().filter(':visible').fadeOut(function() {
					if(jQuery.isFunction(hide_functions[hide_functions.length - 2])) {
						hide_functions[hide_functions.length - 2].call($this);
					}
					$(this).appendTo("body");

					$(subview_id[subview_id.length - 1]).appendTo(".subviews-container").show(0, function() {

						if(jQuery.isFunction(show_functions[show_functions.length - 1])) {
							show_functions[show_functions.length - 1].call($this);
						}
					});
				});
			}
		},
		hideSubview: function() {
			if(subview_id.length > 1 && subview_action !== "close") {

				subview_action = "";
				if(subview_id.length < 3) {
					if(supportTransition) {
						$(".back-subviews").css({
							opacity: 0,
							left: "20px"
						}).on('webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd', function() {
							$(this).off().hide(200);
						});
					} else {
						$(".back-subviews").animate({
							opacity: 0,
							left: "20px"
						}, 300, function() {
							$(this).hide(200);
						});
					}
				}

				$(".subviews-container").children().filter(':visible').fadeOut(function() {
					if(jQuery.isFunction(hide_functions[hide_functions.length - 1])) {
						hide_functions[hide_functions.length - 1].call($this);
					}
					hide_functions.pop();
					show_functions.pop();
					subview_id.pop();
					$(this).appendTo("body");
					$(subview_id[subview_id.length - 1]).appendTo(".subviews-container").fadeIn(function() {
						if(jQuery.isFunction(show_functions[show_functions.length - 1])) {
							show_functions[show_functions.length - 1].call($this);
						}
					});
				});
			} else {
				subview_action = "";
				$(".subviews-container").children().hide(0, function() {
					if(jQuery.isFunction(hide_functions[hide_functions.length - 1])) {
						hide_functions[hide_functions.length - 1].call($this);
					}
					$(this).appendTo("body");
					show_functions = [];
					close_functions = [];
					subview_id = [];

				});
				if(supportTransition) {
					if($(".back-subviews").is(":visible")) {
						$(".back-subviews").css({
							opacity: 0,
							left: "20px"
						}).on('webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd', function() {
							$(this).off().hide();
						});
					}
					$(".close-subviews").css({
						opacity: 0,
						left: "20px"
					}).on('webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd', function() {
						$(this).off().hide();
						hide_functions = [];
						$(".toolbar-tools").show(0, function() {
							$(this).css({
								opacity: 1,
								left: "0px"
							});
						});
					});

					if(subViews.hasClass("subviews-right")) {
						subViews.css({
							width: 0
						}).on('webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd', function() {
							$(this).off().removeClass("subviews-right").hide().removeAttr("style");
							$('.main-container').css({
								'max-height': '',
								'min-height': '',
								'overflow': ''
							});

							$("html, body").animate({
								scrollTop: screenPosition
							}, "slow");
						});
					} else {
						subViews.css({
							height: 0
						}).on('webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd', function() {
							$(this).off().removeClass("subviews-top").hide().removeAttr("style");
							$('.main-container').css({
								'max-height': '',
								'min-height': '',
								'overflow': ''
							});

							$("html, body").animate({
								scrollTop: screenPosition
							}, "slow");
						});
					}
				} else {
					if($(".back-subviews").is(":visible")) {
						$(".back-subviews").animate({
							opacity: 0,
							left: "20px"
						}, 300, function() {
							$(this).off().hide();
						});
					}
					$(".close-subviews").animate({
						opacity: 0,
						left: "20px"
					}, 300, function() {
						$(this).off().hide();
						hide_functions = [];
						$(".toolbar-tools").show(0, function() {
							$(this).animate({
								opacity: 1,
								left: "0px"
							});
						});
					});

					if(subViews.hasClass("subviews-right")) {
						subViews.animate({
							width: 0
						}, 300, function() {
							$(this).off().removeClass("subviews-right").hide().removeAttr("style");
							$('.main-container').css({
								'max-height': '',
								'min-height': '',
								'overflow': ''
							});

							$("html, body").animate({
								scrollTop: screenPosition
							}, "slow");
						});
					} else {
						subViews.animate({
							height: 0
						}, 300, function() {
							$(this).off().removeClass("subviews-top").hide().removeAttr("style");
							$('.main-container').css({
								'max-height': '',
								'min-height': '',
								'overflow': ''
							});

							$("html, body").animate({
								scrollTop: screenPosition
							}, "slow");
						});
					}
				}
			}
		}
	});
})(jQuery);
