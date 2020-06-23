var SVExamples = function() {
    "use strict";
    //set variables	
    var date = new Date(),
        dateToShow = date,
        calendar, $eventDetail, eventClass, eventCategory;
    var widgetNotes = $('#notes .e-slider'),
        sliderNotes = $('#readNote .e-slider'),
        $note;
    var oTable, contributors;
    var subViewElement, subViewContent, subViewIndex;

    // creates an array of events to display in the calendar
    var setCalendarEvents = function() {
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        calendar = [{
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
    //creates fullCalendar
    var showCalendar = function() {
        dateToShow = date;
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            year: dateToShow.getFullYear(),
            month: dateToShow.getMonth(),
            date: dateToShow.getDate(),
            editable: true,
            events: calendar,
            eventClick: function(calEvent, jsEvent, view) {
                //show event in subview
                dateToShow = calEvent.start;
                $.subview({
                    content: "#readEvent",
                    startFrom: "right",
                    onShow: function() {
                        readEvent(calEvent._id);
                    }
                });
            }
        });
        calendar = $("#calendar").fullCalendar("clientEvents");
    };
    //destroy fullCalendar
    var destroyCalendar = function() {
        $('#calendar').fullCalendar('destroy');
    };
    //validate new event form
    var runEventFormValidation = function(el) {
        var formEvent = $('.form-event');
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
                eventName: "* Please specify your first name"

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
                newEvent = new Object;
                newEvent.title = $(".form-event .event-name ").val();
                newEvent.start = new Date($('.form-event .event-start-date').val());
                newEvent.end = new Date($('.form-event .event-end-date').val());
                newEvent.allDay = $(".form-event .all-day").bootstrapSwitch('state');
                newEvent.className = $(".form-event .event-categories option:checked").val();
                newEvent.category = $(".form-event .event-categories option:checked").text();
                if ($eventDetail.code() !== "" && $eventDetail.code().replace(/(<([^>]+)>)/ig, "") !== "" && $eventDetail.code() !== $eventDetail.attr("placeholder")) {
                    newEvent.content = $eventDetail.code();
                } else {
                    newEvent.content = "";
                }

                $.blockUI({
                    message: '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
                });

                if ($(".form-event .event-id").val() !== "") {
                    el = $(".form-event .event-id").val();

                    for (var i = 0; i < calendar.length; i++) {

                        if (calendar[i]._id == el) {
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
                                calendar[eventIndex] = newEvent;
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
                                calendar.push(newEvent);
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
        $('.form-event .summernote').destroy();
        $(".form-event .all-day").bootstrapSwitch('destroy');

    };
    // enables the edit form 
    var editEvent = function(el) {
        $(".close-new-event").off().on("click", function() {
            $(".back-subviews").trigger("click");
        });
        $(".form-event .help-block").remove();
        $(".form-event .form-group").removeClass("has-error").removeClass("has-success");
        $eventDetail = $('.form-event .summernote');

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
            $(".form-event .event-id").val("");
            $(".form-event .event-name").val("");
            $(".form-event .all-day").bootstrapSwitch('state', false);
            $('.form-event .all-day-range').hide();
            $(".form-event .event-start-date").val(moment());
            $(".form-event .event-end-date").val(moment().add('days', 1));

            $('.form-event .no-all-day-range .event-range-date').val(moment().format('MM/DD/YYYY h:mm A') + ' - ' + moment().add('days', 1).format('MM/DD/YYYY h:mm A'))
                .daterangepicker({
                    startDate: moment(),
                    endDate: moment().add('days', 1),
                    timePicker: true,
                    timePickerIncrement: 30,
                    format: 'MM/DD/YYYY h:mm A'
                });

            $('.form-event .all-day-range .event-range-date').val(moment().format('MM/DD/YYYY') + ' - ' + moment().add('days', 1).format('MM/DD/YYYY'))
                .daterangepicker({
                    startDate: moment(),
                    endDate: moment().add('days', 1)
                });

            $('.form-event .event-categories option').filter(function() {
                return ($(this).text() == "Generic");
            }).prop('selected', true);
            $('.form-event .event-categories').selectpicker('render');
            $eventDetail.code($eventDetail.attr("placeholder"));

        } else {

            $(".form-event .event-id").val(el);

            for (var i = 0; i < calendar.length; i++) {

                if (calendar[i]._id == el) {
                    $(".form-event .event-name").val(calendar[i].title);
                    $(".form-event .all-day").bootstrapSwitch('state', calendar[i].allDay);
                    $(".form-event .event-start-date").val(moment(calendar[i].start));
                    $(".form-event .event-end-date").val(moment(calendar[i].end));
                    if (typeof $('.form-event .no-all-day-range .event-range-date').data('daterangepicker') == "undefined") {
                        $('.form-event .no-all-day-range .event-range-date').val(moment(calendar[i].start).format('MM/DD/YYYY h:mm A') + ' - ' + moment(calendar[i].end).format('MM/DD/YYYY h:mm A'))
                            .daterangepicker({
                                startDate: moment(moment(calendar[i].start)),
                                endDate: moment(moment(calendar[i].end)),
                                timePicker: true,
                                timePickerIncrement: 10,
                                format: 'MM/DD/YYYY h:mm A'
                            });

                        $('.form-event .all-day-range .event-range-date').val(moment(calendar[i].start).format('MM/DD/YYYY') + ' - ' + moment(calendar[i].end).format('MM/DD/YYYY'))
                            .daterangepicker({
                                startDate: moment(calendar[i].start),
                                endDate: moment(calendar[i].end)
                            });
                    } else {
                        $('.form-event .no-all-day-range .event-range-date').val(moment(calendar[i].start).format('MM/DD/YYYY h:mm A') + ' - ' + moment(calendar[i].end).format('MM/DD/YYYY h:mm A'))
                            .data('daterangepicker').setStartDate(moment(moment(calendar[i].start)));
                        $('.form-event .no-all-day-range .event-range-date').data('daterangepicker').setEndDate(moment(moment(calendar[i].end)));
                        $('.form-event .all-day-range .event-range-date').val(moment(calendar[i].start).format('MM/DD/YYYY') + ' - ' + moment(calendar[i].end).format('MM/DD/YYYY'))
                            .data('daterangepicker').setStartDate(calendar[i].start);
                        $('.form-event .all-day-range .event-range-date').data('daterangepicker').setEndDate(calendar[i].end);
                    }

                    if (calendar[i].category == "" || typeof calendar[i].category == "undefined") {
                        eventCategory = "Generic";
                    } else {
                        eventCategory = calendar[i].category;
                    }
                    $('.form-event .event-categories option').filter(function() {
                        return ($(this).text() == eventCategory);
                    }).prop('selected', true);
                    $('.form-event .event-categories').selectpicker('render');
                    if (typeof calendar[i].content !== "undefined" && calendar[i].content !== "") {
                        $eventDetail.code(calendar[i].content);
                    } else {
                        $eventDetail.code($eventDetail.attr("placeholder"));
                    }
                }

            }
        }
        $('.form-event .all-day').bootstrapSwitch();

        $('.form-event .all-day').on('switchChange.bootstrapSwitch', function(event, state) {
            $(".daterangepicker").hide();
            var startDate = moment($("#newEvent").find(".event-start-date").val());
            var endDate = moment($("#newEvent").find(".event-end-date").val());
            if (state) {
                $("#newEvent").find(".no-all-day-range").hide();
                $("#newEvent").find(".all-day-range").show();
                $("#newEvent").find('.all-day-range .event-range-date').val(startDate.format('MM/DD/YYYY') + ' - ' + endDate.format('MM/DD/YYYY')).data('daterangepicker').setStartDate(startDate);
                $("#newEvent").find('.all-day-range .event-range-date').data('daterangepicker').setEndDate(endDate);
            } else {
                $("#newEvent").find(".no-all-day-range").show();
                $("#newEvent").find(".all-day-range").hide();
                $("#newEvent").find('.no-all-day-range .event-range-date').val(startDate.format('MM/DD/YYYY h:mm A') + ' - ' + endDate.format('MM/DD/YYYY h:mm A')).data('daterangepicker').setStartDate(startDate);
                $("#newEvent").find('.no-all-day-range .event-range-date').data('daterangepicker').setEndDate(endDate);
            }

        });
        $('.form-event .event-range-date').on('apply.daterangepicker', function(ev, picker) {
            $(".form-event .event-start-date").val(picker.startDate);
            $(".form-event .event-end-date").val(picker.endDate);
        });
    };
    // read Event
    var readEvent = function(el) {
        $(".edit-event").off().on("click", function() {
            subViewElement = $(this);
            subViewContent = subViewElement.attr('href');
            $.subview({
                content: subViewContent,
                onShow: function() {
                    editEvent(el);
                },
                onHide: function() {
                    hideEditEvent();
                }
            });
        });

        $(".delete-event").data("event-id", el);

        $("#readEvent").find(".delete-event").off().on("click", function() {
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
                    for (i = 0; i < calendar.length; i++) {
                        if (calendar[i]._id == el) {
                            var calendarIndex = i;
                            $.ajax({
                                url: '/event/delete/webservice',
                                dataType: 'json',
                                success: function(json) {
                                    $.unblockUI();
                                    if (json.say == "ok") {
                                        calendar.splice(calendarIndex, 1);

                                        $(".back-subviews").trigger("click");
                                        toastr.success('The event has been successfully deleted!');
                                    }
                                }
                            });


                        }
                    }

                }
            });
        });
        for (var i = 0; i < calendar.length; i++) {

            if (calendar[i]._id == el) {

                $("#readEvent .event-allday").hide();
                $("#readEvent .event-end").empty().hide();

                $("#readEvent .event-title").empty().text(calendar[i].title);
                if (calendar[i].className == "" || typeof calendar[i].className == "undefined") {
                    eventClass = "event-generic";
                } else {
                    eventClass = calendar[i].className;
                }
                if (calendar[i].category == "" || typeof calendar[i].category == "undefined") {
                    eventCategory = "Generic";
                } else {
                    eventCategory = calendar[i].category;
                }

                $("#readEvent .event-category")
                    .empty()
                    .removeAttr("class")
                    .addClass("event-category " + eventClass)
                    .text(eventCategory);
                if (calendar[i].allDay) {
                    $("#readEvent .event-allday").show();
                    $("#readEvent .event-start").empty().html("<p>Start:</p> <div class='event-day'><h2>" + moment(calendar[i].start).format('DD') + "</h2></div><div class='event-date'><h3>" + moment(calendar[i].start).format('dddd') + "</h3><h4>" + moment(calendar[i].start).format('MMMM YYYY') + "</h4></div>");
                    if (calendar[i].end !== null) {
                        if (moment(calendar[i].end).isValid()) {
                            $("#readEvent .event-end").show().html("<p>End:</p> <div class='event-day'><h2>" + moment(calendar[i].end).format('DD') + "</h2></div><div class='event-date'><h3>" + moment(calendar[i].end).format('dddd') + "</h3><h4>" + moment(calendar[i].end).format('MMMM YYYY') + " </h4></div>");
                        }
                    }
                } else {

                    $("#readEvent .event-start").empty().html("<p>Start:</p> <div class='event-day'><h2>" + moment(calendar[i].start).format('DD') + "</h2></div><div class='event-date'><h3>" + moment(calendar[i].start).format('dddd') + "</h3><h4>" + moment(calendar[i].start).format('MMMM YYYY') + "</h4></div> <div class='event-time'><h3><i class='fa fa-clock-o'></i> " + moment(calendar[i].start).format('h:mm A') + "</h3></div>");
                    if (calendar[i].end !== null) {
                        if (moment(calendar[i].end).isValid()) {
                            $("#readEvent .event-end").show().html("<p>End:</p> <div class='event-day'><h2>" + moment(calendar[i].end).format('DD') + "</h2></div><div class='event-date'><h3>" + moment(calendar[i].end).format('dddd') + "</h3><h4>" + moment(calendar[i].end).format('MMMM YYYY') + "</h4></div> <div class='event-time'><h3><i class='fa fa-clock-o'></i> " + moment(calendar[i].end).format('h:mm A') + "</h3></div>");
                        }
                    }
                }

                $("#readEvent .event-content").empty().html(calendar[i].content);

                break;
            }

        }

    };
    // read note
    var readNote = function(el) {
        var noteIndex;
        if (typeof el == "undefined" || el < 0) {
            noteIndex = 0;
        } else {
            noteIndex = el;
        }
        $("#readNote .e-slider").data('owlCarousel').jumpTo(noteIndex);
    };

    var checkNote = function() {

        //alert(el.closest("li").index());
        $note = $('.form-note .summernote');

        if ($('.form-note .note-title').val() !== "" || $note.code() !== $note.attr("placeholder")) {
            bootbox.confirm("You did not save note, are you sure to cancel?", function(result) {

                if (result) {

                    $('.form-note .note-title').val("");
                    $note.code($note.attr("placeholder"));
                    $.hideSubview();
                }

            });

        } else {
            $(".form-note .help-block").remove();
            $(".form-note .form-group").removeClass("has-error").removeClass("has-success");
            $.hideSubview();
        }

    };

    var hideNote = function() {
        $('.form-note .summernote').destroy();
    };

    var setContributorsList = function() {
        contributors = [{
            firstName: 'Peter',
            lastName: 'Clark',
            email: 'peter@example.com',
            gender: 'M',
            permits: 'View and Edit',
            password: 'password',
            avatar: "assets/images/avatar-1.jpg"
        }, {
            firstName: 'Nicole',
            lastName: 'Bell',
            email: 'nicole@example.com',
            gender: 'F',
            permits: 'View and Edit',
            password: 'password',
            avatar: "assets/images/avatar-2.jpg"
        }, {
            firstName: 'Steven',
            lastName: 'Thompson',
            email: 'steven@example.com',
            gender: 'M',
            permits: 'View Only',
            password: 'password',
            avatar: "assets/images/avatar-3.jpg"
        }, {
            firstName: 'Ella',
            lastName: 'Patterson',
            email: 'ella@example.com',
            gender: 'F',
            permits: 'View Only',
            password: 'password',
            avatar: "assets/images/avatar-4.jpg"
        }, {
            firstName: 'Kenneth',
            lastName: 'Ross',
            email: 'kenneth@example.com',
            gender: 'M',
            permits: 'View and Edit',
            password: 'password',
            avatar: "assets/images/avatar-5.jpg"
        }];
    };

    var showContributors = function() {
        var LISTING_RESULTS = [];
        for (var i = 0; i < contributors.length; i++) {
            var item = contributors[i];
            LISTING_RESULTS[i] = new Array(item.avatar, item.firstName + ' ' + item.lastName, item.email, item.gender, item.permits, i);
        }

        $('#contributors').append('<table class="table table-striped" id="example"></table>');
        oTable = $('#example').dataTable({
            "oLanguage": {
                "sLengthMenu": "_MENU_",
                "sSearch": "",
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            },
            "fnRowCallback": function(nRow, aData, iDisplayIndex) {

                /* Append the grade to the default row class name */
                //alert(aData)
                $('#example_wrapper .dataTables_filter input').addClass("form-control").attr("placeholder", "Search");
                // modify table search input

                // modify table per page dropdown
                $('#example_wrapper .dataTables_length select').selectpicker();
                // initialzie select2 dropdown

                if (aData[0] !== "") {
                    $('td:eq(0)', nRow).html('<img src="' + aData[0] + '" width="50">');
                } else {
                    $('td:eq(0)', nRow).html('<img src="assets/images/anonymous.jpg" width="50" height ="50">');
                }
                var contributorIndex = aData[5];
                $("td:eq(5)", nRow).empty();
                $(".options-contributors").children().clone().appendTo($("td:eq(5)", nRow)).find(".edit-contributor").attr("data-id", contributorIndex).off().on("click", function() {

                    subViewElement = $(this);
                    subViewContent = subViewElement.attr('href');
                    var contributorId = subViewElement.data("id");
                    $.subview({
                        content: subViewContent,
                        onShow: function() {
                            editContributor(contributorId);
                        }
                    });
                }).end().find(".delete-contributor").data("id", contributorIndex).off().on("click", function() {
                    var target_row = $(this).closest("tr").get(0);
                    var el = $(this).data("id");


                    // this line did the trick
                    bootbox.confirm("Are you sure to cancel?", function(result) {

                        if (result) {
                            $.blockUI({
                                message: '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
                            });
                            $.mockjax({
                                url: '/contributors/delete/webservice',
                                dataType: 'json',
                                responseTime: 1000,
                                responseText: {
                                    say: 'ok'
                                }
                            });
                            $.ajax({
                                url: '/contributors/delete/webservice',
                                dataType: 'json',
                                success: function(json) {
                                    $.unblockUI();
                                    if (json.say == "ok") {
                                        for (var i = 0; i < contributors.length; i++) {

                                            if (i == el) {
                                                contributors.splice(i, 1);
                                            }
                                        }

                                        destroyContributors();
                                        showContributors();

                                        toastr.success('the contributor has been removed successfully');
                                    }
                                }
                            });

                        }
                    });
                });

            },
            "aaData": LISTING_RESULTS,
            "aoColumns": [{
                "sTitle": "",
                "bSearchable": false
            }, {
                "sTitle": "Full Name"
            }, {
                "sTitle": "Email"
            }, {
                "sTitle": "Gender",
                "sClass": "center"
            }, {
                "sTitle": "Permits"
            }, {
                "sTitle": "Options",
                "sClass": "center"
            }],
            "aoColumnDefs": [{
                bSortable: false,
                aTargets: [0, -1]
            }],
            "aaSorting": [
                [1, "asc"]
            ]
        });
    };
    var destroyContributors = function() {
        //Delete the datable object first
        if (oTable != null)
            oTable.fnDestroy();
        //Remove all the DOM elements
        $('#example').remove();
    };
    var editContributor = function(el) {
        $(".form-contributor .help-block").remove();
        $(".form-contributor .form-group").removeClass("has-error").removeClass("has-success");
        if (typeof el == "undefined") {
            $(".contributor-id").val("");
            $(".contributor-firstname").val("");
            $(".contributor-lastname").val("");
            $(".contributor-email").val("");
            $(".contributor-password").val("");
            $(".contributor-password-again").val("");
            $('.contributor-gender').iCheck('uncheck');
            $(".contributor-permits option:eq(0)").prop('selected', true);
            $(".contributor-avatar").removeClass("fileupload-exists").addClass("fileupload-new");
            $(".contributor-avatar .fileupload-preview").empty();
            $(".contributor-message").val("");

        } else {
            $(".contributor-id").val(el);
            $(".contributor-firstname").val(contributors[el].firstName);
            $(".contributor-lastname").val(contributors[el].lastName);
            $(".contributor-email").val(contributors[el].email);
            $(".contributor-password").val(contributors[el].password);
            $(".contributor-password-again").val(contributors[el].password);
            $(".contributor-gender[value='" + contributors[el].gender + "']").iCheck('check');
            $(".contributor-permits option[value='" + contributors[el].permits + "']").prop('selected', true);
            if (contributors[el].avatar !== "") {
                $(".contributor-avatar").removeClass("fileupload-new").addClass("fileupload-exists");

                $(".contributor-avatar .fileupload-preview").empty().append("<img src='" + contributors[el].avatar + "'>");

            } else {
                $(".contributor-avatar").removeClass("fileupload-exists").addClass("fileupload-new");

                $(".contributor-avatar .fileupload-preview").empty().append("<img src='assets/images/anonymous.jpg'>");
            }
            $(".contributor-message").val("");

        }
    };
    var runContributorsFormValidation = function(el) {
        var formContributor = $('.form-contributor');
        var errorHandler3 = $('.errorHandler', formContributor);
        var successHandler3 = $('.successHandler', formContributor);
        formContributor.validate({
            errorElement: "span", // contain the error msg in a span tag
            errorClass: 'help-block',
            errorPlacement: function(error, element) { // render error placement for each input type
                if (element.attr("type") == "radio" || element.attr("type") == "checkbox") { // for chosen elements, need to insert the error after the chosen container
                    error.insertBefore($(element).closest('.form-group').children('div').children().last());
                } else if (element.attr("name") == "dd" || element.attr("name") == "mm" || element.attr("name") == "yyyy") {
                    error.insertBefore($(element).closest('.form-group').children('div'));
                } else {
                    error.insertBefore(element);
                    // for other inputs, just perform default behavior
                }
            },
            ignore: "",
            rules: {
                firstname: {
                    minlength: 2,
                    required: true
                },
                lastname: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    minlength: 6,
                    required: true
                },
                password_again: {
                    required: true,
                    minlength: 5,
                    equalTo: ".contributor-password"
                },
                yyyy: "FullDate",
                gender: {
                    required: true
                },
                zipcode: {
                    required: true,
                    number: true,
                    minlength: 5
                },
                city: {
                    required: true
                },
                newsletter: {
                    required: true
                }
            },
            messages: {
                firstname: "Please specify your first name",
                lastname: "Please specify your last name",
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                },
                gender: "Please check a gender!"
            },
            invalidHandler: function(event, validator) { //display error alert on form submit
                successHandler3.hide();
                errorHandler3.show();
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

                errorHandler3.hide();
                var userAvatar;
                if ($(".fileupload-preview img").attr("src") == null) {
                    userAvatar = "";
                } else {
                    userAvatar = $(".fileupload-preview img").attr("src");
                }

                var newContributor = new Object;
                newContributor.firstName = $(".contributor-firstname").val(), newContributor.lastName = $(".contributor-lastname").val(), newContributor.email = $(".contributor-email").val(), newContributor.password = $(".contributor-password").val(), newContributor.gender = $("input.contributor-gender:checked").val(), newContributor.permits = $(".contributor-permits option:selected").val(), newContributor.avatar = userAvatar;
                $.blockUI({
                    message: '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
                });
                if ($(".contributor-id").val() !== "") {
                    $.mockjax({
                        url: '/contributors/edit/webservice',
                        dataType: 'json',
                        responseTime: 1000,
                        responseText: {
                            say: 'ok'
                        }
                    });
                    $.ajax({
                        url: '/contributors/edit/webservice',
                        dataType: 'json',
                        success: function(json) {
                            $.unblockUI();
                            if (json.say == "ok") {
                                var i = $(".contributor-id").val();
                                contributors[i] = newContributor;

                                $.hideSubview();

                                toastr.success('the contributor has been modified successfully');
                            }
                        }
                    });
                } else {
                    $.mockjax({
                        url: '/contributors/new/webservice',
                        dataType: 'json',
                        responseTime: 1000,
                        responseText: {
                            say: 'ok'
                        }
                    });
                    $.ajax({
                        url: '/contributors/new/webservice',
                        dataType: 'json',
                        success: function(json) {
                            $.unblockUI();
                            if (json.say == "ok") {
                                contributors.push(newContributor);
                                $.hideSubview();

                                toastr.success('the contributor has been added successfully');
                            }
                        }
                    });
                }
            }
        });
    };

    var runSubViews = function() {
        $(".new-note").off().on("click", function() {
            subViewElement = $(this);
            subViewContent = subViewElement.attr('href');
            $.subview({
                content: subViewContent,
                onShow: function() {
                    editNote();
                },
                onClose: function() {
                    checkNote();
                },
                onHide: function() {
                    hideNote();
                }
            });
        });
        $(".read-all-notes").off().on("click", function() {
            subViewElement = $(this);
            subViewContent = subViewElement.attr('href');
            $.subview({
                content: subViewContent,
                startFrom: "right",
                onShow: function() {
                    readNote();
                }
            });
        });
        $(".read-note").off().on("click", function() {
            subViewElement = $(this);
            subViewContent = subViewElement.attr('href');
            subViewIndex = subViewElement.closest(".e-slider").data("owlCarousel").currentItem;
            $.subview({
                content: subViewContent,
                startFrom: "right",
                onShow: function() {
                    readNote(subViewIndex);
                }
            });
        });
        $(".new-event").off().on("click", function() {
            subViewElement = $(this);
            subViewContent = subViewElement.attr('href');
            $.subview({
                content: subViewContent,
                onShow: function() {
                    editEvent();
                },
                onHide: function() {
                    hideEditEvent();
                }

            });
        });
        $(".show-calendar").off().on("click", function() {
            subViewElement = $(this);
            subViewContent = subViewElement.attr('href');
            $.subview({
                content: subViewContent,
                startFrom: "right",
                onShow: function() {
                    showCalendar();
                },
                onHide: function() {
                    destroyCalendar();
                }
            });
        });
        $(".new-contributor").off().on("click", function() {
            subViewElement = $(this);
            subViewContent = subViewElement.attr('href');
            $.subview({
                content: subViewContent,
                onShow: function() {
                    editContributor();
                }
            });
        });
        $(".show-contributors").off().on("click", function() {
            subViewElement = $(this);
            subViewContent = subViewElement.attr('href');
            $.subview({
                content: subViewContent,
                startFrom: "right",
                onShow: function() {
                    showContributors();
                },
                onHide: function() {
                    destroyContributors();
                }
            });
        });
        $(".close-subview-button").off().on("click", function(e) {
            $(".close-subviews").trigger("click");
            e.preventDefault();
        });
    };




    var cloneNote = function(el, noteToSave) {

        var _clone_note = el.find(".item:first").clone(true);

        _clone_note.children(".panel-heading").find("h3").text(noteToSave.title).end().parent().children(".panel-body").find(".note-short-content").html(noteToSave.shortContent).end().find(".note-content").html(noteToSave.content).end().parent().children(".panel-footer").find("img").attr("src", noteToSave.avatar).end().find(".author-note").text(noteToSave.author).end().find("time").attr("title", moment(noteToSave.date)).text(moment(noteToSave.date).startOf('second').fromNow());

        return (_clone_note);
    };
    var runNoteFormValidation = function() {
        var formNote = $('.form-note');
        var errorHandler1 = $('.errorHandler', formNote);
        var successHandler1 = $('.successHandler', formNote);
        $.validator.addMethod("getEditorValue", function() {
            $("#noteEditor").val($('.form-note .summernote').code());
            if ($("#noteEditor").val() != "" && $("#noteEditor").val() != "<br>" && $("#noteEditor").val() != $('.form-note .summernote').attr("placeholder")) {
                $('#noteEditor').val('');
                return true;
            } else {
                return false;
            }
        }, '* This field is required.');
        formNote.validate({
            errorElement: "span", // contain the error msg in a span tag
            errorClass: 'help-block',
            errorPlacement: function(error, element) { // render error placement for each input type
                if (element.attr("type") == "radio" || element.attr("type") == "checkbox") { // for chosen elements, need to insert the error after the chosen container
                    error.insertBefore($(element).closest('.form-group').children('div').children().last());
                } else if (element.attr("name") == "dd" || element.attr("name") == "mm" || element.attr("name") == "yyyy") {
                    error.insertBefore($(element).closest('.form-group').children('div'));
                } else {
                    error.insertBefore(element);
                    // for other inputs, just perform default behavior
                }
            },
            ignore: "",
            rules: {
                noteTitle: {
                    minlength: 2,
                    required: true
                },
                noteEditor: "getEditorValue"
            },
            messages: {
                noteTitle: "* Please specify your first name"
            },
            invalidHandler: function(event, validator) { //display error alert on form submit
                successHandler1.hide();
                errorHandler1.show();
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
                successHandler1.show();
                errorHandler1.hide();
                $.blockUI({
                    message: '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
                });
                var noteToSave = new Object;
                noteToSave.title = $('.form-note .note-title').val(), noteToSave.shortContent = jQuery.truncate($note.code(), {
                    length: 200
                }), noteToSave.content = $note.code(), noteToSave.author = "Peter Clark", noteToSave.avatar = "assets/images/avatar-1-small.jpg", noteToSave.date = new Date();
                $.mockjax({
                    url: '/note/new/webservice',
                    dataType: 'json',
                    responseTime: 1000,
                    responseText: {
                        say: 'ok'
                    }
                });

                $.ajax({
                    url: '/note/new/webservice',
                    dataType: 'json',
                    success: function(json) {
                        $.unblockUI();
                        if (json.say == "ok") {
                            sliderNotes.data('owlCarousel').addItem(cloneNote($("#readNote"), noteToSave), 0);
                            if (widgetNotes.length) {
                                widgetNotes.data('owlCarousel').addItem(cloneNote($("#notes"), noteToSave), 0);
                            }
                            $('.form-note .note-title').val("");
                            $note.code($note.attr("placeholder"));
                            $.hideSubview();
                            //widgetNotes.data('owlCarousel').flexAnimate(0);
                            toastr.success(noteToSave.author + ' added a new note!');
                        }
                    }
                });
            }
        });
    };


    var editNote = function() {
        $(".delete-note").off().on("click", function(e) {
            subViewElement = $(this);

            subViewIndex = subViewElement.closest(".e-slider").data("owlCarousel").currentItem;

            bootbox.confirm("Are you sure you want to delete this note?", function(result) {
                if (result) {
                    if (widgetNotes.length) {
                        widgetNotes.data('owlCarousel').removeItem(subViewIndex);
                        widgetNotes.data('owlCarousel').jumpTo(0);
                    }
                    sliderNotes.data('owlCarousel').removeItem(subViewIndex);
                    sliderNotes.data('owlCarousel').jumpTo(0);
                };
            });
        });
        $note = $(".form-note .summernote");
        $note.summernote({

            oninit: function() {
                if ($note.code() == "" || $note.code().replace(/(<([^>]+)>)/ig, "") == "") {
                    $note.code($note.attr("placeholder"));
                }
            },
            onfocus: function(e) {
                if ($note.code() == $note.attr("placeholder")) {
                    $note.code("");
                }
            },
            onblur: function(e) {
                if ($note.code() == "" || $note.code().replace(/(<([^>]+)>)/ig, "") == "") {
                    $note.code($note.attr("placeholder"));
                }
            },
            onkeyup: function(e) {
                $("span[for='noteEditor']").remove();
            },


            toolbar: [
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
            ]
        });
    };
    return {
        init: function() {
            setCalendarEvents();
            runEventFormValidation();
            setContributorsList();
            runContributorsFormValidation();
            runSubViews();
            readNote();
            runNoteFormValidation();
        }
    };
}();