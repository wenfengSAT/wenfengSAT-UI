/**
 * Created by mosaddek on 3/9/15.
 */

//tags input

$('.tags-input').each(function() {
    var tagsType = $(this).data('type')
    var highlightColor = $(this).data('highlight-color')
    if (tagsType === 'tags') {
        $(this).tagsInput({
            width: 'auto'
        });
    }
    if (tagsType === 'highlighted-tags') {
        $(this).tagsInput({
            width: 'auto',
            onChange: function(elem, elem_tags) {
                var languages = ['php', 'ruby', 'javascript'];
                $('.tag', elem_tags).each(function() {
                    if ($(this).text().search(new RegExp('\\b(' + languages.join('|') + ')\\b')) >= 0) $(this).css('background-color', highlightColor);
                });
            }
        });
    }
    if (tagsType === 'autocomplete-tags') {
        $(this).tagsInput({
            width: 'auto',
            //autocomplete_url:'test/fake_plaintext_endpoint.html' //jquery.autocomplete (not jquery ui)
            autocomplete_url: 'data/fake_json_endpoint.html' // jquery ui autocomplete requires a json endpoint
        });
    }
});

