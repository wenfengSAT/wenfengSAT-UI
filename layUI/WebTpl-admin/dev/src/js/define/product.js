layui.use(['layer', 'datatable', 'datatableButton', 'datatableFlash', 'datatableHtml5', 'datatablePrint', 'datatableColVis', 'datatableSelect'], function() {
  var $ = layui.jquery,
    layer = layui.layer;
  // oSort是排序类型数组, 'chinese-asc'是自己定义的类型的排序(*-asc || *-desc)名称
  // 插件应该会根据表格中的内容的类型(string, number, chinese)进行比较排序，
  // 如果以chinese类型来排序则用oSort['chinese-asc']和oSort['chinese-desc']的方法
  // oSort对应的function里面自定义比较方法
  $.fn.dataTableExt.oSort['chinese-asc'] = function(x, y) {
    //javascript自带的中文比较函数，具体用法可自行查阅了解
    return x.localeCompare(y);
  };

  $.fn.dataTableExt.oSort['chinese-desc'] = function(x, y) {
    return y.localeCompare(x);
  };
  // aTypes是插件存放表格内容类型的数组
  // reg赋值的正则表达式，用来判断是否是中文字符
  // 返回值push到aTypes数组，排序时扫描该数组，'chinese'则调用上面两个方法。返回null默认是'string'
  $.fn.dataTableExt.aTypes.push(
    function(sData) {
      var reg = /^[\u4e00-\u9fa5]{0,}$/;
      if(reg.test(sData)) {
        return 'chinese';
      }
      return null;
    }
  );
  $(function() {
    var myTable = $('#productTable').DataTable({
      "processing": true, //DataTables载入数据时，是否显示‘进度’提示  
      "stateSave": true, //是否打开客户端状态记录功能,此功能在ajax刷新纪录的时候不会将个性化设定回复为初始化状态  
      "scrollCollapse": true, //是否开启DataTables的高度自适应，当数据条数不够分页数据条数的时候，插件高度是否随数据条数而改变  
      "paginationType": "full_numbers", //详细分页组，可以支持直接跳转到某页  
      "language": lang, //提示信息
      "autoWidth": false, //自适应宽度，
      "lengthMenu": [10, 20, 30],
      "stripeClasses": ["odd", "even"], //为奇偶行加上样式，兼容不支持CSS伪类的场合
      "searching": true, //是否允许Datatables开启本地搜索
      "paging": true, //是否开启本地分页
      "lengthChange": true, //是否允许产品改变表格每页显示的记录数
      "info": true, //控制是否显示表格左下角的信息
      //跟数组下标一样，第一列从0开始，这里表格初始化时，第四列默认降序
      "order": [1, 'desc'], //asc升序   desc降序 
      "aoColumnDefs": [{
        "orderable": false,
        "aTargets": [0, 4, 8] // 指定列不参与排序
      }],
      select: {
        style: 'multi'
      },
      "deferRender": true, //延迟渲染
      "ajax": "../../../json/product.json", //数据的路径
      "columns": [{ //定义列
        "data": function(obj) {
          return '<input type="checkbox" name="sublist" class="fly-checkbox" data-id=' + obj.id + '>';
        },
        "sTitle": "<input type='checkbox' class='btn-checkall fly-checkbox'>", //标题
        "sDefaultContent": "", //此列默认值为""，以防数据中没有此值，DataTables加载数据的时候报错 
      }, {
        "data": "id",
        "sTitle": "ID", //标题
        "sDefaultContent": "", //此列默认值为""，以防数据中没有此值，DataTables加载数据的时候报错 
      }, {
        "data": "sorts",
        "sTitle": "分类栏目", //标题
        "sType": 'chinese',
        "sDefaultContent": "", //此列默认值为""，以防数据中没有此值，DataTables加载数据的时候报错 
      }, {
        "data": function(obj) {
          return '<u class="btn-showarticle">' + obj.title + '</u>';
        },
        "sTitle": "产品名称", //标题
        "sType": 'chinese',
        "sDefaultContent": "", //此列默认值为""，以防数据中没有此值，DataTables加载数据的时候报错 
      }, {
        "data": function(obj) {
          if(obj.thumbImg == "") {
            return '<img src="../../src/imgs/common/no-pic.png" layer-src="../../src/imgs/common/no-pic.png" class="pdut-thumbnail" alt="默认缩略图">';
          } else {
            return '<img src="' + obj.thumbImg + '" layer-src="' + obj.thumbImg + '" class="pdut-thumbnail" alt="缩略图">';
          }
        }
      }, {
        "data": "describe", //产品描述
        "sType": 'chinese',
        "className": "oneline"
      }, {
        "data": function(obj) {
          return obj.unitPrice + "元";
        }
      }, {
        "data": function(obj) {
          if(obj.status) {
            return '<span class="label label-success radius">正常销售</span>';
          } else {
            return '<span class="label label-default radius">暂停销售</span>';
          }
        },
        "className": "td-status"
      }, {
        "data": function(obj) {
          if(obj.status) {
            return '<span title="暂停销售" class="handle-btn handle-btn-stop"><i class="linyer icon-zanting"></i></span><span title="编辑" class="handle-btn handle-btn-edit"><i class="linyer icon-edit"></i></span><span title="删除" class="handle-btn handle-btn-delect"><i class="linyer icon-delect"></i></span>';
          } else {
            return '<span title="正常销售" class="handle-btn handle-btn-run"><i class="linyer icon-qiyong"></i></span><span title="编辑" class="handle-btn handle-btn-edit"><i class="linyer icon-edit"></i></span><span title="删除" class="handle-btn handle-btn-delect"><i class="linyer icon-delect"></i></span>';
          }
        },
        "className": "td-handle"
      }]
    });
    /**
     * flash
     */
    $.fn.dataTable.Buttons.swfPath = "../../src/js/lib/dataTables/extensions/Buttons/swf/flashExport.swf";
    $.fn.dataTable.Buttons.defaults.dom.container.className = 'tableTools-box';
    /**操作栏
     * 
     */
    new $.fn.dataTable.Buttons(myTable, {
      buttons: [{
        "extend": "colvis",
        "text": "<i class='linyer icon-search'></i> <span class='hidden'>显示/隐藏列</span>",
        "className": "layui-btn table-tool",
        columns: ':not(:first):not(:last)'
      }, {
        "extend": "copy",
        "text": "<i class='linyer icon-copy'></i> <span class='hidden'>复制到剪贴板</span>",
        "className": "layui-btn table-tool"
      }, {
        "extend": "csv",
        "text": "<i class='linyer icon-exports'></i> <span class='hidden'>导出csv</span>",
        "className": "layui-btn table-tool"
      }, {
        "extend": "excel",
        "text": "<i class='linyer icon-excel'></i> <span class='hidden'>导出excel</span>",
        "className": "layui-btn table-tool"
      }, {
        "extend": "pdf",
        "text": "<i class='linyer icon-pdf'></i> <span class=''>导出pdf</span>",
        "className": "layui-btn table-tool"
      }, {
        "extend": "print",
        "text": "<i class='linyer icon-print'></i> <span class='hidden'>打印</span>",
        "className": "layui-btn table-tool",
        autoPrint: false,
        message: '此打印是使用DataTable的打印按钮生成的!'
      }]
    });
    console.log(myTable);
    myTable.buttons().container().appendTo($('.tableTools'));
    /**
     * 显示隐藏列
     */
    var defaultColvisAction = myTable.button(0).action();
    myTable.button(0).action(function(e, dt, button, config) {
      defaultColvisAction(e, dt, button, config);
      if($('.dt-button-collection > .dropdown-menu').length == 0) {
        $('.dt-button-collection')
          .wrapInner('<ul class="dropdown-menu" />')
          .find('a').attr('href', 'javascript:;').wrap("<li />")
      }
      $('.dt-button-collection').appendTo('.tableTools-box')
    });
    /**
     * 复制到剪贴板
     */
    var defaultCopyAction = myTable.button(1).action();
    myTable.button(1).action(function(e, dt, button, config) {
      defaultCopyAction(e, dt, button, config);
    });
    /**
     * 选择
     */
    myTable.on('select', function(e, dt, type, index) {
      console.log('1');
      if(type === 'row') {
        $(myTable.row(index).node()).find('input:checkbox').prop('checked', true);
      }
    });
    /**
     * 取消选择
     */
    myTable.on('deselect', function(e, dt, type, index) {
      if(type === 'row') {
        $(myTable.row(index).node()).find('input:checkbox').prop('checked', false);
      }
    });
    /**
     * 根据表头复选框 选择/取消选择所有行
     */
    $(document).on('click', '#productTable > thead > tr > th input[type=checkbox],#productTable > tfoot > tr > th input[type=checkbox]', function() {
      var th_checked = this.checked;
      $('#productTable').find('tbody > tr').each(function() {
        var row = this;
        if(th_checked) myTable.row(row).select();
        else myTable.row(row).deselect();
      });
    });
    /**
     * 选中/取消选中复选框时 选中/取消选中一行
     */
    $(document).on('click', '#productTable tbody td input[type=checkbox]', function() {
      var row = $(this).closest('tr').get(0);
      if(!this.checked) myTable.row(row).deselect();
      else myTable.row(row).select();
    });
    $(document).on('click', '#productTable tbody td', function() {
      var row = $(this).closest('tr').get(0);

      //console.log(row);
    })
  });
  //产品--查看
  $('.btn-showuser').on('click', function() {
    var username = $(this).html();
    var href = 'product-show.html';
    var id = $(this).parents('tr').attr('data-userid');
    console.log(id);
    layer_show(username, href, id, '800', '600');
  });
  /*产品-添加*/
  $('#btn-adduser').on('click', function() {
    var username = $(this).html();
    var href = 'product-add.html';
    layer_show(username, href, '', '800', '600');
  });
  /*产品--停用*/
  $('.table-sort').on('click', '.handle-btn-stop', function() {
    var obj = $(this);
    var id = obj.parents('tr').attr('data-userid');
    layer.confirm('确认要暂停销售吗？', {
      icon: 0,
      title: '警告',
      shade: false
    }, function(index) {
      $(obj).parents("tr").find(".td-handle").prepend('<span class="handle-btn handle-btn-run" title="开始销售"><i class="linyer icon-qiyong"></i></span>');
      $(obj).parents("tr").find(".td-status").html('<span class="label label-default radius">暂停销售</span>');
      $(obj).remove();
      layer.msg('已暂停销售!', {
        icon: 5,
        time: 1000
      });
    });
  });
  /*产品--启用*/
  $('.table-sort').on('click', '.handle-btn-run', function() {
    var obj = $(this);
    var id = obj.parents('tr').attr('data-userid');
    layer.confirm('确认要开始销售吗？', {
      icon: 0,
      title: '警告',
      shade: false
    }, function(index) {
      $(obj).parents("tr").find(".td-handle").prepend('<span class="handle-btn handle-btn-stop" title="暂停销售"><i class="linyer icon-zanting"></i></span>');
      $(obj).parents("tr").find(".td-status").html('<span class="label label-success radius">正常销售</span>');
      $(obj).remove();
      layer.msg('已开始销售!', {
        icon: 6,
        time: 1000
      });
    });
  });
  /*产品-编辑*/
  $('.table-sort').on('click', '.handle-btn-edit', function() {
    var obj = $(this);
    var id = obj.parents('tr').attr('data-userid');
    layer_show('编辑', 'product-edit.html', id, '600', '500');
  });
  /*产品-删除*/
  $('.table-sort').on('click', '.handle-btn-delect', function() {
    var obj = $(this);
    var id = obj.parents('tr').attr('data-userid');
    layer.confirm('确认要删除吗？', {
      icon: 0,
      title: '警告',
      shade: false
    }, function(index) {
      $(obj).parents("tr").remove(); //删除方法
      layer.msg('已删除!', {
        icon: 1,
        time: 1000
      });
    });
  });
});