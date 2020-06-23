var UISubview = function() {
	"use strict";
	//function to initiate bootstrap extended modals
	var initSubview = function() {
		$(".sv-callback1").on("click", function() {
					$.subview({
						content: "#example-subview-1",
						onShow: function() {
							bootbox.alert("Do something when the subview is shown!");
						}
					});
				});
		$(".sv-callback2").on("click", function() {					
			$.subview({
				content: "#example-subview-1",
				startFrom: "right",
				onClose: function() {
					bootbox.confirm("Are you sure you want to close subview?", function(result) {
						if(result) {
							$.hideSubview();
						};
					});						
				}
			});
		});
		$(".sv-callback3").on("click", function() {
			$.subview({
				content: "#example-subview-1",
				startFrom: "right",
				onHide: function() {
					bootbox.alert("Do something when the subview is hidden!");
				}
			});
		});
	};
	return {
		init : function() {
			initSubview();
		}
	};
}(); 