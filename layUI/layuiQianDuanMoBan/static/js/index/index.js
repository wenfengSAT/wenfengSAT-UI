
//注意：导航 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function(){  
	var element = layui.element;
	element.on('nav(filter)', function(elem){
		console.log(elem.text());
	});
});

//图片轮播
layui.use('carousel', function(){
  var carousel = layui.carousel;
  //建造实例
  carousel.render({
    elem: '#images-carousel'
    ,width: '100%' //设置容器宽度
    ,arrow: 'always' //始终显示箭头
    ,anim: 'fade' //切换动画方式
  });
});

//返回到顶部
layui.use('util', function(){
  var util = layui.util
  ,laydate = layui.laydate
  ,layer = layui.layer;
  //固定块
  util.fixbar({
    bar1: false
    ,bar2: false
    ,css: {right: 50, bottom: 50}
    ,bgcolor: '#393D49'
    ,click: function(type){
      if(type === 'bar1'){
        layer.msg('icon是可以随便换的')
      } else if(type === 'bar2') {
        layer.msg('两个bar都可以设定是否开启')
      }
    }
  });
});

//所有图片懒加载
layui.use('flow', function(){
  var flow = layui.flow;
  //当你执行这样一个方法时，即对页面中的全部带有lay-src的img元素开启了懒加载（当然你也可以指定相关img）
  flow.lazyimg(); 

});

//分页模块
layui.use(['laypage', 'layer'], function() {
    var laypage = layui.laypage
            , layer = layui.layer;
			//只显示上一页、下一页
  laypage.render({
    elem: 'page'
    ,count: 100
	//['count', 'prev', 'page', 'next', 'limit', 'skip']
    ,layout: ['prev', 'page', 'next']
    ,jump: function(obj, first){
      if(!first){
        layer.msg('第 '+ obj.curr +' 页');
      }
    }
  });
});

//搜索
layui.use('form', function(){
	var form = layui.form
  	,layer = layui.layer
});
