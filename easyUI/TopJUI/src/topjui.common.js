function getTabWindow() {
    var curTabWin = null;
    if (topJUI.config.aloneUse) {
        curTabWin = window;
    } else {
        var curTab = parent.$('#index_tabs').tabs('getSelected');
        // var curTab = $('#index_tabs').tabs('getSelected');
        if (curTab && curTab.find('iframe').length > 0) {
            curTabWin = curTab.find('iframe')[0].contentWindow;
        }
    }
    return curTabWin;
}

//采用jquery easyui loading css效果
function showMask() {
    $("<div class=\"datagrid-mask\"></div>").css({
        display: "block",
        width: "100%",
        height: $(window).height()
    }).appendTo("body");
    $("<div class=\"datagrid-mask-msg\"></div>").html("正在处理，请稍候。。。").appendTo("body").css({
        display: "block",
        left: ($(document.body).outerWidth(true) - 190) / 2,
        top: ($(window).height() - 45) / 2
    });
}

function hideMask() {
    $(".datagrid-mask").remove();
    $(".datagrid-mask-msg").remove();
}

//在主框架内打开Tab页，如点击左边的菜单打开Tab窗口
function addTab(params) {
    var iframe = '<iframe src="' + params.url + '" scrolling="auto" frameborder="0" style="width:100%;height:100%;"></iframe>';
    var t = $('#index_tabs');
    var opts = {
        id: Math.random(),
        title: params.text,
        closable: typeof(params.closable) != "undefined" ? params.closable : true,
        iconCls: params.iconCls ? params.iconCls : 'fa fa-page',
        content: iframe,
        //href: params.url,
        border: params.border || false,
        fit: true
        //cls: 'leftBottomBorder'
    };
    if (t.tabs('exists', opts.title)) {
        t.tabs('select', opts.title);
    } else {
        var lastMenuClickTime = $.cookie("menuClickTime");
        var nowTime = new Date().getTime();
        if ((nowTime - lastMenuClickTime) >= 1000) {
            $.cookie("menuClickTime", new Date().getTime());
            t.tabs('myAdd', opts);
        } else {
            $.messager.show({
                title: '温馨提示',
                msg: '操作过快，请稍后重试！'
            });
        }
    }
}

addParentTab = function (options) {

    var src, title;
    if (typeof options.grid == "object") {
        if (options.grid.checkboxSelect == true) {
            var rows = getCheckedRowsData(options.grid.type, options.grid.id);
            if (rows.length == 0) {
                $.messager.alert(
                    topJUI.language.message.title.operationTips,
                    topJUI.language.message.msg.checkSelfGrid,
                    topJUI.language.message.icon.warning
                );
                return;
            }
            if (rows[0]["UUID"]) {
                src = options.tab.href.indexOf("?") >= 0 ? options.tab.href + "&UUID=" + getMultiRowsFieldValue(rows, "UUID") : options.tab.href + "?UUID=" + getMultiRowsFieldValue(rows, "UUID");
            } else {
                src = options.tab.href.indexOf("?") >= 0 ? options.tab.href + "&uuid=" + getMultiRowsFieldValue(rows, "uuid") : options.tab.href + "?uuid=" + getMultiRowsFieldValue(rows, "uuid");
            }
        } else {
            //var unselectedMsg = options.grid.unselectedMsg;
            var row = getSelectedRowData(options.grid.type, options.grid.id);
            if (!row) {
                $.messager.alert(
                    topJUI.language.message.title.operationTips,
                    topJUI.language.message.msg.selectSelfGrid,
                    topJUI.language.message.icon.warning
                );
                return;
            }
            src = replaceUrlParamValueByBrace(options.tab.href, row);
        }
        title = options.tab.title;
    } else {
        src = options.href;
        title = options.title;
    }

    var iframe = '<iframe src="' + src + '" frameborder="0" style="border:0;width:100%;height:100%;"></iframe>';
    parent.$('#index_tabs').tabs("add", {
        title: title,
        content: iframe,
        closable: true,
        iconCls: 'fa fa-th'
    });

}

/**
 * 打开新窗口
 * @param options
 */
openWindow = function (options) {
    var href;
    if (typeof options.grid == "object") {
        if (options.grid.checkboxSelect == true) {
            var rows = getCheckedRowsData(options.grid.type, options.grid.id);
            if (rows.length == 0) {
                $.messager.alert(
                    topJUI.language.message.title.operationTips,
                    topJUI.language.message.msg.checkSelfGrid,
                    topJUI.language.message.icon.warning
                );
                return;
            }
            href = replaceUrlParamValueByBrace(options.href, rows, "multiple");
        } else {
            var row = getSelectedRowData(options.grid.type, options.grid.id);
            if (!row) {
                $.messager.alert(
                    topJUI.language.message.title.operationTips,
                    topJUI.language.message.msg.selectSelfGrid,
                    topJUI.language.message.icon.warning
                );
                return;
            }
            href = replaceUrlParamValueByBrace(options.href, row);
        }
    } else {
        href = options.href;
    }
    window.open(href);
}

/**
 * 绑定按钮点击事件
 * @param options
 */
function bindMenuClickEvent($element, options) {
    //if (typeof options.grid != "object") {
    var toolbarOptions = getOptionsJson($element.closest("div"));
    options = $.extend(true, toolbarOptions, options);
    //}
    var defaults = {};
    // 打开dialog事件
    if (options.clickEvent == "openDialog") {
        defaults = {
            iconCls: 'fa fa-plus',
            parentGridUnselectedMsg: '请先选中一条主表数据！',
            dialog: {
                title: '数据详情',
                width: 700,
                height: 450
            }
        }
        options.dialog.width = options.dialog.width ? options.dialog.width : 700;
        options.dialog.height = options.dialog.height ? options.dialog.height : 'auto';
        options = $.extend(defaults, options);

        if (typeof options.dialog == "object") {
            generateDialogDoc(options);
        }

        /*var extendDoc = "";
         // 判断是否存在父grid
         if (typeof options.parentGrid == "object") {
         extendDoc += ',parentGrid:{type:\'' + options.parentGrid.type + '\',id:\'' + options.parentGrid.id + '\',params:\'' + options.parentGrid.params + '\',unselectedMsg:\'' + options.parentGrid.unselectedMsg + '\'}';
         }
         // 判断是否存在自身grid
         if (typeof options.grid == "object") {
         extendDoc += ',grid:{type:\'' + options.grid.type + '\',id:\'' + options.grid.id + '\',pkName:\'' + options.grid.pkName + '\',parentIdField:\'' + options.grid.parentIdField + '\',unselectedMsg:\'' + options.grid.unselectedMsg + '\',uncheckedMsg:\'' + options.grid.uncheckedMsg + '\'}';
         }
         // 判断dialog中是否存在editor编辑器
         if (typeof options.dialog.editor == "object") {
         var editorStr = "";
         var dh = "";
         for (var i = 0; i < options.dialog.editor.length; i++) {
         if (i != options.dialog.editor.length - 1)
         dh = ",";
         editorStr += '{id:\'' + options.dialog.editor[i].id + '\',type:\'' + options.dialog.editor[i].type + '\',field:\'' + options.dialog.editor[i].field + '\'}' + dh;
         }
         extendDoc += ',editor:[' + editorStr + ']';
         }

         // 如果未设置dialog标题，直接调用按钮名称
         !options.dialog.title ? options.dialog.title = $element.text().replace(/[\r\n]/g, "") : '';
         !options.dialog.url ? options.dialog.url = "" : '';
         !options.dialog.beforeOpenCheckUrl ? options.dialog.beforeOpenCheckUrl = "" : options.dialog.beforeOpenCheckUrl;

         var userDefineDialogId = true;
         if (options.dialog.id == "" || options.dialog.id == null) {
         userDefineDialogId = false;
         options.dialog.id = "dialog-" + parseInt(Math.random() * 99999999 + 1);
         }

         var dialogDom = "";
         var divOrForm = options.form == false ? "div" : "form";
         dialogDom = '<' + divOrForm + ' data-toggle="topjui-dialog" data-options="id:\'' + options.dialog.id + '\',href:\'' + options.dialog.href + '\',url:\'' + options.dialog.url + '\',title:\'' + options.dialog.title + '\',beforeOpenCheckUrl:\'' + options.dialog.beforeOpenCheckUrl + '\'' + extendDoc + '"></' + divOrForm + '>';

         // 判断dialog是否存在linkbutton按钮组
         var buttonsDom = "";
         if (typeof options.dialog.buttonsGroup == "object") {
         var buttonsArr = options.dialog.buttonsGroup;
         var btLength = buttonsArr.length;
         if (btLength > 0) {
         for (var i = 0; i < btLength; i++) {
         // 默认为ajaxForm提交方式
         if (!buttonsArr[i].handler) {
         buttonsArr[i].handler = 'ajaxForm';
         }
         // 传递本grid参数
         var gridDoc = "";
         if (typeof options.grid == "object") {
         gridDoc = ',grid:{type:\'' + options.grid.type + '\',id:\'' + options.grid.id + '\'}';
         }
         // 传递其它grid参数
         if (typeof buttonsArr[i].reload == "object") {
         var reloadStr = "";
         var dh2 = "";
         for (var j = 0; j < buttonsArr[i].reload.length; j++) {
         if (j != buttonsArr[i].reload.length - 1)
         dh2 = ",";

         reloadStr += '{type:\'' + buttonsArr[i].reload[j].type + '\', id:\'' + buttonsArr[i].reload[j].id + '\', clearQueryParams:\'' + buttonsArr[i].reload[j].clearQueryParams + '\'}' + dh2;
         }
         extendDoc += ',reload:[' + reloadStr + ']';
         }
         buttonsDom += '<a href="#" data-toggle="topjui-linkbutton" data-options="handlerBefore:\'' + buttonsArr[i].handlerBefore + '\',handler:\'' + buttonsArr[i].handler + '\',dialog:{id:\'' + options.dialog.id + '\'},url:\'' + buttonsArr[i].url + '\',iconCls:\'' + buttonsArr[i].iconCls + '\'' + extendDoc + '">' + buttonsArr[i].text + '</a>';
         }
         }
         }

         getTabWindow().$('body').append(
         dialogDom +
         '<div id="' + options.dialog.id + '-buttons" style="display:none">' +
         buttonsDom +
         '<a href="#" data-toggle="topjui-linkbutton" data-options="iconCls:\'icon-no\'" onclick="javascript:$(\'#' + options.dialog.id + '\').dialog(\'close\')">关闭</a>' +
         '</div>'
         )*/

        /*$element.on("click", function () {

         options.dialog.leftMargin = ($(document.body).width() * 0.5) - (options.dialog.width * 0.5);
         options.dialog.topMargin = ($(document.body).height() * 0.5) - (options.dialog.height * 0.5);

         if (typeof options.parentGrid == "object") {
         openDialogAndloadDataByParentGrid(options);
         } else if (options.dialog.url) {
         openDialogAndloadDataByUrl(options);
         } else {
         if (options.grid.uncheckedMsg) {
         var rows = getCheckedRowsData(options.grid.type, options.grid.id);
         if (rows.length == 0) {
         $.messager.alert(
         topJUI.language.message.title.operationTips,
         options.grid.uncheckedMsg,
         topJUI.language.message.icon.warning
         );
         return;
         }
         }
         if (options.dialog.onBeforeOpen != "undefined") {
         // 回调执行传入的自定义函数
         executeCallBackFun(options.dialog.onBeforeOpen, options);
         }
         var $dialogObj = $("#" + options.dialog.id);
         $dialogObj.dialog({
         width: options.dialog.width,
         height: options.dialog.height,
         maximized: options.dialog.maximized,
         maximizable: options.dialog.maximizable,
         left: options.dialog.leftMargin,
         top: options.dialog.topMargin,
         buttons: options.dialog.buttons
         });
         //$dialogObj.dialog('refresh', appendSourceUrlParam(options.dialog.href)); //加载两次href指定的页面
         $dialogObj.dialog({
         href: appendSourceUrlParam(options.dialog.href)
         });
         $dialogObj.dialog('open');
         }
         });*/
    } else if (options.clickEvent == "openTab") {
        defaults = {
            iconCls: 'fa fa-th'
        }
        options = $.extend(defaults, options);

        /*$element.on("click", function () {
         addParentTab(options);
         });*/
    } else if (options.clickEvent == "openWindow") {
        defaults = {
            iconCls: 'fa fa-link'
        }
        options = $.extend(defaults, options);

        /*$element.on("click", function () {
         openWindow(options);
         });*/
    } else if (options.clickEvent == "edatagrid") {
        defaults = {
            iconCls: 'fa fa-plus'
        }
        options = $.extend(defaults, options);

        $element.on("click", function () {
            if (options.type == "addRow")
                $('#' + options.grid.id).edatagrid('addRow', 0);
            if (options.type == "saveRow")
                $('#' + options.grid.id).edatagrid('saveRow');
            if (options.type == "cancelRow")
                $('#' + options.grid.id).edatagrid('cancelRow');
        });
    } else if (options.clickEvent == "doAjax") {
        defaults = {
            iconCls: 'fa fa-cog'
        }
        options = $.extend(defaults, options);

        /*$element.on("click", function () {
         //doAjaxHandler(options);
         });*/
    } else if (options.clickEvent == "request") {
        defaults = {
            iconCls: 'fa fa-cog'
        }
        options = $.extend(defaults, options);

        /*$element.on("click", function () {
         requestHandler(options);
         });*/
    } else if (options.clickEvent == "delete") {
        defaults = {
            iconCls: 'fa fa-trash'
        }
        options = $.extend(defaults, options);

        /* $element.on("click", function () {
         deleteHandler(options);
         });*/
    } else if (options.clickEvent == "filter") {
        defaults = {
            iconCls: 'fa fa-filter'
        }
        options = $.extend(defaults, options);

        /*$element.on("click", function () {
         filterHandler(options);
         });*/
    } else if (options.clickEvent == "search") {
        defaults = {
            iconCls: 'fa fa-search'
        }
        options = $.extend(defaults, options);

        /*$element.on("click", function () {
         searchHandler(options);
         });*/
    } else if (options.clickEvent == "export") {
        defaults = {
            iconCls: 'fa fa-file'
        }
        options = $.extend(defaults, options);

        /*$element.on("click", function () {
         exportHandler(options);
         });*/
    } else if (options.clickEvent == "import") {
        defaults = {
            iconCls: 'fa fa-file',
            href: '/system/excel/excelImport'
        }
        options = $.extend(defaults, options);

        /*$element.on("click", function () {
         importHandler(options);
         });*/
    }
    return options;
}

/**
 * 打开dialog,加载选中的表格数据到dialog中
 * @param options
 */
function openDialogAndloadDataByParentGrid(options) {
    var parentGridUnselectedMsg = "";
    var parentGridParam = "";
    if (typeof options.parentGrid == "object") {
        parentGridUnselectedMsg = options.parentGrid.unselectedMsg;
        parentGridParam = options.parentGrid.params;
        if (options.parentGrid.type == "datagrid") {

        } else if (options.parentGrid.type == "treegrid") {

        }
    }

    //判断父表数据是否被选中
    var parentRow = getSelectedRowData(options.parentGrid.type, options.parentGrid.id);
    if (!parentRow) {
        $.messager.alert(
            topJUI.language.message.title.operationTips,
            options.parentGrid.unselectedMsg || topJUI.language.message.msg.selectParentGrid,
            topJUI.language.message.icon.warning
        );
        return;
    }

    //打开dialog前判断是否还有其它操作限制
    if (options.dialog.beforeOpenCheckUrl) {
        if (!beforeOpenCheck(replaceUrlParamValueByBrace(options.dialog.beforeOpenCheckUrl, parentRow))) return;
    }

    var $dialogObj = $("#" + options.dialog.id);
    $dialogObj.iDialog(options);

    // 保存原始href，以便在占位参数替换后还原
    var oriHref = options.dialog.href;
    var newHref = oriHref;
    if (options.dialog.href.indexOf("{") != -1) {
        if (options.dialog.href.indexOf("{parent.") != -1) {
            // 替换父表中选中行占位值
            newHref = replaceUrlParamValueByBrace(appendSourceUrlParam(oriHref), parentRow, "parent");
        }
        if (newHref.indexOf("{") != -1) {
            // 替换本表中选中行占位值
            var row = getSelectedRowData(options.grid.type, options.grid.id);
            newHref = replaceUrlParamValueByBrace(appendSourceUrlParam(newHref), row);
        }
        $dialogObj.dialog({
            href: newHref
        });
        $dialogObj.dialog('open');
    } else {
        $dialogObj.dialog('open');
    }
}

/**
 * 通过dialog的url参数加载数据到dialog中
 * @param options
 */
function openDialogAndloadDataByUrl(options) {
    //判断本表数据是否被选中
    var row = getSelectedRowData(options.grid.type, options.grid.id);
    if (!row) {
        $.messager.alert(
            topJUI.language.message.title.operationTips,
            topJUI.language.message.msg.selectSelfGrid,
            topJUI.language.message.icon.warning
        );
        return;
    }

    //打开dialog前判断是否还有其它操作限制
    if (options.dialog.beforeOpenCheckUrl) {
        if (!beforeOpenCheck(replaceUrlParamValueByBrace(options.dialog.beforeOpenCheckUrl, row))) return;
    }

    var $dialogObj = $("#" + options.dialog.id);
    $dialogObj.iDialog(options);

    // 保存原始url，以便在占位参数替换后还原
    var oriHref = options.dialog.href;
    if (options.dialog.href.indexOf("{") != -1) {
        // 替换本表中选中行占位值
        var newHref = replaceUrlParamValueByBrace(appendSourceUrlParam(oriHref), row);
        $dialogObj.dialog({
            href: newHref
        });
        //$dialogObj.dialog('open').dialog("refresh", newHref); //加载两次href指定的页面
        $dialogObj.dialog('open');
    } else {
        $dialogObj.dialog('open');
    }

}

/**
 * 打开一个对话框窗口
 * @param options
 */
function dialogHandler(options) {
    if (options.component == "loadData") {
        editHandler(options);
    } else if (options.action == "loadParentData") {
        addChildHandler(options);
    } else {
        addHandler(options);
    }
}

/**
 * 新增表格数据
 * @param options
 */
function addHandler(options) {
    var controllerUrl = getUrl("controller");
    var defaults = {
        gridId: 'datagrid'
        //dialogId      : 'addDialog',
        //dialogHref    : options.dialogHref ? options.dialogHref : controllerUrl + "edit"
    };
    options = $.extend(defaults, options);

    //clearDialogHrefKeyValue(options.addDialogId, "action,uuid");
    var dialogObj = $("#" + options.dialogId);
    dialogObj.dialog({
        //title : '新增数据',
        iconCls: 'fa fa-plus',
        toolbar: '#' + options.dialogId + '-toolbar',
        buttons: '#' + options.dialogId + '-buttons'
    });

    if (options.dialogHref != undefined) {
        dialogObj.dialog('refresh', options.dialogHref);
    }
    dialogObj.dialog('open');


}

/**
 * 检查授权
 * @param resource 资源值，可以是url也可以是标识
 */
function authCheck(resource) {
    if (topJUI.config.authUrl == "") {
        return true;
    } else {
        var isAuth = false;
        $.ajax({
            type: 'post',
            url: ctx + "/system/authAccess/getAuthByRoleIdAndUrl",
            data: {url: resource},
            async: false,
            success: function (data) {
                if (data == 0) {
                    var msgJson = {
                        title: topJUI.language.message.title.operationTips,
                        msg: topJUI.language.message.msg.permissionDenied,
                        icon: topJUI.language.message.icon.warning
                    };
                    $.messager.alert(msgJson);
                    isAuth = false;
                } else {
                    isAuth = true;
                }
            }
        });
        return isAuth;
    }
}

function beforeOpenCheck($checkUrl) {
    var isAuth = false;
    $.ajax({
        type: 'get',
        url: $checkUrl,
        async: false,
        success: function (data) {
            if (data.statusCode == 300) {
                var msgJson = {
                    title: topJUI.language.message.title.operationTips,
                    msg: data.message
                };
                $.messager.alert(msgJson);
                isAuth = false;
            } else {
                isAuth = true;
            }
        }
    });
    return isAuth;
}

//新增子表数据
function addChildHandler(options) {

    var row = $("#" + options.parentGridId).treegrid('getSelected') ? $("#" + options.parentGridId).treegrid('getSelected') : $("#" + options.parentGridId).datagrid('getSelected');
    if (row) {
        var controllerUrl = getUrl("controller");
        var defaults = {
            gridId: 'datagrid',
            //dialogId      : 'addDialog',
            dialogHref: options.dialogHref ? options.dialogHref : controllerUrl + "edit"
        }
        options = $.extend(defaults, options);

        //clearDialogHrefKeyValue(options.addDialogId, "action,uuid");
        var dialogObj = $("#" + options.dialogId);
        dialogObj.dialog({
            //title : '新增数据',
            iconCls: 'fa fa-plus',
            toolbar: '#' + options.dialogId + '-toolbar',
            buttons: '#' + options.dialogId + '-buttons'
        });

        if (options.dialogHref != undefined) {
            dialogObj.dialog('refresh', options.dialogHref);
        }
        dialogObj.dialog('open');
        setTimeout(function () {
            getTabWindow().$("#" + options.dialogId + " iframe").each(function (i) {
                this.contentWindow.document.body.innerHTML = '';
            });

            var jsonData = {};
            if (options.gridParam) {
                var gridParamArr = options.gridParam.split(",");
                //传递给dialog输入框的参数
                for (var i = 0; i < gridParamArr.length; i++) {
                    jsonData[gridParamArr[i]] = row[gridParamArr[i]];
                }
            }
            jsonData.puuid = row.uuid;

            dialogObj.form('load', jsonData);
        }, 500);
    } else {
        $.messager.alert(
            topJUI.language.message.title.operationTips,
            topJUI.language.message.msg.selectParentGrid,
            topJUI.language.message.icon.warning
        );
    }
}

//编辑表格数据
function editHandler(options) {
    var controllerUrl = getUrl("controller");
    var defaults = {
        gridId: 'datagrid',
        //dialogId      : 'editDialog',
        dialogHref: options.dialogHref ? options.dialogHref : controllerUrl + "edit",
        dialogUrl: options.dialogUrl ? options.dialogUrl : controllerUrl + "getDetailByUuid?uuid={uuid}"
    }
    options = $.extend(defaults, options);

    loadDialogData(options);
}

/**
 * 在复选框被选中的时候返回所有行
 * @param gridType
 * @param gridId
 * @returns {jQuery}
 */
function getCheckedRowsData(gridType, gridId) {
    return $("#" + gridId).treegrid('getChecked');
}

/**
 * 获得选中的datagrid或treegrid一行数据
 * @param options
 * @returns {*}
 */
function getSelectedRowData(gridType, gridId) {
    return getRowsDataBySelected(gridType, gridId, false);
}

/**
 * 获得选中的datagrid或treegrid多行数据
 * @param options
 * @returns {*}
 */
function getSelectedRowsData(gridType, gridId) {
    return getRowsDataBySelected(gridType, gridId, true);
}

/**
 * 获得选中的datagrid或treegrid一行或多行数据
 * @param options
 * @returns {*}
 */
function getRowsDataBySelected(gridType, gridId, multiple) {
    var rows = multiple ? $("#" + gridId).datagrid('getSelections') : $("#" + gridId).datagrid('getSelected');
    /*
     var rows;
     if (gridType == "datagrid") {
     rows = multiple ? $("#" + gridId).datagrid('getSelections') : $("#" + gridId).datagrid('getSelected');
     } else if (gridType == "treegrid") {
     rows = multiple ? $("#" + gridId).treegrid('getSelections') : $("#" + gridId).treegrid('getSelected');
     }
     */
    return rows;
}

function getRowsDataBySelected2(options, multiple) {
    var rows;
    var gridId;

    if (typeof options.parentGrid == "object") {
        gridId = options.parentGrid.id;
        if (options.parentGrid.type == "datagrid") {
            rows = multiple ? $("#" + gridId).datagrid('getSelections') : $("#" + gridId).datagrid('getSelected');
        } else if (options.parentGrid.type == "treegrid") {
            rows = multiple ? $("#" + gridId).treegrid('getSelections') : $("#" + gridId).treegrid('getSelected');
        }
    } else if (typeof options.grid == "object") {
        gridId = options.grid.id;
        if (options.grid.type == "datagrid") {
            rows = multiple ? $("#" + gridId).datagrid('getSelections') : $("#" + gridId).datagrid('getSelected');
        } else if (options.grid.type == "treegrid") {
            rows = multiple ? $("#" + gridId).treegrid('getSelections') : $("#" + gridId).treegrid('getSelected');
        }
    }
    return rows;
}

/**
 * 刷新多个表格
 * @param gridObj
 */
function refreshGrids(gridObj) {
    // 重新加载Grid数据
    if (typeof gridObj == 'object') {
        for (var i = 0; i < gridObj.length; i++) {
            var obj = gridObj[i];
            // 通过闭包嵌套和不同时序的执行来刷新grid
            (function (i) {
                setTimeout(function () {
                    refreshGrid(obj.type, obj.id, obj.clearQueryParams);
                }, i * 100);
            })(i);
        }
    }
}

/**
 * 刷新一个datagrid或treegrid
 * @param options
 */
function refreshGrid(gridType, gridId, clearQueryParams) {
    if (gridType == "datagrid") {
        if (clearQueryParams == true) {
            $("#" + gridId).datagrid({
                queryParams: {
                    clearQueryParams: ''
                }
            });
        }
        $("#" + gridId).datagrid('reload');
        $("#" + gridId).datagrid('unselectAll');
    } else if (gridType == "treegrid") {
        // 刷新整合表格
        //$("#" + options.treegrid.id).treegrid('reload');
        // 只刷新当前节点
        $("#" + gridId).treegrid('reload');
        $("#" + gridId).treegrid('unselectAll');
    }
}

/**
 * Ajax操作
 * @param options
 */
function doAjaxHandler(options) {
    var defaults = {
        gridId: 'datagrid',
        iconCls: 'fa fa-cog',
        comfirmMsg: topJUI.language.message.msg.comfirmMsg,
        grid: {
            uncheckedMsg: topJUI.language.message.msg.checkSelfGrid
        }
    }
    options = $.extend({}, defaults, options);
    options.url = appendSourceUrlParam(options.url);

    // 替换父表的占位数据
    if (options.url.indexOf("{parent") != -1) {
        var parentRow = getSelectedRowData(options.parentGrid.type, options.parentGrid.id);
        if (!parentRow) {
            $.messager.alert(
                topJUI.language.message.title.operationTips,
                topJUI.language.message.msg.selectParentGrid,
                topJUI.language.message.icon.warning
            );
            return;
        }
        options.url = replaceUrlParamValueByBrace(options.url, parentRow, "parent");
    }

    if (typeof options.grid == "object") {
        var dgOpts = $("#" + options.grid.id).datagrid('options');

        if (options.grid.multiCheck == true || options.grid.uncheckedMsg != undefined) {
            // 勾选复选框提交多条数据
            $("#" + options.grid.id).datagrid('multiCheckedAjax', options);
        } else {
            if (dgOpts.singleSelect == false) {
                $("#" + options.grid.id).datagrid('multiSelectedAjax', options);
            } else { // 提交单条记录
                $("#" + options.grid.id).datagrid('singleSelectedAjax', options);
            }
        }
    }


}

/**
 * 普通请求操作
 * @param options
 */
function requestHandler(options) {
    options.url = appendSourceUrlParam(options.url);

    if (typeof options.grid == "object") {
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
        options.newUrl = replaceUrlParamValueByBrace(options.url, row);
    } else {
        options.newUrl = options.url;
    }

    window.location.href = options.newUrl;
}

/**
 * 删除表格数据
 * @param options
 */
function deleteHandler(options) {
    // 权限控制
    var oriUrl = options.url ? options.url : getUrl("controller") + "delete"

    var defaults = {
        gridId: 'datagrid',
        url: options.url ? appendSourceUrlParam(options.url) : getUrl("controller") + "delete" + location.search
    }
    options = $.extend(defaults, options);

    var rows = getCheckedRowsData(options.grid.type, options.grid.id);
    if (rows.length == 0) {
        $.messager.alert(
            topJUI.language.message.title.operationTips,
            topJUI.language.message.msg.checkSelfGrid,
            topJUI.language.message.icon.warning
        );
        return;
    }
    $.messager.confirm(
        topJUI.language.message.title.confirmTips,
        topJUI.language.message.msg.confirmDelete,
        function (flag) {
            if (flag) {
                options.ajaxData = {
                    uuid: getMultiRowsFieldValue(rows, "uuid"),
                    uuids: getMultiRowsFieldValue(rows, "uuid")
                };

                if (doAjax(options)) {
                    refreshGrid(options.grid.type, options.grid.id);
                }
            }
        });
}

/**
 * 过滤表格数据
 * @param options
 */
function filterHandler(options) {
    if (typeof options.grid == "object") {
        var gridId = options.grid.id;
        var gridOptions = $("#" + gridId).datagrid("options");
        var filter = gridOptions.filter ? gridOptions.filter : [];
        if (options.grid.type == "datagrid") {
            if ($(".datagrid-filter-row").length > 0) {
                $("#" + gridId).datagrid('disableFilter');
            } else {
                $("#" + gridId).datagrid('enableFilter', filter);
            }
        } else if (options.grid.type == "treegrid") {
            if ($(".datagrid-filter-row").length > 0) {
                $("#" + gridId).treegrid('disableFilter');
            } else {
                $("#" + gridId).treegrid('enableFilter', filter);
            }
        }
    }
}

/**
 * 高级查询表格数据
 * @param options
 */
function searchHandler(options) {
    // 获得查询字段信息
    if (typeof options.grid == "object") {
        getColumnsNameAndField(options.grid.type, options.grid.id);
    }

    // 组合查询对话框内容
    var searchContent = '<table id="advanceSearchTable" class="editTable">';
    searchContent += '<tr>';
    searchContent += '<td style="font-weight: bold;">方式</td>';
    searchContent += '<td style="font-weight: bold;">左括号</td>';
    searchContent += '<td style="font-weight: bold;">字段</td>';
    searchContent += '<td style="font-weight: bold;">条件</td>';
    searchContent += '<td style="font-weight: bold;">数值</td>';
    searchContent += '<td style="font-weight: bold;">右括号</td>';
    searchContent += '<td style="font-weight: bold;">操作</td>';
    searchContent += '</tr>';
    searchContent += '<tr>';
    searchContent += '<td><input type="text" class="join" name="join"></td>';
    searchContent += '<td><input type="text" class="lb" name="lb"></td>';
    searchContent += '<td><input type="text" class="field" name="field"></td>';
    searchContent += '<td><input type="text" class="op" name="op"></td>';
    searchContent += '<td><input type="text" class="value" name="value"></td>';
    searchContent += '<td><input type="text" class="rb" name="rb"></td>';
    searchContent += '<td><a id="addCondition" href="javascript:void(0)"></a>';
    searchContent += '</td>';
    searchContent += '</tr>';
    searchContent += '</table>';

    // 组合查询对话框默认属性
    var defaults = {
        dialog: {
            id: 'advanceSearchDialog',
            title: '组合查询',
            width: 700,
            height: 300,
            modal: false,
            collapsible: true,
            minimizable: false,
            maximized: false,
            resizable: true,
            closed: false,
            closable: true,
            zIndex: 10,
            iconCls: 'fa fa-search',
            //href: '/html/search/form.html',
            content: searchContent,
            buttons: '#advanceSearchDialog-buttons',
            onOpen: function () {
                //窗口打开时，触发事件
                $(this).trigger(topJUI.eventType.initUI.advanceSearchForm);
            }
        }
    };
    options = $.extend(defaults, options);

    // 组合查询对话框
    var searchForm = '<form id="advanceSearchDialog"></form>';
    searchForm += '<div id="advanceSearchDialog-buttons" style="display:none">';
    searchForm += '<a href="#" id="resetAdvanceSearchForm" data-toggle="easyui-linkbutton" data-options="iconCls:\'icon-reload\'">清空</a>';
    searchForm += '<a href="#" id="submitAdvanceSearchForm" data-toggle="topjui-linkbutton" data-options="iconCls:\'icon-search\'">查询</a>';
    searchForm += '<a href="#" id="closeAdvanceSearchDialog">关闭</a>';
    searchForm += '</div>';
    getTabWindow().$('body').append(searchForm);

    // 打开组合查询对话框
    var dialogObj = $("#" + options.dialog.id);
    dialogObj.dialog(options.dialog);

    // 重置查询条件
    $('#resetAdvanceSearchForm').linkbutton({
        iconCls: 'fa fa-refresh',
        onClick: function () {
            var formDataArr = [];
            loadGrid(formDataArr);
        }
    });

    // 提交查询请求
    $('#submitAdvanceSearchForm').linkbutton({
        iconCls: 'fa fa-search',
        onClick: function () {
            var formDataArr = [];
            var formData = $("#" + options.dialog.id).serializeArray();
            var num = formData.length / 6;
            for (var i = 0; i < num; i++) {
                var join = formData[i * 6 + 0].name;
                var joinValue = formData[i * 6 + 0].value;
                var lb = formData[i * 6 + 1].name;
                var lbValue = formData[i * 6 + 1].value;
                var field = formData[i * 6 + 2].name;
                var fieldValue = formData[i * 6 + 2].value;
                var op = formData[i * 6 + 3].name;
                var opValue = formData[i * 6 + 3].value;
                var value = formData[i * 6 + 4].name;
                var valValue = formData[i * 6 + 4].value;
                var rb = formData[i * 6 + 5].name;
                var rbValue = formData[i * 6 + 5].value;

                formDataArr.push({
                    join: joinValue,
                    lb: lbValue,
                    field: fieldValue,
                    op: opValue,
                    value: valValue,
                    rb: rbValue
                });
            }
            // console.log(JSON.stringify(formDataArr));
            loadGrid(formDataArr);
        }
    });

    // 关闭查询对话框
    $('#closeAdvanceSearchDialog').linkbutton({
        iconCls: 'fa fa-close',
        onClick: function () {
            $("#" + options.dialog.id).dialog('close');
            //$(this).closest(".window-body").dialog("destroy");
        }
    });

    // 新增查询条件
    var html = '<tr>';
    html += '<td><input type="text" class="join" name="join"></td>';
    html += '<td><input type="text" class="lb" name="lb"></td>';
    html += '<td><input type="text" class="field" name="field"></td>';
    html += '<td><input type="text" class="op" name="op"></td>';
    html += '<td><input type="text" class="value" name="value"></td>';
    html += '<td><input type="text" class="rb" name="rb"></td>';
    html += '<td><a class="deleteCondition" href="javascript:void(0)"></a></td></tr>';
    $("#addCondition").on('click', function () {
        $("#advanceSearchTable").append(html);
        $(this).trigger(topJUI.eventType.initUI.advanceSearchForm);
    });
}

/**
 * 导入表格数据
 * @param options
 */
function importHandler(options) {
    if (typeof options.grid == "object") {
        getColumnsNameAndField(options.grid.type, options.grid.id);

        var dialogObj = $("#importExcelDialog");
        dialogObj.dialog({
            title: '导入Excel数据',
            iconCls: 'icon-find',
            toolbar: '#importDialog-toolbar',
            buttons: '#importDialog-buttons'
        });

        dialogObj.dialog('open');
    }
}

/**
 * 获得grid的中文列名及字段名
 * @param gridType
 * @param gridId
 */
function getColumnsNameAndField(gridType, gridId) {
    var frozenFieldName = [];
    var liveFieldName = [];
    var fieldName = [];
    var colName = [];

    if (gridType == "datagrid") {
        frozenFieldName = $("#" + gridId).datagrid('getColumnFields', true);
        liveFieldName = $("#" + gridId).datagrid('getColumnFields');
        fieldName = frozenFieldName.concat(liveFieldName);
        for (var i = 0; i < fieldName.length; i++) {
            var col = $("#" + gridId).datagrid("getColumnOption", fieldName[i]);
            colName.push(col.title);
        }
    } else if (gridType == "treegrid") {
        frozenFieldName = $("#" + gridId).treegrid('getColumnFields', true);
        liveFieldName = $("#" + gridId).treegrid('getColumnFields');
        fieldName = frozenFieldName.concat(liveFieldName);
        for (var j = 0; j < fieldName.length; j++) {
            var col = $("#" + gridId).treegrid("getColumnOption", fieldName[j]);
            colName.push(col.title);
        }
    }

    var colNameStr = colName.join(',').replace(/,操作/g, "").replace(/操作,/g, "");
    var fieldNameStr = fieldName.join(',').replace(/,handle/g, "").replace(/handle,/g, "");

    $.cookie('gridId', gridId);
    $.cookie('gridType', gridType);
    $.cookie('colNameStr', colNameStr);
    $.cookie('fieldNameStr', fieldNameStr);
}

/**
 * 导出表格数据
 * @param options
 */
function exportHandler(options) {
    var controllerUrl = getUrl("controller");
    var defaults = {
        gridId: 'datagrid',
        //url: '/system/index/requestSuccess',
        excelTitle: parent.$('#index_tabs').tabs('getSelected').panel('options').title + "_导出数据_" + getCurrentDatetime("YmdHis"),
        url: options.url ? options.url : controllerUrl + "exportExcel"
    }
    options = $.extend(defaults, options);

    var gridId;
    var frozenFieldName;
    var liveFieldName;
    var fieldName;
    var columnOption;
    var colName = [];
    var hiddenMark = [];

    if (typeof options.grid == "object") {
        gridId = options.grid.id;
        if (options.grid.type == "datagrid") {
            frozenFieldName = $("#" + gridId).datagrid('getColumnFields', true);
            liveFieldName = $("#" + gridId).datagrid('getColumnFields');
            fieldName = frozenFieldName.concat(liveFieldName);
            for (var i = 0; i < fieldName.length; i++) {
                columnOption = $("#" + gridId).datagrid("getColumnOption", fieldName[i]);
                colName.push(columnOption.title);
                if (columnOption.hidden == true || columnOption.checkbox == true)
                    hiddenMark.push(true);
                else
                    hiddenMark.push(false);
            }
        } else if (options.grid.type == "treegrid") {
            frozenFieldName = $("#" + gridId).treegrid('getColumnFields', true);
            liveFieldName = $("#" + gridId).treegrid('getColumnFields');
            fieldName = frozenFieldName.concat(liveFieldName);
            for (var j = 0; j < fieldName.length; j++) {
                columnOption = $("#" + gridId).treegrid("getColumnOption", fieldName[j]);
                colName.push(columnOption.title);
                if (columnOption.hidden == true || columnOption.checkbox == true)
                    hiddenMark.push(true);
                else
                    hiddenMark.push(false);
            }
        }
    }

    // 去除隐藏的列
    for (var h = 0; h < hiddenMark.length; h++) {
        if (hiddenMark[h]) {
            colName.splice(h, 1);
            fieldName.splice(h, 1);
            hiddenMark.splice(h, 1);
            h--;
        }
    }

    var colNameStr = colName.join(',').replace(/,操作/g, "").replace(/操作,/g, "");
    var fieldNameStr = fieldName.join(',').replace(/,handle/g, "").replace(/handle,/g, "");

    options.ajaxData = {
        excelTitle: options.excelTitle,
        colName: colNameStr,
        fieldName: fieldNameStr
    };

    //if (doAjax(options)) {
    window.location.href = options.url + '?excelTitle=' + options.excelTitle + '&colName=' + colNameStr + '&fieldName=' + fieldNameStr;
    //}
}


//撤销表格数据
function redoHandler() {
    $(options.gridId).datagrid('rejectChanges');
    $(options.gridId).datagrid('unselectAll');
}

// ajax操作
function doAjax(options) {
    var result = false;

    var defaults = {
        //confirmMsg: '确定要进行该操作吗？'
    }
    options = $.extend(defaults, options);

    $.ajax({
        //url: options.url + location.search,
        url: options.url,
        type: 'post',
        data: options.ajaxData,
        dataType: "json",
        async: false,
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        beforeSend: function () {
            $.messager.progress({text: '正在操作...'});
        },
        success: function (data, response, status) {
            $.messager.progress('close');
            showMessage(data);

            // 重新加载指定的Grid数据
            refreshGrids(options.reload);

            if (data.statusCode == 1 || data.statusCode == 100 || data.statusCode == 200) {
                result = true;
            } else {
                result = false;
            }
        }
    });

    return result;
}

/**
 * 设置对话框href附加参数及值
 * @param dialogId
 */
function setDialogHrefKeyValue(dialogId, paramStr, paramValueStr) {

    var paramArr = paramStr.split(",");
    var paramValueArr = paramValueStr.split(",");

    var dialogHref = $(dialogId).dialog('options').href;
    var keyValue = "";
    for (i = 0; i < paramArr.length; i++) {
        if (dialogHref.indexOf("?") > 0) {
            if (dialogHref.indexOf(paramArr[i] + "=" + paramValueArr[i]) == -1) {
                keyValue += "&" + paramArr[i] + "=" + paramValueArr[i];
            }
        } else {
            if (i == 0) {
                keyValue = "?" + paramArr[i] + "=" + paramValueArr[i];
            } else {
                keyValue += "&" + paramArr[i] + "=" + paramValueArr[i];
            }

        }
    }
    $(dialogId).dialog('options').href = dialogHref + keyValue;
}

function clearDialogHrefKeyValue(dialogId, paramStr) {

    var paramArr = paramStr.split(",");
    var dialogHref = $(dialogId).dialog('options').href;
    if (dialogHref.indexOf("?") > 0) {
        var newUrlParam = ""
        var urlMain = dialogHref.substring(0, dialogHref.indexOf("?") + 1);
        var urlParam = dialogHref.substring(dialogHref.indexOf("?") + 1);
        var urlParamArray = urlParam.split("&");
        for (i = 0; i < urlParamArray.length; i++) {
            for (j = 0; j < paramArr.length; j++) {
                if (urlParamArray[i].indexOf(paramArr[j] + "=") >= 0) {
                    urlParamArray.remove(i);
                }
            }
        }
        if (urlParamArray.length == 1) {
            newUrlParam = urlParamArray[0];
        } else if (urlParamArray.length > 1) {
            newUrlParam = urlParamArray.join("&");
        }

        var newUrl = "";
        newUrl = urlMain + newUrlParam;
        var lastStr = newUrl.substring(newUrl.length - 1);
        if (lastStr == "?") {
            newUrl = newUrl.substring(0, newUrl.length - 1);
        }

    } else {
        newUrl = dialogHref;
    }

    $(dialogId).dialog('options').href = newUrl;
}

// 表单提交返回提示信息判断
// msgCode为1或200时，右下弹出自动关闭提示
// msgCode为100时，中间弹出手动关闭提示
function msgFn(data) {
    var msgJson = {};
    var msgCode = "";
    if (typeof(data) == "object") {
        msgCode = data.code;
        msgJson = {
            title: data.title,
            msg: data.message
        };
    } else {
        msgCode = data;
        if (data == 1) {
            msgJson = {
                title: '温馨提示',
                msg: '操作成功'
            };
        } else {
            msgJson = {
                title: '温馨提示',
                msg: '操作失败！未知错误，请重试！'
            };
        }
    }
    if (msgCode == 1 || msgCode == 100 || msgCode == 200) {
        if (msgCode == 1 || msgCode == 200)
            $.messager.show(msgJson);
        else
            $.messager.alert(msgJson);
        //$(options.currentDialogId).dialog('close').form('reset');
        //$(options.gridId).datagrid('reload');

        /*if(options.refreshTreeId) {
         var node = $(options.refreshTreeId).tree('getSelected');
         var parentNode = $(options.refreshTreeId).tree('getParent', node.target);
         $(options.refreshTreeId).tree('reload', parentNode.target);
         //$(options.refreshTreeId).tree('reload', node.target);
         }*/

    } else {
        $.messager.alert(msgJson);
    }
}

/**
 * 显示提供信息
 * @param data
 */
function showMessage(data) {
    var messageJson = {};
    var statusCode = "";
    if (typeof(data) == "object") {
        statusCode = data.statusCode;
        if (data.icon == undefined) {
            data.icon = topJUI.language.message.icon.info;
        }
        messageJson = {
            showType: topJUI.language.message.showType.slide,
            title: data.title,
            msg: data.message,
            icon: data.icon
        };
    } else {
        statusCode = data;
        if (data == 1) {
            messageJson = {
                showType: topJUI.language.message.showType.slide,
                title: topJUI.language.message.title.operationTips,
                msg: topJUI.language.message.msg.success,
                icon: topJUI.language.message.icon.info
            };
        } else {
            messageJson = {
                showType: topJUI.language.message.showType.slide,
                title: topJUI.language.message.title.operationTips,
                msg: topJUI.language.message.msg.failed,
                icon: topJUI.language.message.icon.error
            };
        }
    }

    if (statusCode == 1 || statusCode == 100 || statusCode == 200) {
        if (statusCode == 1 || statusCode == 200) {
            //showMask();
            //setTimeout(hideMask, 1000);
            messageJson.timeout = 1000;
            $.messager.show(messageJson); //状态码为1和200时，屏幕中上部弹出操作成功提示框
        } else {
            $.messager.alert(messageJson); //状态码为100时，屏幕中央弹出操作成功提示框
        }
    } else {
        $.messager.alert(messageJson);  //状态码为300时，屏幕中央弹出操作失败提示框
    }
}

/**
 * 替换url中的{}占位符值
 * @param url
 * @param dataObj
 * @param prefix
 * @returns {*}
 */
function replaceUrlParamValueByBrace(url, dataObj, prefix) {
    var newUrl = url;
    if (url && url.indexOf("{") >= 0) {

        // 如果是多维对象，则取第一条记录，用于替换选中的单选记录值
        var newDataObj = isMultiObj(dataObj) ? dataObj[0] : dataObj;

        // var regExp = /{([\s\S]*?)}/g;
        var newPrefix = isNull(prefix) ? "" : prefix + ".";
        var regExp = new RegExp("{" + newPrefix + "(.*?)}", "g");
        var paramArr = url.match(regExp);
        if (paramArr.length > 0) {
            for (var i = 0; i < paramArr.length; i++) {
                var field = paramArr[i].replace("{" + newPrefix, "").replace("}", "");
                if (prefix == "multiple") {
                    newUrl = newUrl.replace(paramArr[i], getMultiRowsFieldValue(dataObj, field));
                } else {
                    newUrl = newUrl.replace(paramArr[i], newDataObj[field]);
                }
            }
        }
    }
    return newUrl;
}

function convertParamValue2Object(url, dataObj, prefix) {
    var newUrl = url;
    if (url && url.indexOf("{") >= 0) {
        var obj = {};
        // 如果是多维对象，则取第一条记录，用于替换选中的单选记录值
        var newDataObj = isMultiObj(dataObj) ? dataObj[0] : dataObj;

        // var regExp = /{([\s\S]*?)}/g;
        var newPrefix = isNull(prefix) ? "" : prefix + ".";
        var regExp = new RegExp("{" + newPrefix + "(.*?)}", "g");
        var paramArr = url.match(regExp);
        if (paramArr.length > 0) {
            for (var i = 0; i < paramArr.length; i++) {
                var field = paramArr[i].replace("{" + newPrefix, "").replace("}", "");
                if (prefix == "multiple") {
                    obj[field] = newUrl.replace(paramArr[i], getMultiRowsFieldValue(dataObj, field));
                } else {
                    obj[field] = newUrl.replace(paramArr[i], newDataObj[field]);
                }
            }
        }
    }
    return obj;
}

/**
 * 根据传递过来的paramObj，替换其中对应的值
 * @param paramObj
 * @param dataObj
 * @returns {{}} 返回带实际值的对象数据
 */
function convertParamObj2ObjData(paramObj, dataObj) {
    var obj = {};
    var param, field;
    for (param in paramObj) {
        field = paramObj[param];
        if (isMultiObj(dataObj)) {
            obj[param] = getMultiRowsFieldValue(dataObj, field);
        } else {
            obj[param] = "'" + dataObj[field] + "'";
        }
    }
    return obj;
}

/**
 * 根据选中的多行记录，获得多行记录的以逗号分隔的某个字段值组合
 * @param rowsData
 * @param field
 * @returns {string}
 */
function getMultiRowsFieldValue(rowsData, field) {
    var fieldArr = [];
    for (var i = 0; i < rowsData.length; i++) {
        fieldArr.push("'" + rowsData[i][field] + "'");
    }
    return fieldArr.join(',');
}

/**
 * 将表单数据序列化为json数据
 * $("#form").serializeObject();
 * @returns {{}}
 */
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};