$(document).ready(function() {
    $('select').select2();
    
    $(".js-example-basic-multiple-limit").select2({
        maximumSelectionLength: 2
    });
    
    $(".js-example-tokenizer").select2({
        tags: true,
        tokenSeparators: [',', ' ']
    });
    
    var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];
 
    $(".js-example-data-array").select2({
        data: data
    });
});