$(function () {

    //BEGIN ACCORDION WITH ICONS
    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('glyphicon-chevron-left glyphicon-chevron-down');
    }

    $('#accordion1').on('hidden.bs.collapse', toggleChevron);
    $('#accordion1').on('shown.bs.collapse', toggleChevron);
    //END ACCORDION WITH ICONS

    //BEGIN JQUERY SLIMSCROLL
    $('.scrollspy-example').slimScroll({
        "height": "200",
        "railVisible": true,
        "alwaysVisible": true
    });
    //END JQUERY SLIMSCROLL

});

