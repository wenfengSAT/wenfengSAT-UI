/**
 * Created by 任晓坤 on 2017/8/23.
 */
window.onload=function(){
    var hMaina=document.querySelector('.k_select_xik');
    var mainUla=hMaina.querySelectorAll('ul');
    var navLia=document.querySelectorAll('.k_ui_title_wrap h3');
    for(var i=0;i<navLia.length;i++){
        navLia[i].index = i;
        navLia[i].onclick= function () {
            for(var i=0;i<navLia.length;i++){
                navLia[i].className='';
                mainUla[i].style.display='none';
            }
            this.className='y_on';
            mainUla[this.index].style.display="block";
        }
    }
}