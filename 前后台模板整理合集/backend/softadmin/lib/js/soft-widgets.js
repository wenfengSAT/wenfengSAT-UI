/*!
 * Soft Widgets v1.0.0
 */

 $(document).ready(function() {

  /* WIDGET INITIALIZE */
	$(".wdgt").each(function(index) {
		var wbtns = "";
		if($(this).attr("ajax-btn") == "true"){wbtns += "<i class='fa fa-refresh wdgt-ajax'></i>";}
		if($(this).attr("hide-btn") == "true"){wbtns += "<i class='fa fa-minus wdgt-hide'></i>";}
		if($(this).attr("close-btn") == "true"){wbtns += "<i class='fa fa-times wdgt-close'></i>";}
		$(this).find(".wdgt-header").html($(this).find(".wdgt-header").html() + "<span>" + wbtns + "</span>")
	});
	
	/* WIDGET HANDLERS */
	$(".wdgt-close").click(function() {$(this).parent().parent().parent().fadeOut(1500);});
	
	$(".wdgt-hide").click(function() {
		$(this).parent().parent().parent().find('.wdgt-body').slideToggle(250);
		if($(this).parent().find('.fa-minus').length){
			$(this).removeClass("fa-minus"); $(this).addClass("fa-plus");
		}else{
			$(this).removeClass("fa-plus"); $(this).addClass("fa-minus");
		}
	});
	
	$(".wdgt-ajax").click(function() {
		$(this).addClass("fa-spin");
		var ajaxPath = $(this).parent().parent().parent().attr('ajax-path');
		var wdgtBody = $(this).parent().parent().parent().find('.wdgt-body');
		$.ajax({url:ajaxPath,success:function(result){
			wdgtBody.html(result);
			$(this).removeClass("fa-spin");
		}});
	});
	
});