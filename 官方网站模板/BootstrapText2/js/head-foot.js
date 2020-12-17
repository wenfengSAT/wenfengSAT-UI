/*
* @Author: Administrator
* @Date:   2018-07-08 09:23:08
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-22 23:12:24
*/
$('.item_show').click(function(event) {
	$('.hide_item').show();
	$('.hide_item').css({'width':$(window).innerWidth,'height':$(window).height()});
	$('.hide_item').css('overflow', 'auto');
	$('body').css('overflow', 'hidden');
});
$('.close_item').click(function(event) {
	$('.hide_item').children('ul').show();
	$('.fashion').hide();
	$('.hide_item').hide();	
	return false;	
});
$(window).resize(function(event) {
	$('.hide_item').children('ul').show();
	$('.hide_item').hide();
	$('.fashion').hide();
	$('.wrap_black').hide();
	$('.wrap_content').hide();
	$('body').css('overflow','auto');
});
$('.pick_item li').click(function(event) {
	$('.hide_item').children('ul').hide();
	$('.fashion').eq($(this).index()).show().siblings('.fashion').hide();
});
$('.hide_item .pick_other').click(function(event) {
	$('.hide_item').children('ul').hide();
	$('.fashion').eq($(this).index()+5).show().siblings('.fashion').hide();
});
$('.hide_item .pick_other2').click(function(event) {
	$('.hide_item').children('ul').hide();
	$('.fashion').eq($(this).index()+4).show().siblings('.fashion').hide();
});
$('.back').click(function(event) {
	$('.fashion').hide();
	$('.hide_item').children('ul').show();
});
$('.fashion li.show_more').click(function(event) {
	$(this).children('.li_more').slideToggle();
	$(this).siblings('li.show_more').children('.li_more').slideUp();
	$(this).children('a').children('span').toggleClass('li_span');
	if($(this).children('a').children('span').hasClass('li_span')){
		$(this).children('a').children('span').html('-');
	}
	else{
		$(this).children('a').children('span').html('+');
	}
});
var num=0;
var timer=setInterval(function(){
	num++;
	if(num>=12){
		num=0;
		$('.fashion .play_img ul').css({'left':-num*108+'px'});
		num=1;
	}
	$('.fashion .play_img ul').animate({'left':-num*108+'px'});
},2000);
// hover ul li 出现隐藏层
$('.head_mid ul li').hover(function() {
	 $(this).find('.hide_table').show();
}, function(event) {
	 $(this).find('.hide_table').hide();
});
//table的轮播图
var num_img=0;
var timer_2=setInterval(function(){
	num_img++;
	if(num_img>9){
		num_img=0;
		$('.scrol_img ul').css('left', -num_img*165+'px');
		num_img=1;
	}
	$('.scrol_img ul').animate({'left':-num_img*165+'px'});
	if(num_img==9){
		$('.wrap_scrol ol li').eq(0).addClass('ol_cur').siblings('li').removeClass('ol_cur');
	}
	else
		$('.wrap_scrol ol li').eq(num_img).addClass('ol_cur').siblings('li').removeClass('ol_cur');
},1000);
$('.scrol_img ol li').click(function(event) {
	$(this).addClass('ol_cur').siblings('li').removeClass('ol_cur');
	$('.scrol_img ul').css({'left':$(this).index()*165+'px'});
});
//fixed_img onload
$('.content_fixed').css('height','400px');

       
//返回顶部
  $('section .up_top').click(function(event) {
  	$("body,html").animate({scrollTop:'0px'},500);
  });

 $('footer .foot_right input').focus(function(event) {
 	$(this).css('background-color','white');
 	$(this).parent().children('span').css({'background':'#eee','color':'black'});
 });
 $('footer .foot_right input').blur(function(event) {
 	$(this).css('background-color','black');
 	$(this).parent().children('span').css({'background':'black','color':'white'});
 });
$('footer .foot_left .weixin').hover(function() {
	$('.wrap_weixin').show();
}, function() {
	$('.wrap_weixin').hide();
});

$('.foot_up .up_up_top').click(function(event) {
	$("body,html").animate({scrollTop:'0px'},500);
});

$('footer .foot_bottom li').click(function(event) {
	$(this).toggleClass('current').children('.display_ul').slideToggle();
	$(this).siblings('li').children('.display_ul').slideUp();
});

$('.foot_up .show_wrap').click(function(event) {
	$('.wrap_black').eq(0).show();
	$('.wrap_black').eq(0).children('.wrap_content').show();
	console.log($(window).width()+"  "+$(window).height());
	$('.wrap_black').eq(0).css({'width':$(window).width(),'height':$(window).height()});
	$('body').css('overflow','hidden');
});
$('.foot_up .show_wrap_2').click(function(event) {
	$('.wrap_black').eq(1).show();
	$('.wrap_black').eq(1).children('.wrap_content').show();
	console.log($(window).width()+"  "+$(window).height());
	$('.wrap_black').eq(1).css({'width':$(window).width(),'height':$(window).height()});
	$('body').css('overflow','hidden');
});
$('.wrap_black .close_wrap').click(function(event) {
	$('.wrap_black').hide();
	$('.wrap_content').hide();
	$('body').css('overflow','auto');
});
$('.wrap_black .wrap_content span').click(function(event) {
	$('.wrap_black').hide();
	$('.wrap_content').hide();
	$('body').css('overflow','auto');
});

$('.yjf_1 .head_right .hover_login').hover(function() {
	$(this).find('.wrap_show_login').show();
}, function() {
	$(this).find('.wrap_show_login').hide();
});

$('.head_right .shopping_bag').hover(function() {
	$(this).find('.wrap_bag_info').show();
}, function() {
	$(this).find('.wrap_bag_info').hide();
});

$('.head_right .show_wrap_login').click(function(event) {
	$('.yjf_1 .wrap_login').eq(0).show();
	$('.yjf_1 .wrap_login').eq(0).css({'width':$(window).innerWidth,'height':$(window).height()});
	$('.yjf_1 .wrap_login').eq(0).children('.wrap_login_info').show();
	$('body').css('overflow','hidden');
});

$('.wrap_login_info .wrap_login_close').click(function(event) {
	$('.yjf_1 .wrap_login').hide();
	$('.yjf_1 .wrap_login.wrap_register').hide();
	$('.yjf_1 .wrap_login_info').hide();
	$('body').css('overflow','auto');
});

$('.head_right .show_wrap_register').click(function(event) {
	$('.yjf_1 .wrap_login').eq(1).show();
	$('.yjf_1 .wrap_login').eq(1).css({'width':$(window).innerWidth,'height':$(window).height()});
	$('.yjf_1 .wrap_login').eq(1).children('.wrap_login_info').show();
	$('body').css('overflow','hidden');
	$('.yjf_1 .wrap_login.wrap_register').css('overflow','auto');
});
$('.wrap_login_info .login_info_input input').blur(function(event) {
	if($(this).val()==''){
		$(this).css({'background':'#f5dbdc','border':'1px solid #d24e55'});
		if($(this).attr('type')=='text'){
			$('.login_info_input .warn_text').eq(0).show();
		}
		else{
			$('.login_info_input .warn_text').eq(1).show();
		}
	}
	else{
			if($(this).attr('type')=='text'){
				var regemail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				var regMobile=/^1[3,5,8]\d{9}$/;
				var txt=$(this).val();
				var rs=txt.match(regemail);
				var rs2=txt.match(regMobile);
				if(rs==null&&rs2==null){
					$(this).css({'background':'#f5dbdc','border':'1px solid #d24e55'});
					$('.login_info_input .warn_text').eq(0).show().html('请输入正确的手机号码/电子邮箱');
				}
				else{
					$(this).css({'background':'#f5f5f5','border':'none'});
					$('.login_info_input .warn_text').eq(0).hide();
				}
			}
			else{
				var regpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
				var txt=$(this).val();
				var rs3=txt.match(regpass);
				if(rs3==null){
					$(this).css({'background':'#f5dbdc','border':'1px solid #d24e55'});
					$('.login_info_input .warn_text').eq(1).show().html('至少6个字符含数字大小写字母');
				}
				else{
					$(this).css({'background':'#f5f5f5','border':'none'});
					$('.login_info_input .warn_text').eq(1).hide();
				}
			}
	}
});