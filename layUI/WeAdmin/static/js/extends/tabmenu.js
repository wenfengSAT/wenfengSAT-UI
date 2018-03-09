/*
 * @Author: Paco
 * @Date:   2017-01-31
 * @lastModify 2017-05-08
 * +----------------------------------------------------------------------
 * | jqadmin [ jq酷打造的一款懒人后台模板 ]
 * | Copyright (c) 2017 http://jqadmin.jqcool.net All rights reserved.
 * | Licensed ( http://jqadmin.jqcool.net/licenses/ )
 * | Author: Paco <admin@jqcool.net>
 * +----------------------------------------------------------------------
 */

layui.define(['jquery', 'element'], function(exports) {
    var $ = layui.jquery,
        element = layui.element,
        device = layui.device(),
        tabMenu = function() {
            this.config = {
                item: '#WeTabTip',
                closed: true
            };
        },
        objTab = {};

    /**
     * [参数设置 options]
     */
    tabMenu.prototype.set = function(options) {
        if (typeof(options) == 'string' && options != "") {
            this.config.item = options;
        } else if (typeof(options) == 'object') {
            $.extend(true, this.config, options);
        }
        return this;
    };

    /**
     *@todo 初始化对象
     *@return 返回对象参数初始化结果
     */
    tabMenu.prototype.init = function(options) {
        var _this = this,
            config = _this.config,
            $container = $('' + config.item + ''),
            filter = $container.attr('lay-filter');
        if (filter === undefined || filter === '') {
            console.log('错误:请设置Tab菜单选项卡属性lay-filter过滤器');
        }

        objTab.titleBox = $container.children('ul.layui-tab-title');
        objTab.contentBox = $container.children('div.layui-tab-content');
        objTab.tabFilter = filter;
        _this.hideRightMenu();
        _this.drag();

        return _this;
    }

    /**
     *@todo 检查页面是否已打开，如果已打开则返回索引值，否则返回-1
     *@param string title 打开页面的标题
     *@return int tab的索引值，元则返回-1
     */
    tabMenu.prototype.exited = function(title) {
        var tab_index = -1;
        if (objTab.titleBox === undefined) {
            this.init()
        }

        objTab.titleBox.find('li').each(function(i, e) {
            var $em = $(this).children('em');
            if ($em.text() === title) {
                tab_index = $(this).attr('lay-id');
            };
        });
        return tab_index;
    }

    /**
     * 菜单操作的接口
     */
    tabMenu.prototype.beforeTabAdd = function(data, _this) {}
    tabMenu.prototype.changeTab = function(data, _this, tab_index) {}
    tabMenu.prototype.afterTabClose = function(data, _this) {}

    /**
     *@todo 添加tab菜单选项卡
     *@param object data [ title 菜单选项卡标题
                          ,href 菜单URL地址
                          ,icon 菜单的ICON图标
                    ]
     */
    tabMenu.prototype.tabAdd = function(data, fresh) {

        var tab_index = this.exited(data.title),
            _this = this;
        if (tab_index === -1) {
            _this.beforeTabAdd(data, _this);
            var layID = data.layId ? data.layId : new Date().getTime();
            var content = '<iframe src="' + data.href + '" data-id="' + layID + '" class="jqadmin-iframe"></iframe>';
            var title = '';

            // 如果icon有定义则添加到标题中
            if (!_this.config.showIcon) {
                title += '<i class="iconfont hide-icon">' + data.icon + '</i>';
            } else {
                title += '<i class="iconfont">' + data.icon + '</i>';
            }
            title += '<em>' + data.title + '</em>';
            if (this.config.closed) {
                title += '<i class="layui-icon layui-unselect layui-tab-close" data-id="' + layID + '">&#x1006;</i>';
            }

            //添加tab
            element.tabAdd(objTab.tabFilter, {
                title: title,
                content: content,
                id: layID
            });

            //添加打开的菜单到列表,刷新打开列表时不操作数据
            if (!data.nodo) {
                data.layId = layID;
                _this.storage(data, "add");
            }

            if (data.old) {
                objTab.titleBox.find('li[lay-id=' + layID + ']').attr("fresh", 1);
            }

            //页面淡出效果
            _this.effect(layID);


            if (this.config.closed) {
                //监听关闭事件
                objTab.titleBox.find('li').children('i.layui-tab-close[data-id=' + layID + ']').on('click', function() {
                    element.tabDelete(objTab.tabFilter, $(this).parent('li').attr('lay-id'), data.parent);
                    _this.tabMove(1, 1);
                    _this.afterTabClose(data, _this);
                    //删除数组中的对应元素
                    element.init();
                    _this.storage(data, "close");
                });
            };

            this.tabMove(tab_index, 0);
            //切换到当前打开的选项卡
            element.tabChange(objTab.tabFilter, layID);

            //监听鼠标右键事件
            objTab.titleBox.find('li:not([bind])').on('contextmenu', function(event) {
                $(this).attr("bind", 1);
                var layId = $(this).attr('lay-id');
                var e = event || window.event;

                $('.right-click-menu').attr('lay-id', layId).css({ "top": e.pageY, "left": e.pageX }).slideDown(100);
                $('.right-click-menu').find("a:not([bind])").on('click', { _this: _this }, _this.rightMenuEvent);
                return false;
            });

        } else {
            element.tabChange(objTab.tabFilter, tab_index);
            _this.changeTab(data, _this, tab_index);
            _this.effect(tab_index, true);
            data.layId = tab_index;
            _this.storage(data, "change");

            this.tabMove(tab_index, 0);
            if (fresh) {
                _this.fresh(tab_index);
            }
        }


    }

    tabMenu.prototype.effect = function(layID, ischange) {
        //页面淡出效果
        var l = layer.load(1);
        if (ischange) {
            objTab.contentBox.find('iframe[data-id=' + layID + ']').css({ "opacity": "0", "margin-top": "50px" }).delay(200).animate({ opacity: '1', marginTop: "0" }, 500);
            layer.close(l);
        } else {
            objTab.contentBox.find('iframe[data-id=' + layID + ']').css({ "opacity": "0", "margin-top": "50px" }).load(function() {
                $(this).delay(100).animate({ opacity: '1', marginTop: "0" }, 500);
                layer.close(l);
            });
        }

    }

    tabMenu.prototype.rightMenuEvent = function(event) {
        var _this = event.data._this;
        var event = $(this).data('event'),
            parent = $(this).parents('.right-click-menu').attr("parent");
        $(this).attr("bind", 1);
        var index = $(this).parents('.right-click-menu').attr('lay-id');
        $(this).parents('.right-click-menu').hide();
        $('.menu-list').slideUp();
        $('.tab-move-btn').find('i').html("&#xe604;");
        switch (event) {
            case "close":
                if (index != 0) {
                    element.tabDelete(objTab.tabFilter, index);

                }
                var data = {
                    layId: index
                }
                _this.storage(data, "close");
                break;

            case "other":
                objTab.titleBox.find('li').each(function(i, o) {
                    var layId = $(o).attr('lay-id');
                    if (layId != index && layId != 0) {
                        element.tabDelete(objTab.tabFilter, layId);
                    }
                })
                var data = {
                    layId: index
                }
                _this.storage(data, "other");
                break;

            case "all":
                objTab.titleBox.find('li').each(function(i, o) {
                    var layId = $(o).attr('lay-id');
                    if (layId != 0) {
                        element.tabDelete(objTab.tabFilter, layId);
                    }
                    var data = {
                        layId: layId
                    }
                    _this.storage(data, "all");
                })
                break;

            default:
                _this.fresh(index);
        }

        _this.tabMove(1, 1);
        $(this).parents('.right-click-menu').hide();
        element.init();
    }

    tabMenu.prototype.storage = function(data, action) {
        if (data.title == undefined && action != "all") {
            return false;
        }
        var storage = window.sessionStorage;
        var _data = JSON.stringify(data);
        if (action == "add") {
            if (storage.menu) {
                var menulist = storage.menu;
                menulist = menulist.split("|");
                menulist.remove(_data);
                menulist.push(_data);
                var menu = menulist.join("|");
                storage.menu = menu;
            } else {
                storage.menu = _data;
            }
            storage.curMenu = _data;

        } else if (action == "all") {
            storage.removeItem("curMenu");
            storage.removeItem("menu");
        } else {
            //取得打开的菜单数组
            var menulist = storage.menu;
            if (!menulist) {
                return;
            }
            menulist = menulist.split("|");

            if (action == "close") {
                for (index in menulist) {
                    if (index == "remove") {
                        continue;
                    }

                    if (typeof menulist[index] === 'string') {
                        var menu = JSON.parse(menulist[index]);
                    }
                    if (menu.layId == data.layId) {
                        menulist.splice(index, 1);
                    }

                }
                storage.menu = menulist.join("|");
                storage.removeItem("curMenu");

            } else {
                for (index in menulist) {
                    if (index == "remove") {
                        continue;
                    }
                    if (typeof menulist[index] === 'string') {
                        var menu = JSON.parse(menulist[index]);
                    }
                    if (menu.layId == data.layId) {
                        var _data = menulist[index];
                    }
                }
                if (action == "change") { //切换
                    storage.curMenu = _data;
                } else if (action == "other") {
                    storage.curMenu = _data;
                    storage.menu = _data;
                }
            }
        }

    }

    tabMenu.prototype.fresh = function(index) {
        element.tabChange(objTab.tabFilter, index);
        var othis = objTab.titleBox.find('>li[lay-id="' + index + '"]'),
            index = othis.parent().children('li').index(othis),
            parents = othis.parents('.layui-tab').eq(0),
            item = parents.children('.layui-tab-content').children('.layui-tab-item'),
            src = item.eq(index).find('iframe').attr("src");
        item.eq(index).find('iframe').attr("src", src);
    }

    tabMenu.prototype.hideRightMenu = function() {
        $(document).on('contextmenu', function(event) {
            $(this).find('.right-click-menu').hide();
        });
        $(document).on('click', function(event) {
            $(this).find('.right-click-menu').hide();
        })
    }

    /**
     *@todo 判断菜单选项卡是否已超出了总宽度，若超出则显示左右移动按钮，否则隐藏按钮
     *@param int index 大于等于0时表示菜单选项卡已经存在，才有移动的需求
     *@param int scene 为1时表示删除tab菜单选项卡，为0时表示切换或是添加菜单选项卡
     */
    tabMenu.prototype.tabMove = function(index, scene) {
        //取得屏幕总宽度

        var navWidth = parseInt(objTab.titleBox.parent('div').width());

        //取得菜单选项卡总宽度
        var $tabNav = objTab.titleBox.find('li'),
            tab_all_width = 0;
        $tabNav.each(function(i, n) {
            tab_all_width += $(n).outerWidth(true);
        });

        if (!$tabNav[0]) { return }
        if (tab_all_width > navWidth + 1) {

            var ml = navWidth - tab_all_width - 54;

            if (ml < 0) {

                if (index >= 0) {
                    var current_tab_left = parseInt(objTab.titleBox.find('.layui-this').position().left),
                        curent_tab_ml = parseInt(objTab.titleBox.css("marginLeft")),
                        curent_ml = current_tab_left + parseInt(curent_tab_ml);

                    if (curent_ml <= 0) {
                        ml = 0 - current_tab_left;
                    } else {
                        var is_show = -(curent_tab_ml - navWidth + parseInt(objTab.titleBox.find('.layui-this').outerWidth(true)) + current_tab_left + 54);
                        if (is_show <= 0) {
                            ml = navWidth - current_tab_left - parseInt(objTab.titleBox.find('.layui-this').outerWidth(true)) - 54;
                        } else {
                            if (scene == 1 && parseInt(curent_tab_ml) < 0) {
                                ml = navWidth - current_tab_left - parseInt(objTab.titleBox.find('.layui-this').outerWidth(true)) - 54;

                                if (ml > 0) {
                                    ml = 0;
                                }
                            } else {
                                return;
                            }
                        }
                    }
                }
                objTab.titleBox.css({ "marginLeft": ml });
            }

            if (ml == 0 && tab_all_width < navWidth + 1) {
                objTab.titleBox.parent('div').find('.tab-move-btn').hide();
            } else {
                objTab.titleBox.parent('div').find('.tab-move-btn').show();
            }
        } else {
            objTab.titleBox.parent('div').find('.tab-move-btn').hide();
            objTab.titleBox.css({ "marginLeft": 0 });
        }
    }


    tabMenu.prototype.drag = function() {
        var _this = this;

        objTab.titleBox.on("mousedown", function(e) {

            //取得屏幕总宽度
            var navWidth = parseInt(objTab.titleBox.parent('div').width());

            //取得菜单选项卡总宽度
            var $tabNav = objTab.titleBox.find('li'),
                tab_all_width = 0;
            $tabNav.each(function(i, n) {
                tab_all_width += $(n).outerWidth(true);
            });
            if (!$tabNav[0]) { return };

            if (tab_all_width > navWidth + 1) {
                var maxml = tab_all_width - navWidth + 54
                var _x = e.pageX - parseInt(objTab.titleBox.css("marginLeft")); //取得鼠标到标签左边left的距离

                objTab.titleBox.on("mousemove", function(e) {
                    x = e.pageX - _x;
                    if (x > 0) {
                        x = 0;
                    } else if (x < -maxml) {
                        x = -maxml;
                    }
                    objTab.titleBox.css({ "marginLeft": x });
                });

                objTab.titleBox.parents('body').on("mouseup", function(e) {
                    objTab.titleBox.off("mousemove");
                })

                return false;
            }

        });
    }



    /**
     *根据值查找所在位置index值，查不到就返回-1
     */
    Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
        }
        return -1;
    };


    /**
     *根椐值删除元素
     */
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };

    exports('tabmenu', function(options) {
        var navtab = new tabMenu();
        return navtab.set(options)
    });
});