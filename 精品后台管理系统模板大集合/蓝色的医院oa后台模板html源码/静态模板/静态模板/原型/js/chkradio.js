function radiois_checked(radio,form,status,action,note)
{
	 var stu="";
	 for(var j=0;j<radio.length;j++)
	    {
		 if(radio[j].checked)
		 {
          stu=radio[j].value;
		  break;
	     }
	   }
	 if(stu=="")
	{
	  alert(note);
	  return;
	 }
	 if(status=="nextpage")
    {
	 form.radiostring.value=stu;
	 form.action=action;
	 form.submit();
	}
	else if(status=="select")
	{
	  form.radiostring.value=stu;
	  form.action=action;
	  form.submit();
	}
	else if(status=="moveout")
	{
	 form.checkboxstring.value=stu;
	 form.action=action;
	 form.submit();
	}
	else if(status=="adjust_select")
	{
	 form.itemid.value=stu;
	 form.action=action;
	 form.submit();
	}
}

function radiois_checked_nsubmit(radio,form,texta,textb,textc)
{   
	 var stu="";
	 for(var j=0;j<radio.length;j++)
	    {
		 if(radio[j].checked)
		 {
          stu=radio[j].value;
		  break;
	     }
	   }
	 if(stu=="")
	 {
	  alert("请选择一个操作方式!");
	  return  false;
	 }
	 else
     {
	   if(stu=="typea")
	   {
	     if(checkSign(texta))
		   {
			 alert("操作方式A应为数字!");
	         return  false;
		   }
		  else
		  {
		   return true;
		  }
	   }
	  else if(stu=="typeb")
	   {
	     if(checkSign(textb))
		   {
			 alert("操作方式B应为数字!");
	         return  false;
		   }
		  else
		  {
		   return true;
		  }
	   }
       else if(stu=="typec")
	   {
	     if(checkSign(textc))
		   {
			 alert("操作方式C应为数字!");
	         return  false;
		   }
		  else
		  {
		   return true;
		  }
	   }
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

function simple_radiois_checked(radio,note)
{   
	 var stu="";
	 for(var j=0;j<radio.length;j++)
	    {
		 if(radio[j].checked)
		 {
          stu=radio[j].value;
		  break;
	     }
	   }
	 if(stu=="")
	 {
	  alert(note);
	  return  false;
	 }
	 else
	{
	 return  true;
	 }
}
