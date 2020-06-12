$.fn.isBound = function (type, fn) {
    var data = this.data('todos')[type];
    if (data === undefined || data.length === 0) {
        return false;
    }
    return (-1 !== $.inArray(fn, data));
};
$(document).ready(function () {
    function runBind() {
        $('.remove').on('click', function (e) {
            $currentListItem = $(this).closest('li');
            $currentListItem.remove();
        });
        $('.toggle').on('click', function (e) {
            var $currentListItemLabel = $(this).closest('li').find('label');
            /*
             * Do this or add css and remove JS dynamic css.
             */
            if ($currentListItemLabel.attr('data') == 'done') {
                $currentListItemLabel.attr('data', '');
                $currentListItemLabel.css('text-decoration', 'none');
            } else {
                $currentListItemLabel.attr('data', 'done');
                $currentListItemLabel.css('text-decoration', 'line-through');
            }
        });
    }
    $todoList = $('#todo-list');
    $('#new-todo').keypress(function (e) {
        if (e.which === EnterKey) {
            $('.remove').off('click');
            $('.toggle').off('click');
            var todos = $todoList.html();
            todos += "" +
                "<li>" +
                "<div class='view'>" +
                "<input class='toggle' type='checkbox'>" +
                "<label data=''>" + " " + $('#new-todo').val() + "</label>" +
                "<a class='remove'></a>" +
                "</div>" +
                "</li>";
            $(this).val('');
            $todoList.html(todos);
            runBind();
            $('#taskslist').show();
        }
    }); // end if
    $('#add-todo').click(function (e) {
        $('.remove').off('click');
        $('.toggle').off('click');
        var todos = $todoList.html();
        todos += "" +
            "<li>" +
            "<div class='view'>" +
            "<input class='toggle' type='checkbox'>" +
            "<label data=''>" + " " + $('#new-todo').val() + "</label>" +
            "<a class='remove'></a>" +
            "</div>" +
            "</li>";
        $(this).val('');
        $todoList.html(todos);
        runBind();
        $('#taskslist').show();
    });
});