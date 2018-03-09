(function ($) {

    $.fn.iMenubutton = function (options) {
        var defaults = {
            plain: true,
            iconCls: 'fa fa-cog',
            hasDownArrow: false,
            onClick: function () {
                $(this).menubutton(options.clickEvent)
            }
        }

        var options = $.extend(defaults, options);

        $(this).menubutton(options);
    }

    $.extend($.fn.menubutton.methods, {

        openDialog: function (target, options) {
            //var options = $(this).menubutton('options'); // 事件中获取参数
            var options = $.data(target[0], "menubutton").options;
            //var options = target[0].dataset.options;
            var dialog = options.dialog;
            var grid = options.grid;
            var parentGrid = options.parentGrid;

            options.dialog.leftMargin = ($(document.body).width() * 0.5) - (dialog.width * 0.5);
            options.dialog.topMargin = ($(document.body).height() * 0.5) - (dialog.height * 0.5);

            if (typeof parentGrid == "object") {
                openDialogAndloadDataByParentGrid(options);
            } else if (dialog.url) {
                openDialogAndloadDataByUrl(options);
            } else {
                if (grid.uncheckedMsg) {
                    var rows = getCheckedRowsData(grid.type, grid.id);
                    if (rows.length == 0) {
                        $.messager.alert(
                            topJUI.language.message.title.operationTips,
                            options.grid.uncheckedMsg,
                            topJUI.language.message.icon.warning
                        );
                        return;
                    }
                }
                if (dialog.onBeforeOpen != "undefined") {
                    // 回调执行传入的自定义函数
                    executeCallBackFun(dialog.onBeforeOpen, options);
                }

                options.href = appendSourceUrlParam(dialog.href);
                var $dialogObj = $("#" + dialog.id);
                $dialogObj.iDialog(options);
                if (options.dialog.href.indexOf("{") != -1) {
                    var row = getSelectedRowData(options.grid.type, options.grid.id);
                    // 替换本表中选中行占位值
                    var newHref = replaceUrlParamValueByBrace(appendSourceUrlParam(dialog.href), row);
                    $dialogObj.dialog({
                        href: newHref
                    });
                    //$dialogObj.dialog('open').dialog("refresh", newHref); //加载两次href指定的页面
                    $dialogObj.dialog('open');
                } else {
                    $dialogObj.dialog('open');
                }
            }
        },
        openTab: function (target, options) {
            var options = $.data(target[0], "menubutton").options;
            addParentTab(options);
        },
        openWindow: function (target, options) {
            var options = $.data(target[0], "menubutton").options;
            openWindow(options);
        },
        doAjax: function (target, options) {
            var options = $.data(target[0], "menubutton").options;
            doAjaxHandler(options);
        },
        request: function (target, options) {
            var options = $.data(target[0], "menubutton").options;
            requestHandler(options);
        },
        delete: function (target, options) {
            var options = $.data(target[0], "menubutton").options;
            deleteHandler(options);
        },
        filter: function (target, options) {
            var options = $.data(target[0], "menubutton").options;
            filterHandler(options);
        },
        search: function (target, options) {
            var options = $.data(target[0], "menubutton").options;
            searchHandler(options);
        },
        export: function (target, options) {
            var options = $.data(target[0], "menubutton").options;
            exportHandler(options);
        },
        import: function (target, options) {
            var options = $.data(target[0], "menubutton").options;
            importHandler(options);
        }

    });

})(jQuery);