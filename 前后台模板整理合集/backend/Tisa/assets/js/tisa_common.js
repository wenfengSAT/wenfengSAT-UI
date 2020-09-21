/* common functions */

	//* detect touch devices
	function is_touch_device() {
		return !!('ontouchstart' in window);
	} 

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize
	*
	* Copyright 2012 @louis_remi
	* Licensed under the MIT license.
	*
	* This saved you an hour of work? 
	* Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
	*/
	(function(a){var d=a.event,b,c;b=d.special.debouncedresize={setup:function(){a(this).on("resize",b.handler)},teardown:function(){a(this).off("resize",b.handler)},handler:function(a,f){var g=this,h=arguments,e=function(){a.type="debouncedresize";d.dispatch.apply(g,h)};c&&clearTimeout(c);f?e():c=setTimeout(e,b.threshold)},threshold:150}})(jQuery);

	$(function() {
		// slide navigation
		tisa_slide_navigation.init();
		// accordion navigation
		tisa_accordion_navigation.init();
		// top dropdown navigation
		tisa_top_navigation.init();
		// default tooltips, popovers iniy
		tisa_tooltips_popovers.init();
		// custom color picker
		tisa_custom_color_picker.init();
		// slidebar
		tisa_slidebar.init();
	})

	// slide navigation
	tisa_slide_navigation = {
		init: function() {
			if($('#side_nav').length) {
				
				var nav_timeout = 425, leftPos = 220;
				
				$('#side_nav > ul > li').each(function() {
					if($(this).children('.sub_panel').length) {
						$(this).addClass('nav_trigger');
					}
				});
				
				// adjust nav position
				var nav_side_position = ($('body').hasClass('side_nav_narrow') || $(window).width() <= 992) ? '50' : '80';
				
				if(!is_touch_device()) {
				
					// non-touch devices (hover)
					
					$('body').addClass('side_nav_hover');
					
					// hoverintent
					(function(e){e.fn.hoverIntent=function(t,n){var r={sensitivity:7,interval:100,timeout:0};r=e.extend(r,n?{over:t,out:n}:t);var i,s,o,u;var a=function(e){i=e.pageX;s=e.pageY};var f=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(o-i)+Math.abs(u-s)<r.sensitivity){e(n).unbind("mousemove",a);n.hoverIntent_s=1;return r.over.apply(n,[t])}else{o=i;u=s;n.hoverIntent_t=setTimeout(function(){f(t,n)},r.interval)}};var l=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return r.out.apply(t,[e])};var c=function(t){var n=jQuery.extend({},t);var i=this;if(i.hoverIntent_t){i.hoverIntent_t=clearTimeout(i.hoverIntent_t)}if(t.type=="mouseenter"){o=n.pageX;u=n.pageY;e(i).bind("mousemove",a);if(i.hoverIntent_s!=1){i.hoverIntent_t=setTimeout(function(){f(n,i)},r.interval)}}else{e(i).unbind("mousemove",a);if(i.hoverIntent_s==1){i.hoverIntent_t=setTimeout(function(){l(n,i)},r.timeout)}}};return this.bind("mouseenter",c).bind("mouseleave",c)}})(jQuery);
					
					$('#side_nav .nav_trigger').hoverIntent({
						over: function() {
							var $this = $(this);
							$this.addClass('nav_open');
							$this.find('.sub_panel').stop(true, true).animate({left : nav_side_position}, nav_timeout, 'easeInOutExpo',function() {
								tisa_slide_navigation.scroll_bar();
							});
						},
						out: function() {
							var $this = $(this);
							$this.removeClass('nav_open');
							$this.find('.sub_panel').stop(true, true).animate({left : -leftPos}, nav_timeout, 'easeInOutExpo');
						},
						interval: 50,
						timeout: 50
					}).children('a').click(function(e) {
						e.preventDefault();
					});
					
				} else {
					// touch devices (touchstart)
						
					$('body').addClass('side_nav_click');
					
					$('#side_nav .nav_trigger > a').on('touchstart',function(e){
						e.stopPropagation();
						e.preventDefault();
						var $this = $(this),$this_parent = $this.closest('.nav_trigger');
						
						if ($this_parent.hasClass('nav_open')) {
							$this_parent.removeClass('nav_open').find('.sub_panel').stop(true, true).animate({left : -leftPos}, nav_timeout, 'easeInOutExpo');
						} else {
							$('#side_nav .nav_trigger').removeClass('nav_open').find('.sub_panel').stop(true, true).animate({left : -leftPos}, nav_timeout, 'easeInOutExpo');
							$this_parent.addClass('nav_open').find('.sub_panel').stop(true, true).animate({left : nav_side_position}, nav_timeout, 'easeInOutExpo',function() {
								tisa_slide_navigation.scroll_bar();
							});
						}
						tisa_slide_navigation.scroll_bar();
					})
					
				}
				
				// update side navigation position on window resize/orientation change
				$(window).on("debouncedresize", function( event ) {
					$('#side_nav .nav_trigger').removeClass('nav_open').find('.sub_panel').stop(true, true).animate({left : -leftPos}, nav_timeout, 'easeInOutExpo');
					nav_side_position = ($('body').hasClass('side_nav_narrow') || $(window).width() <= 992) ? '50' : '80';
				});
				
			}
		},
		scroll_bar: function() {
			
			var subpanel_height = $('.nav_open .sub_panel').height() - 42;
			
			// side menu scroll bar
			if (!$('.nav_open .side_inner').hasClass('ps-ready')) {
				$('.nav_open .side_inner').addClass('ps-ready').height(subpanel_height).perfectScrollbar({
					wheelSpeed: 100,
					suppressScrollX: true
				});
			} else {
				$('.nav_open .ps-ready').height(subpanel_height).animate({ scrollTop: 0 }).perfectScrollbar('update');
			}
		}
	}

	// accordion navigation
	tisa_accordion_navigation = {
		init: function() {
			if($('#side_nav_acc_wrapper').length) {
				
				var $accordion_nav = $('#side_nav_acc');
				
				$('#side_nav_acc_wrapper > ul').wrap('<div id="side_nav_acc" />');
				$('header .navbar-header').before('<div id="side_nav_acc_toggle"><span class="ion-navicon-round"></span></div>');
				
				// show/hide accordion navigation
				$('#side_nav_acc_toggle').click(function() {
					$('body').toggleClass('side_nav_accordion_hidden');
				})
				
				// check for sections
				$('#side_nav_acc > ul > li').each(function() {
					if($(this).children('.sub_panel').length) {
						$(this).addClass('nav_trigger');
					}
				});
			
				// get nav_trigger top position
				$(this).children('.sub_panel').css('display','none');
				$('.nav_trigger').each(function() {
					var el_pos_top = $(this).position().top;
					$(this).data("nav_pos_top",el_pos_top);
				});
				$(this).children('.sub_panel').css('display','');
			
				// set accordion height
				$('#side_nav_acc').height($('#side_nav_acc_wrapper').height() - 42);
			
				// show section
				$('.nav_trigger > a').click(function(e) {
					e.preventDefault();
					
					var $this = $(this),
						$this_parent = $this.parent('.nav_trigger'),
						panel_active = $this_parent.hasClass('sub_panel_active'),
						el_pos = '0';
						
					$('.sub_panel_active').children('.sub_panel').slideUp(400,function() {
						$(this).parent('.nav_trigger').removeClass('sub_panel_active');
					});
	
					if (!panel_active) {
						$this.next('.sub_panel').slideDown(400,function() {
							$this_parent.addClass('sub_panel_active');
							if ($('#side_nav_acc').height() > $('#side_nav_acc > ul').height()) {
								var el_pos = 0;
							} else {
								var el_pos = $this_parent.data("nav_pos_top");
							}
							tisa_accordion_navigation.scroll_bar( el_pos );
						});
					} else {
						tisa_accordion_navigation.scroll_bar( el_pos );
					}
					
				})
				
				// update accordion scroolbar on window resize/orientation change
				$(window).on("debouncedresize", function( event ) {
					// set accordion height
					$('#side_nav_acc').height($('#side_nav_acc_wrapper').height() - 42);
					
					if($('.sub_panel_active').length) {
						var el_pos = $('.sub_panel_active').data("nav_pos_top");
					} else {
						var el_pos = '0';
					}
					tisa_accordion_navigation.scroll_bar( el_pos );
				});
			
			}
		},
		scroll_bar: function(el_pos) {
			
			// scroll to section
			is_touch_device() ? $('#side_nav_acc').animate({ scrollTop: 0 }) : $('#side_nav_acc').animate({ scrollTop: el_pos });
				
			if(!$('#side_nav_acc').hasClass('ps-container')) {
				$('#side_nav_acc').perfectScrollbar({
					wheelSpeed: 100,
					suppressScrollX: true,
					scrollYMarginOffset: 4
				});
			} else {
				$('#side_nav_acc').perfectScrollbar('update');
			}

		}
	}

	// top dropdown navigation (mobile nav)
	tisa_top_navigation = {
		init: function() {
			$('.top_links').tinyNav({
				active: 'selected',
				select_class: 'form-control input-sm',
				header: '-- Nav --'
			});
		}
	}

	// default tooltips, popovers init
	tisa_tooltips_popovers = {
		init: function() {
			$('[data-toggle=tooltip]').tooltip({
				container: "body"
			})
			$('[data-toggle=popover]').popover({
				container: "body"
			});
		}
	}
	
	// custom color picker
	tisa_custom_color_picker = {
		init: function() {
			
			$('.ts_label').each(function() {
				$(this)
				.append('<ul class="ts_picker" style="display:none"><li class="color_a"></li><li class="color_b"></li><li class="color_c"></li><li class="color_d"></li><li class="color_e"></li><li class="color_f"></li><li class="color_g"></li><li class="color_h"></li><li class="color_i"></li></ul>')
				.children('span').click(function() {
					$('.ts_picker').hide();
					$('.ts_label').children('span').removeClass('act_picker');
					$(this).toggleClass('act_picker');
					if($(this).hasClass('act_picker')) {
						$(this).next('.ts_picker').show();
					} else {
						$(this).next('.ts_picker').hide();
					}
					
				});
			})
			
			$('.ts_picker').on('click','li',function() {
				var this_color = $(this).attr('class');
				$(this).closest('.ts_picker').hide().prev().removeAttr('class').addClass(this_color);
			})
			
		}
	}
	
	// slidebar
	tisa_slidebar = {
		init: function() {
			
			if ($('#slidebar').length) {
				
				var sbEvent = "click",
					$slide_toggle = $('.slidebar-toggle'),
					$slidebar = $('#slidebar');
				
				// toggle slidebar
				$slide_toggle.on(sbEvent,function(e) {
					e.stopPropagation();
					e.preventDefault();
					
					if($('body').hasClass('slidebar-active')) {
						$('body').removeClass('slidebar-active');
					} else {
						$('body').addClass('slidebar-active');
					}
					
				})
				
				// close sidebar on document click (prevent closing if clicked inside slidebar)
				$(document).on('click touchend', function(e) {
					if($('body').hasClass('slidebar-active')) {
						if ( (!$slidebar.is(e.target) && $slidebar.has(e.target).length === 0) && (!$slide_toggle.is(e.target) && $slide_toggle.has(e.target).length === 0) ) {
							$('body').removeClass('slidebar-active');
						}
					}
				});
				
				// scrollbar
				$('#slidebar_content').height($slidebar.height() - 42).perfectScrollbar({
					wheelSpeed: 100,
					suppressScrollX: true,
					useKeyboard: false
				});
				
				// update scrollbar on window resize
				$(window).on("debouncedresize", function( event ) {
					$('#slidebar_content').height($slidebar.height() - 42).scrollTop(0).perfectScrollbar('update');
				});
				
			}
		}
	}