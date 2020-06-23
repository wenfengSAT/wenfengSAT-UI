var isIE8 = false,
    isIE9 = false,
    inner = $(".main-wrapper > .inner"),
    supportTransition = true,
    closedbar = $(".closedbar"),
    isMobile = false,
    isIEMobile = false,
    $body = $("body"),
    $windowWidth, $windowHeight, subViews = $(".subviews"),
    sideLeft = $('#pageslide-left'),
    sideRight = $('#pageslide-right'),
    mainNavigation = $('.main-navigation'),
    sidebarWidth = sideLeft.outerWidth(true),
    topBar = $(".topbar"),
    mainContainer = $(".main-container"),
    mainContent = $(".main-content"),
    footer = $(".main-wrapper > footer");
var thisSlider, actualItemWidth, newItemWidth, activeAnimation = false,
    hoverSideBar = false;;

// Debounce Function
(function($, sr) {
    "use strict";
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };
    // smartresize
    jQuery.fn[sr] = function(fn) {
        return fn ? this.on('resize', debounce(fn)) : this.trigger(sr);
    };

})(jQuery, 'espressoResize');

//Main Function
var Main = function() {
    "use strict";
    //function to init app
    var runInit = function() {
        // Detection for IE Version
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            var ieversion = new Number(RegExp.$1);
            if (ieversion == 8) {
                isIE8 = true;
                $body.addClass('isIE8');
            } else if (ieversion == 9) {
                isIE9 = true;
                $body.addClass('isIE9');
            }
        }
        // Detection for Mobile Device
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            isMobile = true;
            $body.addClass('isMobile');
        };
        // Detection for CSS Transitions Support
        var thisBody = document.body || document.documentElement,
            thisStyle = thisBody.style;
        supportTransition = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
        // active perfectScrollbar only in desktop devices
        if ($body.hasClass("isMobile") == false && mainNavigation.length) {
            mainNavigation.perfectScrollbar({
                wheelSpeed: 50,
                minScrollbarLength: 20,
                suppressScrollX: true
            });
            $(".right-wrapper").perfectScrollbar({
                wheelSpeed: 50,
                minScrollbarLength: 20,
                suppressScrollX: true
            });

        }
        // clones the horizontal menu and inserts it into left sidebar for mobile devices
        if ($("#horizontal-menu").length) {
            if ($(".main-navigation-menu").length) {
                $("#horizontal-menu").find(".nav").clone().removeClass("nav navbar-nav").addClass("main-navigation-menu core-menu").find("li.dropdown").removeClass("dropdown").find("a").removeClass("dropdown-toggle").removeAttr("data-toggle").end().end().find("ul.dropdown-menu").removeClass("dropdown-menu").addClass("sub-menu").end().addClass("hidden-md hidden-lg").insertBefore(".main-navigation-menu");
            } else if ($(".user-profile").length) {
                $("#horizontal-menu").find(".nav").clone().removeClass("nav navbar-nav").addClass("main-navigation-menu core-menu").find("li.dropdown").removeClass("dropdown").find("a").removeClass("dropdown-toggle").removeAttr("data-toggle").end().end().find("ul.dropdown-menu").removeClass("dropdown-menu").addClass("sub-menu").end().addClass("hidden-md hidden-lg").insertAfter(".user-profile");
            } else {
                $("#horizontal-menu").find(".nav").clone().removeClass("nav navbar-nav").addClass("main-navigation-menu core-menu").find("li.dropdown").removeClass("dropdown").find("a").removeClass("dropdown-toggle").removeAttr("data-toggle").end().end().find("ul.dropdown-menu").removeClass("dropdown-menu").addClass("sub-menu").end().addClass("hidden-md hidden-lg").prependTo(".main-navigation");
            }

        }

        // set blockUI options
        if ($.blockUI) {
            $.blockUI.defaults.css.border = 'none';
            $.blockUI.defaults.css.padding = '20px 5px';
            $.blockUI.defaults.css.width = '20%';
            $.blockUI.defaults.css.left = '40%';
            $.blockUI.defaults.overlayCSS.backgroundColor = '#DDDDDD';
        }

        // Add Fade Animation to Dropdown
        $('.dropdown').on('show.bs.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(300);
        });
        $('.dropdown').on('hide.bs.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(300);
        });

        // change closebar height when footer appear
        if ($.fn.appear) {
            if (isMobile == false) {
                footer.appear();
                footer.on("appear", function(event, $all_appeared_elements) {

                    closedbar.css({
                        bottom: (footer.outerHeight(true) + 1) + "px"
                    });
                });
                footer.on("disappear", function(event, $all_disappeared_elements) {

                    closedbar.css({
                        bottom: 1 + "px"
                    });
                });
            }
        }

    };
    //function to get viewport/window size (width and height)
    var viewport = function() {
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
    };
    //function to close searchbox, pageslide-left and pageslide-right when the user clicks outside of them
    var documentEvents = function() {
        $("html").click(function(e) {
            if (!e.isDefaultPrevented()) {
                if ($('.search-box').is(":visible")) {
                    $('.search-box').velocity({
                        scale: 0.9,
                        opacity: 0
                    }, 400, 'easeInBack', function() {
                        $(this).hide();
                    });
                }

                if ($body.hasClass("right-sidebar-open") && !hoverSideBar && !isMobile) {
                    $(".sb-toggle-right").trigger("click");
                } else if ($body.hasClass("sidebar-mobile-open") && !hoverSideBar && !isMobile) {
                    $("header .sb-toggle-left").trigger("click");
                }
            }
        });
        if (isMobile) {
            $("html").swipe({
                swipeLeft: function(event, direction, distance, duration, fingerCount) {
                    if ($body.hasClass("sidebar-mobile-open")) {
                        $("header .sb-toggle-left").trigger("click");
                    }
                },
                swipeRight: function(event, direction, distance, duration, fingerCount) {
                    if ($body.hasClass("right-sidebar-open")) {
                        $(".sb-toggle-right").trigger("click");
                    }
                }
            });
        }

    };

    // function to handle SlideBar Toggle
    var runSideBarToggle = function() {
        $(".sb_toggle").click(function() {
            var sb_toggle = $(this);
            $("#slidingbar").slideToggle("fast", function() {
                if (sb_toggle.hasClass('open')) {
                    sb_toggle.removeClass('open');
                } else {
                    sb_toggle.addClass('open');
                }
            });
        });
    };
    // function to adjust the template elements based on the window size
    var runElementsPosition = function() {
        $windowWidth = viewport().width;
        $windowHeight = viewport().height;
        runContainerHeight();

    };

    //function to adapt the Main Content height to the Main Navigation height
    var runContainerHeight = function() {
        if (subViews.is(':visible')) {
            $('.main-container').css({

                'max-height': $windowHeight - topBar.outerHeight(true),
                'min-height': $windowHeight - topBar.outerHeight(true),

            });
        }
        if ($("#slidingbar-area").is(':visible')) {
            $("#slidingbar-area").css({
                'max-height': $windowHeight
            });
        }
        if ($windowWidth > 991) {
            mainNavigation.css({
                height: $windowHeight - topBar.outerHeight(true) - $(".slide-tools").outerHeight(true)
            });
            $(".navbar-content").css({
                height: $windowHeight - topBar.outerHeight(true)
            });
        } else {
            mainNavigation.css({
                height: $windowHeight - $(".slide-tools").outerHeight(true)
            });
            $(".navbar-content").css({
                height: $windowHeight
            });
        }

        $(".right-wrapper").css({
            height: $windowHeight
        });

        if ($body.hasClass("isMobile") == false && mainNavigation.length) {
            mainNavigation.perfectScrollbar('update');
            $(".right-wrapper").perfectScrollbar('update');
        }
        if ($("#horizontal-menu").length) {
            mainContent.css({
                "min-height": $windowHeight - topBar.outerHeight(true) - $("#horizontal-menu").outerHeight(true) - footer.outerHeight(true)
            });
        } else {
            mainContent.css({
                "min-height": $windowHeight - topBar.outerHeight(true) - footer.outerHeight(true)
            });
        }

        if (subViews.is(":visible")) {
            subViews.css({
                height: $windowHeight - topBar.outerHeight(true) - $(".toolbar").outerHeight(true)
            });
        }

    };
    // function to activate the ToDo list, if present
    var runToDoAction = function() {
        if ($(".todo-actions").length) {
            $(".todo-actions > i").click(function() {
                if ($(this).hasClass("fa-square-o") || $(this).hasClass("icon-check-empty")) {

                    $(this).removeClass("fa-square-o").addClass("fa-check-square-o").parent().find("span").css({
                        opacity: .25
                    }).end().find(".todo-tools").hide().end().parent().find(".desc").css("text-decoration", "line-through");
                } else {
                    $(this).removeClass("fa-check-square-o").addClass("fa-square-o").parent().find("span").css({
                        opacity: 1
                    }).end().find(".todo-tools").show().end().parent().find(".desc").css("text-decoration", "none");
                }
                return !1;
            });
        }
    };
    //capture the user's attention with some animation
    var runAnimatedElements = function() {
        /*
		 if($('.messages-count').length) {
		 setTimeout(function() {
		 $('.messages-count').removeClass('hide');
		 $('.messages-count').addClass('animated bounceIn');
		 }, 4000);
		 }
		 */
        if ($('.tooltip-notification').length) {
            setTimeout(function() {
                $('.tooltip-notification').removeClass('hide');
                $('.tooltip-notification').addClass('animated fadeIn');
            }, 5000);
            setTimeout(function() {
                $('.tooltip-notification').velocity({
                    opacity: 0
                }, 300, 'ease', function() {
                    $(this).removeClass('animated bounceIn').addClass('hide');
                });
            }, 8000);
        }

        if ($('.notifications-count').length) {
            setTimeout(function() {
                $('.notifications-count').removeClass('hide');
                $('.notifications-count').addClass('animated bounceIn');
            }, 10000);
        }
    };
    //function to run quick chat
    var runQuickChat = function() {
        $("#users").css({
            minHeight: $("#users .users-list").outerHeight()
        });
        $(".users-list .media a").on("click", function(e) {
            $(this).closest(".tab-pane").find(".user-chat").show().end().css({
                right: sideRight.outerWidth()
            });
            $(".right-wrapper").perfectScrollbar('update');
            e.preventDefault();
        });
        $(".user-chat .sidebar-back").on("click", function(e) {
            $(this).closest(".tab-pane").find(".user-chat").hide().end().css({
                right: 0
            });
            $(".right-wrapper").perfectScrollbar('update');
            e.preventDefault();
        });

        $('#sidebar-tab a').on('shown.bs.tab', function(e) {

            $(".right-wrapper").perfectScrollbar('update');
        });
    };
    //Search Box Function
    var setSearchMenu = function() {
        $('.menu-search > a').on('click', function(e) {
            if ($('.search-box').is(":hidden")) {
                $('.search-box').css({
                    scale: 0.8,
                    opacity: 0,
                    display: 'block'
                }).velocity({
                    scale: 1,
                    opacity: 1
                }, 400, 'easeOutBack');
            } else {
                $('.search-box').velocity({
                    scale: 0.9,
                    opacity: 0
                }, 400, 'easeInBack', function() {
                    $(this).hide();
                });
            }
            e.preventDefault();

        });
        $('.menu-search').on('click', function(e) {
            e.preventDefault();
        });
    };
    //function to activate the Tooltips, if present
    var runTooltips = function() {
        if ($(".tooltips").length) {
            $('.tooltips').tooltip();
        }
    };
    //function to activate the Popovers, if present
    var runPopovers = function() {
        if ($(".popovers").length) {
            $('.popovers').popover();
        }
    };
    // function to allow a button or a link to open a tab
    var runShowTab = function(e) {
        if ($(".show-tab").length) {
            $('.show-tab').on('click', function(e) {
                e.preventDefault();
                var tabToShow = $(this).attr("href");
                if ($(tabToShow).length) {
                    $('a[href="' + tabToShow + '"]').tab('show');
                }
            });
        };
        if (getParameterByName('tabId').length) {
            $('a[href="#' + getParameterByName('tabId') + '"]').tab('show');
        }
    };
    // function to enable panel scroll with perfectScrollbar
    var runPanelScroll = function() {
        if ($(".panel-scroll").length && $body.hasClass("isMobile") == false) {
            $('.panel-scroll').perfectScrollbar({
                wheelSpeed: 50,
                minScrollbarLength: 20,
                suppressScrollX: true
            });
        }
    };
    //function to activate the panel tools
    var runModuleTools = function() {
        // fullscreen
        $('body').on('click', '.panel-expand', function(e) {
            e.preventDefault();
            $('.panel-tools > a, .panel-tools .dropdown').hide();

            if ($('.full-white-backdrop').length == 0) {
                $body.append('<div class="full-white-backdrop"></div>');
            }
            var backdrop = $('.full-white-backdrop');
            var wbox = $(this).parent().parents('.panel');
            wbox.attr('style', '');
            if (wbox.hasClass('panel-full-screen')) {
                backdrop.fadeIn(200, function() {
                    $('.panel-tools > .tmp-tool').remove();
                    $('.panel-tools > a, .panel-tools .dropdown').show();
                    wbox.removeClass('panel-full-screen');
                    backdrop.fadeOut(200, function() {
                        backdrop.remove();
                        $(window).trigger('resize');
                    });
                });
            } else {

                backdrop.fadeIn(200, function() {

                    $('.panel-tools').append("<a class='panel-expand tmp-tool' href='#'><i class='fa fa-compress'></i></a>");
                    backdrop.fadeOut(200, function() {
                        backdrop.hide();
                    });
                    wbox.addClass('panel-full-screen').css({
                        'max-height': $windowHeight,
                        'overflow': 'auto'
                    });
                    $(window).trigger('resize');
                });
            }
        });
        // panel close
        $('body').on('click', '.panel-close', function(e) {
            $(this).parents(".panel").fadeOut();
            e.preventDefault();
        });
        // panel refresh
        $('body').on('click', '.panel-refresh', function(e) {
            var el = $(this).parents(".panel");
            el.block({
                overlayCSS: {
                    backgroundColor: '#fff'
                },
                message: '<i class="fa fa-spinner fa-spin"></i>',
                css: {
                    border: 'none',
                    color: '#333',
                    background: 'none'
                }
            });
            window.setTimeout(function() {
                el.unblock();
            }, 1000);
            e.preventDefault();
        });
        // panel collapse
        $('body').on('click', '.panel-collapse', function(e) {
            e.preventDefault();
            var el = $(this);
            var bodyPanel = jQuery(this).parent().closest(".panel").children(".panel-body");
            if ($(this).hasClass("collapses")) {
                bodyPanel.slideUp(200, function() {
                    el.addClass("expand").removeClass("collapses").children("span").text("Expand").end().children("i").addClass("fa-rotate-180");
                });
            } else {
                bodyPanel.slideDown(200, function() {
                    el.addClass("collapses").removeClass("expand").children("span").text("Collapse").end().children("i").removeClass("fa-rotate-180");
                });
            }
        });
    };
    //function to activate the main menu functionality
    var runNavigationMenu = function() {
        if ($("body").hasClass("single-page") == false) {
            $('.main-navigation-menu > li.active').addClass('open');
            $('.main-navigation-menu > li a').on('click', function() {

                if ($(this).parent().children('ul').hasClass('sub-menu') && ((!$body.hasClass('navigation-small') || $windowWidth < 767) || !$(this).parent().parent().hasClass('main-navigation-menu'))) {
                    if (!$(this).parent().hasClass('open')) {
                        $(this).parent().addClass('open');
                        $(this).parent().parent().children('li.open').not($(this).parent()).not($('.main-navigation-menu > li.active')).removeClass('open').children('ul').slideUp(200);
                        $(this).parent().children('ul').slideDown(200, function() {
                            if (mainNavigation.height() > $(".main-navigation-menu").outerHeight()) {

                                mainNavigation.scrollTo($(this).parent("li"), 300, {
                                    onAfter: function() {
                                        if ($body.hasClass("isMobile") == false) {
                                            mainNavigation.perfectScrollbar('update');
                                        }
                                    }
                                });
                            } else {

                                mainNavigation.scrollTo($(this).parent("li"), 300, {
                                    onAfter: function() {
                                        if ($body.hasClass("isMobile") == false) {
                                            mainNavigation.perfectScrollbar('update');
                                        }
                                    }
                                });
                            }
                        });
                    } else {
                        if (!$(this).parent().hasClass('active')) {
                            $(this).parent().parent().children('li.open').not($('.main-navigation-menu > li.active')).removeClass('open').children('ul').slideUp(200, function() {
                                if (mainNavigation.height() > $(".main-navigation-menu").outerHeight()) {
                                    mainNavigation.scrollTo(0, 300, {
                                        onAfter: function() {
                                            if ($body.hasClass("isMobile") == false) {
                                                mainNavigation.perfectScrollbar('update');
                                            }
                                        }
                                    });
                                } else {
                                    mainNavigation.scrollTo($(this).parent("li").closest("ul").children("li:eq(0)"), 300, {
                                        onAfter: function() {
                                            if ($body.hasClass("isMobile") == false) {
                                                mainNavigation.perfectScrollbar('update');
                                            }
                                        }
                                    });
                                }
                            });
                        } else {
                            $(this).parent().parent().children('li.open').removeClass('open').children('ul').slideUp(200, function() {
                                if (mainNavigation.height() > $(".main-navigation-menu").outerHeight()) {
                                    mainNavigation.scrollTo(0, 300, {
                                        onAfter: function() {
                                            if ($body.hasClass("isMobile") == false) {
                                                mainNavigation.perfectScrollbar('update');
                                            }
                                        }
                                    });
                                } else {
                                    mainNavigation.scrollTo($(this).parent("li"), 300, {
                                        onAfter: function() {
                                            if ($body.hasClass("isMobile") == false) {
                                                mainNavigation.perfectScrollbar('update');
                                            }
                                        }
                                    });
                                }
                            });
                        }
                    }
                } else {
                    $(this).parent().addClass('active');
                }
            });
        } else {
            var url, ajaxContainer = $("#ajax-content");
            var start = $('.main-navigation-menu li.start');
            if (start.length) {
                start.addClass("active");
                if (start.closest('ul').hasClass('sub-menu')) {
                    start.closest('ul').parent('li').addClass('active open');
                }
                url = start.children("a").attr("href");
                ajaxLoader(url, ajaxContainer);
            }
            $('.main-navigation-menu > li.active').addClass('open');
            $('.main-navigation-menu > li a').on('click', function(e) {
                e.preventDefault();
                var $this = $(this);

                if ($this.parent().children('ul').hasClass('sub-menu') && (!$('body').hasClass('navigation-small') || !$this.parent().parent().hasClass('main-navigation-menu'))) {
                    if (!$this.parent().hasClass('open')) {
                        $this.parent().addClass('open');
                        $this.parent().parent().children('li.open').not($this.parent()).not($('.main-navigation-menu > li.active')).removeClass('open').children('ul').slideUp(200);
                        $this.parent().children('ul').slideDown(200, function() {
                            runContainerHeight();
                        });
                    } else {
                        if (!$this.parent().hasClass('active')) {
                            $this.parent().parent().children('li.open').not($('.main-navigation-menu > li.active')).removeClass('open').children('ul').slideUp(200, function() {
                                runContainerHeight();
                            });
                        } else {
                            $this.parent().parent().children('li.open').removeClass('open').children('ul').slideUp(200, function() {
                                runContainerHeight();
                            });
                        }
                    }
                } else {

                    $('.main-navigation-menu ul.sub-menu li').removeClass('active');
                    $this.parent().addClass('active');
                    var closestUl = $this.parent('li').closest('ul');
                    if (closestUl.hasClass('main-navigation-menu')) {
                        $('.main-navigation-menu > li.active').removeClass('active').removeClass('open').children('ul').slideUp(200);
                        $this.parents('li').addClass('active');
                    } else if (!closestUl.parent('li').hasClass('active') && !closestUl.parent('li').closest('ul').hasClass('sub-menu')) {
                        $('.main-navigation-menu > li.active').removeClass('active').removeClass('open').children('ul').slideUp(200);
                        $this.parent('li').closest('ul').parent('li').addClass('active');
                    } else {

                        if (closestUl.parent('li').closest('ul').hasClass('sub-menu')) {
                            if (!closestUl.parents('li.open').hasClass('active')) {
                                $('.main-navigation-menu > li.active').removeClass('active').removeClass('open').children('ul').slideUp(200);
                                closestUl.parents('li.open').addClass('active');
                            }
                        }

                    }
                    url = $(this).attr("href");
                    ajaxLoader(url, ajaxContainer);
                };
            });
        }
    };
    // function to load content with ajax
    var ajaxLoader = function(url, element) {
        element.removeClass("fadeIn shake");
        var backdrop = $('.ajax-white-backdrop');

        $(".main-container").append('<div class="ajax-white-backdrop"></div>');
        backdrop.show();

        if ($body.hasClass("sidebar-mobile-open")) {
            var configAnimation, extendOptions, globalOptions = {
                duration: 200,
                easing: "ease",
                mobileHA: true,
                progress: function() {
                    activeAnimation = true;
                }
            };
            extendOptions = {
                complete: function() {
                    inner.attr('style', '').removeClass("inner-transform");
                    // remove inner-transform (hardware acceleration) for restore z-index
                    $body.removeClass("sidebar-mobile-open");
                    loadPage(url, element);
                    activeAnimation = false;
                }
            };
            configAnimation = $.extend({}, extendOptions, globalOptions);

            inner.velocity({
                translateZ: 0,
                translateX: [-sidebarWidth, 0]
            }, configAnimation);
        } else {
            loadPage(url, element);
        }

        function loadPage(url, element) {
            $.ajax({
                type: "GET",
                cache: false,
                url: url,
                dataType: "html",
                success: function(data) {
                    backdrop.remove();

                    element.html(data).addClass("fadeIn");

                },
                error: function(xhr, ajaxOptions, thrownError) {
                    backdrop.remove();
                    element.html('<h4>Could not load the requested content.</h4>').addClass("shake");

                }
            });
        };
    };
    // function to initiate owlCarousel
    var runESlider = function(options) {
        $(".e-slider").each(function() {
            var slider = $(this);
            var setAutoPlay = !isMobile;
            // AutoPlay False for mobile devices
            var defaults = {
                mouseDrag: false,
                touchDrag: true,
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                navigation: false,
                autoPlay: setAutoPlay
            };
            var config = $.extend({}, defaults, options, slider.data("plugin-options"));

            // Initialize Slider
            slider.owlCarousel(config);
        });
    };

    // function to activate Selectpicker, if present
    var runSelecticker = function() {
        if ($.fn.selectpicker) {
            $('.selectpicker').selectpicker();
        }
    };
    // function to activate moment#fromNow
    var runTimeStamp = function() {
        $(".timestamp").each(function() {
            var startOfPeriod = moment($(this).attr("title"));
            $(this).text(moment(startOfPeriod).startOf('hour').fromNow());
        });
    };
    //function to Right and Left PageSlide
    var runToggleSideBars = function() {
        var configAnimation, extendOptions, globalOptions = {
            duration: 150,
            easing: "ease",
            mobileHA: true,
            progress: function() {
                activeAnimation = true;
            }
        };
        $("#pageslide-left, #pageslide-right").on("mouseover", function(e) {
            hoverSideBar = true;
        }).on("mouseleave", function(e) {
            hoverSideBar = false;
        });
        $(".sb-toggle-left, .closedbar").on("click", function(e) {
            if (activeAnimation == false) {
                if ($windowWidth > 991) {
                    $body.removeClass("sidebar-mobile-open");
                    if ($body.hasClass("sidebar-close")) {
                        if ($body.hasClass("layout-boxed") || $body.hasClass("isMobile")) {
                            $body.removeClass("sidebar-close");
                            closedbar.removeClass("open");
                            $(window).trigger('resize');
                        } else {
                            closedbar.removeClass("open").hide();
                            closedbar.css({
                                //translateZ: 0,
                                left: -closedbar.width()
                            });

                            extendOptions = {
                                complete: function() {
                                    $body.removeClass("sidebar-close");
                                    $(".main-container, #pageslide-left, #footer .footer-inner, #horizontal-menu .container, .closedbar").attr('style', '');
                                    $(window).trigger('resize');
                                    activeAnimation = false;
                                }
                            };
                            configAnimation = $.extend({}, extendOptions, globalOptions);
                            $(".main-container, footer .footer-inner, #horizontal-menu .container").velocity({
                                //translateZ: 0,
                                marginLeft: sidebarWidth
                            }, configAnimation);

                        }

                    } else {
                        if ($body.hasClass("layout-boxed") || $body.hasClass("isMobile")) {
                            $body.addClass("sidebar-close");
                            closedbar.addClass("open");
                            $(window).trigger('resize');
                        } else {
                            sideLeft.css({
                                zIndex: 0

                            });
                            extendOptions = {
                                complete: function() {
                                    closedbar.show().velocity({
                                        //translateZ: 0,
                                        left: 0
                                    }, 100, 'ease', function() {
                                        activeAnimation = false;
                                        closedbar.addClass("open");
                                        $body.addClass("sidebar-close");
                                        $(".main-container, footer .footer-inner, #horizontal-menu .container, .closedbar").attr('style', '');
                                        $(window).trigger('resize');
                                    });
                                }
                            };
                            configAnimation = $.extend({}, extendOptions, globalOptions);
                            $(".main-container, footer .footer-inner, #horizontal-menu .container").velocity({
                                //translateZ: 0,
                                marginLeft: 0
                            }, configAnimation);
                        }
                    }

                } else {
                    if ($body.hasClass("sidebar-mobile-open")) {
                        if (supportTransition) {
                            extendOptions = {
                                complete: function() {
                                    inner.attr('style', '').removeClass("inner-transform");
                                    // remove inner-transform (hardware acceleration) for restore z-index
                                    $body.removeClass("sidebar-mobile-open");
                                    activeAnimation = false;
                                }
                            };
                            configAnimation = $.extend({}, extendOptions, globalOptions);

                            inner.velocity({
                                translateZ: 0,
                                translateX: [-sidebarWidth, 0]
                            }, configAnimation);
                        } else {
                            $body.removeClass("sidebar-mobile-open");
                        }
                    } else {
                        if (supportTransition) {
                            inner.addClass("inner-transform");
                            // add inner-transform for hardware acceleration
                            extendOptions = {
                                complete: function() {
                                    inner.attr('style', '');
                                    $body.addClass("sidebar-mobile-open");
                                    activeAnimation = false;
                                }
                            };
                            configAnimation = $.extend({}, extendOptions, globalOptions);
                            inner.velocity({
                                translateZ: 0,
                                translateX: [sidebarWidth, 0]
                            }, configAnimation);
                        } else {
                            $body.addClass("sidebar-mobile-open");
                        }

                    }
                }
            }
            e.preventDefault();
        });
        $(".sb-toggle-right").on("click", function(e) {
            if (activeAnimation == false) {
                if ($windowWidth > 991) {
                    $body.removeClass("sidebar-mobile-open");
                }
                if ($body.hasClass("right-sidebar-open")) {
                    if (supportTransition) {
                        extendOptions = {
                            complete: function() {
                                inner.attr('style', '').removeClass("inner-transform");
                                // remove inner-transform (hardware acceleration) for restore z-index
                                $body.removeClass("right-sidebar-open");
                                activeAnimation = false;
                            }
                        };
                        configAnimation = $.extend({}, extendOptions, globalOptions);
                        inner.velocity({
                            translateZ: 0,
                            translateX: [sidebarWidth, 0]
                        }, configAnimation);
                    } else {
                        $body.removeClass("right-sidebar-open");
                    }
                } else {
                    if (supportTransition) {
                        inner.addClass("inner-transform");
                        // add inner-transform for hardware acceleration
                        extendOptions = {
                            complete: function() {
                                inner.attr('style', '');
                                $body.addClass("right-sidebar-open");
                                activeAnimation = false;
                            }
                        };
                        configAnimation = $.extend({}, extendOptions, globalOptions);
                        inner.velocity({
                            translateZ: 0,
                            translateX: [-sidebarWidth, 0]
                        }, configAnimation);
                    } else {
                        $body.addClass("right-sidebar-open");
                    }
                }
            }
            e.preventDefault();
        });
    };
    // function to activate ClosedBar Button
    var runClosedBarButton = function() {
        var t;
        closedbar.mouseover(function() {
            if ($body.hasClass("layout-boxed") == false && $body.hasClass("isMobile") == false && closedbar.hasClass("open")) {
                t = setTimeout(function() {
                    closedbar.velocity({
                        left: -closedbar.width()
                    }, 100, 'ease');
                    sideLeft.css({
                        left: -sidebarWidth,
                        zIndex: 1021
                    }).velocity({
                        left: 0

                    }, 200, 'ease');
                }, 800);
            }

        }).mouseleave(function() {

            if ($body.hasClass("layout-boxed") == false && $body.hasClass("isMobile") == false) {
                clearTimeout(t);
            }
        });
        sideLeft.mouseleave(function() {
            if ($body.hasClass("sidebar-close") && closedbar.hasClass("open") && $body.hasClass("isMobile") == false) {
                sideLeft.velocity({
                    left: -sidebarWidth

                }, 200, 'ease', function() {
                    closedbar.velocity({
                        left: 0
                    }, 200, 'ease');
                    sideLeft.css({
                        left: 0,
                        zIndex: 0
                    });
                });
            }
        });
    };
    // function to activate the Go-Top button
    var runGoTop = function(e) {
        $('.go-top').on('click', function(e) {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            e.preventDefault();
        });
    };
    // function to refresh owlCarousel
    var runRefreshSliders = function() {
        $(".e-slider").each(function() {
            var slider = $(this).data('owlCarousel');
            slider.reinit();
        });
    };
    //function to avoid closing the dropdown on click
    var runDropdownEnduring = function() {
        if ($('.dropdown-menu.dropdown-enduring').length) {
            $('.dropdown-menu.dropdown-enduring').click(function(event) {
                event.stopPropagation();
            });
        }
    };
    //function to return the querystring parameter with a given name.
    var getParameterByName = function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    //function to activate the iCheck Plugin
    var runCustomCheck = function() {
        if ($.fn.iCheck) {
            if ($('input[type="checkbox"]').length || $('input[type="radio"]').length) {
                $('input[type="checkbox"].grey, input[type="radio"].grey').iCheck({
                    checkboxClass: 'icheckbox_minimal-grey',
                    radioClass: 'iradio_minimal-grey',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].red, input[type="radio"].red').iCheck({
                    checkboxClass: 'icheckbox_minimal-red',
                    radioClass: 'iradio_minimal-red',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].green, input[type="radio"].green').iCheck({
                    checkboxClass: 'icheckbox_minimal-green',
                    radioClass: 'iradio_minimal-green',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].teal, input[type="radio"].teal').iCheck({
                    checkboxClass: 'icheckbox_minimal-aero',
                    radioClass: 'iradio_minimal-aero',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].orange, input[type="radio"].orange').iCheck({
                    checkboxClass: 'icheckbox_minimal-orange',
                    radioClass: 'iradio_minimal-orange',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].purple, input[type="radio"].purple').iCheck({
                    checkboxClass: 'icheckbox_minimal-purple',
                    radioClass: 'iradio_minimal-purple',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].yellow, input[type="radio"].yellow').iCheck({
                    checkboxClass: 'icheckbox_minimal-yellow',
                    radioClass: 'iradio_minimal-yellow',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].square-black, input[type="radio"].square-black').iCheck({
                    checkboxClass: 'icheckbox_square',
                    radioClass: 'iradio_square',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].square-grey, input[type="radio"].square-grey').iCheck({
                    checkboxClass: 'icheckbox_square-grey',
                    radioClass: 'iradio_square-grey',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].square-red, input[type="radio"].square-red').iCheck({
                    checkboxClass: 'icheckbox_square-red',
                    radioClass: 'iradio_square-red',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].square-green, input[type="radio"].square-green').iCheck({
                    checkboxClass: 'icheckbox_square-green',
                    radioClass: 'iradio_square-green',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].square-teal, input[type="radio"].square-teal').iCheck({
                    checkboxClass: 'icheckbox_square-aero',
                    radioClass: 'iradio_square-aero',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].square-orange, input[type="radio"].square-orange').iCheck({
                    checkboxClass: 'icheckbox_square-orange',
                    radioClass: 'iradio_square-orange',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].square-purple, input[type="radio"].square-purple').iCheck({
                    checkboxClass: 'icheckbox_square-purple',
                    radioClass: 'iradio_square-purple',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].square-yellow, input[type="radio"].square-yellow').iCheck({
                    checkboxClass: 'icheckbox_square-yellow',
                    radioClass: 'iradio_square-yellow',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].flat-black, input[type="radio"].flat-black').iCheck({
                    checkboxClass: 'icheckbox_flat',
                    radioClass: 'iradio_flat',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].flat-grey, input[type="radio"].flat-grey').iCheck({
                    checkboxClass: 'icheckbox_flat-grey',
                    radioClass: 'iradio_flat-grey',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
                    checkboxClass: 'icheckbox_flat-red',
                    radioClass: 'iradio_flat-red',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].flat-green, input[type="radio"].flat-green').iCheck({
                    checkboxClass: 'icheckbox_flat-green',
                    radioClass: 'iradio_flat-green',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].flat-teal, input[type="radio"].flat-teal').iCheck({
                    checkboxClass: 'icheckbox_flat-aero',
                    radioClass: 'iradio_flat-aero',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].flat-orange, input[type="radio"].flat-orange').iCheck({
                    checkboxClass: 'icheckbox_flat-orange',
                    radioClass: 'iradio_flat-orange',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].flat-purple, input[type="radio"].flat-purple').iCheck({
                    checkboxClass: 'icheckbox_flat-purple',
                    radioClass: 'iradio_flat-purple',
                    increaseArea: '10%' // optional
                });
                $('input[type="checkbox"].flat-yellow, input[type="radio"].flat-yellow').iCheck({
                    checkboxClass: 'icheckbox_flat-yellow',
                    radioClass: 'iradio_flat-yellow',
                    increaseArea: '10%' // optional
                });
            };
        }
    };
    //Set of functions for Style Selector
    var runStyleSelector = function() {
        setColorScheme();
        setLayoutStyle();
        setHeaderStyle();
        setSideBarStyle();
        setFooterStyle();
        setBoxedBackgrounds();
    };

    var setColorScheme = function() {
        $('.icons-color a').on('click', function() {
            $('.icons-color img').each(function() {
                $(this).removeClass('active');
            });
            $(this).find('img').addClass('active');
            if ($('#skin_color').attr("rel") == "stylesheet/less") {
                $('#skin_color').next('style').remove();
                $('#skin_color').attr("rel", "stylesheet");

            }
            $('#skin_color').attr("href", "assets/css/themes/theme-" + $(this).attr('id') + ".css");
            switch ($(this).attr('id')) {
                case "style3":
                    $(".navbar-brand img").attr("src", "assets/images/logo_dark.png");
                    break;
                default:
                    $(".navbar-brand img").attr("src", "assets/images/logo.png");
                    break;
            };
        });
    };
    var setBoxedBackgrounds = function() {
        $('.boxed-patterns a').on('click', function() {
            if ($body.hasClass('layout-boxed')) {
                var classes = $body.attr("class").split(" ").filter(function(item) {
                    return item.indexOf("bg_style_") === -1 ? item : "";
                });
                $body.attr("class", classes.join(" "));
                $('.boxed-patterns img').each(function() {
                    $(this).removeClass('active');
                });
                $(this).find('img').addClass('active');
                $body.addClass($(this).attr('id'));
            } else {
                alert('Select boxed layout');
            }
        });
    };
    var setLayoutStyle = function() {
        $('select[name="layout"]').change(function() {
            if ($('select[name="layout"] option:selected').val() == 'boxed') {
                $body.addClass('layout-boxed');
                mainContainer.css({
                    marginLeft: ""
                });
                $(window).trigger('resize');
            } else {
                $body.removeClass('layout-boxed');
                closedbar.css({
                    transform: ""
                });
                $(window).trigger('resize');
            }

            $(".sb-toggle-right").trigger("click");
        });
    };
    var setHeaderStyle = function() {
        $('select[name="header"]').change(function() {
            if ($('select[name="header"] option:selected').val() == 'default')
                $body.addClass('header-default');
            else
                $body.removeClass('header-default');
        });
    };
    var setSideBarStyle = function() {
        $('select[name="sidebar"]').change(function() {
            if ($('select[name="sidebar"] option:selected').val() == 'fixed') {
                sideLeft.removeClass('slide-default');

                if ($body.hasClass("isMobile") == false) {
                    mainNavigation.perfectScrollbar({
                        wheelSpeed: 50,
                        minScrollbarLength: 20,
                        suppressScrollX: true
                    });

                }
            } else {
                sideLeft.addClass('slide-default');
                mainNavigation.perfectScrollbar("destroy");
            }
        });
    };
    var setFooterStyle = function() {
        $('select[name="footer"]').change(function() {
            if ($('select[name="footer"] option:selected').val() == 'fixed') {
                $body.addClass('footer-fixed');
            } else {
                $body.removeClass('footer-fixed');
            }
        });
    };
    //function to activate ColorPalette
    var runColorPalette = function() {
        if ($('.colorpalette').length) {
            $('.colorpalette').colorPalette().on('selectColor', function(e) {
                $(this).closest('ul').prev('a').children('i').css('background-color', e.color).end().closest('div').prev('input').val(e.color);
                runActivateLess();
            });
        };
    };

    // Window Resize Function
    var runWIndowResize = function(func, threshold, execAsap) {
        //wait until the user is done resizing the window, then execute
        $(window).espressoResize(function() {
            runElementsPosition();
            setPortfolioPanel();
            runRefreshSliders();
        });
    };
    //function to select all checkboxes in a Table
    var runCheckAll = function() {
        $('input[type="checkbox"].selectall').on('ifChecked', function(event) {
            $(this).closest("table").find(".foocheck").iCheck('check');
        }).on('ifUnchecked', function(event) {
            $(this).closest("table").find(".foocheck").iCheck('uncheck');
        });
    };
    // function to activate Responsive Portfolio Panel
    var setPortfolioPanel = function() {
        $(".portfolio-grid .item").each(function() {
            var portfolioImageW = $(this).closest(".portfolio-grid").outerWidth();
            var portfolioMaxHeight = parseInt($(this).closest(".portfolio-grid").css("max-height"));
            if (isNaN(portfolioMaxHeight) == false) {
                var portfolioImage = $(this).find("img");
                var img = new Image();
                img.onload = function() {
                    var thisWidth = portfolioImage.width();
                    var thisHeight = portfolioImage.height();
                    var thisNewWidth = portfolioImageW;
                    var thisNewHeight = thisNewWidth * thisHeight / thisWidth;
                    if (thisNewHeight < portfolioMaxHeight) {
                        thisNewHeight = portfolioMaxHeight;
                        thisNewWidth = thisNewHeight * thisWidth / thisHeight;
                        if (thisNewWidth >= portfolioImageW) {
                            portfolioImage.velocity({
                                width: thisNewWidth,
                                height: thisNewHeight,
                                left: -(thisNewWidth - portfolioImageW) / 2,
                                top: 0
                            });
                        } else {
                            thisNewWidth = portfolioImageW;
                            thisNewHeight = thisNewWidth * thisHeight / thisWidth;

                            portfolioImage.velocity({
                                width: thisNewWidth,
                                height: thisNewHeight,
                                top: -(thisNewHeight - portfolioMaxHeight) / 2,
                                left: 0
                            });
                        };
                    } else {

                        thisNewWidth = portfolioImageW;
                        thisNewHeight = thisNewWidth * thisHeight / thisWidth;

                        portfolioImage.velocity({
                            width: thisNewWidth,
                            height: thisNewHeight,
                            top: -(thisNewHeight - portfolioMaxHeight) / 2,
                            left: 0
                        });
                    }

                };
                img.src = portfolioImage.attr("src");
            }
        });
        var owlPortfolio = $(".panel-portfolio .e-slider").data('owlCarousel');
        $(".panel-portfolio .owl-next").off().on("click", function(e) {
            owlPortfolio.next();
            e.preventDefault();
        });
        $(".panel-portfolio .owl-prev").off().on("click", function(e) {
            owlPortfolio.prev();
            e.preventDefault();
        });
    };

    //function to save user settings
    var runSaveSetting = function() {
        $('.save_style').on('click', function() {
            var espressoSetting = new Object;
            if ($body.hasClass('layout-boxed')) {
                espressoSetting.layoutBoxed = true;
                $("body[class]").filter(function() {
                    var classNames = this.className.split(/\s+/);
                    for (var i = 0; i < classNames.length; ++i) {
                        if (classNames[i].substr(0, 9) === "bg_style_") {
                            espressoSetting.bgStyle = classNames[i];
                        }
                    }

                });
            } else {
                espressoSetting.layoutBoxed = false;
            };
            if ($body.hasClass('header-default')) {
                espressoSetting.headerDefault = true;
            } else {
                espressoSetting.headerDefault = false;
            };
            if ($body.hasClass('footer-fixed')) {
                espressoSetting.footerDefault = false;
            } else {
                espressoSetting.footerDefault = true;
            };
            if (sideLeft.hasClass('slide-default')) {
                espressoSetting.slideDefault = true;
            } else {
                espressoSetting.slideDefault = false;
            };
            espressoSetting.skinClass = $('#skin_color').attr('href');

            $.cookie("espresso-setting", JSON.stringify(espressoSetting));

            var el = $('#style_selector_container');
            el.block({
                overlayCSS: {
                    backgroundColor: '#000'
                },
                message: '<i class="fa fa-spinner fa-spin"></i>',
                css: {
                    border: 'none',
                    color: '#fff',
                    background: 'none'
                }
            });
            window.setTimeout(function() {
                el.unblock();
            }, 1000);
        });
    };
    //function to load user settings
    var runCustomSetting = function() {
        if ($.cookie) {
            if ($.cookie("espresso-setting")) {
                var loadSetting = jQuery.parseJSON($.cookie("espresso-setting"));
                if (loadSetting.layoutBoxed) {

                    $body.addClass('layout-boxed');
                    $('#style_selector select[name="layout"]').find('option[value="boxed"]').attr('selected', 'true');
                };
                if (loadSetting.headerDefault) {
                    $body.addClass('header-default');
                    $('#style_selector select[name="header"]').find('option[value="default"]').attr('selected', 'true');
                };
                if (!loadSetting.footerDefault) {
                    $body.addClass('footer-fixed');
                    $('#style_selector select[name="footer"]').find('option[value="fixed"]').attr('selected', 'true');
                };
                if (loadSetting.slideDefault) {
                    sideLeft.addClass('slide-default');
                    $('#style_selector select[name="sidebar"]').find('option[value="default"]').attr('selected', 'true');
                };
                if ($('#style_selector').length) {
                    $('#skin_color').attr('href', loadSetting.skinClass);

                };
                $body.addClass(loadSetting.bgStyle);
            } else {
                runDefaultSetting();
            };
        }
    };

    //function to clear user settings
    var runClearSetting = function() {
        $('.clear_style').on('click', function() {
            $.removeCookie("espresso-setting");
            $body.removeClass("layout-boxed header-default footer-fixed");
            sideLeft.removeClass('slide-default');
            $body[0].className = $body[0].className.replace(/\bbg_style_.*?\b/g, '');
            if ($('#skin_color').attr("rel") == "stylesheet/less") {
                $('#skin_color').next('style').remove();
                $('#skin_color').attr("rel", "stylesheet");

            }

            $('.icons-color img').first().trigger('click');
            runDefaultSetting();
        });
    };
    //function to restore user settings
    var runDefaultSetting = function() {
        $('#style_selector select[name="layout"]').val('default');
        $('#style_selector select[name="header"]').val('fixed');
        $('#style_selector select[name="footer"]').val('default');
        $('#style_selector select[name="sidebar"]').val('fixed');
        $('.boxed-patterns img').removeClass('active');
    };
    //function to set the User Staus (Online/Offline)
    var runStatusButton = function() {
        $(".btn.status").on("click", function(e) {
            if ($(this).hasClass("offline")) {
                $(this).removeClass("offline").find("span").text("Online");

            } else {
                $(this).addClass("offline").find("span").text("Offline");
            }
            e.preventDefault();
        });
    };
    //function to animate Progressbar when appear
    var runAnimateProgressbar = function() {
        var progressBarDefaultsOptions = {
            transition_delay: 0
        };
        $('.progress .animate-progress-bar').each(function() {
            var configProgressBar = $.extend({}, progressBarDefaultsOptions, $(this).data("plugin-options"));
            if ($(this).is(':appeared') || isMobile) {
                $(this).progressbar(configProgressBar);
            } else {
                $(this).appear();
                $(this).on("appear", function(event, $all_appeared_elements) {
                    $(this).progressbar(configProgressBar);
                });
            }
        });
    };
    var runMsViewport = function() {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = document.createElement("style");
            msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
            document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
        }
    };
    return {
        //main function to initiate template pages
        init: function() {
            runWIndowResize();
            runInit();
            runQuickChat();
            runToggleSideBars();
            runStyleSelector();
            runElementsPosition();
            runToDoAction();
            runNavigationMenu();
            runGoTop();
            setSearchMenu();
            runModuleTools();
            runDropdownEnduring();
            runTooltips();
            runESlider();
            runPopovers();
            runPanelScroll();
            runAnimatedElements();
            runShowTab();
            runCustomCheck();
            runColorPalette();
            runSaveSetting();
            runCustomSetting();
            runStatusButton();
            runCheckAll();
            runClearSetting();
            runClosedBarButton();
            runAnimateProgressbar();
            runSelecticker();
            setPortfolioPanel();
            runSideBarToggle();
            runMsViewport();
            runTimeStamp();
            documentEvents();
        }
    };
}();