(function ($) {

    var date = new Date();
    var currentYear = date.getFullYear();
    var currentMonth = date.getMonth() + 1;
    var currentDay = date.getDate();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSecond = date.getSeconds();

    $.fn.iTextbox = function (options) {
        var defaults = {
            width: 153,
            prompt: '',
            type: 'text',
            multiline: false,
            readonly: false,
            disabled: false,
            iconCls: '',
            buttonText: '',
            buttonIcon: ''
        }

        var options = $.extend(defaults, options);

        $(this).textbox(options);
    }

    $.fn.iSwitchbutton = function (options) {
        var defaults = {
            width: 153,
            value: "1"
        }

        var options = $.extend(defaults, options);

        $(this).switchbutton(options);
    }

    $.fn.iFilebox = function (options) {
        var defaults = {
            width: 450,
            prompt: '',
            type: 'text',
            multiline: false,
            readonly: false,
            disabled: false,
            iconCls: '',
            buttonText: '选择文件',
            buttonAlign: 'right',
            required: false,
            missingMessage: '必填',
            onChange: function () {
            }
        }

        var options = $.extend(defaults, options);

        $(this).filebox(options);
    }

    $.fn.iNumberspinner = function (options) {
        var defaults = {
            width: 153,
            editable: true,
            defaultValueType: '',
            value: '',
            min: 0,
            max: 999999999,
            required: false
        }

        var options = $.extend(defaults, options);

        if (options.defaultValueType == 'currentYear') {
            options.value = currentYear;
            options.min = 1900,
                options.max = 2200
        } else if (options.defaultValueType == 'currentSeason') {
            if (currentMonth == 1 || currentMonth == 2 || currentMonth == 3) {
                options.value = 1;
            } else if (currentMonth == 4 || currentMonth == 5 || currentMonth == 6) {
                options.value = 2;
            } else if (currentMonth == 7 || currentMonth == 8 || currentMonth == 9) {
                options.value = 3;
            } else if (currentMonth == 10 || currentMonth == 11 || currentMonth == 12) {
                options.value = 4;
            }
            options.min = 1,
                options.max = 4
        } else if (options.defaultValueType == 'currentMonth') {
            options.value = currentMonth;
            options.min = 1,
                options.max = 12
        } else if (options.defaultValueType == 'currentDay') {
            options.value = currentDay;
            options.min = 1,
                options.max = 31
        } else if (options.defaultValueType == 'currentHour') {
            options.value = currentHour;
            options.min = 0,
                options.max = 24
        }

        $(this).numberspinner(options);
    }

    $.fn.iDatebox = function (options) {
        var defaults = {
            required: false,
            editable: true,
            value: "",
            width: 153,
            formatter: function (value) {
                var y = value.getFullYear();
                var m = value.getMonth() + 1;
                var d = value.getDate();
                if (options.pattern == "YYYY")
                    return y;
                else if (options.pattern == "YYYY-mm")
                    return y + '-' + convertDateToFullDate(m);
                else
                    return y + '-' + convertDateToFullDate(m) + '-' + convertDateToFullDate(d);
            },
            parser: function (s) {
                var t = Date.parse(s);
                if (!isNaN(t)) {
                    return new Date(t);
                } else {
                    return new Date();
                }

            },
            onSelect: function (date) {

            }
        }

        var options = $.extend(defaults, options);

        $(this).datebox(options);
    }

    $.fn.iNumberbox = function (options) {
        var defaults = {
            width: 153,
            min: 0,
            precision: 0,
            decimalSeparator: '.',
            groupSeparator: ',',
            required: false,
            buttonText: ''
        }

        var options = $.extend(defaults, options);

        $(this).numberbox(options);
    }

    $.fn.iValidatebox = function (options) {
        var defaults = {
            required: true,
            validType: 'email'
        }

        var options = $.extend(defaults, options);

        $(this).validatebox(options);
    }

    $.fn.iCombobox = function (options) {
        var defaults = {
            width: 153,
            url: ctx + '/system/codeItem/getListByCodeSetIdAndLevelId?codeSetId={codeSetId}&levelId={levelId}',
            codeSetId: 0,
            pid: 0,
            valueField: 'text',
            textField: 'text',
            editable: false,
            panelHeight: 'auto',
            onShowPanel: function () {
                if (options.url.indexOf("{") >= 0) {
                    //将form表单数据封装成json数据
                    var formData = $(this).closest("form").serializeObject();
                    $('#' + options.id).combobox('reload', replaceUrlParamValueByBrace(options.url, formData));
                }
            },
            onChange: function (newValue, oldValue) {
                //重载级联combobox内容
                if (typeof options.childCombobox == "object") {
                    var url = appendUrlParam(options.childCombobox.url, "parentParam=" + newValue);
                    $('#' + options.childCombobox.id).combobox('reload', url);
                }
            },
            onSelect: function (record) {
                var $formObj = $(this).closest('form');

                if (options.params) {
                    var jsonData = getSelectedRowJson(options.params, record);
                    getTabWindow().$("#" + $formObj.attr("id")).form('load', jsonData);
                }
            }
        }

        var options = $.extend(defaults, options);

        if (options.data)
            options.url = "";
        if (options.codeSetId)
            options.url = options.url.replace("{codeSetId}", options.codeSetId).replace("{levelId}", options.levelId);

        $(this).combobox(options);
    }

    $.fn.iCombogrid = function (options) {
        var defaults = {
            width: 153,
            panelWidth: 450,
            delay: 1000,
            mode: 'remote',
            url: ctx + '/system/user/getListByKeywords',
            idField: 'userNameId',
            textField: 'userName',
            fitColumns: true,
            columns: [[
                {field: 'userName', title: '姓名'},
                {field: 'userNameId', title: '用户名'},
                {field: 'orgName', title: '所属机构', width: 100},
                {field: 'post', title: '职位', width: 100}
            ]],
            onChange: function (newValue, oldValue) {
                $('#' + options.id).combogrid('grid').datagrid('load', {q: newValue});
                //$('#' + options.id).combogrid('grid').datagrid('options').queryParams.departid = newId;
                //$('#' + options.id).combogrid('grid').datagrid('reload');
                //setTimeout(function () {
                $('#' + options.id).combogrid('grid').datagrid('selectRecord', newValue);
                //}, 1000);
                /*if (options.editMode) {
                 setTimeout(function () {
                 var gridParamArr = options.param.split(",");
                 var gridKVArr = gridParamArr[0].split(":");
                 var textFieldName = gridKVArr[0];
                 var $formObj = $("#" + options.id).closest('form');
                 var textFieldValue = $('#' + $formObj.attr("id") + ' input[name="' + textFieldName + '"]').val();
                 if (textFieldValue) $('#' + options.id).combogrid('setText', textFieldValue);
                 }, 500);
                 }*/
            },
            onLoadSuccess: function (data) {
                //$("#gridid").combogrid('grid').datagrid('selectRecord', 'admin');
            },
            onSelect: function (index, row) {
                if (options.params) {
                    var $formObj = $("#" + options.id).closest('form');
                    var jsonData = getSelectedRowJson(options.params, row);
                    getTabWindow().$("#" + $formObj.attr("id")).form('load', jsonData);
                    $('#' + options.id).combogrid('textbox').focus();
                }
            }
        }

        var options = $.extend(defaults, options);

        $(this).combogrid(options);
    }

    $.fn.iCombotreegrid = function (options) {
        var defaults = {
            width: 153,
            panelWidth: 450,
            url: ctx + '/system/user/getListByKeywords',
            idField: 'id',
            treeField: 'text',
            fitColumns: true,
            animate: true,
            columns: [[
                {field: 'id', title: '标识', hidden: true},
                {field: 'text', title: '名称', width: 100},
                {field: 'levelId', title: '层级'},
                {field: 'sort', title: '排序'}
            ]],
            onBeforeExpand: function (node, param) {
                var grid = $('#' + options.id).combotreegrid('grid');
                grid.treegrid('options').url = replaceUrlParamValueByBrace(options.expandUrl, node);
            },
            onChange: function (newValue, oldValue) {

            },
            onLoadSuccess: function (node, data) {
                var grid = $('#' + options.id).combotreegrid('grid');
                // 展开根节点
                grid.treegrid("expand", grid.treegrid('getRoot').id);

                if (options.expandAll) {
                    grid.treegrid("expandAll");
                }

                if (options.getFatherIdsUrl) {
                    setTimeout(function () {
                        var selectedNode = grid.treegrid('getSelected');
                        var dataObj = {id: $('#' + options.id).combotreegrid("getValue")};
                        if (selectedNode == null && dataObj.id != "") {
                            var findNode;
                            $.ajax({
                                type: "POST",
                                url: replaceUrlParamValueByBrace(options.getFatherIdsUrl, dataObj),
                                success: function (data) {
                                    var fatherIdsArray = data.split(",");
                                    for (var i = fatherIdsArray.length - 1; i >= 0; i--) {
                                        findNode = grid.treegrid('find', fatherIdsArray[i].replace(/'/g, ""));
                                        if (findNode) {
                                            grid.treegrid('expand', findNode.id);
                                        }
                                    }
                                }
                            });
                            if (dataObj.id != undefined)
                                $("#" + options.id).combotreegrid('setValue', dataObj.id);//数据加载完毕可以设置值了
                        }
                    }, 100);
                }
            },
            onSelect: function (index, row) {
                if (options.param) {
                    var $formObj = $("#" + options.id).closest('form');
                    var jsonData = getSelectedRowJson(options.param, row);
                    getTabWindow().$("#" + $formObj.attr("id")).form('load', jsonData);
                    $('#' + options.id).combogrid('textbox').focus();
                }
            }
        }

        var options = $.extend(defaults, options);

        $(this).combotreegrid(options);
    }

    $.fn.iAutoComplete = function (options) {
        var defaults = {
            comboboxId: this.selector,
            url: ctx + "/system/user/getListByUserName?userName=",
            valueField: 'userNameId',
            textField: 'userName',
            width: 450,
            panelHeight: 250,
            fieldId: 'userNameId',
            required: false,
            formatter: '',
            onLoadSuccess: function (node, data) {
                setTimeout(function () {
                    var oriValue = $(options.comboboxId).combobox('getValue');
                    // 设置值为数据库中的值
                    //$(options.comboboxId).combobox('setValue', oriValue);
                    // 设置显示文本为数据库中的文本
                    //$(options.comboboxId).combobox('setText', oriValue);
                }, 400);
            },
            onShowPanel: function () {
                //$(this).combobox("reload", options.url);
            },
            onChange: function (newValue, oldValue) {
                if (newValue == null) {
                    newValue = $(options.comboboxId).combobox('getValue');
                }
                var paramArr = options.url.match(/{([\s\S]*?)}/g);
                var newUrl = options.url;
                if (paramArr.length > 0) {
                    for (var i = 0; i < paramArr.length; i++) {
                        newUrl = newUrl.replace(paramArr[i], encodeURI(encodeURI(newValue)));
                    }
                }
                $(this).combobox("reload", newUrl);
            },
            onSelect: function (record) {
                $(options.comboboxId).combobox('hidePanel');

                /*var dialogIdArr = options.dialogId.split(",");
                 for (var i = 0; i < dialogIdArr.length; i++) {
                 var jsonData = getSelectedRowJson(options.params, record);
                 getTabWindow().$("#" + dialogIdArr[i]).form('load', jsonData);
                 }*/

                if (options.params) {
                    //var $formObj = $comboboxObj.closest('form');
                    var $formObj = $("#" + options.id).closest('form');
                    var jsonData = getSelectedRowJson(options.params, record);
                    getTabWindow().$("#" + $formObj.attr("id")).form('load', jsonData);
                }

                setTimeout(function () {
                    // 设置值为数据库中的值
                    //$(options.comboboxId).combobox('setValue', record[options.valueField]);
                    // 设置显示文本为数据库中的文本
                    $(options.comboboxId).combobox('setText', record[options.textField]);
                }, 1000);

            },
            onUnselect: function (record) {
                setTimeout(function () {
                    //var oriValue = $(options.comboboxId).combobox('getValue');
                    // 设置值为数据库中的值
                    $(options.comboboxId).combobox('setValue', '');
                    // 设置显示文本为数据库中的文本
                    $(options.comboboxId).combobox('setText', '');
                }, 400);
            },
            onHidePanel: function () {
                // 没有选择的情况下清空输入框内容及值
                if (options.textField != options.valueField) {
                    var text = $(options.comboboxId).combobox('getText');
                    var value = $(options.comboboxId).combobox('getValue');
                    if (text == value) {
                        $(options.comboboxId).combobox("setText", "");
                        $(options.comboboxId).combobox("setValue", "");
                    }
                }
            }
        }

        var options = $.extend(defaults, options);

        if (options.comboboxId == "") {
            options.comboboxId = $(this).context;
        }

        $(this).combobox(options);
    }

})(jQuery);