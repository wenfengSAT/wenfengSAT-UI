$(function () {
    /* Begin jQuery Bootstrap Slider */
    $('.default-slider, .range-slider').slider();
    $(".vertical-slider").slider({
        reversed : true
    });
    /* End jQuery Bootstrap Slider */

    /* Begin jQuery Selectize */
    // Tagging
    $('#input-tags').selectize({
        delimiter: ',',
        persist: false,
        create: function(input) {
            return {
                value: input,
                text: input
            }
        }
    });

    //Tagging - Remove Button
    $('#input-tags2').selectize({
        plugins: ['remove_button'],
        delimiter: ',',
        persist: false,
        create: function(input) {
            return {
                value: input,
                text: input
            }
        }
    });

    // Email Contact
    var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
        '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

    var formatName = function(item) {
        return $.trim((item.first_name || '') + ' ' + (item.last_name || ''));
    };

    $('#select-to').selectize({
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

    // Single Item Select
    $('#select-beast').selectize({
        create: true,
        sortField: {
            field: 'text',
            direction: 'asc'
        },
        dropdownParent: 'body'
    });

    // Remote Source With Template
    $('#select-movie').selectize({
        theme: 'movies',
        valueField: 'title',
        labelField: 'title',
        searchField: 'title',
        options: [],
        create: false,
        render: {
            option: function(item, escape) {
                var actors = [];
                for (var i = 0, n = item.abridged_cast.length; i < n; i++) {
                    actors.push('<span>' + escape(item.abridged_cast[i].name) + '</span>');
                }

                return '<div>' +
                    '<img src="' + escape(item.posters.thumbnail) + '" alt="">' +
                    '<span class="title">' +
                    '<span class="name">' + escape(item.title) + '</span>' +
                    '</span>' +
                    '<span class="description">' + escape(item.synopsis || 'No synopsis available at this time.') + '</span>' +
                    '<span class="actors">' + (actors.length ? 'Starring ' + actors.join(', ') : 'Actors unavailable') + '</span>' +
                    '</div>';
            }
        },
        load: function(query, callback) {
            if (!query.length) return callback();
            $.ajax({
                url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json',
                type: 'GET',
                dataType: 'jsonp',
                data: {
                    q: query,
                    page_limit: 10,
                    apikey: '3qqmdwbuswut94jv4eua3j85'
                },
                error: function() {
                    callback();
                },
                success: function(res) {
                    console.log(res.movies);
                    callback(res.movies);
                }
            });
        }
    });

    // Locked
    $('#select-locked').selectize({create: true});
    $('#select-locked')[0].selectize.lock();
    /* End jQuery Selectize */

    /* Begin jQuery DateTimePicker */
    $('#datetimepicker_default').datetimepicker({
        formatTime:'H:i',
        formatDate:'d.m.Y',
        defaultDate:'8.12.1988',
        defaultTime:'10:00'
    });
    $('#datetimepicker_mask').datetimepicker({
        mask:'9999/19/39 29:59'
    });
    $('#datetimepicker_timepicker').datetimepicker({
        datepicker:false,
        format:'H:i',
        step:5
    });
    $('#datetimepicker_datepicker').datetimepicker({
        timepicker:false,
        format:'d/m/Y',
        formatDate:'Y/m/d'
    });
    $('#datetimepicker_inline').datetimepicker({
        inline:true
    });
    /* End jQuery DateTimePicker */

    /* Begin jQuery ClockPicker */
    $('.clockpicker').clockpicker({
        'donetext': 'Done'
    });
    var input = $('#single-input').clockpicker({
        placement: 'bottom',
        align: 'left',
        autoclose: true,
        'default': 'now'
    });

    // Manually toggle to the minutes view
    $('#check-minutes').click(function(e){
        // Have to stop propagation here
        e.stopPropagation();
        input.clockpicker('show')
            .clockpicker('toggleView', 'minutes');
    });
    /* End jQuery ClockPicker */

    /* Begin jQuery TimePicker */
    $('.timepicker-default').timepicker();
    $('.timepicker-disable').timepicker({
        'disableTimeRanges': [
            ['1am', '2am'],
            ['3am', '4:01am']
        ]
    });
    $('.timepicker-format1').timepicker({ 'timeFormat': 'H:i:s' });
    $('.timepicker-format2').timepicker({ 'timeFormat': 'h:i A' });
    $('.timepicker-settime').timepicker();
    $('.timepicker-settime-btn').on('click', function (){
        $('.timepicker-settime').timepicker('setTime', new Date());
    });
    /* Begin jQuery TimePicker */

    /* Begin jQuery DateRangePicker */
    $('#daterangepicker_default').daterangepicker();
    $('#daterangepicker_single').daterangepicker({
        singleDatePicker: true
    });
    $('#daterangepicker_advance').daterangepicker(
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
            $('#daterangepicker_advance span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
    );
    $('#daterangepicker_advance span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    /* End jQuery DateRangePicker */

    /* Begin jQuery Mini Colors */
    $(document).ready( function() {

        $('.demo').each( function() {
            $(this).minicolors({
                control: $(this).attr('data-control') || 'hue',
                defaultValue: $(this).attr('data-defaultValue') || '',
                inline: $(this).attr('data-inline') === 'true',
                letterCase: $(this).attr('data-letterCase') || 'lowercase',
                opacity: $(this).attr('data-opacity'),
                position: $(this).attr('data-position') || 'bottom left',
                change: function(hex, opacity) {
                    if( !hex ) return;
                    if( opacity ) hex += ', ' + opacity;
                    try {
                        console.log(hex);
                    } catch(e) {}
                },
                theme: 'bootstrap'
            });

        });

    });
    /* End jQuery Mini Colors */

    /* Begin jQuery Dropzone */
    Dropzone.options.myDropzone = {
        init: function() {
            this.on("addedfile", function(file) {

                // Create the remove button
                var removeButton = Dropzone.createElement("<button class='btn'>Remove file</button>");


                // Capture the Dropzone instance as closure.
                var _this = this;

                // Listen to the click event
                removeButton.addEventListener("click", function(e) {
                    // Make sure the button click doesn't submit the form:
                    e.preventDefault();
                    e.stopPropagation();

                    // Remove the file preview.
                    _this.removeFile(file);
                    // If you want to the delete the file on the server as well,
                    // you can do the AJAX request here.
                });

                // Add the button to the file preview element.
                file.previewElement.appendChild(removeButton);
            });
        }
    };
    /* End jQuery Dropzone */

});

