layui.use('layer',function(){
  var $ = layui.jquery,
  layer = layui.layer;
  //测试案例，不用管
  var arr = ["511324199207084956","510182199010227673","410223199211003312","213213231232132121","22122118981021222X","311324199906286652","362322198906185588"];
  $.each(arr, function(index,val) {
  	console.log(arr[index].isIDCard());
  });
})
