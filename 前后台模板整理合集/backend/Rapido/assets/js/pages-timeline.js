var Timeline = function () {	
	"use strict";
    //function to initiate Pulsate
    var runTimeline = function () {
        var separator, anchor;
		$('.timeline-scrubber').scrollToFixed({
			marginTop: $('header').outerHeight() + 10
		}).find("a").on("click", function(e){					
			anchor = $(this).data("separator");
			$("body").scrollTo(anchor, 300);
			e.preventDefault();
		});
		$(".date_separator").appear().on('appear', function(event, $all_appeared_elements) {
			separator = '#' + $(this).attr("id");
			$('.timeline-scrubber').find("li").removeClass("selected").find("a[href = '" + separator + "']").parent().addClass("selected");
		}).on('disappear', function(event, $all_disappeared_elements) {   				
			separator = $(this).attr("id");
			$('.timeline-scrubber').find("a").find("a[href = '" + separator + "']").parent().removeClass("selected");
		});
    };
    return {
        //main function to initiate template pages
        init: function () {
            runTimeline();
        }
    };
}();