/**
 * Create by: Tiny
 * Version: 1.2
 * Url: http://www.tinyliu.com/
 */

(function($, window, undefined) {
    var $allDropdowns = $();
   
    $.fn.dropdownHover = function(options) {
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function() {
            var $this = $(this).parent(),
                defaults = {
                    delay: 0,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                options = $.extend(true, {}, defaults, options, data),
                timeout;

            $this.hover(function() {
                if(options.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                window.clearTimeout(timeout);
                $(this).addClass('open');
            }, function() {
                timeout = window.setTimeout(function() {
                    $this.removeClass('open');
                }, options.delay);
            });
        });
    };
})(jQuery, this);

$(function(){
	$('.magnific').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
		// other options
	});

	//警告框链接加样式
	$(".alert").children("p").children("a").addClass("alert-link");
	$(".alert").children("a").addClass("alert-link");

	//侧边栏分类目录
	$("#widget-cats li").addClass("list-group-item");
	 //文章页图片特效
    //$('.fancybox').fancybox();
	$("select").addClass("form-control");
	//$("#commentform").addClass('form-horizontal');
	$("#commentform #submit").addClass('btn btn-primary btn-block');
	//$("#commentform .form-submit").addClass("col-xs-12");
	
	var winEl = $(window);
		
	/*totop*/
	$('#sidebar .up').click(function(){
		$('html,body').animate({scrollTop:0},300);
	});
	
	/*滚动监听*/
    winEl.scroll(function () {
        /*nav*/
        var navEl = $('#nav');
        var navPl = $(".sub-header");

        if (!navEl.data('noscroll')) {
            if (winEl.scrollTop() > 20) {
                navEl.addClass('scroll animated fadeInDown');
            } else {
                navEl.removeClass('scroll animated fadeInDown');
            }
        }

        if (!navPl.data('noscroll')) {
            if (winEl.scrollTop() > 234) {
                navPl.addClass('scroll animated fadeInDown');
            } else {
                navPl.removeClass('scroll animated fadeInDown');
            }
        }
    }).scroll();
	
	/*tip*/
	$('#sidebar li').hover(function(){
		$('.tip',this).show().stop().animate({'right':'80px','opacity':1},300);
	},function(){
		$('.tip',this).stop().animate({'right':'58px','opacity':0},300,function(){
			$(this).hide();
		});
	});
	
	/*Hover dropdown*/
	winEl.resize(function(){
		if(winEl.width()>750){
			$('.dropdown-toggle').dropdownHover();
		}else{
			$('.dropdown-toggle').parent().unbind().end().dropdown();
		}
	}).resize();
});

window.onload=  function () {
    // $('#moveHeight').css('display','none');
    // var companyH = $("#search_list").height();
    // var b = companyH+'px';
    // $('#getHeight').css("height",b)
};
//重新得到验证码
function changeValidate(self){
	self.src = "validateImg.php?time=" + new Date();
}

//写邮箱的免费试用
function emailApply(self){
	location.href = "/applydemo?email=" + $(self).prev().val();
}

$('#nextRE').click(function () {

    $('#nextRE').addClass('clickhide');
    $('#pre').removeClass('clickhide');
    $('.one-show').addClass('clickhide');
    $('.two-show').removeClass('clickhide');

});

$('#pre').click(function () {
    $('#pre').addClass('clickhide');
    $('#nextRE').removeClass('clickhide');
    $('.two-show').addClass('clickhide');
    $('.one-show').removeClass('clickhide');

});


// console.log($("#search_list .list-group-item"));

