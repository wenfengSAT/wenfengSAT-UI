/*
* @Author: Larry
* @Date:   2016-12-15 17:20:54
* @Last Modified by:   qinsh
* @Last Modified time: 2016-12-24 22:13:09
* +----------------------------------------------------------------------
* | LarryBlogCMS [ LarryCMS网站内容管理系统 ]
* | Copyright (c) 2016-2017 http://www.larrycms.com All rights reserved.
* | Licensed ( http://www.larrycms.com/licenses/ )
* | Author: qinshouwei <313492783@qq.com>
* +----------------------------------------------------------------------
*/
layui.config({
  base:'js/'
}).use(['jquery','element','layer','navtab'],function(){
    window.jQuery = window.$ = layui.jquery;
	  window.layer = layui.layer;
    var element = layui.element(),
         navtab = layui.navtab({
               elem: '.larry-tab-box'
         });

  
   //iframe自适应
  $(window).on('resize', function() {
    var $content = $('#larry-tab .layui-tab-content');
    $content.height($(this).height() - 163);
    $content.find('iframe').each(function() {
      $(this).height($content.height());
    });
    tab_W = $('#larry-tab').width();
    // larry-footer：p-admin宽度设定
    var larryFoot = $('#larry-footer').width();
    $('#larry-footer p.p-admin').width(larryFoot - 300);
  }).resize();
  
  // 左侧菜单导航-->tab
$(function(){
    // 注入菜单
    // var $menu = $('.larry-tab-menu');
    // console.log($menu);
    // $('#larry-tab .layui-tab-title').append($menu);
    $('#larry-nav-side').click(function(){
        if($(this).attr('lay-filter')!== undefined){
            $(this).children('ul').find('li').each(function(){
                var $this = $(this);
                if($this.find('dl').length > 0){
                   var $dd = $this.find('dd').each(function(){
                       $(this).click(function(){
                           var $a = $(this).children('a');
                           var href = $a.data('url');
                           var icon = $a.children('i:first').data('icon');
                           var title = $a.children('span').text();
                           var data = {
                                 href: href,
                                 icon: icon,
                                 title: title
                           }
                           navtab.tabAdd(data);
                       });
                   });
                }else{
                    $this.click(function(){
                           var $a = $(this).children('a');
                           var href = $a.data('url');
                           var icon = $a.children('i:first').data('icon');
                           var title = $a.children('span').text();
                           var data = {
                                 href: href,
                                 icon: icon,
                                 title: title
                           }
                           navtab.tabAdd(data);
                    });
                }
            });
        }
    })
})


});