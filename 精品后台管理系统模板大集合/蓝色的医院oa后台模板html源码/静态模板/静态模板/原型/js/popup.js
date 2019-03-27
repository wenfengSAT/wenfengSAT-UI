//屏蔽鼠标右键
//document.oncontextmenu = contextmenu ;
function contextmenu ()
{
 event.returnValue = false ;
 return false ;
}
/**
 * <p>Description: </p>
 * <p>Copyright: Copyright (c) 2002</p>
 * @date  2002/5/20
 * @version 1.0
 * @author wanglijuan
 */

/**
* 选择多个岗位
*/
function fPopUpSelMtilDlg(ctr,show,id)
{
	ctr.value = "";
	show.value = "";
	var retval=window.showModalDialog("orgTreeFrame.htm",0,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	var str="";
	if( retval!=null&&retval!=""){

		var usersArray=retval.split(",");
		for(i=0;i<usersArray.length-1;i++){
			var postObject = usersArray[i].split("$");
			str += postObject[2]+" ";
			ctr.value += postObject[0]+","+postObject[1]+"$";
		}
		show.value = str;
	}else{
		ctr.value="";
		show.value="";
	}
}

/**
* 选择岗位
*/
function fPopUpSelDlg(oid,pid,name,id)
{
	var retval=window.showModalDialog("/HRMS/org/orgTreeFrame.jsp?selType=1&id="+id,0,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	if( retval!=null&&retval!=""){
			var usersArray=retval.split("$");
			oid.value=usersArray[0];
			pid.value=usersArray[1];
			name.value=usersArray[2];
	}else{
		oid.value="";
		pid.value="";
		name.value="";
	}
}

/**
* 选择部门
*/
function fPopSelDeptDlg(pid,name)
{
	var retval=window.showModalDialog("orgTreeFrame.htm",0,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	if( retval!=null&&retval!=""){
			var usersArray=retval.split("$");
			pid.value=usersArray[0];
			name.value=usersArray[1];
	}else{
		pid.value="";
		name.value="";
	}
}
/**
* 选择多人
*/
function fPopSelPersonDlg(ctl,show)
{
	var id = ctl.value.split(",");
	var name = show.value.split(",");
	var str ="";
	if (ctl.value==""){
		str = "";
	}else{
		for(i=0;i<id.lenght;i++){
			var tmp = id[i]+"$"+name[i];
			str+=tmp+"^";
		}
	}
	var retval=window.showModalDialog("/HRMS/org/orgTreeFrame.jsp?selType=2",str,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	if( retval!=null&&retval!=""){
			var usersArray=retval.split("^");
			var idlist ="";
			var namelist ="";
			for(i = 0 ;i<usersArray.length-1;i++ ){
				var user = usersArray[i].split("$");
				idlist += user[0]+",";
				namelist += user[1]+" ";

		    }
			ctl.value=idlist;
			show.value=namelist;
	}else{
		ctl.value="";
		show.value="";
	}
}
/**
* 选择多人含岗位信息
*/
function fPopSelPersonInfoDlg(ctl,show)
{
	var id = ctl.value.split(",");
	var name = show.value.split(",");
	var str ="";
	if (ctl.value==""){
		str = "";
	}else{
		for(i=0;i<id.lenght;i++){
			var tmp = id[i]+"$"+name[i];
			str+=tmp+"^";
		}
	}
	var retval=window.showModalDialog("/HRMS/org/orgTreeFrame.jsp?selType=2",str,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	if( retval!=null&&retval!=""){
		var usersArray=retval.split("^");
		var idlist ="";
		var namelist ="";
		for(i = 0 ;i<usersArray.length-1;i++ ){
			var user = usersArray[i].split("$");
			//oid,pid,userid
			idlist += user[4]+","+user[3]+","+user[0]+"$";
			namelist += user[1]+" ";
	    }
		ctl.value=idlist;
		show.value=namelist;
	}else{
		ctl.value="";
		show.value="";
	}
}
/**
* 选择一个人含岗位信息
*/
function fPopSelSingleInfoDlg(ctl,show)
{
	var id = ctl.value;
	var name = show.value;
	var str ="";
	if (ctl.value==""){
		str = "";
	}else{
		var tmp = id+","+name;
		str+=tmp+"^";
	}
	var retval=window.showModalDialog("/HRMS/org/orgTreeFrame.jsp?selType=3",str,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	if( retval!=null&&retval!=""){
			var usersArray=retval.split("$");
			//oid,pid,userid
			ctl.value =usersArray[4]+","+usersArray[3]+","+usersArray[0];
			//name
			show.value=usersArray[1];
	}else{
		ctl.value="";
		show.value="";
	}
}
/**
* 选择一个人不含岗位信息
*/
function fPopSelSingleDlg(ctl,show)
{
	var id = ctl.value;
	var name = show.value;
	var str ="";
	if (ctl.value==""){
		str = "";
	}else{
		var tmp = id+"$"+name;
		str+=tmp+"^";
	}
	var retval=window.showModalDialog("/HRMS/org/orgTreeFrame.jsp?selType=3",str,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	if( retval!=null&&retval!=""){
			var usersArray=retval.split("$");
			//id
			ctl.value =usersArray[0];
			//name
			show.value=usersArray[1];
	}else{
		ctl.value="";
		show.value="";
	}
}
/**
* 按某部门选择一个人不含岗位信息
*/
function fPopSelDeptSingleDlg(ctl,show,oid)
{
	var id = ctl.value;
	var name = show.value;
	var str ="";
	if (ctl.value==""){
		str = "";
	}else{
		var tmp = id+"$"+name;
		str+=tmp+"^";
	}
	var retval=window.showModalDialog("/HRMS/org/singleorgTreeFrame.jsp?selType=3&oid="+oid,str,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
//	var retval=window.showModalDialog("/HRMS/org/orgTreeFrame.jsp?selType=3",str,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	if( retval!=null&&retval!=""){
			var usersArray=retval.split("$");
			//id
			ctl.value =usersArray[0];
			//name
			show.value=usersArray[1];
	}else{
		ctl.value="";
		show.value="";
	}
}

/**
* 按某人所在的部门选择多个人不含某岗位信息
*/
function fPopSelSingleInfoDlgperdep(ctl,show,oid,id)
{

   var id = ctl.value.split(",");
	var name = show.value.split(",");
	var str ="";
	if (ctl.value==""){
		str = "";
	}else{
		for(i=0;i<id.lenght;i++){
			var tmp = id[i]+"$"+name[i];
			str+=tmp+"^";
		}
	}
	var retval=window.showModalDialog("/HRMS/org/singleorgTreeFrame.jsp?selType=2&oid="+oid+"&id="+id,str,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	if( retval!=null&&retval!=""){
			var usersArray=retval.split("^");
			var idlist ="";
			var namelist ="";
			for(i = 0 ;i<usersArray.length-1;i++ ){
				var user = usersArray[i].split("$");
				idlist += user[0]+",";
				namelist += user[1]+" ";

		    }
			ctl.value=idlist;
			show.value=namelist;
	}else{
		ctl.value="";
		show.value="";
	}
}

/**
* 按某人所在的部门选择一个下级部门
*/
function fPopSelSubDepDlg(ctl,show,oid)
{    
	var retval=window.showModalDialog("/HRMS/org/singleorgTreeFrame.jsp?selType=0&oid="+oid,0,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
//	var retval=window.showModalDialog("/HRMS/org/orgTreeFrame.jsp?selType=0",0,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	if( retval!=null&&retval!=""){
			var usersArray=retval.split("$");
			ctl.value=usersArray[0];
			show.value=usersArray[1];
	}else{
		ctl.value="";
		show.value="";
	}
}

/**
* 选择多个部门只返回字符串，不回填
*/
function TactionSelDept()
{
	var retval=window.showModalDialog("/HRMS/training/trainingaction/orgTreeFrame.jsp?selType=0",0,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	if( retval!=null&&retval!="")
    {
	  return retval;
	}
    else
    {
      return false;
	}
}
//选择多个部门，回填
function MsgsendSelDept(ctl,show)
{
	var retval=window.showModalDialog("/HRMS/oafunction/commonmsg/orgTreeFrame.jsp?selType=0",0,"dialogWidth:500px;dialogHeight:400px;center:yes;status:no;");
	var tmparray=new Array();
	if( retval!=null&&retval!=""){
		    tmparray=retval.split("&");
			ctl.value=tmparray[0];
			show.value=tmparray[1];
	}
	else
	{
	}
}
function checkCheckbox(chk){
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

function interpretcode(dict_num,value)
{
	var local=CSApp.locateInDict(dict_num,value);
	var ss=CSApp.getItem(dict_num,local,1);
	return ss;
}
function compareDate(startdate,enddate){
    var a1 = startdate.split("-");    
    var a2= enddate.split("-");
    if (a1[0]>a2[0]){
        alert('开始时间大于结束时间！');
        return false;        
    }else if (a1[0]== a2[0]){
        if (a1[1]>a2[1]){
            alert('开始时间大于结束时间！');
            return false;
        }else if (a1[1]==a2[1]){
            if (a1[2]>=a2[2]){
                alert('开始时间大于结束时间！');
                return false;
            }
        }
    }
    return true; 
}
function openWin(theURL,winName,features,width,hight,scrollbars,top,left)
{
  var parameter="top="+top+",left="+left+",width="+width+",height="+hight;
  if(scrollbars=="no")
 {parameter+=",scrollbars=no";}
  else
 {parameter+=",scrollbars=yes";}
  window.open(theURL,winName,parameter);
}
//mail  校验
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_validateForm() { //v4.0
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
  for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]);
    if (val) { nm=val.name; if ((val=val.value)!="") {
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- '+nm+' must contain an e-mail address.\n';
      } else if (test!='R') {
        if (isNaN(val)) errors+='- '+nm+' must contain a number.\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (val<min || max<val) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';
    } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' is required.\n'; }
  } if (errors) alert('The following error(s) occurred:\n'+errors);
  document.MM_returnValue = (errors == '');
}