// 判断浏览器设备
(function(){
    var isPC=function(){
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        if(window.screen.width>=768){
             flag = true;           
        }
        return flag;
        
    };
    if(isPC()){
        
    }else{
        window.location.href='mobile/index.html';
    }
})();


