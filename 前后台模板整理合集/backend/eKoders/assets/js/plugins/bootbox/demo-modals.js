$(document).on("click", "#bb-confirm", function(e) {
	bootbox.confirm("Are you sure?", function(result) {
	//console.log("");
				
	}); 
});			
$(document).on("click", "#bb-reguler", function(e) {	
	bootbox.prompt("What is your name?", function(result) {                
		if (result === null) {                                             
			//Example: console.log("");                              
			} else {
			//Example: console.log("");                          
		}
	});
});	
$(document).on("click", "#bb-options", function(e) {
	bootbox.dialog({
		message: "<span class='bigger-110'>I am a custom dialog with small buttons</span>",
		buttons: 			
		{
			"success" :
				{
					"label" : "<i class='fa fa-check'></i> Success!",
					"className" : "btn-sm btn-success",
					"callback": function() {
					//Example: console.log("");
				}
				},
				"danger" :
					{
						"label" : "Danger!",
						"className" : "btn-sm btn-danger",
						"callback": function() {
						//Example: console.log("");
					}
				}, 
				"click" :
					{
						"label" : "Click ME!",
						"className" : "btn-sm btn-primary btn-line",
						"callback": function() {
						//Example: console.log("");
					}
				}
		}
	});
});			