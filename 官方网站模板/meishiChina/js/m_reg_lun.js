/**
 * Created by Administrator on 2017/8/21.
 */

//中心选项卡  登录注册
var oLoginBox=document.getElementById("m_login-box");
var oLoginLi=oLoginBox.querySelectorAll(".m_login_top li");
var oLoginDiv=oLoginBox.querySelectorAll(".m_first");
//var oLoginA=oLoginLi.querySelector("a");

for(var i=0;i<oLoginLi.length;i++){
    oLoginLi[i].index=i;
    oLoginLi[i].onclick=function(){
        for(var j=0;j<oLoginLi.length;j++){
            oLoginLi[j].className="";
            oLoginDiv[j].style.display="none";
        }
        oLoginLi[this.index].className="m-checked";
        oLoginDiv[this.index].style.display="block";
    }
}



