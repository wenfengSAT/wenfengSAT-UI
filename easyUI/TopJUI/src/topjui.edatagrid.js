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
    $.fn.iEdatagrid = function (options) {
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
            pageList: [10, 20, 30, 40, 50, 100, 200, 300, 400, 500],
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
        options.destroyUrl = options.destroyUrl ? options.destroyUrl : controllerUrl + "delete";

        $(this).edatagrid({
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
            saveUrl: options.saveUrl,
            updateUrl: options.updateUrl,
            destroyUrl: options.destroyUrl,
            onBeforeLoad: function (param) {

            },
            onLoadSuccess: function () {
                //$(this).datagrid("fixRownumber");
            },
            onClickRow: function (index, row) {
                //传递给要刷新表格的参数
                if (typeof options.childGrid == "object") {
                    var newQueryParams = {};
                    newQueryParams = getSelectedRowJson(options.childGrid.param, row);

                    var refreshGridIdArr = options.childGrid.grid;
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
            }

        });

        //$(this).datagrid('disableFilter', options.filterOption);

        //重新加载datagrid的数据
        //$(this).datagrid('reload');

    }

    /**
     * @author 孙宇
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


})(jQuery);