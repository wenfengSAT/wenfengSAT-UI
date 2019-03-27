/**
 *设置使用的指标项指标集
 */
function forSetType(form1,arg){

  form1.ok.disabled=true;
  var setType;
  var count=form1.setType.length;
  for(i=0;i<count;i++){
    if(form1.setType[i].checked){
      setType=form1.setType[i].value;
      break;
    }
  }
  if(setType=='A'){
    form1.setType[0].disabled=false;
    form1.setType[1].disabled=true;
    form1.setType[2].disabled=true;
    setHash=setAHash;
    itemHash=itemAHash;
	headHash=defaultItemAHash;
  }else if(setType=='B'){
    form1.setType[1].disabled=false;
    form1.setType[0].disabled=true;
    form1.setType[2].disabled=true;
    setHash=setBHash;
    itemHash=itemBHash;
	headHash=defaultItemBHash;
  }else if(setType=='C'){
    form1.setType[2].disabled=false;
    form1.setType[1].disabled=true;
    form1.setType[0].disabled=true;
    setHash=setCHash;
    itemHash=itemCHash;
	headHash=defaultItemCHash;
  }
  form1.insertCond.disabled=false;
  if(arg=="1")
  form1.save.disabled=false;
  form1.qry.disabled=false;
  var setId=loadInfoSet(form1.infoSet);
  loadInfoItem(form1.infoItem,setId,false);
  if(arg=="1"){
  loadDefaultInfoItem(form1.header,setId,false);

  }
  
}
/**
 * 根据指标集变换指标项
 */
function forSelectSet(dest,ori,flag){
  var setId;
  var count=ori.options.length;
  for(i=0;i<count;i++){
    if(ori.options[i].selected){
      setId=ori.options[i].value;
      break;
    }
  }
  if(setId==''||setId==null){
    return false;
  }else{
    loadInfoItem(dest,setId,flag);
  }
}
/**
 *设置可选的指标集
 */
function loadInfoSet(obj){
  if(obj.options!=null){
    var length=obj.options.length;
    for(i=length-1;i>=0;i--){
      obj.remove(i);
    }
  }
  var length=setHash.size();
  var setId;
  var key = setHash.keys();
  var top =document.createElement("Option");
  top.value="";
  top.text ="--请选择指标集--"
  obj.add(top);
  for(i=0;i<length;i++){
    var op =document.createElement("Option");
    op.value=setHash.get(key[i]).setId;
    op.text =setHash.get(key[i]).name;
    obj.add(op);
    if(i==0){
      setId=setHash.get(key[i]).setId;
    }
  }

  return setId;
}
/**
 *设置可选的指标项
 */
function loadInfoItem(obj,setId,flag){
	
  //清除原有InfoItem OPtion
  if(obj.options!=null){
    var length=obj.options.length;
    for(i=length-1;i>=0;i--){
      obj.remove(i);
    }
  }
  //添加新的option
  if(flag){
    var top =document.createElement("Option");
    top.value="";
    top.text ="--请选择--"
    obj.add(top);
  }
  var itemlist=itemHash.get(setId);
  var length=itemlist.size();
  var key=itemlist.keys();
  for(i=0;i<length;i++){
    var op =document.createElement("Option");
    //alert(itemlist.get(key[i]).itemId);
    op.value=itemlist.get(key[i]).itemId;
    op.text =itemlist.get(key[i]).name;
    obj.add(op);
  }

}
 //*******************************************
function loadDefaultInfoItem(obj,setId,flag){
  if(obj.options!=null){
    var length=obj.options.length;
    for(i=length-1;i>=0;i--){
      obj.remove(i);
    }
  }
  var itemlist=headHash;
   var length=itemlist.size();
  var key=itemlist.keys();
  for(i=0;i<length;i++){
    var op =document.createElement("Option");
    op.value=key[i];
    if(key[i]=="ID")
    op.text="";
    else if(key[i]=="C001001")
    op.text="";
    else
    op.text =itemlist.get(key[i]);
    obj.add(op);
  }
}

/**
 *左移
 */
function addItem(obj,value,text){
  var count=obj.options.length;
  for(i=0;i<count;i++){
    if(obj.options[i].value.substring(0,7)==value.substring(0,7)){
      alert("该指标项已经选择");
      return;
    }
  }
  if(value!=null&&text!=null){
      var op =document.createElement("Option");
      op.value=value;
      op.text =text;
      obj.add(op);
   }
}
/**
 *右移
 */
function removeItem(obj){
  var count=obj.options.length;
  for(i=count-1;i>=0;i--){
    if(obj.options[i].selected){
      obj.remove(i);
    }
  }
}
function forAddItem(dest,ori,type){
  var itemId;
  var itemName;
  var count=ori.options.length;
  for(i=0;i<count;i++){
    if(ori.options[i].selected){
      itemId=ori.options[i].value;
      if(itemId=="A001009"){
      alert("照片不能做位字段查询");
      return false;
      }
      itemName=ori.options[i].text;
      break;
    }
  }
  var desc="";
  if(type!=null){
    desc="|"+type;
  }
  addItem(dest,itemId+desc,itemName);
}
/**
 *上移
 */
function forUpItem(obj){
  var count=obj.options.length;
  for(i=0;i<count;i++){
    if(obj.options[i].selected){
      if(i==0){
        break;
      }
      var op1 =document.createElement("Option");
      op1.value=obj.options[i].value;
      op1.text=obj.options[i].text;
      obj.add(op1,i-1);
      obj.remove(i+1);
      obj.options[i-1].selected=true;
      break;
    }
  }
  return;
}
/**
 *下移
 */
function forDownItem(obj){
  var count=obj.options.length;
  for(i=0;i<count;i++){
    if(obj.options[i].selected){
      if(i==count-1){
        break;
      }
      var op1 =document.createElement("Option");
      op1.value=obj.options[i].value;
      op1.text=obj.options[i].text;
      obj.add(op1,i+2);
      obj.remove(i);
      obj.options[i+1].selected=true;
      break;
    }
  }
  return;
}
/**
 *动态设置条件使用
 */
function forSelectSet2(obj){
  var form1=document.forms(0);
  index=obj.rowIndex;
  allRow=obj.parentElement.rows.length;

  var destobj;
  var oriobj;
  if(allRow==3){
      destobj=form1.whereItem;
      oriobj=form1.whereSet;
  }else{
    destobj=form1.whereItem[index-2];
    oriobj=form1.whereSet[index-2];
  }
  forSelectSet(destobj,oriobj,true);
}
/**
 *插入条件
 */

/*
function insertRow(tableName){
  var obj = document.all(tableName);
  allCount=obj.rows.length;
  var newRow=obj.insertRow();
  var dt= new Date();
  newRow.id="r"+dt.getTime();
  newRow.ln=allCount;
  //增加指标集
  c0=newRow.insertCell(0);
  c0.ln=allCount;
  c0.className="td_center";
  c0.innerHTML="<select name='whereSet' style='width:120' onChange='forSelectSet2("+newRow.id+ ")'></select>";
  //add infoitem
  c1=newRow.insertCell(1);
  c1.ln=allCount;
  c1.className="td_center";
  c1.innerHTML="<select name='whereItem' onChange='forSelItem("+newRow.id+",this)' style='width:120'><option>--请选择--</option></select>";
  //add operation
  c2=newRow.insertCell(2);
  c2.ln=allCount;
  c2.className="td_center";
  c2.innerHTML="<select name='whereOper' style='width:60'>"
              +"<option value=''></option>"
              +"<option value='0'>包含</option>"
              +"<option value='13'>不包含</option>"
              +"<option value='1'>模糊</option>"
              +"<option value='2'>等于</option>"
              +"<option value='3'>不等于</option>"
              +"<option value='4'>大于</option>"
              +"<option value='5'>大于等于</option>"
              +"<option value='6'>小于</option>"
              +"<option value='7'>小于等于</option>"
              +"<option value='8'>空值</option>"
              +"<option value='9'>非空值</option>"
              +"<option value='11'>月</option>"
              +"<option value='12'>日</option>"
              +"</select>"
  //add compare value
  c3=newRow.insertCell(3);
  c3.ln=allCount;
  c3.className="td_center";
  c3.innerHTML="<input type='text'  onblur='matchInput(this);' name='whereValue' id='v"+allCount+"' dataType='' dict_num='' dict='yes' code='' layer='1' value='' class='input'>"
                +"<input  onclick='doValue("+newRow.id+")'  name='selvalue' value='..' type=button class=buttonface>";
  //add logic
  c4=newRow.insertCell(4);
  c4.ln=allCount;
  c4.className="td_center";
  c4.innerHTML="<select name='whereLogic' style='width:50'><option></option><option value='AND'>并且</option><option value='OR'>或者</option></select>"
  //add brace
  c5=newRow.insertCell(5);
  c5.ln=allCount;
  c5.className="td_center";
  c5.innerHTML="<select name='whereBrace' style='width:50'><option></option><option value='('>(</option><option value=')'>)</option></select>"
  //add a function for deleting  a row
  c6=newRow.insertCell(6);
  c6.ln=allCount;
  c6.className="td_center";
  c6.innerHTML="<a onmouseout='linkOut(this)' onmouseover='linkOver(this)' onclick=delRow("+newRow.id+")>删除</a>&nbsp;&nbsp;";
  c6.innerHTML=c6.innerHTML+"<a onmouseout='linkOut(this)' onmouseover='linkOver(this)' onclick=insertBeforeRow('PLList',"+newRow.id+")>插入</a>";
  if(allCount-2==0){
    loadInfoSet(document.forms(0).whereSet);
  }else{
    loadInfoSet(document.forms(0).whereSet[allCount-2]);
  }
}
*/
/**
 *删除条件
 */
function delRow(obj){
  document.all.PLList.deleteRow(obj.rowIndex);
}

/**
 *指定前位置插入行
 */
function insertRow(tableName,rowid){
  var obj = document.all(tableName);
  allCount=obj.rows.length;
  var indexrow=allCount;
  if(rowid!=null){
      for(i=0;i<allCount;i++){
        if(obj.rows(i).id==rowid.id){
            indexrow=i;
            break;
        }
      }
  }
  var newRow=obj.insertRow(indexrow);
  var dt= new Date();
  newRow.id="r"+dt.getTime();
  newRow.ln=indexrow;
  //增加指标集
  c0=newRow.insertCell(0);
  c0.ln=indexrow;
  c0.className="td_center";
  c0.innerHTML="<select name='whereSet' style='width:120' onChange='forSelectSet2("+newRow.id+ ")'></select>";
  //add infoitem
  c1=newRow.insertCell(1);
  c1.ln=indexrow;
  c1.className="td_center";
  c1.innerHTML="<select name='whereItem' onChange='forSelItem("+newRow.id+",this)' style='width:120'><option>--请选择--</option></select>";
  //add operation
  c2=newRow.insertCell(2);
  c2.ln=indexrow;
  c2.className="td_center";
  c2.innerHTML="<select name='whereOper' style='width:60'>"
              +"<option value=''></option>"
              +"<option value='0'>包含</option>"
              +"<option value='13'>不包含</option>"
              +"<option value='1'>模糊</option>"
              +"<option value='2'>等于</option>"
              +"<option value='3'>不等于</option>"
              +"<option value='4'>大于</option>"
              +"<option value='5'>大于等于</option>"
              +"<option value='6'>小于</option>"
              +"<option value='7'>小于等于</option>"
              +"<option value='8'>空值</option>"
              +"<option value='9'>非空值</option>"
              +"<option value='11'>月</option>"
              +"<option value='12'>日</option>"
              +"</select>"
  //add compare value
  c3=newRow.insertCell(3);
  c3.ln=indexrow;
  c3.className="td_center";
  c3.innerHTML="<input type='text'  onblur='matchInput(this);' name='whereValue' id='v"+allCount+"' dataType='' dict_num='' dict='yes' code='' layer='1' value='' class='input'>"
                +"<input  onclick='doValue("+newRow.id+")'  name='selvalue' value='..' type=button class=buttonface>";
  //add logic
  c4=newRow.insertCell(4);
  c4.ln=indexrow;
  c4.className="td_center";
  c4.innerHTML="<select name='whereLogic' style='width:50'><option></option><option value='AND'>并且</option><option value='OR'>或者</option></select>"
  //add brace
  c5=newRow.insertCell(5);
  c5.ln=indexrow;
  c5.className="td_center";
  c5.innerHTML="<select name='whereBrace' style='width:50'><option></option><option value='('>(</option><option value=')'>)</option></select>"
  //add a function for deleting  a row
  c6=newRow.insertCell(6);
  c6.ln=indexrow;
  c6.className="td_center";
  c6.innerHTML="<a onmouseout='linkOut(this)' onmouseover='linkOver(this)' onclick=delRow("+newRow.id+")>删除</a>&nbsp;&nbsp;";
  c6.innerHTML=c6.innerHTML+"<a onmouseout='linkOut(this)' onmouseover='linkOver(this)' onclick=insertRow('PLList',"+newRow.id+")>插入</a>";
  if(indexrow==allCount){
      if(allCount-2==0){
        loadInfoSet(document.forms(0).whereSet);
      }else{
        loadInfoSet(document.forms(0).whereSet[allCount-2]);
      }
  }else{
      loadInfoSet(document.forms(0).whereSet[indexrow-2]);
  }
}

function forAction(form1,type){

      if((type!=7&&type!=2)&&form1.saveName.value==form1.name.value){
        alert("名称不能重复");
        return false;
    }
   if(type==10&&form1.name.value==""){
        alert("名称不能为空");
        return false;
   }
    if(type==2||type==7||type==10){
        selectTotal(form1.header);
        selectTotal(form1.order);

        if(type==2||type==10){
            form1.name.alt="查询名称|0";
            
        }
        if(form1.qryId.value!=null&&form1.qryId.value!=""&&type==2){
          type=4;
        }
        if(type==10){
            type=2;
        }
    }


   var obj = document.all("PLList");
   allCount=obj.rows.length;
   if(allCount==2){
        form1.act.value=type;
        forsubmit(form1);        
        return true;
   }else if(allCount>2){
        if(getValidate(form1)){
            form1.act.value=type;
            forsubmit(form1);
            return true;
        } else
         return false;
   }

}

function selectTotal(obj){
    for (i=0; i<obj.options.length; i++){
        obj.options[i].selected = true;
    }
}

function doValue( rid){
    index=rid.rowIndex;
    allRow=rid.parentElement.rows.length;
    var form1 =document.forms(0);
    var destObj;
    if(allRow==3){
        destObj=form1.whereValue;
    }else{
        destObj=form1.whereValue[index-2];
    }
    var dataType=destObj.dataType;
	
    switch(dataType){
        case 'd':
            fPopUpCalendarDlg(destObj);
            break;
        case 'code':
		
            fPopUpCodeDlg(destObj.id);
            break;
        case 'OU':
            fPopUpCodeDlg(destObj.id);
            break;
        default:
            break;
    }
    return true;
}
function forSelItem(rid,ori){
    index=rid.rowIndex;
    allRow=rid.parentElement.rows.length;

    var txtObj;
    var buttonObj;
    var form1 =document.forms(0);

    if(allRow==3){
        buttonObj=form1.selvalue;
        txtObj=form1.whereValue;
    }else{
        buttonObj=form1.selvalue[index-2];
        txtObj=form1.whereValue[index-2];
    }

    var itemID;
    var setId;
    for (i=0; i<ori.options.length; i++){
       if( ori.options[i].selected ){
          itemID=ori.options[i].value;
          break;
       }
    }
    if(itemID=="ID"){
        setId="A001";
    }else if(itemID=="ORGUID"){
        setId="B001";
    }else{
        setId=itemID.substring(0,4);
    }
    var itemlist=itemHash.get(setId);
    var codeobj=itemlist.get(itemID);
   var datatype=codeobj.dataType;
    txtObj.value="";
    txtObj.dataType=datatype;
    switch(datatype){
        case 'code':
            txtObj.dict_num=codeobj.code;
            txtObj.dict="yes";
            txtObj.code="";
            //txtObj.readOnly=true;
            buttonObj.disabled=false;
            break;
        case 'd':
            buttonObj.disabled=false;

            break;
        case 'OU':
            txtObj.dict_num="OU";
            txtObj.dict="yes";
            txtObj.code="";
            buttonObj.disabled=false;

            break;
        default:
            buttonObj.disabled=true;
            txtObj.dict_num="";
            txtObj.dict="no";
            txtObj.code="";
            txtObj.readOnly=false;
            break;
    }
    return true;
}

//*******************************

function BetchforSelItem(arg){
	 var buttonObj;
	 var txtObj;
	 var itemlist=itemIfoHash
	 var length=itemlist.size();
	 var key=itemlist.keys();
	 var flage=true;
	 buttonObj=document.all.selvalue;
	 txtObj=document.all.itemValue;
	 var codeobj= itemlist.get(arg.value);
	 var datatype=codeobj.dataType;
	 var proper=codeobj.prop;

     txtObj.value="";
     txtObj.dataType=datatype;
	 switch(datatype){
        case 'code':
            txtObj.dict_num=codeobj.code;
            txtObj.dict="yes";
            txtObj.code="";
            txtObj.readOnly=true;
            if(proper=="2")
            buttonObj.disabled=true;
            else
            buttonObj.disabled=false;
            break;
        case 'd':
            if(proper=="2")
            buttonObj.disabled=true;
            else
            buttonObj.disabled=false;
            break;
        case 'OU':
            txtObj.dict_num="OU";
            txtObj.readOnly=false;
            txtObj.dict="yes";
            txtObj.code="";
            if(proper=="2")
            buttonObj.disabled=true;
            else
            buttonObj.disabled=false;
            break;
        default:
            buttonObj.disabled=false;
            txtObj.readOnly=false;
            txtObj.dict_num="";
            txtObj.dict="no";
            txtObj.code="";
            break;
    }
	
	//}

	return true;
}

function BetchdoValue(){
	var destObj=document.all.itemValue;	
    var dataType=destObj.dataType;
    switch(dataType){
        case 'd':
            fPopUpCalendarDlg(destObj);
            break;
        case 'code':			
            fPopUpCodeDlg(destObj.id);
            break;
        case 'OU':
            fPopUpCodeDlg(destObj.id);
            break;
        default:
            break;
    }
    return true;
}

function forReset(myform){
var mycount=myform.setType.length;
  for(i=0;i<mycount;i++){
    if(myform.setType[i].checked){
    break;
   }
  }
    
    myform.setType[0].disabled=false;
    myform.setType[1].disabled=false;
    myform.setType[2].disabled=false;
    myform.ok.disabled=false;
  return true;
}

function forReturn(myform){
var ss=myform.classId.value;
var ss2=myform.mode.value;
var ss1=null;
var mycount=myform.setType.length;
  for(i=0;i<mycount;i++){
    if(myform.setType[i].checked){
    ss1=myform.setType[i].value
    break;
   }
  }
 if(ss2=="1")ss1=null;

document.location="/qry/qryList.do?classId="+ss+"&mode="+ss2+"&qryType="+ss1+"";

}

function getValidate(form1){
  var len=form1.whereValue;
  var ssAll="";
  if(len.length==null){
   var ss1=form1.whereSet;

		 var ss1Name;
      if(ss1.value==""){
        alert("指标集名称不能为空");
        return false;
      }
		  for (i=0; i<ss1.options.length; i++){
          if( ss1.options[i].selected ){
           ss1Name=ss1.options[i].text;
           break;
          }
		    }
		 var ss2=form1.whereItem;
         var ss2Name;
         if(ss2.value==""){
         alert("指标项名称不能为空");
          return false;
          }
          for (i=0; i<ss2.options.length; i++){
          if( ss2.options[i].selected ){
           ss2Name=ss2.options[i].text;
           break;
          }
		    }
		 var ss3=form1.whereOper;
		 var ss3Name;
		  if(ss3.value==""){
         alert("条件不能为空");
          return false;
          }

          for (i=0; i<ss3.options.length; i++){
          if( ss3.options[i].selected ){
           ss3Name=ss3.options[i].text;
           break;
          }
		    }

		 var ss4=form1.whereLogic.value;

          if (ss4=="AND"||ss4=="or"){
            alert('查询条件有错');
            return false;
		    }

		 var ss5=form1.whereBrace.value;
		 if (ss5=="("||ss5==")"){
            alert('查询条件有错');
            return false;
		    }

		 var ssValue=form1.whereValue.value;
			if(ss1=="--请选择--"){
			  alert('请选择指标');
			  return false;
			}
			if(ss2=="--请选择--"){
			 alert('请选择指标项');
			 return false;
			}
			if(ss3==""){
			alert('请选择比较条件');
			 return false;
			}

        if(ss3.value!=2&&ss3.value!=3&&ss3.value!=8&&ss3.value!=9)
		  {
            if(ssValue==""){
            alert("请输入条件值");
            return false;
            }

		  }
		ssAll+="  "+ss1Name+"."+ss2Name+" "+ss3Name+" "+ssValue;
		//alert(ssAll);
		return true;
  }else{
	for(var k=0;k<len.length;k++){
		 var ss1=form1.whereSet[k];
		 var ss1Name;
	    if(ss1.value==""){
         alert("指标集名称不能为空");
        return false;
      }
		  for (i=0; i<ss1.options.length; i++){
          if( ss1.options[i].selected ){
           ss1Name=ss1.options[i].text;
           break;
          }
		    }
		 var ss2=form1.whereItem[k];
         var ss2Name;
          if(ss2.value==""){
         alert("指标项名称不能为空");
          return false;
          }
          for (i=0; i<ss2.options.length; i++){
          if( ss2.options[i].selected ){
           ss2Name=ss2.options[i].text;
           break;
          }
		    }
		 var ss3=form1.whereOper[k];
		 var ss3Name;
		  if(ss3.value==""){
         alert("条件不能为空");
          return false;
          }
          for (i=0; i<ss3.options.length; i++){
          if( ss3.options[i].selected ){
           ss3Name=ss3.options[i].text;
           break;
          }
		    }

		 var ss4=form1.whereLogic[k];
		 var ss4Name;
          for (i=0; i<ss4.options.length; i++){
          if( ss4.options[i].selected ){
           ss4Name=ss4.options[i].value;
           break;
          }
		    }

		 var ss5=form1.whereBrace[k];
		   var ss5Name;
          for (i=0; i<ss5.options.length; i++){
          if( ss5.options[i].selected ){
           ss5Name=ss5.options[i].text;
           break;
          }
		    }

		 var ssValue=form1.whereValue[k].value;
			if(ss1=="--请选择--"){
			  alert('请选择指标');
			  return false;
			}
			if(ss2=="--请选择--"){
			 alert('请选择指标项');
			 return false;
			}
			if(ss3==""){
			alert('请选择比较条件');
			 return false;
			}
			if((ss4=="")&&(k<len.length-1)){
			alert('请选择过滤条件');
			 return false;
			}
			if(ss3.value!=2&&ss3.value!=3&&ss3.value!=8&&ss3.value!=9)
		    {

             if(ssValue==""){
             alert("请输入条件值");
             return false;
             }
		    }
		ssAll+="  "+ss1Name+"."+ss2Name+" "+ss3Name+" "+ssValue+" "+ss4Name+" "+ss5Name;
	 }

    if(form1.whereLogic[len.length-1].value!="")
	 {
	  alert('查询条件有错');
	  return false;
	 }
	for(var k=0;k<form1.whereLogic.length-1;k++){
	  if(form1.whereLogic[k].value==""){
	   alert("查询条件有错");
	   return false;

	  }

	}


	 /*888888888*/
	  var ss0=ssAll;
      var h=0;
      var m=0;
      var ssa=ss0;
     var ssb=ss0;
     for(var i=0;i<ssa.length;i++){
      while(ssa.indexOf("(")>0){
        h++;
        ssa=ssa.substring(ssa.indexOf("(")+1,ssa.length);
     }
     }
    for(var i=0;i<ssb.length;i++){
      while(ssb.indexOf(")")>0){
        m++;
        ssb=ssb.substring(ssb.indexOf(")")+1,ssb.length);
     }
     }
     if(h!=m){
      alert('查询条件有括号不对称');
     }else{
        //alert(ssAll);
        return true;
      }

  }


}

