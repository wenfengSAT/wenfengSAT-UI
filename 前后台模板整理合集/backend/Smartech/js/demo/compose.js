$('document').ready(function() {
    var emailReveal = false;
    $('#email-reveal-btn').on('click', function() {
        if (emailReveal) {
            $(this).text('More Options')
            emailReveal = false;
        } else {
            $(this).text('Less Options')
            emailReveal = true;
        }

        $('#email-reveal').slideToggle()
    })

    tinymce.init({
        selector: '#message',
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