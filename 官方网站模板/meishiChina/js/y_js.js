onload=function(){
    pullDown(".h_pull",".h_pull_down");
    pullDown(".h_bar_text",".h_pull_down");
    pullDown(".h_blo",".h_pull_down");
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
};