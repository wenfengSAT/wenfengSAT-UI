// JavaScript Document

layui.use(['form', 'layedit'], function(){
	var form = layui.form
  	,layer = layui.layer
	,layedit = layui.layedit;
	
    layedit.set({
      uploadImage: {
        url: '#' //接口url
        ,type: 'post' //默认post
      }
    });
	
//建立编辑器
 //var editIndex = layedit.build('content',{
   //   height: 400, //设置编辑器高度
     // tool: ['strong', 'italic', 'underline', 'left', 'center', 'right', '|', 'link', 'image', 'code']
    //}); 
var editIndex = layedit.build('content');	
	
	
//自定义验证规则
  form.verify({
    title: function(value){
      if(value.length < 5){
        return '标题至少得5个字符';
      }
    }
    ,content: function(value){
		var content = layedit.getContent(editIndex);  //获取编辑器的内容
	  if(content.length <= 0){
        return '文章内容不能为空';
      }
    }
	,type: function(value){
      if(value.length <= 0){
        return '请选择文章类型';
      }
    }
	,code: function(value){
      if( value.length <= 0){
        return '验证码不能为空';
      }
    }
  });
	
});