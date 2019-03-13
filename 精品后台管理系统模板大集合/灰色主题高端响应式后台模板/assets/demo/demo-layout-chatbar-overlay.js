$(function () {

    $('.chat-users>li').click(function(){
    	$('.infobar .widget').hide();
    	$('.chat-area').show();
    });

    $('#hidechatbtn').click(function(){
    	$('.infobar .widget').show();
    	$('.chat-area').hide();
    });

    // -------------------------------
    // Demo: Chatbar
    // -------------------------------

    $('.chat-input textarea').keypress(function (e) {
      if (e.which == 13) {

        var chatmsg = $(".chat-input textarea").val();
        var oo=$(".chat-history").html();

        var d=new Date();
        var n=d.toLocaleTimeString();


        if (!!$(".chat-input textarea").val()) {
            $(".chat-history").html(oo+ "<div class='chat-msg'><p>"+chatmsg+"</p><span class='timestamp'>"+n+"</span></div>");
        	//chatResizer($('.chat-history'));
        	initScrollSidebar($('.infobar'));
        	//$('.infobar').slimScroll(scrollTo : '0px');

        	var scrollTo_val = ($('.infobar').prop('scrollHeight') + 'px');
    		$('.infobar').slimScroll({scrollTo : scrollTo_val});



        	$(this).val(''); // empty textarea

        	return false;
      	}
      }
    });

});



function chatResizer(menu) { //change height of scroll based on sidebar viewport height
    if (menu.parent('.slimScrollDiv').size() === 1) { 
        menu.slimScroll({destroy: true});

        menu.removeAttr('style');
    }
    menu.slimscroll({height:getChatbarViewportHeight});
}

var getChatbarViewportHeight = function () {
    var h;

    t=$('.chat-user').offset().top;
    w=$(window).height();

    h=w-t-100;


    // if ($('body').hasClass('infobar-offcanvas')) {
    // //if (($('body').hasClass('infobar-offcanvas'))  || ($('body').hasClass('infobar-offcanvas')) ) {
    //   h = $(window).height();
    // } else {
    //     h = $(window).height() - $('header').height();
    // }
    return h;
}