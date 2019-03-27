//屏蔽鼠标右键
//document.oncontextmenu = contextmenu ;
/**
 * 弹出日历管理对话筐
 *
 */
function fPopUpCalendarDlg(obj){
    var ctrlobj
    if(obj.tagName==null)
        ctrlobj=document.all(obj);
    else
        ctrlobj=obj;
	showx = event.screenX - event.offsetX -160//+ 25; // + deltaX;
	showy = event.screenY - event.offsetY + 18; // + deltaY;
	retval = window.showModalDialog("/js/CalendarDlg.htm", "", "dialogWidth:195px; dialogHeight:230px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:0;" );
	if( retval != null ){
		ctrlobj.value = retval;
	}else{
		//alert("canceled");
	}
}
/**
  *单选人员
 */
function fPopUpPersonDlg(idf,namef){
    idobj=document.all(idf);
    nameobj=document.all(namef);
    showx = event.screenX - event.offsetX -160//+ 25; // + deltaX;
	showy = event.screenY - event.offsetY + 18; // + deltaY;
	retval = window.showModalDialog("/per/perQuery.do", null, "dialogWidth:800px; dialogHeight:400px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:0;resizable:yes;" );
	if( retval != null ){
	    var s=retval.split("|");
		idobj.value = s[0];
		nameobj.value=s[1];
	}else{
		idobj.value = "";
		nameobj.value="";
	}
}
/**
 * 弹出新窗口
 *
 */
function windowOpen(theURL,winName,features,width,hight,scrollbars,top,left){
	var parameter=features+" top="+top+",left="+left+",width="+width+",height="+hight;
	if(scrollbars=="no"){
		parameter+=",scrollbars=no";
	}else{
		parameter+=",scrollbars=yes";
	}
	window.open(theURL,winName,parameter);
}

/**
 * 弹出代码管理对话筐
 *
 */
function fPopUpCodeDlg(obj){
	var ctrlobj=document.all(obj);
    showx = event.screenX - event.offsetX - 150; // + deltaX;
    showy = event.screenY - event.offsetY + 18; // + deltaY;
    var arg="dict_num="+ctrlobj.dict_num;
    arg+="&curCode="+ctrlobj.code;
    if(ctrlobj.layer!="undefined"&&ctrlobj.layer!=null){
        arg+="&layer="+ctrlobj.layer;
    }    
    retval = window.showModalDialog("/jsp/common/codeDlg.jsp?"+arg,"" , "dialogWidth:215px; dialogHeight:230px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:0;resizable:yes" );
    if( retval != null ){
        rs =  retval.split(",");
    	ctrlobj.value = rs[1];
    	ctrlobj.code = rs[0];
    	if(ctrlobj.next!=null&&document.all(ctrlobj.next)!=null){
    	    //document.all(ctrlobj.next).focus();
    	    nextInput(ctrlobj);
    	}
    }
}
/**
 * 重新加载代码项
 *
 */
function reloadCSApp(obj){
    parent.code.location="/jsp/common/codeInterpret.jsp";
}
/**
 * 对象获得焦点
 *
 */
function obtainFocus(obj){
try{
	var obj=obj;//document.all(obj_name);
    if(obj!=null){
    	if(obj.readonly==true){
            if(obj.next!=null&&document.all(obj.next)!=null){
    	        document.all(obj.next).focus();
    	    }
    	}else{
    	    if(obj.formula!=null&&obj.formula!=''){
    	        if(obj.value==null||obj.value==""){
    	            methodInvoke(obj);
    	        }
    		}else if(obj.value!="" && obj.dict_num!="" && obj.dict=="yes"){
                getShowCode(obj.dict_num,obj.value,obj);                
    		}else{
    		    obj.focus();
    		    return;
    		}
    	}
    }
}catch(e){}
}

var win = window;
var n = 0;
function forSearch(str){
    //if(event.keyCode!=13){//回车
    //	return
    //}

    var txt, i, found;
    if (str == "")
        return false;
        txt = win.document.body.createTextRange();
		
    for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {
        txt.moveStart("character", 1);
        txt.moveEnd("textedit");
    }
    if (found) {
        txt.moveStart("character", -1);
        txt.findText(str);
        txt.select();
        txt.scrollIntoView();
        n++;
		
    }else {
        if (n > 0) {
            n = 0;
            forSearch(str);
        }else{
		document.forms(0).searchName.value="";
            alert("抱歉!没有找到");
		     return false;
		}
    }
    return false;
}
function matchInput(curobj){
    obj=curobj;
    var matchbl = false;
    if(obj.value==""||obj.value==null){//if

        obj.code = "";
        obj.value = "";
        matchbl=true;
    }else{
        if(obj.dict_num==null||obj.dict_num==''){
            matchbl = true;
        }else{
            matchbl = getShowCode(obj.dict_num,obj.value,obj);             
        }
    }
    if(matchbl == false){
        curobj.value="";
        alert("没有匹配的代码项,请重新输入");
        curobj.focus();
        return false;
    }else{

        return true;
    }
}
function nextInput(curobj){
    try{
        obj=curobj;
        if(matchInput(curobj)){
            //跳转到下一个input对象
            if(obj.next==null){
                return;
            }else{
                var nextObj=document.all(obj.next);
                while(nextObj!=null){
                    if(nextObj.type!='hidden'&& nextObj.readOnly==false && nextObj.disabled==false){
                        nextObj.focus();
                        break;
                    }else{
                        if(nextObj.next!=null){
                            nextObj=document.all(nextObj.next);
                        }else{
                            return;
                        }
                    }
                }
            }
        }
    }catch(e){
    }
}
/**
 * 回车跳转到下一个对象
 *
 */
function gotoNextInput(curobj){
    if(event.keyCode!=13){//回车
    	return
    }
    nextInput(curobj);
}

/**
 *代码翻译:代码值翻译成描述符。
 *主要用在onload处。
 */
function interpret(form){
    var i=0;
    try{
        for(var num = 0; num < form.length; num++){
            var obj =form.elements[num];
            if(obj.value!="" && obj.dict_num!="" && obj.dict=="yes"&&obj.value.indexOf("*****")<0){
                try{
                    var codeset = CSApp.get(obj.dict_num) ;
                    var code = codeset.get(obj.value) ;
                    obj.code=code.id;
                    obj.value=code.name;
                }catch(e){
                }
            }
            i++;
        }
    }catch(e){
        return "";
    }
}
/**
 *代码翻译:描述符译成代码值
 *用在onsubmit处。
 */
function code(form){
    for(var num = 0; num < form.length; num++){
        var obj =form.elements[num];
        if(obj.value!=""&&obj.code!="" && obj.dict=="yes"){
        	obj.value=obj.code;
        }
    }
    return true;
}
/**
 *代码翻译:根据具体的代码编号和代码值,翻译成描述符
 *根据代码得到页面显示项(开始)
 */
function getShowValue(dict_num,code){
	var strShowValue;
	if(dict_num==""||dict_num==null){
	    return code;
    }else if(code==""||code==null||code.indexOf("***")>-1){
    	return code;
   	}
   	try{
        var  codeSet = CSApp.get(dict_num);
        strShowValue = codeSet.get(code);
        return strShowValue.name;
    }catch(e){
        //alert('代码错误'+code);
        return code ;
    }
}
function getShowSpell(code,orgFlag){
    if(code==null||code==""||code.indexOf("***")>-1){
        return "";
    }
    if(orgFlag ==null||orgFlag=="" ){
        orgFlag =false;
    }
    try{
        if(orgFlag){
            var  codeSet = CSApp.get("OU");
            strShowValue = codeSet.get(code);
            return strShowValue.spell;
        }else{
            //var  codeSet = CSApp.get("All");
           var strShowValue;// = codeSet.get(code);
           var key =CSApp.keys();
           for(i=0;i<key.length;i++){
                var keyvalue = key[i];
                if(keyvalue=='OU') continue;
                if(keyvalue=='CS') continue;
                var codeset=CSApp.get(keyvalue);
                if(codeset==null)continue;
                var codeobj=codeset.get(code);
                if(codeobj!='undefined'&&codeobj!=null){
                    strShowValue=codeobj;
                    return strShowValue.spell;
                    //break;
                }
           }
        }
        return code;
    }catch(e){
        //alert('代码错误'+code);
        return code ;
    }
}
/**
 *代码翻译:根据具体代码值,翻译成描述符
 *code 代码值
 *orgFlag 是否机构代码，true 是 false 否 缺省是否
 *根据代码得到页面显示项(开始)
 */
function getShowValueByCode(code,orgFlag){
    if(code==null||code=="" || code=="null"){
        return "";
    }
    if(orgFlag ==null||orgFlag=="" ){
        orgFlag =false;
    }
    try{
        if(orgFlag){
            var  codeSet = CSApp.get("OU");
            strShowValue = codeSet.get(code);
            if(strShowValue == null)
                return code;
            else
                return strShowValue.name;
        }else{
            //var  codeSet = CSApp.get("All");
           var strShowValue;// = codeSet.get(code);
           var key =CSApp.keys();
           for(i=0;i<key.length;i++){
                var keyvalue = key[i];
                if(keyvalue=='OU') continue;
                if(keyvalue=='CS') continue;
                var codeset=CSApp.get(keyvalue);
                if(codeset==null)continue;
                var codeobj=codeset.get(code);
                if(codeobj!='undefined'&&codeobj!=null){
                    strShowValue=codeobj;
                    return strShowValue.name;
                    //break;
                }
           }
        }
        return code;
    }catch(e){
        //alert('代码错误'+code);
        return code ;
    }
}
/**
 *代码翻译:根据具体的代码编号和描述符,翻译成代码值
 */
function getShowCode(dict_num,desc,obj){
    try{
        if(obj.code!=null){
            var v=getShowValue(dict_num,obj.code);
            if(v==desc){
                obj.value=v;
                return true;
            }
        }
        var currentSet = CSApp.get(obj.dict_num);

        var keys=currentSet.keys();
        flag=false;
        for(i=0;i<keys.length;i++){
            var codeobj = currentSet.get(keys[i]);
            var name =codeobj.name;
            var spell= codeobj.spell;
            var treeId=codeobj.treeId;
            var layer = codeobj.layer;
            if(obj.layer!=null&&obj.layer!=""){
                layer=obj.layer;
            }
            var pnode= codeobj.pnode;
            var pid=codeobj.pid;
            //if(pid!=-1){//非根节点
                if(name.indexOf(desc)>-1){//翻译中文
                    if(layer==0){//叶子节点值
                        if( pnode == 0 ){
                            obj.value = codeobj.name;
                            obj.code = codeobj.id;
                            flag=true;
                            break;
                        }
                    }else if(layer==1){//任意节点值
                        obj.value = codeobj.name;
                        obj.code = codeobj.id;
                        flag=true;
                        break;
                    }
                }else if(spell.indexOf(desc)>-1){//翻译拼音
                    if(layer==0){
                        if( pnode == 0 ){
                            obj.value = codeobj.name;
                            obj.code = codeobj.id;
                            flag=true;
                            break;
                        }
                    }else if(layer==1){
                        obj.value = codeobj.name;
                        obj.code = codeobj.id;
                        flag=true;
                        break;
                    }
                }else if(treeId==desc){//翻译tree代码
                    if(layer==0){
                        if( pnode == 0 ){
                            obj.value = codeobj.name;
                            obj.code = codeobj.id;
                            flag=true;
                            break;
                        }
                    }else if(layer==1){
                        obj.value = codeobj.name;
                        obj.code = codeobj.id;
                        flag=true;
                        break;
                    }
                }
            //}
        }
        return flag;
    }catch(e){
        return false;
    }
}
/**
 * 校验checkBox、radio是否选择
 * chk: object
 */
function checkMutilSelect(chk){
	if (chk==null){
		return false;
	}
	var size = chk.length;
	if (size==null){
		if (chk.checked){
			return true;
		}else{
			return false;
		}
	}else {
		for(var i=0;i<size;i++){
			if (chk[i].checked){
				return true;
			}
		}
	}
	return false;
}
//提示只能选择一个
function selectOnlyOne(field){      //add by zenghx
    size = field.length;
    var flag = 0;
    id = null;
    if(size != null){
        for(i=0;i<size;i++){
            if(field[i].checked == true){
                flag = flag +1;
                if(flag ==1)
                    id = field[i].value;
                if(flag >1)
                    break;
            }
        }
    }else
       id = field.value;

    if(flag >1){
       alert("只能选择一个！");
       return null;                 //选择出错时返回null
    }else
       return id;                   //选择正确则返回被选中的checkbox的值
}

/**
 * 相应全选事件。
 * all:全选事件checkbox对象
 * chk:需要全选checkbox对象
 */
function selectAll(all,chk){
    if (chk==null){
        return false;
    }
    var size = chk.length;
    if (size==null){
        if(!chk.disabled)
            chk.checked=all.checked;;
    }else {
        for(var i=0;i<size;i++){
            if(!chk[i].disabled)
                chk[i].checked=all.checked;
        }
    }
    return true;
}

/**
 * 提交并处理代码
 * targObj:parent窗口的iframe的名字
 * height:最小高度
 */
function forsubmit(form1,flag){
	if(checkAll(form1,flag)){
		code(form1);
		//form1.submit();
		return true;
	}else{
		return false;
	}
}

/**
 * iframe自适应高度
 * targObj:parent窗口的iframe的名字
 * height:最小高度
 */
function iframeResize( targObj,height){
    if(targObj=='main'){
        var targWin = parent.document.all[targObj];
        if(targWin != null){
            var HeightValue = this.document.body.scrollHeight;
            var targWinHeight=targWin.document.body.scrollHeight;
            targWin.style.pixelHeight = HeightValue;
            if(HeightValue<targWin.document.body.clientHeight){
                targWin.style.pixelHeight =targWin.document.body.clientHeight;
            }
        }
    }
}

function linkOver(src){
    src.style.color = "#FF6600";
    src.style.cursor="hand";
    src.style.textDecoration = "underline";
}
function linkOut(src){
    src.style.color = "#294673";
    src.style.cursor="auto";
    src.style.textDecoration = "none";
}

function  ctrlbar(){
    if(document.all.showTree.style.display==""){
        document.all.showTree.style.display="none"
        document.all.ctrlBnt.src='../../../images/button_2.gif';
    }else{
        document.all.showTree.style.display=""
        document.all.ctrlBnt.src='../../../images/button_1.gif';
    }
}

//根据人员籍贯，得到省名
function getNativeAB(nativeName){
    nativeab = "";
    if(nativeName.indexOf("黑龙江") != -1)
        nativeab = "黑龙江";
    else
        nativeab = nativeName.substring(0,2);
    return nativeab;
}