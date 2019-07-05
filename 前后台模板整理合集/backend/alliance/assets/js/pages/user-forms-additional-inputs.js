'use strict';
//  Author: ThemeREX.com
//
//  .html scripts
//

(function($) {

    $(document).ready(function() {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();


        // Init Select2 - Basic Single
        $(".select2-single").select2();

        // Init Select2 - Basic Multiple
        $(".select2-multiple").select2({
            placeholder: "Select model",
            allowClear: true
        });

        // Init Select2 - Contextuals (via html classes)
        $(".select2-primary").select2(); // select2 contextual - primary
        $(".select2-success").select2(); // select2 contextual - success
        $(".select2-info").select2();    // select2 contextual - info
        $(".select2-warning").select2(); // select2 contextual - warning

        // Init Bootstrap Maxlength Plugin
        $('input[maxlength]').maxlength({
            threshold: 15,
            placement: "right"
        });

        // Dual List Plugin Init
        var demo1 = $('.demo1').bootstrapDualListbox({
            nonSelectedListLabel: 'Options',
            selectedListLabel: 'Selected',
            preserveSelectionOnMove: 'moved',
            moveOnSelect: true,
            nonSelectedFilter: 'tion ([1-3]|[1][0-5])'
        });

        $("#demoform").submit(function() {
            alert("Options Selected: " + $('.demo1').val());
            return false;
        });

        // Init Twitter Typeahead.js
        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substrRegex;

                // an array that will be populated with substring matches
                matches = [];

                // regex used to determine if a string contains the substring `q`
                substrRegex = new RegExp(q, 'i');

                // iterate through the pool of strings and for any string that
                // contains the substring `q`, add it to the `matches` array
                $.each(strs, function(i, str) {
                    if (substrRegex.test(str)) {
                        // the typeahead jQuery plugin expects suggestions to a
                        // JavaScript object, refer to typeahead docs for more info
                        matches.push({
                            value: str
                        });
                    }
                });

                cb(matches);
            };
        };

        var states = ['LG', 'Nokia', 'Samsung', 'Actel', 'Google',
            'SonyEricson', 'iPhone'];

        // Init Typeahead Plugin with state aray
        $('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'states',
            displayKey: 'value',
            source: substringMatcher(states)
        });

        // DateRange plugin options
        var rangeOptions = {
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
        }

        // Init DateRange plugin
        $('#daterangepicker1').daterangepicker();

        // Init DateRange plugin
        $('#daterangepicker2').daterangepicker(
            rangeOptions,
            function(start, end) {
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }
        );

        // Init DateRange plugin
        $('#inline-daterange').daterangepicker(
            rangeOptions,
            function(start, end) {
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }
        );

        // Init DateTimepicker - fields
        $('#datetimepicker1').datetimepicker();
        $('#datetimepicker2').datetimepicker();

        // Init DateTimepicker - inline + range detection
        $('#datetimepicker3').datetimepicker({
            defaultDate: "10/01/2015",
            inline: true
        });

        // Init DateTimepicker - fields + Date disabled (only time picker)
        $('#datetimepicker5').datetimepicker({
            defaultDate: "10/01/2015",
            pickDate: false
        });
        // Init DateTimepicker - fields + Date disabled (only time picker)
        $('#datetimepicker6').datetimepicker({
            defaultDate: "10/01/2015",
            pickDate: false
        });
        // Init DateTimepicker - inline + Date disabled (only time picker)
        $('#datetimepicker7').datetimepicker({
            defaultDate: "10/01/2015",
            pickDate: false,
            inline: true
        });

        // Init Colorpicker plugin
        $('#demo_apidemo').colorpicker({
            color: bgPrimary
        });
        $('.demo-auto').colorpicker();

        // Init jQuery Tags Manager
        $(".tm-input").tagsManager({
            tagsContainer: '.tags',
            prefilled: ["Safari", "Apple", "Apple Macintosh", "browser"],
            tagClass: 'tm-tag-info'
        });

        // Init Boostrap Multiselects
        $('#multiselect1').multiselect();
        $('#multiselect2').multiselect({
            includeSelectAllOption: true
        });
        $('#multiselect3').multiselect();
        $('#multiselect4').multiselect({
            enableFiltering: true,
        });
        $('#multiselect5').multiselect({
            buttonClass: 'multiselect dropdown-toggle btn btn-default btn-primary'
        });
        $('#multiselect6').multiselect({
            buttonClass: 'multiselect dropdown-toggle btn btn-default btn-info'
        });
        $('#multiselect7').multiselect({
            buttonClass: 'multiselect dropdown-toggle btn btn-default btn-success'
        });
        $('#multiselect8').multiselect({
            buttonClass: 'multiselect dropdown-toggle btn btn-default btn-warning'
        });

        // Init jQuery spinner init - default
        $("#spinner1").spinner();

        // Init jQuery spinner init - currency
        $("#spinner2").spinner({
            min: 5,
            max: 2500,
            step: 25,
            start: 1000
            //numberFormat: "C"
        });

        // Init jQuery spinner init - decimal
        $("#spinner3").spinner({
            step: 0.01,
            numberFormat: "n"
        });

        // jQuery Time Spinner settings
        $.widget("ui.timespinner", $.ui.spinner, {
            options: {
                // seconds
                step: 60 * 1000,
                // hours
                page: 60
            },
            _parse: function(value) {
                if (typeof value === "string") {
                    // already a timestamp
                    if (Number(value) == value) {
                        return Number(value);
                    }
                    return +Globalize.parseDate(value);
                }
                return value;
            },

            _format: function(value) {
                return Globalize.format(new Date(value), "t");
            }
        });

        // Init jQuery Time Spinner
        $("#spinner4").timespinner();

        // Init jQuery Masked inputs
        $('.date').mask('10/01/2015');
        $('.time').mask('00:00:00');
        $('.date_time').mask('10/01/2015 00:00:00');
        $('.zip').mask('123456');
        $('.phone').mask('(000) 123-4567');
        $('.phoneext').mask("(000) 123-4567 890123");
        $(".money").mask("999,888,777.666");
        $(".product").mask("KD8.(KD.ND6.345");
        $(".tin").mask("123-45-678");
        $(".ssn").mask("123-45-6789");
        $(".ip").mask("192.168.100.001");
        $(".eyescript").mask("~9.99 ~9.99 999");
        $(".custom").mask("1.23.456.7890");
    });

})(jQuery);
