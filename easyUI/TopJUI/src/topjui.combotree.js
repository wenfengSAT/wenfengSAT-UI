(function ($) {

    $.fn.iCombotree = function (options) {

        var defaults = {
            combotreeId: this.selector,
            url: ctx + '/system/codeItem/getListByCodeSetIdAndLevelId?codeSetId={codeSetId}&levelId={levelId}',
            expandUrl: ctx + '/system/codeItem/getListByPid?pid={pid}',
            getFatherIdsUrl: '',
            width: 153,
            panelHeight: 'auto',
            required: false,
            lines: false,
            multiple: false,
            checkbox: true,
            onlyLeafCheck: false,
            editable: false,
            readonly: false,
            animate: true,
            expandAll: false,
            onBeforeSelect: function (node) {
                if (options.onlyLeafCheck) {
                    // 判断是否是叶子节点
                    var isLeaf = $(this).tree('isLeaf', node.target);
                    if (!isLeaf) {
                        $.messager.alert('提示操作！', '请展开选择子节点！', 'warning');
                        // 返回false表示取消本次选择操作
                        return false;
                    }
                }
            }
        }

        var options = $.extend(defaults, options);

        if (options.url.indexOf("codeSetId") == -1) {
            if (options.url.indexOf("?") == -1) {
                options.url = options.url + "?codeSetId=" + options.codeSetId + "&levelId=" + options.levelId;
            } else {
                options.url = options.url + "&codeSetId=" + options.codeSetId + "&levelId=" + options.levelId;
            }
        } else {
            options.url = options.url.replace("{codeSetId}", options.codeSetId).replace("{levelId}", options.levelId);
        }

        if (options.combotreeId == "") {
            options.combotreeId = $(this).context;
        }

        var $combotreeObj = $(this);

        $combotreeObj.combotree({
            url: options.url,
            width: options.width,
            height: options.height,
            panelHeight: options.panelHeight,
            required: options.required,
            lines: options.lines,
            multiple: options.multiple,
            checkbox: options.checkbox,
            onlyLeafCheck: options.onlyLeafCheck,
            editable: options.editable,
            readonly: options.readonly,
            animate: options.animate,
            onBeforeExpand: function (node, param) {
                $(this).tree('options').url = replaceUrlParamValueByBrace(options.expandUrl, node);
            },
            onBeforeSelect: options.onBeforeSelect,
            onLoadSuccess: function (node, data) {
                var $treeObj = $("#" + options.id).combotree('tree');

                // 展开根节点
                $treeObj.tree("expand", $treeObj.tree('getRoot').target);

                if (options.expandAll) {
                    $treeObj.tree("expandAll");
                }

                if (options.getFatherIdsUrl) {
                    setTimeout(function () {
                        expandToTargetNode($treeObj, options);
                    }, 100);
                }
            },
            onSelect: function (node) {
                /*if (options.params) {
                 var dialogIdArr = options.dialog.id.split(",");
                 for (var i = 0; i < dialogIdArr.length; i++) {
                 var jsonData = getSelectedRowJson(options.params, node);
                 getTabWindow().$("#" + dialogIdArr[i]).form('load', jsonData);
                 }
                 }*/
                var $formObj = $("#" + options.id).closest('form');
                if (options.params) {
                    var jsonData = getSelectedRowJson(options.params, node);
                    getTabWindow().$("#" + $formObj.attr("id")).form('load', jsonData);
                }
                if (typeof options.backfill == "object") {
                    $.getJSON(replaceUrlParamValueByBrace(options.backfill.url, node), {}, function (backfillData) {
                        getTabWindow().$("#" + $formObj.attr("id")).form('load', backfillData);
                    });
                }
            },
            onShowPanel: function () {
                /*$(options.combotreeId).combotree('tree').tree("collapseAll");
                 var currentNode = $(options.combotreeId).combotree('tree').tree("getSelected");
                 if(currentNode) {
                 $(options.combotreeId).combotree('tree').tree("expandTo", currentNode.target);
                 }*/
            },
            onChange: options.onChange
        });

        function expandToTargetNode($treeObj, options) {
            var n = $treeObj.tree('getSelected');
            var dataObj = {id: $(options.combotreeId).combotree("getValue")};
            if (n == undefined && dataObj.id != "") {
                var findNode;
                $.ajax({
                    type: "POST",
                    url: replaceUrlParamValueByBrace(options.getFatherIdsUrl, dataObj),
                    //data : {"codeSetId":options.codeSetId, "id":id, "levelId":0},
                    success: function (data) {
                        //$(options.combotreeId).combotree('tree').tree("collapseAll");
                        var fatherIdsArray = data.split(",");
                        for (i = fatherIdsArray.length - 1; i >= 0; i--) {
                            findNode = $(options.combotreeId).combotree('tree').tree('find', fatherIdsArray[i].replace(/'/g, ""));
                            if (findNode) {
                                $(options.combotreeId).combotree('tree').tree('expand', findNode.target);
                            }
                        }
                    }
                });
                if (dataObj.id != undefined)
                    $(options.combotreeId).combotree('setValue', dataObj.id);//数据加载完毕可以设置值了
            }
        }

    }

})(jQuery);