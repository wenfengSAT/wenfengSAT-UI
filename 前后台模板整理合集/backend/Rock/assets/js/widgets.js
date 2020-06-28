$(function () {

    /* Begin jQuery DateRangePicker */
    $('#departure, #return, #date').daterangepicker({
        singleDatePicker: true
    });
    /* Begin jQuery DateRangePicker */

    /* Begin jQuery Time Picker */
    $('.timepicker').timepicker({ 'timeFormat': 'h:i A' });
    /* End jQuery Time Picker */

    /* Begin Chats */
    $('.chat-scroll').slimScroll({
        "width": '100%',
        "height": '300px',
        "wheelStep": 5
    });
    /* End Chats */

});

