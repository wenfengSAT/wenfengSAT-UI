/**
 * Created by mosaddek on 3/2/15.
 */

$(document).ready(function () {

    $('#todo-list').sortable();

    $('.chk-todo input').iCheck({
        checkboxClass: 'icheckbox_minimal-green',
        radioClass: 'iradio_minimal-green'
    });
    $('.chk-todo input').on('ifChecked', function (event) {

        $(this).parents('li').addClass('todo-done');
    });
    $('.chk-todo input').on('ifUnchecked', function (event) {


        $(this).parents('li').removeClass('todo-done');
    });

    $('.todo-remove').on('click', function (event) {
        event.preventDefault();
        $(this).parents('.action-todo').parents('li').remove();
    });

});