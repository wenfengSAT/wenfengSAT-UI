/**
 *
一、Data属性：


二、jQuery API：

 *
 */

(function($){
	
	$.fn.myMessager = function(element, options) {
		
		var defaults = {
            width            : "100%",
            height           : "95%",
		}
		
		var options = $.extend(defaults, options);
		
		$(this).datagrid({
	        width         : options.width,
            height        : options.height,
	    });
		
	}
	
	topjui.Messager = {};

	//提示框
	topjui.Messager.Show = function (message, titleName, time, type) {
	    titleName = titleName || '提示';
	    type = type || 'slide';
	    time = time || 5000;
	    $.messager.show({
	        title: titleName,
	        msg: message,
	        timeout: time,
	        showType: type
	    });
	};

	//弹出提示信息
	topjui.Messager.Alert = function (msg, title, type) {
	    title = title || '提示';
	    type = type || 'info';
	    $.messager.alert(title, msg, type);
	};

	//弹出提示确认后重定向
	topjui.Messager.ConfirmAndRedirect = function (msg, title, url) {
	    title = title || '提示';
	    $.messager.confirm(title, msg, function (r) {
	        if (r) {
	            location.href = url;
	        }
	    });
	};

	//弹出提示确认后关闭窗口
	topjui.Messager.ConfirmAndClose = function (msg, title) {
	    title = title || '提示';
	    $.messager.confirm(title, msg, function (r) {
	        if (r) {
	            window.close();
	            parent.location.href = parent.location.href;
	        }
	    });
	};

	//弹出提示信息后父窗体重定向
	topjui.Messager.MRedirect = function (msg, url, title ) {
	    title = title || '提示';
	    $.messager.alert(title, msg, 'info', function () {
	            location.href = url;
	    });
	};

	//弹出提示信息后重定向
	topjui.Messager.Redirect = function (msg, url, title) {
	    title = title || '提示';
	    $.messager.alert(title, msg, 'info', function () {
	        var selectedTab = $('#tabs').tabs('getSelected');
	        selectedTab.panel('refresh', url);
	    });
	};

	//进度条开启
	topjui.Messager.ProgressOpen=function () {
	    $.messager.progress({
	        msg: '正在处理，请稍后...',
	        interval: 100
	    });
	}

	//进度条关闭
	topjui.Messager.ProgressClose=function () {
	    $.messager.progress('close');
	}
	
	$(function() {
		var $this  = $('[data-toggle="messager"]'),
		    options = $this.data()
		
		$this.myDatagrid($this, options)
	})
	
})(jQuery);