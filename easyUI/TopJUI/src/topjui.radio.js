/**
 * radio - jQuery EasyUI
 *	@author ____¡ä¨KÏÄ¼Â
 */
(function ($) {
	var STYLE = {
		radio : {
			cursor : "pointer",
			background : "transparent url('data:image/gif;base64,R0lGODlhDwAmANUAAP////z8/Pj4+Ovr6/v7++7u7uPj493d3ff39/Ly8vT09ICAgPX19a+vr+Li4urq6vn5+fr6+v39/dXV1efn5+bm5uTk5ODg4N7e3v7+/vHx8fDw8O3t7e/v74eHh+Hh4c3NzdfX1+np6eXl5cDAwNra2t/f38/Pz/Pz8/b29sbGxsHBwc7OzsLCwujo6NHR0by8vL29vcXFxb+/v7m5udPT09jY2MPDw7u7u7i4uNLS0uzs7AAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAPACYAAAb/QIBwSCwaj0VGSIbLzUAXQfFDap1KjktJVysMHTHQ4WKgPAqaymQDYJBYh4/FNSgkGIjBgRC6YRwjIjsddwIRAQ4cKi8GFSIcGygphgEBBRYwB2ZoCggQBJUBCBg0FHV3nqChBAcrFYQMlKGVAgYnJpKyswEJDwYTqbuhAwoQEw+qwgoDEgAbNhzCAQoiUkIaGAYdCAQCCQMD1kMEBSMmBxbEzUjs7e7v8EJKTE5Q4kJUVlhaXF5CYGLIbEqzps2bOHNO4dHDxw+gAgIyREBAKdGiRgUMNPDQwICqS5nMQGiwoGSDDJVGlaqTwUPJBR4AVGLlihABkiZRBqh1S1IELY0cDUio1OtXKgkZAGQYWomYMWTSpjFzBk0aNXHYtHHzBu4eAHLm0KmLR5ZIEAA7') no-repeat center top",
			verticalAlign : "middle",
			height : "19px",
			width : "18px",
			display : "block"
		},
		span : {
			"float" : "left",
			display : "block",
			margin : "0px 4px",
			marginTop : "5px"
		},
		label : {
			marginTop : "4px",
			marginRight : "8px",
			display : "block",
			"float" : "left",
			fontSize : "16px",
			cursor : "pointer"
		}
	};
	
	function rander(target) {
		var jqObj = $(target);
		jqObj.css('display', 'inline-block');
		var radios = jqObj.children('input[type=radio]');
		var checked;
		
		radios.each(function () {
			var jqRadio = $(this);
			var jqWrap = $('<span/>').css(STYLE.span);
			var jqLabel = $('<label/>').css(STYLE.label);
			var jqRadioA = $('<a/>').data('lable', jqLabel).addClass("RadioA").css(STYLE.radio).text(' ');
			var labelText = jqRadio.data('lable', jqLabel).attr('label');
			jqRadio.hide();
			jqRadio.after(jqLabel.text(labelText));
			jqRadio.wrap(jqWrap);
			jqRadio.before(jqRadioA);
			if (jqRadio.prop('checked')) {
				checked = jqRadioA;
			}
			
			jqLabel.click(function () {
				(function (rdo) {
					rdo.prop('checked', true);
					radios.each(function () {
						var rd = $(this);
						var y = 'top';
						if (rd.prop('checked')) {
							y = 'bottom';
						}
						rd.prev().css('background-position', 'center ' + y);
					});
				})(jqRadio);
			});
			
			jqRadioA.click(function () {
				$(this).data('lable').click();
			});
		});
		checked.css('background-position', 'center bottom');
	}
	
	$.fn.radio = function (options, param) {
		if (typeof options == 'string') {
			return $.fn.radio.methods[options](this, param);
		}
		
		options = options || {};
		return this.each(function () {
			if (!$.data(this, 'radio')) {
				$.data(this, 'radio', {
					options : $.extend({}, $.fn.radio.defaults, options)
				});
				rander(this);
			} else {
				var opt = $.data(this, 'radio').options;
				$.data(this, 'radio', {
					options : $.extend({}, opt, options)
				});
			}
		});
	};
	
	$.fn.radio.methods = {
		getValue : function (jq) {
			var checked = jq.find('input:checked');
			var val = {};
			if (checked.length)
				val[checked[0].name] = checked[0].value;
			
			return val;
		},
		check : function (jq, val) {
			if (val && typeof val != 'object') {
				var ipt = jq.find('input[value=' + val + ']');
				ipt.prop('checked', false).data('lable').click();
			}
		}
	};
	
	$.fn.radio.defaults = {
		style : STYLE
	};
	
	if ($.parser && $.parser.plugins) {
		$.parser.plugins.push('radio');
	}
	
})(jQuery);
