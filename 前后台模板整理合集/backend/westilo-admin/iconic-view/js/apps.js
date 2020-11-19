jQuery(document).ready(function($) {
    "use strict";
    var plugin_exists = true;
//    **----------
//    Google Fonts
//    **----------
        var WebFontConfig = {
            google: {
                families: [
                    'Open+Sans:400italic,400,300,600:latin',
                    'Roboto:400,300,400italic,500:latin'
                ]
            }
        };
        (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();

    // **---------------------------------------
    // Left Bar and Right Bar Height Calculation
    // **---------------------------------------
    function AsideHeight() {
        var wh = $(window).outerHeight(),
            TopBarHeight = $('.topbar').height(),
            calc_wh = wh - TopBarHeight;
        $(".leftbar").css({
            "height": calc_wh + "px"
        });
        $(".rightbar").css({
            "height": calc_wh + "px"
        });
        $('.left-aside-container').slimscroll({
            height: calc_wh,
            width: "250px",
            size: '4px',
            color: 'rgba(255,255,255,.5)',
            distance: '1px',
            railVisible: true,
            railColor: '#222',
            railOpacity: 0.3,
            wheelStep: 20,
            borderRadius: '0px',
            railBorderRadius: '0px',
            allowPageScroll: false
        });
    }


    // **------------------------------
    // Rightbar Chat Height Calculation
    // **------------------------------

    function ChatHeight() {

        var RightBarTabHeight = $(".rightbar-tab").outerHeight(),
            ChatToolbarHeight = $(".chat-user-toolbar").outerHeight(),
            TopSectionHeight = RightBarTabHeight + ChatToolbarHeight,
            ConvToolbarHeight = $(".coversation-toolbar").outerHeight(),
            ChatTextInput = $(".chat-text-input").outerHeight(),
            ConvSectionHeight = ConvToolbarHeight + ChatTextInput;


        var wh = $(window).outerHeight(),
            TopBarHeight = $('.topbar').height(),
            calc_wh = wh - TopBarHeight,
            ChatContainerHeight = calc_wh - TopSectionHeight,
            tabCon_h = wh - (TopBarHeight + RightBarTabHeight),
            ConvContainerHeight = calc_wh - ConvSectionHeight;


        $(".chat-user-container").css({
            "height": ChatContainerHeight + "px"
        });

        $(".chat-user-container").slimscroll({
            height: ChatContainerHeight,
            width: "300px",
            size: '4px',
            color: 'rgba(000,000,000,.5)',
            distance: '1px',
            railVisible: true,
            railColor: '#222',
            railOpacity: 0.3,
            wheelStep: 20,
            borderRadius: '0px',
            railBorderRadius: '0px',
            allowPageScroll: false
        });

        // **------------------------
        // Activities Timeline Height
        // **------------------------
        $(".activities-timeline, .rightbar .message-list-container, .rightbar .notification-wrap").css({
            "height": tabCon_h + "px"
        });
        $(".activities-timeline").slimscroll({
            height: tabCon_h,
            width: "300px",
            size: '4px',
            color: 'rgba(000,000,000,.5)',
            distance: '1px',
            railVisible: true,
            railColor: '#222',
            railOpacity: 0.3,
            wheelStep: 20,
            borderRadius: '0px',
            railBorderRadius: '0px',
            allowPageScroll: false
        });
        $(".rightbar .message-list-container, .rightbar .notification-wrap").slimscroll({
            height: tabCon_h,
            width: "300px",
            size: '4px',
            color: 'rgba(000,000,000,.5)',
            distance: '1px',
            railVisible: true,
            railColor: '#222',
            railOpacity: 0.3,
            wheelStep: 20,
            borderRadius: '0px',
            railBorderRadius: '0px',
            allowPageScroll: false
        });
        $(".conversation-container").slimscroll({
            height: ConvContainerHeight,
            width: "300px",
            size: '4px',
            color: 'rgba(000,000,000,.5)',
            distance: '1px',
            railVisible: true,
            railColor: '#222',
            railOpacity: 0.3,
            wheelStep: 20,
            borderRadius: '0px',
            railBorderRadius: '0px',
            allowPageScroll: false
        });

    }

    // **---------------------------
    // Bootstrap Tooltip and Popover
    // **---------------------------
    $('[data-toggle="tooltip"]').tooltip();

    // **----------
    // Chat Popover
    // **----------
    $('[data-toggle="popover"]').popover();
    $(".chat-user-list > li > div").popover({
        html: true,
        container: ".rightbar",
        delay: {
            "show": 100,
            "hide": 100
        }
    });

    // **------------------
    // Popover Hide onClick
    // **------------------
    $('body').on('click', function(e) {
        $('.chat-user-list > li > a').each(function() {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });



    // **----------------
    // Velocity Animation
    // **----------------
    try {
        $('.slidePanel').velocity({
            translateX: "-100%"
        }, 300, "swing");

    } catch (err) {
        console.log('velocity is not found');
    }

    // **------------
    // Leftbar Toggle
    // **------------
    $(".left-toggle-switch").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($("body").hasClass("left-aside-toggle")) {
            $("body").removeClass("left-aside-toggle");
        } else {
            $("body").addClass("left-aside-toggle");
        }
    });

    // **-------------
    // Rightbar Toggle
    // **-------------
    $(".right-toggle-switch").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($(".rightbar").hasClass("right-aside-toggle")) {
            $(".rightbar").removeClass("right-aside-toggle");
        } else {
            $(".rightbar").addClass("right-aside-toggle");
        }
        $(window).trigger("resize");
    });

    // **-----------
    // Mobile Topbar
    // **-----------
    $(".btn-mobile-bar").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($(".topbar-right").hasClass("bar-toggle")) {
            $(".topbar-right").removeClass("bar-toggle");
        } else {
            $(".topbar-right").addClass("bar-toggle");
        }
    });

    // **--------
    // Search Bar
    // **--------
    $(".btn-top-search").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($(".top-search-bar").hasClass("search-bar-toggle")) {
            $(".top-search-bar").removeClass("search-bar-toggle");
        } else {
            $(".top-search-bar").addClass("search-bar-toggle");
        }
    });

    // **------------------
    // Individual Chat Open
    // **------------------
    $(".chat-user-list > li > div, .chat-back").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($(".aside-chat-box").hasClass("right-chat-toggle")) {
            $(".aside-chat-box").removeClass("right-chat-toggle");
        } else {
            $(".aside-chat-box").addClass("right-chat-toggle");
        }
    });

    // **-------------------------
    // Hide Elements On Body Click
    // **-------------------------
    $(document).on('click touchstart', function(e) {
        if ($(e.target).closest(".right-aside-toggle").length === 0 && $(e.target).closest(".right-toggle-switch").length === 0) {
            $(".rightbar").removeClass("right-aside-toggle");
        }
        if ($("body").hasClass("overlay-leftbar")) {
            if ($(e.target).closest(".leftbar").length === 0 && $(e.target).closest(".left-toggle-switch").length === 0) {
                $("body").removeClass("left-aside-toggle");
            }
        }
        if ($(e.target).closest(".topbar-right").length === 0 && $(e.target).closest(".btn-mobile-bar").length === 0) {
            $(".topbar-right").removeClass("bar-toggle");
        }
        if ($(e.target).closest(".top-search-bar").length === 0 && $(e.target).closest(".btn-top-search").length === 0) {
            $(".top-search-bar").removeClass("search-bar-toggle");
        }
    });

    // **-----------------------------------------------
    // Notification Dropdpown Tab Will Not Close onClick
    // **-----------------------------------------------
    $('.notifications-tabs').on('click touchstart', '.nav-tabs a', function(e) {
        e.preventDefault();
        $(this).closest('.dropdown').addClass('dontClose');
    });

    $('.notifications-dropdown').on('hide.bs.dropdown', function(e) {
        if ($(this).hasClass('dontClose')) {
            e.preventDefault();
        }
        $(this).removeClass('dontClose');
    });

    // **---------------
    // Leftbar Accordion
    // **---------------

    if ($.fn.navAccordion) {
        $('.list-accordion').each(function() {
            $(this).navAccordion({
                eventType: 'click',
                hoverDelay: 100,
                autoClose: true,
                saveState: false,
                disableLink: true,
                speed: 'fast',
                showCount: false,
                autoExpand: true,
                classExpand: 'acc-current-parent'
            });
        });
    }
    $(document).on("mouseleave", ".iconic-leftbar", function() {
        $(".list-accordion .dcjq-parent").removeClass('active');
        $(".list-accordion .acc-parent-li .acc-parent").removeClass('active');
        $(".list-accordion ul").hide();
    });

    // **--------
    // Scroll Top
    // **--------
    if($.fn.scrollUp){
        $.scrollUp({
            scrollName: 'scrollTop', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade',
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    }


    var SyntaxHighlight = $.SyntaxHighlighter;
    if (SyntaxHighlight) {
        SyntaxHighlight.init({
            'theme': 'balupton',
            'themes': ['balupton']
        });
    }

    // **---------------------
    // Initialize both sidebar
    // **---------------------
    AsideHeight();
    ChatHeight();

    // **-----------
    // Window Resize
    // **-----------
    $(window).smartresize(function() {
        AsideHeight();
        ChatHeight();
    });
    // **---------------
    // Responsive Handle
    // **---------------
    var jRes = jRespond([{
        label: 'handheld',
        enter: 0,
        exit: 767
    }, {
        label: 'tablet',
        enter: 768,
        exit: 979
    }, {
        label: 'laptop',
        enter: 980,
        exit: 1199
    }, {
        label: 'desktop',
        enter: 1200,
        exit: 10000
    }]);

    jRes.addFunc({
        breakpoint: 'handheld',
        enter: function() {
            $(".dropdown").removeClass("open");
            $(".rightbar").removeClass("right-aside-toggle");
            $("body").addClass("isMobile");
            $(document).on('click touchstart', function(e) {
                if ($("body").hasClass("overlay-leftbar") || $("body").hasClass("isMobile")) {
                    if ($(e.target).closest(".leftbar").length === 0 && $(e.target).closest(".left-toggle-switch").length === 0) {
                        $("body").removeClass("left-aside-toggle");
                    }
                }
            });
        },
        exit: function() {
            $(".isMobile").removeClass("left-aside-toggle");
            $(".rightbar").removeClass("right-aside-toggle");
            $("body").removeClass("isMobile");
        }
    });

    // **---------------------
    // Advanced Forms Elements
    // **---------------------
    /**
     * Tags Input
     * jquery.tagsinput.js
     * tagsinput.css
     * */
    if ($.fn.tagsInput) {
        $('.tags-input').each(function() {
            var tagsType = $(this).data('type')
            var highlightColor = $(this).data('highlight-color')
            if (tagsType === 'tags') {
                $(this).tagsInput({
                    width: 'auto'
                });
            }
            if (tagsType === 'highlighted-tags') {
                $(this).tagsInput({
                    width: 'auto',
                    onChange: function(elem, elem_tags) {
                        var languages = ['php', 'ruby', 'javascript'];
                        $('.tag', elem_tags).each(function() {
                            if ($(this).text().search(new RegExp('\\b(' + languages.join('|') + ')\\b')) >= 0) $(this).css('background-color', highlightColor);
                        });
                    }
                });
            }
        });
    }

    /**
     * Input Mask
     * jquery.mask.js
     *  */
    if ($.fn.mask) {
        $('.date-mask').mask('11/11/1111', {
            placeholder: "__/__/____"
        });
        $('.time-mask').mask('00:00:00', {
            placeholder: "00:00:00"
        });
        $('.date_time-mask').mask('00/00/0000 00:00:00', {
            placeholder: "00/00/0000 00:00:00"
        });
        $('.cep-mask').mask('00000-000', {
            placeholder: "00000-000"
        });
        $('.phone-mask').mask('0000-0000', {
            placeholder: "0000-0000"
        });
        $('.phone_with_ddd-mask').mask('(00) 0000-0000', {
            placeholder: "(00) 0000-0000"
        });
        $('.phone_us-mask').mask('(000) 000-0000', {
            placeholder: "(000) 000-0000"
        });
        $('.mixed-mask').mask('AAA 000-S0S', {
            placeholder: "AAA 000-S0S"
        });
        $('.cpf-mask').mask('000.000.000-00', {
            reverse: true,
            placeholder: "000.000.000-00"
        });
        $('.money-mask').mask('000.000.000.000.000,00', {
            reverse: true,
            placeholder: "000.000.000.000.000,00"
        });
        $('.money2-mask').mask("#.##0,00", {
            reverse: true,
            maxlength: false,
            placeholder: "#.##0,00"
        });
        $('.ip_address-mask').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
            placeholder: "0ZZ.0ZZ.0ZZ.0ZZ",
            translation: {
                'Z': {
                    pattern: /[0-9]/,
                    optional: true
                }
            }
        });
        $('.ip_address-mask').mask('099.099.099.099', {
            placeholder: "099.099.099.099"
        });
        $('.percent-mask').mask('##0,00%', {
            reverse: true,
            placeholder: "###,##%"
        });
        $('.clear-if-not-match-mask').mask("00/00/0000", {
            clearIfNotMatch: true,
            placeholder: "__/__/____"
        });
        $('.placeholder-mask').mask("00/00/0000", {
            placeholder: "__/__/____"
        });
    }

    /**
     * Spinner
     * jquery.bootstrap-touchspin.js
     * spinner.css
     *  */
    if ($.fn.TouchSpin) {
        $(".vertical-spin").TouchSpin({
            verticalbuttons: true,
            verticalupclass: 'glyphicon glyphicon-plus',
            verticaldownclass: 'glyphicon glyphicon-minus'
        });
        var vspinTrue = $(".vertical-spin").TouchSpin({
            verticalbuttons: true
        });
        if (vspinTrue) {
            $('.vertical-spin').prev('.bootstrap-touchspin-prefix').remove();
        }

        $("input[name='demo1']").TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
            postfix: '%'
        });
        $("input[name='demo2']").TouchSpin({
            min: -1000000000,
            max: 1000000000,
            stepinterval: 50,
            maxboostedstep: 10000000,
            prefix: '$'
        });
        $("input[name='demo3']").TouchSpin();
        $("input[name='demo3_21']").TouchSpin({
            initval: 40
        });
        $("input[name='demo3_22']").TouchSpin({
            initval: 40
        });

        $("input[name='demo5']").TouchSpin({
            prefix: "pre",
            postfix: "post"
        });
        $("input[name='demo0']").TouchSpin({});
    }

    /**
     * iCheck
     * icheck.js
     * icheck.css
     *  */
    try {
        $('.i-min-check').iCheck({
            checkboxClass: 'icheckbox_minimal-pink',
            radioClass: 'iradio_minimal-pink',
            increaseArea: '30%' // optional
        });
        $('.task-i-check').iCheck({
            checkboxClass: 'icheckbox_minimal',
            radioClass: 'iradio_minimal',
            increaseArea: '30%' // optional
        });

    } catch (e) {
        plugin_exists = false;

    }

    // **---------------------
    // Task list check uncheck
    // **---------------------
    function TaskDone() {
        var TaskCheckbox = $('input.task-i-check');

        TaskCheckbox.each(function() {
            if ($(this).parents('.task-action').parents('.task-entry').hasClass('task-done')) {

                $(this).iCheck('check');
            }
        });

        TaskCheckbox.on('ifChecked ifUnchecked', function(event) {
            if (event.type == 'ifChecked') {
                $(this).iCheck('check');
                $(this).parents('.task-action').parents('.task-entry').addClass('task-done');
            } else {
                $(this).iCheck('uncheck');
                $(this).parents('.task-action').parents('.task-entry').removeClass('task-done');
            }
        });
    };
    TaskDone();

    /**
     * select2.js
     * select2-bootstrap.css
     *  */
    if ($.fn.select2) {
        var placeholder = "Select a State";
        $('.select2, .select2-multiple').select2({
            placeholder: placeholder
        });

        $('.select2-allow-clear').select2({
            allowClear: true,
            placeholder: placeholder
        });
        $('button[data-select2-open]').click(function() {
            $('#' + $(this).data('select2-open')).select2('open');
        });
        var select2OpenEventName = "select2-open";
        $(':checkbox').on("click", function() {
            $(this).parent().nextAll('select').select2("enable", this.checked);
        });

        var repo = function formatRepo(repo) {
            if (repo.loading) return repo.text;

            var markup = '<div class="clearfix">' +
                '<div class="col-sm-1">' +
                '<img src="' + repo.owner.avatar_url + '" style="max-width: 100%" />' +
                '</div>' +
                '<div clas="col-sm-10">' +
                '<div class="clearfix">' +
                '<div class="col-sm-6">' + repo.full_name + '</div>' +
                '<div class="col-sm-3"><i class="fa fa-code-fork"></i> ' + repo.forks_count + '</div>' +
                '<div class="col-sm-2"><i class="fa fa-star"></i> ' + repo.stargazers_count + '</div>' +
                '</div>';

            if (repo.description) {
                markup += '<div>' + repo.description + '</div>';
            }

            markup += '</div></div>';

            return markup;
        }

        var repoSelect = function formatRepoSelection(repo) {
            return repo.full_name || repo.text;
        }


        $(".ajax-data").select2({
            ajax: {
                url: "https://api.github.com/search/repositories",
                dataType: 'json',
                delay: 250,
                data: function(params) {
                    return {
                        q: params.term, // search term
                        page: params.page
                    };
                },
                processResults: function(data, page) {
                    // parse the results into the format expected by Select2.
                    // since we are using custom formatting functions we do not need to
                    // alter the remote JSON data
                    return {
                        results: data.items
                    };
                },
                cache: true
            },
            escapeMarkup: function(markup) {
                return markup;
            }, // let our custom formatter work
            minimumInputLength: 1,
            templateResult: repo, // omitted for brevity, see the source of this page
            templateSelection: repoSelect // omitted for brevity, see the source of this page
        });
    }


    /**
     * Bootstrap Datepicker
     * bootstrap-datepicker.js
     * datepicker.css
     **/

    if ($.fn.DatePicker) {
        $('.input-date-picker').DatePicker({
            orientation: "bottom",
            daysOfWeekDisabled: "6",
            calendarWeeks: true,
            autoclose: true,
            todayHighlight: true
        });
        $('.cal-date-picker').DatePicker({
            orientation: "bottom",
            daysOfWeekDisabled: "6",
            calendarWeeks: true,
            autoclose: true,
            todayHighlight: true
        });

        $('.addon-datepicker').DatePicker({
            orientation: "bottom",
            daysOfWeekDisabled: "1",
            calendarWeeks: true,
            autoclose: true,
            todayHighlight: true
        });

        $('.inline-date-picker').DatePicker({
            daysOfWeekDisabled: "1",
            calendarWeeks: true,
            autoclose: true,
            todayHighlight: true
        });

        $('.input-daterange').DatePicker({
            orientation: "top",
            daysOfWeekDisabled: "1",
            calendarWeeks: true,
            autoclose: true,
            todayHighlight: true
        });

    }

    /**
     * Bootstrap daterangepicker
     * daterangepicker.js
     * daterangepicker.css
     **/

    if ($.fn.daterangepicker) {
        $('.input-daterange-datepicker').daterangepicker();
        $('.input-daterange-timepicker').daterangepicker({
            timePicker: true,
            format: 'MM/DD/YYYY h:mm A',
            timePickerIncrement: 30,
            timePicker12Hour: true,
            timePickerSeconds: false
        });
        $('.input-limit-datepicker').daterangepicker({
            format: 'MM/DD/YYYY',
            minDate: '06/01/2015',
            maxDate: '06/30/2015',
            dateLimit: {
                days: 6
            }
        });

        $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

        $('#reportrange').daterangepicker({
            format: 'MM/DD/YYYY',
            startDate: moment().subtract(29, 'days'),
            endDate: moment(),
            minDate: '01/01/2012',
            maxDate: '12/31/2015',
            dateLimit: {
                days: 60
            },
            showDropdowns: true,
            showWeekNumbers: true,
            timePicker: false,
            timePickerIncrement: 1,
            timePicker12Hour: true,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            opens: 'left',
            drops: 'down',
            buttonClasses: ['btn', 'btn-sm'],
            applyClass: 'btn-primary',
            cancelClass: 'btn-default',
            separator: ' to ',
            locale: {
                applyLabel: 'Submit',
                cancelLabel: 'Cancel',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            }
        }, function(start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        });

    }

    /**
     * Bootstrap colorpicker
     * colorpicker.css
     * colorpicker.js
     *  */

    if ($.fn.colorpicker) {
        $('.demo1').colorpicker();
        $('.demo2').colorpicker();

    }

    /**
     * jqColorPicker
     * colorpicker.css
     * jqColorPicker.js
     * */

    if ($.fn.colorPicker) {

        $('.color').colorPicker();
        $('.elem-color').colorPicker();

    }


    /**
     * FooTable
     * footable.all.js
     * components/footable.core.css
     * components/tables.css
     * */

    if ($.fn.footable) {

        $('.foo-data-table').footable({
            phone: 767,
            tablet: 1024
        })


        $('.foo-data-table-filterable').footable({
            phone: 767,
            tablet: 1024
        }).bind('footable_filtering', function(e) {
                var selected = $('.filter-status').find(':selected').text();
                if (selected && selected.length > 0) {
                    e.filter += (e.filter && e.filter.length > 0) ? ' ' + selected : selected;
                    e.clear = !e.filter;
                }
            });




        $('.clear-filter').click(function(e) {
            e.preventDefault();
            $('.filter-status').val('');
            $('table.foo-data-table-filterable').trigger('footable_clear_filter');
        });

        $('.filter-status').change(function(e) {
            e.preventDefault();
            $('table.foo-data-table-filterable').trigger('footable_filter', {
                filter: $('#filter').val()
            });
        });




        $('.foo-data-table-filterable').footable().on('click', '.row-delete', function(e) {
            e.preventDefault();
            //get the footable object
            var footable = $('.foo-data-table-filterable').data('footable');

            //get the row we are wanting to delete
            var row = $(this).parents('tr:first');

            //delete the row
            footable.removeRow(row);
        });

        $('#change-page-size').change(function(e) {
            e.preventDefault();
            var pageSize = $(this).val();
            $('.foo-data-table-filterable').data('page-size', pageSize);
            $('.foo-data-table-filterable').trigger('footable_initialized');
        });
    }


    if ($.fn.sparkline) {
        var sparkLine = function() {
            $('.sparkline').each(function() {
                var data = $(this).data();
                data.valueSpots = {
                    '0:': data.spotColor
                };

                $(this).sparkline(data.data, data);
                var composite = data.compositedata;

                if (composite) {
                    var stlColor = $(this).attr("data-stack-line-color"),
                        stfColor = $(this).attr("data-stack-fill-color"),
                        sptColor = $(this).attr("data-stack-spot-color"),
                        sptRadius = $(this).attr("data-stack-spot-radius");

                    $(this).sparkline(composite, {
                            composite: true,
                            lineColor: stlColor,
                            fillColor: stfColor,
                            spotColor: sptColor,
                            highlightSpotColor: sptColor,
                            spotRadius: sptRadius,
                            valueSpots: {
                                '0:': sptColor
                            }
                        }

                    );
                };
            });
        };

        var sparkResize;
        $(window).smartresize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(function() {
                sparkLine(true)
            }, 100);
        });
        sparkLine(false);
    }

    // **----------
    // Progress Bar
    // **----------
    $('.progress-bar').each(function() {
        var PbarWidth = $(this).data("progress");
        if (PbarWidth) {
            $(this).css('width', PbarWidth + '%');
            $(this).parents('.progress').parents('.progress-wrap').children('.progress-meta').children('.progress-percent').text(PbarWidth + '%');
        }

    });



    // **--------------
    // Dashboard Charts
    // **--------------
    try {
        // Dashboard Small Widget Chart
        var dt3 = [
            [1, 440],
            [2, 450],
            [3, 420],
            [4, 500],
            [5, 650],
            [6, 470],
            [7, 490],
            [8, 580],
            [9, 600],
            [10, 780]
        ];
        var dt4 = [
            [1, 340],
            [2, 350],
            [3, 420],
            [4, 590],
            [5, 650],
            [6, 470],
            [7, 390],
            [8, 580],
            [9, 700],
            [10, 980]
        ];
        var dt5 = [
            [1, 740],
            [2, 650],
            [3, 420],
            [4, 500],
            [5, 650],
            [6, 470],
            [7, 590],
            [8, 680],
            [9, 700],
            [10, 980]
        ];

        var DataWidgetDailyChart = [{
            data: dt3,
            label: "Earnings",
            lines: {
                show: false,
                fill: 0,
                lineWidth: 2
            }
        }];
        var DataWidgetDailyChartOptions = {
            legend: {
                show: false
            },
            grid: {
                hoverable: true,
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                clickable: false,
                margin: {
                    top: 10,
                    right: 10,
                    bottom: 6,
                    left: 10
                },
                minBorderMargin: 0,
                labelMargin: 0,
                mouseActiveRadius: 30

            },
            series: {
                stack: false,
                shadowSize: 0,
                splines: {
                    show: true,
                    tension: 0.3,
                    lineWidth: 2,
                    fill: 0
                },
                points: {
                    show: true,
                    lineWidth: 1.5,
                    radius: 2.5,
                    symbol: "circle",
                    fill: true,
                    fillColor: "#ffffff"

                }
            },
            xaxis: {
                show: false,
                color: '#eee',
                ticks: false
            },
            yaxis: {
                show: false,
                tickLength: 0,
                ticks: false
            },
            colors: ["#fff"]
        }

        var DataWidgetMonthlyChart = [{
            data: dt4,
            label: "Earnings",
            bars: {
                show: true,
                fill: .6,
                lineWidth: 0,
                barWidth: 0.3
            }
        }];
        var DataWidgetMonthlyChartOptions = {
            legend: {
                show: false
            },
            grid: {
                hoverable: true,
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                clickable: false,
                margin: {
                    top: 10,
                    right: 10,
                    bottom: 0,
                    left: 10
                },
                minBorderMargin: 0,
                labelMargin: 0,
                mouseActiveRadius: 30

            },
            series: {
                stack: true,
                shadowSize: 0
            },
            xaxis: {
                show: true,
                color: '#eee',
                ticks: false
            },
            yaxis: {
                tickLength: 0,
                ticks: false
            },
            colors: ["#fff"]
        }


        var DataWidgetAlltimeChart = [{
            data: dt5,
            label: "Earnings",
            lines: {
                show: false,
                fill: 0.2,
                lineWidth: 2
            }
        }];
        var DataWidgetAlltimeChartOptions = {
            legend: {
                show: false
            },
            grid: {
                hoverable: true,
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                clickable: false,
                margin: {
                    top: 10,
                    right: 10,
                    bottom: 6,
                    left: 10
                },
                minBorderMargin: 0,
                labelMargin: 0,
                mouseActiveRadius: 30

            },
            series: {
                stack: true,
                shadowSize: 0,
                splines: {
                    show: true,
                    tension: 0.3,
                    lineWidth: 2,
                    fill: 0
                },
                points: {
                    show: true,
                    lineWidth: 1.5,
                    radius: 2.5,
                    symbol: "circle",
                    fill: true,
                    fillColor: "#ffffff"

                }
            },
            xaxis: {
                show: true,
                color: '#eee',
                ticks: false
            },
            yaxis: {
                tickLength: 0,
                ticks: false
            },
            colors: ["#fff"]
        }


        var statschart = $.plot($("#widget-stats-chart"), DataWidgetDailyChart, DataWidgetDailyChartOptions);
        var monthlychart = $.plot($("#widget-monthly-chart"), DataWidgetMonthlyChart, DataWidgetMonthlyChartOptions);
        var alltimechart = $.plot($("#widget-alltime-chart"), DataWidgetAlltimeChart, DataWidgetAlltimeChartOptions);


        //Dashboard Main Chart
        var maindata1 = [
            [1, 400],
            [2, 200],
            [3, 300],
            [4, 200],
            [5, 400],
            [6, 200],
            [7, 300],
            [8, 200],
            [9, 300],
            [10, 200],
            [11, 300],
            [12, 500]
        ];
        var maindata2 = [
            [1, 300],
            [2, 200],
            [3, 200],
            [4, 200],
            [5, 500],
            [6, 200],
            [7, 200],
            [8, 200],
            [9, 200],
            [10, 200],
            [11, 300],
            [12, 550]
        ];
        var maindata3 = [
            [1, 200],
            [2, 200],
            [3, 200],
            [4, 200],
            [5, 500],
            [6, 200],
            [7, 200],
            [8, 200],
            [9, 200],
            [10, 300],
            [11, 400],
            [12, 700]
        ];

        var maindataSet = [{
            data: maindata1,
            label: "Mobile",
            lines: {
                show: true,
                fill: .4,
                lineWidth: 1
            },
            points: {
                show: false,
                lineWidth: 1.5,
                radius: 2,
                symbol: "circle",
                fill: true,
                fillColor: "#ffffff"

            }
        }, {
            data: maindata2,
            label: "Tablet",
            lines: {
                show: true,
                fill: .3,
                lineWidth: 1
            },
            points: {
                show: false,
                lineWidth: 1.5,
                radius: 2,
                symbol: "circle",
                fill: true,
                fillColor: "#ffffff"

            }


        }, {
            data: maindata3,
            label: "Desktop",
            lines: {
                show: true,
                fill: .3,
                lineWidth: 1
            },
            points: {
                show: false,
                lineWidth: 1.5,
                radius: 2,
                symbol: "circle",
                fill: true,
                fillColor: "#ffffff"

            }
        }];
        var maindataOptions = {
            legend: {
                position: "nw",
                noColumns: 3,
                container: $("#main-chart-legend")
            },
            grid: {
                hoverable: true,
                borderWidth: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1
                },
                clickable: true,
                borderColor: "#f5f5f5",
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                minBorderMargin: 1,
                labelMargin: 20,
                mouseActiveRadius: 30,
                backgroundColor: {
                    colors: ["#fff", "#fff"]
                }
            },
            series: {
                stack: true,
                shadowSize: 0,
                curvedLines: {
                    apply: true,
                    active: true,
                    monotonicFit: true
                }
            },
            xaxis: {
                tickSize: .5,
                show: true,
                color: '#f5f5f5'
            },
            yaxis: {
                tickSize: 200,
                show: true,
                color: '#f5f5f5'
            },
            tooltip: {
                show: true,
                cssClass: "MainFlotTip",
                content: "<strong>" + "%s" + ": </strong>" + "%y"
            },
            colors: ["#26a69a", "#8c9eff", "#e65100"]
        }

        var MainChart = $.plot($("#main-chart"), maindataSet, maindataOptions);

    } catch (e) {
        plugin_exists = false;
    }

    // **------------------
    // Recent Users Widgets
    // **------------------

    $(".user-details-toggle").each(function() {
        var $user = $(this).parents(".user-intro").next(".users-details");
        var $ui = $(this).children("i");
        if ($user.is(':visible')) {
            $ui.removeClass("zmdi-plus");
            $ui.addClass("zmdi-minus");
        } else {
            $ui.removeClass("zmdi-minus");
            $ui.addClass("zmdi-plus");
        }
    });

    $(".user-details-toggle").on("click", function() {
        var $user = $(this).parents(".user-intro").next(".users-details");
        var $ui = $(this).children("i");
        if ($user.is(':visible')) {
            $ui.removeClass("zmdi-minus");
            $ui.addClass("zmdi-plus");
            $user.slideUp();
        } else {
            $ui.removeClass("zmdi-plus");
            $ui.addClass("zmdi-minus");
            $user.slideDown();
        }
    });



    // **----------
    // Task Widgets
    // **----------
    $(".task-title").on("click", function() {
        var $task = $(this).parents(".task-intro").next(".task-details");
        if ($task.is(':visible')) {
            $task.slideUp();
        } else {
            $task.slideDown();
        }
    });

    // **------------
    // Widgets Toggle
    // **------------
    $(".widget-toggle").on("click", function(e) {
        e.preventDefault();
        var $welem = $(this).parentsUntil(".widget-action-bar").parentsUntil(".w-action").parents(".widget-header").next(".widget-container");
        if ($welem.is(':visible')) {
            $welem.slideUp();
            $(this).children("a").children("i").removeClass("zmdi-chevron-down");
            $(this).children("a").children("i").addClass("zmdi-chevron-up");
        } else {
            $welem.slideDown();
            $(this).children("a").children("i").removeClass("zmdi-chevron-up");
            $(this).children("a").children("i").addClass("zmdi-chevron-down");
        }
    });

    // **----------------
    // Widgets Fullscreen
    // **----------------
    $(".widget-fullscreen").on("click", function(e) {
        e.preventDefault();
        var $welem = $(this).parentsUntil(".widget-action-bar").parentsUntil(".w-action").parents(".widget-header").parents(".widget-wrap");
        if ($welem.hasClass("w-fullscreen")) {
            $welem.removeClass("w-fullscreen");
        } else {
            $welem.addClass("w-fullscreen");
        }
    });
    // **-----------
    // Widgets Close
    // **-----------
    $(".widget-exit").on("click", function(e) {
        e.preventDefault();
        var $welem = $(this).parentsUntil(".widget-action-bar").parentsUntil(".w-action").parents(".widget-header").parents(".widget-wrap").parent("div");
        $welem.remove();
    });


    // **---------------
    // Widgets Re Loader 
    // **---------------

    var ThisLoad;

    $(".widget-reload").on("click", function(e) {
        e.preventDefault();
        ThisLoad = $(this);
        $(this).parentsUntil(".widget-action-bar").parentsUntil(".w-action").parents(".widget-header").parents(".widget-wrap").mask("Loading");
        setTimeout(UnMask, 1500);
    });


    function UnMask() {
        ThisLoad.parentsUntil(".widget-action-bar").parentsUntil(".w-action").parents(".widget-header").parents(".widget-wrap").unmask();
    }


    /**--Tables
     css/tables.css
     js/jquery.dataTables.js
     js/dataTables.responsive.js
     js/dataTables.tableTools.js
     js/dataTables.bootstrap.js
     */


    if ($.fn.dataTable) {
        $('.data-tbl').DataTable({
            responsive: true,
                        "columnDefs": [ { "targets": [1, 2], "orderable": false }],
            "oLanguage": {
                "sLengthMenu": '<select class="tbl-data-select">' +
                    '<option value="10">10</option>' +
                    '<option value="20">20</option>' +
                    '<option value="30">30</option>' +
                    '<option value="40">40</option>' +
                    '<option value="50">50</option>' +
                    '<option value="-1">All</option>' +
                    '</select>' + '<span class="r-label">Entries</span>'
            },
            "dom": '<"row" <"col-md-6"l><"col-md-6"f>><"row" <"col-md-12"<"td-content"rt>>><"row" <"col-md-6"i><"col-md-6"p>>'
        });


        if ($.fn.select2) {
            $('.tbl-data-select').select2({
                minimumResultsForSearch: -1
            });
        }
    }


    // Sparkline Chart
    if ($.fn.sparkline) {
        var sparkLine = function () {
            $('.sparkline').each(function () {
                var data = $(this).data();
                data.valueSpots = {
                    '0:': data.spotColor
                };

                $(this).sparkline(data.data, data);
                var composite = data.compositedata;

                if (composite) {
                    var stlColor = $(this).attr("data-stack-line-color"),
                        stfColor = $(this).attr("data-stack-fill-color"),
                        sptColor = $(this).attr("data-stack-spot-color"),
                        sptRadius = $(this).attr("data-stack-spot-radius");

                    $(this).sparkline(composite, {
                            composite: true,
                            lineColor: stlColor,
                            fillColor: stfColor,
                            spotColor: sptColor,
                            highlightSpotColor: sptColor,
                            spotRadius: sptRadius,
                            valueSpots: {
                                '0:': sptColor
                            }
                        }

                    );
                };
            });
        };

        var sparkResize;
        $(window).smartresize(function (e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(function () {
                sparkLine(true)
            }, 100);
        });
        sparkLine(false);
    }

$(".spark-pie-chart").each(function(){
    var SparkType = $(this).data("spark-type"),
        sparkData = $(this).data("spark-data").split(','),
        SparkWidth = $(this).data("spark-width"),
        SparkHeight = $(this).data("spark-height"),
        SparkSlice = $(this).data("spark-slicecolors").split(',');
    $(this).sparkline(sparkData, {
        type: SparkType,
        width: SparkWidth,
        height: SparkHeight,
        sliceColors:SparkSlice
    });

})



    /*--jQuery Noty
     * jquery.noty.js
     --*/
    // notification body's can be any html string or just string

    if ($.noty) {
        var n_dom = [];
            n_dom[0] = '<div class="activity-item"> <i class="zmdi zmdi-check-all"></i> <div class="activity"> There are <a href="#">6 new tasks</a> waiting for you. Don\'t forget! <span>About 3 hours ago</span> </div> </div>',
            n_dom[1] = '<div class="activity-item"> <i class="zmdi zmdi-alert-polygon"></i> <div class="activity"> Mail server was updated. See <a href="#">changelog</a> <span>About 2 hours ago</span> </div> </div>',
            n_dom[2] = '<div class="activity-item"> <i class="zmdi zmdi-email"></i> <div class="activity"> Your <a href="#">latest post</a> was liked by <a href="#">Audrey Mall</a> <span>35 minutes ago</span> </div> </div>',
            n_dom[3] = '<div class="activity-item"> <i class="zmdi zmdi-shopping-cart-plus"></i> <div class="activity"> <a href="#">Eugene</a> ordered 2 copies of <a href="#">OEM license</a> <span>14 minutes ago</span> </div> </div>',
            n_dom[4] = '<div class="activity-item"> <i class="zmdi zmdi-truck"></i> <div class="activity"> <a href="#">Amark</a> This is frienly notification example <a href="#">Here</a> <span>14 minutes ago</span> </div> </div>',
            n_dom[5] = '<div class="activity-item"> <i class="zmdi zmdi-favorite-outline"></i> <div class="activity"> <a href="#">Amark</a> This is frienly notification example <a href="#">Here</a> <span>14 minutes ago</span> </div> </div>';

        window.anim = {};
        window.anim.open = 'flipInX';
        window.anim.close = 'flipOutX';
        $('#anim-open').on('change', function (e) {
            window.anim.open = $(this).val();
        });

        $('#anim-close').on('change', function (e) {
            window.anim.close = $(this).val();
        });

        var nGen = function nGen(type, text, layout) {

            var n = noty({
                text: text,
                type: type,
                dismissQueue: true,
                layout: layout,
                closeWith: ['click'],
                theme: 'ThemeNoty',
                maxVisible: 10,
                animation: {
                    open: 'noty_animated bounceInRight',
                    close: 'noty_animated bounceOutRight',
                    easing: 'swing',
                    speed: 500
                }

            });
                    setTimeout(function () {
                        n.close();
                    },5000);

        }


        var nGenAll = function nGenAll() {
            nGen('warning', n_dom[0], 'topRight');
            nGen('error', n_dom[1], 'topRight');
            nGen('information', n_dom[2], 'topRight');
            nGen('success', n_dom[3], 'topRight');
            nGen('alert', n_dom[4], 'topRight');
        }

                setTimeout(function () {
                    nGenAll();
                }, 3000);



        var PreviewGen = function PreviewGen(type, text, layout) {

            var n = noty({
                text: text,
                type: type,
                dismissQueue: true,
                layout: layout,
                closeWith: ['click'],
                theme: 'ThemeNoty',
                maxVisible: 10,
                animation: {
                    open: 'noty_animated bounceInDown',
                    close: 'noty_animated fadeOut',
                    easing: 'swing',
                    speed: 500
                }
            });
            setTimeout(function () {
                n.close();
            }, 5000);

        }


        $('.ex-noty').on('click', function () {
            var Dtype = $(this).data("type"),
                Dlayout = $(this).data("layout");
            PreviewGen(Dtype, n_dom[5], Dlayout);
        });

    }


    /**
     * Boot Box
     * bootbox.js
     */
    var DemoCallBack = (function () {
        var elem,
            hideHandler,
            that = {};

        that.init = function (options) {
            elem = $(options.selector);
        };

        that.show = function (text) {
            clearTimeout(hideHandler);
            elem.find("span").html(text);
            elem.delay(200).fadeIn().delay(3000).fadeOut();
        };

        return that;
    }());

    DemoCallBack.init({
        "selector": ".bb-alert"
    });

    var bb_demos = {};

    $(document).on("click", "a[data-bb]", function (e) {
        e.preventDefault();
        var type = $(this).data("bb");

        if (typeof bb_demos[type] === 'function') {
            bb_demos[type]();
        }
    });

    // Alert

    bb_demos.alert = function () {
        bootbox.alert("Hello world!", function () {
            DemoCallBack.show("Hello world callback");
        });
    };

    // Confirm
    bb_demos.confirm = function () {
        bootbox.confirm("Are you sure?", function (result) {
            DemoCallBack.show("Confirm result: " + result);
        });
    };

    // Prompt
    bb_demos.prompt = function () {
        bootbox.prompt({
            title: "What is your real name?",
            value: "Kamrujaman Shohel",
            callback: function (result) {
                if (result === null) {
                    DemoCallBack.show("Prompt dismissed");
                } else {
                    DemoCallBack.show("Hi <b>" + result + "</b>");
                }
            }
        });
    }

    // Dialog
    bb_demos.dialog = function () {
        bootbox.dialog({
            message: "I am a custom dialog",
            title: "Custom title",
            buttons: {
                success: {
                    label: "Success!",
                    className: "btn-success",
                    callback: function () {
                        DemoCallBack.show("great success");
                    }
                },
                danger: {
                    label: "Danger!",
                    className: "btn-danger",
                    callback: function () {
                        DemoCallBack.show("uh oh, look out!");
                    }
                },
                main: {
                    label: "Click ME!",
                    className: "btn-primary",
                    callback: function () {
                        DemoCallBack.show("Primary button");
                    }
                }
            }
        });
    }
    // Custom Html Contents
    bb_demos.custom_html = function () {
        bootbox.dialog({
            title: "That html",
            message: '<img src="images/avatar/jaman_01.jpg" alt="image"/><br/> You can also use <b>html</b>'
        });
    }

    // Custom Html Forms
    bb_demos.html_forms = function () {
        bootbox.dialog({
            title: "This is a form in a modal.",
            message: '<div class="row">  ' +
                '<div class="col-md-12"> ' +
                '<form class="form-horizontal"> ' +
                '<div class="form-group"> ' +
                '<label class="col-md-4 control-label" for="name">Name</label> ' +
                '<div class="col-md-4"> ' +
                '<input id="name" name="name" type="text" placeholder="Your name" class="form-control input-md"> ' +
                '<span class="help-block">Here goes your name</span> </div> ' +
                '</div> ' +
                '<div class="form-group"> ' +
                '<label class="col-md-4 control-label" for="awesomeness">How awesome is this?</label> ' +
                '<div class="col-md-4"> <div class="radio"> <label for="awesomeness-0"> ' +
                '<input type="radio" name="awesomeness" id="awesomeness-0" value="Really awesome" checked="checked"> ' +
                'Really awesome </label> ' +
                '</div><div class="radio"> <label for="awesomeness-1"> ' +
                '<input type="radio" name="awesomeness" id="awesomeness-1" value="Super awesome"> Super awesome </label> ' +
                '</div> ' +
                '</div> </div>' +
                '</form> </div>  </div>',
            buttons: {
                success: {
                    label: "Save",
                    className: "btn-success",
                    callback: function () {
                        var name = $('#name').val();
                        var answer = $("input[name='awesomeness']:checked").val()
                        DemoCallBack.show("Hello " + name + ". You've chosen <b>" + answer + "</b>");
                    }
                }
            }
        });
    }


    /*
     * Sweet Alert
     * sweetalert.css
     * sweetalert.js
     */

    $('.simple-alert').on('click', function (e) {
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            confirmButtonColor: "#DD6B55"
        });
    });

    $('.success-alert').on('click', function (e) {
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "success",
            confirmButtonColor: "#4caf50"
        });
    });

    $('.warning-btn-ok').on('click', function (e) {
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function () {
            swal({
                title: "Your imaginary file has been deleted.",
                type: "success",
                confirmButtonColor: "#4caf50"
            });
        });
    });
    $('.warning-btn-cancel').on('click', function (e) {
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    });

    $('.warning-custom-icon').on('click', function (e) {
        e.preventDefault();
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "images/avatar/jaman-01.jpg"
        });
    });
    $('.warning-custom-html').on('click', function (e) {
        e.preventDefault();
        swal({
            title: "HTML <small>Title</small>!",
            text: 'A custom <span style="color:#F8BB86">html<span> message.',
            html: true
        });
    });

    $('.warning-auto-close').on('click', function (e) {
        e.preventDefault();
        swal({
            title: "Auto close alert!",
            text: "I will close in 3 seconds.",
            timer: 3000,
            showConfirmButton: false
        });
    });

    $('.warning-prompt').on('click', function (e) {
        e.preventDefault();
        swal({
            title: "An input!",
            text: "Write something interesting:",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something"
        }, function (inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to write something!");
                return false
            }
            swal("Nice!", "You wrote: " + inputValue, "success");
        });
    });



    /*
     * jQuery No UI slider
     * jquery.nouislider.css
     * jquery.nouislider.js
     */
    if ($.fn.noUiSlider) {

        $("#slider-range").noUiSlider({
            start: [50, 200],
            connect: true,
            format: wNumb({
                mark: '',
                decimals: 0,
                prefix: '$'
            }),
            range: {
                'min': 0,
                '20%': 100,
                '40%': 200,
                '60%': 300,
                '80%': 400,
                'max': 500
            }

        });
        $('#slider-range').Link('lower').to($('#slider-snap-value-lower'));

        $('#slider-range').Link('upper').to($('#slider-snap-value-upper'));

        $("#slider-range").noUiSlider_pips({
            mode: 'range',
            density: 3,
            format: wNumb({
                decimals: 0,
                prefix: '$'
            })
        });

        var range_all_sliders = {
            'min': [0],
            '10%': [500, 500],
            '50%': [4000, 1000],
            'max': [10000]
        };



        $("#pips-range").noUiSlider({
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
        $("#pips-range-01").noUiSlider({
            start: [4000],
            range: {
                'min': [2000],
                'max': [10000]
            }
        });
        $("#pips-range-02").noUiSlider({
            start: [0, 500],
            connect: true,
            range: {
                'min': 0,
                'max': 1500
            }
        });
        $("#pips-range-vertical").noUiSlider({
            range: range_all_sliders,
            start: 0,
            orientation: 'vertical'
        });
        $("#pips-range-vertical-01").noUiSlider({
            start: [300, 1200],
            connect: true,
            range: {
                'min': 0,
                '20%': 300,
                '80%': 1200,
                'max': 1500
            },
            orientation: 'vertical'
        });

        $("#pips-range-vertical-02").noUiSlider({
            start: [400, 1000],
            connect: true,
            range: {
                'min': 0,
                'max': 1500
            },
            orientation: 'vertical'
        });

        var filter500 = function filter500(value, type) {
            return value % 1000 ? 2 : 1;
        }
        $(".pips-range").noUiSlider_pips({
            mode: 'range',
            density: 3,
            filter: filter500,
            format: wNumb({
                decimals: 2,
                prefix: '$'
            })
        });

    }

    try {

        $(".switch-mini").switchButton({
            show_labels: false,			// Should we show the on and off labels?
            on_label: 'C',
            off_label: 'F',
//      on_callback: wc, //callback function that will be executed after going to on state
//      off_callback: wf,
            width: 25,                 // Width of the button in pixels
            height: 15,                // Height of the button in pixels
            button_width: 15          // Width of the sliding part in pixels
        });

        $(".switch-sm").switchButton({
            show_labels: false,			// Should we show the on and off labels?
            on_label: 'C',
            off_label: 'F',
//      on_callback: wc, //callback function that will be executed after going to on state
//      off_callback: wf,
            width: 30,                 // Width of the button in pixels
            height: 20,                // Height of the button in pixels
            button_width: 20          // Width of the sliding part in pixels
        });


        $(".switch-large").switchButton({
            show_labels: false,			// Should we show the on and off labels?
            on_label: 'C',
            off_label: 'F',
//      on_callback: wc, //callback function that will be executed after going to on state
//      off_callback: wf,
            width: 50,                 // Width of the button in pixels
            height: 30,                // Height of the button in pixels
            button_width: 30          // Width of the sliding part in pixels
        });

        $(".switch-xs").switchButton({
            show_labels: false,			// Should we show the on and off labels?
            on_label: 'C',
            off_label: 'F',
//      on_callback: wc, //callback function that will be executed after going to on state
//      off_callback: wf,
            width: 40,                 // Width of the button in pixels
            height: 25,                // Height of the button in pixels
            button_width: 25          // Width of the sliding part in pixels
        });


    } catch (e) {

    }





    /*--jQuery Noty
     * switchery.css
     * switchery.js
     --*/

    try {
        var sw_large = Array.prototype.slice.call(document.querySelectorAll('.switchery-large'));

        sw_large.forEach(function (html) {
            var sw_largeGen = new Switchery(html, {
                size: 'large',
                color: '#17bab8',
                jackColor: '#fff',
                secondaryColor: '#eee',
                jackSecondaryColor: '#fff'
            });
        });

        var sw_m = Array.prototype.slice.call(document.querySelectorAll('.switchery-m'));
        sw_m.forEach(function (html) {
            var switchery = new Switchery(html, {
                color: '#17bab8',
                jackColor: '#fff',
                secondaryColor: '#eee',
                jackSecondaryColor: '#fff'
            });
        });

        var sw_small = Array.prototype.slice.call(document.querySelectorAll('.switchery-small'));
        sw_small.forEach(function (html) {
            var switchery = new Switchery(html, {
                size: 'small',
                color: '#17bab8',
                jackColor: '#fff',
                secondaryColor: '#eee',
                jackSecondaryColor: '#fff'
            });
        });

        var sw_c = Array.prototype.slice.call(document.querySelectorAll('.switchery-c'));
        sw_c.forEach(function (html) {
            var switchery = new Switchery(html, {
                color: '#17bab8',
                jackColor: '#fff',
                secondaryColor: '#eee',
                jackSecondaryColor: '#fff'
            });
        });

        var sw_c = Array.prototype.slice.call(document.querySelectorAll('.switchery-mini'));
        sw_c.forEach(function (html) {
            var switchery = new Switchery(html, {
                size: 'small',
                color: '#17bab8',
                jackColor: '#fff',
                secondaryColor: '#eee',
                jackSecondaryColor: '#fff'
            });
        });

    } catch (e) {

    }



    $('.item-label').each(function () {
        var labelColor = $(this).data('color');
        if (labelColor) {
            $(this).children('a').children('.label-color').css({
                'background-color': labelColor
            });
        }

    });




    if ($.fn.fullCalendar) {
        $('#event-calendar').fullCalendar({
            header: {
                left: 'Next',
                center: 'title',
                right: ''
            },
            defaultDate: '2015-08-12',
            selectable: true,
            selectHelper: true,
            select: function (start, end) {
                var calMbox = bootbox.dialog({
                    title: "Event Information",
                    message: '<div class="row">  ' +
                        '<div class="col-md-12"> ' +
                        '<form class="form-horizontal"> ' +
                        '<div class="form-group"> ' +
                        '<label class="col-md-4 control-label" for="name">Event Title</label> ' +
                        '<div class="col-md-6"> ' +
                        '<input id="event_title" name="evtitle" type="text" value="Event Title" placeholder="Event Title" class="form-control input-md"> ' +
                        '</div> ' +
                        '</div> ' +
                        '<div class="form-group"> ' +
                        '<label class="col-md-4 control-label" for="name">Description</label> ' +
                        '<div class="col-md-6"> ' +
                        '<input id="event_description" name="evdesc" value="Event Description" type="text" placeholder="Description" class="form-control input-md"> ' +
                        '</div> ' +
                        '</div> ' +
                        '<div class="form-group"> ' +
                        '<label class="col-md-4 control-label" for="name">Select Color</label> ' +
                        '<div class="col-md-6"> ' +
                        '<div class="input-group event-color-picker"><input id="event_color" type="text" value="#0097a7" class="form-control"/><span class="input-group-addon"><i></i></span></div>' +
                        '</div> ' +
                        '</div> ' +
                        '</form> </div>  </div>',
                    buttons: {
                        update: {
                            label: "Save",
                            className: "btn-success",
                            callback: function () {
                                var evTitle = $('#event_title').val();
                                var evDesc = $('#event_description').val();
                                var evColor = $('#event_color').val();
                                var title = evTitle;
                                var eventData;
                                if (title) {
                                    eventData = {
                                        title: evTitle,
                                        start: start,
                                        end: end,
                                        description: evDesc,
                                        color: evColor
                                    };
                                    $('#event-calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
                                }

                            }
                        },
                        cancel: {
                            label: "Cancel",
                            className: "btn-danger",
                            callback: function () {

                            }
                        }
                    }


                });

                calMbox.find('.event-color-picker').colorpicker();


                $('#event-calendar').fullCalendar('unselect');

            },
            eventRender: function (event, element) {
                element.popover({
                    title: event.title,
                    html: true,
                    placement: 'top',
                    content: '<div>' + event.description + '</div>' +
                        '<div>Start: ' + moment(event.start).format('MM/DD/YYYY hh:mm') + '</div>' +
                        '<div>End: ' + moment(event.end).format('MM/DD/YYYY hh:mm') + '</div>'
                });

                element.find('div.fc-title').html(element.find('div.fc-title').text());
                $('body').on('click', function (e) {
                    if (!element.is(e.target) && element.has(e.target).length === 0 && $('.popover').has(e.target).length === 0)
                        element.popover('hide');
                });
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    id: 1,
                    title: 'Long Event',
                    start: '2015-08-01',
                    end: '2015-08-05',
                    description: 'Four days business conference',
                    color: '#43a047'
                },
                {
                    id: 2,
                    title: 'Meeting',
                    start: '2015-08-07',
                    end: '2015-08-07',
                    description: 'Meeting with Nisha Agarwal',
                    color: '#0097a7'
                },
                {
                    id: 3,
                    title: 'Repeating Event',
                    start: '2015-08-09',
                    end: '2015-08-09',
                    description: 'Meeting with Nisha Agarwal',
                    color: '#f9a825'
                },
                {
                    id: 4,
                    title: 'Repeating Event',
                    start: '2015-08-16',
                    end: '2015-08-18',
                    description: 'Meeting with Nisha Agarwal',
                    color: '#009688'
                },
                {
                    id: 5,
                    title: 'Conference',
                    start: '2015-08-11',
                    end: '2015-08-13',
                    description: 'Attend for a software conference',
                    color: '#455a64'
                },
                {
                    id: 6,
                    title: 'Meeting',
                    start: '2015-08-12T10:30:00',
                    end: '2015-08-12T12:30:00',
                    description: 'Meeting with CEO',
                    color: '#ab47bc'
                },
                {
                    id: 7,
                    title: 'Lunch',
                    start: '2015-08-12',
                    end: '2015-08-12',
                    description: 'Lunch with high official',
                    color: '#ef6c00'
                },
                {
                    id: 8,
                    title: 'Meeting',
                    start: '2015-08-12T14:30:00',
                    end: '2015-08-12T12:30:00',
                    description: 'Meeting with VC',
                    color: '#f9a825'
                },
                {
                    id: 9,
                    title: 'Happy Hour',
                    start: '2015-08-12T17:30:00',
                    end: '2015-08-12T12:30:00',
                    description: 'Happy hour with team members',
                    color: '#455a64'
                },
                {
                    id: 10,
                    title: 'Dinner',
                    start: '2015-08-12T20:00:00',
                    end: '2015-08-12T12:30:00',
                    description: 'Dinner with VC',
                    color: '#455a64'
                },
                {
                    id: 11,
                    title: 'Birthday Party',
                    start: '2015-08-13T07:00:00',
                    end: '2015-08-12T12:30:00',
                    description: 'My daughter birthday party',
                    color: '#ef6c00'
                }
            ]

        });

        $('.CalPrev').on('click', function () {
            $('#event-calendar').fullCalendar('prev');
        });
        $('.CalNext').on('click', function () {
            $('#event-calendar').fullCalendar('next');

        });
        $('.CalToday').click(function () {
            $('#event-calendar').fullCalendar('today');
        });

        $('.CalMonthView').on('click', function () {
            $('#event-calendar').fullCalendar('changeView', 'month');
        });
        $('.CalAgendaWeekView').on('click', function () {
            $('#event-calendar').fullCalendar('changeView', 'agendaWeek');

        });
        $('.CalAgendaDayView').click(function () {
            $('#event-calendar').fullCalendar('changeView', 'agendaDay');

        });

        $('.cal-goDate').on('click', function () {
            var GoDate = $('.cal-date-picker').val();
            if (GoDate === "") {
                swal({
                    title: "Oops! Please select a date",
                    text: "",
                    type: "warning",
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "ok"
                }, function (isConfirm) {
                    if (isConfirm) {
                        $('.cal-date-picker').focus();
                    }
                });


            } else {
                $('#event-calendar').fullCalendar('gotoDate', GoDate);
            }
        });

    }

    if($.simpleWeather){
        var html = html;
        $.simpleWeather({
            woeid: '2357536', //2357536
            location:'',
            unit: 'f',
            success: function(weather) {
                html =  '<div class="weather-widget-wall w_bg_cyan">';
                html += '<div class="weather-city">'+weather.city+','+weather.region+'</div>';
                html += '<div class="weather-status">'+weather.currently+'</div>';
                html += '<div class="weather-temperature">';
                html += '<div class="weather-icon"><i class="icon-'+weather.code+'"></i></div>';
                html += '<div class="temperature">';
                html += '<div class="date-time"><span class="w-date">'+weather.forecast[0].date+'</span><span class="w-day">'+weather.forecast[0].day+'</span></div>';
                html += '<div class="w-meter"><span class="temperature-f">'+weather.temp+'&deg;'+weather.units.temp+'</span><span class="temperature-c">'+weather.alt.temp+'&deg;C</span></div>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="forecast">';
                html += '<div class="sun-r-s"><span><label>Sunrise:</label> '+weather.sunrise+' </span><span><label>Sunset:</label> '+weather.sunset+' </span></div>';
                html += '<ul>';
                for(var i=0;i<weather.forecast.length;i++) {
                    html += '<li><span class="w-day">'+weather.forecast[i].day+'</span><span class="day-w-icon">' +'<i class="icon-'+weather.forecast[i].code+'"></i>'+'</span><span class="day-temperature">'+weather.forecast[i].high+'</span></li>';
                }
                html += '</ul>';
                html += '</div>';
                $("#weather").html(html);
            },
            error: function(error) {
                $("#weather").html('<p>'+error+'</p>');
            }
        });
    }
});