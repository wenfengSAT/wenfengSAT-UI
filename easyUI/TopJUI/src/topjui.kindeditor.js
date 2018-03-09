/**
 * Author : 小策一喋
 * Easyui KindEditor的简单扩展.
 * 有了这个之后,你就可以像使用Easyui组件的方式使用KindEditor了
 * 前提是你需要导入KindEditor的核心js和相关样式. 本插件也需要在Easyui.min和KindEditor之后导入.
 * 呵呵..没做深入扩展了,简单实现了一下功能,架子已经搭好.有需要的筒子可以在这基础上扩展.
 **/
(function ($, K) {
	if (!K)
		throw "KindEditor未定义!";

	function create(target) {
		var opts = $.data(target, 'kindeditor').options;
		var editor = K.create(target, opts);
		$.data(target, 'kindeditor').options.editor = editor;
	}

	$.fn.kindeditor = function (options, param) {
		if (typeof options == 'string') {
			var method = $.fn.kindeditor.methods[options];
			if (method) {
				return method(this, param);
			}
		}
		options = options || {};
		return this.each(function () {
			var state = $.data(this, 'kindeditor');
			if (state) {
				$.extend(state.options, options);
			} else {
				state = $.data(this, 'kindeditor', {
						options : $.extend({}, $.fn.kindeditor.defaults, $.fn.kindeditor.parseOptions(this), options)
					});
			}
			create(this);
		});
	}

	$.fn.kindeditor.parseOptions = function (target) {
		return $.extend({}, $.parser.parseOptions(target, []));
	};

	$.fn.kindeditor.methods = {
		editor : function (jq) {
			return $.data(jq[0], 'kindeditor').options.editor;
		}
	};

	$.fn.kindeditor.defaults = {
		width:698,
		height:300,
		resizeType : 1,
		allowPreviewEmoticons : false,
		allowImageUpload : true,
		//uploadJson : ctx + '/Static/topjui/plugins/kindeditor/jsp/upload_json.jsp',
		uploadJson : ctx + '/system/attachment/kindeditorUpload',
        fileManagerJson : ctx + '/Static/topjui/plugins/kindeditor/jsp/file_manager_json.jsp',
        allowFileManager : true,
		items : [
                 'source', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
				 'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
				 'insertunorderedlist', '|', 'emoticons', 'image', 'insertfile', 'link'
				],
		afterChange:function(){
			this.sync();//这个是必须的,如果你要覆盖afterChange事件的话,请记得最好把这句加上.
		}
	};
	$.parser.plugins.push("kindeditor");
})(jQuery, KindEditor);