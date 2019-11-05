/**
 * 扩展tree，使其支持平滑数据格式
 */
$.fn.tree.defaults.loadFilter = function(data, parent) {
	var opt = $(this).data().tree.options;
	var idFiled, textFiled, parentField, iconCls;
	if(opt.parentField) {
		idFiled = opt.idFiled || 'id';
		textFiled = opt.textFiled || 'text';
		parentField = opt.parentField;
		iconCls = opt.iconCls || 'iconCls';
		var i, l, treeData = [],
			tmpMap = [];
		for(i = 0, l = data.length; i < l; i++) {
			tmpMap[data[i][idFiled]] = data[i];
		}
		for(i = 0, l = data.length; i < l; i++) {
			if(tmpMap[data[i][parentField]] && data[i][idFiled] != data[i][parentField]) {
				if(!tmpMap[data[i][parentField]]['children'])
					tmpMap[data[i][parentField]]['children'] = [];
				data[i]['text'] = data[i][textFiled];
				data[i]['iconCls'] = data[i][iconCls];
				tmpMap[data[i][parentField]]['children'].push(data[i]);
			} else {
				data[i]['text'] = data[i][textFiled];
				data[i]['iconCls'] = data[i][iconCls];
				treeData.push(data[i]);
			}
		}
		return treeData;
	}
	return data;
};

/**
 * 扩展treegrid，使其支持平滑数据格式
 */
$.fn.treegrid.defaults.loadFilter = function(data, parentId) {
	var opt = $(this).data().treegrid.options;
	var idFiled, textFiled, parentField;
	if(opt.parentField) {
		idFiled = opt.idFiled || 'id';
		textFiled = opt.textFiled || 'text';
		parentField = opt.parentField;
		iconCls = opt.iconCls || 'iconCls';
		var i, l, treeData = [],
			tmpMap = [];
		for(i = 0, l = data.length; i < l; i++) {
			tmpMap[data[i][idFiled]] = data[i];
		}
		for(i = 0, l = data.length; i < l; i++) {
			if(tmpMap[data[i][parentField]] && data[i][idFiled] != data[i][parentField]) {
				if(!tmpMap[data[i][parentField]]['children'])
					tmpMap[data[i][parentField]]['children'] = [];
				data[i]['text'] = data[i][textFiled];
				data[i]['iconCls'] = data[i][iconCls];
				tmpMap[data[i][parentField]]['children'].push(data[i]);
			} else {
				data[i]['text'] = data[i][textFiled];
				data[i]['iconCls'] = data[i][iconCls];
				treeData.push(data[i]);
			}
		}
		return treeData;
	}
	return data;
};

/**
 * 扩展combotree，使其支持平滑数据格式
 */
$.fn.combotree.defaults.loadFilter = $.fn.tree.defaults.loadFilter;