<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>订单列表-WeAdmin Frame型后台管理系统-WeAdmin 1.0</title>
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<link rel="stylesheet" href="../../static/css/font.css">
		<link rel="stylesheet" href="../../static/css/weadmin.css">
		<script src="../../lib/layui/layui.js" charset="utf-8"></script>
		<!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
		<!--[if lt IE 9]>
	      <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
	      <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
	    <![endif]-->
	</head>

	<body>
		<div class="weadmin-nav">
			<span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">订单管理</a>
        <a><cite>订单列表</cite></a>
      </span>
			<a class="layui-btn layui-btn-sm" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
				<i class="layui-icon" style="line-height:30px">ဂ</i></a>
		</div>
		<div class="weadmin-body">
			<div class="layui-row">
				<form class="layui-form layui-col-md12 we-search">
					<div class="layui-inline">
						<input class="layui-input" placeholder="开始日" name="start" id="start">
					</div>
					<div class="layui-inline">
						<input class="layui-input" placeholder="截止日" name="end" id="end">
					</div>
					<div class="layui-input-inline">
						<select name="contrller">
							<option>支付状态</option>
							<option>已支付</option>
							<option>未支付</option>
						</select>
					</div>
					<div class="layui-input-inline">
						<select name="contrller">
							<option>支付方式</option>
							<option>支付宝</option>
							<option>微信</option>
							<option>货到付款</option>
						</select>
					</div>
					<div class="layui-input-inline">
						<select name="contrller">
							<option value="">订单状态</option>
							<option value="0">待确认</option>
							<option value="1">已确认</option>
							<option value="2">已收货</option>
							<option value="3">已取消</option>
							<option value="4">已完成</option>
							<option value="5">已作废</option>
						</select>
					</div>
					<div class="layui-inline">
						<input type="text" name="username" placeholder="请输入订单号" autocomplete="off" class="layui-input">
					</div>
					<button class="layui-btn" lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
				</form>
			</div>
			<div class="weadmin-block">
				<button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
				<button class="layui-btn" onclick="WeAdminShow('添加订单','./add.html')"><i class="layui-icon"></i>添加</button>
				<span class="fr" style="line-height:40px">共有数据：88 条</span>
			</div>
			<table class="layui-table">
				<thead>
					<tr>
						<th>
							<div class="layui-unselect header layui-form-checkbox" lay-skin="primary"><i class="layui-icon">&#xe605;</i></div>
						</th>
						<th>订单编号</th>
						<th>收货人</th>
						<th>总金额</th>
						<th>应付金额</th>
						<th>订单状态</th>
						<th>支付状态</th>
						<th>发货状态</th>
						<th>支付方式</th>
						<th>配送方式</th>
						<th>下单时间</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='2'><i class="layui-icon">&#xe605;</i></div>
						</td>
						<td>2017009171822298053</td>
						<td>老王:18925139194</td>
						<td>7829.10</td>
						<td>7854.10</td>
						<td>待确认</td>
						<td>未支付</td>
						<td>未发货</td>
						<td>其他方式</td>
						<td>申通物流</td>
						<td>2017-08-17 18:22</td>
						<td class="td-manage">
							<a title="查看" onclick="WeAdminShow('编辑','order-view.html')" href="javascript:;">
								<i class="layui-icon">&#xe63c;</i>
							</a>
							<a title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
								<i class="layui-icon">&#xe640;</i>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="page">
				<div>
					<a class="prev" href="">&lt;&lt;</a>
					<a class="num" href="">1</a>
					<span class="current">2</span>
					<a class="num" href="">3</a>
					<a class="num" href="">489</a>
					<a class="next" href="">&gt;&gt;</a>
				</div>
			</div>

		</div>
		<script>
			layui.extend({
				admin: '{/}../../static/js/admin'
			});
			layui.use(['laydate','jquery','admin'], function() {
				var laydate = layui.laydate,
					$ = layui.jquery,
					admin = layui.admin;
				//执行一个laydate实例
				laydate.render({
					elem: '#start' //指定元素
				});
				//执行一个laydate实例
				laydate.render({
					elem: '#end' //指定元素
				});
				
				/*用户-停用*/
				function member_stop(obj, id) {
					layer.confirm('确认要停用吗？', function(index) {
						if($(obj).attr('title') == '启用') {
							//发异步把用户状态进行更改
							$(obj).attr('title', '停用')
							$(obj).find('i').html('&#xe62f;');
	
							$(obj).parents("tr").find(".td-status").find('span').addClass('layui-btn-disabled').html('已停用');
							layer.msg('已停用!', {
								icon: 5,
								time: 1000
							});
	
						} else {
							$(obj).attr('title', '启用')
							$(obj).find('i').html('&#xe601;');
	
							$(obj).parents("tr").find(".td-status").find('span').removeClass('layui-btn-disabled').html('已启用');
							layer.msg('已启用!', {
								icon: 5,
								time: 1000
							});
						}
					});
				}
	
				/*用户-删除*/
				function member_del(obj, id) {
					layer.confirm('确认要删除吗？', function(index) {
						//发异步删除数据
						$(obj).parents("tr").remove();
						layer.msg('已删除!', {
							icon: 1,
							time: 1000
						});
					});
				}
	
				function delAll(argument) {
					var data = tableCheck.getData();
					layer.confirm('确认要删除吗？' + data, function(index) {
						//捉到所有被选中的，发异步进行删除
						layer.msg('删除成功', {
							icon: 1
						});
						$(".layui-form-checked").not('.header').parents('tr').remove();
					});
				}
			});
			
		</script>
	</body>

</html>