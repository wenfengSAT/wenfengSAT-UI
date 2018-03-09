/*Layui变量初始化**/
var $ = layui.jquery;
var jQuery = layui.jquery;
var l = layui.layer;
var form = layui.form();
var laypage = layui.laypage;
//table全选
form.on('checkbox(allChoose)',function(data){
   var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]');
   child.each(function(index, item){
	   item.checked = data.elem.checked;
   });
  form.render('checkbox');
});
//通用添加或者保存方法
function addOrUpdate(para){
	getHtmlDataByPost(para.url,para.para,function(form){
		layer.open({
			type: 1,
			title: para.title,
			content: form,
			btn: [para.btnOK, '取消'],
			shade: false,
			area: typeof(para.area) == "undefined"?['500px', '400px']:para.area,
			maxmin: true,
			scrollbar:false,
			shade:0.5,//遮罩透明度
			success:function(layero, index){
				
			},
			yes:function(index){//点击保存按钮
				if(typeof(para.submit)!="undefined"){
					$(para.submit).click();
				}else{
					$('button[lay-submit]').click();
				}
				//触发表单的提交事件
				
			}
		});
	},true);
}
//根据data-opt 获取所选择的数据
function getdataIds(data_opt){
	//获取所有选择的列
	var data_ids = "";
	$('[data-opt='+data_opt+']').each(function(){
		if($(this).next("div").hasClass("layui-form-checked")){
			data_ids+=$(this).attr("data-id")+",";
		}
	});
	if(data_ids!=""){
		return removeLastChar(data_ids);
	}else{
		layer.msg("未勾选任何记录!");
		return false;
	}
}
function getJsonDataByPost(url,para,onLoadSuccess,isShowLoding) {
	if(isShowLoding)showLoading();
	var type = "post";
	var async = true;
	var dataType = "Json";
	var timeout = 10000;
	var data=para;
	
	$.ajax({
		type : type,
		url : url,
		async : async,
		dataType : dataType,
		timeout : timeout,
		data : data,
		success : function(data, statu) {
			if(isShowLoding)hideLoading();
			onLoadSuccess(data); 
		},
		error : function(XMLHttpRequest, textStatus, errorThrown){
			if(isShowLoding)hideLoading();
		}
	});
}
function getJsonByajaxForm(formId,url,onLoadSuccess,isShowLoding){
	if(typeof(url) == "undefined"||url=='')url=$('#'+formId).attr("action");
	if(isShowLoding)showLoading();
	$.ajax({
		type : "post",
		async : true,
		dataType : 'json',
		url : url,
		data: $('#'+formId).serialize(),
		timeout:10000,//0是没有时间显示
		success : function(data){
			if(isShowLoding)hideLoading();
			onLoadSuccess(data);
		},
		error:function(response,opts){
			if(isShowLoding)hideLoading();
			l.alert("系统故障，请联系管理员!");
			return false;
		}
	});
}
function getHTMLByajaxForm(formID,url,onLoadSuccess,isShowLoding){
	if(typeof(url) == "undefined"||url=='')url=$('#'+formId).attr("action");
	if(isShowLoding)showLoading();
	$.ajax({
		type : "post",
		async : true,
		dataType : 'html',
		url : url,
		data: $('#'+formId).serialize(),
		timeout:10000,//0是没有时间显示
		success : function(data){
			if(isShowLoding)hideLoading();
			onLoadSuccess(data);
		},
		error:function(response,opts){
			if(isShowLoding)hideLoading();
			l.alert("系统故障，请联系管理员!");
			return false;
		}
	});
}
/**
 * Ajax发送post请求，返回数据类型为html
 * @param url           请求地址
 * @param parameters    post参数
 * @param onLoadSuccess Ajax请求成功后回调函数
 */
function getHtmlDataByPost(url, parameters, onLoadSuccess,isShowLoding){
	if(isShowLoding)showLoading();
	var type = "POST";
	var async = true;
	var dataType = "html";
	var timeout = 10000;
	var data = parameters;
	
	$.ajax({
		type : type,
		url : url,
		async : async,
		dataType : dataType,
		timeout : timeout,
		data : data,
		success : function(data, statu){
			if(isShowLoding)hideLoading();
			onLoadSuccess(data);
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			hideLoading();
		}
	});
}
//unicode解码
function reconvert(str){ 
	str = str.replace(/(\\u)(\w{4})/gi,function($0){ 
	return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{4})/g,"$2")),16))); 
	});
	
	str = str.replace(/(&#x)(\w{4});/gi,function($0){ 
	return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{4})(%3B)/g,"$2"),16)); 
	});
	return str;
}

function openAwidow(url){
	var iWidth = 1200 ;
	var iHeight = 700 ;
	var iTop = ( window . screen . availHeight - 30 - iHeight ) / 2 ;
	var iLeft = ( window . screen . availWidth - 10 - iWidth ) / 2 ;
	window.open (url, "newwindow", "height="+iHeight+", width="+iWidth+", top="+iTop+",left="+iLeft+",toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=no");
}
/**
 * 自动填充表单
 * @param obj:json数据
 */
function fillForm(obj){
	  var key,value,tagName,type,arr;
	  for(x in obj){
	    key = x;
	    value = obj[x];
	    $("[name='"+key+"'],[name='"+key+"[]']").each(function(){
	      tagName = $(this)[0].tagName;
	      type = $(this).attr('type');
	      if(tagName=='INPUT'){
	        if(type=='radio'){
	          $(this).attr('checked',$(this).val()==value);
	        }else if(type=='checkbox'){
	          arr = value.split(',');
	          for(var i =0;i<arr.length;i++){
	            if($(this).val()==arr[i]){
	              $(this).attr('checked',true);
	              break;
	            }
	          }
	        }else{
	          $(this).val(value);
	        }
	      }else if(tagName=='SELECT' || tagName=='TEXTAREA'){
	        $(this).val(value);
	      }else if(tagName=='DIV'){
	        $(this).html(value);
	      }
	      
	    });
	  }
}
function getsuffix(file_name){
	var result = file_name.substr(file_name.lastIndexOf("."));
	return result;
}
function removeLastChar(str){
	return str.substring(0,str.length-1);
}
/**
 * 显示等待框
 * @param title
 * @returns
 */
function showLoading(title){
	layer.load();
}
/**
 * 关闭等待框
 * @param title
 * @returns
 */
function hideLoading(){
	//layer.close(layer.index);
	layer.closeAll('loading'); //关闭加载层
	
	
}

function getQueryString(name,url) {
	var str= new Array(); 
	str = url.split('?');
	if(str != null){
		  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		    var r = str[1].match(reg);
		    if (r != null) {
		    	return unescape(r[2]); 
		    }
	}
    return "";
 }

//百分比转小数
function per2num(per) {
    return per.replace(/([0-9.]+)%/, function (a, b) {return +b / 100;})
}
function copy(text2copy){
		var flashcopier = 'flashcopier'; 
		if(!document.getElementById(flashcopier)){   
			var divholder = document.createElement('div');  
			divholder.id = flashcopier;  
			document.body.appendChild(divholder); 
			} 
		document.getElementById(flashcopier).innerHTML = ''; 
		var divinfo = '<embed src="http://files.jb51.net/demoimg/200910/_clipboard.swf" FlashVars="clipboard='+text2copy+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';//这里是关键   document.getElementById(flashcopier).innerHTML = divinfo; } 
}