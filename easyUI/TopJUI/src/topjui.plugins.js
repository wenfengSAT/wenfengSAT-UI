+function ($) {
    'use strict';

    $(document).on(topJUI.eventType.initUI.form, function (e) {
        //var $box = $(e.target);

        //var $iTextbox = $box.find('[data-toggle="topjui-textbox"]');

        $('[data-toggle="topjui-textbox"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);
            if (options.readonly) {
                options.buttonText = '只读';
            } else if (options.disabled) {
                options.buttonText = '禁止';
            }

            options = setFormElementId($element, options);
            $element.iTextbox(options);
        });

        $('[data-toggle="topjui-switchbutton"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            options = setFormElementId($element, options);
            $element.iSwitchbutton(options);
        });

        $('[data-toggle="topjui-filebox"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            options = setFormElementId($element, options);
            $element.iFilebox(options);
        });

        $('[data-toggle="topjui-numberspinner"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            options = setFormElementId($element, options);
            $element.iNumberspinner(options);
        });

        $('[data-toggle="topjui-numberbox"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            options = setFormElementId($element, options);
            $element.iNumberbox(options);
        });

        $('[data-toggle="topjui-datebox"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            options = setFormElementId($element, options);
            $element.iDatebox(options);
        });

        $('[data-toggle="topjui-combobox"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            options = setFormElementId($element, options);
            $element.iCombobox(options);
        });

        $('[data-toggle="topjui-combogrid"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            options = setFormElementId($element, options);
            $element.iCombogrid(options);
        });

        $('[data-toggle="topjui-combotree"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            options = setFormElementId($element, options);
            $element.iCombotree(options);
        });

        $('[data-toggle="topjui-combotreegrid"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            options = setFormElementId($element, options);
            $element.iCombotreegrid(options);
        });

        $('[data-toggle="topjui-textarea"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            options.multiline = true;
            if (options.width == null)
                options.width = 450;
            if (options.height == null)
                options.height = 66;

            options = setFormElementId($element, options);
            $element.iTextbox(options);
        });

        $('[data-toggle="topjui-autocomplete"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            options = setFormElementId($element, options);
            $element.iAutoComplete(options);
        });

        $('[data-toggle="topjui-ueditor"]').each(function (i) {
            var defaults = {
                height: 300
            };

            var $element = $(this);
            var options = getOptionsJson($element);
            options = $.extend(defaults, options);
            options = setFormElementId($element, options);

            UE.delEditor(options.id);
            <!-- 实例化编辑器 -->
            var toolbars = [['fullscreen', 'source', '|', 'undo', 'redo', '|',
                'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', '|',
                'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist',
                'insertunorderedlist', 'lineheight', '|',
                'horizontal', 'spechars', 'map', 'paragraph', 'fontfamily', 'fontsize', 'insertcode', '|',
                'indent', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
                'link', 'unlink', '|', 'emotion', 'attachment', 'simpleupload', 'insertimage', '|', 'preview']];
            var simpleToolbars = [["fullscreen", "source", "undo", "redo", "bold", "italic", "underline", "fontborder", "strikethrough", "superscript", "subscript", "insertunorderedlist", "insertorderedlist", "justifyleft", "justifycenter", "justifyright", "justifyjustify", "removeformat", "simpleupload", "snapscreen", "emotion", "attachment", "link", "unlink", "indent", "lineheight", "autotypeset"]];
            UE.getEditor(options.id, {
                toolbars: options.mode == "simple" ? simpleToolbars : toolbars,
                initialFrameWidth: 700,
                initialFrameHeight: options.height,
                autoHeightEnabled: true,
                autoFloatEnabled: true,
                readonly: options.readonly ? true : false
            });
        });

        $('[data-toggle="topjui-ueupload"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);
            options = setFormElementId($element, options);

            var defaults = {
                width: 450,
                buttonText: '选择图片',
                uploadType: 'image',
                buttonIcon: 'icon-picture_add'
            }
            var options = $.extend(defaults, options);

            var uploaderId = options.id + "Uploader";
            $('body').append('<script type="text/plain" id="' + uploaderId + '"></script>');

            //http://www.cnblogs.com/stupage/p/3145353.html
            //重新实例化一个编辑器，上传独立使用
            var ueUpload = UE.getEditor(uploaderId, {
                toolbars: [["insertimage", "attachment"]]
            });
            ueUpload.ready(function () {
                //设置编辑器不可用
                ueUpload.setDisabled();
                //隐藏编辑器，因为不会用到这个编辑器实例，所以要隐藏
                ueUpload.hide();
                var listener = "afterConfirmUploadedFile", pathAttr = "url";
                if (options.uploadType == "image") {
                    listener = "afterConfirmUploadedImage";
                    pathAttr = "src";
                }
                //侦听上传
                ueUpload.addListener(listener, function (t, arg) {
                    //将地址赋值给相应的input
                    $("#" + options.id).textbox("setText", arg[0][pathAttr]);
                    $("#" + options.id).textbox("setValue", arg[0][pathAttr]);
                    //图片预览
                    if (pathAttr == "src")
                        $("#" + options.previewImageId).attr(pathAttr, arg[0][pathAttr]);
                });

                options.onClickButton = function () {
                    if (options.uploadType == "image") {
                        var imageUploadDialog = ueUpload.getDialog("insertimage");
                        imageUploadDialog.open();
                    } else {
                        var fileUploadDialog = ueUpload.getDialog("attachment");
                        fileUploadDialog.open();
                    }
                };
                $element.iTextbox(options);
            });

        });

        $('[data-toggle="topjui-kindeditor"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            if (options.items)
                options.items = options.items.replaceAll('\'', '').replaceAll(' ', '').split(',')
            if (options.afterUpload)
                options.afterUpload = options.afterUpload.toFunc()
            if (options.afterSelectFile)
                options.afterSelectFile = options.afterSelectFile.toFunc()
            if (options.confirmSelect)
                options.confirmSelect = options.confirmSelect.toFunc()

            var htmlTags = {
                font: [/*'color', 'size', 'face', '.background-color'*/],
                span: ['.color', '.background-color', '.font-size', '.font-family'
                    /*'.color', '.background-color', '.font-size', '.font-family', '.background',
                     '.font-weight', '.font-style', '.text-decoration', '.vertical-align', '.line-height'*/
                ],
                div: ['.margin', '.padding', '.text-align'
                    /*'align', '.border', '.margin', '.padding', '.text-align', '.color',
                     '.background-color', '.font-size', '.font-family', '.font-weight', '.background',
                     '.font-style', '.text-decoration', '.vertical-align', '.margin-left'*/
                ],
                table: ['align', 'width'
                    /*'border', 'cellspacing', 'cellpadding', 'width', 'height', 'align', 'bordercolor',
                     '.padding', '.margin', '.border', 'bgcolor', '.text-align', '.color', '.background-color',
                     '.font-size', '.font-family', '.font-weight', '.font-style', '.text-decoration', '.background',
                     '.width', '.height', '.border-collapse'*/
                ],
                'td,th': ['align', 'valign', 'width', 'height', 'colspan', 'rowspan'
                    /*'align', 'valign', 'width', 'height', 'colspan', 'rowspan', 'bgcolor',
                     '.text-align', '.color', '.background-color', '.font-size', '.font-family', '.font-weight',
                     '.font-style', '.text-decoration', '.vertical-align', '.background', '.border'*/
                ],
                a: ['href', 'target', 'name'],
                embed: ['src', 'width', 'height', 'type', 'loop', 'autostart', 'quality', '.width', '.height', 'align', 'allowscriptaccess'],
                img: ['src', 'width', 'height', 'border', 'alt', 'title', 'align', '.width', '.height', '.border'],
                'p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6': [
                    'class', 'align', '.text-align', '.color', /*'.background-color', '.font-size', '.font-family', '.background',*/
                    '.font-weight', '.font-style', '.text-decoration', '.vertical-align', '.text-indent', '.margin-left'
                ],
                pre: ['class'],
                hr: ['class', '.page-break-after'],
                'br,tbody,tr,strong,b,sub,sup,em,i,u,strike,s,del': []
            }
            KindEditor.create($element, {
                module: options.module ? options.module : '未设置',
                category: options.category ? options.category : 'default',
                width: options.width ? options.width + 'px' : '700px',
                height: options.height ? options.height + 'px' : '600px',
                pasteType: options.pasteType,
                minHeight: options.minHeight || 150,
                autoHeightMode: options.autoHeight || true,
                afterCreate: function () {
                    //this.loadPlugin('autoheight');
                },
                items: options.model == "simple" ? ['source', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline', 'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist', 'insertunorderedlist', '|', 'emoticons', 'image', 'insertfile', 'link'] : KindEditor.options.items,
                uploadJson: options.uploadJson || ctx + '/system/attachment/kindeditorUpload',
                fileManagerJson: options.fileManagerJson || ctx + '/static/kindeditor/4.1.5/jsp/file_manager_json.jsp',
                allowFileManager: options.allowFileManager || true,
                fillDescAfterUploadImage: options.fillDescAfterUploadImage || true, //上传图片成功后转到属性页，为false则直接插入图片[设为true方便自定义函数(X_afterSelect)]
                afterUpload: options.afterUpload,
                afterSelectFile: options.afterSelectFile,
                X_afterSelect: options.confirmSelect,
                htmlTags: htmlTags,
                cssPath: [
                    ctx + '/static/kindeditor/4.1.5/editor-content.css',
                    ctx + '/static/kindeditor/4.1.5/plugins/code/prettify.css'
                ],
                afterBlur: function () {
                    this.sync()
                }
            });
        });

        $('[data-toggle="topjui-upload"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            setTimeout(function () {

                var oriUrl = options.url;
                var newUrl = oriUrl;
                if (options.url.indexOf("{") != -1) {
                    var row = getSelectedRowData(options.grid.type, options.grid.id);
                    // 替换本表中选中行占位值
                    newUrl = replaceUrlParamValueByBrace(oriUrl, row);
                }
                var uploadbutton = KindEditor.uploadbutton({
                    button: KindEditor($element)[0],
                    fieldName: 'imgFile',
                    url: newUrl || ctx + '/system/attachment/kindeditorUpload?dir=file&module=article&category=default&puuid=11111111111111111111111111111111',
                    afterUpload: function (data) {
                        if (data.error === 0) {
                            console.log(data);
                            var url = KindEditor.formatUrl(data.url, 'absolute');
                            //KindEditor('#'.options.fieldId).val(url);
                            $('#' + options.fieldId).textbox('setText', url);
                            $('#' + options.fieldId).textbox('setValue', url);
                            refreshGrid(options.grid.type, options.grid.id);
                            //$("#attachTable").append('<tr><td class="label"></td><td class="label" style="text-align:left;white-space:nowrap;"><a href="' + url + '" target="_blank">' + data.fileName + '</a></td><td class="label"></td><td class="label"></td><td class="label"></td></tr>');
                        } else {
                            alert(data.message);
                        }
                    },
                    afterError: function (str) {
                        alert('自定义错误信息: ' + str);
                    }
                });
                uploadbutton.fileBox.change(function (e) {
                    uploadbutton.submit();
                });
            }, 500);
        });

        /*var tab = $("#index_tabs");//假设是tab
         var iframe = $("iframe",tab);//获取tab中的iframe
         $('[data-toggle="topjui-dialog"]', iframe.context).each(function(i){
         alert("abc");
         });*/

    });

    $(document).on(topJUI.eventType.initUI.base, function (e) {
        //setTimeout(function () {
        // 父框架获取子框架元素
        // var test = $("iframe").contents().find("#test").val();

        getTabWindow().$('[data-toggle="topjui-treegrid"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            var op = [];
            $element.find("th").each(function (i) {
                op.push(strToJson("{" + this.getAttribute("data-options") + "}"));
            });
            options.columns = [op];

            $element.attr('id', options.id);
            getTabWindow().$('#' + options.id).iTreegrid(options);
        });

        getTabWindow().$('[data-toggle="topjui-datagrid"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            var frozenColumns = $element.find("thead:first")[0];
            //console.log(frozenColumns.getAttribute("frozen"));
            if ($(frozenColumns).attr("frozen")) {
                var frozenColumns = [];
                $element.find("thead:first th").each(function (i) {
                    frozenColumns.push(strToJson("{" + this.getAttribute("data-options") + "}"));
                });
                options.frozenColumns = [frozenColumns];

                var columns = [];
                $element.find("thead:eq(1) th").each(function (i) {
                    columns.push(strToJson("{" + this.getAttribute("data-options") + "}"));
                });
            } else {
                var columns = [];
                $element.find("thead th").each(function (i) {
                    columns.push(strToJson("{" + this.getAttribute("data-options") + "}"));
                });
            }
            options.columns = [columns];

            var kindEditor = [];

            //console.log(op.join());

            $element.attr('id', options.id);
            getTabWindow().$('#' + options.id).iDatagrid(options);
        });

        getTabWindow().$('[data-toggle="topjui-edatagrid"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            var frozenColumns = $element.find("thead:first")[0];
            //console.log(frozenColumns.getAttribute("frozen"));
            if ($(frozenColumns).attr("frozen")) {
                var frozenColumns = [];
                $element.find("thead:first th").each(function (i) {
                    frozenColumns.push(strToJson("{" + this.getAttribute("data-options") + "}"));
                });
                options.frozenColumns = [frozenColumns];

                var columns = [];
                $element.find("thead:eq(1) th").each(function (i) {
                    columns.push(strToJson("{" + this.getAttribute("data-options") + "}"));
                });
            } else {
                var columns = [];
                $element.find("thead th").each(function (i) {
                    columns.push(strToJson("{" + this.getAttribute("data-options") + "}"));
                });
            }
            options.columns = [columns];

            var kindEditor = [];

            //console.log(op.join());

            $element.attr('id', options.id);
            getTabWindow().$('#' + options.id).iEdatagrid(options);
        });

        getTabWindow().$('[data-toggle="topjui-tabs"]').each(function () {
            var $element = $(this);
            var options = getOptionsJson($element);

            $element.attr('id', options.id);
            getTabWindow().$('#' + options.id).iTabs(options);
        });

        getTabWindow().$('[data-toggle="topjui-menubutton"]').each(function () {
            var $element = $(this);
            var options = getOptionsJson($element);

            options.id = getTimestamp();
            $(this).attr("id", options.id);

            options = bindMenuClickEvent($element, options);

            $(this).iMenubutton(options);
        });

        getTabWindow().$('[data-toggle="topjui-uploader"]').each(function () {
            var $element = $(this);
            var options = getOptionsJson($element);

            // 生成菜单按钮
            $(this).iMenubutton(options);

            var uploader;
            var upfileGrid;
            var state = 'pending';
            var initfilesize = 0;
            var md5value = "";
            var isUpFile = false;//判断是否有文件上传成功，来提示dialog进行下部操作
            var parentRow;

            var dialogDom = '<div id="uploaderDialog">' +
                '<div id="upfileGrid-toolbar" data-options="border:false">' +
                '<div style="float: left;margin-right:5px;">' +
                '<div id="chooseFile">选择文件</div>' +
                '</div>' +
                '<a id="addUpFile" style="margin-right:5px;">开始上传</a>' +
                '<a id="removeUpFile">移除文件</a>' +
                '</div>' +
                '<table id="upfileGrid"></table>' +
                '</div>';

            getTabWindow().$('body').append(
                dialogDom +
                '<div id="uploaderDialog-buttons" style="display:none">' +
                '<a href="#" id="closeUploaderDialog">关闭</a>' +
                '</div>'
            );

            upfileGrid = $("#upfileGrid").datagrid({
                fit: true,
                fitColumns: true,
                rownumbers: true,
                nowrap: true,
                animate: false,
                border: false,
                singleSelect: false,
                idField: 'fileId',
                pagination: false,
                toolbar: '#upfileGrid-toolbar',
                columns: [[
                    {field: 'ck', checkbox: true},
                    {field: 'fileId', title: 'fileId', hidden: true},
                    {field: 'fileName', title: '文件名称', width: 100},
                    {field: 'fileSize', title: '文件大小', width: 30},
                    {field: 'validateMd5', title: '文件验证', width: 20},
                    {
                        field: 'progress',
                        title: '上传进度',
                        width: 180,
                        fixed: true,
                        formatter: function (value, rec) {
                            var htmlstr = '<div class="easyui-progressbar progressbar" style="width: 170px; height: 20px;" value="' + value + '" text="' + value + '%">' +
                                '<div class="progressbar-text" style="width: 170px; height: 20px; line-height: 20px;">' + value + '%</div>' +
                                '<div class="progressbar-value" style="width: ' + value + '%; height: 20px; line-height: 20px;">' +
                                '<div class="progressbar-text" style="width: 170px; height: 20px; line-height: 20px;">' + value + '%</div>' +
                                '</div>' +
                                '</div>';
                            return htmlstr;
                        }
                    },
                    {field: 'fileState', title: '上传状态', width: 20},
                ]]
            });

            // 在文件开始发送前做些异步操作。做md5验证
            // WebUploader会等待此异步操作完成后，开始发送文件。
            WebUploader.Uploader.register({
                "before-send-file": "beforeSendFile"
            }, {
                beforeSendFile: function (file) {
                    var task = new $.Deferred();
                    (new WebUploader.Uploader()).md5File(file, 0, 10 * 1024 * 1024).progress(function (percentage) {
                        upfileGrid.datagrid('updateRow',
                            {
                                index: upfileGrid.datagrid('getRowIndex', file.id),
                                row: {validateMd5: (percentage * 100) + "%"}
                            });
                    }).then(function (val) {
                        $.ajax({
                            type: "POST",
                            url: "/system/attachment/md5Validate",
                            data: {
                                type: "md5Check", md5: val
                            },
                            cache: false,
                            timeout: 3000,
                            dataType: "json"
                        }).then(function (data, textStatus, jqXHR) {
                            if (data.isHave) {   //若存在，这返回失败给WebUploader，表明该文件不需要上传
                                task.reject();
                                uploader.skipFile(file);
                                upfileGrid.datagrid('updateRow',
                                    {
                                        index: upfileGrid.datagrid('getRowIndex', file.id),
                                        row: {fileState: "秒传", progress: 100}
                                    });
                            } else {
                                $.extend(uploader.options.formData, {md5: val});
                                task.resolve();
                            }
                        }, function (jqXHR, textStatus, errorThrown) {    //任何形式的验证失败，都触发重新上传
                            task.resolve();
                        });
                    });
                    return $.when(task);
                }
            });

            uploader = WebUploader.create({
                // 不压缩image
                resize: false,
                // swf文件路径
                swf: '/static/webuploader/js/Uploader.swf',
                // 默认文件接收服务端。
                server: '/system/attachment/upload',
                // 选择文件的按钮。可选。
                // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                pick: '#chooseFile',
                fileSingleSizeLimit: 100 * 1024 * 1024,//单个文件大小
                accept: [{
                    title: 'file',
                    extensions: 'doc,docx,pdf,xls,xlsx,ppt,pptx,gif,jpg,jpeg,bmp,png,rar,zip',
                    mimeTypes: '.doc,.docx,.pdf,.xls,.xlsx,.ppt,.pptx,.gif,.jpg,.jpeg,.bmp,.png,.rar,.zip'
                }]
            });

            // 当有文件添加进来的时候
            uploader.on('fileQueued', function (file) {
                var fileSize = bytesToSize(file.size);
                var row = {
                    fileId: file.id,
                    fileName: file.name,
                    fileSize: fileSize,
                    validateMd5: '0%',
                    progress: 0,
                    fileState: "等待上传"
                };
                upfileGrid.datagrid('insertRow', {
                    index: 0,
                    row: row
                });
            });

            // 文件上传过程中创建进度条实时显示。
            uploader.on('uploadProgress', function (file, percentage) {
                upfileGrid.datagrid('updateRow',
                    {
                        index: upfileGrid.datagrid('getRowIndex', file.id),
                        row: {progress: (percentage * 100).toFixed(2)}
                    });
            });

            //文件上传成功
            uploader.on('uploadSuccess', function (file) {
                var rows = upfileGrid.datagrid("getRows");
                //上传成功设置checkbox不可用
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i].fileId == file.id) {
                        $("input[type='checkbox']")[i + 1].disabled = true;
                    }
                }
                $("#removeUpFile").linkbutton("disable");
                upfileGrid.datagrid('updateRow',
                    {index: upfileGrid.datagrid('getRowIndex', file.id), row: {fileState: '上传成功'}});
                isUpFile = true;
            });
            //文件上传失败
            uploader.on('uploadError', function (file) {
                upfileGrid.datagrid('updateRow',
                    {index: upfileGrid.datagrid('getRowIndex', file.id), row: {fileState: '上传失败'}});
            });

            uploader.on('uploadComplete', function (file) {

            });

            uploader.on('uploadFinished', function () {//成功后
                $("#attachmentDg").datagrid('reload');
            });

            uploader.on('error', function (handler) {
                if (handler == 'F_EXCEED_SIZE') {
                    tim.parentAlert('error', '上传的单个文件不能大于' + initfilesize + '。<br>操作无法进行,如有需求请联系管理员', 'error');
                } else if (handler == 'Q_TYPE_DENIED') {
                    tim.parentAlert('error', '不允许上传此类文件!。<br>操作无法进行,如有需求请联系管理员', 'error');
                }
            });

            /*从队列中移除文件*/
            var removeFile = function () {
                var fileRows = upfileGrid.datagrid("getSelections");
                var copyRows = [];
                for (var j = 0; j < fileRows.length; j++) {
                    copyRows.push(fileRows[j]);
                }
                for (var i = 0; i < copyRows.length; i++) {
                    var index = upfileGrid.datagrid('getRowIndex', copyRows[i]);
                    uploader.removeFile(copyRows[i].fileId, true);
                    upfileGrid.datagrid('deleteRow', index);
                }
                upfileGrid.datagrid('clearSelections');
            }

            var uploadToServer = function (uploader, parentRow) {
                if (uploader.getFiles().length <= 0) {
                    $.messager.alert('提示', '没有上传的文件!', 'error');
                    return;
                }
                if (state === 'uploading') {
                    uploader.stop();
                }
                else {
                    uploader.option('formData', {
                        puuid: parentRow.uuid
                    });
                    uploader.upload();
                }
            }

            //初始化上传参数
            var initUpLoad = function (args) {
                var opts = {};
                if (args) {
                    if (args.url != null && args.url != "") {
                        opts.server = args.url;
                    }
                    if (args.size != null && args.size != "") {
                        initfilesize = args.size;
                        opts.fileSingleSizeLimit = args.size;
                    }
                    if (args.args != null && args.args != "") {
                        opts.formData = args.args;
                    }
                    if (opts) {
                        $.extend(uploader.options, opts);
                    }
                }
            }

            var getSuccess = function () {
                return isUpFile;
            }

            $element.on("click", function () {

                if (typeof options.parentGrid == "object") {
                    //判断父表数据是否被选中
                    parentRow = getSelectedRowData(options.parentGrid.type, options.parentGrid.id);
                    if (!parentRow) {
                        $.messager.alert(
                            topJUI.language.message.title.operationTips,
                            options.parentGrid.unselectedMsg || topJUI.language.message.msg.selectParentGrid,
                            topJUI.language.message.icon.warning
                        );
                        return;
                    }
                }

                var fileRows = upfileGrid.datagrid("getRows");
                if (fileRows.length > 0) {
                    upfileGrid.datagrid("selectAll");
                    removeFile();
                }

                var uploaderDialog = $("#uploaderDialog");

                var defaults = {
                    iconCls: 'fa fa-plus',
                    parentGridUnselectedMsg: '请先选中一条主表数据！',
                    dialog: {
                        title: '附件上传',
                        width: 900,
                        height: 500,
                        maximized: false,
                        maximizable: true,
                        buttons: '#uploaderDialog-buttons'
                    }
                };
                options = $.extend(defaults, options);

                uploaderDialog.dialog({
                    title: options.dialog.title,
                    width: options.dialog.width,
                    height: options.dialog.height,
                    maximized: options.dialog.maximized,
                    maximizable: options.dialog.maximizable,
                    buttons: options.dialog.buttons
                });
                uploaderDialog.dialog('open');

                $('#addUpFile').linkbutton({
                    iconCls: 'fa fa-plus',
                    height: 37,
                    onClick: function () {
                        uploadToServer(uploader, parentRow);
                    }
                });
                $('#removeUpFile').linkbutton({
                    iconCls: 'icon-no',
                    height: 37,
                    onClick: removeFile
                });
                $('#closeUploaderDialog').linkbutton({
                    iconCls: 'icon-no',
                    onClick: function () {
                        uploaderDialog.dialog('close');
                    }
                });
            });

        });

        getTabWindow().$('[data-toggle="topjui-submenubutton"]').each(function () {
            var $element = $(this);
            var options = getOptionsJson($element);
            bindMenuClickEvent($element, options);
            $(this).iSubMenubutton(options);
        });
        //}, 1);

        //setTimeout(function () {
        getTabWindow().$('[data-toggle="topjui-dialog"]').each(function () {
            var $element = $(this);
            var options = getOptionsJson($element);

            var href = $element.attr('href');
            if (href != undefined) {
                options.href = href;
                getTabWindow().$('body').append('<div id="' + options.id + '"></div>');
                getTabWindow().$('#' + options.id).iDialog(options);

                $element.on("click", function () {
                    getTabWindow().$('#' + options.id).dialog('open');
                    return false; //阻止链接跳转
                });

            } else {
                $element.attr('id', options.id);
                //getTabWindow().$('#' + options.id).iDialog(options);
            }
        });

        getTabWindow().$('[data-toggle="topjui-linkbutton"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            $element.iLinkbutton(options);
        });
        //}, 10);
    });

    $(document).on(topJUI.eventType.initUI.base2, function (e) {
        //setTimeout(function () {
        getTabWindow().$('[data-toggle="topjui-menu"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            $element.attr('id', options.id);
            getTabWindow().$('#' + options.id).iMenu(options);
        });

        getTabWindow().$('[data-toggle="topjui-tree"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            $element.attr('id', options.id);
            getTabWindow().$('#' + options.id).iTree(options);
        });
        //}, 15);
    });

    $(document).on(topJUI.eventType.initUI.echarts, function (e) {
        if (getTabWindow().$('[data-toggle="topjui-echarts"]').length > 0) {
            getTabWindow().$('[data-toggle="topjui-echarts"]').each(function (i) {
                var $element = $(this);
                var options = getOptionsJson($element);

                // 基于准备好的dom，初始化echarts实例
                var divId = getTabWindow().document.getElementById($element[0].id);
                var myChart = echarts.init(divId);

                // 指定图表的配置项和数据
                myChart.setOption({
                    title: {
                        text: ''
                    },
                    tooltip: {},
                    legend: {
                        data: []
                    },
                    series: []
                });

                // 异步加载数据
                $.ajax({
                    url: options.url,
                    type: 'post',
                    dataType: 'json',
                    success: function (data, response, status) {
                        //console.log(data.legend);
                        if (options.type == "bar" || options.type == "line") {
                            // 填入数据
                            myChart.setOption({
                                title: {
                                    text: data.title
                                },
                                xAxis: {
                                    data: data.categories
                                },
                                yAxis: {},
                                legend: {
                                    data: data.legend
                                },
                                series: data.series
                            });
                        }
                        if (options.type == "pie") {
                            // 填入数据
                            myChart.setOption({
                                title: {
                                    text: data.title,
                                    x: 'center'
                                },
                                tooltip: {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                                },
                                legend: data.legend,
                                series: data.series
                            });
                        }
                        if (options.type == "gauge") {
                            // 填入数据
                            myChart.setOption({
                                tooltip: {
                                    formatter: "{a} <br/>{b} : {c}%"
                                },
                                series: [
                                    {
                                        name: '业务指标',
                                        type: 'gauge',
                                        detail: {formatter: '{value}%'},
                                        data: [{value: 17.1, name: '党员发展率'}]
                                    }
                                ]
                            });
                        }
                    },
                    error: function (errorMsg) {
                        alert("获取图表数据失败!");
                        myChart.hideLoading();
                    }
                });

            });
        }
    });

    /**
     * 查询界面初始化打开及每新增一行查询条件时触发显示各项内容,窗口onLoad时加载
     */
    $(document).on(topJUI.eventType.initUI.advanceSearchForm, function (e) {

        var valueArr = $.cookie('fieldNameStr').split(",");
        var textArr = $.cookie('colNameStr').split(",");
        var fieldArr = [];

        for (var i = 0; i < textArr.length; i++) {
            fieldArr.push({
                value: valueArr[i],
                text: textArr[i]
            });
        }

        $(".field:last").combobox({
            textField: 'text',
            valueField: 'value',
            data: fieldArr,
            editable: false,
            width: 140
        });

        $(".op:last").combobox({
            textField: 'text',
            valueField: 'value',
            data: [
                {"text": "包含", "value": "contains", "selected": true},
                {"text": "等于", "value": "equal"},
                {"text": "不等于", "value": "notequal"},
                {"text": "大于", "value": "greater"},
                {"text": "大于或等于", "value": "greaterorequal"},
                {"text": "小于", "value": "less"},
                {"text": "小于或等于", "value": "lessorequal"},
                {"text": "以...开头", "value": "beginwith"},
                {"text": "以...结尾", "value": "endwith"}
            ],
            width: 120,
            panelHeight: 220,
            editable: false
        });

        $(".value:last").textbox({});

        $(".lb:last").combobox({
            textField: 'text',
            valueField: 'value',
            data: [
                {"text": "无", "value": "", "selected": true},
                {"text": "(", "value": "("}
            ],
            width: 45,
            panelHeight: 70,
            editable: false
        });

        $(".rb:last").combobox({
            textField: 'text',
            valueField: 'value',
            data: [
                {"text": "无", "value": "", "selected": true},
                {"text": ")", "value": ")"}
            ],
            width: 45,
            panelHeight: 70,
            editable: false
        });

        $(".join:last").combobox({
            textField: 'text',
            valueField: 'value',
            data: [
                {"text": "并且", "value": "and", "selected": true},
                {"text": "或者", "value": "or"}
            ],
            width: 70,
            panelHeight: 70,
            editable: false
        });

        $("#addCondition").menubutton({
            iconCls: 'fa fa-plus',
            hasDownArrow: false
        });

        $(".deleteCondition:last").menubutton({
            iconCls: 'fa fa-minus',
            hasDownArrow: false
        });

        $(".deleteCondition:last").on('click', function () {
            var index = $(".deleteCondition").index(this) + 2;
            getTabWindow().$("#advanceSearchTable tr:eq(" + index + ")").remove();
        });
    });

    /**
     * 导入Excel事件，窗口onLoad时加载
     */
    $(document).on(topJUI.eventType.initUI.importExcelForm, function (e) {
        //触发界面初始化显示样式
        //$(this).trigger(topJUI.eventType.initUI.form);

        setTimeout(function () {
            var fieldStr = $.cookie('fieldNameStr');
            var fieldArr = fieldStr.split(",");
            var v = "";
            for (var i = 0; i < fieldArr.length; i++) {
                if (i == (fieldArr.length - 1))
                    v += "'{" + i + "}'";
                else
                    v += "'{" + i + "}',";
            }
            var importExcelSql = "INSERT INTO {table} (" + fieldStr + ") VALUES (" + v + ")";
            $("#importExcelSql").textbox("setValue", importExcelSql);
        }, 1000);
    });

}(jQuery);

$(function () {
    // 页面加载完成后触发基础表格及弹窗事件，主页面除外
    if (!topJUI.config.mainPage) {
        $(this).trigger(topJUI.eventType.initUI.base);
        $(this).trigger(topJUI.eventType.initUI.base2);
    }

    if ($.cookie("verify") != "y") {
        if (navigator.onLine) {
            $.ajax({
                type: 'GET',
                url: $.base64.decode("aHR0cDovL2xpY2Vuc2UuZXdzZC5jbi90b3BqdWkvY2xpZW50L3ZlcmlmeQ=="),
                data: "host=" + window.location.host + "&href=" + window.location.href,
                dataType: 'jsonp',
                jsonp: 'callback',
                processData: false,
                success: function (data) {
                    if (data.status == "1") {
                        var expiresDate = new Date();
                        expiresDate.setTime(expiresDate.getTime() + (data.intervalMinute * 60 * 1000));
                        $.cookie("verify", "y", {expires: expiresDate, path: '/'});
                        $.messager.alert(decodeURI($.base64.decode("JUU4JUFEJUE2JUU1JTkxJThB")), decodeURI($.base64.decode("JUU4JUFGJUE1JUU3JUIzJUJCJUU3JUJCJTlGJUU2JTg5JTgwJUU0JUJEJUJGJUU3JTk0JUE4JUU3JTlBJTg0VG9wSlVJJUU1JTg5JThEJUU3JUFCJUFGJUU2JUExJTg2JUU2JTlFJUI2JUU2JTlDJUFBJUU4JUEyJUFCJUU2JThFJTg4JUU2JTlEJTgzJUU0JUJEJUJGJUU3JTk0JUE4JUVGJUJDJThDJUU3JUIzJUJCJUU3JUJCJTlGJUU1JUFEJTk4JUU1JTlDJUE4JUU5JUEzJThFJUU5JTk5JUE5JUVGJUJDJTgxJUU4JUFGJUI3JUU0JUI4JThFJUU3JUIzJUJCJUU3JUJCJTlGJUU2JThGJTkwJUU0JUJFJTlCJUU4JTgwJTg1JUU4JTgxJTk0JUU3JUIzJUJCJUU2JTg4JTk2JUU0JUJCJThFJTNDYSUyMGhyZWY9JTIyaHR0cDovL3d3dy5ld3NkLmNuJTIyJTIwdGFyZ2V0PSUyMl9ibGFuayUyMiUyMHN0eWxlPSUyMmNvbG9yOnJlZDslMjIlM0UlRTUlQUUlOTglRTYlOTYlQjklRTclQkQlOTElRTclQUIlOTklM0MvYSUzRSVFOCU4RSVCNyVFNSVCRSU5NyVFNCVCRCVCRiVFNyU5NCVBOCVFNiU4RSU4OCVFNiU5RCU4MyVFRiVCQyU4MQ==")));
                    }
                }
            });
        }
    }

    /**
     * 高级查询对话框窗口
     */
    /*    $("#advanceSearchDialog").dialog({
     width: 620,
     height: 400,
     title: '组合查询',
     modal: false,
     collapsible: true,
     minimizable: false,
     maximized: false,
     resizable: true,
     closed: true,
     iconCls: 'fa fa-search',
     href: '/system/search/advanceSearch',
     zIndex: 10,
     buttons: '#advanceSearchDialog-buttons',
     onLoad: function () {
     //窗口打开时，触发事件
     $(this).trigger(topJUI.eventType.initUI.advanceSearchForm);
     }
     });*/

    /*$("#resetAdvanceSearchForm").on('click', function () {
     var formDataArr = [];
     loadGrid(formDataArr)
     });*/

    /*$("#submitAdvanceSearchForm").on('click', function () {

     });
     */

    setTimeout(function () {
        /**
         * 导入Excel对话框窗口,Common/footer.jsp中定义
         */
        $("#importExcelDialog").dialog({
            width: 650,
            height: 200,
            title: '高级查询',
            modal: false,
            collapsible: true,
            minimizable: false,
            maximized: false,
            resizable: true,
            closed: true,
            iconCls: 'icon-find',
            href: '/system/excel/excelImport',
            zIndex: 10,
            buttons: '#importExcelDialog-buttons',
            onLoad: function () {
                //窗口打开时，触发事件
                $(this).trigger(topJUI.eventType.initUI.importExcelForm);
            }
        });
    }, 1000);

    $("#submitImportExcelForm").on('click', function () {
        var ajaxData = $("#importExcelDialog").serializeArray();
        //console.log(ajaxData[0].value);
        $.ajax({
            type: "POST",
            url: getUrl("controller") + "importExcel",
            data: ajaxData,
            dataType: "json",
            success: function (data) {
                showMessage({statusCode: data.statusCode, title: data.title, message: data.message});
                $("#importExcelDialog").dialog('close').form('reset');
                refreshGrid($.cookie("gridType"), $.cookie("gridId"));
            },
            error: function (msg) {
                showMessage({statusCode: 300, title: "操作提示", message: msg});
            }
        });
    });

});