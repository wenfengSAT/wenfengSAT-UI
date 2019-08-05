$(document).ready(function() { 
	
	
	// toggle skin select	
	$("#skin-select #toggle").click(function() { 



		if($(this).hasClass('active')) {
			$(this).removeClass('active')
			//$('#skin-select').animate({ left:0 }, 100);	
			$('#skin-select').css({"width":"200px"});
			$('.wrap-fluid, .sub-board').css({"width":"auto","margin-right":"200px",});
			

			$('#skin-select li').css({"text-align":"left"});
			$('#skin-select li span, .devider-title h3, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number').css({"display":"inline-block", "float":"none"});
			//$('body').css({"padding-left":"250px"});
			
			

			$('.ul.topnav h4, .hide-min-toggle').css({"display":"none"});
			$('.tooltip-tip2').addClass('tooltipster-disable');
			$('.tooltip-tip').addClass('tooltipster-disable');
			$('.datepicker-wrap').css({"position":"absolute", "right":"300px"});
			$('.skin-part').css({"visibility":"visible"});
			//$('#menu-showhide').css({"margin":"10px"});
		
			$('ul.topnav ul').css({"position":"relative", "right":"0px", "width":"100%", "margin-top":"0px"});
			$('#menu-showhide').css({"height":"auto", "margin":"-10px 0 0"});
			$('#skin-select li i').css({"top":"8px 0"});
			$('ul.topnav ul').css({"border-radius":"0", "padding":"15px 25px"});
			
		} else {
			$(this).addClass('active')
			
			//$('#skin-select').animate({ left:-200 }, 100);
			$('#skin-select').css({"width":"50px"});

			$('.wrap-fluid, .sub-board').css({"width":"auto", "margin-right":"50px"});
			$('#skin-select li').css({"text-align":"right"});
			$('#skin-select li span, .devider-title h3, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number').css({"display":"none"});
			//$('body').css({"padding-left":"50px"});
			$('.tooltip-tip2').removeClass('tooltipster-disable');
			$('.tooltip-tip').removeClass('tooltipster-disable');
			$('.datepicker-wrap').css({"position":"absolute", "right":"84px"});	
			$('.skin-part').css({"visibility":"visible"});
			$('.hide-min-toggle').css({"display":"block"});
			$('#menu-showhide').css({"height":"100vh", "margin":"40px 0 0"});

			$('ul.topnav ul').css({"position":"absolute", "right":"50px", "width":"180px", "margin-top":"-38px"});

			$('#skin-select li i').css({"top":"0", "left":"-11px", "padding":"8px 0"});

			$('ul.topnav ul').css({"border-radius":"4px 0 0 4px", "padding":"5px 10px"});
			
	

		}
		return false;
	});
	
	
	// show skin select for a second
	setTimeout(function(){ $("#skin-select #toggle").addClass('active').trigger('click'); },10)
	
	
}); // end doc.ready

