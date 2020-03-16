function inboxWidthFunctions(e) {
	
	$('#content').css('padding','0 15px');
			
	var sidebarLeftHeight = $('#sidebar-left').outerHeight();
	var contentHeight = $('#content').height();
	var contentHeightOuter = $('#content').outerHeight();
	var brand = $('.navbar-brand').width();
	
    var winHeight = $(window).height();
    var winWidth = $(window).width();

	if (winWidth > 767) {
		
		var max = Math.max(sidebarLeftHeight,contentHeightOuter);
		
		$('.inbox-menu').css('min-height',max);
		$('.contacts').css('min-height',max);
		$('.messages').css('min-height',max);
		$('.message').css('min-height',max);
		
	} else {
		
		$('.inbox-menu').css('min-height','');
		$('.contacts').css('min-height','');
		$('.messages').css('min-height','');
		$('.message').css('min-height','');
		
	}

	if (winWidth > 767 && $('#sidebar-left').hasClass('minified')) {
		
		var inboxMenuWidth = brand - 40;
		
		$('.inbox-menu').css('width',inboxMenuWidth);
		$('.contacts').css('width',inboxMenuWidth).css('margin-right','-14px');
		
		if($('#sidebar-left').is(':visible')) {
			var contentWidth = ((winWidth - 40) / 2) - inboxMenuWidth;
		} else {
			var contentWidth = ((winWidth) / 2) - inboxMenuWidth;
		}
		
		$('.messages').css('width',contentWidth);
		$('.message').css('width',contentWidth);
				
	} else {
		$('.inbox-menu').css('width','');
		$('.contacts').css('width','');
		$('.messages').css('width','');
		$('.message').css('width','');		
	}
	 
	
	if (winWidth < 768) {
		
	} else {
		
	}
	   
}

$(window).bind("resize", inboxWidthFunctions);

$(document).ready(function(){
	inboxWidthFunctions();
	
	$('#main-menu-min').click(function(){
		inboxWidthFunctions();
	});
	
	$('#main-menu-toggle').click(function(){
		inboxWidthFunctions();
	});
	
});

$(document).ready(function(){
	
	if($('.messages-list').length) {
		
		/* ---------- Check / Uncheck Checkbox ---------- */
		$('.messages-list').on('click', '.fa-square-o', function(){
			
			$(this).removeClass('fa-square-o').addClass('fa-check-square-o');
			
		});
		
		$('.messages-list').on('click', '.fa-check-square-o', function(){
			
			$(this).removeClass('fa-check-square-o').addClass('fa-square-o');
			
		});
		
		/* ---------- Check / Uncheck Stars ---------- */
		$('.messages-list').on('click', '.fa-star-o', function(){
			
			$(this).removeClass('fa-star-o').addClass('fa-star');
			
		});
		
		$('.messages-list').on('click', '.fa-star', function(){
			
			$(this).removeClass('fa-star').addClass('fa-star-o');
			
		});	
		
		/* ---------- White icons in active li---------- */
		$('.action').find('i.fa-square-o').replaceWith('<i class="fa fa-square-o"></i><i class="fa fa-square"></i>');
		$('.action').find('i.fa-star-o').replaceWith('<i class="fa fa-star-o"></i><i class="fa fa-star bg"></i>');
		
		$('.messages-list > li').click(function(){
			
			$(this).parent().find('li').each(function(){
				$(this).removeClass('active');
			});
			
			$(this).addClass('active').removeClass('unread');
			
		});
	
	}
	
	/* ---------- Placeholder Fix for IE ---------- */
	$('input, textarea').placeholder();

	/* ---------- Auto Height texarea ---------- */
	$('textarea').autosize();   
	
});