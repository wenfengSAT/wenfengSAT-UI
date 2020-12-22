window.onload=function(){
    pullDown(".h_pull",".h_pull_down");
    pullDown(".h_bar_text",".h_pull_down");
    pullDown(".h_blo",".h_pull_down");
    pullDown(".h_blo_pull",".h_pull_down");
    pullDown(".h_blo_pull",".h_pull_down");
    function pullDown(f,z){
        var pull=document.querySelector(f);
        var pullDown=pull.querySelector(z);
        pull.onmouseover=function(){
            pullDown.style.display="block";
        };
        pull.onmouseout=function(){
            pullDown.style.display="none";
        };
    }

    //var hMain=document.querySelector('.k_xik');
    //var mainUl=hMain.querySelectorAll('.k_xik li');
    //var navLi=document.querySelectorAll('.nav_wrap a');
    //for(var i=0;i<navLi.length;i++){
    //    navLi[i].index = i;
    //    navLi[i].onclick= function () {
    //        for(var i=0;i<navLi.length;i++){
    //            navLi[i].className='';
    //            mainUl[i].style.display='none';
    //        }
    //        this.className='y_on';
    //        mainUl[this.index].style.display="block";
    //    }
    //}

};
