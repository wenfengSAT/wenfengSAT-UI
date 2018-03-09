/**
 * 封装的dialog插件，基于bootstrap模态窗口的简单扩展
 * @Author 小策一喋 <xvpindex@qq.com>
 * @Date 2016/6/13 12:37
 */

/*------------------------------------------------------
 *原插件对bootstrap3.3.0不支持

 id:"modal",//弹窗id
 title:"dialog",//弹窗标题
 width:"600",//弹窗宽度，暂时不支持%
 height:"500",//弹窗高度,不支持%
 backdrop:true,//是否显示遮障，和原生bootstrap 模态框一样
 keyboard:true,//是否开启esc键退出，和原生bootstrap 模态框一样
 remote:"",//加载远程url，和原生bootstrap 模态框一样
 openEvent:null,//弹窗打开后回调函数
 closeEvent:null,//弹窗关闭后回调函数
 okEvent:null//单击确定按钮回调函数

 1、bootstrap-wwDialog 插件暂时只有2个按钮，取消和确定，暂不支持自定义按钮，自己可以修改源代码添加此功能。
 2、只能使用html data-*方式定义，不支持js初始化时配置参数，自己可以修改源码扩展此功能。
 3、宽度和高度建议不要使用百分比
 4、注意这里回调函数必需是字符串格式，如okEvent:”ok()” 这里ok函数式自己定义的函数，切记要带();
 ------------------------------------------------------*/
(function ($) {
    $.fn.wwDialog = function () {
        var defaults = {
            id: "modal",//弹窗id
            title: "dialog",//弹窗标题
            width: "600",//弹窗宽度，暂时不支持%
            height: "400",//弹窗高度,不支持%
            backdrop: false,//是否显示遮障，和原生bootstrap 模态框一样
            keyboard: true,//是否开启esc键退出，和原生bootstrap 模态框一样
            remote: "",//加载远程url，和原生bootstrap 模态框一样
            openEvent: null,//弹窗打开后回调函数
            closeEvent: null,//弹窗关闭后回调函数
            okEvent: null//单击确定按钮回调函数
        };

        //动态创建窗口
        var creatDialog = {
            init: function (opts) {
                var _self = this;

                //动态插入窗口
                var d = _self.dHtml(opts);
                $("body").append(d);

                var modal = $("#" + opts.id);

                //初始化窗口
                //modal.modal(opts);
                modal.modal({
                    backdrop: false,
                    keyboard: opts.keyboard
                });
                $(".modal-body").load(opts.remote);

                //窗口大小位置
                var h = modal.height() - modal.find(".modal-header").outerHeight() - modal.find(".modal-footer").outerHeight() - 5;
                //modal.css({ 'margin-left': opts.width / 2 * -1, 'margin-top': opts.height / 2 * -1, 'top': '50%' }).find(".modal-body").innerHeight(h);
                modal.css({
                    position: "absolute",
                    left: ($(window).width() - opts.width) / 2,
                    top: ($(document).height() - opts.height) / 2
                });
                $(".modal-body").css({
                    height: opts.height - 115
                });
                modal
                //显示窗口
                    .modal('show')
                    //隐藏窗口后删除窗口html
                    .on('hidden', function () {
                        modal.remove();
                        $(".modal-backdrop").remove();
                        if (opts.closeEvent) {
                            eval(opts.closeEvent);
                        }
                    })
                    //窗口显示后
                    .on('shown', function () {

                        if (opts.openEvent) {
                            eval(opts.openEvent);
                        }


                    });
                //绑定按钮事件
                $(".ok").click(function () {
                    if (opts.okEvent) {
                        var ret = eval(opts.okEvent);
                        if (ret) {
                            modal.modal('hide');
                        }
                    }
                });
            },
            dHtml: function (o) {
                return '<div id="' + o.id + '" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true" >' +
                    '<div style=" background-color: #000;bottom: 0;left: 0;position: fixed;right: 0;top: 0;transition: opacity 0.15s linear 0s;opacity: 0.5;"></div>' +
                    '<div class="modal-dialog" style="display:table-cell">' +
                    '<div class="modal-content" style="width:' + o.width + 'px;height:' + o.height + 'px;">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" >' +
                    '<span aria-hidden="true">&times;</span>' +
                    '<span class="sr-only">Close</span>' +
                    '</button>' +
                    '<h4 id="myModalLabel" class="modal-title">' + o.title + '</h4>' +
                    '</div>' +
                    '<div class="modal-body" style="overflow:auto;overflow-y:scroll;"><p>正在加载...</p></div>' +
                    '<div class="modal-footer">' +
                    '<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>' +
                    '<button class="btn btn-primary ok">确定</button>' +
                    '</div>' +
                    '</div></div></div>';
            }
        };

        return this.each(function () {
            $(this).click(function () {
                var opts = $.extend({}, defaults, {
                    id: $(this).attr("data-id"),
                    title: $(this).attr("data-mtitle"),
                    width: $(this).attr("data-width"),
                    height: $(this).attr("data-height"),
                    backdrop: $(this).attr("data-backdrop"),
                    keyboard: $(this).attr("data-keyboard"),
                    remote: $(this).attr("data-remote"),
                    openEvent: $(this).attr("data-openEvent"),
                    closeEvent: $(this).attr("data-closeEvent"),
                    okEvent: $(this).attr("data-okEvent")
                });
                $(".modal").remove();
                creatDialog.init(opts);
            });
        });

    };

})(jQuery);