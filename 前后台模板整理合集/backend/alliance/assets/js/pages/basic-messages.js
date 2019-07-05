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

        var msgListing = $('#message-table > tbody > tr > td');
        var msgCheckbox = $('#message-table > tbody > tr input[type=checkbox]');

        // on message table checkbox click, toggle highlighted class
        msgCheckbox.on('click', function() {
            $(this).parents('tr').toggleClass('highlight');
        });

        // on message table row click, redirect page. Unless target was a checkbox
        msgListing.not(":first-child").on('click', function(e) {

            // stop event bubble if clicked item is not a checkbox
            e.stopPropagation();
            e.preventDefault();

            // Redirect to message compose page if clicked item is not a checkbox
            window.location = "basic-messages-single.html";
        });

        // On button click display quick compose message form
        $('#quick-compose').on('click', function() {

            // Admin Dock Plugin
            $('.quick-compose-form').dockmodal({
                minimizedWidth: 260,
                width: 470,
                height: 480,
                title: 'Compose Message',
                initialState: "docked",
                buttons: [{
                    html: "Send",
                    buttonClass: "btn btn-primary btn-sm",
                    click: function(e, dialog) {
                        // do something when the button is clicked
                        dialog.dockmodal("close");

                        // after dialog closes fire a success notification
                        setTimeout(function() {
                            msgCallback();
                        }, 500);
                    }
                }]
            });
        });

        // example email compose success notification
        function msgCallback() {
            (new PNotify({
                title: 'Message Success!',
                text: 'Your message has been <b>Sent.</b>',
                hide: false,
                type: 'success',
                addclass: "mt50",
                buttons: {
                    closer: false,
                    sticker: false
                },
                history: {
                    history: false
                }
            }));
        };

        // Init Summernote
        $('.summernote-quick').summernote({
            height: 275, //set editable area's height
            focus: false, //set focus editable area after Initialize summernote
            toolbar: [
                ['style', ['bold', 'italic', 'underline', ]],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
            ]
        });
    });

})(jQuery);
