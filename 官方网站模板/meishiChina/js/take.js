//function ajax(opt){
//    if('XMLHttpRequest' in window){
//        var xhr = new XMLHttpRequest();
//    }else{
//        var xhr = new ActiveXObject( "Microsoft.XMLHTTP" );
//    }
//
//    if(opt.type == 'get'){
//        xhr.open('get',opt.url+'?'+jsonToString(opt.data),true);
//        xhr.send();
//    }
//    else if(opt.type=='post'){
//        xhr.open('post',opt.url,true);
//        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//        xhr.send(jsonToString(opt.data));
//    }
//
//    xhr.onreadystatechange = function(){
//        if(xhr.readyState == 4){
//            if(xhr.status>=200&&xhr.status<300||xhr.status==304){
//                opt.success(xhr.responseText);
//            }
//            else{
//                opt.error();
//            }
//        }
//    };
//    function jsonToString(json){
//        var arr = [];
//        for(var i in json){
//            arr.push(i+'='+json[i])
//        };
//        return arr.join('&');
//    }
//}
//
//var box=document.getElementById('take');
//ajax({
//    'type':'get',
//    'url':'../json/take.json',
//    success:function(data){
//            console.log(data);
////        var json=eval('('+data+')');
//        //console.log(json.employee);
//        //var arr=json.employee;
//        //for(var i=0;i<arr.length;i++){
//        //    var li=document.createElement('li');
//        //    li.innerHTML='<span>'+arr[i].id+'</span><span>'+arr[i].name+'</span><span>'+arr[i].age+'</span><span>'+arr[i].add+'</span>';
//        //    box.appendChild(li);
//        //}
//    },
//    error:function(){
//        alert('·þÎñÆ÷´íÎó')
//    }
//})

//var mainDiv=document.querySelectorAll('.y_Con');
var navA=document.querySelectorAll('.y_logo .y_logo_nav a');
for(var i=0;i<navA.length;i++){
    navA[i].index = i;
    navA[i].onclick= function () {
        for(var i=0;i<navA.length;i++){
            navA[i].className='';
        }
        this.className='y_on';
    }
}


var main=document.querySelectorAll('.h_main');
var h=document.querySelectorAll('#y_tit h2');
console.log(h.length);
for(var j=0;j<h.length;j++){
    h[j].index = j;
    h[j].onclick= function () {
        for(var j=0;j<h.length;j++){
            h[j].className='';
            main[j].style.display='none';
        }
        this.className='y_on';
        main[this.index].style.display="block";
    }
}
