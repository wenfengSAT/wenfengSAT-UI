var UITree = function () {

    return {
        //main function to initiate the module
        init: function () {

            var DataSourceTree = function (options) {
                this._data = options.data;
                this._delay = options.delay;
            };

            DataSourceTree.prototype = {

                data: function (options, callback) {
                    var self = this;

                    setTimeout(function () {
                        var data = $.extend(true, [], self._data);

                        callback({ data: data });

                    }, this._delay)
                }
            };

            // INITIALIZING TREE
            var treeDataSource = new DataSourceTree({
                data: [
                    { name: 'Sales', type: 'folder', 'icon-class':'blue', additionalParameters: { id: 'F1' } },
                    { name: 'Projects', type: 'folder', 'icon-class': 'success', additionalParameters: { id: 'F2' } },
                    { name: 'Reports', type: 'item', additionalParameters: { id: 'I1' } },
                    { name: 'Finance', type: 'item', additionalParameters: { id: 'I2' } }
                ],
                delay: 400
            });

            var treeDataSource2 = new DataSourceTree({
                data: [
                    { name: 'System Logs <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Notifications <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-bell gold"></i> Alerts', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-bar-chart-o darkorange"></i> Tasks', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource3 = new DataSourceTree({
                data: [
                    { name: 'Resources <div class="tree-actions"></div>', type: 'folder','icon-class':'palegreen', additionalParameters: { id: 'F11' } },
                    { name: 'Projects <div class="tree-actions"></div>', type: 'folder', 'icon-class': 'blueberry', additionalParameters: { id: 'F12' } },
                    { name: 'Nike Promo 2013', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: 'IPO Reports', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource4 = new DataSourceTree({
                data: [
                    { name: 'Projects<div class="tree-actions"><i class="fa fa-plus green"></i><i class="fa fa-trash-o danger"></i><i class="fa fa-rotate-right blizzard"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Reports<div class="tree-actions"><i class="fa fa-plus green"></i><i class="fa fa-trash-o danger"></i><i class="fa fa-rotate-right blizzard"></i></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-user yellow"></i> Member <div class="tree-actions"><i class="fa fa-plus green"></i><i class="fa fa-trash-o danger"></i><i class="fa fa-rotate-right blizzard"></i></div>', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-calendar sky"></i> Events <div class="tree-actions"><i class="fa fa-plus green"></i><i class="fa fa-trash-o danger"></i><i class="fa fa-rotate-right blizzard"></i></div>', type: 'item', additionalParameters: { id: 'I12' } },
                    { name: '<i class="fa fa-suitcase magenta"></i> Portfolio <div class="tree-actions"><i class="fa fa-plus green"></i><i class="fa fa-trash-o danger"></i><i class="fa fa-rotate-right blizzard"></i></div>', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource5 = new DataSourceTree({
                data: [
                    { name: 'Projects<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-rotate-right"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Reports<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-rotate-right"></i></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-user"></i> Member <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-rotate-right"></i></div><div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-rotate-right"></i></div>', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-calendar"></i> Events <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-rotate-right"></i></div>', type: 'item', additionalParameters: { id: 'I12' } },
                    { name: '<i class="fa fa-suitcase"></i> Portfolio <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-rotate-right"></i></div>', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource6 = new DataSourceTree({
                data: [
                    { name: 'Projects<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Reports<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-user"></i> Member <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div><div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-calendar"></i> Events <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } },
                    { name: '<i class="fa fa-suitcase"></i> Portfolio <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            $('#MyTree').tree({
                dataSource: treeDataSource,
                multiSelect: true,
                loadingHTML: '<div class="tree-loading"><i class="fa fa-rotate-right fa-spin"></i></div>'
            });


            $('#MyTree2').tree({
                dataSource: treeDataSource2,
                multiSelect: true,
                loadingHTML: '<div class="tree-loading"><i class="fa fa-rotate-right fa-spin"></i></div>'
            });

            $('#MyTree3').tree({
                dataSource: treeDataSource3,
                multiSelect: true,
                loadingHTML: '<div class="tree-loading"><i class="fa fa-rotate-right fa-spin"></i></div>'
            });

            $('#MyTree4').tree({
                selectable: false,
                dataSource: treeDataSource4,
                loadingHTML: '<div class="tree-loading"><i class="fa fa-rotate-right fa-spin"></i></div>'
            });

            $('#MyTree5').tree({
                selectable: false,
                dataSource: treeDataSource5,
                loadingHTML: '<div class="tree-loading"><i class="fa fa-rotate-right fa-spin"></i></div>'
            });

            $('#MyTree6').tree({
                selectable: false,
                dataSource: treeDataSource6,
                loadingHTML: '<div class="tree-loading"><i class="fa fa-rotate-right fa-spin"></i></div>'
            });
        }

    };

}();