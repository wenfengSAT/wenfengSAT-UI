/**
 * Created by Administrator on 2017/8/20.
 */
$(function(){
    var nav=document.getElementsByClassName('m_choose_nav')[0];
    var navLi=nav.getElementsByTagName('li');
    $('.m_choose_nav>li').click(function(){
        //$(this).addClass('checked').siblings().removeClass('checked');
        $('.m_tab_list').eq($(this).index()).fadeIn().siblings().fadeOut();
        for(var i=0;i<navLi.length;i++){
            navLi[i].className="";
        }
        this.className="m_nt_one"
    })
})
