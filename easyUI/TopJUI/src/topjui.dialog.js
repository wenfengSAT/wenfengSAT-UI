(function ($) {

    $.fn.iDialog = function (options) {
        var dialogOptions = options.dialog;
        var $dialogObj = $("#" + dialogOptions.id);
        var defaults = {
            currentDialogId: this.selector,
            width: 700,
            height: 'auto',//宽高限制650*450,900*500
            title: '新增/编辑',
            modal: true,
            closed: true,
            iconCls: 'fa fa-windows',
            collapsible: true,
            maximizable: true,
            minimizable: false,
            maximized: false,
            resizable: true,
            openAnimation: 'show',
            openDuration: 100,
            closeAnimation: 'show',
            closeDuration: 400,
            zIndex: 10,
            toolbar: this.selector + '-toolbar',
            buttons: this.selector + '-buttons',
            postfix: 'Edit',
            combotreeFields: '',
            refreshTreeId: '',
            onBeforeOpen: function () {

            },
            onLoad: function () {
                $(this).trigger(topJUI.eventType.initUI.form);
                $(this).dialog("center");
                if (dialogOptions.url != undefined) {
                    // 获取选中行的数据
                    var row = getSelectedRowData(options.grid.type, options.grid.id);
                    // 如果指定了数据来源URL，则通过URL加载数据
                    var newDialogUrl = replaceUrlParamValueByBrace(dialogOptions.url, row);
                    $.getJSON(newDialogUrl, function (data) {
                        $dialogObj.form('load', data);
                        if (typeof dialogOptions.editor == "string" || typeof dialogOptions.editor == "object") {
                            // kindeditor编辑器处理
                            if (typeof dialogOptions.editor == "string") {
                                // 富文本编辑器字符串
                                var ke = [], keObj = [];
                                ke = dialogOptions.editor.replace(/'/g, '"').split(",");
                                for (var i = 0; i < ke.length; i++) {
                                    keObj.push(strToJson(ke[i]));
                                }
                            } else {
                                // 富文本编辑数组
                                keObj = dialogOptions.editor;
                            }
                            for (var i = 0; i < keObj.length; i++) {
                                var editorType = keObj[i]["type"];
                                var editorId = keObj[i]["id"];
                                var editorField = keObj[i]["field"];
                                if (editorType == "kindeditor") {
                                    getTabWindow().$("iframe").each(function (i) {
                                        this.contentWindow.document.body.innerHTML = html_decode(data[editorField]);
                                    });
                                } else {
                                    UE.getEditor(editorId).ready(function () {
                                        UE.getEditor(editorId).setContent(data[editorField]);
                                    });
                                }
                            }
                        }
                    });
                } else {
                    // 如果没有指定数据来源URL，则直接加载选中行的数据
                    // $dialogObj.form('load', row); // 防止新增时也加载选中行的数据，暂时屏蔽
                }

                // 如果存在父表，则将父表中指定的字段数据加载到本窗口中
                if (typeof options.parentGrid == "object") {
                    var parentRow = getSelectedRowData(options.parentGrid.type, options.parentGrid.id);
                    var jsonData = getSelectedRowJson(options.parentGrid.params, parentRow);
                    $dialogObj.form('load', jsonData);
                }
            },
            onClose: function () {
                $(dialogOptions.currentDialogId).form('clear');
            }
        }

        dialogOptions = $.extend(defaults, options.dialog);

        var controllerUrl = getUrl('controller');
        dialogOptions.href = dialogOptions.href ? dialogOptions.href + location.search : controllerUrl + "edit" + location.search;

        $(this).dialog(dialogOptions);
    }

    generateDialogDoc = function (options) {

        var defaults = {
            iconCls: 'fa fa-plus',
            parentGridUnselectedMsg: '请先选中一条主表数据！',
            dialog: {
                title: '数据详情',
                width: 650,
                height: 450
            }
        }

        options = $.extend(defaults, options);

        var divOrForm = options.dialog.form == false ? "div" : "form";
        var dialogDom = '<' + divOrForm + ' data-toggle="topjui-dialog" data-options="id:\'' + options.dialog.id + '\',href:\'' + options.dialog.href + '\',url:\'' + options.dialog.url + '\',title:\'' + options.dialog.title + '\',beforeOpenCheckUrl:\'' + options.dialog.beforeOpenCheckUrl + '\'"></' + divOrForm + '>';

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
                    buttonsDom += '<a href="#" data-toggle="topjui-linkbutton" data-options="menubuttonId:\'' + options.id + '\',handlerBefore:\'' + buttonsArr[i].handlerBefore + '\',handler:\'' + buttonsArr[i].handler + '\',dialog:{id:\'' + options.dialog.id + '\'},url:\'' + buttonsArr[i].url + '\',iconCls:\'' + buttonsArr[i].iconCls + '\'">' + buttonsArr[i].text + '</a>';
                }
            }
        }

        getTabWindow().$('body').append(
            dialogDom +
            '<div id="' + options.dialog.id + '-buttons" style="display:none">' +
            buttonsDom +
            '<a href="#" data-toggle="topjui-linkbutton" data-options="iconCls:\'fa fa-close\'" onclick="javascript:$(\'#' + options.dialog.id + '\').dialog(\'close\')">关闭</a>' +
            '</div>'
        );

    }

})(jQuery);