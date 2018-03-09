/**
 * checkbox - jQuery EasyUI
 *	@author ____¡ä¨KÏÄ¼Â
 */
(function ($) {
	
	var STYLE = {
		checkbox : {
			cursor : "pointer",
			background : "transparent url('data:image/gif;base64,R0lGODlhDwAmAKIAAPr6+v///+vr68rKyvT09Pj4+ICAgAAAACH5BAAAAAAALAAAAAAPACYAAANuGLrc/mvISWcYJOutBS5gKIIeUQBoqgLlua7tC3+yGtfojes1L/sv4MyEywUEyKQyCWk6n1BoZSq5cK6Z1mgrtNFkhtx3ZQizxqkyIHAmqtTsdkENgKdiZfv9w9bviXFxXm4KP2g/R0uKAlGNDAkAOw==') no-repeat center top",
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
		var Checkboxs = jqObj.children('input[type=checkbox]');
		Checkboxs.each(function () {
			var jqCheckbox = $(this);
			var jqWrap = $('<span/>').css(STYLE.span);
			var jqLabel = $('<label/>').css(STYLE.label);
			var jqCheckboxA = $('<a/>').data('lable', jqLabel).css(STYLE.checkbox).text(' ');
			var labelText = jqCheckbox.data('lable', jqLabel).attr('label');
			jqCheckbox.hide();
			jqCheckbox.after(jqLabel.text(labelText));
			jqCheckbox.wrap(jqWrap);
			jqCheckbox.before(jqCheckboxA);
			if (jqCheckbox.prop('checked')) {
				jqCheckboxA.css('background-position', 'center bottom');
			}
			
			jqLabel.click(function () {
				(function (ck, cka) {
					ck.prop('checked', !ck.prop('checked'));
					var y = 'top';
					if (ck.prop('checked')) {
						y = 'bottom';
					}
					cka.css('background-position', 'center ' + y);
				})(jqCheckbox, jqCheckboxA);
			});
			
			jqCheckboxA.click(function () {
				$(this).data('lable').click();
			});
		});
	}
	
	$.fn.checkbox = function (options, param) {
		if (typeof options == 'string') {
			return $.fn.checkbox.methods[options](this, param);
		}
		
		options = options || {};
		return this.each(function () {
			if (!$.data(this, 'checkbox')) {
				$.data(this, 'checkbox', {
					options : $.extend({}, $.fn.checkbox.defaults, options)
				});
				rander(this);
			} else {
				var opt = $.data(this, 'checkbox').options;
				$.data(this, 'checkbox', {
					options : $.extend({}, opt, options)
				});
			}
		});
	};
	
	function check(jq, val, check) {
		var ipt = jq.find('input[value=' + val + ']');
		if (ipt.length) {
			ipt.prop('checked', check).each(function () {
				$(this).data('lable').click();
			});
		}
	}
	
	$.fn.checkbox.methods = {
		getValue : function (jq) {
			var checked = jq.find('input:checked');
			var val = {};
			checked.each(function () {
				var kv = val[this.name];
				if (!kv) {
					val[this.name] = this.value;
					return;
				}
				
				if (!kv.sort) {
					val[this.name] = [kv];
				}
				val[this.name].push(this.value);
			});
			return val;
		},
		check : function (jq, vals) {
			if (vals && typeof vals != 'object') {
				check(jq, vals);
			} else if (vals.sort) {
				$.each(vals, function () {
					check(jq, this);
				});
			}
		},
		unCheck : function (jq, vals) {
			if (vals && typeof vals != 'object') {
				check(jq, vals, true);
			} else if (vals.sort) {
				$.each(vals, function () {
					check(jq, this, true);
				});
			}
		},
		checkAll : function (jq) {
			jq.find('input').prop('checked', false).each(function () {
				$(this).data('lable').click();
			});
		},
		unCheckAll : function (jq) {
			jq.find('input').prop('checked', true).each(function () {
				$(this).data('lable').click();
			});
		}
	};
	
	$.fn.checkbox.defaults = {
		style:STYLE
	};
	
	if ($.parser && $.parser.plugins) {
		$.parser.plugins.push('checkbox');
	}
})(jQuery);
