/*
 * Template name: Kertas - Responsive Bootstrap 3 Admin Template
 * Version: 1.0.0
 * Author: VergoLabs
 */

/* SKIN SETTING */
function initSkin() {	
	var setting = $("<div class='setting no-print' />").html("<i class='fa fa-gear fa-lg text-gray'></i>");
	var skin_setting = $("<div class='skin-setting no-print' />");
	
	skin_setting.append("<h5 style='margin: 0 0 5px 0; border-bottom: 1px solid #ddd; padding-bottom: 3px;'>Skins</h5>"
		+ "<a onclick='change_skin(\"skin-dark\");'><div class='skin-selector' style='background: #000000;'></div></a>"	
		+ "<a onclick='change_skin(\"skin-gray\");'><div class='skin-selector' style='background: #7d7d7d;'></div></a>"
		+ "<a onclick='change_skin(\"skin-light\");'><div class='skin-selector' style='background: #cdcdcd;'></div></a>"
		+ "<a onclick='change_skin(\"skin-blue\");'><div class='skin-selector' style='background: #007be9;'></div></a>"
		+ "<a onclick='change_skin(\"skin-green\");'><div class='skin-selector' style='background: #00b269;'></div></a>"
		+ "<a onclick='change_skin(\"skin-turquoise\");'><div class='skin-selector' style='background: #00cba3;'></div></a>"
		+ "<a onclick='change_skin(\"skin-purple\");'><div class='skin-selector' style='background: #a700d3;'></div></a>"
		+ "<a onclick='change_skin(\"skin-red\");'><div class='skin-selector' style='background: #dc1200;'></div></a>"
		+ "<a onclick='change_skin(\"skin-orange\");'><div class='skin-selector' style='background: #ff6600;'></div></a>"
		+ "<a onclick='change_skin(\"skin-yellow\");'><div class='skin-selector' style='background: #edc317;'></div></a>"
	);

	setting.click(function() {
		if (!$(this).hasClass("open")) {
			$(this).css("right", "150px");
			skin_setting.css("right", "0");
			$(this).addClass("open");
		} else {
			$(this).css("right", "0");
			skin_setting.css("right", "-150px");
			$(this).removeClass("open")
		}
	});

	$("body").append(setting);
	$("body").append(skin_setting);
}

/* CHANGE SKIN */
function change_skin(cls) {
	$("body").removeClass("skin-dark skin-gray skin-light skin-blue skin-green skin-turquoise skin-purple skin-red skin-orange skin-yellow");
	$("body").addClass(cls);
}

$(function() {
	"use strict";
	
	initSkin();
});

