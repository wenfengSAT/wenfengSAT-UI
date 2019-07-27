var DraggablePortlet = function () {

    return {
        //main function to initiate the module
        init: function () {

            if (!jQuery().sortable) {
                return;
            }

            $(".sortable").sortable({
                connectWith: ".sortable",
                items: ".panel",
                opacity: 0.8,
                coneHelperSize: true,
                placeholder: 'sortable-box-placeholder round-all',
                forcePlaceholderSize: true,
                tolerance: "pointer"
            });

            $(".column").disableSelection();

        }

    };

}();