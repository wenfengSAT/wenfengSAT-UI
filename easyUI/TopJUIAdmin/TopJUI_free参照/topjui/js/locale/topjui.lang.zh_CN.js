if ($.fn.pagination) {
    $.fn.pagination.defaults.beforePageText = '第';
    $.fn.pagination.defaults.afterPageText = '共{pages}页';
    $.fn.pagination.defaults.displayMsg = '显示{from}到{to},共{total}记录';
}
if ($.fn.datagrid) {
    $.fn.datagrid.defaults.loadMsg = '加载中，请稍候...';
}
if ($.fn.treegrid && $.fn.datagrid) {
    $.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager) {
    $.messager.defaults.ok = '确定';
    $.messager.defaults.cancel = '取消';
}
$.map(['iValidatebox', 'iTextbox', 'iPasswordbox', 'iFilebox', 'iSearchbox',
    'iCombo', 'iCombobox', 'iCombogrid', 'iCombotree', 'iCombotreegrid',
    'iDatebox', 'iDatetimebox', 'iTagbox', 'iNumberbox',
    'iSpinner', 'iNumberspinner', 'iTimespinner', 'iDatetimespinner'], function (plugin) {
    var _plugin = plugin.toLowerCase().substr(1);
    if ($.fn[_plugin]) {
        $.fn[_plugin].defaults.missingMessage = '必填';
    }
    if ($.fn[plugin]) {
        $.fn[plugin].defaults.missingMessage = '必填';
    }
});
$.map(['iValidatebox', 'iTextbox', 'iPasswordbox', 'iFilebox', 'iSearchbox',
    'iCombo', 'iCombobox', 'iCombogrid', 'iCombotree', 'iCombotreegrid',
    'iDatebox', 'iDatetimebox', 'iTagbox', 'iNumberbox',
    'iSpinner', 'iNumberspinner', 'iTimespinner', 'iDatetimespinner', 'iLinkbutton', 'iSwitchbutton'], function (plugin) {
    var _plugin = plugin.toLowerCase().substr(1);
    if ($.fn[_plugin]) {
        $.fn[_plugin].defaults.height = 30;
    }
    if ($.fn[plugin]) {
        $.fn[plugin].defaults.height = 30;
    }
});
if ($.fn.validatebox) {
    $.fn.validatebox.defaults.rules.email.message = '请输入有效的电子邮件地址';
    $.fn.validatebox.defaults.rules.url.message = '请输入有效的URL地址';
    $.fn.validatebox.defaults.rules.length.message = '输入内容长度必须介于{0}和{1}之间';
    $.fn.validatebox.defaults.rules.remote.message = '请修正该字段';
}
if ($.fn.calendar) {
    $.fn.calendar.defaults.weeks = ['日', '一', '二', '三', '四', '五', '六'];
    $.fn.calendar.defaults.months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
}
if ($.fn.datebox) {
    $.fn.datebox.defaults.currentText = '今天';
    $.fn.datebox.defaults.closeText = '关闭';
    $.fn.datebox.defaults.okText = '确定';
    $.fn.datebox.defaults.formatter = function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
    };
    $.fn.datebox.defaults.parser = function (s) {
        if (!s) return new Date();
        var ss = s.split('-');
        var y = parseInt(ss[0], 10);
        var m = parseInt(ss[1], 10);
        var d = parseInt(ss[2], 10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
            return new Date(y, m - 1, d);
        } else {
            return new Date();
        }
    };
}
if ($.fn.datetimebox && $.fn.datebox) {
    $.extend($.fn.datetimebox.defaults, {
        currentText: $.fn.datebox.defaults.currentText,
        closeText: $.fn.datebox.defaults.closeText,
        okText: $.fn.datebox.defaults.okText
    });
}
if ($.fn.datetimespinner) {
    $.fn.datetimespinner.defaults.selections = [[0, 4], [5, 7], [8, 10], [11, 13], [14, 16], [17, 19]]
}

//自定义汉化信息
if ($.fn.panel) {
    $.fn.dialog.defaults.loadingMessage = "";
}
if ($.fn.edatagrid) {
    $.fn.edatagrid.defaults.loadMsg = "加载中，请稍候...";
}
if ($.fn.datagrid && $.fn.datagrid.defaults && $.fn.datagrid.defaults.operators.nofilter) {
    $.fn.datagrid.defaults.operators.nofilter.text = "无";
    $.fn.datagrid.defaults.operators.contains.text = "包含";
    $.fn.datagrid.defaults.operators.equal.text = "=等于";
    $.fn.datagrid.defaults.operators.notequal.text = "!=不等于";
    $.fn.datagrid.defaults.operators.beginwith.text = "^=以*开始";
    $.fn.datagrid.defaults.operators.endwith.text = "$=以*结束";
    $.fn.datagrid.defaults.operators.less.text = "<小于";
    $.fn.datagrid.defaults.operators.lessorequal.text = "<=小于等于";
    $.fn.datagrid.defaults.operators.greater.text = ">大于";
    $.fn.datagrid.defaults.operators.greaterorequal.text = ">=大于等于";
}

if ($.fn.combogrid) {
    $.fn.combogrid.defaults.loadMsg = "加载中，请稍候...";
}

if ($.fn.combotreegrid) {
    $.fn.combotreegrid.defaults.loadMsg = "加载中，请稍候...";
}

/* TopJUI默认属性 */
