// JavaScript Document

layui.use('form', function(){
	var form = layui.form
  	,layer = layui.layer
});

layui.use('upload', function(){
	var $ = layui.jquery
  ,upload = layui.upload;
//设定文件大小限制
  upload.render({
    elem: '#upload_head'
    ,url: '/upload/'
    ,size: 30 //限制文件大小，单位 KB
    ,done: function(res){
      console.log(res)
    }
  });
});