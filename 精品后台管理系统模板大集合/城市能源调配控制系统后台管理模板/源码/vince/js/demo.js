$(document).ready(function(){




// 页面table选中状态的控制

$(".checkable tr").click(function(){
if(!$(this).find('td').eq(0).find("span").hasClass('trchecktrue')){
$(this).find('td').eq(0).find("span").addClass('trchecktrue');
$(this).addClass("checktr")}
else if($(this).find('td').eq(0).find("span").hasClass('trchecktrue')){
$(this).removeClass("checktr")
$(this).find('td').eq(0).find("span").removeClass('trchecktrue');}})







$(".tj_table thead tr td .checkspan").click(function(){
if($(this).hasClass("trchecktrue")){
$(this).removeClass("trchecktrue");
$(".tj_table tbody").find("tr").removeClass("checktr");
$(".tj_table tbody").find(".checkspan").removeClass("trchecktrue");
} else{
$(this).addClass("trchecktrue");
$(".tj_table tbody").find("tr").addClass("checktr");
$(".tj_table tbody").find(".checkspan").addClass("trchecktrue");}})




var emge = $(".tree_menu").find("em").size();
kuanpan =( $(".tree_menu").width()-95)/16;


for (var i = 0; i<emge;i++) {

if($(".tree_menu").find("em").eq(i).html().length>kuanpan)
{
$(".tree_menu").find("em").eq(i).addClass("jiabei")
} 
  
 
};




$(".checkable tr").find(".budian").find("span").bind("click",function(event){
$(this).html('ss');
event.stopPropagation();  
return false;});


// 页面table选中状态的控制









// 首页登录验证账号密码不能为空
$(".login_botton input").click(function(event){
if(!$(".login_user").find("input").val() ==''){
if(!$(".login_pass").find("input").val() ==''){
event.preventDefault(); 
top.location.href="index.html";
}else{alert("密码不能为空")}
}else{alert("用户名不能为空")}})
// 首页登录验证账号密码不能为空


// 设置侧导航栏的侧导航样式兼容
$(".sidebar-toggle").click(function(){
if($("body").hasClass("sidebar-collapse")){
$(".sidebar-menu").css({"overflow":'hidden',"width":230})
$(".sidebar-menu").find(".active").removeClass("nei_active");
adjustjia()
}else{
$(".sidebar-menu").css({"overflow":'visible'})
$(".sidebar-menu").find(".active").addClass("nei_active")
adjustjian()}})
// 设置侧导航栏的侧导航样式兼容


// 浮层开关
$(".lindianjia").click(function(){
$(".fuceng").css({"display":"block"})
furesize()})
$(".fuclose").click(function(){
$(".fuceng").css({"display":"none"})})
// 浮层开关


// 响应方案管理浮层管理控制
function furesize(){
 $(".fuceng").css({"height":pingHeight})
fucenggao = (pingHeight-$(".fuqu").height())/2;
$(".fuqu").css({"top":fucenggao,"left":(pingWidth-640)/2}) }
// 响应方案管理浮层管理控制


// 浮层在窗口变化时候的样式变化
function sy_fucengresize(fufu){
fuquwei = fufu[0];
if (fuquwei.offsetLeft > getInner().width - fuquwei.offsetWidth) {
fuquwei.style.left = getInner().width - fuquwei.offsetWidth + 'px';}
if (fuquwei.offsetTop > getInner().height - fuquwei.offsetHeight) {
fuquwei.style.top = getInner().height - fuquwei.offsetHeight + 'px';}
}
// 浮层在窗口变化时候的样式变化


// 首页单选框点击效果
$(".shoudanxuan").click(function(){
  if(!$(this).hasClass("shoudanxuanwei")){$(this).addClass("shoudanxuanwei")  
  }else{$(this).removeClass("shoudanxuanwei")  }});
// 首页单选框点击效果


// 运行监测点击效果
$(".yxjc_info li").click(function(){
if ($(this).index() < 4) {
if(!$(this).hasClass("xuanli")){
  $(this).addClass("xuanli").siblings().removeClass("xuanli")}
if($(this).hasClass("kong")){
 $(".yxjc").find("img").attr("src","vince/images/yxjc.png")}
if($(this).hasClass("qi")){
 $(".yxjc").find("img").attr("src","vince/images/yxjc2.png")}};});
// 运行监测点击效果


// 实时监测底部的几个开关
var suikuan = 100/$(".ssjc_left_bottom").find('.ssjc_lbshare').length+"%";
$(".ssjc_left_bottom").find('.ssjc_lbshare').css({"width":suikuan})
// 实时监测底部的几个开关的宽度


// 设备入库表格内选择框的设置
$(".biao_select").parent().css({"padding":0})
// 设备入库表格内选择框的设置


resizefun();
sy_tabel();
window.addEventListener('resize',function(){
resizefun();
sy_tabel();
sy_fucengresize($(".fuqu"))
})


// 首页表格自适应
function sy_tabel(){
var sytgao = 120;
if($(".sy_info_four p").height()>sytgao){
sytgao = $(".sy_info_four p").height()+10;}
if($(".sy_info_left").height()>sytgao){
sytgao = $(".sy_info_left").height();}
$(".sy_info_one").css({"height":sytgao})
$(".sy_info_two").css({"height":sytgao})
$(".sy_info_three").css({"height":sytgao})
$(".sy_info_four").css({"height":sytgao})}
// 首页表格自适应


function resizefun(){
pingHeight=document.documentElement.clientHeight;
pingWidth=document.documentElement.clientWidth;
add_lin();
$(".qqq").css({"height":pingHeight-166})
$(".requtu").css({"maxHeight":pingHeight-298})
$(".content-wrapper").css({"height":pingHeight-90})
$(".sidebar-menu").css({"height":pingHeight-106})
$(".login").css({"left":(pingWidth-537)/2})
$(".login").css({"top":(pingHeight-458)/2})

var linyi = $(".xg_right").height();
var liner = $(".ssjc_right").height();
if (linyi<pingHeight-166){linyi = pingHeight-166}
if (liner<pingHeight-166){liner = pingHeight-166}
if(pingWidth>990){
$(".ssjc_left").css({"minHeight":liner})
}else{$(".ssjc_left").css({"minHeight":'auto'})}
if(pingWidth>1200){
$(".xj_left").css({"height":linyi})
}else{$(".xj_left").css({"height":'auto'})}
$(".sidebar-menu").css({"overflow":'hidden'})
$(".yxjc_info_right").css({"width":($(".yxjc").width()-145)})
}






// 为适应屏幕高度过高加入的兼容代码
add_lin();
function add_lin(){
if(pingHeight<750){ 
$(".gao").addClass("xian")
$(".lin_kongxian").css({"display":"none"})
$(".xtjc .row").css({"paddingTop":0})
$(".yxjc img").css({"paddingTop":0})}
if(pingHeight>750){ 
$(".gao").removeClass("xian")
$(".lin_kongxian").css({"display":"block"})
$(".xtjc .row").css({"paddingTop":"7%"})
$(".yxjc img").css({"paddingTop":"7%"})}}
// 为适应屏幕高度过高加入的兼容代码


// 表格样式控制
function table_change(){
var biaospansize = $(".table_head").find("span").length;
var biaospanwidth =($(".table_head").width()-biaospansize+1)/biaospansize;
var headliheight=30;
for(n=0;n<biaospansize;n++){
if($(".table_head").find("span").eq(n).find("i").height()>headliheight){
headliheight =$(".table_head").find("span").eq(n).find("i").height();
for(m=0;m<biaospansize;m++){
$(".table_head").find("span").eq(m).css({"height":headliheight})}}}
if(headliheight<40){
for(m=0;m<biaospansize;m++){
$(".table_head").find("span").eq(m).css({"height":headliheight})}}
$(".table_head").find("span").css({"width":biaospanwidth})
$(".table_head").find("span").eq(biaospansize-1).css({"borderRight":"none"})
$(".table_body").find("span").css({"width":biaospanwidth})
var biaolisize = $(".table_body").find("li").length;
for(i=0;i<biaolisize;i++){
$(".table_body").find("li").eq(i).find("span").eq(biaospansize-1).css({"borderRight":"none"});
var everyheight = 30;
for(j=0;j<$(".table_body").find("li").eq(i).find("span").length;j++){
if(everyheight < $(".table_body").find("li").eq(i).find("span").eq(j).find('i').height()){
everyheight = $(".table_body").find("li").eq(i).find("span").eq(j).find('i').height();
for(t=0;t<$(".table_body").find("li").eq(i).find("span").length;t++){
$(".table_body").find("li").eq(i).find("span").eq(t).css({"height":everyheight})}}}
if(everyheight < 40){
for(k=0;k<$(".table_body").find("li").eq(i).find("span").length;k++){
$(".table_body").find("li").eq(i).find("span").eq(k).css({"height":everyheight}) }}}}
// 表格样式控制











// 内部滚动条样式
$(".qqq").niceScroll({
        touchbehavior:false,
        cursorcolor:"#000",  //内侧滚动条的颜色
        cursoropacitymax:0.7,   //滚动条的透明度
        cursorwidth:5,   //滚动条的宽度
        horizrailenabled:false,
        cursorborderradius:1,    //滚动轴的圆角
        autohidemode:true,    //自动隐藏滚动条
        background:'#333',  //滚动条的背景色
        cursorborder:'solid 1px #fff'   //滚动条的边框样式
    })
$(".sidebar-menu").niceScroll({
        touchbehavior:false,
        cursorcolor:"#000",  //内侧滚动条的颜色
        cursoropacitymax:0.7,   //滚动条的透明度
        cursorwidth:5,   //滚动条的宽度
        horizrailenabled:false,
        cursorborderradius:1,    //滚动轴的圆角
        autohidemode:true,    //自动隐藏滚动条
        background:'#333',  //滚动条的背景色
        cursorborder:'solid 1px #fff'   //滚动条的边框样式
    })  
$(".sy_info_three").niceScroll({
        touchbehavior:false,
        cursorcolor:"#000",  //内侧滚动条的颜色
        cursoropacitymax:0.7,   //滚动条的透明度
        cursorwidth:5,   //滚动条的宽度
        horizrailenabled:false,
        cursorborderradius:1,    //滚动轴的圆角
        autohidemode:true,    //自动隐藏滚动条
        background:'#333',  //滚动条的背景色
        cursorborder:'solid 1px #fff'   //滚动条的边框样式
    })   

 $(".tree").niceScroll({
touchbehavior:false,
cursorcolor:"#fff",
cursoropacitymax:1,
cursorwidth:5,
horizrailenabled:true,
cursorborderradius:0,
autohidemode:true,
background:'none',
cursorborder:'solid 0px #333'});





// 内部滚动条样式


// 树形导航
$(function(){
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', ' ');
    $('.tree li.parent_li > span > em').on('click', function (e) {
        var children = $(this).parent('span').parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).parent('span').attr('title', ' ').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).parent('span').attr('title', ' ').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();
    });
    $('.tree li.parent_li > span > i').on('click', function (e) {
        var children = $(this).parent('span').parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).parent('span').attr('title', ' ').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).parent('span').attr('title', ' ').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();});});
$(".ssjc_title_right").find("span").click(function(){
$(this).addClass("check").siblings().removeClass("check");
var treeji = $(this).index();
$(".tree_menu").find(".tree").eq(treeji).css({"display":"block"}).siblings().css({"display":"none"});})
// 树形导航


// 首页热区自适应--Start
  var hotoneold = document.getElementById("hotone")
  var hottwoold = document.getElementById("hottwo")

if(hotoneold){
  var oldCoordsone = hotoneold.coords; 
  var oldCoordstwo = hottwoold.coords; 
  var shujuone = oldCoordsone;
  var shujutwo = oldCoordstwo; 
  adjust();  }
window.addEventListener('resize',function(){ adjust(); }) 
function adjust() {   
  pageHeith=$(".rezone").height();
  pageWidth=$(".rezone").width();
  var eachone = shujuone.split(",");  
  var eachtwo = shujutwo.split(",");    
  var bili = pageWidth / 1137;
  for (var i = 0; i < eachone.length; i++) {  
  eachone[i] = parseInt(eachone[i]*bili*1).toString();
  i++;  
  eachone[i] = parseInt(eachone[i]*bili*1).toString();}  
  var newPositionone = "";  
  for (var i = 0; i < eachone.length; i++) {  
  newPositionone += eachone[i];  
  if (i < eachone.length - 1) {  
  newPositionone += ",";  
  }  }  
  hotoneold.setAttribute("coords", newPositionone); 
  for (var i = 0; i < eachtwo.length; i++) {  
  eachtwo[i] = parseInt(eachtwo[i]*bili*1).toString();
  i++;  
  eachtwo[i] = parseInt(eachtwo[i]*bili*1).toString();}  
  var newPositiontwo = "";  
  for (var i = 0; i < eachtwo.length; i++) {  
  newPositiontwo += eachtwo[i];  
  if (i < eachtwo.length - 1) {  
  newPositiontwo += ",";  
  }  }  
  hottwoold.setAttribute("coords", newPositiontwo);
// 首页热区信息自适应
$(".requone").css({"top":pageWidth*0.05,"left":pageWidth*0.67})
$(".requtwo").css({"top":pageWidth*0.13,"left":pageWidth*0.25})
$("#hotone").hover(
function(){$(".requone").css({"display":"block"});
$(".requone").hover(function(){
$(".requone").css({"display":"block"})
},function(){
$(".requone").css({"display":"none"})})},
function(){$(".requone").css({"display":"none"})})
$("#hottwo").hover(
function(){$(".requtwo").css({"display":"block"});
$(".requtwo").hover(function(){
$(".requtwo").css({"display":"block"})
},function(){
$(".requtwo").css({"display":"none"})})},
function(){$(".requtwo").css({"display":"none"})})}  
$("#hotone").click(function(){top.location.href="ssjc.html";})
$("#hottwo").click(function(){top.location.href="ssjc.html";})

function adjustjian() {   
  pageHeith=$(".rezone").height();
  pageWidth=$(".rezone").width()+180;
  var each = shuju.split(",");    
  var bili = pageWidth / 1137;
  for (var i = 0; i < each.length; i++) {  
  each[i] = parseInt(each[i]*bili*1).toString();
  i++;  
  each[i] = parseInt(each[i]*bili*1).toString();}  
  var newPosition = "";  
  for (var i = 0; i < each.length; i++) {  
  newPosition += each[i];  
  if (i < each.length - 1) {  
  newPosition += ",";  
  }  }  
  qqq.setAttribute("coords", newPosition); }  

function adjustjia() {   
  pageHeith=$(".rezone").height();
  pageWidth=$(".rezone").width()-180;
  var each = shuju.split(",");    
  var bili = pageWidth / 1137;
  for (var i = 0; i < each.length; i++) {  
  each[i] = parseInt(each[i]*bili*1).toString();
  i++;  
  each[i] = parseInt(each[i]*bili*1).toString();}  
  var newPosition = "";  
  for (var i = 0; i < each.length; i++) {  
  newPosition += each[i];  
  if (i < each.length - 1) {  
  newPosition += ",";  
  }  }  
  qqq.setAttribute("coords", newPosition); }  
// 首页热区自适应--End








// 拖拽功能Start
tuozhuai($(".fuqutitle"),$(".fuqu"));
tuozhuai($(".fuqulogo"),$(".fuqu"));


function tuozhuai(dianzhuai , kuangti){
	if(dianzhuai[0]){
dianzhuai[0].onmousedown = function (e) {
preDef(e);
var e = getEvent(e);
var _this = kuangti[0];
var diffX = e.clientX - _this.offsetLeft;
var diffY = e.clientY - _this.offsetTop;
if (typeof _this.setCapture != 'undefined') {
_this.setCapture();} 
document.onmousemove = function (e) {
var e = getEvent(e);
var left = e.clientX - diffX;
var top = e.clientY - diffY;
if (left < 0) {
left = 0;
} else if (left > getInner().width - _this.offsetWidth) {
left = getInner().width - _this.offsetWidth;}
if (top < 0) {
top = 0;
} else if (top > getInner().height - _this.offsetHeight) {
top = getInner().height - _this.offsetHeight;}
_this.style.left = left + 'px';
_this.style.top = top + 'px';} 
document.onmouseup = function () {
this.onmousemove = null;
this.onmouseup = null;
if (typeof _this.releaseCapture != 'undefined') {
_this.releaseCapture();}}}}}
//阻止默认行为
function preDef(event) {
var e = getEvent(event);
if (typeof e.preventDefault != 'undefined') {//W3C
e.preventDefault();
} else {//IE
e.returnValue = false;}}
//获取Event对象
function getEvent(event) {
return event || window.event;}
//跨浏览器获取视口大小
function getInner() {
if (typeof window.innerWidth != 'undefined') {
return {
width : window.innerWidth,
height : window.innerHeight}
} else {
return {
width : document.documentElement.clientWidth,
height : document.documentElement.clientHeight}}}
// 拖拽功能End
})



//获取选中的checkbox的value值
function quvalue(){
var treeinfo = [];
  for(i=0;i<$(".tree_menu input:checkbox:checked").size();i++){
      var jige = $(".tree_menu input:checkbox:checked").eq(i).val();
       treeinfo.push(jige);}
  alert(treeinfo);
return treeinfo;

}
//获取选中的checkbox的value值



// 返回选中行
function chauxanji(){
var jige = $(".checkable").find("tr").size();
var fanhuixuanzhong = [];
for(var i=0;i<jige;i++){
if($(".checkable").find("tr").eq(i).find("span").hasClass('trchecktrue')){
fanhuixuanzhong.push($(".checkable").find("tr").eq(i).find("span").html())}}
alert(fanhuixuanzhong)
return fanhuixuanzhong;
}// 返回选中行