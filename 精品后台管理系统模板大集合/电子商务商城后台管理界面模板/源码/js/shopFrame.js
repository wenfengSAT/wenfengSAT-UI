;(function($){
    $.fn.frame = function(options){
        var defaults = {
            float : 'left',//位置
			minStatue : false,
			header:70,//顶部高度
			bottom:30,//底部高度
			menu:220,//菜单栏宽度
			close_btn_width:25,//点击按钮宽度
			color_btn:'',//框架颜色
			content:'.side_content',
		    menu_nav:'#menu_list ',
			close_btn:'.close_btn', //点击隐藏
			show_btn:'.show_btn',	//点击显示		
			side_list:'.side_list',
			hover_btn:'',
			height:'',
			Sellerber_header:'.Sellerber_header',//顶部
			Sellerber_menu:'.list_content',//左侧
			Sellerber_left:'.Sellerber_left',//左侧
			Sellerber_bottom:'.Sellerber_bottom',//底部
			Sellerber_content:'.Sellerber_content',//内容
            }
		 var options = $.extend(defaults, options);		
         this.each(function(){	
		  //获取对象
		   var thisBox = $(this),
		   closeBtn = thisBox.find(options.close_btn ), //隐藏对象
		   showbtn = thisBox.find(options.show_btn ), //显示对象
		   colorbtn=thisBox.find(options.color_btn ), //框架颜色选择
		   sideContent = thisBox.find(options.content),//对象内容
		   headerheight=thisBox.find(options.Sellerber_header),//获取顶部高度
		   leftmenu=thisBox.find(options.Sellerber_menu),
		   hoverbtn=thisBox.find(options.hover_btn),
		   iframejs=thisBox.find(options.iframe),
		   style_height=thisBox.find(options.height),
		   menunav=thisBox.find(options.menu_nav),//栏目对象
		   showiframe=thisBox.find(options.show_iframe),//栏目对象
		   Sellerberleft=thisBox.find(options.Sellerber_left),
		   bottomheight=thisBox.find(options.Sellerber_bottom),//底部
		   content=thisBox.find(options.Sellerber_content),//内容
		   sideList = thisBox.find(options.side_list); //获取操作对象名称
		   var defaultTop = thisBox.offset().top;	//对象的默认top										
		   thisBox.css(options.float, 0);		   
		   headerheight.css("height", options.header); 
		   leftmenu.width(options.menu);
		   bottomheight.height(options.bottom).css("line-height",(options.bottom)+"px");		   
		   if(options.minStatue){
				$(options.show_btn ).css("float", options.float);				
				sideContent.css('width', 0);			
				showbtn.css('width', (options.close_btn_width));	
			}			
		   leftmenu.height($(window).height()-((options.header)+(options.bottom))-1);//获取栏目高度
		   style_height.height($(window).height()-20);//获取栏目高度
		   content.height($(window).height()-((options.header)+(options.bottom))).css({"width":$(window).width()-(options.menu),"margin-top":options.header,"margin-left":options.menu,"position":"relative"});		   		   
		   //当窗口发生改变是触发
			 $(window).resize(function(){				   	
			   leftmenu.height($(window).height()-((options.header)+(options.bottom))-1);//高度值变化
			   style_height.height($(window).height()-20);//获取栏目高度
			   content.height($(window).height()-((options.header)+(options.bottom))).css({"width":$(window).width()-(options.menu),"margin-top":options.header,"margin-left":options.menu,"position":"relative"});
			 });
		   //隐藏对象点击事件
			closeBtn.bind("click",function(){		
			  leftmenu.stop(true, true).delay(0).animate({ width:+(0)+'px'},"fast").css("display","none");
			  showbtn.stop(true, true).delay(0).animate({ width:+(options.close_btn_width)+'px'},"fast").css("display","block");
			  content.css({"margin-left":0,"width":$(window).width()});				
			});
			//显示点击事件
			showbtn.bind("click",function(){
			$(this).animate({width: '0px',border:'1px solid #ddd'},"fast").css('display','none');				
			leftmenu.stop(true, true).delay(0).animate({ width:+(options.menu)+'px'},"fast").css("display","block");
			content.css({"margin-left":options.menu,"width":$(window).width()-(options.menu)});
			content.removeClass("full_screen");					
			});	
				 hoverbtn.hover(function(){
			$(this).addClass("hover");
			//$(this).children(".dorpdown-layer").attr('class','');
		},function(){
			$(this).removeClass("hover");  
			//$(this).children(".dorpdown-layer").attr('class','');
		}
	); 
	Sellerberleft.hover( function(){		
		$(this).addClass("display_btn");
		$(this).find(".close_btn span").css("display","block")		
		
		},function(){
			  
			$(this).removeClass("display_btn");
			$(this).find(".close_btn span").css("display","none")	
			})
	$('#js-tabNav-next').click(function(){
		num==oUl.find('li').length-1?num=oUl.find('li').length-1:num++;
		toNavPos();
	});
	$('#js-tabNav-prev').click(function(){
		num==0?num=0:num--;
		toNavPos();
	});
	function toNavPos(){
		oUl.stop().animate({'left':-num*100},100);
	}
	
			/*换肤*/
		        var li=colorbtn.find('a');
				li.on('click',function(){
					var v = $(this).attr("data-val");
					colorbtn.find('a').removeClass("selected");
				   $(this).addClass("selected");				
		          $.cookie("MYCssSkin",v,{path:'/',expires:10}); 
				  $("#skin").attr("href","skin/"+v+"/skin.css");				  
					});
					var cookie_skin=$.cookie("MyCssSkin");
					if(cookie_skin){switchskin(cookie_skin)};
				  menunav.find('li.home').on('click',function(){
	              menunav.find('li.home').removeClass('active');
	                $(this).addClass('active');
				   });	
				   
				   headerheight.find('.administrator').on('click',function(){					   
				   if($(this).hasClass("open")){
						$(this).removeClass("open");
						$("body").removeClass("big-page");
						$(this).find('i.glyph-icon').attr("class","glyph-icon fa fa-caret-down");
					}else{
						$(this).addClass("open");
						$(this).find('i.glyph-icon').attr("class","glyph-icon fa  fa-caret-up");
						$("body").addClass("big-page");
									
					}
					   });
					   
		 
		$.fold(".list_content .nav-list dt.nav_link",".list_content .nav-list dd","fast",1,"click");
				   
				   /*获取顶部选项卡总长度*/
			  function tabNavallwidth(){
				  var topWindow=$(window.parent.document);
				  var taballwidth=0,
					  $tabNav = topWindow.find(".breadcrumb"),
					  $tabNavWp = topWindow.find(".breadcrumbs"),
					  $tabNavitem = topWindow.find(".breadcrumb li"),
					  $tabNavmore =$(".Hui-tabNav-more");
				  if (!$tabNav[0]){return}
				  $tabNavitem.each(function(index, element) {
					  taballwidth+=Number(parseFloat($(this).width()+60))});
				  $tabNav.width(taballwidth+25);
				  var w = $tabNavWp.width();
				  if(taballwidth+25>w){
					  $tabNavmore.show()}
				  else{
					  $tabNavmore.hide();
					  $tabNav.css({left:0})}
			  }
				   	/*选项卡导航*/	
			 menunav.on("click",".submenu a, .shop_index a",function(){
			  if($(this).attr('name')){
				  var bStop=false;
				  var bStopIndex=0;
				  var _href=$(this).attr('name');
				  var _titleName=$(this).text();
				  var topWindow=$(window.parent.document);
				  var show_navLi=topWindow.find("#min_title_list li,#dropdown_menu li");
				  show_navLi.each(function() {
					  if($(this).find('span').attr("data-href")==_href){
						  bStop=true;
						  bStopIndex=show_navLi.index($(this));
						  return false;
					  }
				  });
				  if(!bStop){
					  
					  creatIframe(_href,_titleName);
					  min_titleList();
				  }
				  else{
					  show_navLi.removeClass("active").eq(bStopIndex).addClass("active");
					  var iframe_box=topWindow.find("#iframe_box");
					  iframe_box.find(".show_iframe").hide().eq(bStopIndex).show().find("iframe").attr({"src":_href,"data-href":_href});
				  }
			  }
		  });
		  	function min_titleList(){
		var topWindow=$(window.parent.document);
		var show_nav=topWindow.find("#min_title_list,#dropdown_menu");
		var aLi=show_nav.find("li");
	   };
		  function creatIframe(href,titleName){
			  var topWindow=$(window.parent.document);
			  var show_nav=topWindow.find('#min_title_list');
			  var id_name=$(".show_iframe").each(function(i){$(this).attr('id',"Sort_link_"+i);});
			  show_nav.find('li').removeClass("active");
			  var iframe_box=topWindow.find('#iframe_box');
			  show_nav.append('<li class="active"><span data-href="'+href+'">'+titleName+'</span><em class="close_icon"></em></li>');
			  tabNavallwidth();
			  var iframeBox=iframe_box.find('.show_iframe');
			  iframeBox.hide();
			  iframe_box.append('<div class="show_iframe" date-id='+id_name+'><div class="loading"></div><iframe class="simei_iframe" frameborder="0" src='+href+' data-href='+href +'></iframe></div>');
			  var showBox=iframe_box.find('.show_iframe:visible');
			  showBox.find('iframe').attr("src",href).load(function(){
				  showBox.find('.loading').hide();
			  });
		  }
		  var num=0;
		  var oUl=$("#min_title_list");
		  var hide_nav=menunav;
		  $(document).on("click","#min_title_list li",function(){
			  var bStopIndex=$(this).index();
			  var iframe_box=$("#iframe_box");
			  $("#min_title_list li").removeClass("active").eq(bStopIndex).addClass("active");
			  iframe_box.find(".show_iframe").hide().eq(bStopIndex).show();
		  });
		  $(document).on("click","#min_title_list li em.close_icon",function(){
			  var aCloseIndex=$(this).parents("li").index();
			  $(this).parent().remove();
			  $('#iframe_box').find('.show_iframe').eq(aCloseIndex).remove();	
			  num==0?num=0:num--;
			  tabNavallwidth();
		  });
		   $(document).on("click","#dropdown_menu .tabCloseCurrent", function () {       		
			 var aCloseIndex=$("#breadcrumbs .breadcrumb>li.active").index();//获取当前栏目为第几个
			 $("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li.active').remove();//关闭当前栏目
			 $("#iframe_box").find('.show_iframe').eq(aCloseIndex).remove();//关闭当前页iframe
			 $("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li').siblings("li:last").addClass("active")  //删除当前栏目并赋值给最后一个样式class
			 $("#iframe_box").find('.show_iframe').css("display","block")				 
			  num==0?num=0:num--;
			  tabNavallwidth();										  	   
          });
		  //关闭打开的栏目以外的栏目
		 /* $(document).on("click","#dropdown_menu .tabCloseOther", function () {
		   var aCloseIndex=$("#breadcrumbs .breadcrumb>li.active").index();
		    $("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li').not(".active ,.home").remove();//关闭打开栏目以外的栏目（除首页）  
			$("#iframe_box").find('.show_iframe').eq(aCloseIndex).remove();
		  num==0?num=0:num--;
	      abNavallwidth();	
		  });*/
		  //关闭全部栏目
		     $(document).on("click","#dropdown_menu .tabCloseAll", function () {  
			  var $tabCloseAll=$("#breadcrumbs .breadcrumb li");
			  var childlength = 0;
			 if($tabCloseAll.not(":first").length){			
			  for(var i=0; i<$tabCloseAll.not(":first").length; i++){ 
			  	var aCloseIndex=$tabCloseAll.index();							
			    $("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li').not(":first").remove();//关闭除首页以外的全部栏目
			    $("#iframe_box").find('.show_iframe').not(":first").remove();//关闭闭除首页以外的全部iframe页		
				$("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li').addClass("active")  
				 $("#iframe_box").find('.show_iframe').css("display","block")			
				  break;			
			 }			 
				 num==0?num=0:num--;
			    tabNavallwidth();	
			 }   													  	   
          });
		  $(document).on("dblclick","#min_title_list li",function(){
			  var aCloseIndex=$(this).index();
			  var iframe_box=$("#iframe_box");
			  if(aCloseIndex>0){
				  $(this).remove();
				  $('#iframe_box').find('.show_iframe').eq(aCloseIndex).remove();	
				  num==0?num=0:num--;
				  $("#min_title_list li").removeClass("active").eq(aCloseIndex-1).addClass("active");
				  iframe_box.find(".show_iframe").hide().eq(aCloseIndex-1).show();
				  tabNavallwidth();
			  }else{
				  return false;
			  }
		  });
		  tabNavallwidth();
		});	
     }
})(jQuery);

