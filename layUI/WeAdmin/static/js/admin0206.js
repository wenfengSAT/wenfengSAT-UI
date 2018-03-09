/*
 * @Author: https://github.com/WangEn
 * @Date:   2018-01-01
 * @lastModify 2018-2-5 16:29:37
 * +----------------------------------------------------------------------
 * | Weadmin [ 后台管理模板 ]
 * | 基于Layui http://www.layui.com/
 * +----------------------------------------------------------------------
 */

layui.define(['jquery', 'form', 'layer', 'element'], function(exports) {
	var $ = layui.jquery,
		form = layui.form,
		layer = layui.layer,
		element = layui.element;
		var menu= [];
		var curmenu;
	$(function() {
		
//		if(window.sessionStorage.getItem("menu")){
//			menu = JSON.parse(window.sessionStorage.getItem("menu"));
////			for(var i=0; i<menu.length; i++){
////				tab.tabAdd(menu[i].title,menu[i].url,menu[i].layid);
////			}
//			return false;
//			
//		}else{
//			return false;
//		}
		tableCheck = {
			init: function() {
				$(".layui-form-checkbox").click(function(event) {
					if($(this).hasClass('layui-form-checked')) {
						$(this).removeClass('layui-form-checked');
						if($(this).hasClass('header')) {
							$(".layui-form-checkbox").removeClass('layui-form-checked');
						}
					} else {
						$(this).addClass('layui-form-checked');
						if($(this).hasClass('header')) {
							$(".layui-form-checkbox").addClass('layui-form-checked');
						}
					}
				});
			},
			getData: function() {
				var obj = $(".layui-form-checked").not('.header');
				var arr = [];
				obj.each(function(index, el) {
					arr.push(obj.eq(index).attr('data-id'));
				});
				return arr;
			}
		}

		//开启表格多选
		tableCheck.init();

	//初始化加载结束
	});
	//左侧菜单的显示和隐藏
	$('.container .left_open i').click(function(event) {
		if($('.left-nav').css('left') == '0px') {
			//此处左侧菜单是显示状态，点击隐藏
			$('.left-nav').animate({
				left: '-221px'
			}, 100);
			$('.page-content').animate({
				left: '0px'
			}, 100);
			$('.page-content-bg').hide();
		} else {
			//此处左侧菜单是隐藏状态，点击显示
			$('.left-nav').animate({
				left: '0px'
			}, 100);
			$('.page-content').animate({
				left: '221px'
			}, 100);
			//点击显示后，判断屏幕宽度较小时显示遮罩背景
			if($(window).width() < 768) {
				$('.page-content-bg').show();
			}
		}
	});
	//点击遮罩背景，左侧菜单隐藏
	$('.page-content-bg').click(function(event) {
		$('.left-nav').animate({
			left: '-221px'
		}, 100);
		$('.page-content').animate({
			left: '0px'
		}, 100);
		$(this).hide();
	});

	//点击tab项对应的关闭按钮事件
	$('.layui-tab-close').click(function(event) {
		$('.layui-tab-title li').eq(0).find('i').remove();
	});
	
	//左侧菜单效果
	//如果有子级就展开，没有就打开frame
	$('.left-nav #nav li').click(function(event) {

		if($(this).children('.sub-menu').length) {
			if($(this).hasClass('open')) {
				$(this).removeClass('open');
				$(this).find('.nav_right').html('&#xe697;');
				$(this).children('.sub-menu').stop().slideUp();
				$(this).siblings().children('.sub-menu').slideUp();
			} else {
				$(this).addClass('open');
				$(this).children('a').find('.nav_right').html('&#xe6a6;');
				$(this).children('.sub-menu').stop().slideDown();
				$(this).siblings().children('.sub-menu').stop().slideUp();
				$(this).siblings().find('.nav_right').html('&#xe697;');
				$(this).siblings().removeClass('open');
			}
		} else {

			var url = $(this).children('a').attr('_href');
			var title = $(this).find('cite').html();
			var index = $('.left-nav #nav li').index($(this));

			for(var i = 0; i < $('.weIframe').length; i++) {
				if($('.weIframe').eq(i).attr('tab-id') == index + 1) {
					tab.tabChange(index + 1);
					event.stopPropagation();
					return;
				}
			};

			tab.tabAdd(title, url, index + 1);
			tab.tabChange(index + 1);
		}
		event.stopPropagation();  //不触发任何前辈元素上的事件处理函数

	});
	
	//触发事件
	var tab = {
		tabAdd: function(title, url, id) {
			//判断当前id的元素是否存在于tab中
			var li = $("#WeTabTip li[lay-id=" + id + "]").length;
			//console.log(li);
			if(li > 0) {
				//tab已经存在，直接切换到指定Tab项
				console.log(">0");
				element.tabChange('wenav_tab', id); //切换到：用户管理
			} else {
				//该id不存在，新增一个Tab项
				console.log("<0");
				element.tabAdd('wenav_tab', {
					title: title,
					content: '<iframe tab-id="' + id + '" frameborder="0" src="' + url + '" scrolling="yes" class="weIframe"></iframe>',
					id: id
				});
				//当前窗口内容
//				var curmenu = {
//					"title" : title,
//					"url" : url,
//					"layid" : id
//				}

				//menu.push(curmenu);
				//window.sessionStorage.setItem("menu",JSON.stringify(menu)); //打开的窗口
				//window.sessionStorage.setItem("curmenu",JSON.stringify(curmenu));  //当前的窗口

			}
			CustomRightClick(id); //绑定右键菜单
			FrameWH(); //计算框架高度

		},
		tabDelete: function(id) {
			element.tabDelete("wenav_tab", id); //删除
		},
		tabChange: function(id) {
			//切换到指定Tab项
			element.tabChange('wenav_tab', id); //切换到：用户管理
		},
		tabDeleteAll: function(ids) { //删除所有
			$.each(ids, function(i, item) {
				element.tabDelete("wenav_tab", item);
			})
		}
	};
	//监听右键事件
	//绑定右键菜单
	function CustomRightClick(id) {
		//取消右键 
		$('.layui-tab-title li').on('contextmenu', function() {
			return false;
		})
		$('.layui-tab-title,.layui-tab-title li').on('click', function() {
			$('.rightMenu').hide();
		});
		//桌面点击右击 
		$('.layui-tab-title li').on('contextmenu', function(e) {
			var aid = $(this).attr("lay-id"); //获取右键时li的lay-id属性
			var popupmenu = $(".rightMenu");
			popupmenu.find("li").attr("data-id", aid);
			console.log("popopmenuId:" + popupmenu.find("li").attr("data-id"));
			l = ($(document).width() - e.clientX) < popupmenu.width() ? (e.clientX - popupmenu.width()) : e.clientX;
			t = ($(document).height() - e.clientY) < popupmenu.height() ? (e.clientY - popupmenu.height()) : e.clientY;
			popupmenu.css({
				left: l,
				top: t
			}).show();
			//alert("右键菜单")
			return false;
		});
	}
	$("#rightMenu li").click(function() {
		var type = $(this).attr("data-type");
		var layId = $(this).attr("data-id")
		if(type == "closethis") {
			console.log("closethis:" + layId);
			tab.tabDelete(layId);
			//element.tabDelete(16);
		} else if(type == "closeall") {
			console.log("closeAll");
			var tabtitle = $(".layui-tab-title li");
			var ids = new Array();
			$.each(tabtitle, function(i) {
				ids[i] = $(this).attr("lay-id");
			})

			tab.tabDeleteAll(ids);
		} else if(type = "fresh") {
			console.log("fresh:" + layId);
			tab.tabChange($(this).attr("data-id"));
			var othis = $('.layui-tab-title').find('>li[lay-id="' + layId + '"]'),
				index = othis.parent().children('li').index(othis),
				parents = othis.parents('.layui-tab').eq(0),
				item = parents.children('.layui-tab-content').children('.layui-tab-item'),
				src = item.eq(index).find('iframe').attr("src");
			item.eq(index).find('iframe').attr("src", src);
			//window.location.reload();
		}else if(type = "other"){
			$('.layui-tab-title').find('li').each(function(i, o) {
                    var layId = $(o).attr('lay-id');
                    if (layId != index && layId != 0) {
                        tab.tabDelete(layId);
                    }
                })
                var data = {
                    layId: index
                }
		}
		$('.rightMenu').hide();
	});

	function FrameWH() {
		var h = $(window).height() - 164;
		$("iframe").css("height", h + "px");
	}
	$(window).resize(function() {
		FrameWH();
	});

	/*弹出层*/
	/*
	 * layui.use 加载layui.define 定义的模块，当外部 js 或 onclick调用 use 内部函数时，需要在 use 中定义 window 函数供外部引用
	 * http://blog.csdn.net/xcmonline/article/details/75647144 
	*/
	/*
	    参数解释：
	    title   标题
	    url     请求的url
	    id      需要操作的数据id
	    w       弹出层宽度（缺省调默认值）
	    h       弹出层高度（缺省调默认值）
	*/
	window.WeAdminShow=function(title, url, w, h) {
		if(title == null || title == '') {
			title = false;
		};
		if(url == null || url == '') {
			url = "404.html";
		};
		if(w == null || w == '') {
			w = ($(window).width() * 0.9);
		};
		if(h == null || h == '') {
			h = ($(window).height() - 50);
		};
		layer.open({
			type: 2,
			area: [w + 'px', h + 'px'],
			fix: false, //不固定
			maxmin: true,
			shadeClose: true,
			shade: 0.4,
			title: title,
			content: url
		});
	}
	/*弹出层+传递ID参数*/
	window.WeAdminEdit = function(title, url, id, w, h) {
		if(title == null || title == '') {
			title = false;
		};
		if(url == null || url == '') {
			url = "404.html";
		};
		if(w == null || w == '') {
			w = ($(window).width() * 0.9);
		};
		if(h == null || h == '') {
			h = ($(window).height() - 50);
		};
		layer.open({
			type: 2,
			area: [w + 'px', h + 'px'],
			fix: false, //不固定
			maxmin: true,
			shadeClose: true,
			shade: 0.4,
			title: title,
			content: url,
			success: function(layero, index) {
				//向iframe页的id=house的元素传值  // 参考 https://yq.aliyun.com/ziliao/133150
				var body = layer.getChildFrame('body', index);
				body.contents().find("#dataId").val(id);
				console.log(id);
			},
			error: function(layero, index) {
				alert("aaa");
			}
		});
	}
	/**
	 *@todo 绑定刷新按钮单击事件
	 */

	exports('admin', {});
});