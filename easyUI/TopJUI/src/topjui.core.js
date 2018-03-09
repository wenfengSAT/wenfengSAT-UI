var defaultConfig = {
    pageLoadComplete: false,
    config: {
        ctx: "",
        mainPage: false,
        pkName: "uuid"
    },
    language: {
        message: {
            showType: {
                slide: "slide",
                fade: "fade",
                show: "show"
            },
            title: {
                operationTips: "操作提示",
                confirmTips: "确认提示"
            },
            msg: {
                success: "操作成功",
                failed: "操作失败",
                error: "未知错误",
                checkSelfGrid: "请先勾选要操作的数据前的复选框",
                selectSelfGrid: "请先选中要操作的数据",
                selectParentGrid: "请先选中主表中要操作的一条数据",
                permissionDenied: "对不起，你没有操作权限",
                confirmDelete: "你确定要删除所选的数据吗？"
            },
            icon: {
                error: "error",
                question: "question",
                info: "info",
                warning: "warning"
            }
        }
    },
    eventType: {
        //initUI     : 'topjui.initForm',         // When document load completed or ajax load completed, B-JUI && Plugins init
        initUI: {
            base: 'topjui.initUI.base',
            dialog: 'topjui.initUI.dialog',
            base2: 'topjui.initUI.base2',
            echarts: 'topjui.initUI.echarts',
            form: 'topjui.initUI.form',
            advanceSearchForm: 'topjui.initUI.advanceSearchForm',
            importExcelForm: 'topjui.initUI.importExcelForm'
        },
        beforeInitUI: 'topjui.beforeInitUI',   // If your DOM do not init [add to DOM attribute 'data-noinit="true"']
        afterInitUI: 'topjui.afterInitUI',    //
        ajaxStatus: 'topjui.ajaxStatus',     // When performing ajax request, display or hidden progress bar
        resizeGrid: 'topjui.resizeGrid',     // When the window or dialog resize completed
        beforeAjaxLoad: 'topjui.beforeAjaxLoad', // When perform '$.fn.ajaxUrl', to do something...

        beforeLoadNavtab: 'topjui.beforeLoadNavtab',
        beforeLoadDialog: 'topjui.beforeLoadDialog',
        afterLoadNavtab: 'topjui.afterLoadNavtab',
        afterLoadDialog: 'topjui.afterLoadDialog',
        beforeCloseNavtab: 'topjui.beforeCloseNavtab',
        beforeCloseDialog: 'topjui.beforeCloseDialog',
        afterCloseNavtab: 'topjui.afterCloseNavtab',
        afterCloseDialog: 'topjui.afterCloseDialog'
    }
};
topJUI = $.extend(true, defaultConfig, topJUI);

/* TopJUI默认属性 */
var defaultHeight = 34;
$.fn.switchbutton.defaults.height = defaultHeight;
$.fn.textbox.defaults.height = defaultHeight;
$.fn.passwordbox.defaults = defaultHeight;
$.fn.combo.defaults.height = defaultHeight;
$.fn.combobox.defaults.height = defaultHeight;
$.fn.combotree.defaults.height = defaultHeight;
$.fn.combogrid.defaults.height = defaultHeight;
$.fn.combotreegrid.defaults.height = defaultHeight;
$.fn.numberbox.defaults = defaultHeight;
$.fn.datebox.defaults = defaultHeight;
$.fn.datetimebox.defaults = defaultHeight;
$.fn.spinner.defaults = defaultHeight;
$.fn.numberspinner.defaults.height = defaultHeight;