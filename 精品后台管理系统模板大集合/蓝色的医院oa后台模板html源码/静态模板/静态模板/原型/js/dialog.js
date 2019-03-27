function ok_pumptzczl(bathyes,bathno,htmlname,height,width,id,des)
{
    showx = event.screenX - event.offsetX + 25; // + deltaX;
	showy = event.screenY - event.offsetY + 18; // + deltaY;
	 var tmpstr1="";
	 var tmpstr2="";
	 var arrayA=new Array();
	 var arraytmp=new Array();
	 returnMsg=myPrompt_salary("a","b",htmlname,height,width,showx,showy);
	 if(returnMsg)
	{  
		arrayA=returnMsg.split("|");
		id.value="";
		des.value="";
        for(i=0;i<arrayA.length;i++)
		{
		   arraytmp=arrayA[i].split(",");
		   tmpstr1=tmpstr1+"'"+arraytmp[0]+"',";
		   tmpstr2=tmpstr2+arraytmp[1]+",";
	    }
	   for(j=0;j<tmpstr1.length-1;j++)
	   {
	     id.value+=tmpstr1.charAt(j);
	   }
	   for(j=0;j<tmpstr2.length-1;j++)
	   {
	     des.value+=tmpstr2.charAt(j);
	   }
	   //alert(id.value);
	}
}


function ok_selsingle(bathyes,bathno,htmlname,height,width,id,des)
{
    showx = event.screenX - event.offsetX + 25; // + deltaX;
	showy = event.screenY - event.offsetY + 18; // + deltaY;
	 var tmpstr1="";
	 var tmpstr2="";
	 var arrayA=new Array();
	 var arraytmp=new Array();
	 returnMsg=myPrompt_salary("a","b",htmlname,height,width,showx,showy);
	 if(returnMsg)
	{  
		arrayA=returnMsg.split(",");
		id.value="";
		des.value="";
        /*for(i=0;i<arrayA.length;i++)
		{
		   arraytmp=arrayA[i].split(",");
		   tmpstr1=tmpstr1+"'"+arraytmp[0]+"',";
		   tmpstr2=tmpstr2+arraytmp[1]+",";
	    }
	   for(j=0;j<tmpstr1.length-1;j++)
	   {
	     id.value+=tmpstr1.charAt(j);
	   }
	   for(j=0;j<tmpstr2.length-1;j++)
	   {
	     des.value+=tmpstr2.charAt(j);
	   }*/
	   id.value=arrayA[0];
	   des.value=arrayA[1];
	   //alert(id.value);
	}
}




function ok(bathyes,bathno,htmlname)
	{
     returnMsg=myPrompt("a","b",htmlname);
	 if(returnMsg=="yes")
	 {
	   window.document.location=bathyes;
	 }
	 else if(returnMsg=="no")
	 {
	   window.document.location=bathno;
	 }
	 else
	 {
	   alert("²Ù×÷È¡Ïû")
	 }
	}
	function myPrompt(promptStr,defaultValue,htmlname)
	{
 	 dialogFeatures = "center:yes;" + 
	 "dialogHeight=150px;"+
	 "dialogWidth=250px;" +
	 "help:no;" +
	 "status:no";	
	 return window.showModalDialog(htmlname,[promptStr,defaultValue],dialogFeatures);
	}

	function salarystandardok(bathyes,bathno,htmlname,height,width,textid,textname)
	{
     var array=new Array;
     returnMsg=myPrompt_salary("a","b",htmlname,height,width);
	 if(returnMsg!=null && returnMsg!="none")
	 {
	   array=split(returnMsg,"|");
       if(array[0]!="none") 
	  {
	   textid.value=array[0];
	   textname.value=array[1];
	  }
	 }
	 else
	 {
	 }
	}
	function salarystandardok_pumpt(bathyes,bathno,htmlname,height,width)
	{
     returnMsg=myPrompt_salary("a","b",htmlname,height,width);
	 window.returnValue=returnMsg;
	 window.close();
	}
	function myPrompt_dialog(promptStr,defaultValue,htmlname,height,width,showx,showy)
	{
 	 //dialogFeatures = "dialogHeight="+height+"px;"+
	 //"dialogWidth="+width+"px;" +
	 //"help:no;" +
	 //"status:no"+"dialogLeft:"+showx+"px; dialogTop:"+showy+"px";
	 dialogFeatures ="dialogWidth:"+width+"px; dialogHeight:"+height+"px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no;"
	 return window.showModalDialog(htmlname,[promptStr,defaultValue],dialogFeatures);
	}