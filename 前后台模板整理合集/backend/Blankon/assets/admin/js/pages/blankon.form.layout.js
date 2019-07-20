var BlankonFormLayout = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonFormLayout.chosenSelect();
        },

        // =========================================================================
        // CHOSEN SELECT
        // =========================================================================
        chosenSelect: function () {
            if($('.chosen-select').length){
                $('.chosen-select').chosen();
            }
        }

    };

}();

// Call main app init
BlankonFormLayout.init();