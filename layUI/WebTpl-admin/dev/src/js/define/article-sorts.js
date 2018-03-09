layui.use(['tree', 'jquery', 'datatable'], function() {
  var $ = layui.jquery;
  $(function() {
    $('.table-sort').dataTable({
      "searching": false, //是否允许Datatables开启本地搜索
      "paging": false, //是否开启本地分页
      "lengthChange": false, //是否允许产品改变表格每页显示的记录数
      "info": false, //控制是否显示表格左下角的信息
      //跟数组下标一样，第一列从0开始，这里表格初始化时，第四列默认降序
      //"order": [1, 'desc'], //asc升序   desc降序 
      "aoColumnDefs": [{
          "sProcessing": "正在加载中......",
          "sEmptyTable": "无数据",
          "orderable": false,
          //"aTargets": [0, 4]
        } // 指定列不参与排序
      ]
    });
  });
  var sortNodes = [{ //节点
    name: '媒体报道',
    id: 1,
    touch: false,
    children: [{
      name: '文章名1',
      id: 11,
      touch: true,
    }, {
      name: '文章名2',
      id: 12,
      touch: true,
    }]
  }, {
    name: '推荐阅读',
    id: 2,
    touch: false,
    children: [{
      name: '子节点21',
      id: 21,
      touch: true,
    }, {
      name: '子节点22',
      id: 22,
      touch: true,
    }]
  }];
  layui.tree({
    elem: '#sorts',
    nodes: sortNodes,
    click: function(node) {
      console.log(node); //node即为当前点击的节点数据
      if(node.touch == false) {
        layer.prompt({
          title: '修改栏目名称',
          formType: 3,
          shade: false
        }, function(text, index) {
          if(1 == 1) { //成功
            layer.close(index);
            node.name = text;
            console.log("修改后的栏目名称为" + text);
            console.log(node.name);
            console.log(node);
            layerMsg('修改成功', 6);
          } else {
            layer.close(index);
            layerMsg('修改失败', 5);
          }
        });
      } else {
        layer_show(node.name, 'article-edit.html', node.id, '800', '600');
      }
    }
  });
  console.log(sortNodes);
})