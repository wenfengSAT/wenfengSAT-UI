
$(document).ready(function(){
	
	// 去除虚线框（会影响效率）
	$("a,input:checkbox,input:radio,button,input:button").live('focus',function(){$(this).blur();});
	
	
	$('.file input[type=file]').change(function(e) {
        $(this).siblings('.text').text($(this).val());
    });
	
	$('input[type=radio]').click(function(){
		var name = $(this).attr('name');
		$('input[type=radio]["name="'+ name +']').removeClass('checked');
		if($(this).prop('checked')){
			$(this).addClass('checked');
		}
	});

});


function hideElement(currentElement, targetElement) {
	if (!$.isArray(targetElement)) {
		targetElement = [ targetElement ];
	}
	$(document).on("click.hideElement", function(e) {
		var len = 0, $target = $(e.target);
		for (var i = 0, length = targetElement.length; i < length; i++) {
			$.each(targetElement[i], function(j, n) {
				if ($target.is($(n)) || $.contains($(n)[0], $target[0])) {
					len++;
				}
			});
		}
		if ($.contains(currentElement[0], $target[0])) {
			len = 1;
		}
		if (len == 0) {
			currentElement.hide();
		}
	});
};


/*
 *  用来给不支持HTML5 placeholder属性的浏览器增加此功能。
 *  @param element {String or Object} 需要添加placeholder提示的输入框选择器或者输入框jquery对象。
 *  @param defualtCss {String} 提示默认的样式class。
 */

function showRemind(element,defualtCss){
	if(-[1,]){
		return false;
	}

	$(element).each(function(el, i){
		var placeholder = $(this).attr('placeholder');
		if(placeholder){
			$(this).addClass(defualtCss).val(placeholder);
			$(this).focus(function(e){
				if($(this).attr('placeholder') === $(this).val()){
					$(this).val('').removeClass(defualtCss);
				}
			});

			$(this).blur(function(e){
				if($(this).val() === ""){
					$(this).addClass(defualtCss).val($(this).attr('placeholder'));
				}
			});
		}
	});
}

function resize(resizeHandle){
	var d = document.documentElement;
	var timer;//避免resize触发多次,影响性能
	var width = d.clientWidth, height = d.clientHeight;
	$(window).on('resize',function(e){
		if((width != d.clientWidth || height != d.clientHeight)){
			width = d.clientWidth, height = d.clientHeight;
			if(timer){clearTimeout(timer);}
			timer = setTimeout(function(){
				resizeHandle();
			},10);	
		}
	});
	
}
