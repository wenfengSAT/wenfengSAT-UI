var BlankonFormElement = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonFormElement.chosenSelect();
            BlankonFormElement.textareaMaxlength();
            BlankonFormElement.textareaAutosize();
        },

        // =========================================================================
        // CHOSEN SELECT
        // =========================================================================
        chosenSelect: function () {
            if($('.chosen-select').length){
                $('.chosen-select').chosen();
            }
        },

        // =========================================================================
        // TEXTAREA MAXLENGTH
        // =========================================================================
        textareaMaxlength: function () {
            if($('.character-limit').length){
                $('.character-limit').maxlength({
                    alwaysShow: true,
                    threshold: 20,
                    warningClass: "label label-success",
                    limitReachedClass: "label label-danger",
                    separator: ' of ',
                    preText: 'You have ',
                    postText: ' chars remaining.',
                    placement: 'centered-right'
                });
            }
        },

        // =========================================================================
        // TEXTAREA AUTOSIZE
        // =========================================================================
        textareaAutosize: function () {
            if($('.autosize').length){
                $('.autosize').autosize();
            }
        }

    };

}();

// Call main app init
BlankonFormElement.init();