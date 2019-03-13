jQuery(document).ready(function() {
    $('#panel-advancedoptions').panels({
        localStorage: false, 
        sortable: true,
        toggleColors: true
    });

    //Todo 1

    $("#sortable-tasks, #completed-tasks").sortable({
          connectWith: ".connectedSortable",
          receive: function (event, ui) {
            $(ui.item[0]).find('.iCheck-helper')[0].dropped = true;
            $(ui.item[0]).find('.iCheck-helper').click()
          }
        }).disableSelection();

    $('#sortable-tasks .iCheck-helper, #completed-tasks .iCheck-helper').on('click', function () {
        if ($(this)[0].dropped == true) { $(this)[0].dropped = false; return; }
        if ($(this).closest('#sortable-tasks').length)
            $(this).closest('li').appendTo('#completed-tasks');
        else
            $(this).closest('li').appendTo('#sortable-tasks');
    });

    //Todo 2

    $("#sortable-tasks2, #completed-tasks2").sortable({
          connectWith: ".connectedSortable2",
          receive: function (event, ui) {
            $(ui.item[0]).find('.iCheck-helper')[0].dropped = true;
            $(ui.item[0]).find('.iCheck-helper').click()
          }
        }).disableSelection();

    $('#sortable-tasks2 .iCheck-helper, #completed-tasks2 .iCheck-helper').on('click', function () {
        if ($(this)[0].dropped == true) { $(this)[0].dropped = false; return; }
        if ($(this).closest('#sortable-tasks2').length)
            $(this).closest('li').appendTo('#completed-tasks2');
        else
            $(this).closest('li').appendTo('#sortable-tasks2');
    });
});