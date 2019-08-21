$(function(){
    $('.product-chooser').not('.disabled').find('.product-chooser-item').on('click', function(){
        $(this).parent().parent().find('.product-chooser-item').removeClass('selected');
        $(this).addClass('selected');
        $(this).find('input[type="radio"]').prop("checked", true);
    });
});