onload = function () {
    pullDown("h_pull", "h_pull_down");
    pullDown("h_bar_text", "h_pull_down");
    pullDown("h_blo", "h_pull_down");
    pullDown("h_blo_pull", "h_pull_down");
    function pullDown(f, z) {
        var pull = document.getElementsByClassName(f)[0];
        var pullDown = pull.getElementsByClassName(z)[0];
        pull.onmouseover = function () {
            pullDown.style.display = "block";
        };
        pull.onmouseout = function () {
            pullDown.style.display = "none";
        };
    }

    var liveMain = document.getElementsByClassName("h_live_main")[0];
    var liveLi = liveMain.getElementsByTagName("li");
    for(var i=0;i<liveLi.length;i++){
        liveLi[i].index=i;
        liveLi[i].onmouseover= function () {
            var Tra = liveLi[this.index].getElementsByClassName("h_tra");
            for(var i=0;i<Tra.length;i++){
                Tra[i].style.opacity='1'
            }
        };
        liveLi[i].onmouseout= function () {
            var Tra = liveLi[this.index].getElementsByClassName("h_tra");
            for(var i=0;i<Tra.length;i++){
                Tra[i].style.opacity='0'
            }
        }
    }
};