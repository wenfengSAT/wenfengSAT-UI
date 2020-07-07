$(document).ready(function(){
	/** DEMO PANEL **/
	$("#demo-panel").click(function(){
		"use strict";
		$(".box-demo").toggleClass("tugel");
	});
	$("#color-reset").click(function(){
		"use strict";
		RemoveClasses()
		$(".fa-meh-o").addClass("icon-primary");
	});
	$("#btn-reset").click(function(){
		"use strict";
		RemoveClasses()
		$(".fa-meh-o").addClass("icon-primary");
	});
	$("#bg-success").click(function(){
		"use strict";
		RemoveClasses()
		$(".login").addClass("bg-success");
		$(".fa-meh-o").addClass("icon-success");
	});
	$("#bg-info").click(function(){
		"use strict";
		RemoveClasses()
		$(".login").addClass("bg-info");
		$(".fa-meh-o").addClass("icon-info");
	});
	$("#bg-danger").click(function(){
		"use strict";
		RemoveClasses()
		$(".login").addClass("bg-danger");
		$(".fa-meh-o").addClass("icon-danger");
	});
	$("#bg-warning").click(function(){
		"use strict";
		RemoveClasses()
		$(".login").addClass("bg-warning");
		$(".fa-meh-o").addClass("icon-warning");
	});
	$("#bg-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".login").addClass("bg-dark");
		$(".fa-meh-o").addClass("icon-dark");
	});
	
	function RemoveClasses() {
		"use strict";
		$(".login").removeClass("bg-success");
		$(".login").removeClass("bg-info");
		$(".login").removeClass("bg-danger");
		$(".login").removeClass("bg-warning");
		$(".login").removeClass("bg-dark");
		$(".fa-meh-o").removeClass("icon-primary");
		$(".fa-meh-o").removeClass("icon-success");
		$(".fa-meh-o").removeClass("icon-info");
		$(".fa-meh-o").removeClass("icon-danger");
		$(".fa-meh-o").removeClass("icon-warning");
		$(".fa-meh-o").removeClass("icon-dark");
	}
	/** END DEMO PANEL **/
});