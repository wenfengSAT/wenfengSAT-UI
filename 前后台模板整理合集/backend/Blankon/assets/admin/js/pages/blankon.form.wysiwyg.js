var BlankonFormWysiwyg = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonFormWysiwyg.bootstrapWYSIHTML5();
            BlankonFormWysiwyg.summernote();
        },

        // =========================================================================
        // BOOTSTRAP WYSIHTML5
        // =========================================================================
        bootstrapWYSIHTML5: function () {
            if($('#wysihtml5-textarea').length){
                $('#wysihtml5-textarea').wysihtml5();
            }
        },

        // =========================================================================
        // SUMMERNOTE
        // =========================================================================
        summernote: function () {
            if($('#summernote-textarea').length){
                $('#summernote-textarea').summernote();
            }
        }

    };

}();

// Call main app init
BlankonFormWysiwyg.init();