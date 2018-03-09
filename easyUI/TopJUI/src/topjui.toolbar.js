$(function(){
	var managerTool = {
		reload : function (options) {
			$(options.datagridId).datagrid('reload');
		},
		redo : function (options) {
			$(options.datagridId).datagrid('unselectAll');
		},
		add : function (options) {
			$(options.addDialogId).dialog('open').form('reset');
		},
		remove : function (options) {
			if(options) {
				var rows = $(options.datagridId).datagrid('getSelections');
				if (rows.length > 0) {
					$.messager.confirm('确定操作', '您确定要删除所选的记录吗？', function (flag) {
						if (flag) {
							var uuids = [];
							for (var i = 0; i < rows.length; i ++) {
								uuids.push("'"+rows[i].uuid+"'");
							}
							//console.log(uuids.join(','));
							$.ajax({
								type : 'POST',
								url : options.url,
								data : {
									uuids : uuids.join(',')
								},
								beforeSend : function () {
									$(options.datagridId).datagrid('loading');
								},
								success : function (data) {
									if (data) {
										$(options.datagridId).datagrid('loaded');
										$(options.datagridId).datagrid('load');
										$(options.datagridId).datagrid('unselectAll');
										$.messager.show({
											title : '温馨提示',
											msg : '成功删除【' + data + '】条记录！'
										});
									}
								}
							});
						}
					});
				} else {
					$.messager.alert('提示操作', '请选择要删除的记录！', 'info');
				}
			}
		},
		edit : function (options) {
			if(options) {
				var rows = $(options.datagridId).datagrid('getSelections');
				if (rows.length > 1) {
					$.messager.alert('提示操作！', '编辑数据只能选择一条记录！', 'warning');
				} else if (rows.length == 1) {
					$.ajax({
						url : options.url,
						type : 'post',
						dataType: 'json',
						data : {
							uuid : rows[0].uuid
						},
						beforeSend : function () {
							$.messager.progress({
								text : '正在获取中...'
							});
						},
						success : function (data, response, status) {
							$.messager.progress('close');
								
							if (data) {
								var params = '{';
								$.each(options.transferData, function (k, v) {
									params += '"' + v + '": "' + data[v.replace("Edit", "")] + '", ';
								});
								params += '"endStr": "1"}';
								
								$(options.editDialogId).dialog('open');
								setTimeout(function() {
									$(options.editDialogId).form('load', $.parseJSON(params));
							    }, 100);
							} else {
								$.messager.alert('获取失败！', '未知错误导致失败，请重试！', 'warning');
							}
						}
					});
				} else if (rows.length == 0) {
					$.messager.alert('提示操作！', '编辑数据请至少选择一条记录！', 'warning');
				}
			}
		}
	}
})