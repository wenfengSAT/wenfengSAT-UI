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

        // Enable Demo Loading
        Demo.init();

        // A "stack" controls the direction and position
        // of a notification. Here we create an array w
        // with several custom stacks that we use later
        var Stacks = {
            stack_top_right: {
                "dir1": "down",
                "dir2": "left",
                "push": "top",
                "spacing1": 10,
                "spacing2": 10
            },
            stack_top_left: {
                "dir1": "down",
                "dir2": "right",
                "push": "top",
                "spacing1": 10,
                "spacing2": 10
            },
            stack_bottom_left: {
                "dir1": "right",
                "dir2": "up",
                "push": "top",
                "spacing1": 10,
                "spacing2": 10
            },
            stack_bottom_right: {
                "dir1": "left",
                "dir2": "up",
                "push": "top",
                "spacing1": 10,
                "spacing2": 10
            },
            stack_bar_top: {
                "dir1": "down",
                "dir2": "right",
                "push": "top",
                "spacing1": 0,
                "spacing2": 0
            },
            stack_bar_bottom: {
                "dir1": "up",
                "dir2": "right",
                "spacing1": 0,
                "spacing2": 0
            },
            stack_context: {
                "dir1": "down",
                "dir2": "left",
                "context": $("#stack-context")
            }
        };

        // PNotify Plugin Event Init
        $('.notification').on('click', function(e) {
            var noteStyle = $(this).data('note-style');
            var noteShadow = $(this).data('note-shadow');
            var noteOpacity = $(this).data('note-opacity');
            var noteStack = $(this).data('note-stack');
            var width = "290px";

            // If notification stack or opacity is not defined set a default
            var noteStack = noteStack ? noteStack : "stack_top_right";
            var noteOpacity = noteOpacity ? noteOpacity : "1";

            // We modify the width option if the selected stack is a fullwidth style
            function findWidth() {
                if (noteStack == "stack_bar_top") {
                    return "100%";
                }
                if (noteStack == "stack_bar_bottom") {
                    return "70%";
                } else {
                    return "290px";
                }
            }

            // Create new Notification
            new PNotify({
                title: 'My Notification!',
                text: 'My notification text.',
                shadow: noteShadow,
                opacity: noteOpacity,
                addclass: noteStack,
                type: noteStyle,
                stack: Stacks[noteStack],
                width: findWidth(),
                delay: 1400
            });

        });
    });

})(jQuery);
