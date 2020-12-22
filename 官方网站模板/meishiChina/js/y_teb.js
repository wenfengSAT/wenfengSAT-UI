//var mainDiv=document.querySelectorAll('.y_Con');
var navA=document.querySelectorAll('.y_logo .y_logo_nav a');
for(var i=0;i<navA.length;i++){
    navA[i].index = i;
    navA[i].onclick= function () {
        for(var i=0;i<navA.length;i++){
            navA[i].className='';
            //mainDiv[i].style.display='none';
        }
        this.className='y_on';
        //mainDiv[this.index].style.display="block";
    }
}



var mainUl=document.querySelectorAll('.y_conT');
var navLi=document.querySelectorAll('.y_nav_wrap a');
for(var j=0;j<navLi.length;j++){
    navLi[j].index = j;
    navLi[j].onclick= function () {
        for(var j=0;j<navLi.length;j++){
            navLi[j].className='';
            mainUl[j].style.display='none';
        }
        this.className='y_on';
        mainUl[this.index].style.display="block";
    }
}
