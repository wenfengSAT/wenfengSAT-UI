/**
 *
 一、Data属性：
 <table id="cxdm"
 data-toggle="datagrid"
 data-url="${ctx}/System/Article/getAllArticleList"
 data-columns='[{"field":"id","title":"ID","align":"center"},{"field":"title","title":"标题","align":"left"},{"field":"creator","title":"发布人","align":"center"},{"field":"createTime","title":"发布时间","align":"center"}]'
 ></table>

 二、jQuery API：
 <script type="text/javascript">
 $(function(){
		$('#cxdm').myDatagrid({
			url:${ctx} + '/System/Article/getAllArticleList',
			columns:[{field:'id',title:'ID',align:'center'},
			         {field:'title',title:'标题',align:'left',formatter:function(val,rec) {return "<a href=${ctx} + '/System/Article/edit?id="+rec.id+"'>"+val+"</a>";}},
					 {field:'creator',title: '发布人',align: 'center'},
					 {field:'createTime',title: '发布时间',align: 'center'}]
		});
	})
 </script>
 *
 */

(function ($) {
    $.fn.iDatagrid = function (options) {
        var defaults = {
            //datagridId       : element.get(0).id,
            datagridId: this.selector,
            width: '100%',
            height: '100%',
            autoRowHeight: false,
            nowrap: true,
            fit: true,
            fitColumns: false,
            border: false,
            striped: true,
            singleSelect: true,
            url: "",
            toolbar: this.selector + "-toolbar",
            columns: [[{field: 'uuid', title: 'UUID', align: 'center'},
                {field: 'title', title: '标题', align: 'left'},
                {field: 'creator', title: '发布人', align: 'center'},
                {field: 'createTime', title: '发布时间', align: 'center'}]],
            multiSort: false,
            sortName: "",
            sortOrder: "",
            //toolbar          : this.selector + 'Toolbar',
            addButton: true,
            editButton: true,
            deleteButton: true,
            searchButton: true,
            addDialogTitle: '新增',
            editDialogTitle: '编辑',
            rownumbers: true,
            pagination: true,
            pageNumber: 1,
            pageSize: 20,
            pageList: [20, 30, 40, 50, 100, 200],
            editable: true,
            queryFormId: "",      // search form id
            queryAction: "",      // search from action
            infoFormId: "",      // info form id
            infoAddAction: "",    	// info data add action
            infoUpdateAction: "", 		// info update action
            infoDlgDivId: "",     	// info data detail/edit dlg div id
            deleteAction: "",     	// data delete action  from ajax
            deleteMsg: "",      // show the message before do delete
            moveDlgDivId: "",     	// the div id of dialog for move show
            moveFormId: "",      // the form id for move
            moveTreeId: "",      // the combotree id for move
            queryParams: {},      // search params name for post, must to be {}
            queryParamsVCN: {},   	// search params value from htmlcontrol name, must to be {}
            checkOnSelect: false,
            selectOnCheck: false,
            kindEditor: [],
            addDialogId: '#editDialog',
            editDialogId: '#editDialog',
            gridParam: 'uuid'
        }

        var options = $.extend(defaults, options);

        var controllerUrl = getUrl('controller');
        options.url = options.url ? options.url : controllerUrl + "getPageSetData";
        options.getDetailUrl = options.getDetailUrl ? options.getDetailUrl : controllerUrl + "getDetailByUuid";
        options.addDialogHref = options.addDialogHref ? options.addDialogHref : controllerUrl + "add";
        options.saveUrl = options.saveUrl ? options.saveUrl : controllerUrl + "save";
        options.editDialogHref = options.editDialogHref ? options.editDialogHref : controllerUrl + "edit";
        options.updateUrl = options.updateUrl ? options.updateUrl : controllerUrl + "update";
        options.deleteUrl = options.deleteUrl ? options.deleteUrl : controllerUrl + "delete";

        $(this).datagrid({
            filterBtnIconCls: 'fa fa-filter',
            remoteFilter: true,
            width: options.width,
            height: options.height,
            autoRowHeight: options.autoRowHeight,
            nowrap: options.nowrap,
            striped: options.striped,
            singleSelect: options.singleSelect,
            url: appendSourceUrlParam(options.url),
            toolbar: options.toolbar,
            //queryParams : {},
            loadMsg: options.loadMsg,
            rownumbers: options.rownumbers,
            pagination: options.pagination,
            paginPosition: 'bottom',
            pageNumber: options.pageNumber,
            pageSize: options.pageSize,
            pageList: options.pageList,
            frozenColumns: options.frozenColumns,
            columns: options.columns,
            multiSort: options.multiSort,
            sortName: options.sortName,
            sortOrder: options.sortOrder,
            fit: options.fit,
            fitColumns: options.fitColumns,
            border: options.border,
            checkOnSelect: options.checkOnSelect,
            selectOnCheck: options.selectOnCheck,
            //bodyCls : "leftBottomBorder",
            onBeforeLoad: function (param) {

            },
            onLoadSuccess: function () {

                //$('#' + options.id).datagrid('doCellTip', {cls: {'background-color': 'red'}, delay: 500});
                $('#' + options.id).datagrid('doCellTip', {cls: {}, delay: 500});

                //$(this).datagrid("fixRownumber");
                if (typeof options.childGrid == "object") {
                    var refreshGridIdArr = options.childGrid.grids;
                    for (var i = 0; i < refreshGridIdArr.length; i++) {
                        var syncReload = refreshGridIdArr[i].syncReload;
                        if (syncReload) {
                            var $grid = $("#" + refreshGridIdArr[i].id);
                            if (refreshGridIdArr[i]["type"] == "datagrid") {
                                $grid.datagrid('load');
                            } else if (refreshGridIdArr[i].type == "treegrid") {
                                $grid.treegrid('load');
                            }
                        }
                    }
                }
            },
            onClickRow: function (index, row) {
                //传递给要刷新表格的参数
                if (typeof options.childGrid == "object") {
                    var newQueryParams = {};
                    newQueryParams = getSelectedRowJson(options.childGrid.params, row);

                    var refreshGridIdArr = options.childGrid.grids;
                    for (var i = 0; i < refreshGridIdArr.length; i++) {
                        // 通过闭包嵌套和不同时序的执行来刷新grid
                        (function (i) {
                            setTimeout(function () {
                                var $grid = $("#" + refreshGridIdArr[i].id);
                                if (refreshGridIdArr[i]["type"] == "datagrid") {
                                    //获得表格原有的参数
                                    var queryParams = $grid.datagrid('options').queryParams;
                                    $grid.datagrid('options').queryParams = $.extend({}, queryParams, newQueryParams);
                                    $grid.datagrid('load');
                                } else if (refreshGridIdArr[i].type == "treegrid") {
                                    //获得表格原有的参数
                                    var queryParams = $grid.treegrid('options').queryParams;
                                    $grid.treegrid('options').queryParams = $.extend({}, queryParams, newQueryParams);
                                    $grid.treegrid('load');
                                } else if (refreshGridIdArr[i].type == "panel") {
                                    var href = replaceUrlParamValueByBrace(refreshGridIdArr[i].href, newQueryParams);
                                    $grid.panel('refresh', href);
                                }
                            }, i * 100);
                        })(i);
                    }
                }

                if (typeof options.childTab == "object") {
                    var childTabArr = options.childTab.tabs;
                    for (var i = 0; i < childTabArr.length; i++) {
                        var $tabsElement = $('#' + childTabArr[i].id);
                        var $tabsOptions = $tabsElement.tabs('options');
                        var selectedIndex = $tabsElement.tabs('getTabIndex', $tabsElement.tabs('getSelected'));
                        var tabsComponent = $tabsOptions.tabs;
                        var $element = $("#" + tabsComponent[selectedIndex].id);

                        var newQueryParams = {};

                        newQueryParams = getSelectedRowJson(childTabArr[i].params, row);

                        if (tabsComponent[selectedIndex]["type"] == "datagrid") {
                            //获得表格原有的参数
                            var queryParams = $element.datagrid('options').queryParams;
                            $element.datagrid('options').queryParams = $.extend({}, queryParams, newQueryParams);
                            $element.datagrid('load');
                        } else if (tabsComponent[selectedIndex]["type"] == "treegrid") {
                            //获得表格原有的参数
                            var queryParams = $element.treegrid('options').queryParams;
                            $element.treegrid('options').queryParams = $.extend({}, queryParams, newQueryParams);
                            $element.treegrid('load');
                        } else if (tabsComponent[selectedIndex]["type"] == "panel") {
                            var panelOptions = $element.panel('options');
                            var newHref = replaceUrlParamValueByBrace(panelOptions.dynamicHref, row);
                            //$element.panel('refresh', newHref);
                            var iframe = '<iframe src="' + newHref + '" scrolling="auto" frameborder="0" style="width:100%;height:100%;"></iframe>';
                            $element.panel({
                                content: iframe
                            });
                        }
                    }
                }
            }

        });

        //$(this).datagrid('disableFilter', options.filterOption);

        //重新加载datagrid的数据
        //$(this).datagrid('reload');

    }

    /**
     * @author 小策一喋
     * @requires jQuery,EasyUI
     * 为datagrid、treegrid增加表头菜单，用于显示或隐藏列，注意：冻结列不在此菜单中
     */
    var createGridHeaderContextMenu = function (e, field) {
        e.preventDefault();
        var grid = $(this);
        /* grid本身 */
        var headerContextMenu = this.headerContextMenu;
        /* grid上的列头菜单对象 */
        var okCls = 'tree-checkbox1'; // 选中
        var emptyCls = 'tree-checkbox0'; // 取消
        if (!headerContextMenu) {
            var tmenu = $('<div style="width:150px;"></div>').appendTo('body');
            var fields = grid.datagrid('getColumnFields');
            for (var i = 0; i < fields.length; i++) {
                var fieldOption = grid.datagrid('getColumnOption', fields[i]);
                if (!fieldOption.hidden) {
                    $('<div iconCls="' + okCls + '" field="' + fields[i] + '"/>').html(fieldOption.title).appendTo(tmenu);
                } else {
                    $('<div iconCls="' + emptyCls + '" field="' + fields[i] + '"/>').html(fieldOption.title).appendTo(tmenu);
                }
            }
            headerContextMenu = this.headerContextMenu = tmenu.menu({
                onClick: function (item) {
                    var field = $(item.target).attr('field');
                    if (item.iconCls == okCls) {
                        grid.datagrid('hideColumn', field);
                        $(this).menu('setIcon', {
                            target: item.target,
                            iconCls: emptyCls
                        });
                    } else {
                        grid.datagrid('showColumn', field);
                        $(this).menu('setIcon', {
                            target: item.target,
                            iconCls: okCls
                        });
                    }
                    headerContextMenu.menu('show');
                }
            });
        }
        headerContextMenu.menu('show', {
            left: e.pageX,
            top: e.pageY
        });
    };
    $.fn.datagrid.defaults.onHeaderContextMenu = createGridHeaderContextMenu;
    $.fn.treegrid.defaults.onHeaderContextMenu = createGridHeaderContextMenu;

    $.extend($.fn.datagrid.methods, {
        /**
         * 单选ajax提交
         * @param target
         * @param options
         */
        singleSelectedAjax: function (target, options) {
            // 替换本表的占位数据
            var row = getSelectedRowData(options.grid.type, options.grid.id);
            if (row == null) {
                $.messager.alert(
                    topJUI.language.message.title.operationTips,
                    topJUI.language.message.msg.selectSelfGrid,
                    topJUI.language.message.icon.warning
                );
                return;
            }
            // 替换本表中选择的单行字段值
            options.url = replaceUrlParamValueByBrace(options.url, row);
            $.messager.confirm(
                topJUI.language.message.title.confirmTips,
                options.comfirmMsg,
                function (flag) {
                    if (flag && doAjax(options)) {
                        refreshGrid(options.grid.type, options.grid.id);
                    }
                }
            );
        },
        /**
         * 多选ajax提交
         * @param target
         * @param options
         */
        multiSelectedAjax: function (target, options) {
            //var datagridOpts = $.data(target[0], "datagrid").options;
            // 替换本表的占位数据
            var rows = getSelectedRowsData(options.grid.type, options.grid.id);
            if (rows.length == 0) {
                $.messager.alert(
                    topJUI.language.message.title.operationTips,
                    topJUI.language.message.msg.selectSelfGrid,
                    topJUI.language.message.icon.warning
                );
                return;
            }
            $.messager.confirm(
                topJUI.language.message.title.confirmTips,
                options.comfirmMsg,
                function (flag) {
                    if (options.grid.param == undefined) {
                        //options.grid.param = {uuid: topJUI.config.pkName};
                        options.grid.param = topJUI.config.pkName + ":" + topJUI.config.pkName;
                    }
                    options.grid.param = param2JsonObj(options.grid.param);
                    options.ajaxData = convertParamObj2ObjData(options.grid.param, rows);
                    if (flag && doAjax(options)) {
                        refreshGrid(options.grid.type, options.grid.id);
                    }
                }
            );
        },
        /**
         * 勾选ajax提交
         * @param target
         * @param options
         */
        multiCheckedAjax: function (target, options) {
            //var datagridOpts = $.data(target[0], "datagrid").options;
            // 替换本表的占位数据
            var rows = getCheckedRowsData(options.grid.type, options.grid.id);
            if (rows.length == 0) {
                $.messager.alert(
                    topJUI.language.message.title.operationTips,
                    options.grid.uncheckedMsg,
                    topJUI.language.message.icon.warning
                );
                return;
            }
            $.messager.confirm(
                topJUI.language.message.title.confirmTips,
                options.comfirmMsg,
                function (flag) {
                    if (options.grid.param == undefined) {
                        //options.grid.param = {uuid: topJUI.config.pkName};
                        options.grid.param = topJUI.config.pkName + ":" + topJUI.config.pkName;
                    }
                    //options.grid.param = param2JsonObj(options.grid.param);
                    //options.ajaxData = convertParamObj2ObjData(options.grid.param, rows);
                    options.ajaxData = convertParamObj2ObjData(param2JsonObj(options.grid.param), rows);
                    if (flag && doAjax(options)) {
                        refreshGrid(options.grid.type, options.grid.id);
                    }
                }
            );
        },
        /**
         * http://blog.csdn.net/aa1049372051/article/details/22849891
         * 开启消息提示功能
         * @param {} jq
         * @param {} params 提示消息框的样式
         * @return {}
         */
        doCellTip: function (jq, params) {
            function showTip(data, td, e) {
                if ($(td).text() == "")
                    return;
                data.tooltip.text($(td).text()).css({
                    top: (e.pageY + 10) + 'px',
                    left: (e.pageX + 20) + 'px',
                    'z-index': $.fn.window.defaults.zIndex,
                    display: 'block'
                });
            };
            return jq.each(function () {
                var grid = $(this);
                var options = $(this).data('datagrid'); //获取 datagrid 数据

                if (!options.tooltip) {
                    var panel = grid.datagrid('getPanel').panel('panel');
                    var defaultCls = {
                        'border': '1px solid #333',
                        'padding': '2px',
                        'color': '#333',
                        'background': '#f7f5d1',
                        'position': 'absolute',
                        'max-width': '800px',
                        'border-radius': '4px',
                        '-moz-border-radius': '4px',
                        '-webkit-border-radius': '4px',
                        'display': 'none'
                    }
                    var tooltip = $("<div id='celltip'></div>").appendTo('body');
                    tooltip.css($.extend({}, defaultCls, params.cls));
                    options.tooltip = tooltip;
                    panel.find('.datagrid-body').each(function () {
                        var delegateEle = $(this).find('> div.datagrid-body-inner').length
                            ? $(this).find('> div.datagrid-body-inner')[0]
                            : this;
                        $(delegateEle).undelegate('td', 'mouseover').undelegate(
                            'td', 'mouseout').undelegate('td', 'mousemove')
                            .delegate('td', {
                                'mouseover': function (e) {
                                    if (params.delay) {
                                        if (options.tipDelayTime)
                                            clearTimeout(options.tipDelayTime);
                                        var that = this;
                                        options.tipDelayTime = setTimeout(
                                            function () {
                                                showTip(options, that, e);
                                            }, params.delay);
                                    } else {
                                        showTip(options, this, e);
                                    }

                                },
                                'mouseout': function (e) {
                                    if (options.tipDelayTime)
                                        clearTimeout(options.tipDelayTime);
                                    options.tooltip.css({
                                        'display': 'none'
                                    });
                                },
                                'mousemove': function (e) {
                                    var that = this;
                                    if (options.tipDelayTime) {
                                        clearTimeout(options.tipDelayTime);
                                        options.tipDelayTime = setTimeout(
                                            function () {
                                                showTip(options, that, e);
                                            }, params.delay);
                                    } else {
                                        showTip(options, that, e);
                                    }
                                }
                            });
                    });

                }

            });
        },
        /**
         * 关闭消息提示功能
         * @param {} jq
         * @return {}
         */
        cancelCellTip: function (jq) {
            return jq.each(function () {
                var data = $(this).data('datagrid');
                if (data.tooltip) {
                    data.tooltip.remove();
                    data.tooltip = null;
                    var panel = $(this).datagrid('getPanel').panel('panel');
                    panel.find('.datagrid-body').undelegate('td',
                        'mouseover').undelegate('td', 'mouseout')
                        .undelegate('td', 'mousemove')
                }
                if (data.tipDelayTime) {
                    clearTimeout(data.tipDelayTime);
                    data.tipDelayTime = null;
                }
            });
        }
    });


})(jQuery);