(function($) {
	/**
	 * select 下拉选择框组件
	 * version: 1.0
	 */
	$.fn.select = function(){
		return this.each(function () {
        	var _iSel = new $.iSelect(this);
        	_iSel = null;
   	 	});
	};

	$.iSelect = function( select ){
		if( !select || select.multiple ){
			return false;
		}
		
		var isel_id = select.id;
		if( !isel_id || isel_id === "" || typeof isel_id == "undefined" ){
			isel_id = "iSel-"+Math.round( Math.random()*10000 );
			select.id = isel_id;
		}
		if( document.getElementById("_iSelWrap_"+ isel_id) ){
			return false;
		}
		
		var $select = $(select), sel_w = select.offsetWidth;
		$select.addClass("iselect");
		var _onchange = select.onchange;
		
		if( sel_w >= 500 ){
			sel_w = 500;
		}
		
		var isel_wrap = '<div id="_iSelWrap_'+isel_id+'" class="iselect-wrapper"></div>';
		var isel_wrapin = '<span id="_iSelVal_'+isel_id+'" class="iselwrap-val"></span>';
		
		// 包裹select
		$select.wrap( isel_wrap );
		$("#_iSelWrap_"+ isel_id).append( isel_wrapin );
		
		var iSel_val = $("#_iSelVal_"+ isel_id);
		
		select.onchange = null;
		$select.change(function(){
			var _val = this.options[this.selectedIndex].text;
			iSel_val.text( _val );
			
			// 执行可能存在的原始onchange事件
			if( _onchange && typeof _onchange != "undefined" ){
				_onchange.apply(this);
			}
		});
		
		// 初始下显示select默认值
		var sel_option = $select.find("option:selected").first();
		if( sel_option.length <= 0 ){
			sel_option = $select.find("option:first");
		}
		
		iSel_val.text( sel_option.text() );   
	};
	
})(jQuery);
function setSelectVal(selectId,val){
	$("#_iSelVal_"+ selectId).text(val);
}