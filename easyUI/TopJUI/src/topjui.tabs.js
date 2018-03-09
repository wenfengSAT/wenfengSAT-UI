(function ($) {

    $.fn.iTabs = function (options) {

        var initShow = true;

        var defaults = {
            title: '',
            closable: true,
            iconCls: '',
            content: '',
            //href: '/system/page/selectRow',
            border: true,
            fit: true,
            onSelect: function (title, index) {
                var tabs = options.tabs;
                var $element = $('#' + options.id).tabs('getTab', index);

                var panelOptions = $element.panel('options');
                if (panelOptions.href != undefined) {
                    var iframe = '<iframe src="' + panelOptions.href + '" scrolling="auto" frameborder="0" style="width:100%;height:100%;"></iframe>';
                    $element.panel({
                        content: iframe
                    });
                    $element.panel('refresh');
                } else {
                    //初始化显示tabs时，不加载里面的内容
                    if (!initShow) {
                        // 获得grid或panel对象
                        var $gridOrPanelObj = $("#" + tabs[index].id);
                        var newQueryParams = {};
                        if (tabs[index].type == "datagrid") {
                            var gridOptions = $gridOrPanelObj.datagrid('options');
                            var $parentGrid = $('#' + gridOptions.parentGrid.id);
                            if (gridOptions.parentGrid.type == "datagrid")
                                var selectedRow = $parentGrid.datagrid("getSelected");
                            if (gridOptions.parentGrid.type == "treegrid")
                                var selectedRow = $parentGrid.treegrid("getSelected");
                            if (selectedRow) {
                                newQueryParams = getSelectedRowJson(gridOptions.parentGrid.param, selectedRow);
                                //获得表格原有的参数
                                var queryParams = $gridOrPanelObj.datagrid('options').queryParams;
                                $gridOrPanelObj.datagrid('options').queryParams = $.extend({}, queryParams, newQueryParams);
                                $gridOrPanelObj.datagrid('load');
                            } else {
                                $gridOrPanelObj.datagrid('load');
                            }
                        } else if (tabs[index].type == "treegrid") {
                            var gridOptions = $gridOrPanelObj.panel('options');
                            var $parentGrid = $('#' + gridOptions.parentGrid.id);
                            if (gridOptions.parentGrid.type == "datagrid")
                                var selectedRow = $parentGrid.datagrid("getSelected");
                            if (gridOptions.parentGrid.type == "treegrid")
                                var selectedRow = $parentGrid.treegrid("getSelected");
                            if (selectedRow) {
                                newQueryParams = getSelectedRowJson(gridOptions.parentGrid.param, selectedRow);
                                //获得表格原有的参数
                                var queryParams = $gridOrPanelObj.datagrid('options').queryParams;
                                $gridOrPanelObj.treegrid('options').queryParams = $.extend({}, queryParams, newQueryParams);
                                $gridOrPanelObj.treegrid('load');
                            } else {
                                $gridOrPanelObj.treegrid('load');
                            }
                        } else if (tabs[index].type == "panel") {
                            var panelOptions = $gridOrPanelObj.panel('options');
                            var $parentGrid = $('#' + panelOptions.parentGrid.id);
                            if (panelOptions.parentGrid.type == "datagrid")
                                var selectedRow = $parentGrid.datagrid("getSelected");
                            if (panelOptions.parentGrid.type == "treegrid")
                                var selectedRow = $parentGrid.treegrid("getSelected");
                            if (selectedRow) {
                                var newHref = replaceUrlParamValueByBrace(panelOptions.dynamicHref, selectedRow);
                                //$element.panel('refresh', newHref);
                                var iframe = '<iframe src="' + newHref + '" scrolling="auto" frameborder="0" style="width:100%;height:100%;"></iframe>';
                                $gridOrPanelObj.panel({
                                    content: iframe
                                });
                            } else {
                                $gridOrPanelObj.panel('refresh');
                            }
                        }
                    }
                    initShow = false;
                }
            },
            onLoad: function (panel) {
                //$(this).trigger(topJUI.eventType.initUI.base);
            }
        }

        var options = $.extend(defaults, options);

        $(this).tabs(options);
    }

    // 扩展tabs方法
    $.extend($.fn.tabs.methods, {
        myAdd: function (jq, param) {
            return jq.each(function () {
                $(this).tabs('add', param);
                // 打开Tab页时触发事件
                // $(this).trigger(topJUI.eventType.initUI.base);
            });
        },
        /**
         * 绑定双击事件
         * @param {Object} jq
         * @param {Object} caller 绑定的事件处理程序
         */
        bindDblclick: function (jq, caller) {
            return jq.each(function () {
                var that = this;
                $(this).children("div.tabs-header").find("ul.tabs").undelegate('li', 'dblclick.tabs').delegate('li', 'dblclick.tabs', function (e) {
                    if (caller && typeof(caller) == 'function') {
                        var title = $(this).text();
                        var index = $(that).tabs('getTabIndex', $(that).tabs('getTab', title));
                        caller(index, title);
                    }
                });
            });
        },
        /**
         * 解除绑定双击事件
         * @param {Object} jq
         */
        unbindDblclick: function (jq) {
            return jq.each(function () {
                $(this).children("div.tabs-header").find("ul.tabs").undelegate('li', 'dblclick.tabs');
            });
        }
    });

})(jQuery);