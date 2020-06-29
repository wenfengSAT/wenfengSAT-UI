/* Yukon Admin all functions
 *
 * Content:
 *
 * 1. Helpers
 * 2. Common functions
 * 3. Plugins
 *
 * */

    $(function () {
        // bootstrap custom functions
        yukon_bs_custom.accordion_active_class();
        yukon_bs_custom.dropdown_click();
        yukon_bs_custom.tooltips_init();
        yukon_bs_custom.popover_init();

        // switchery
        yukon_switchery.init();

        // side menu
        yukon_main_menu.init();

        // style switcher
        yukon_style_switcher.init();

        // typeahead (header)
        yukon_typeahead.init();

        // fastclick (eliminate the 300ms delay between a physical tap and the firing of a click event on mobile browsers)
        FastClick.attach(document.body);
    });


/* Helpers */
    /* Detect touch devices */
    function is_touch_device() {
        return !!('ontouchstart' in window);
    }
    /* Detect hi-res devices */
    function isHighDensity() {
        return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
    }
	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	* throttledresize: special jQuery event that happens at a reduced rate compared to "resize"
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize
	*
	* Copyright 2012 @louis_remi
	* Licensed under the MIT license.
    *
	*/
	(function(a){var d=a.event,b,c;b=d.special.debouncedresize={setup:function(){a(this).on("resize",b.handler)},teardown:function(){a(this).off("resize",b.handler)},handler:function(a,f){var g=this,h=arguments,e=function(){a.type="debouncedresize";d.dispatch.apply(g,h)};c&&clearTimeout(c);f?e():c=setTimeout(e,b.threshold)},threshold:150}})(jQuery);
    (function(b){var f=b.event,c,g={_:0},a=0,d,e;c=f.special.throttledresize={setup:function(){b(this).on("resize",c.handler)},teardown:function(){b(this).off("resize",c.handler)},handler:function(h,k){var l=this,m=arguments;d=!0;e||(setInterval(function(){a++;if(a>c.threshold&&d||k)h.type="throttledresize",f.dispatch.apply(l,m),d=!1,a=0;9<a&&(b(g).stop(),e=!1,a=0)},30),e=!0)},threshold:0}})(jQuery);

/* common functions */

    /* main menu */
    yukon_main_menu = {
        init: function () {

            // add '.has_submenu' class if section has childrens
            $('#main_menu ul > li').each(function () {
                if ($(this).children('ul').length) {
                    $(this).addClass('has_submenu');
                }
            });

            // accordion menu
            $(document).off('click', '.side_menu_expanded #main_menu .has_submenu > a').on('click', '.side_menu_expanded #main_menu .has_submenu > a', function () {
                if($(this).parent('.has_submenu').hasClass('first_level')) {
                    var $this_parent = $(this).parent('.has_submenu'),
                        panel_active = $this_parent.hasClass('section_active');

                    if (!panel_active) {
                        $this_parent.siblings().removeClass('section_active').children('ul').slideUp('200');
                        $this_parent.addClass('section_active').children('ul').slideDown('200');
                    } else {
                        $this_parent.removeClass('section_active').children('ul').slideUp('200');
                    }
                } else {
                    var $submenu_parent = $(this).parent('.has_submenu'),
                        submenu_active = $submenu_parent.hasClass('submenu_active');

                    if (!submenu_active) {
                        $submenu_parent.siblings().removeClass('submenu_active').children('ul').slideUp('200');
                        $submenu_parent.addClass('submenu_active').children('ul').slideDown('200');
                    } else {
                        $submenu_parent.removeClass('submenu_active').children('ul').slideUp('200');
                    }
                }
            });

            // side menu initialization
            if(!$('#main_menu .has_submenu').hasClass('section_active')) {
                $('#main_menu .has_submenu .act_nav').closest('.has_submenu').children('a').click();
            } else {
                $('#main_menu .has_submenu.section_active').children('ul').show();
            }

            $('.menu_toggle').click(function() {
                if($('body').hasClass('side_menu_expanded')) {
                    yukon_main_menu.menu_collapse();
                } else if($('body').hasClass('side_menu_collapsed')) {
                    yukon_main_menu.menu_expand();
                }
                $(window).off("debouncedresize").trigger('resize').on("debouncedresize");
            });

            // collapse navigation on mobile devices
            if($('body').hasClass('side_menu_expanded') && $(window).width() <= 992 ) {
                yukon_main_menu.menu_collapse();
            }

            // create scrollbar if menu is expanded
            if($('body').hasClass('side_menu_expanded')) {
                yukon_main_menu.menu_scrollbar_create();
            }

            // uncomment function bellow to activate saving side menu states
            //yukon_main_menu.menu_cookie();

        },
        menu_expand: function() {
            $('body').addClass('side_menu_expanded').removeClass('side_menu_collapsed');
            $('.menu_toggle').find('.toggle_left').show();
            $('.menu_toggle').find('.toggle_right').hide();
            yukon_main_menu.menu_scrollbar_create();
        },
        menu_collapse: function() {
            $('body').removeClass('side_menu_expanded').addClass('side_menu_collapsed');
            $('.menu_toggle').find('.toggle_left').hide();
            $('.menu_toggle').find('.toggle_right').show();
            yukon_main_menu.menu_scrollbar_destroy();
        },
        menu_cookie: function() {
            $('.menu_toggle').on('click',function() {
                if($('body').hasClass('side_menu_expanded')) {
                    $.cookie('side_menu', '1');
                } else if($('body').hasClass('side_menu_collapsed')) {
                    $.cookie('side_menu', '0');
                }
            });

            var $side_menu_cookie = $.cookie('side_menu');

            if($side_menu_cookie != undefined) {
                if($side_menu_cookie == '1') {
                    yukon_main_menu.menu_expand();
                } else if($side_menu_cookie == '0') {
                    yukon_main_menu.menu_collapse();
                }
            }
        },
        position_top: function() {
            $('body')
                .removeClass('side_menu_active side_menu_expanded side_menu_collapsed')
                .addClass('top_menu_active');
        },
        position_side: function() {
            $('body')
                .removeClass('top_menu_active')
                .addClass('side_menu_active');
            yukon_main_menu.menu_collapse();
        },
        menu_scrollbar_create: function() {
            $("#main_menu .menu_wrapper").mCustomScrollbar({
                theme: "minimal-dark",
                scrollbarPosition: "outside"
            });
        },
        menu_scrollbar_destroy: function() {
            $("#main_menu .menu_wrapper").mCustomScrollbar('destroy');
        }
    };

    // style switcher
    yukon_style_switcher = {
        init: function() {
            var $styleSwitcher = $('#style_switcher');

            // toggle style switcher
            $('.switcher_toggle').on('click', function(e) {
                if(!$styleSwitcher.hasClass('switcher_open')) {
                    $styleSwitcher.addClass('switcher_open')
                } else {
                    $styleSwitcher.removeClass('switcher_open')
                }
                e.preventDefault();
            });

            // layout switch
            $('#fixed_layout_switch').attr('checked',false).on('change', function () {
                if( $('#fixed_layout_switch').prop('checked') ) {
                    $('body').addClass('fixed_layout');
                    $('#fixed_layout_bg_switch').show();
                } else {
                    $('body').removeClass('fixed_layout');
                    $('#fixed_layout_bg_switch').hide();
                }
                $(window).resize();
            });

            // menu position
            $('#top_menu_switch').attr('checked',false).on('change', function () {
                if( $('#top_menu_switch').is(':checked') ) {
                    yukon_main_menu.position_top();
                    yukon_main_menu.menu_scrollbar_destroy();
                } else {
                    yukon_main_menu.position_side();
                    if($('body').hasClass('side_menu_collapsed')) {
                        yukon_main_menu.menu_scrollbar_destroy();
                    } else if($('body').hasClass('side_menu_expanded')) {
                        yukon_main_menu.menu_scrollbar_create();
                    }
                }
                $(window).resize();
            });



            // hide breadcumbs
            $('#breadcrumbs_hide').attr('checked',false).on('change', function () {
                if( $('#breadcrumbs_hide').prop('checked') ) {
                    $('body').addClass('hide_breadcrumbs');
                } else {
                    $('body').removeClass('hide_breadcrumbs');
                }
            });

			// top bar style
            $('#topBar_style_switch li').on('click',function() {
                var topBarStyle = $(this).attr('title');
                $('#topBar_style_switch li').removeClass('style_active');
                $(this).addClass('style_active');
                $('#main_header').removeClass('topBar_style_1 topBar_style_2 topBar_style_3 topBar_style_4 topBar_style_5 topBar_style_6 topBar_style_7 topBar_style_8 topBar_style_9 topBar_style_10 topBar_style_11 topBar_style_12 topBar_style_13 topBar_style_14').addClass(topBarStyle);
            });

            // fixed layout background
            if( !$('body').hasClass('fixed_layout') ) {
                $('#fixed_layout_bg_switch').hide();
            }
            $('#fixed_layout_bg_switch ul li').on('click',function() {
                var fixedLayBg = $(this).attr('title');
                $('#fixed_layout_bg_switch ul li').removeClass('style_active');
                $(this).addClass('style_active');
                $('body').removeClass('bg_0 bg_1 bg_2 bg_3 bg_4 bg_5 bg_6 bg_7').addClass(fixedLayBg);
            });

            // show CSS
            $('#showCSSModal').on('show.bs.modal', function (e) {
                $bodyClasses = $('body').attr('class');
                $headerClasses = $('#main_header').attr('class');

                $bodyClassesStr =
'// &lt;body&gt; classes'
+ '<br>&lt;body class="'+ $bodyClasses + '"&gt;...&lt;/body&gt;';

                if(typeof $headerClasses !== "undefined" && $headerClasses != '') {
                    $headerClassesStr =
'<br><br>'
+ '// &lt;header&gt; classes'
+ '<br>&lt;header id="main_header" class="' + $headerClasses + '"&gt;...&lt;/header&gt;';
                } else {
                    $headerClassesStr = '';
                }

                $('#showCSSPre').html($bodyClassesStr + '' + $headerClassesStr);
            })

        }
    }

    // bootstrap custom functions
    yukon_bs_custom = {
        accordion_active_class: function() {
            if($('.panel-collapse').length) {
                $('.panel-collapse.in').closest('.panel').addClass('panel-active');
                $('.panel-collapse').on('hide.bs.collapse', function () {
                    $(this).closest('.panel').removeClass('panel-active');
                }).on('show.bs.collapse', function () {
                    $(this).closest('.panel').addClass('panel-active');
                })
            }
        },
        dropdown_click: function() {
            // prevent closing notification dropdown on content click
            if($('.header_notifications .dropdown-menu').length) {
                $('.header_notifications .dropdown-menu').click(function(e) {
                    e.stopPropagation();
                });
            }
        },
        tooltips_init: function() {
            $('.bs_ttip').tooltip({
                container: 'body'
            });
        },
        popover_init: function() {
            $('.bs_popup').popover({
                container: 'body'
            });
        }
    };

/* page specific functions */

    // chat
    yukon_chat = {
        init: function() {
            if($('.chat_message_send button').length) {
                var msg_date_unix;
                $('.chat_message_send button').on('click', function() {
                    var msg_date = moment().format('MMM D YYYY, h:mm A'),
                        chat_msg = $('.chat_message_send textarea').val();
                    if(chat_msg != '') {
                        if( msg_date != $('.chat_messages').data('lastMessageUnix') ) {
                            $('.chat_messages').prepend('<div class="message_date">'+ msg_date +'</div><ul></ul>').data('lastMessageUnix', msg_date);
                        }
                        $('.chat_messages ul:first').prepend('<li class="msg_left"><p class="msg_user">Carrol Clark</p>' + chat_msg + '</li>');
                        $('.chat_message_send textarea').val('');
                    }
                })
            }
        }
    };

    // mailbox
    yukon_mailbox = {
        init: function() {
            var $mailbox_table = $('#mailbox_table');

            $mailbox_table.find('.mbox_star span').on('click', function(){
                var $this = $(this),
                    $this_parent = $this.parent('.mbox_star');

                $this.hasClass('icon_star') ? $this_parent.removeClass('marked') : $this_parent.addClass('marked');

                $this.toggleClass('icon_star icon_star_alt');

            });

            $('input.msgSelect').on('click',function() {
                $(this).is(':checked') ? $(this).closest('tr').addClass('selected') : $(this).closest('tr').removeClass('selected');
            });

            $mailbox_table.on('click', '#msgSelectAll', function () {
                var $this = $(this);

                $mailbox_table.find('input.msgSelect').filter(':visible').each(function() {
                    $this.is(':checked') ? $(this).prop('checked',true).closest('tr').addClass('selected') : $(this).prop('checked',false).closest('tr').removeClass('selected');
                })

            })
        }
    };

    // user list
    yukon_user_list = {
        init: function() {
            $('.countUsers').text($('#user_list > li').length);
        }
    };

    // icons
    yukon_icons = {
        search_icons: function() {
            $('#icon_search').val('').keyup(function(){

                var sValue = $(this).val().toLowerCase();
                $('.icon_list > li > span').each(function () {
                    if ($(this).attr('class').toLowerCase().indexOf(sValue) === -1) {
                        $(this).parent('li').hide();
                    } else {
                        $(this).parent('li').show();
                    }
                });

            });
        }
    };

    // gallery
    yukon_gallery = {
        search_gallery: function() {
            $('#gallery_search').val('').keyup(function(){

                var sValue = $(this).val().toLowerCase();

                $('.gallery_grid > li > a').each(function () {
                    if( $(this).text().search(new RegExp(sValue, "i")) < 0 && $(this).attr('title').toLowerCase().indexOf(sValue) === -1 ) {
                        $(this).closest('li').hide();
                    } else {
                        $(this).closest('li').show();
                    }
                });

            });
        }
    };

    // contact list
    yukon_contact_list = {
        init: function() {
            var $grid = $('.contact_list');

            $grid.shuffle({
                itemSelector: '.contact_item'
            });

            $('#contactList_sort').prop('selectedIndex',0).on('change', function() {
                var sort = this.value,
                    opts = {};

                if (sort === 'company') {
                    opts = {
                        by: function ($el) {
                            return $el.data('company');
                        }
                    };
                } else if (sort === 'company_desc') {
                    opts = {
                        reverse: true,
                        by: function ($el) {
                            return $el.data('company').toLowerCase();
                        }
                    };
                } else if (sort === 'name') {
                    opts = {
                        by: function ($el) {
                            return $el.data('name').toLowerCase();
                        }
                    };
                } else if (sort === 'name_desc') {
                    opts = {
                        reverse: true,
                        by: function ($el) {
                            return $el.data('name').toLowerCase();
                        }
                    };
                }

                // Sort elements
                $grid.shuffle('sort', opts);
            });

            $('#contactList_filter').prop('selectedIndex',0).on('change', function() {
                var group = this.value;

                // Filter elements
                $grid.shuffle( 'shuffle', group );
                $('#contactList_sort').prop('selectedIndex',0);
                $('#contactList_search').val('');
            });

            $('#contactList_search').val('').on('keyup', function() {
                var uName = this.value;
                if(uName.length > 1) {
                     $('#contactList_filter, #contactList_sort').prop('selectedIndex',0);
                    // Filter elements
                    $grid.shuffle('shuffle', function ($el, shuffle) {
                        return $el.data('name').toLowerCase().indexOf(uName.toLowerCase()) >= 0;
                    });
                } else {
                    $grid.shuffle( 'shuffle', $('#contactList_filter').val() );
                }
            });

        }
    };

/* plugins */

    // 2col multiselect
    yukon_2col_multiselect = {
        init: function() {
            if($('#2col_ms_default').length) {
                var $msListDefault = $('#2col_ms_default');
                $msListDefault.multiSelect({
                    keepOrder: true,
                    selectableHeader: '<div class="ms-header">Selectable items</div>',
                    selectionHeader: '<div class="ms-header">Selection items</div>',
                    selectableFooter: '<div class="ms-footer">Selectable footer</div>',
                    selectionFooter: '<div class="ms-footer">Selection footer</div>'
                });
                $msListDefault.closest('.ms-wrapper').find('.ms_select_all').click(function (e) {
                    e.preventDefault();
                    $msListDefault.multiSelect('select_all');
                });
                $msListDefault.closest('.ms-wrapper').find('.ms_deselect_all').click(function (e) {
                    e.preventDefault();
                    $msListDefault.multiSelect('deselect_all');
                });
            }
            if($('#2col_ms_search').length) {
                var $msListSearch = $('#2col_ms_search');
                $('#2col_ms_search').multiSelect({
                    keepOrder: true,
                    selectableHeader: '<div class="ms-header-search"><input class="form-control input-sm" type="text" placeholder="Search in selectable..."/></div>',
                    selectionHeader: '<div class="ms-header-search"><input class="form-control input-sm" type="text" placeholder="Search in selection..."/></div>',
                    afterInit: function(ms){
                        ms.find('.ms-list li').each(function() {
                            var thisText = $(this).children('span').text(),
                                flag = thisText.substr(2, 2),
                                flag_remove = thisText.substr(0, 6);
                            $(this).children('span').html( '<i class="flag-'+ flag +'"></i>'+ thisText.replace(flag_remove,'') );
                        });
                        var that = this,
                            $selectableSearch = that.$selectableUl.prev().children(),
                            $selectionSearch = that.$selectionUl.prev().children(),
                            selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                            selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

                        that.qs1 = $selectableSearch.quicksearch(selectableSearchString).on('keydown', function (e) {
                            if (e.which === 40) {
                                that.$selectableUl.focus();
                                return false;
                            }
                        });

                        that.qs2 = $selectionSearch.quicksearch(selectionSearchString).on('keydown', function (e) {
                            if (e.which == 40) {
                                that.$selectionUl.focus();
                                return false;
                            }
                        });
                    },
                    afterSelect: function () {
                        this.qs1.cache();
                        this.qs2.cache();
                    },
                    afterDeselect: function () {
                        this.qs1.cache();
                        this.qs2.cache();
                    }
                });
                $msListSearch.closest('.ms-wrapper').find('.ms_select_all').click(function (e) {
                    e.preventDefault();
                    $msListSearch.multiSelect('select_all');
                });
                $msListSearch.closest('.ms-wrapper').find('.ms_deselect_all').click(function (e) {
                    e.preventDefault();
                    $msListSearch.multiSelect('deselect_all');
                });
            }
        }
    }

    // ace editor
    yukon_ace_editor = {
        init: function () {
            var editor = ace.edit("aceEditor");
            $('#aceEditor').data('editor', editor);
            editor.setTheme("ace/theme/monokai");
            document.getElementById('aceEditor').style.fontSize='14px';
            editor.getSession().setMode("ace/mode/javascript");
            editor.setShowPrintMargin(false);
            editor.setOptions({maxLines: 32});
            editor.setAutoScrollEditorIntoView(true);

            // change theme
            $('#editor_theme').val('monokai').on('change',function() {
                $('#aceEditor').data('editor').setTheme("ace/theme/"+$(this).val());
            })
            // change font size
            $('#editor_font_size').val('14').on('change',function() {
                document.getElementById('aceEditor').style.fontSize=$(this).val()+'px';
            })
        }
    }

    // full calendar
    yukon_fullCalendar = {
        p_plugins_calendar: function() {
            if($('#calendar').length) {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();

                $('#calendar').fullCalendar({
                    header: {
                        center: 'title',
                        left: 'month,agendaWeek,agendaDay today',
                        right: 'prev,next'
                    },
                    buttonIcons: {
                        prev: ' el-icon-chevron-left',
                        next: ' el-icon-chevron-right'
                    },
                    editable: true,
                    aspectRatio: 2.2,
                    events: [
                        {
                            title: 'All Day Event',
                            start: new Date(y, m, 1)
                        },
                        {
                            title: 'Long Event',
                            start: new Date(y, m, d - 5),
                            end: new Date(y, m, d - 2)
                        },
                        {
                            id: 999,
                            title: 'Repeating Event',
                            start: new Date(y, m, d - 3, 16, 0)
                        },
                        {
                            id: 999,
                            title: 'Repeating Event',
                            start: new Date(y, m, d + 4, 16, 0)
                        },
                        {
                            title: 'Meeting',
                            start:  new Date(y, m, d + 1, 19, 0),
                            end:  new Date(y, m, d + 1, 22, 30)
                        },
                        {
                            title: 'Lunch',
                            start: new Date(y, m, d - 7)
                        },
                        {
                            title: 'Birthday Party',
                            start: new Date(y, m, d + 10)
                        },
                        {
                            title: 'Click for Google',
                            url: 'http://google.com/',
                            start: new Date(y, m, d + 12)
                        }
                    ],
                    eventAfterAllRender: function() {
                        $('.fc-header .fc-button-prev').html('<span class="el-icon-chevron-left"></span>');
                        $('.fc-header .fc-button-next').html('<span class="el-icon-chevron-right"></span>');
                    }
                });
            }

            if($('#calendar_phases').length) {
                $('#calendar_phases').fullCalendar({
                    header: {
                        center: 'title',
                        left: 'month,agendaWeek,agendaDay today',
                        right: 'prev,next'
                    },
                    buttonIcons: false,
                    aspectRatio: 2.2,
                    // Phases of the Moon
                    events: 'https://www.google.com/calendar/feeds/ht3jlfaac5lfd6263ulfh4tql8%40group.calendar.google.com/public/basic',
                    eventClick: function(event) {
                        // opens events in a popup window
                        window.open(event.url, 'gcalevent', 'width=700,height=600');
                        return false;
                    },
                    eventAfterAllRender: function() {
                        $('.fc-header .fc-button-prev').html('<span class="el-icon-chevron-left"></span>');
                        $('.fc-header .fc-button-next').html('<span class="el-icon-chevron-right"></span>');
                    }
                });
            }
        }
    };

    // chained selects
    yukon_chained_selects = {
        init: function() {
            $("#chs_button").hide();
            $("#chs_series").chained("#chs_mark");
            $("#chs_model").chained("#chs_series");
            $("#chs_engine").chained("#chs_series, #chs_model").on("change", function() {
                if ("" != $("option:selected", this).val() && "" != $("option:selected", $("#chs_model")).val()) {
                    $("#chs_button").fadeIn();
                } else {
                    $("#chs_button").hide();
                }
            });
        }
    };

    // c3 charts
    yukon_charts = {
        p_dashboard: function() {
            if($('#c3_7_days').length) {
                var c3_7_days_chart = c3.generate({
                    bindto: '#c3_7_days',
                    data: {
                        x: 'x',
                        columns: [
                            ['x', '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01', '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01', '2013-12-01'],
                            ['2013', 14512, 10736, 18342, 14582, 16304, 22799, 18833, 21973, 23643, 22488, 24752, 28722],
                            ['2014', 23732, 22904, 23643, 26887, 32629, 30512, 31658, 35782, 36724, 38947, 42426, 37439]
                        ],
                        types: {
                            '2013': 'area',
                            '2014': 'line'
                        }
                    },
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                culling: false,
                                fit: true,
                                format: "%b"
                            }
                        },
                        y : {
                            tick: {
                                format: d3.format("$,")
                            }
                        }
                    },
                    point: {
                        r: '4',
                        focus: {
                            expand: {
                                r: '5'
                            }
                        }
                    },
                    bar: {
                        width: {
                            ratio: 0.4 // this makes bar width 50% of length between ticks
                        }
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    color: {
                        pattern: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']
                    }
                });

                $('.chart_switch').on('click', function() {

                    if($(this).data('chart') == 'line') {
                        c3_7_days_chart.transform('area', '2013');
                        c3_7_days_chart.transform('line', '2014');
                    } else if($(this).data('chart') == 'bar') {
                        c3_7_days_chart.transform('bar');
                    }

                    $('.chart_switch').toggleClass('btn-default btn-link');

                });

                $(window).on("debouncedresize", function() {
                    c3_7_days_chart.resize();
                });
            }
            if($('#c3_orders').length) {
                var c3_orders_chart = c3.generate({
                    bindto: '#c3_orders',
                    data: {
                        columns: [
                            ['New', 64],
                            ['In Progrees', 36]

                        ],
                        type : 'pie'
                    },
                    pie: {
                        //onclick: function (d, i) { console.log(d, i); },
                        //onmouseover: function (d, i) { console.log(d, i); },
                        //onmouseout: function (d, i) { console.log(d, i); }
                    }
                });
                $(window).on("debouncedresize", function() {
                    c3_orders_chart.resize();
                });
            }
            if($('#c3_users_age').length) {
                var c3_users_age = c3.generate({
                    bindto: '#c3_users_age',
                    data: {
                        columns: [
                            ['18-24', 18],
                            ['25-32', 42],
                            ['33-40', 31],
                            ['41-57', 9]

                        ],
                        type : 'donut'
                    },
                    donut: {
                        //onclick: function (d, i) { console.log(d, i); },
                        //onmouseover: function (d, i) { console.log(d, i); },
                        //onmouseout: function (d, i) { console.log(d, i); }
                    }
                });
                $(window).on("debouncedresize", function() {
                    c3_users_age.resize();
                });
            }
        },
        p_plugins_charts: function() {

            // combined chart
            var c3_combined_chart = c3.generate({
                bindto: '#c3_combined',
                data: {
                    columns: [
                        ['data1', 30, 20, 50, 40, 60, 50],
                        ['data2', 200, 130, 90, 240, 130, 220],
                        ['data3', 200, 130, 90, 240, 130, 220],
                        ['data4', 130, 120, 150, 140, 160, 150],
                        ['data5', 90, 70, 20, 50, 60, 120]
                    ],
                    type: 'bar',
                    types: {
                        data3: 'line',
                        data5: 'area'
                    },
                    groups: [
                        ['data1','data2']
                    ]
                },
                point: {
                    r: '4',
                    focus: {
                        expand: {
                            r: '5'
                        }
                    }
                },
                bar: {
                    width: {
                        ratio: 0.4 // this makes bar width 50% of length between ticks
                    }
                },
                grid: {
                    x: {
                        show: true
                    },
                    y: {
                        show: true
                    }
                },
                color: {
					pattern: ['#ff7f0e', '#2ca02c', '#9467bd', '#1f77b4', '#d62728']
				}
            });

            // gauge chart
            var chart_gauge = c3.generate({
                bindto: '#c3_gauge',
                data: {
                    columns: [
                        ['data', 91.4]
                    ],
                    type: 'gauge'
                    //onclick: function (d, i) { console.log("onclick", d, i); },
                    //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    //onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                gauge: {
                    width: 39
                },
                color: {
                    pattern: ['#ff0000', '#f97600', '#f6c600', '#60b044'],
                    threshold: {
                        values: [30, 60, 90, 100]
                    }
                }
            });

            setTimeout(function () {
                chart_gauge.load({
                    columns: [['data', 10]]
                });
            }, 2000);
            setTimeout(function () {
                chart_gauge.load({
                    columns: [['data', 50]]
                });
            }, 3000);
            setTimeout(function () {
                chart_gauge.load({
                    columns: [['data', 70]]
                });
            }, 4000);
            setTimeout(function () {
                chart_gauge.load({
                    columns: [['data', 0]]
                });
            }, 5000);
            setTimeout(function () {
                chart_gauge.load({
                    columns: [['data', 100]]
                });
            }, 6000);

            // donut chart
            var chart_donut = c3.generate({
                bindto: '#c3_donut',
                data: {
                    columns: [
                        ['data1', 30],
                        ['data2', 120]
                    ],
                    type : 'donut',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                donut: {
                    title: "Iris Petal Width"
                }
            });
            setTimeout(function () {
                chart_donut.load({
                    columns: [
                        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]
                    ]
                });
            }, 2500);
            setTimeout(function () {
                chart_donut.unload({
                    ids: 'data1'
                });
                chart_donut.unload({
                    ids: 'data2'
                });
            }, 4500);

            // grid lines
            var chart_grid_lines = c3.generate({
                bindto: '#c3_grid_lines',
                data: {
                    columns: [
                        ['sample', 30, 200, 100, 400, 150, 250],
                        ['sample2', 1300, 1200, 1100, 1400, 1500, 1250]
                    ],
                    axes: {
                        sample2: 'y2'
                    }
                },
                axis: {
                    y2: {
                        show: true
                    }
                },
                grid: {
                    y: {
                        lines: [{value: 50, text: 'Label 50'}, {value: 1300, text: 'Label 1300', axis: 'y2'}]
                    }
                }
            });

            // scatter plot
            var chart_scatter = c3.generate({
                bindto: '#c3_scatter',
                data: {
                    xs: {
                        setosa: 'setosa_x',
                        versicolor: 'versicolor_x'
                    },
                    // iris data from R
                    columns: [
                        ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                        ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]
                    ],
                    type: 'scatter'
                },
                axis: {
                    x: {
                        label: 'Sepal.Width',
                        tick: {
                            fit: false
                        }
                    },
                    y: {
                        label: 'Petal.Width'
                    }
                }
            });

            setTimeout(function () {
                chart_scatter.load({
                    xs: {
                        virginica: 'virginica_x'
                    },
                    columns: [
                        ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
                        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]
                    ]
                });
            }, 1000);

            setTimeout(function () {
                chart_scatter.unload({
                    ids: 'setosa'
                });
            }, 2000);

            setTimeout(function () {
                chart_scatter.load({
                    columns: [
                        ["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2]
                    ]
                });
            }, 3000);

            // resize charts
            $(window).on("debouncedresize", function() {
                c3_combined_chart.resize();
                chart_gauge.resize();
                chart_donut.resize();
                chart_grid_lines.resize();
                chart_scatter.resize();
            });
        }
    };

    // gantt chart
    yukon_gantt_chart = {
        init: function() {
            var ganttData = [
                {
                    id: 1,
                    name: "Concept",
                    color: '#006064',
                    series: [
                        {
                            name: "Brainstorm<span>1 Jan - 3 Jan</span>",
                            start: new Date('01/01/2015'),
                            end: new Date('01/03/2015'),
                            color: "#0097a7"
                        },
                        {
                            name: "Wireframes<span>4 Jan - 7 Jan</span>",
                            start: new Date('01/04/2015'),
                            end: new Date('01/07/2015'),
                            color: "#00bcd4"
                        },
                        {
                            name: "Concept description<span>6 Jan - 10 Jan</span>",
                            start: new Date('01/06/2015'),
                            end: new Date('01/10/2015'),
                            color: "#4dd0e1"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Design",
                    series: [
                        {
                            name: "Sketching<span>8 Jan - 16 Jan</span>",
                            start: new Date('01/08/2015'),
                            end: new Date('01/16/2015'),
                            color: "#f57c00"
                        },
                        {
                            name: "Photography<span>10 Jan - 16 Jan</span>",
                            start: new Date('01/10/2015'),
                            end: new Date('01/16/2015'),
                            color: "#fb8c00"
                        },
                        {
                            name: "Feedback<span>19 Jan - 21 Jan</span>",
                            start: new Date('01/19/2015'),
                            end: new Date('01/21/2015'),
                            color: "#ff9800"
                        },
                        {
                            name: "Final Design<span>21 Jan - 27 Jan</span>",
                            start: new Date('01/21/2015'),
                            end: new Date('01/27/2015'),
                            color: "#ffa726"
                        }
                    ]
                },
                {
                    id: 3,
                    name: "Implementation",
                    series: [
                        {
                            name: "Specifications<span>26 Jan - 2 Feb</span>",
                            start: new Date('01/26/2015'),
                            end: new Date('02/06/2015'),
                            color: "#689f38"
                        },
                        {
                            name: "Templates<span>4 Feb - 10 Feb</span>",
                            start: new Date('02/04/2015'),
                            end: new Date('02/10/2015'),
                            color: "#7cb342"
                        },
                        {
                            name: "Database<span>5 Feb - 13 Feb</span>",
                            start: new Date('02/05/2015'),
                            end: new Date('02/13/2015'),
                            color: "#8bc34a"
                        },
                        {
                            name: "Integration<span>16 Feb - 10 Mar</span>",
                            start: new Date('02/16/2015'),
                            end: new Date('03/10/2015'),
                            color: "#9ccc65"
                        }
                    ]
                },
                {
                    id: 4,
                    name: "Testing & Delivery",
                    series: [
                        {
                            name: "Focus Group<span>17 Mar - 27 Mar</span>",
                            start: new Date('03/17/2015'),
                            end: new Date('03/27/2015'),
                            color: "#1976d2"
                        },
                        {
                            name: "Stress Test<span>25 Mar - 6 Apr</span>",
                            start: new Date('03/25/2015'),
                            end: new Date('04/06/2015'),
                            color: "#2196f3"
                        },
                        {
                            name: "Delivery<span>7 Apr - 8 Apr</span>",
                            start: new Date('04/07/2015'),
                            end: new Date('04/08/2015'),
                            color: "#64b5f6"
                        }
                    ]
                }
            ];

            $("#ganttChart").ganttView({
				data: ganttData,
				behavior: {
					onClick: function (data) {
						var msg = "You clicked on an event: { start: " + data.start.toString("M/d/yyyy") + ", end: " + data.end.toString("M/d/yyyy") + " }";
						console.log(msg);
					},
					onResize: function (data) {
						var msg = "You resized an event: { start: " + data.start.toString("M/d/yyyy") + ", end: " + data.end.toString("M/d/yyyy") + " }";
						console.log(msg);
					},
					onDrag: function (data) {
						var msg = "You dragged an event: { start: " + data.start.toString("M/d/yyyy") + ", end: " + data.end.toString("M/d/yyyy") + " }";
						console.log(msg);
					}
				}
			});
        }
    };

    // clock picker
    yukon_clock_picker = {
        init: function() {
            if($('.clockpicker').length) {
                $('.clockpicker').clockpicker()
                    .find('input').change(function () {
                        console.log(this.value);
                    });
            }
        }
    };

    // countUp animation
    yukon_count_up = {
        init: function() {
            if($('.countUpMe').length) {
                $('.countUpMe').each(function() {
                    var target = this;
                    var endVal = parseInt($(this).attr('data-endVal'));
                    theAnimation = new countUp(target, 0, endVal, 0, 2.6, { useEasing : true, useGrouping : true, separator: ' ' });
                    theAnimation.start();
                });
            }
        }
    };

    // datepicker
	yukon_datepicker = {
		p_forms_extended: function() {
			if ( $.isFunction($.fn.datepicker) ) {
				// replace datepicker arrow
				$.fn.datepicker.DPGlobal.template = $.fn.datepicker.DPGlobal.template
				.replace(/\&laquo;/g, '<i class="arrow_carrot-left"></i>')
				.replace(/\&raquo;/g, '<i class="arrow_carrot-right"></i>');
			}

			if ($("#dp_basic").length) {
				$("#dp_basic").datepicker({
					autoclose: true
				});
			}
			if ($("#dp_component").length) {
				$("#dp_component").datepicker({
					autoclose: true
				});
			}
			if ($("#dp_range").length) {
				$("#dp_range").datepicker({
					autoclose: true
				});
			}
			if ($("#dp_inline").length) {
				$("#dp_inline").datepicker();
			}
		}
	};

	// date range picker
	yukon_date_range_picker = {
		p_forms_extended: function() {
			if ($("#drp_time").length) {
				$('#drp_time').daterangepicker({
                    timePicker: true,
                    timePickerIncrement: 30,
                    format: 'MM/DD/YYYY h:mm A',
                    buttonClasses: 'btn btn-sm'
                });
			}
			if ($("#drp_predefined").length) {
				$('#drp_predefined').daterangepicker(
                    {
                        ranges: {
                           'Today': [moment(), moment()],
                           'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                           'Last 7 Days': [moment().subtract('days', 6), moment()],
                           'Last 30 Days': [moment().subtract('days', 29), moment()],
                           'This Month': [moment().startOf('month'), moment().endOf('month')],
                           'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                        },
                        startDate: moment().subtract('days', 29),
                        endDate: moment()
                    },
                    function(start, end) {
                        $('#drp_predefined span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                    }
				);
			}
		}
	};

    // datatables
	yukon_datatables = {
		p_plugins_tables_datatable: function() {

            var table = $('#datatable_demo').dataTable({
                "iDisplayLength": 25
            });

            // fixed header
            var oFH = new $.fn.dataTable.FixedHeader(table, {
                "offsetTop": 48
            });
            oFH.fnUpdate();

            // update fixed headers on window resize
            $(window).on("throttledresize", function( event ) {
                oFH._fnUpdateClones( true );
                oFH._fnUpdatePositions();
            })

		}
	};

    // easyPie chart
    yukon_easyPie_chart = {
        p_dashboard: function() {
            if($('.easy_chart_a').length) {
                $('.easy_chart_a').easyPieChart({
                    animate: 2000,
                    size: 90,
                    lineWidth: 4,
                    scaleColor: false,
                    barColor: '#48ac2e',
                    trackColor: '#eee',
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).children('.easy_chart_percent').text(Math.round(percent) + '%');
                    }
                });
            }
            if($('.easy_chart_b').length) {
                $('.easy_chart_b').easyPieChart({
                    animate: 2000,
                    size: 90,
                    lineWidth: 4,
                    scaleColor: false,
                    barColor: '#c0392b',
                    trackColor: '#eee',
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                    }
                });
            }
            if($('.easy_chart_c').length) {
                $('.easy_chart_c').easyPieChart({
                    animate: 2000,
                    size: 90,
                    lineWidth: 4,
                    scaleColor: false,
                    barColor: '#4a89dc',
                    trackColor: '#eee',
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                    }
                });
            }
        },
        p_pages_user_profile: function() {
            if($('.easy_chart_user_tasks').length) {
				$('.easy_chart_user_tasks').easyPieChart({
					animate: 2000,
					size: 60,
					lineWidth: 3,
					scaleColor: false,
					barColor: '#48ac2e',
					trackColor: '#ddd',
					easing: 'easeOutBounce'
				});
			}
            if($('.easy_chart_user_mails').length) {
				$('.easy_chart_user_mails').easyPieChart({
					animate: 2000,
					size: 60,
					lineWidth: 3,
					scaleColor: false,
					barColor: '#c0392b',
					trackColor: '#ddd',
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).children('.easy_chart_percent_text').html(Math.round(percent) + '%<small>Mails</small>');
					}
				});
			}
            if($('.easy_chart_user_sale').length) {
				$('.easy_chart_user_sale').easyPieChart({
					animate: 2000,
					size: 60,
					lineWidth: 3,
					scaleColor: false,
					barColor: '#4a89dc',
					trackColor: '#ddd',
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).children('.easy_chart_percent').html(Math.round(percent) + '%');
					}
				});
			}
        }
    };

    // footable
    yukon_footable = {
        p_pages_mailbox: function() {
            $('#mailbox_table').footable({
                toggleSelector: " > tbody > tr > td > span.footable-toggle"
            });
        },
        p_plugins_tables_footable: function() {

            $('#footable_demo').footable({
                toggleSelector: " > tbody > tr > td > span.footable-toggle"
            }).on({
                'footable_filtering': function (e) {
                    var selected = $('#userStatus').find(':selected').text();
                    if (selected && selected.length > 0) {
                        e.filter += (e.filter && e.filter.length > 0) ? ' ' + selected : selected;
                        e.clear = !e.filter;
                    }
                }
            });

            $('#clearFilters').click(function(e) {
                e.preventDefault();
                $('#userStatus').val('');
                $('#footable_demo').trigger('footable_clear_filter');
            });

            $('#userStatus').change(function (e) {
                e.preventDefault();
                $('#footable_demo').data('footable-filter').filter( $('#textFilter').val() );
            });

            // clear filters on page load
            $('#textFilter, #userStatus').val('');

        }
    };

    // gmaps
    yukon_gmaps = {
        init: function() {
            // basic google maps
            new GMaps({
                div: '#gmap_basic',
                lat: -12.043333,
                lng: -77.028333
            });

            // with markers
            map_markers = new GMaps({
                el: '#gmap_markers',
                lat: 51.500902,
                lng: -0.124531
            });
            map_markers.addMarker({
                lat: 51.497714,
                lng: -0.12991,
                title: 'Westminster',
                details: {
                    // You can attach additional information, which will be passed to Event object (e) in the events previously defined.
                },
                click: function(e){
                    alert('You clicked in this marker');
                },
                mouseover: function(e){
                    if(console.log) console.log(e);
                }
            });
            map_markers.addMarker({
                lat: 51.500891,
                lng: -0.123347,
                title: 'Westminster Bridge',
                infoWindow: {
                    content: '<div class="infoWindow_content"><p>Westminster Bridge is a road and foot traffic bridge over the River Thames...</p><a href="http://en.wikipedia.org/wiki/Westminster_Bridge" target="_blank">wikipedia</a></div>'
                }
            });

            // static map
            var img_scale = window.devicePixelRatio >= 2 ? '&scale=2' : '';
            var background_size = window.devicePixelRatio >= 2 ? 'background-size: 640px 640px;' : '';

            url = GMaps.staticMapURL({
                size: [640, 640],
                lat: -37.824972,
                lng: 144.958735,
                zoom: 10
            });
            $('#gmap_static').append('<span class="gmap-static" style="height:100%;display:block;background: url('+url+img_scale+') no-repeat 50% 50%;'+background_size+'"><img src="'+url+'" style="visibility:hidden" alt="" /></span>');

            // geocoding
            map_geocode = new GMaps({
                el: '#gmap_geocoding',
                lat: 55.478853,
                lng: 15.117188,
                zoom: 3
            });
            $('#geocoding_form').submit(function (e) {
                e.preventDefault();
                GMaps.geocode({
                    address: $('#gmaps_address').val().trim(),
                    callback: function (results, status) {
                        if (status == 'OK') {
                            var latlng = results[0].geometry.location;
                            map_geocode.setCenter(latlng.lat(), latlng.lng());
                            map_geocode.addMarker({
                                lat: latlng.lat(),
                                lng: latlng.lng()
                            });
                            map_geocode.map.setZoom(15);
                            $('#gmaps_address').val('');
                        }
                    }
                });
            });
        }
    };

    // checkboxes & radio buttons
	yukon_icheck = {
		init: function() {
			if($('.icheck').length) {
				$('.icheck').iCheck({
					checkboxClass: 'icheckbox_minimal-blue',
					radioClass: 'iradio_minimal-blue'
				});
			}
		}
	};

    // jBox
    yukon_jBox = {
        p_components_notifications_popups: function() {

            new jBox('Modal', {
                width: 340,
                height: 180,
                attach: $('#jbox_modal_drag'),
                draggable: 'title',
                closeButton: 'title',
                title: 'Click here to drag me around',
                content: 'You can move this modal window'
            });

            new jBox('Confirm', {
                closeButton: false,
                confirmButton: 'Yes',
                cancelButton: 'No',
                _onOpen: function() {
                    // Set the new action for the submit button
                    this.submitButton
                        .off('click.jBox-Confirm' + this.id)
                        .on('click.jBox-Confirm' + this.id, function() {
                            new jBox('Notice', {
                                offset: {
                                    y: 36
                                },
                                content: 'Comment deleted: id=34'
                            });
                            this.close();
                        }.bind(this));
                }
            });
            $('#jbox_n_default').click(function() {
                new jBox('Notice', {
                    offset: {
                        y: 36
                    },
                    stack: false,
                    autoClose: 30000,
                    animation: {
                        open: 'slide:top',
                        close: 'slide:right'
                    },
                    onInit: function () {
                        this.options.content = 'Default notification';
                    }
                });
            });
            $('#jbox_n_audio').click(function() {
                new jBox('Notice', {
                    attributes: {
                        x: 'right',
                        y: 'bottom'
                    },
                    theme: 'NoticeBorder',
                    color: 'green',
                    audio: 'assets/lib/jBox-0.3.0/Source/audio/bling2',
                    volume: '100',
                    stack: false,
                    autoClose: 3000,
                    animation: {
                        open: 'slide:bottom',
                        close: 'slide:left'
                    },
                    onInit: function () {
                        this.options.title = 'Title';
                        this.options.content = 'Notification with audio effect';
                    }
                });
            });
            $('#jbox_n_audio50').click(function() {
                new jBox('Notice', {
                    attributes: {
                        x: 'right',
                        y: 'top'
                    },
                    offset: {
                        y: 36
                    },
                    theme: 'NoticeBorder',
                    color: 'blue',
                    audio: 'assets/lib/jBox-0.3.0/Source/audio/beep2',
                    volume: '60',
                    stack: false,
                    autoClose: 3000,
                    animation: {
                        open: 'slide:top',
                        close: 'slide:right'
                    },
                    onInit: function () {
                        this.options.title = 'Title';
                        this.options.content = 'Volume set to 60%';
                    }
                })
            });

        }
    };

    // listNav
    yukon_listNav = {
        p_pages_user_list: function() {
            $('#user_list').listnav({
                filterSelector: '.ul_lastName',
                includeNums: false,
                removeDisabled: true,
                showCounts: false,
                onClick: function(letter) {
                    $('.countUsers').text($(".listNavShow").length);
                }
            });
        }
    };

    // magnific lightbox
    yukon_magnific = {
        p_components_gallery: function() {
            $('.gallery_grid .img_wrapper').magnificPopup({
                type: 'image',
                gallery:{
                    enabled: true,
                    arrowMarkup: '<i title="%title%" class="el-icon-chevron-%dir% mfp-nav"></i>'
                },
                image: {
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>' + item.el.children(".gallery_image_tags").text() + '</small>';
                    }
                },
                removalDelay: 500, //delay removal by X to allow out-animation
                callbacks: {
                    beforeOpen: function() {
                        $('html').addClass('magnific-popup-open');
                        // just a hack that adds mfp-anim class to markup
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainClass = 'mfp-zoom-in';
                    },
                    close: function() {
                        $('html').removeClass('magnific-popup-open');
                    }
                },
                retina: {
                    ratio: 2
                },
                closeOnContentClick: true,
                midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
            });
        }
    };

    // masked inputs
    yukon_maskedInputs = {
        p_forms_extended: function() {
            $("#mask_date").inputmask("dd/mm/yyyy",{ "placeholder": "dd/mm/yyyy", showMaskOnHover: false });
            $("#mask_phone").inputmask("mask", {"mask": "(999) 999-9999"});
            $("#mask_plate").inputmask({"mask": "[9-]AAA-999"});
            $("#mask_numeric").inputmask('€ 999.999,99', { numericInput: false });
            $("#mask_mac").inputmask({"mask": "**:**:**:**:**:**"});
            $("#mask_callback").inputmask("mm/dd/yyyy",{ "placeholder": "mm/dd/yyyy", "oncomplete": function(){ alert('Date entered: '+$(this).val()); } });
            $('[data-inputmask]').inputmask();
        }
    };

    // match height
    yukon_matchHeight = {
        p_dashboard: function() {
            $('.mHeight').each(function() {
                $(this).find('.mHeight-item').matchHeight(true);
            });
            $(window).on("debouncedresize", function() {
                $.fn.matchHeight._update();
            });
        }
    }

    // validation (parsley.js)
    yukon_parsley_validation = {
        p_forms_validation: function() {
            $('#form_validation').parsley();
        },
        p_forms_wizard: function() {
            $('#wizard_validation').parsley();
			var thisIndex = 0;
			$.listen('parsley:field:validate', function(e) {
				yukon_steps.setContentHeight('#'+e.$element.closest('div.wizard').attr('id'));
			});
		}
    };

    // password show/hide
    yukon_pwd_show_hide = {
        init: function() {
            if($('#pwdSt_password').length) {
                $('#pwdSt_password').hidePassword(true);
            }
        }
    };

    // password strength metter
    yukon_pwd_strength_metter = {
        init: function() {
            if($('#pwdSt_password').length) {
                var options = {};
                options.ui = {
                    verdicts: ["Weak", "Normal", "Medium", "Strong", "Very Strong"],
                    container: "#pwd-container",
                    showVerdictsInsideProgressBar: true,
                    viewports: {
                        progress: ".pwstrength_viewport_progress"
                    }
                };
                $('#pwdSt_password').pwstrength(options);
            }
        }
    };

    // qrcode
    yukon_qrcode = {
        p_pages_invoices: function() {
            $('#invoice_qrcode').css({'width': gr_code_data.baseSize / 2, 'height': gr_code_data.baseSize / 2}).qrcode({
                render: 'canvas',
                size: gr_code_data.baseSize,
                text: gr_code_data.qrText
            }).children('img').prop('title', gr_code_data.qrText);
        }
    };

    // rangeSlider
	yukon_rangeSlider = {
		p_forms_extended: function() {
			if ($("#rS_exm_1").length) {
				$("#rS_exm_1").ionRangeSlider({
					min: 0,
					max: 5000,
					from: 1200,
					to: 2450,
					type: 'double',
					prefix: "$",
					maxPostfix: "+",
					prettify: false,
					hasGrid: true
				});
			}
			if ($("#rS_exm_2").length) {
				$("#rS_exm_2").ionRangeSlider({
					min: 1000,
					max: 100000,
					from: 30000,
					to: 90000,
					type: 'double',
					step: 500,
					postfix: " €",
					hasGrid: true
				});
			}
			if ($("#rS_exm_3").length) {
				$("#rS_exm_3").ionRangeSlider({
					min: 0,
					max: 10,
					type: 'single',
					step: 0.1,
					postfix: " carats",
					prettify: false,
					hasGrid: true
				});
			}
			if ($("#rS_exm_4").length) {
				$("#rS_exm_4").ionRangeSlider({
					min: -50,
					max: 50,
					from: 0,
					postfix: "°",
					prettify: false,
					hasGrid: true
				});
			}
			if ($("#rS_exm_5").length) {
				$("#rS_exm_5").ionRangeSlider({
					min: 10000,
					max: 100000,
					step: 100,
					postfix: " km",
					from: 55000,
					hideMinMax: true,
					hideFromTo: false
				});
			}
		}
	};

    // select2
	yukon_select2 = {
		p_forms_extended: function() {
			if ($("#s2_basic").length) {
				$("#s2_basic").select2({
					allowClear: true,
					placeholder: "Select..."
				});
			}
			if ($("#s2_multi").length) {
				$("#s2_multi").select2({
					placeholder: "Select..."
				});
			}
			if($('#s2_tokenization').length) {
				$('#s2_tokenization').select2({
					placeholder: "Select...",
					tags:["red", "green", "blue", "black", "orange", "white"],
					tokenSeparators: [",", " "]
				});
			}
			if($('#s2_ext_value').length) {

				function format(state) {
					if (!state.id) return state.text;
					return '<i class="flag-' + state.id + '"></i>' + state.text;
				}

				$('#s2_ext_value').select2({
					placeholder: "Select Country",
					formatResult: format,
					formatSelection: format,
					escapeMarkup: function(markup) { return markup; }
				}).val("AU").trigger("change");

				$("#s2_ext_us").click(function(e) { e.preventDefault(); $("#s2_ext_value").val("US").trigger("change"); });
				$("#s2_ext_br_gb").click(function(e) { e.preventDefault(); $("#s2_ext_value").val(["JP","PL"]).trigger("change"); });
			}
			if($('#s2_load_data').length) {
				$("#s2_load_data").select2({
					data:[
						{id:0,text:'enhancement'},
						{id:1,text:'bug'},
						{id:2,text:'duplicate'},
						{id:3,text:'invalid'},
						{id:4,text:'wontfix'}
					]
				});
			}
		},
        p_forms_validation: function() {
			if($('#val_select').length) {
				$('#val_select').select2({
					allowClear: true,
					placeholder: "Select..."
				});
			}
		},
        p_forms_wizard: function() {
			if($('#s2_country').length) {
				function format(state) {
					if (!state.id) return state.text;
					return '<i class="flag-' + state.id + '"></i>' + state.text;
				}
				$('#s2_country').select2({
					placeholder: "Select Country",
					formatResult: format,
					formatSelection: format,
					escapeMarkup: function(markup) { return markup; }
				});
			}
			if($('#s2_languages').length) {
				$('#s2_languages').select2({
					placeholder: "Select language",
					tags:["Mandarin", "Spanish", "English", "Hindi", "Arabic", "Portuguese"],
					tokenSeparators: [",", " "]
				});
			}
		}
	};

    // selectize.js
	yukon_selectize = {
		p_forms_extended: function() {
			if($('#slz_optgroups').length) {
				$('#slz_optgroups').selectize({
                    sortField: 'text'
                });
			}
            if($('#slz_contacts').length) {
                var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
                  '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

                var formatName = function(item) {
                    return $.trim((item.first_name || '') + ' ' + (item.last_name || ''));
                };

                $('#slz_contacts').selectize({
                    persist: false,
                    maxItems: null,
                    valueField: 'email',
                    labelField: 'name',
                    searchField: ['first_name', 'last_name', 'email'],
                    sortField: [
                        {field: 'first_name', direction: 'asc'},
                        {field: 'last_name', direction: 'asc'}
                    ],
                    options: [
                        {email: 'nikola@tesla.com', first_name: 'Nikola', last_name: 'Tesla'},
                        {email: 'brian@thirdroute.com', first_name: 'Brian', last_name: 'Reavis'},
                        {email: 'someone@gmail.com'}
                    ],
                    render: {
                        item: function(item, escape) {
                            var name = formatName(item);
                            return '<div>' +
                                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                            '</div>';
                        },
                        option: function(item, escape) {
                            var name = formatName(item);
                            var label = name || item.email;
                            var caption = name ? item.email : null;
                            return '<div>' +
                                '<span class="label">' + escape(label) + '</span>' +
                                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                            '</div>';
                        }
                    },
                    createFilter: function(input) {
                        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
                        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
                        return regexpA.test(input) || regexpB.test(input);
                    },
                    create: function(input) {
                        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
                            return {email: input};
                        }
                        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
                        if (match) {
                            var name       = $.trim(match[1]);
                            var pos_space  = name.indexOf(' ');
                            var first_name = name.substring(0, pos_space);
                            var last_name  = name.substring(pos_space + 1);

                            return {
                                email: match[2],
                                first_name: first_name,
                                last_name: last_name
                            };
                        }
                        alert('Invalid email address.');
                        return false;
                    }
                });
            }
            if($('#slz_remove_btn').length) {
				$('#slz_remove_btn').selectize({
                    plugins: ['remove_button'],
                    persist: false,
                    create: true,
                    render: {
                        item: function(data, escape) {
                            return '<div>"' + escape(data.text) + '"</div>';
                        }
                    },
                    onDelete: function(values) {
                        return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove "' + values[0] + '"?');
                    }
                });
			}
		}
	};

    // wizard
	yukon_steps = {
		init: function() {
			if ($("#wizard_101").length) {
				// initialize wizard
				$("#wizard_101").steps({
					headerTag: 'h3',
					bodyTag: "section",
					titleTemplate: "<span class=\"title\">#title#</span>",
					enableAllSteps: true,
					enableFinishButton: false,
					transitionEffect: "slideLeft",
					labels: {
						next: "Next <i class=\"fa fa-angle-right\"></i>",
						previous: "<i class=\"fa fa-angle-left\"></i> Previous",
						current: "",
						finish: "Agree"
					},
					onStepChanged: function (event, currentIndex, priorIndex) {
						// adjust wizard height
						yukon_steps.setContentHeight('#wizard_101')
					}
				});
				// set initial wizard height
				yukon_steps.setContentHeight('#wizard_101');
                // rezie wizard on window resize
                $(window).on('resize',function() {
                    yukon_steps.setContentHeight('#wizard_101');
                })
			}
			if ($("#wizard_form").length) {
				var wizard_form = $('#wizard_form');
				// initialize wizard
				wizard_form.steps({
					headerTag: 'h3',
					bodyTag: "section",
					enableAllSteps: true,
					titleTemplate: "<span class=\"title\">#title#</span>",
					transitionEffect: "slideLeft",
					labels: {
						next: "Next Step <i class=\"fa fa-angle-right\"></i>",
						previous: "<i class=\"fa fa-angle-left\"></i> Previous Step",
						current: "",
						finish: "<i class=\"fa fa-check\"></i> Register"
					},
					onStepChanging: function (event, currentIndex, newIndex) {
						var cursentStep = wizard_form.find('.content > .body').eq(currentIndex);
						// check input fields for errors
						cursentStep.find('[data-parsley-id]').each(function() {
							$(this).parsley().validate();
						});

						return cursentStep.find('.parsley-error').length ? false : true;
					},
					onStepChanged: function (event, currentIndex, priorIndex) {
						// adjust wizard height
						yukon_steps.setContentHeight('#wizard_form');
					},
					onFinishing: function (event, currentIndex) {
						var cursentStep = wizard_form.find('.content > .body').eq(currentIndex);
						// check input fields for errors
						cursentStep.find('[data-parsley-id]').each(function() {
							$(this).parsley().validate();
						});

                        return cursentStep.find('.parsley-error').length ? false : true;
					},
					onFinished: function(event, currentIndex) {
						alert("Submitted!");
                        // uncomment the following line to submit form
                        //wizard_form.submit();
					}
				});
				// set initial wizard height
				yukon_steps.setContentHeight('#wizard_form');
                // rezie wizard on window resize
                $(window).on('resize',function() {
                    yukon_steps.setContentHeight('#wizard_form');
                })
            }
        },
		setContentHeight: function($wizard) {
			setTimeout(function() {
				var cur_height = $($wizard).children('.content').children('.body.current').outerHeight();
				$($wizard).find('.content').height(cur_height);
			},0);
		}
	};

    // switchery
    yukon_switchery = {
        init: function() {
            if($('.js-switch').length) {
                $('.js-switch').each(function() {
					new Switchery(this);
				})
            }
            if($('.js-switch-blue').length) {
                $('.js-switch-blue').each(function() {
					new Switchery(this, { color: '#41b7f1' });
				})
            }
            if($('.js-switch-success').length) {
                $('.js-switch-success').each(function() {
					new Switchery(this, { color: '#8cc152' });
				})
			}
			if($('.js-switch-warning').length) {
                $('.js-switch-warning').each(function() {
					new Switchery(this, { color: '#f6bb42' });
				})
			}
			if($('.js-switch-danger').length) {
                $('.js-switch-danger').each(function() {
					new Switchery(this, { color: '#da4453' });
				})
			}
			if($('.js-switch-info').length) {
                $('.js-switch-info').each(function() {
					new Switchery(this, { color: '#37bc9b' });
				})
			}
        }
    };

    // textarea autosize
    yukon_textarea_autosize = {
        init: function() {
            if($('.textarea_auto').length) {
                $('.textarea_auto').autosize();
            }
        }
    };

    // maxLength for textareas
    yukon_textarea_maxlength = {
        p_forms_extended: function() {
            if($('#ml_default').length) {
                $('#ml_default').stopVerbosity({
                    limit: 20,
                    existingIndicator: $('#ml_default_indicator')
                });
            }
            if($('#ml_custom').length) {
                $('#ml_custom').stopVerbosity({
                    limit: 32,
                    existingIndicator: $('#ml_custom_indicator'),
                    indicatorPhrase: [
                        'This is a custom indicator phrase.',
                        'This one only counts down. Only', '<span class="label label-primary">[countdown]</span>', 'characters', 'left.'
                    ]
                })
            }
        }
    };

    // typeahead
    yukon_typeahead = {
        init: function() {
            var substringMatcher = function (strs) {
                return function findMatches(q, cb) {
                    var matches, substrRegex;
                    // an array that will be populated with substring matches
                    matches = [];
                    // regex used to determine if a string contains the substring `q`
                    substrRegex = new RegExp(q, 'i');
                    // iterate through the pool of strings and for any string that
                    // contains the substring `q`, add it to the `matches` array
                    $.each(strs, function (i, str) {
                        if (substrRegex.test(str)) {
                            // the typeahead jQuery plugin expects suggestions to a
                            // JavaScript object, refer to typeahead docs for more info
                            matches.push({value: str});
                        }
                    });
                    cb(matches);
                };
            };

            var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

            $('#main_header .search_section > input').val('').typeahead({
                    hint: true,
                    highlight: true,
                    minLength: 1
                },
                {
                    name: 'states',
                    displayKey: 'value',
                    source: substringMatcher(states)
                });
        }
    }

    // multiuploader
    yukon_uploader = {
        p_forms_extended: function() {
            if($('#uploader').length) {
                $("#uploader").pluploadQueue({
                    // General settings
                    runtimes : 'html5,flash,silverlight,html4',
                    url : "/upload",

                    chunk_size : '1mb',
                    rename : true,
                    dragdrop: true,

                    filters : {
                        // Maximum file size
                        max_file_size : '10mb',
                        // Specify what files to browse for
                        mime_types: [
                            {title : "Image files", extensions : "jpg,gif,png"},
                            {title : "Zip files", extensions : "zip"}
                        ]
                    },

                    // Resize images on clientside if we can
                    resize: {
                        width : 200,
                        height : 200,
                        quality : 90,
                        crop: true // crop to exact dimensions
                    },


                    // Flash settings
                    flash_swf_url : 'assets/lib/plupload/js/Moxie.swf',

                    // Silverlight settings
                    silverlight_xap_url : 'assets/lib/plupload/js/Moxie.xap'
                });
            }
        }
    };

    // vector maps
    yukon_vector_maps = {
        p_dashboard: function() {
            if($('#world_map_vector').length) {
                $('#world_map_vector').vectorMap({
                    map: 'world_mill_en',
                    backgroundColor: 'transparent',
                    regionStyle: {
                        initial: {
                            fill: '#c8c8c8'
                        },
                        hover: {
                            "fill-opacity": 1
                        }
                    },
                    series: {
                        regions: [{
                            values: countries_data,
                            scale: ['#58bbdf', '#1c7393'],
                            normalizeFunction: 'polynomial'
                        }]
                    },
                    onRegionLabelShow: function(e, el, code){
                        if(typeof countries_data[code] == 'undefined') {
                            e.preventDefault();
                        } else {
                            var countryLabel = countries_data[code];
                            el.html(el.html()+': '+countryLabel+' visits');
                        }
                    }
                });
            }
        },
        p_plugins_vector_maps: function() {

            // random colors
            var palette = ['#1f77b4', '#3a9add', '#888'];

            function generateColors() {
                var colors = {},
                    key;
                for (key in map_ca.regions) {
                    colors[key] = palette[Math.floor(Math.random() * palette.length)];
                }
                return colors;
            };

            function updateColors() {
                map_ca.series.regions[0].setValues(generateColors());
            };

            $('#updateColors').click(function(e) {
                e.preventDefault();
                updateColors();
            })

            map_ca = new jvm.WorldMap({
                map: 'ca_mill_en',
                container: $('#vmap_canada'),
                backgroundColor: 'transparent',
                series: {
                    regions: [
                        {
                            attribute: 'fill'
                        }
                    ]
                }
            });
            map_ca.series.regions[0].setValues(generateColors());

            // markers on the map
            $('#vmap_markers').vectorMap({
                map: 'world_mill_en',
                backgroundColor: 'transparent',
                scaleColors: ['#c8eeff', '#0071a4'],
                normalizeFunction: 'polynomial',
                hoverColor: false,
                regionStyle: {
                    initial: {
                        fill: '#888'
                    },
                    hover: {
                        "fill-opacity": 1
                    }
                },
                markerStyle: {
                    initial: {
                        fill: '#fff',
                        stroke: '#1f77b4'
                    },
                    hover: {
                        fill: '#13476c',
                        stroke: '#13476c'
                    }
                },
                markers: [
                  {latLng: [41.90, 12.45], name: 'Vatican City'},
                  {latLng: [43.73, 7.41], name: 'Monaco'},
                  {latLng: [-0.52, 166.93], name: 'Nauru'},
                  {latLng: [-8.51, 179.21], name: 'Tuvalu'},
                  {latLng: [43.93, 12.46], name: 'San Marino'},
                  {latLng: [47.14, 9.52], name: 'Liechtenstein'},
                  {latLng: [7.11, 171.06], name: 'Marshall Islands'},
                  {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
                  {latLng: [3.2, 73.22], name: 'Maldives'},
                  {latLng: [35.88, 14.5], name: 'Malta'},
                  {latLng: [12.05, -61.75], name: 'Grenada'},
                  {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
                  {latLng: [13.16, -59.55], name: 'Barbados'},
                  {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
                  {latLng: [-4.61, 55.45], name: 'Seychelles'},
                  {latLng: [7.35, 134.46], name: 'Palau'},
                  {latLng: [42.5, 1.51], name: 'Andorra'},
                  {latLng: [14.01, -60.98], name: 'Saint Lucia'},
                  {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
                  {latLng: [1.3, 103.8], name: 'Singapore'},
                  {latLng: [1.46, 173.03], name: 'Kiribati'},
                  {latLng: [-21.13, -175.2], name: 'Tonga'},
                  {latLng: [15.3, -61.38], name: 'Dominica'},
                  {latLng: [-20.2, 57.5], name: 'Mauritius'},
                  {latLng: [26.02, 50.55], name: 'Bahrain'},
                  {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
                ]
              });
        }
    };

	// wysiwg editor
	yukon_wysiwg = {
		p_forms_validation: function() {
			if ($('#val_textarea_message').length) {
				var editor_validate = $('textarea#val_textarea_message').ckeditor();
			}
		},
        p_forms_extended: function() {
			if ($('#wysiwg_editor').length) {
				$('#wysiwg_editor').ckeditor();
			}
		}
	};
