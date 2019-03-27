function is_checked(chk,form,status,action)
{
	 var stu="";
	 var arrayA=new Array();
	 var account=0;
	 var valuetemp;
	 if(chk!=null)
	{
	 for(j=0;j<chk.length;j++)
	  {
		 if(chk[j].checked)
		 {
          stu+=chk[j].value+"*";
	     }
	   }
	}
	 if(status=="nextpage"||status=="moveout"||status=="ajust"||status=="movein"||status=="bypersonb"||status=="create")
    {
	 form.checkboxstring.value=stu;
	 form.action=action;
	 form.submit();
	}
	else if(status=="select")
	{
	 if(checkAll(form))
	 {
	  form.action=action;
	  form.submit();
	 }
	}
	else if(status=="onlycheck")
	{
	 for(t=0;t<chk.length;t++)
	  {
	   if(chk[t].checked)
	   {
		switch(t)
		{
			case 0:
             arrayA[account]="0";
			break;
			case 1:
			 arrayA[account]="1";
			break;
			case 2:
			 arrayA[account]="2";
			break;
		}
		account++;
	   }
	  }
	  if(stu=="")
	  {
		alert("请选择查询项!!");
		return false;
	  }
	 else{return arrayA;}
	}
}

function is_checked_bylen(chk,form,status,action,length)
{
	 var stu="";
	 var arrayA=new Array();
	 var account=0;
	 var valuetemp;
	 if(length>1)
	{
	 for(j=0;j<chk.length;j++)
	  {
		 if(chk[j].checked)
		 {
          stu+=chk[j].value+"*";
	     }
	   }
	}
	 if(status=="nextpage"||status=="moveout"||status=="ajust"||status=="movein"||status=="bypersonb"||status=="create")
    {
	 if(length>1)
	{
	 form.checkboxstring.value=stu;
	}
	 form.action=action;
	 form.submit();
	}
	else if(status=="select")
	{
	 if(checkAll(form))
	 {
	  form.action=action;
	  form.submit();
	 }
	}
	else if(status=="onlycheck")
	{
	 for(t=0;t<chk.length;t++)
	  {
	   if(chk[t].checked)
	   {
		switch(t)
		{
			case 0:
             arrayA[account]="0";
			break;
			case 1:
			 arrayA[account]="1";
			break;
			case 2:
			 arrayA[account]="2";
			break;
		}
		account++;
	   }
	  }
	  if(stu=="")
	  {
		alert("请选择查询项!!");
		return false;
	  }
	 else{return arrayA;}
	}
}


function form_submit(form,action)
{
	 if(checkAll(form))
	 {
	  form.action=action;
	  form.submit();
	 }
}

function checkhidden(tmphidden,form,status,action,textname)
{
	 var stu="";
	 var arrayA=new Array();
	 var account=0;
	 var valuetemp;
	if(tmphidden!=null)
	{
	 for(j=0;j<tmphidden.length;j++)
	  {   
		  //str.split(",");
		  tmphidden[j].value+="*";
		  valuetemp=textname+(j+1)+".value";
		  tmphidden[j].value+=eval(valuetemp);
		  //alert(tmphidden[j].value);
	  }
	}
	 if(status=="nextpage"||status=="moveout"||status=="ajust"||status=="movein"||status=="bypersonb"||status=="create")
    {
	 form.action=action;
	 form.submit();
	}
}

function checkboxaddtext(chk,form,status,action,textname)
{
	 var stu="";
	 var arrayA=new Array();
	 var account=0;
	 var valuetemp;
	if(chk!=null)
	{
	 for(j=0;j<chk.length;j++)
	  {   
		  //str.split(",");
		  if(chk[j].checked)
         {
		  chk[j].value+="*";
		  valuetemp=textname+(j+1)+".value";
		  chk[j].value+=eval(valuetemp);
		 }
		  //alert(chk[j].value);
	  }
	}
	 if(status=="nextpage"||status=="moveout"||status=="ajust"||status=="movein"||status=="bypersonb"||status=="create")
    {
	 form.action=action;
	 form.submit();
	}
}

function isSelect(chk)              //add by zenghx
{
	var size = chk.length;
	var flag = false;
	 if (size==null)
	 {
	 	if (chk.checked)
	 	{
			flag = true;
		}
	}else
	{
		for(j=0;j<chk.length;j++)
	  {
		 if(chk[j].checked)
		 {
	  		flag = true ;
	     	 }
	   }
	
	}
	if(flag)
	{
		return true;
	}else
	{
		alert("请选择!");
		return false;
	}
}

var checkflag = "false";
function selectAll(field) {     //用按钮控制全选 add by zenghx
	var size = field.length;
	if (checkflag == "false"){
		if(size == null)
			field.checked = true;
		else{
			for (i = 0; i < field.length; i++) {
				field[i].checked = true;
			}
		}
		checkflag = "true";
		return "全不选";
	}else {
		if(size == null)
			field.checked = false;
		else{
			for (i = 0; i < field.length; i++) {
				field[i].checked = false; 
			}
		}
		checkflag = "false";
		return "全选";
	}
}
//field 需要全选的checkbox的名称
//chk  控制全选的checkbox的名称
function selectAllByChk(field,chk) {     //用checkbox控制全选  add by zenghx
	var size = field.length;
    if(size == null)
        field.checked = chk.checked;
    else{
        for (i = 0; i < field.length; i++) {
            field[i].checked = chk.checked;
        }
	}
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
