(function ($) {

    $.fn.iLinkbutton = function (options) {
        var defaults = {
            iconCls: 'fa fa-cog',
            plain: false
        }

        var options = $.extend(defaults, options);

        $(this).linkbutton(options);
    }

    $.extend($.fn.linkbutton.defaults, {

        onClick: function () {
            var linkbuttonOptions = $(this).linkbutton('options'); //事件中获取参数

            if (linkbuttonOptions.handler == "ajaxForm" || linkbuttonOptions.handler == "multiAjaxForm") {
                if (linkbuttonOptions.handlerBefore != "undefined") {
                    // 回调执行传入的自定义函数
                    executeCallBackFun(linkbuttonOptions.handlerBefore);
                }

                var defaults = {
                    gridId: 'datagrid',
                    dialogId: 'editDialog'
                }
                linkbuttonOptions = $.extend(defaults, linkbuttonOptions);
                var menubuttonOptions = $("#" + linkbuttonOptions.menubuttonId).linkbutton('options');
                var gridOptions = menubuttonOptions.grid, dialogOptions = menubuttonOptions.dialog;

                // 判断数据是否通过验证
                if (getTabWindow().$("#" + dialogOptions.id).form('validate')) {
                    // 序列化表单数据
                    linkbuttonOptions.ajaxData = getTabWindow().$("#" + dialogOptions.id).serialize();
                    if (linkbuttonOptions.combotreeFields != undefined) {
                        var combotreeParams = '';
                        $.each(options.combotreeFields, function (k, v) {
                            combotreeParams += '&' + v.replace(linkbuttonOptions.postfix, "") + '=' + getTabWindow().$("#" + dialogOptions.id + ' input[textboxname="' + v + '"]').combotree('getValues').join(',') + ', ';
                        });
                        linkbuttonOptions.ajaxData += combotreeParams;
                    }
                    // 提交更新多条数据
                    if (linkbuttonOptions.handler == "multiAjaxForm") {
                        var rows = getCheckedRowsData(gridOptions.type, gridOptions.id);
                        if (rows.length == 0) {
                            $.messager.alert(
                                topJUI.language.message.title.operationTips,
                                topJUI.language.message.msg.checkSelfGrid,
                                topJUI.language.message.icon.warning
                            );
                            return;
                        }
                        var pkName = gridOptions.pkName == undefined ? topJUI.config.pkName : gridOptions.pkName;
                        linkbuttonOptions.ajaxData += '&' + pkName + 's=' + getMultiRowsFieldValue(rows, pkName);
                    }
                    // 执行ajax动作
                    getTabWindow().doAjax(linkbuttonOptions);
                    // 关闭dialog
                    getTabWindow().$("#" + dialogOptions.id).dialog("close");
                    // 重新加载本grid数据
                    if (typeof gridOptions == "object") {
                        if (gridOptions.type == "datagrid") {
                            getTabWindow().$("#" + gridOptions.id).datagrid("reload");
                        } else if (gridOptions.type == "treegrid") {
                            var row = getSelectedRowData(gridOptions.type, gridOptions.id);
                            if (row == null)
                                getTabWindow().$("#" + gridOptions.id).treegrid("reload");
                            else
                                getTabWindow().$("#" + gridOptions.id).treegrid("reload", row[gridOptions.parentIdField]);
                        }
                    }
                    // 重新加载指定的Grid数据
                    refreshGrids(linkbuttonOptions.reload);
                } else {
                    showMessage({
                        statusCode: 300,
                        title: topJUI.language.message.title.operationTips,
                        message: '显示红色边框的字段不能为空',
                        icon: topJUI.language.message.icon.warning
                    });
                }
            }

        }

    });

})(jQuery);