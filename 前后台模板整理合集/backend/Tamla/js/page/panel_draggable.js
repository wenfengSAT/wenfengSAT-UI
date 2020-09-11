$(function() {
    "use strict";
	
	
	 $("#sortable_panels").sortable({
                connectWith: ".portlet",
                items: ".portlet", 
                opacity: 0.8,
                coneHelperSize: true,
                placeholder: 'portlet-sortable-placeholder',
                forcePlaceholderSize: true,
                tolerance: "pointer",
                helper: "clone",
                cancel: ".portlet-sortable-empty",
                revert: 250, // animation in milliseconds
                update: function(b, c) {
                    if (c.item.prev().hasClass("portlet-sortable-empty")) {
                        c.item.prev().before(c.item);
                    }                    
                }
            });
	
	
	
});

