$(document).ready(function(){
	/** DEMO PANEL **/
	$("#demo-panel").click(function(){
		"use strict";
		$(".box-demo").toggleClass("tugel");
	});
	$("#color-reset").click(function(){
		"use strict";
		RemoveClasses()
	});
	$("#btn-reset").click(function(){
		"use strict";
		RemoveClasses()
	});
	$("#change-color-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("white-color");
		$(".sidebar-left").addClass("light-color");
	});
	$("#change-primary-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("primary-color");
	});
	$("#change-info-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("info-color");
	});
	$("#change-success-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("success-color");
		$(".sidebar-left").removeClass("light-color");
	});
	$("#change-danger-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("danger-color");
	});
	$("#change-warning-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("warning-color");
	});
	$("#change-primary-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("primary-color");
		$(".sidebar-left").addClass("light-color");
	});
	$("#change-info-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("info-color");
		$(".sidebar-left").addClass("light-color");
	});
	$("#change-success-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("success-color");
		$(".sidebar-left").addClass("light-color");
	});
	$("#change-danger-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("danger-color");
		$(".sidebar-left").addClass("light-color");
	});
	$("#change-warning-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("warning-color");
		$(".sidebar-left").addClass("light-color");
	});
	$("#change-dark-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".sidebar-left").addClass("light-color");
	});
	
	$("#change-full-primary-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("primary-color");
		$(".top-navbar").addClass("primary-color");
		$(".sidebar-left").addClass("light-color");
	});
	$("#change-full-success-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("success-color");
		$(".top-navbar").addClass("success-color");
		$(".sidebar-left").addClass("light-color");
	});
	$("#change-full-info-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("info-color");
		$(".top-navbar").addClass("info-color");
		$(".sidebar-left").addClass("light-color");
	});
	$("#change-full-danger-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("danger-color");
		$(".top-navbar").addClass("danger-color");
		$(".sidebar-left").addClass("light-color");
	});
	$("#change-full-warning-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("warning-color");
		$(".top-navbar").addClass("warning-color");
		$(".sidebar-left").addClass("light-color");
	});
	$("#change-full-dark-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".top-navbar").addClass("dark-color");
		$(".sidebar-left").addClass("light-color");
	});
	
	$("#change-sidebar-primary-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("primary-color");
		$(".sidebar-left").addClass("primary-color");
	});
	$("#change-sidebar-success-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("success-color");
		$(".sidebar-left").addClass("success-color");
	});
	$("#change-sidebar-info-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("info-color");
		$(".sidebar-left").addClass("info-color");
	});
	$("#change-sidebar-danger-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("danger-color");
		$(".sidebar-left").addClass("danger-color");
	});
	$("#change-sidebar-warning-light").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("warning-color");
		$(".sidebar-left").addClass("warning-color");
	});
	
	$("#change-full-primary-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("primary-color");
		$(".top-navbar").addClass("primary-color");
		$(".sidebar-left").addClass("dark-color");
	});
	$("#change-full-success-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("success-color");
		$(".top-navbar").addClass("success-color");
		$(".sidebar-left").addClass("dark-color");
	});
	$("#change-full-info-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("info-color");
		$(".top-navbar").addClass("info-color");
		$(".sidebar-left").addClass("dark-color");
	});
	$("#change-full-danger-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("danger-color");
		$(".top-navbar").addClass("danger-color");
		$(".sidebar-left").addClass("dark-color");
	});
	$("#change-full-warning-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("warning-color");
		$(".top-navbar").addClass("warning-color");
		$(".sidebar-left").addClass("dark-color");
	});
	$("#change-full-primary").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("primary-color");
		$(".top-navbar").addClass("primary-color");
		$(".sidebar-left").addClass("primary-color");
	});
	$("#change-full-success").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("success-color");
		$(".top-navbar").addClass("success-color");
		$(".sidebar-left").addClass("success-color");
	});
	$("#change-full-info").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("info-color");
		$(".top-navbar").addClass("info-color");
		$(".sidebar-left").addClass("info-color");
	});
	$("#change-full-danger").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("danger-color");
		$(".top-navbar").addClass("danger-color");
		$(".sidebar-left").addClass("danger-color");
	});
	$("#change-full-warning").click(function(){
		"use strict";
		RemoveClasses()
		$(".logo-brand").addClass("warning-color");
		$(".top-navbar").addClass("warning-color");
		$(".sidebar-left").addClass("warning-color");
	});
	$("#change-full-dark").click(function(){
		"use strict";
		RemoveClasses()
		$(".top-navbar").addClass("dark-color");
	});
	
	function RemoveClasses() {
		"use strict";
		$(".logo-brand").removeClass("white-color");
		$(".logo-brand").removeClass("primary-color");
		$(".logo-brand").removeClass("info-color");
		$(".logo-brand").removeClass("success-color");
		$(".logo-brand").removeClass("danger-color");
		$(".logo-brand").removeClass("warning-color");
		$(".top-navbar").removeClass("primary-color");
		$(".top-navbar").removeClass("info-color");
		$(".top-navbar").removeClass("success-color");
		$(".top-navbar").removeClass("danger-color");
		$(".top-navbar").removeClass("warning-color");
		$(".top-navbar").removeClass("dark-color");
		$(".sidebar-left").removeClass("light-color");
		$(".sidebar-left").removeClass("primary-color");
		$(".sidebar-left").removeClass("info-color");
		$(".sidebar-left").removeClass("success-color");
		$(".sidebar-left").removeClass("danger-color");
		$(".sidebar-left").removeClass("warning-color");
	}
	/** END DEMO PANEL **/
});