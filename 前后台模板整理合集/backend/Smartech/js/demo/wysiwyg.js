$('document').ready(function() {
    tinymce.init({
        selector: '#textarea',
        skin: 'light',
        plugins: ['link image code'],
        setup: function(editor) {
            editor.on('change', function(e) {
                self.updateObject();
            });
        },
        extended_valid_elements: "span[!class]"
    });
});