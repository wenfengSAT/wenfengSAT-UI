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
    $.fn.iTreegrid = function (options) {
        var defaults = {
            //gridId       : element.get(0).id,
            gridId: this.selector,
            treegridContextId: 'treegridContext',
            url: ctx + '/system/codeItem/getListByCodeSetIdAndLevelId',
            queryParams: {"codeSetId": $.getUrlParam("codeSetId"), "levelId": $.getUrlParam("levelId")},//首次查询参数
            onBeforeExpandUrl: ctx + "/system/codeItem/getListByPid",
            idField: 'id',
            treeField: 'text',
            fit: true,
            fitColumns: true,
            border: false,
            toolbar: this.selector + "-toolbar",
            pagination: false,
            pageNumber: 1,
            pageSize: 20,
            pageList: [10, 20, 30, 40, 50],
            animate: true,
            columns: [[
                {field: 'text', title: '名称'},
                {field: 'codeSetId', title: '体系代码', width: 100},
                {field: 'id', title: '编号'},
                {field: 'pid', title: '父级编号'},
                {field: 'levelId', title: '层级', width: 100},
                {field: 'sort', title: '排序', width: 100},
                {field: 'code', title: '代码', width: 100},
                {field: 'status', title: '状态', width: 100}
            ]],
            checkOnSelect: false,
            selectOnCheck: false,
            onBeforeExpand: function (row) {
                $(this).treegrid('options').url = replaceUrlParamValueByBrace(options.expandUrl, row);
            },
            onLoadSuccess: function () {
                var rootNode = $(options.gridId).treegrid('getRoot');
                if (rootNode) {
                    $(options.gridId).treegrid("expand", rootNode.id);
                }
                $(this).treegrid('options').url = appendSourceUrlParam(options.url);
            },
            onContextMenu: function (e, row) {
                /*e.preventDefault();
                 // 查找节点
                 $(this).treegrid('select', row[options.idField]);
                 // 显示快捷菜单
                 $("#" + options.treegridContextId).menu('show', {
                 left: e.pageX,
                 top: e.pageY
                 });*/
            },
            onClickRow: function (row) {
                //级联选择
                $("#" + options.id).treegrid('cascadeCheck', {
                    id: row.id, //节点ID
                    deepCascade: true //深度级联
                });

                //传递给要刷新表格的参数
                if (typeof options.childGrid == "object") {
                    var newQueryParams = {};
                    newQueryParams = getSelectedRowJson(options.childGrid.params, row);

                    var refreshGridIdArr = options.childGrid.grids;
                    for (var i = 0; i < refreshGridIdArr.length; i++) {
                        var $grid = $("#" + refreshGridIdArr[i].id);

                        if (refreshGridIdArr[i].type == "datagrid") {
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
                            var href = replaceUrlParamValueByBrace(refreshGridIdArr[i].href, row);
                            $grid.panel('refresh', href);
                        }
                    }
                }

                if (typeof options.childTab == "object") {
                    var childTabArr = options.childTab.tabs;
                    for (var i = 0; i < childTabArr.length; i++) {
                        var $tabsElement = $('#' + childTabArr[i].id);
                        var $tabsOptions = $tabsElement.tabs('options');
                        var index = $tabsElement.tabs('getTabIndex', $tabsElement.tabs('getSelected'));
                        var tabsComponent = $tabsOptions.tabs;
                        var $element = $("#" + tabsComponent[index].id);

                        var newQueryParams = {};

                        newQueryParams = getSelectedRowJson(childTabArr[i].params, row);

                        if (tabsComponent[index]["type"] == "datagrid") {
                            //获得表格原有的参数
                            var queryParams = $element.datagrid('options').queryParams;
                            $element.datagrid('options').queryParams = $.extend({}, queryParams, newQueryParams);
                            $element.datagrid('load');
                        } else if (tabsComponent[index]["type"] == "treegrid") {
                            //获得表格原有的参数
                            var queryParams = $element.treegrid('options').queryParams;
                            $element.treegrid('options').queryParams = $.extend({}, queryParams, newQueryParams);
                            $element.treegrid('load');
                        } else if (tabsComponent[index]["type"] == "panel") {
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
        }

        var options = $.extend(defaults, options);
        options.url = appendSourceUrlParam(options.url);

        $(this).treegrid(options);
    }

    /* http://blog.csdn.net/yongjiandan/article/details/8061944 */

    /**
     * 扩展树表格级联勾选方法：
     * @param {Object} container
     * @param {Object} options
     * @return {TypeName}
     */
    $.extend($.fn.treegrid.methods, {
        /**
         * 级联选择
         * @param {Object} target
         * @param {Object} param
         *      param包括两个参数:
         *          id:勾选的节点ID
         *          deepCascade:是否深度级联
         * @return {TypeName}
         */
        cascadeCheck: function (target, param) {
            var opts = $.data(target[0], "treegrid").options;
            if (opts.singleSelect)
                return;
            var idField = opts.idField;//这里的idField其实就是API里方法的id参数
            var status = false;//用来标记当前节点的状态，true:勾选，false:未勾选
            var selectNodes = $(target.selector).treegrid('getSelections');//获取当前选中项
            for (var i = 0; i < selectNodes.length; i++) {
                if (selectNodes[i][idField] == param.id)
                    status = true;
            }
            //级联选择父节点
            selectParent(target, param.id, idField, status);
            selectChildren(target, param.id, idField, param.deepCascade, status);
            /**
             * 级联选择父节点
             * @param {Object} target
             * @param {Object} id 节点ID
             * @param {Object} status 节点状态，true:勾选，false:未勾选
             * @return {TypeName}
             */
            function selectParent(target, id, idField, status) {
                var parent = $(target.selector).treegrid('getParent', id);
                if (parent) {
                    var parentId = parent[idField];
                    if (status)
                        $(target.selector).treegrid('select', parentId);
                    else
                        $(target.selector).treegrid('unselect', parentId);
                    selectParent(target, parentId, idField, status);
                }
            }

            /**
             * 级联选择子节点
             * @param {Object} target
             * @param {Object} id 节点ID
             * @param {Object} deepCascade 是否深度级联
             * @param {Object} status 节点状态，true:勾选，false:未勾选
             * @return {TypeName}
             */
            function selectChildren(target, id, idField, deepCascade, status) {
                //深度级联时先展开节点
                if (!status && deepCascade)
                    $(target).treegrid('expand', id);
                //根据ID获取下层孩子节点
                var children = $(target).treegrid('getChildren', id);
                for (var i = 0; i < children.length; i++) {
                    var childId = children[i][idField];
                    if (status)
                        $(target).treegrid('select', childId);
                    else
                        $(target).treegrid('unselect', childId);
                    selectChildren(target, childId, idField, deepCascade, status);//递归选择子节点
                }
            }
        }
    });

    /**
     * 扩展树表格级联选择（点击checkbox才生效）：
     *        自定义两个属性：
     *        cascadeCheck ：普通级联（不包括未加载的子节点）
     *        deepCascadeCheck ：深度级联（包括未加载的子节点）
     */
    /*$.extend($.fn.treegrid.defaults, {
        onLoadSuccess: function () {
            var target = $(this);
            var opts = $.data(this, "treegrid").options;
            var panel = $(this).datagrid("getPanel");
            var gridBody = panel.find("div.datagrid-body");
            var idField = opts.idField;//这里的idField其实就是API里方法的id参数
            gridBody.find("div.datagrid-cell-check input[type=checkbox]").unbind(".treegrid").click(function (e) {
                if (opts.singleSelect) return;//单选不管
                if (opts.cascadeCheck || opts.deepCascadeCheck) {
                    var id = $(this).parent().parent().parent().attr("node-id");
                    var status = false;
                    if ($(this).attr("checked")) status = true;
                    //级联选择父节点
                    selectParent(target, id, idField, status);
                    selectChildren(target, id, idField, opts.deepCascadeCheck, status);
                    /!**
                     * 级联选择父节点
                     * @param {Object} target
                     * @param {Object} id 节点ID
                     * @param {Object} status 节点状态，true:勾选，false:未勾选
                     * @return {TypeName}
                     *!/
                    function selectParent(target, id, idField, status) {
                        var parent = target.treegrid('getParent', id);
                        if (parent) {
                            var parentId = parent[idField];
                            if (status)
                                target.treegrid('select', parentId);
                            else
                                target.treegrid('unselect', parentId);
                            selectParent(target, parentId, idField, status);
                        }
                    }

                    /!**
                     * 级联选择子节点
                     * @param {Object} target
                     * @param {Object} id 节点ID
                     * @param {Object} deepCascade 是否深度级联
                     * @param {Object} status 节点状态，true:勾选，false:未勾选
                     * @return {TypeName}
                     *!/
                    function selectChildren(target, id, idField, deepCascade, status) {
                        //深度级联时先展开节点
                        if (status && deepCascade)
                            target.treegrid('expand', id);
                        //根据ID获取下层孩子节点
                        var children = target.treegrid('getChildren', id);
                        for (var i = 0; i < children.length; i++) {
                            var childId = children[i][idField];
                            if (status)
                                target.treegrid('select', childId);
                            else
                                target.treegrid('unselect', childId);
                            selectChildren(target, childId, idField, deepCascade, status);//递归选择子节点
                        }
                    }
                }
                e.stopPropagation();//停止事件传播
            });
        }
    });*/

})(jQuery);