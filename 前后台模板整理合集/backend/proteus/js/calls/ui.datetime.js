/*  ==========================================================================
    Table of Content for Date and Time pickers:

    === Function ===
	- runDaterangepicker
    - runDatetimepicker
    - runClockface
    - runDatepicker
    - runClock

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runDaterangepicker
    ========================================================================== */
function runDaterangepicker(picker, type){

    switch(type){

        case 'basic':
            $(picker).daterangepicker(null, function(start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });
        break;

        case 'single':
            $(picker).daterangepicker({ singleDatePicker: true }, function(start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });
        break;

        case 'increment':
            $(picker).daterangepicker({
                timePicker: true,
                timePickerIncrement: 30,
                format: 'MM/DD/YYYY h:mm A'
            }, function(start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });
        break;

        case 'predefined':
            $(picker).daterangepicker(
                {
                    ranges: {
                        'Today': [moment(), moment()],
                        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    },
                    startDate: moment().subtract( 29, 'days'),
                    endDate: moment()
                },
                function(start, end) {
                    $(picker+' span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                }
            );
        break;

        case 'dropdown':
            $(picker).daterangepicker({
                singleDatePicker: true,
                showDropdowns: true
            }, function(start, end, label) {
                var years = moment().diff(start, 'years');
                $.jGrowl("You are " + years + " years old.");
            });
        break;
    }

}


/*
    runDatetimepicker
    ========================================================================== */
function runDatetimepicker(picker, type){

    switch(type){

        case 'basic':
            $(picker).datetimepicker({
                language: 'pt-BR'
            });
        break;

        case 'us_format':
            $(picker).datetimepicker({
                language: 'en',
                pick12HourFormat: true
            });
        break;

        case 'time':
            $(picker).datetimepicker({
                pickDate: false
            });
        break;
    }

}

/*
    runClockface
    ========================================================================== */
function runClockface(picker, type){

    switch(type){

        case 'basic':
            $(picker).clockface();
        break;

        case 'component':
            $(picker).clockface({
                format: 'HH:mm',
                trigger: 'manual'
            });

            $(picker+'_btn').click(function(e){
                e.stopPropagation();
                $(picker).clockface('toggle');
            });
        break;

        case 'time':
            $(picker).datetimepicker({
                pickDate: false
            });
        break;
    }

}


/*
    runDatepicker
    ========================================================================== */
function runDatepicker(picker, type){

    switch(type){

        case 'calendar':
            $(picker).datepicker({
                weekStart: 1,
                autoclose: true,
                calendarWeeks: true,
                todayHighlight: true
            });
        break;

        case 'month':
            $(picker).datepicker({
                format: "mm/yyyy",
                startView: 1,
                minViewMode: 1
            });
        break;

        case 'year':
            $(picker).datepicker({
                format: "yyyy",
                startView: 2,
                minViewMode: 2
            });
        break;

        case 'range':
            $(picker).datepicker({
                toggleActive: true
            });
        break;

        case 'today':
            $(picker).datepicker({
                clearBtn: true,
                todayBtn: "linked",
                todayHighlight: true
            });
        break;
    }

}

/*
    runClock
    ========================================================================== */
function runClock(clock, type){

    switch(type){

        case 'default':
            $(clock).clock();
        break;

        case 'calendar':
            $(clock).clock({"calendar":"false"});
        break;

        case 'seconds':
            $(clock).clock({"seconds":"false"});
        break;


    }

}

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var daterangepicker_1 = '#daterangepicker_1',
        daterangepicker_2 = '#daterangepicker_2',
        daterangepicker_3 = '#daterangepicker_3',
        daterangepicker_4 = '#daterangepicker_4',
        daterangepicker_5 = '#daterangepicker_5';


    var datetimepicker_1 = '#datetimepicker_1',
        datetimepicker_2 = '#datetimepicker_2',
        datetimepicker_3 = '#datetimepicker_3';

    var clockface_1 = '#clockface_1',
        clockface_2 = '#clockface_2';

    var datepicker_1 = '#datepicker_1 input',
        datepicker_2 = '#datepicker_2 .date',
        datepicker_3 = '#datepicker_3 input',
        datepicker_4 = '#datepicker_4 .input-daterange',
        datepicker_5 = '#datepicker_5 input';

    var clock_1 = '#clock_1',
        clock_2 = '#clock_2',
        clock_3 = '#clock_3';

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runDaterangepicker(daterangepicker_1,'increment');
    runDaterangepicker(daterangepicker_2,'basic');
    runDaterangepicker(daterangepicker_3,'single');
    runDaterangepicker(daterangepicker_4,'predefined');
    runDaterangepicker(daterangepicker_5,'dropdown');


    runDatetimepicker(datetimepicker_1,'basic');
    runDatetimepicker(datetimepicker_2,'us_format');
    runDatetimepicker(datetimepicker_3,'time');

    runClockface(clockface_1,'basic');
    runClockface(clockface_2,'component');

    runDatepicker(datepicker_1,'calendar');
    runDatepicker(datepicker_2,'month');
    runDatepicker(datepicker_3,'year');
    runDatepicker(datepicker_4,'range');
    runDatepicker(datepicker_5,'today');

    runClock(clock_1,'default');
    runClock(clock_2,'calendar');
    runClock(clock_3,'seconds');

});