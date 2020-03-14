//Activates Bootstrap Tooltips/Popovers in Example
$(function() {

    // tooltip demo
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    })

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    // popover demo
    $("[data-toggle=popover]")
        .popover()

})

//Messenger Examples
$("#info-message-demo").click(function() {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
        theme: 'flat'
    }

    Messenger().post({
        message: 'This is an example of an info notification. You can close this message using the box to the right.',
        type: 'info',
        showCloseButton: true
    });

});

$("#error-message-demo").click(function() {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
        theme: 'flat'
    }
    Messenger().post({
        message: 'This is an example of an error notification. You can close this message using the box to the right.',
        type: 'error',
        showCloseButton: true
    });

});

$("#success-message-demo").click(function() {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
        theme: 'flat'
    }

    Messenger().post({
        message: 'This is an example of a success notification. You can close this message using the box to the right.',
        type: 'success',
        showCloseButton: true
    });

});

$("#bottom-right-message-demo").click(function() {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
        theme: 'flat'
    }

    Messenger().post({
        message: 'This is an example of a bottom right notification!',
        id: "Only-one-message",
        type: 'success',
        showCloseButton: true
    });

});

$("#bottom-left-message-demo").click(function() {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-left',
        theme: 'flat'
    }

    Messenger().post({
        message: 'This is an example of a bottom left notification!',
        id: "Only-one-message",
        type: 'success',
        showCloseButton: true
    });

});

$("#top-right-message-demo").click(function() {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
        theme: 'flat'
    }

    Messenger().post({
        message: 'This is an example of a top right notification!',
        id: "Only-one-message",
        type: 'success',
        showCloseButton: true
    });

});

$("#top-left-message-demo").click(function() {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-top messenger-on-left',
        theme: 'flat'
    }

    Messenger().post({
        message: 'This is an example of a top left notification!',
        id: "Only-one-message",
        type: 'success',
        showCloseButton: true
    });

});

$("#cancel-message-demo").click(function() {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
        theme: 'flat'
    }

    msg = Messenger().post({
        message: 'You can cancel this message and it will disappear completely.',
        id: "Only-one-message",
        type: 'success',
        showCloseButton: true,
        actions: {
            cancel: {
                action: function() {
                    msg.hide()
                }
            }
        }
    });

});

$("#interactive-message-demo").click(function() {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
        theme: 'flat'
    }

    msg = Messenger().post({
        message: 'This message in interactive! Cancel this message to see what happens.',
        id: "Only-one-message",
        type: 'error',
        showCloseButton: true,
        actions: {
            cancel: {
                action: function() {
                    msg.update({
                        message: 'Message cancelled!',
                        type: 'success',
                        actions: false
                    })
                }
            }
        }
    });

});

$("#clear-message-demo").click(function() {

    Messenger().hideAll();

});
