/*
* @Author: Administrator
* @Date:   2018-07-22 23:12:33
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-22 23:14:03
*/
$('.wrap_login_info .wrap_login_close').click(function(event) {
	$('.yjf_1 .wrap_login').hide();
	$('.yjf_1 .wrap_login.wrap_register').hide();
	$('.yjf_1 .wrap_login_info').hide();
	$('body').css('overflow','auto');
});

$('.wrap_login_content .register_show').click(function(event) {
	$('.yjf_1 .wrap_login').eq(1).show();
	$('.yjf_1 .wrap_login').eq(1).css({'width':$(window).innerWidth,'height':$(window).height()});
	$('.yjf_1 .wrap_login').eq(1).children('.wrap_login_info').show();
	$('body').css('overflow','hidden');
	$('.yjf_1 .wrap_login.wrap_register').css('overflow','auto');
});