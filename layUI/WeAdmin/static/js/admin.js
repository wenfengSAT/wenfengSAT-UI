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
	var menu = [];
	var curMenu;

	/*
	 * @todo 初始化加载完成执行方法
	 * 打开或刷新后执行
	 */
	$(function() {
		/*
		 * @todo 读取本地存储中记录的已打开的tab项
		 * 刷新后，读取记录，打开原来已打开的tab项
		 */

		/*
		 * @todo table事件
		 */
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
		//延时加载
		setTimeout(function() {
			if(sessionStorage.getItem("menu")) {
				menu = JSON.parse(sessionStorage.getItem("menu"));
				for(var i = 0; i < menu.length; i++) {
					tab.tabAdd(menu[i].title, menu[i].url, menu[i].id);
				}
			} else {
				return false;
			}
			if(sessionStorage.getItem("curMenu")) {
				$('.layui-tab-title').find('layui-this').removeClass('layui-class');
				curMenu = JSON.parse(sessionStorage.getItem("curMenu"));
				id = curMenu.id;
				if(id) { //因为默认桌面首页不存在lay-id,所以要对此判断
					$('.layui-tab-title li[lay-id="' + id + '"]').addClass('layui-this');
					tab.tabChange(id);
				} else {
					$(".layui-tab-title li").eq(0).addClass('layui-this'); //未生效
					$('.layui-tab-content iframe').eq(0).parent().addClass('layui-show');
				}
			} else {
				$(".layui-tab-title li").eq(0).addClass('layui-this'); //未生效
				$('.layui-tab-content iframe').eq(0).parent().addClass('layui-show');

			}
		}, 100);
		//初始化加载结束
	});

	/*
	 * @todo 左侧导航菜单的显示和隐藏
	 */
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

	/*
	 * @todo 左侧菜单事件
	 * 如果有子级就展开，没有就打开frame
	 */
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
		event.stopPropagation(); //不触发任何前辈元素上的事件处理函数
	});

	/*
	 * @todo tab触发事件：增加、删除、切换
	 */
	var tab = {
		tabAdd: function(title, url, id) {
			//判断当前id的元素是否存在于tab中
			var li = $("#WeTabTip li[lay-id=" + id + "]").length;
			//console.log(li);
			if(li > 0) {
				//tab已经存在，直接切换到指定Tab项
				//console.log(">0");
				element.tabChange('wenav_tab', id); //切换到：用户管理
			} else {
				//该id不存在，新增一个Tab项
				//console.log("<0");
				element.tabAdd('wenav_tab', {
					title: title,
					content: '<iframe tab-id="' + id + '" frameborder="0" src="' + url + '" scrolling="yes" class="weIframe"></iframe>',
					id: id
				});
				//当前窗口内容
				setStorageMenu(title, url, id);

			}
			CustomRightClick(id); //绑定右键菜单
			FrameWH(); //计算框架高度

		},
		tabDelete: function(id) {
			element.tabDelete("wenav_tab", id); //删除
			removeStorageMenu(id);

		},
		tabChange: function(id) {
			//切换到指定Tab项
			element.tabChange('wenav_tab', id);
		},
		tabDeleteAll: function(ids) { //删除所有
			$.each(ids, function(i, item) {
				element.tabDelete("wenav_tab", item);
			})
			sessionStorage.removeItem('menu');
		}
	};

	/*
	 * @todo 监听右键事件,绑定右键菜单
	 * 先取消默认的右键事件，再绑定菜单，触发不同的点击事件
	 */
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
			//console.log("popopmenuId:" + popupmenu.find("li").attr("data-id"));
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
		if(type == "current") {
			//console.log("close this:" + layId);
			tab.tabDelete(layId);
		} else if(type == "all") {
			//console.log("closeAll");
			var tabtitle = $(".layui-tab-title li");
			var ids = new Array();
			$.each(tabtitle, function(i) {
				ids[i] = $(this).attr("lay-id");
			})
			tab.tabDeleteAll(ids);
		} else if(type == "fresh") {
			//console.log("fresh:" + layId);
			tab.tabChange($(this).attr("data-id"));
			var othis = $('.layui-tab-title').find('>li[lay-id="' + layId + '"]'),
				index = othis.parent().children('li').index(othis),
				parents = othis.parents('.layui-tab').eq(0),
				item = parents.children('.layui-tab-content').children('.layui-tab-item'),
				src = item.eq(index).find('iframe').attr("src");
			item.eq(index).find('iframe').attr("src", src);
		} else if(type == "other") {
			var thisId = layId;
			$('.layui-tab-title').find('li').each(function(i, o) {
				var layId = $(o).attr('lay-id');
				if(layId != thisId && layId != 0) {
					tab.tabDelete(layId);
				}
			});
		}
		$('.rightMenu').hide();
	});

	/*
	 * @todo 重新计算iframe高度
	 */
	function FrameWH() {
		var h = $(window).height() - 164;
		$("iframe").css("height", h + "px");
	}
	$(window).resize(function() {
		FrameWH();
	});

	/*
	 * @todo 弹出层，弹窗方法
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
	window.WeAdminShow = function(title, url, w, h) {
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
	 *@todo tab监听：点击tab项对应的关闭按钮事件
	 */
	$('.layui-tab-close').click(function(event) {
		$('.layui-tab-title li').eq(0).find('i').remove();
	});
	/**
	 *@todo tab切换监听
	 * tab切换监听不能写字初始化加载$(function())方法内，否则不执行
	 */
	element.on('tab(wenav_tab)', function(data) {
		//console.log(this); //当前Tab标题所在的原始DOM元素
		setStorageCurMenu();
	});
	/*
	 * @todo 监听layui Tab项的关闭按钮，改变本地存储
	 */
	element.on('tabDelete(wenav_tab)', function(data) {
		var layId = $(this).parent('li').attr('lay-id');
		//console.log(layId);
		removeStorageMenu(layId);
	});
	/**
	 *@todo 本地存储 localStorage
	 * 为了保持统一，将sessionStorage更换为存储周期更长的localStorage
	 */
	//本地存储记录所有打开的窗口
	function setStorageMenu(title, url, id) {
		var menu = JSON.parse(sessionStorage.getItem('menu'));
		if(menu) {
			var deep = false;
			for(var i = 0; i < menu.length; i++) {
				if(menu[i].id == id) {
					deep = true;
					menu[i].title = title;
					menu[i].url = url;
					menu[i].id = id;
				}
			}
			if(!deep) {
				menu.push({
					title: title,
					url: url,
					id: id
				})
			}
		} else {
			var menu = [{
				title: title,
				url: url,
				id: id
			}]
		}
		sessionStorage.setItem('menu', JSON.stringify(menu));
	}
	//本地存储记录当前打开窗口
	function setStorageCurMenu() {
		var curMenu = sessionStorage.getItem('curMenu');
		var text = $('.layui-tab-title').find('.layui-this').text();
		text = text.split('ဆ')[0];
		var url = $('.layui-tab-content').find('.layui-show').find('.weIframe').attr('src');
		var id = $('.layui-tab-title').find('.layui-this').attr('lay-id');
		//console.log(text);
		curMenu = {
			title: text,
			url: url,
			id: id
		}
		sessionStorage.setItem('curMenu', JSON.stringify(curMenu));
	}
	//本地存储中移除删除的元素
	function removeStorageMenu(id) {
		var menu = JSON.parse(sessionStorage.getItem('menu'));
		//var curMenu = JSON.parse(localStorage.getItem('curMenu'));
		if(menu) {
			var deep = false;
			for(var i = 0; i < menu.length; i++) {
				if(menu[i].id == id) {
					deep = true;
					menu.splice(i, 1);
				}
			}
		} else {
			return false;
		}
		sessionStorage.setItem('menu', JSON.stringify(menu));
	}

	/**
	 *@todo 模拟登录
	 * 判断初次登录时，跳转到登录页
	 */
	var login = localStorage.getItem('login');
	$('.loginout').click(function() {
		login = 0;
		localStorage.setItem('login', login);
	});
	$('.loginin').click(function() {
		login = 1;
		localStorage.setItem('login', login);
	});

	/**
	 *@todo Frame内部的按钮点击打开其他frame的tab
	 */

	exports('admin', {});
});