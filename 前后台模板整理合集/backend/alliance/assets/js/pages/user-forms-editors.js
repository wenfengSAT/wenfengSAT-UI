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


        // Init Summernote Plugin
        $('.summernote').summernote({
            height: 255, //set editable area's height
            focus: false, //set focus editable area after Initialize summernote
            oninit: function() {},
            onChange: function(contents, $editable) {},
        });

        // Init Inline Summernote Plugin
        $('.summernote-edit').summernote({
            airMode: true,
            focus: false //set focus editable area after Initialize summernote
        });

        // Turn off automatic editor initilization.
        // Used to prevent conflictions with multiple text
        // editors being displayed on the same page.
        CKEDITOR.disableAutoInline = true;

        // Init Ckeditor
        CKEDITOR.replace('ckeditor1', {
            height: 210,
            on: {
                instanceReady: function(evt) {
                    $('.cke').addClass('admin-skin cke-hide-bottom');
                }
            },
        });

        // Init Inline Ckeditors
        CKEDITOR.inline('ckeditor-inline1');
        CKEDITOR.inline('ckeditor-inline2');

        // Init MarkDown Editor
        $("#markdown-editor").markdown({
            savable: false,
            onChange: function(e) {
                var content = e.parseContent(),
                    content_length = (content.match(/\n/g) || []).length + content.length
                if (content == '') {
                    $('#md-footer').hide()
                } else {
                    $('#md-footer').show().html(content)
                }
            }
        });

        // Init X-editable Plugin
        function XEdit() {
            //enable / disable xedit
            $('#enable').click(function() {
                $(this).toggleClass('active');
                $('#user .editable').editable('toggleDisabled');
            });

            //editables
            $('#username').editable({
                type: 'text',
                pk: 1,
                name: 'username',
                title: 'Enter username'
            });

            $('#firstname').editable({
                validate: function(value) {
                    if ($.trim(value) == '') return 'This field is required';
                }
            });

            $('#sex').editable({
                prepend: "not selected",
                source: [{
                    value: 1,
                    text: 'Male'
                }, {
                    value: 2,
                    text: 'Female'
                }],
                display: function(value, sourceData) {
                    var colors = {
                            "": "gray",
                            1: "green",
                            2: "blue"
                        },
                        elem = $.grep(sourceData, function(o) {
                            return o.value == value;
                        });

                    if (elem.length) {
                        $(this).text(elem[0].text).css("color", colors[value]);
                    } else {
                        $(this).empty();
                    }
                }
            });

            $('#status').editable();

            $('#group').editable({
                showbuttons: false
            });

            $('#vacation').editable({
                datepicker: {
                    todayBtn: 'linked'
                }
            });

            $('#dob').editable();

            $('#event').editable({
                placement: 'right',
                combodate: {
                    firstItem: 'name'
                }
            });

            $('#meeting_start').editable({
                format: 'yyyy-mm-dd hh:ii',
                viewformat: 'dd/mm/yyyy hh:ii',
                validate: function(v) {
                    if (v && v.getDate() == 10) return 'Day cant be 10!';
                },
                datetimepicker: {
                    todayBtn: 'linked',
                    weekStart: 1
                }
            });

            $('#comments').editable({
                showbuttons: 'bottom'
            });

            $('#note').editable();
            $('#pencil').click(function(e) {
                e.stopPropagation();
                e.preventDefault();
                $('#note').editable('toggle');
            });

            $('#devices').editable({
                pk: 1,
                limit: 3,
                source: [{
                    value: 1,
                    text: 'samsung'
                }, {
                    value: 2,
                    text: 'iphone'
                }, {
                    value: 3,
                    text: 'ipad'
                }, {
                    value: 4,
                    text: 'nokia'
                }, {
                    value: 5,
                    text: 'motorola'
                }]
            });

            $('#address').editable({
                url: '/post',
                value: {
                    city: "New York",
                    street: "Straight blvd.",
                    building: "25"
                },
                validate: function(value) {
                    if (value.city == '') return 'city is required!';
                },
                display: function(value) {
                    if (!value) {
                        $(this).empty();
                        return;
                    }
                    var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + $('<div>').text(value.building).html();
                    $(this).html(html);
                }
            });

            $('#user .editable').on('hidden', function(e, reason) {
                if (reason === 'save' || reason === 'nochange') {
                    var $next = $(this).closest('tr').next().find('.editable');
                    if ($('#autoopen').is(':checked')) {
                        setTimeout(function() {
                            $next.editable('show');
                        }, 300);
                    } else {
                        $next.focus();
                    }
                }
            });

        };
        XEdit();
    });

})(jQuery);
