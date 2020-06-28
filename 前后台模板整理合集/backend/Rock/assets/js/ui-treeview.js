$(function () {

    $('label.tree-toggler').click(function () {
        $(this).parent().children('ul.tree').toggle(300);
        $('> .pull-right > i', this).toggleClass('ion-ios7-plus-empty');
    });

});

