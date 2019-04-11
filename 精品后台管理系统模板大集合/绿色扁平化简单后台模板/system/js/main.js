$(function(){
	document.oncontextmenu = function(){ 
		return false 
	};
	//当前用户
	$('.userslideDown').mouseover(function () {  
		$(this).children('.superUser').addClass('tri');
		$('.slidedownBox').addClass('anmpopup'); 
		$('#Pubheader', parent.document).css('height','auto'); 
	});  
	$('.userslideDown').mouseout(function () {
		$(this).children('.superUser').removeClass('tri');
		$('.slidedownBox').removeClass('anmpopup');
		$('#Pubheader', parent.document).css('height','86px'); 
	});
	
	//标签
    function Sperlabel(){
    	var spLabel=$('.super-label a');
    	var closeEm=$('.super-label a').append('<em></em>');
    	closeEm.find('em').hide();
    	spLabel.hover(function(){
    		$(this).find('em').fadeIn();
    	},function(){
    		$(this).find('em').fadeOut();
    	})
    	closeEm.find('em').click(function(){
    		$(this).parent().remove();
    	})
    	
    }
    //弹出框
// 	点击修改弹出层
    $(".sp-modify").click(function(){
		$(".layuiBg").css({
			display:"block",height:$(document).height(),
		});
		$(".imgXgbox").css({
			left:($("body").width()-$(".imgXgbox").width())/2-20+"px",
			top:($(window).height()-$(".imgXgbox").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	
//	点击添加分类弹出
	LabelAdd();	
	$(".sp-add ,.newPdBtn").click(function(){	
		$(".layuiBg").css({
			display:"block",height:$(document).height()
		});
		$(".addFeileibox").css({
			left:($("body").width()-$(".addFeileibox").width())/2-20+"px",
			top:($(window).height()-$(".addFeileibox").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	//修改弹出层
	$(".xc-xiugai-a ,.cg-xiugai-a").click(function(){			
		$(".layuiBg").css({
			display:"block",height:$(document).height()
		});
		$(".xcXgBox").css({
			left:($("body").width()-$(".xcXgBox").width())/2-20+"px",
			top:($(window).height()-$(".xcXgBox").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	//栏目管理
	var accordion_head = $('.colu-list > .colu-cont .li-1'),
	accordion_body = $('.colu-list > .colunext');
	accordion_head.parent().first().addClass('active').next().slideDown('normal');
	accordion_head.on('click', function(event) {
		event.preventDefault();
		if ($(this).parent().attr('class') != 'active'){
			accordion_body.slideUp('normal');
			$(this).parent().next().stop(true,true).slideToggle('normal');
			accordion_head.parent().removeClass('active');
			$(this).parent().addClass('active');
		}
	});
	$('.colu-next').hover(function(){
		$(this).addClass('on');
	},function(){
		$(this).removeClass('on');
	})
	$(".sp-column").click(function(){
		$(".layuiBg").css({
			display:"block",height:$(document).height()
		});
		$(".Columnbox").css({
			left:($("body").width()-$(".Columnbox").width())/2-20+"px",
			top:($(window).height()-$(".Columnbox").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	$(".colu-xg").click(function(){
		alert($(this).attr('data-id'));
		$(".Columnbox").fadeOut();
		$(".ColumnXgbox").css({
			left:($("body").width()-$(".ColumnXgbox").width())/2-20+"px",
			top:($(window).height()-$(".ColumnXgbox").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	
	$(".layerClose, .layuiBg ,.saveBtn ,.cancelBtn").click(function(){
		$(".layuiBg ,.imgXgbox ,.addFeileibox ,.Columnbox ,.ColumnXgbox ,.xcXgBox").fadeOut();
	});
	
	//获取标签 alert
    function labellen(){
	    $('.saveBtn').click(function(){
	    	var len=$('.addSortMain span.on').html();
	    	$('.addSortMain span').each(function(){
	    		if($(this).attr("class")=='on'){ 
					alert($(this).attr('data-id'))
				}
	    	})
	    });
    }
    labellen();
    //置顶
    $('.Top').on('click',function(){
    	$(this).toggleClass('toping');
    });
    //关闭
    $('.sp-close').on('click',function(){
    	 if($(this).attr("class")=="sp-close"){
    	 	$(this).addClass('closed').html('已关闭');
    	 }else{
    	 	$(this).removeClass('closed').html('关闭');
    	 }
    });
    //缩略图
    function ThumbLi(){
    	$('.Thumb_li').hover(function(){
	    	$(this).children('.bg').fadeIn();
	    },function(){
	    	$(this).children('.bg').fadeOut();
	    });
	    $(".Thumb_delete").click(function(){
	    	$(this).parent().parent('.Thumb_li').remove();
	    });
    }
    function LabelAdd(){
    	$('.addSortMain span').click(function(){
    		$(this).toggleClass('on');
    	});
    }
    function XcmngDlt(){
    	$('.subxc-list').hover(function(){
    		$(this).children('.img').find('.bg').fadeIn();
    	},function(){
    		$(this).children('.img').find('.bg').fadeOut();
    	})
    	$(".adelete-a").click(function(){
	    	$(this).parent().parent().parent('.subxc-list').remove();
	    });
    }
    function Tpzhongduan(){
    	$('.tp-zhongduan').hover(function(){
    		$('.hide-zd').show();
    	},function(){
    		$('.hide-zd').hide();
    	});
    	$('.tp-xl-box').hover(function(){
    		$(this).children('.hide-menu').show();
    	},function(){
    		$(this).children('.hide-menu').hide();
    	});
    	
    	$('.tp-tit-ms li').click(function(e){
    		var val = $(this).children().find('em').html();
    		$(this).addClass('on').siblings().removeClass('on');
			$(this).parents('.tp-tit-ms').find('span').html('布局模式：'+val+'<i class="ico-tri"></i>');
    		e.stopPropagation();
    	});
    	
    	$('.tp-tit-kg li').click(function(){
    		var val = $(this).find('a').html();
    		$(this).addClass('on').siblings().removeClass('on');
			$(this).parents('.tp-tit-kg').find('span').html(val+'<i class="ico-tri"></i>');
			if(val=='关'){
				$('.xc-list h3 ,.txtbiaoti').hide();
			}else{
				$('.xc-list h3 ,.txtbiaoti').show();
			}
    	});
    	
    	$(".xc-delete-a").click(function() {
			$(this).parent().parent().remove();
		});
    }
    function mbcolor(){
    	$('.mb-color li').click(function(){
    		$(this).addClass('active').siblings().removeClass('active');
    	})
    }
    Sperlabel();
    ThumbLi();
    XcmngDlt();
    Tpzhongduan();
    mbcolor();
    
})
