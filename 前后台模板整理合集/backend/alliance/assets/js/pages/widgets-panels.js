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

        // Init plugins for ".calendar-widget"
        // plugins: FullCalendar
        //
        $('#calendar-widget').fullCalendar({
            contentHeight: 397,
            editable: true,
            events: [{
                title: 'Apple Conference',
                start: '2015-10-25',
                end: '2015-10-26',
                className: 'fc-event-success'
            }, {
                title: 'Sony Conference',
                start: '2015-11-15',
                end: '2015-11-16',
                className: 'fc-event-primary'
            }, {
                title: 'Microsoft Conference',
                start: '2015-11-22',
                end: '2015-11-24',
                className: 'fc-event-danger'
            }, ],
            eventRender: function(event, element) {
                // create event tooltip using bootstrap tooltips
                $(element).attr("data-original-title", event.title);
                $(element).tooltip({
                    container: 'body',
                    delay: {
                        "show": 100,
                        "hide": 200
                    }
                });
                // create a tooltip auto close timer
                $(element).on('show.bs.tooltip', function() {
                    var autoClose = setTimeout(function() {
                        $('.tooltip').fadeOut();
                    }, 3500);
                });
            }
        });

        // Init plugins for ".compose-widget"
        // plugins: Summernote
        //
        $('.summernote-quick').summernote({
            height: 179, //set editable area's height
            focus: false, //set focus editable area after Initialize summernote
            toolbar: [
                ['style', ['bold', 'italic', 'underline']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']]
            ]
        });

        // Init plugins for ".task-widget"
        // plugins: Custom Functions + jQuery Sortable
        //
        var taskWidget = $('div.task-widget');
        var taskItems = taskWidget.find('li.task-item');
        var currentItems = taskWidget.find('ul.task-current');
        var completedItems = taskWidget.find('ul.task-completed');

        // Init jQuery Sortable on Task Widget
        taskWidget.sortable({
            items: taskItems, // only init sortable on list items (not labels)
            handle: '.task-menu',
            axis: 'y',
            connectWith: ".task-list",
            update: function( event, ui ) {
                var Item = ui.item;
                var ParentList = Item.parent();

                // If item is already checked move it to "current items list"
                if (ParentList.hasClass('task-current')) {
                    Item.removeClass('item-checked').find('input[type="checkbox"]').prop('checked', false);
                }
                if (ParentList.hasClass('task-completed')) {
                    Item.addClass('item-checked').find('input[type="checkbox"]').prop('checked', true);
                }

            }
        });

        // Custom Functions to handle/assign list filter behavior
        taskItems.on('click', function(e) {
            e.preventDefault();
            var This = $(this);
            var Target = $(e.target);

            if (Target.is('.task-menu') && Target.parents('.task-completed').length) {
                This.remove();
                return;
            }

            if (Target.parents('.task-handle').length) {
                // If item is already checked move it to "current items list"
                if (This.hasClass('item-checked')) {
                    This.removeClass('item-checked').find('input[type="checkbox"]').prop('checked', false);
                }
                // Otherwise move it to the "completed items list"
                else {
                    This.addClass('item-checked').find('input[type="checkbox"]').prop('checked', true);
                }
            }

        });
    });

})(jQuery);
