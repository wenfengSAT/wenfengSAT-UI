var BlankonSearchPage = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonSearchPage.chosenSelect();
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
BlankonSearchPage.init();