var Calendar = function() {
    "use strict";
    var dateToShow, calendar, demoCalendar, eventClass, eventCategory, subViewElement, subViewContent, $eventDetail;
    var defaultRange = new Object;
    defaultRange.start = moment();
    defaultRange.end = moment().add('days', 1);
    //Calendar
    var setFullCalendarEvents = function() {
        var date = new Date();
        dateToShow = date;
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        demoCalendar = [{
            title: 'Networking',
            start: new Date(y, m, d, 20, 0),
            end: new Date(y, m, d, 21, 0),
            className: 'event-job',
            category: 'Job',
            allDay: false,
            content: 'Out to design conference'
        }, {
            title: 'Bootstrap Seminar',
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2),
            className: 'event-offsite',
            category: 'Off-site work',
            allDay: true
        }, {
            title: 'Lunch with Nicole',
            start: new Date(y, m, d - 3, 12, 0),
            end: new Date(y, m, d - 3, 12, 30),
            className: 'event-generic',
            category: 'Generic',
            allDay: false
        }, {
            title: 'Corporate Website Redesign',
            start: new Date(y, m, d + 5),
            end: new Date(y, m, d + 10),
            className: 'event-todo',
            category: 'To Do',
            allDay: true
        }];
    };
    //function to initiate Full Calendar
    var runFullCalendar = function() {
        $(".add-event").off().on("click", function() {
            subViewElement = $(this);
            subViewContent = subViewElement.attr('href');
            $.subview({
                content: subViewContent,
                onShow: function() {
                    editFullEvent();
                },
                onHide: function() {
                    hideEditEvent();
                }
            });
        });

        $('#event-categories div.event-category').each(function() {
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim($(this).text()) // use the element's text as the event title
            };
            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);
            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 50 //  original position after the drag
            });
        });
        /* initialize the calendar
		-----------------------------------------------------------------*/
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var form = '';
        $('#full-calendar').fullCalendar({
            buttonIcons: {
                prev: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right'
            },
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            events: demoCalendar,
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            droppable: true, // this allows things to be dropped onto the calendar !!!
            drop: function(date, allDay) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');


                var $categoryClass = $(this).attr('data-class');
                var $category = $categoryClass.replace("event-", "").toLowerCase().replace(/\b[a-z]/g, function(letter) {
                    return letter.toUpperCase();
                });
                // we need to copy it, so that multiple events don't have a reference to the same object



                var newEvent = new Object;
                newEvent.title = originalEventObject.title;
                newEvent.start = new Date(date);
                newEvent.end = moment(new Date(date)).add('hours', 1);
                newEvent.allDay = true;
                newEvent.className = $categoryClass;
                newEvent.category = $category;
                newEvent.content = "";



                $('#full-calendar').fullCalendar('renderEvent', newEvent, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            },
            selectable: true,
            selectHelper: true,
            select: function(start, end, allDay) {
                defaultRange.start = moment(start);
                defaultRange.end = moment(start).add('hours', 1);
                $.subview({
                    content: "#newFullEvent",
                    onShow: function() {
                        editFullEvent();
                    },
                    onHide: function() {
                        hideEditEvent();
                    }
                });
            },
            eventClick: function(calEvent, jsEvent, view) {
                dateToShow = calEvent.start;
                $.subview({
                    content: "#readFullEvent",
                    startFrom: "right",
                    onShow: function() {
                        readFullEvents(calEvent._id);
                    }
                });

            }
        });
        demoCalendar = $("#full-calendar").fullCalendar("clientEvents");
    };
    var editFullEvent = function(el) {
        $(".close-new-event").off().on("click", function() {
            $(".back-subviews").trigger("click");
        });
        $(".form-full-event .help-block").remove();
        $(".form-full-event .form-group").removeClass("has-error").removeClass("has-success");
        $eventDetail = $('.form-full-event .summernote');

        $eventDetail.summernote({
            oninit: function() {
                if ($eventDetail.code() == "" || $eventDetail.code().replace(/(<([^>]+)>)/ig, "") == "") {
                    $eventDetail.code($eventDetail.attr("placeholder"));
                }
            },
            onfocus: function(e) {
                if ($eventDetail.code() == $eventDetail.attr("placeholder")) {
                    $eventDetail.code("");
                }
            },
            onblur: function(e) {
                if ($eventDetail.code() == "" || $eventDetail.code().replace(/(<([^>]+)>)/ig, "") == "") {
                    $eventDetail.code($eventDetail.attr("placeholder"));
                }
            },
            onkeyup: function(e) {
                $("span[for='detailEditor']").remove();
            },
            toolbar: [
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
            ]
        });
        if (typeof el == "undefined") {
            $(".form-full-event .event-id").val("");
            $(".form-full-event .event-name").val("");
            $(".form-full-event .all-day").bootstrapSwitch('state', false);
            $('.form-full-event .all-day-range').hide();
            $(".form-full-event .event-start-date").val(defaultRange.start);
            $(".form-full-event .event-end-date").val(defaultRange.end);

            $('.form-full-event .no-all-day-range .event-range-date').val(moment(defaultRange.start).format('MM/DD/YYYY h:mm A') + ' - ' + moment(defaultRange.end).format('MM/DD/YYYY h:mm A'))
                .daterangepicker({
                    startDate: defaultRange.start,
                    endDate: defaultRange.end,
                    timePicker: true,
                    timePickerIncrement: 30,
                    format: 'MM/DD/YYYY h:mm A'
                });

            $('.form-full-event .all-day-range .event-range-date').val(moment(defaultRange.start).format('MM/DD/YYYY') + ' - ' + moment(defaultRange.end).format('MM/DD/YYYY'))
                .daterangepicker({
                    startDate: defaultRange.start,
                    endDate: defaultRange.end
                });

            $('.form-full-event .event-categories option').filter(function() {
                return ($(this).text() == "Generic");
            }).prop('selected', true);
            $('.form-full-event .event-categories').selectpicker('render');
            $eventDetail.code($eventDetail.attr("placeholder"));

            defaultRange.start = moment();
            defaultRange.end = moment().add('days', 1);

        } else {

            $(".form-full-event .event-id").val(el);

            for (var i = 0; i < demoCalendar.length; i++) {

                if (demoCalendar[i]._id == el) {
                    $(".form-full-event .event-name").val(demoCalendar[i].title);
                    $(".form-full-event .all-day").bootstrapSwitch('state', demoCalendar[i].allDay);
                    $(".form-full-event .event-start-date").val(moment(demoCalendar[i].start));
                    $(".form-full-event .event-end-date").val(moment(demoCalendar[i].end));
                    if (typeof $('.form-full-event .no-all-day-range .event-range-date').data('daterangepicker') == "undefined") {
                        $('.form-full-event .no-all-day-range .event-range-date').val(moment(demoCalendar[i].start).format('MM/DD/YYYY h:mm A') + ' - ' + moment(demoCalendar[i].end).format('MM/DD/YYYY h:mm A'))
                            .daterangepicker({
                                startDate: moment(moment(demoCalendar[i].start)),
                                endDate: moment(moment(demoCalendar[i].end)),
                                timePicker: true,
                                timePickerIncrement: 10,
                                format: 'MM/DD/YYYY h:mm A'
                            });

                        $('.form-full-event .all-day-range .event-range-date').val(moment(demoCalendar[i].start).format('MM/DD/YYYY') + ' - ' + moment(demoCalendar[i].end).format('MM/DD/YYYY'))
                            .daterangepicker({
                                startDate: moment(demoCalendar[i].start),
                                endDate: moment(demoCalendar[i].end)
                            });
                    } else {
                        $('.form-full-event .no-all-day-range .event-range-date').val(moment(demoCalendar[i].start).format('MM/DD/YYYY h:mm A') + ' - ' + moment(demoCalendar[i].end).format('MM/DD/YYYY h:mm A'))
                            .data('daterangepicker').setStartDate(moment(moment(demoCalendar[i].start)));
                        $('.form-full-event .no-all-day-range .event-range-date').data('daterangepicker').setEndDate(moment(moment(demoCalendar[i].end)));
                        $('.form-full-event .all-day-range .event-range-date').val(moment(demoCalendar[i].start).format('MM/DD/YYYY') + ' - ' + moment(demoCalendar[i].end).format('MM/DD/YYYY'))
                            .data('daterangepicker').setStartDate(demoCalendar[i].start);
                        $('.form-full-event .all-day-range .event-range-date').data('daterangepicker').setEndDate(demoCalendar[i].end);
                    }

                    if (demoCalendar[i].category == "" || typeof demoCalendar[i].category == "undefined") {
                        eventCategory = "Generic";
                    } else {
                        eventCategory = demoCalendar[i].category;
                    }
                    $('.form-full-event .event-categories option').filter(function() {
                        return ($(this).text() == eventCategory);
                    }).prop('selected', true);
                    $('.form-full-event .event-categories').selectpicker('render');
                    if (typeof demoCalendar[i].content !== "undefined" && demoCalendar[i].content !== "") {
                        $eventDetail.code(demoCalendar[i].content);
                    } else {
                        $eventDetail.code($eventDetail.attr("placeholder"));
                    }
                }

            }
        }
        $('.form-full-event .all-day').bootstrapSwitch();

        $('.form-full-event .all-day').on('switchChange.bootstrapSwitch', function(event, state) {
            $(".daterangepicker").hide();
            var startDate = moment($("#newFullEvent").find(".event-start-date").val());
            var endDate = moment($("#newFullEvent").find(".event-end-date").val());
            if (state) {
                $("#newFullEvent").find(".no-all-day-range").hide();
                $("#newFullEvent").find(".all-day-range").show();
                $("#newFullEvent").find('.all-day-range .event-range-date').val(startDate.format('MM/DD/YYYY') + ' - ' + endDate.format('MM/DD/YYYY')).data('daterangepicker').setStartDate(startDate);
                $("#newFullEvent").find('.all-day-range .event-range-date').data('daterangepicker').setEndDate(endDate);
            } else {
                $("#newFullEvent").find(".no-all-day-range").show();
                $("#newFullEvent").find(".all-day-range").hide();
                $("#newFullEvent").find('.no-all-day-range .event-range-date').val(startDate.format('MM/DD/YYYY h:mm A') + ' - ' + endDate.format('MM/DD/YYYY h:mm A')).data('daterangepicker').setStartDate(startDate);
                $("#newFullEvent").find('.no-all-day-range .event-range-date').data('daterangepicker').setEndDate(endDate);
            }

        });
        $('.form-full-event .event-range-date').on('apply.daterangepicker', function(ev, picker) {
            $(".form-full-event .event-start-date").val(picker.startDate);
            $(".form-full-event .event-end-date").val(picker.endDate);
        });
    };
    var readFullEvents = function(el) {

        $(".edit-event").off().on("click", function() {
            subViewElement = $(this);
            subViewContent = subViewElement.attr('href');
            $.subview({
                content: subViewContent,
                onShow: function() {
                    editFullEvent(el);
                },
                onHide: function() {
                    hideEditEvent();
                }
            });
        });

        $(".delete-event").data("event-id", el);

        $("#readFullEvent").find(".delete-event").off().on("click", function() {
            el = $(this).data("event-id");
            bootbox.confirm("Are you sure to cancel?", function(result) {
                if (result) {
                    $.blockUI({
                        message: '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
                    });
                    //mockjax simulates an ajax call
                    $.mockjax({
                        url: '/event/delete/webservice',
                        dataType: 'json',
                        responseTime: 1000,
                        responseText: {
                            say: 'ok'
                        }
                    });

                    $.ajax({
                        url: '/event/delete/webservice',
                        dataType: 'json',
                        success: function(json) {
                            $.unblockUI();
                            if (json.say == "ok") {
                                $('#full-calendar').fullCalendar('removeEvents', el);
                                demoCalendar = $("#full-calendar").fullCalendar("clientEvents");

                                $.hideSubview();
                                toastr.success('The event has been successfully deleted!');
                            }
                        }
                    });

                }
            });
        });
        for (var i = 0; i < demoCalendar.length; i++) {
            if (demoCalendar[i]._id == el) {


                $("#readFullEvent .event-allday").hide();
                $("#readFullEvent .event-end").empty().hide();

                $("#readFullEvent .event-title").empty().text(demoCalendar[i].title);
                if (demoCalendar[i].className == "" || typeof demoCalendar[i].className == "undefined") {
                    eventClass = "event-generic";
                } else {
                    eventClass = demoCalendar[i].className;
                }
                if (demoCalendar[i].category == "" || typeof demoCalendar[i].category == "undefined") {
                    eventCategory = "Generic";
                } else {
                    eventCategory = demoCalendar[i].category;
                }

                $("#readFullEvent .event-category")
                    .empty()
                    .removeAttr("class")
                    .addClass("event-category " + eventClass)
                    .text(eventCategory);
                if (demoCalendar[i].allDay) {
                    $("#readFullEvent .event-allday").show();
                    $("#readFullEvent .event-start").empty().html("<p>Start:</p> <div class='event-day'><h2>" + moment(demoCalendar[i].start).format('DD') + "</h2></div><div class='event-date'><h3>" + moment(demoCalendar[i].start).format('dddd') + "</h3><h4>" + moment(demoCalendar[i].start).format('MMMM YYYY') + "</h4></div>");
                    if (demoCalendar[i].end !== null) {
                        if (moment(demoCalendar[i].end).isValid()) {
                            $("#readFullEvent .event-end").show().html("<p>End:</p> <div class='event-day'><h2>" + moment(demoCalendar[i].end).format('DD') + "</h2></div><div class='event-date'><h3>" + moment(demoCalendar[i].end).format('dddd') + "</h3><h4>" + moment(demoCalendar[i].end).format('MMMM YYYY') + " </h4></div>");
                        }
                    }
                } else {

                    $("#readFullEvent .event-start").empty().html("<p>Start:</p> <div class='event-day'><h2>" + moment(demoCalendar[i].start).format('DD') + "</h2></div><div class='event-date'><h3>" + moment(demoCalendar[i].start).format('dddd') + "</h3><h4>" + moment(demoCalendar[i].start).format('MMMM YYYY') + "</h4></div> <div class='event-time'><h3><i class='fa fa-clock-o'></i> " + moment(demoCalendar[i].start).format('h:mm A') + "</h3></div>");
                    if (demoCalendar[i].end !== null) {
                        if (moment(demoCalendar[i].end).isValid()) {
                            $("#readFullEvent .event-end").show().html("<p>End:</p> <div class='event-day'><h2>" + moment(demoCalendar[i].end).format('DD') + "</h2></div><div class='event-date'><h3>" + moment(demoCalendar[i].end).format('dddd') + "</h3><h4>" + moment(demoCalendar[i].end).format('MMMM YYYY') + "</h4></div> <div class='event-time'><h3><i class='fa fa-clock-o'></i> " + moment(demoCalendar[i].end).format('h:mm A') + "</h3></div>");
                        }
                    }
                }

                $("#readFullEvent .event-content").empty().html(demoCalendar[i].content);

                break;
            }

        }

    };

    var runFullCalendarValidation = function(el) {

        var formEvent = $('.form-full-event');
        var errorHandler2 = $('.errorHandler', formEvent);
        var successHandler2 = $('.successHandler', formEvent);

        formEvent.validate({
            errorElement: "span", // contain the error msg in a span tag
            errorClass: 'help-block',
            errorPlacement: function(error, element) { // render error placement for each input type
                if (element.attr("type") == "radio" || element.attr("type") == "checkbox") { // for chosen elements, need to insert the error after the chosen container
                    error.insertAfter($(element).closest('.form-group').children('div').children().last());
                } else if (element.parent().hasClass("input-icon")) {

                    error.insertAfter($(element).parent());
                } else {
                    error.insertAfter(element);
                    // for other inputs, just perform default behavior
                }
            },
            ignore: "",
            rules: {
                eventName: {
                    minlength: 2,
                    required: true
                },
                eventStartDate: {
                    required: true,
                    date: true
                },
                eventEndDate: {
                    required: true,
                    date: true
                }
            },
            messages: {
                eventName: "* Please specify the event name"

            },
            invalidHandler: function(event, validator) { //display error alert on form submit
                successHandler2.hide();
                errorHandler2.show();
            },
            highlight: function(element) {
                $(element).closest('.help-block').removeClass('valid');
                // display OK icon
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error').find('.symbol').removeClass('ok').addClass('required');
                // add the Bootstrap error class to the control group
            },
            unhighlight: function(element) { // revert the change done by hightlight
                $(element).closest('.form-group').removeClass('has-error');
                // set error class to the control group
            },
            success: function(label, element) {
                label.addClass('help-block valid');
                // mark the current input as valid and display OK icon
                $(element).closest('.form-group').removeClass('has-error').addClass('has-success').find('.symbol').removeClass('required').addClass('ok');
            },
            submitHandler: function(form) {
                successHandler2.show();
                errorHandler2.hide();
                var newEvent = new Object;
                newEvent.title = $(".form-full-event .event-name ").val();
                newEvent.start = new Date($('.form-full-event .event-start-date').val());
                newEvent.end = new Date($('.form-full-event .event-end-date').val());
                newEvent.allDay = $(".form-full-event .all-day").bootstrapSwitch('state');
                newEvent.className = $(".form-full-event .event-categories option:checked").val();
                newEvent.category = $(".form-full-event .event-categories option:checked").text();
                if ($eventDetail.code() !== "" && $eventDetail.code().replace(/(<([^>]+)>)/ig, "") !== "" && $eventDetail.code() !== $eventDetail.attr("placeholder")) {
                    newEvent.content = $eventDetail.code();
                } else {
                    newEvent.content = "";
                }

                $.blockUI({
                    message: '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
                });

                if ($(".form-full-event .event-id").val() !== "") {
                    el = $(".form-full-event .event-id").val();
                    var actual_event = $('#full-calendar').fullCalendar('clientEvents', el);
                    actual_event = actual_event[0];
                    for (var i = 0; i < demoCalendar.length; i++) {
                        if (demoCalendar[i]._id == el) {
                            newEvent._id = el;
                            var eventIndex = i;
                        }
                    }
                    //mockjax simulates an ajax call
                    $.mockjax({
                        url: '/event/edit/webservice',
                        dataType: 'json',
                        responseTime: 1000,
                        responseText: {
                            say: 'ok'
                        }
                    });

                    $.ajax({
                        url: '/event/edit/webservice',
                        dataType: 'json',
                        success: function(json) {
                            $.unblockUI();
                            if (json.say == "ok") {

                                $('#full-calendar').fullCalendar('removeEvents', actual_event._id);
                                $('#full-calendar').fullCalendar('renderEvent', newEvent, true);

                                demoCalendar = $("#full-calendar").fullCalendar("clientEvents");
                                $.hideSubview();
                                toastr.success('The event has been successfully modified!');
                            }
                        }
                    });

                } else {
                    //mockjax simulates an ajax call
                    $.mockjax({
                        url: '/event/new/webservice',
                        dataType: 'json',
                        responseTime: 1000,
                        responseText: {
                            say: 'ok'
                        }
                    });

                    $.ajax({
                        url: '/event/new/webservice',
                        dataType: 'json',
                        success: function(json) {
                            $.unblockUI();
                            if (json.say == "ok") {
                                $('#full-calendar').fullCalendar('renderEvent', newEvent, true);
                                demoCalendar = $("#full-calendar").fullCalendar("clientEvents");
                                $.hideSubview();
                                toastr.success('A new event has been added to your calendar!');
                            }
                        }
                    });

                }



            }
        });
    };
    // on hide event's form destroy summernote and bootstrapSwitch plugins
    var hideEditEvent = function() {
        $.hideSubview();
        $('.form-full-event .summernote').destroy();
        $(".form-full-event .all-day").bootstrapSwitch('destroy');

    };
    return {
        init: function() {
            setFullCalendarEvents();
            runFullCalendar();

            runFullCalendarValidation();
        }
    };
}();