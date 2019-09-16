$(document).ready(function() { 
	
	
	// toggle skin select	
	$("#skin-select #toggle").click(function() { 



		if($(this).hasClass('active')) {
			$(this).removeClass('active')
		
			$('#skin-select').css({"width":"260px"});
			$('.wrap-fluid').css({"width":"auto","margin-left":"260px",});
			$('#skin-select li').css({"text-align":"left"});
			$('#skin-select li span, .devider-title h3, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number').css({"display":"inline-block", "float":"none"});
			$('.ul.topnav h4, .hide-min-toggle').css({"display":"none"});
			$('.tooltip-tip2').addClass('tooltipster-disable');
			$('.tooltip-tip').addClass('tooltipster-disable');
			$('.datepicker-wrap').css({"position":"absolute", "right":"300px"});
			$('.skin-part').css({"visibility":"visible"});
			$('#menu-showhide').css({"height":"auto", "margin":"-13px 0 0"});
				$('#skin-select li i').css({"top":"0", "left":"-15px", "padding":"8px 0"});
			$('ul.topnav ul').css({"border-radius":"0", "padding":"15px 25px"});

			$('img.admin-pic.img-circle').css({"margin":"20px 0 0 20px"});
			$('.profile span, .profile i, .bottom-list-menu li').css({"display":"block"});
			$(".profile h3").css({'display':'block'});
			$(".profile img").css({'width':'45px', 'height':'45px', 'top':'15px', 'left':'4px' });
			$(".profile").css({'top':'-13px'});
			    $('.top-bar-nest').css({
                    "position": "fixed",
                    "width": "auto",
                    "right": "0",
                    "z-index": "999",
                    "border-bottom": "1px solid #F9F9F9",
                    "left": "260px"
                });

	

			$('#menuwrapper').removeAttr('id').addClass();
			
			
		} else {
			$(this).addClass('active')
			
	
			$('#skin-select').css({"width":"50px"});
			$('.wrap-fluid').css({"width":"auto", "margin-left":"50px"});
			$('#skin-select li').css({"text-align":"right"});
			$('#skin-select li span, .devider-title h3, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number').css({"display":"none"});
			//$('.tooltip-tip2').removeClass('tooltipster-disable');
			//$('.tooltip-tip').removeClass('tooltipster-disable');
			$('.datepicker-wrap').css({"position":"absolute", "right":"84px"});	
			$('.skin-part').css({"visibility":"visible"});
			$('.hide-min-toggle').css({"display":"block"});
			$('#menu-showhide').css({"margin":"-10px 0px 0px"});
			$('#skin-select li i').css({"top":"0", "left":"-30px", "padding":"8px 0"});
			$('ul.topnav ul').css({"border-radius":"0", "padding":"5px 10px"});
			$('ul.topnav ul').removeAttr('style');
			$('#menuwrapper ul li ul').css({"display":"inline-grid!important"});
			$('.profile span, .profile i, .bottom-list-menu li').css({"display":"none"});
		
			$('img.admin-pic.img-circle').css({"margin":"18px 0 0 4px"});
			$('.accordion-nav').removeAttr('class').addClass('topnav');
			$(".side-bar").attr("id","menuwrapper");
			$(".profile h3").css({'display':'none'});
			$(".profile img").css({'width':'30px', 'height':'30px', 'top':'24px', 'left':'-3px' });
			$(".profile").css({'top':'-10px'});
			    $('.top-bar-nest').css({
                    "position": "fixed",
                    "width": "auto",
                    "right": "0",
                    "border-bottom": "1px solid #F9F9F9",
                     "z-index": "999",
                    "left": "65px"
                });



		}
		return false;
	});
	
	
	// show skin select for a second
	setTimeout(function(){ $("#skin-select #toggle").addClass('active').trigger('click'); },10)
	
	
}); // end doc.ready

