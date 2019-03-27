var dataXMLDOC ;
var optionsFlags ;
var optionsValues = new Array(); ////记录：表名|字段名|type|id|memo|extendtype|baseinfo
var iteminfoValues = new Array(); //纪录总的复合信息集的信息
var optionvalue="";

function divideOptionValue(optionvalue)
{
 //optionvalue="epmsTirpTbl|vcCommon001ID|1|1|序列号|610001|0";
 temp = optionvalue;
 i = 0;
 while(temp.indexOf("|")!=-1)
 {
   loc = temp.indexOf("|");
   optionsValues[i] = temp.substring(0,loc);
   i++;
   temp = temp.substring(loc+1);
 }
 optionsValues[i] = temp ; //baseinfo
}

function deleteXmlNode(form,deledcell)
{
   activecell = deledcell ;

   for(i=0;i<dataXMLDOC.documentElement.childNodes.length;i++)
      {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(i);
  	   for(j=0;j<datanode.childNodes.length;j++)
  	   {
  	      fieldnode = datanode.childNodes.item(j);  //每一个定义的结点
  	      row = fieldnode.getAttribute("row");
  	      col = fieldnode.getAttribute("col");
  	      xx = activecell.row;
		  yy = activecell.column;

  	      if(row==xx&&col==yy)  //定义过并且符合 则删除
  	      {
				datanode.removeChild(fieldnode);
				activecell.value="";
				break ;          

  	      }
  	   }
  	}
	 var innodelen=dataXMLDOC.documentElement.childNodes.length;
	 for(ip=0;ip<innodelen;ip++)
      {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(ip);
	   if(!(datanode.childNodes.length>0))
	   {
	     dataXMLDOC.documentElement.removeChild(datanode);
		 break;
	   }
	  }
}

function ModifyStyle(form)  //提交更改后的报表样式
{
  form.action = "";
  form.submit();
}

function OnLoadData(stylepath,datapath)
{
 Spreadsheet.HTMLURL = stylepath.value ;
 xmlDoc.load(datapath.value);
  for(x=0;x<xmlDoc.documentElement.childNodes.length;x++)
   {
      currNode = xmlDoc.documentElement.childNodes.item(x);
      row = currNode.getAttribute("row");
      col = currNode.getAttribute("col");
      value =  currNode.getAttribute("value");
      if(value.indexOf("0")==0)Spreadsheet.Cells(row,col).Value = "'"+value ;
      else Spreadsheet.Cells(row,col).Value = value ;
   }
}

function OnCountCond(form,infostr) //确定统计条件
{
    //alert(infostr);
    var allinfoarray=infostr.split("#||#");
    var initeminfoarray=allinfoarray[2].split("^");
    var conditionarray=allinfoarray[3].split("^");
    var usersArray;

    if(allinfoarray[0]=="0")
  {
    var rows = Spreadsheet.Selection.Rows.Count ;
    var cols = Spreadsheet.Selection.Columns.Count ;
    var beginrow = Spreadsheet.Selection.row;
    var begincol = Spreadsheet.Selection.column;
    var definedNode ;
    var activecell = Spreadsheet.ActiveCell;
    var datanode;
    var seledtable;
    defined = true;
    var selectIndex=-1; //选中的option
    var kkkk;
    if(true)
    {
       	nodecount=0;
    	data = allinfoarray[3];
      	optionsValues=data.split("&");

     	fieldname = optionsValues[1];//字段名称
      	activecell = Spreadsheet.ActiveCell ;//Excel对象的活动cell
    	for(i=0;i<dataXMLDOC.documentElement.childNodes.length;i++)
       	{
            datanode = dataXMLDOC.documentElement.childNodes.item(i);
            tablename = datanode.getAttribute("name"); //得到xml中的<table>元素的表名
        	if(optionsValues[1]==tablename)
       		{
        		seledtable=i;
        		break;
           }
      		nodecount++;
     	}
     //如果没有这个表的话，就在xml中创建这个表
      	if(nodecount==dataXMLDOC.documentElement.childNodes.length)
    	{
      		newDataNode = dataXMLDOC.createElement("table");
      		newDataNode.setAttribute("name",optionsValues[1]);
      		newDataNode.setAttribute("rep","0");
      		dataElement = dataXMLDOC.documentElement;
      		dataElement.appendChild(newDataNode);
      		newDataNode = dataXMLDOC.createElement("field");

      		i = activecell.row;
      		j = activecell.column;
     		 newDataNode.setAttribute("row",i);
     		 newDataNode.setAttribute("col",j);
      		newDataNode.setAttribute("name",optionsValues[2]);
      		newDataNode.setAttribute("showname",optionsValues[4]);
      		newDataNode.setAttribute("type",optionsValues[3]);
      		if(optionsValues[3]=="3")
      		{
       			newDataNode.setAttribute("format","yy-MM-dd");
     		 }
      		if(optionsValues[5]!=""&&optionsValues[5]!=null)
      		{
       			newDataNode.setAttribute("code",optionsValues[5]);
      		}
      		if(optionsValues[6]!=""&&optionsValues[6]!=null)
      		{
       			newDataNode.setAttribute("consql",optionsValues[6]);
      		}
      		chfieldname = optionsValues[4];
    	}
    	else
    	{
            newDataNode = datanode;
            dataElement = dataXMLDOC.documentElement;
          	dataElement.appendChild(newDataNode);
        	newDataNode = dataXMLDOC.createElement("field");



        	i = activecell.row;
        	j = activecell.column;
       		newDataNode.setAttribute("row",i);
        	newDataNode.setAttribute("col",j);
        	newDataNode.setAttribute("name",optionsValues[2]);
        	newDataNode.setAttribute("showname",optionsValues[4]);
       	 	newDataNode.setAttribute("type",optionsValues[3]);
        	if(optionsValues[3]=="3")
        	{
         		newDataNode.setAttribute("format","yy-MM-dd");
       		}
        	if(optionsValues[5]!=""&&optionsValues[5]!=null)
          	{
          		 newDataNode.setAttribute("code",optionsValues[5]);
          	}
        	if(optionsValues[6]!=""&&optionsValues[6]!=null)
          	{
           		newDataNode.setAttribute("consql",optionsValues[6]);
          	}
        	//newDataNode.setAttribute("rep","0");
        	chfieldname = optionsValues[4];
    	}

      	for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
      	{
         	datanode = dataXMLDOC.documentElement.childNodes.item(x);
         	for(i=0;i<datanode.childNodes.length;i++)
         	{
            	fieldnode = datanode.childNodes.item(i);
           		xxx = fieldnode.getAttribute("row");
            	yyy = fieldnode.getAttribute("col");
            	xxxx = activecell.row ;
            	yyyy = activecell.column ;
            	//alert("xxx:"+xxx+";yyy:"+yyy+";xxxx:"+xxxx+";yyyy:"+yyyy+";");
            	if(xxx==xxxx&&yyy==yyyy)
            	{
        			//alert("removeChild(fieldnode)");
             	 //datanode.removeChild(fieldnode); //该格式中如果定义过则删除结点
        			deleteXmlNode(document.forms(0),Spreadsheet.Cells(xxxx,yyyy));
              		break ;
            	}

         	}
  		}

  		for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
        {
  	   		datanode = dataXMLDOC.documentElement.childNodes.item(x);
  	   		datanode.appendChild(newDataNode);

  		}
       if(chfieldname.indexOf(".")!=-1)activecell.value="["+chfieldname.substring(chfieldname.indexOf(".")+1)+"]";
       else activecell.value = "["+chfieldname+"]";
       //optionsFlags[selectIndex] = true ;//标记选择过

  }
  else   //该字段已经定义过
  {
  	kkkk = -1;
  	for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
        {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(x);
  	   for(i=0;i<datanode.childNodes.length;i++)
  	   {
  	      fieldnode = datanode.childNodes.item(i);
  	      xxx = fieldnode.getAttribute("row");
  	      yyy = fieldnode.getAttribute("col");
  	      xxxx = activecell.row ;
  	      yyyy = activecell.column ;
  	      if(xxx==xxxx&&yyy==yyyy)
  	      {
  	        for(k=0;k<form.queryfield.options.length;k++)
  	      	 {
  	      	  datad = form.queryfield.options[k].value;
  	      	  //divideOptionValue(datad);
			  optionsValues=datad.split("$");
  	      	  fieldname1 = optionsValues[1];
  	      	  if(fieldname1==fieldnode.nodeName)  //找到对应的选择过的字段在select中的编号
  	      	  {
                    kkkk = k ;
  	      	    if(k!=selectIndex)
  	      	    {
  	      	    	optionsFlags[k] = false ;//修改记录该字段是否被选择过的值
  	      	    }
  	      	    break ;
  	      	  }
  	      	}
  	      	datad = form.queryfield.options[k].value;
  	      	//divideOptionValue(datad);
			optionsValues=datad.split("$");

  	      	if(kkkk!=selectIndex)datanode.removeChild(fieldnode); //该格式中如果定义过则删除结点
  	        break ;
  	      }

  	   }
        }

         data = form.queryfield.options[selectIndex].value;
        //data = "epmsTirpTbl|vcCommon001ID|1|1|序列号|610001|0";
        //表名|字段名|type|id|memo|extendtype|baseinfo
        //divideOptionValue(data); //分隔
		optionsValues=data.split("$");
  	 fieldname = optionsValues[1];

    for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
        {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(x);
  	   for(i=0;i<datanode.childNodes.length;i++)
  	   {
  	      fieldnode = datanode.childNodes.item(i);
  	      if(fieldnode.nodeName==fieldname)
  	      {
  	         row = fieldnode.getAttribute("row");
  	         col = fieldnode.getAttribute("col");
  	         Spreadsheet.Activesheet.Cells(row,col).value = "";
  	         row = activecell.row;col=activecell.column;
  	         ssssT = form.queryfield.options[selectIndex].text ;
  	         if(ssssT.indexOf(".")!=-1)ssssT = ssssT.substring(ssssT.indexOf(".")+1);
  	         Spreadsheet.Activesheet.Cells(row,col).value = "["+ssssT+"]";
  	         fieldnode.setAttribute("row",row);
  	         fieldnode.setAttribute("col",col); //修改行列值
  	         break;
  	      }
  	   }
  	}

    }
 }


 else if((allinfoarray[0]=="1"))
 {
  //alert("iteminfoValues:"+allinfoarray[2]);
  iteminfoValues=allinfoarray[2].split("^");
  var rows = Spreadsheet.Selection.Rows.Count ;
  var cols = Spreadsheet.Selection.Columns.Count ;
  var beginrow = Spreadsheet.Selection.row;
  var begincol = Spreadsheet.Selection.column;
  var definedNode ;
  var activecell = Spreadsheet.ActiveCell;
  var datanode;
  var seledtable;
  defined = true;
  var selectIndex=-1; //选中的option
  var kkkk;
  //alert("iteminfoValues.length-1:"+(iteminfoValues.length-1));
  for(tt=0;tt<iteminfoValues.length-1;tt++)
 {
  //alert("tt:"+tt);
  if(true)
  {
  	nodecount=0;
	data = iteminfoValues[tt];
  	optionsValues=data.split("&,&");
  	fieldname = optionsValues[1];
    activecell = Spreadsheet.ActiveCell ;
   for(i=0;i<dataXMLDOC.documentElement.childNodes.length;i++)
     {
  	      datanode = dataXMLDOC.documentElement.childNodes.item(i);
  	      tablename = datanode.getAttribute("name");
		  if(optionsValues[1]==tablename&&allinfoarray[4]==datanode.getAttribute("timemark"))
		 {
			seledtable=i;
			break;
  	     }
	  nodecount++;
  	}
	var rowrow;
	var colcol;
    if(nodecount==dataXMLDOC.documentElement.childNodes.length)
	{
		newDataNode = dataXMLDOC.createElement("table");
		newDataNode.setAttribute("name",optionsValues[1]);
		newDataNode.setAttribute("rep","1");
		newDataNode.setAttribute("timemark",allinfoarray[4]);
		dataElement = dataXMLDOC.documentElement;
		dataElement.appendChild(newDataNode);
		newDataNode = dataXMLDOC.createElement("field");

		i = activecell.row;
		j = activecell.column;
		newDataNode.setAttribute("row",i);
		newDataNode.setAttribute("col",j);
		newDataNode.setAttribute("condition","");
		//newDataNode.setAttribute("actcount","0");
		newDataNode.setAttribute("name",optionsValues[2]);
		newDataNode.setAttribute("showname",optionsValues[4]);
		newDataNode.setAttribute("type",optionsValues[3]);
		if(optionsValues[3]=="3")
		{
		 newDataNode.setAttribute("format","yy-MM-dd");
		}
		if(optionsValues[5]!=""&&optionsValues[5]!=null)
		{
		 newDataNode.setAttribute("code",optionsValues[5]);
		}
		if(optionsValues[6]!=""&&optionsValues[6]!=null)
		{
		 newDataNode.setAttribute("consql",optionsValues[6]);
		}
		chfieldname = optionsValues[4];
		rowrow=i;
	    colcol=j;
	}
	else
	{
	        newDataNode = datanode;
            dataElement = dataXMLDOC.documentElement;
		    dataElement.appendChild(newDataNode);
			newDataNode = dataXMLDOC.createElement("field");

			i = activecell.row;
			j = activecell.column;
			newDataNode.setAttribute("row",i);
			newDataNode.setAttribute("col",j+tt);
			newDataNode.setAttribute("condition","");
			//newDataNode.setAttribute("actcount","0");
			newDataNode.setAttribute("name",optionsValues[2]);
			newDataNode.setAttribute("showname",optionsValues[4]);
			newDataNode.setAttribute("type",optionsValues[3]);
			if(optionsValues[3]=="3")
			{
			 newDataNode.setAttribute("format","yy-MM-dd");
			}
			if(optionsValues[5]!=""&&optionsValues[5]!=null)
		    {
		     newDataNode.setAttribute("code",optionsValues[5]);
		    }
			if(optionsValues[6]!=""&&optionsValues[6]!=null)
		    {
		     newDataNode.setAttribute("consql",optionsValues[6]);
		    }
			//newDataNode.setAttribute("rep","1");
			chfieldname = optionsValues[4];
			rowrow=i;
	        colcol=j+tt;
	}

  	for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
        {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(x);
  	   for(i=0;i<datanode.childNodes.length;i++)
  	   {
  	      fieldnode = datanode.childNodes.item(i);
  	      xxx = fieldnode.getAttribute("row");
  	      yyy = fieldnode.getAttribute("col");
  	      xxxx = activecell.row ;
  	      yyyy = activecell.column+tt ;
		   //alert("xxx:"+xxx+";yyy:"+yyy+";xxxx:"+xxxx+";yyyy:"+yyyy+";");
  	      if(xxx==xxxx&&yyy==yyyy)
  	      {
			//alert("removeChild:");
			deleteXmlNode(document.forms(0),Spreadsheet.Cells(xxxx,yyyy));
			//alert("enddeleteXmlNode(");
  	      	//datanode.removeChild(fieldnode); //该格式中如果定义过则删除结点
  	        break ;
  	      }

  	   }
        }

  	for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
        {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(x);
  	   datanode.appendChild(newDataNode);

  	}

     if(chfieldname.indexOf(".")!=-1)
	 {
	   activecell.value="["+chfieldname.substring(chfieldname.indexOf(".")+1)+"]";
	 }
     else
	 {
	   //activecell.value = "["+chfieldname+"]";
	   Spreadsheet.Cells(rowrow,colcol).value="["+chfieldname+"]";
	 }
       //optionsFlags[selectIndex] = true ;//标记选择过
  }
  else   //该字段已经定义过
  {
  	kkkk = -1;
  	for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
    {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(x);
  	   for(i=0;i<datanode.childNodes.length;i++)
  	   {
  	      fieldnode = datanode.childNodes.item(i);
  	      xxx = fieldnode.getAttribute("row");
  	      yyy = fieldnode.getAttribute("col");
  	      xxxx = activecell.row ;
  	      yyyy = activecell.column ;
  	      if(xxx==xxxx&&yyy==yyyy)
  	      {
  	        for(k=0;k<form.queryfield.options.length;k++)
  	      	 {
  	      	  datad = form.queryfield.options[k].value;
  	      	  //divideOptionValue(datad);
			  optionsValues=datad.split("$");
  	      	  fieldname1 = optionsValues[1];
  	      	  if(fieldname1==fieldnode.nodeName)  //找到对应的选择过的字段在select中的编号
  	      	  {
                    kkkk = k ;
  	      	    if(k!=selectIndex)
  	      	    {
  	      	    	optionsFlags[k] = false ;//修改记录该字段是否被选择过的值
  	      	     }
  	      	     break ;
  	      	  }
  	          }
  	      	  datad = form.queryfield.options[k].value;
  	      	  //divideOptionValue(datad);
			  optionsValues=datad.split("$");

  	        	if(kkkk!=selectIndex)datanode.removeChild(fieldnode); //该格式中如果定义过则删除结点
  	          break ;
  	      }

  	   }
     }

         data = form.queryfield.options[selectIndex].value;
        //data = "epmsTirpTbl|vcCommon001ID|1|1|序列号|610001|0";
        //表名|字段名|type|id|memo|extendtype|baseinfo
        //divideOptionValue(data); //分隔
		optionsValues=data.split("$");
  	 fieldname = optionsValues[1];

    for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
    {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(x);
  	   for(i=0;i<datanode.childNodes.length;i++)
  	   {
  	      fieldnode = datanode.childNodes.item(i);
  	      if(fieldnode.nodeName==fieldname)
  	      {
  	         row = fieldnode.getAttribute("row");
  	         col = fieldnode.getAttribute("col");
  	         Spreadsheet.Activesheet.Cells(row,col).value = "";
  	         row = activecell.row;col=activecell.column;
  	         ssssT = form.queryfield.options[selectIndex].text ;
  	         if(ssssT.indexOf(".")!=-1)ssssT = ssssT.substring(ssssT.indexOf(".")+1);
  	         Spreadsheet.Activesheet.Cells(row,col).value = "["+ssssT+"]";
  	         fieldnode.setAttribute("row",row);
  	         fieldnode.setAttribute("col",col); //修改行列值
  	         break;
  	       }
  	     }
  	  }

     }

    }
  }

 else
 {
  iteminfoValues=allinfoarray[2].split("^");
  var definedNode ;
  var datanode;
  var seledtable;
  defined = true;
  var selectIndex=-1; //选中的option
  var kkkk;
  for(tt=0;tt<iteminfoValues.length-1;tt++)
 {
  //alert("tt:"+tt);
  if(true)
  {
  	nodecount=0;
	data = iteminfoValues[tt];
  	optionsValues=data.split("&,&");
  	fieldname = optionsValues[1];
   for(i=0;i<dataXMLDOC.documentElement.childNodes.length;i++)
     {
  	      datanode = dataXMLDOC.documentElement.childNodes.item(i);
  	      tablename = datanode.getAttribute("name");
		  if(optionsValues[1]==tablename)
		 {
			seledtable=i;
			break;
  	     }
	  nodecount++;
  	}
	var rowrow;
	var colcol;
    if(nodecount==dataXMLDOC.documentElement.childNodes.length)
	{
		newDataNode = dataXMLDOC.createElement("table");
		newDataNode.setAttribute("name",optionsValues[1]);
		newDataNode.setAttribute("rep","0");
		newDataNode.setAttribute("timemark",allinfoarray[4]);
		dataElement = dataXMLDOC.documentElement;
		dataElement.appendChild(newDataNode);
		newDataNode = dataXMLDOC.createElement("field");

		newDataNode.setAttribute("name",optionsValues[2]);
		newDataNode.setAttribute("showname",optionsValues[4]);
		newDataNode.setAttribute("condition","");
		//newDataNode.setAttribute("actcount","0");
		newDataNode.setAttribute("type",optionsValues[3]);
		if(optionsValues[3]=="3")
		{
		 newDataNode.setAttribute("format","yy-MM-dd");
		}
		if(optionsValues[5]!=""&&optionsValues[5]!=null)
		{
		 newDataNode.setAttribute("code",optionsValues[5]);
		}
		if(optionsValues[6]!=""&&optionsValues[6]!=null)
		{
		 newDataNode.setAttribute("consql",optionsValues[6]);
		}
		chfieldname = optionsValues[4];
	}
	else
	{

			var eqcount=0;
  	       for(eqc=0;eqc<datanode.childNodes.length;eqc++)
  	      {
			  eqtmpdatanode = datanode.childNodes.item(eqc);
              if(eqtmpdatanode.getAttribute("name")==optionsValues[2])
			  {
			    break;
			  }
			  eqcount++;
		  }
			if(eqcount==datanode.childNodes.length)
		{
	        newDataNode = datanode;
            dataElement = dataXMLDOC.documentElement;
		    dataElement.appendChild(newDataNode);
			newDataNode = dataXMLDOC.createElement("field");

			newDataNode.setAttribute("name",optionsValues[2]);
			newDataNode.setAttribute("showname",optionsValues[4]);
			newDataNode.setAttribute("condition","");
			//newDataNode.setAttribute("actcount","0");
			newDataNode.setAttribute("type",optionsValues[3]);
			if(optionsValues[3]=="3")
			{
			 newDataNode.setAttribute("format","yy-MM-dd");
			}
			if(optionsValues[5]!=""&&optionsValues[5]!=null)
		    {
		     newDataNode.setAttribute("code",optionsValues[5]);
		    }
			if(optionsValues[6]!=""&&optionsValues[6]!=null)
		    {
		     newDataNode.setAttribute("consql",optionsValues[6]);
		    }
			//newDataNode.setAttribute("rep","0");
			chfieldname = optionsValues[4];
		}
	 }
  	for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
        {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(x);
  	   for(i=0;i<datanode.childNodes.length;i++)
  	   {
  	      fieldnode = datanode.childNodes.item(i);
  	      break ;
  	      }

  	   }
        }

  	for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
        {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(x);
  	   datanode.appendChild(newDataNode);

  	}

     if(chfieldname.indexOf(".")!=-1)
	 {
	   activecell.value="["+chfieldname.substring(chfieldname.indexOf(".")+1)+"]";
	 }
     else
	 {
	 }
  }
 }
 if(allinfoarray[0]!="0")
 {
  //alert("allinfoarray[0]!=0");
  parsecondition(allinfoarray[3],allinfoarray[0]);
 }
}

 function parsecondition(str,rep)
 {
	  var tmpstring;
	  //alert("parsecondition(str:"+str);
	  //alert("rep:"+rep);
	  iteminfoValues=str.split("^");
	  for(tt=0;tt<iteminfoValues.length-1;tt++)
   {
	 optionsValues=iteminfoValues[tt].split("&,&");
	 for(i=0;i<dataXMLDOC.documentElement.childNodes.length;i++)
     {
  	    datanode = dataXMLDOC.documentElement.childNodes.item(i);
  	    for(j=0;j<datanode.childNodes.length;j++)
  	    {
			 fieldnode = datanode.childNodes.item(j);
			 //alert("optionsValues[8]:"+optionsValues[8]);
			 if(optionsValues[2]==fieldnode.getAttribute("name"))
			 {
			   if(optionsValues[3]=="4"&&optionsValues[7]!="like"||optionsValues[3]=="7"&&optionsValues[7]!="like")
			   {
			    tmpstring="'"+optionsValues[8]+"'";
			   }
			   else if(optionsValues[3]=="3")
			   {
			    tmpstring="["+optionsValues[8]+"]";
			   }
			   else
			   {
			    tmpstring=optionsValues[8]
			   }
			   //alert("optionsValues[3]:"+optionsValues[3]);
               //alert("optionsValues[9]:"+optionsValues[9]);
			   tmpconvalue=fieldnode.getAttribute("condition");
				   switch(optionsValues[7])
					{
					  case 'like':
						  //tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+" like "+"'%"+optionsValues[8]+"%' and ";
					      tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+" like "+"'%"+optionsValues[8]+"%' "+optionsValues[9]+"  ";
						  //alert("tmpconvalue:"+tmpconvalue);
						  fieldnode.setAttribute("condition",tmpconvalue);
						  break;
					  case 'm':
						   //tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+">"+tmpstring+" and ";
					       tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+">"+tmpstring+" "+optionsValues[9]+"  ";
						   //alert("tmpconvalue:"+tmpconvalue);
						   fieldnode.setAttribute("condition",tmpconvalue);
						  break;
					  case 'l':
						   //tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+"<"+tmpstring+" and ";
					       tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+"<"+tmpstring+" "+optionsValues[9]+"  ";
						   //alert("tmpconvalue:"+tmpconvalue);
						   fieldnode.setAttribute("condition",tmpconvalue);
						  break;
					  case 'me':
						   //tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+">="+tmpstring+" and ";
					       tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+">="+tmpstring+" "+optionsValues[9]+"  ";
						   //alert("tmpconvalue:"+tmpconvalue);
						   fieldnode.setAttribute("condition",tmpconvalue);
						  break;
					  case 'le':
						   //tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+"<="+tmpstring+" and ";
					       tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+"<="+tmpstring+" "+optionsValues[9]+"  ";
						   //alert("tmpconvalue:"+tmpconvalue);
						   fieldnode.setAttribute("condition",tmpconvalue);
						  break;
					  case 'e':
						   //tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+"="+tmpstring+" and ";
					       tmpconvalue+=optionsValues[1]+"."+optionsValues[2]+"="+tmpstring+" "+optionsValues[9]+"  ";
						   //alert("tmpconvalue:"+tmpconvalue);
						   fieldnode.setAttribute("condition",tmpconvalue);
						  break;
					  default:
						   break;
					}
			    }
		   }
		}
	  }

      if(rep=="2")
	 {
	  //去除未设条件的节点
	  var tmpvalue;
	  //var tmparraya;
	  for(i=0;i<dataXMLDOC.documentElement.childNodes.length;i++)
     {
  	    datanode = dataXMLDOC.documentElement.childNodes.item(i);
		pp=0;
  	    for(j=0;j<datanode.childNodes.length;j++)
		{
		  fieldnode = datanode.childNodes.item(j);
		  //alert(fieldnode.getAttribute("condition"));
		  if(fieldnode.getAttribute("condition")!=""&&fieldnode.getAttribute("condition")!=null)
		  {
           pp++;
		  }
		}
		while(datanode.childNodes.length>pp)
  	    {
			for(q=0;q<datanode.childNodes.length;q++)
		  {
			 fieldnode = datanode.childNodes.item(q);
			 if(fieldnode.getAttribute("condition")=="")
			 {
			    datanode.removeChild(fieldnode);
			 }
		  }
		}
	 }
     //alert("去除未设条件的节点:"+dataXMLDOC.xml);
	 var innodelen=dataXMLDOC.documentElement.childNodes.length;
	 pp=0;
	 for(ip=0;ip<innodelen;ip++)
      {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(ip);
	   //alert("datanode:"+datanode);
	   if(datanode.childNodes.length>0)
	   {
		 pp++;
	   }
	  }
	  while(dataXMLDOC.documentElement.childNodes.length>pp)
  	 {
       for(ip=0;ip<dataXMLDOC.documentElement.childNodes.length;ip++)
      {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(ip);
	   if(datanode.childNodes.length==0)
	   {
	     dataXMLDOC.documentElement.removeChild(datanode);
		 //break;
	   }
	  }
	 }
	 //alert("去除空的子节点:"+dataXMLDOC.xml);
  }
}



function trimand()//去除and
{
	  var tmpvalue;
	  //var tmparraya;
	  for(i=0;i<dataXMLDOC.documentElement.childNodes.length;i++)
     {
  	    datanode = dataXMLDOC.documentElement.childNodes.item(i);
  	    for(j=0;j<datanode.childNodes.length;j++)
  	    {
			 fieldnode = datanode.childNodes.item(j);
			   tmpvalue=fieldnode.getAttribute("condition");
			   if(tmpvalue!=""&& tmpvalue!=null)
			   {
			   tmpvalue=tmpvalue.substring(0,(tmpvalue.length-5));
			   //alert(tmpvalue);
			   fieldnode.setAttribute("condition",tmpvalue)
			   }
		}
	 }
}
function addbar()//加括号
{
	  var tmpvalue;
	  var tmparray;
	  var tmpstring;
	  tmpcount=0;
	  for(i=0;i<dataXMLDOC.documentElement.childNodes.length;i++)
     {
  	    datanode = dataXMLDOC.documentElement.childNodes.item(i);
  	    for(j=0;j<datanode.childNodes.length;j++)
  	    {
			   fieldnode = datanode.childNodes.item(j);
			   tmpvalue=fieldnode.getAttribute("condition");
			   if(tmpvalue!=""&& tmpvalue!=null)
			   {
				 tmparray=tmpvalue.split(" ");
				 tmpcount=0;
				 for(k=0;k<tmparray.length;k++)
				 {
				   tmpstring=killallspace(tmparray[k]);
                   if(tmpstring=="and"||tmpstring=="or")
				   {
					   tmpcount++;
				   }
				 }
				 if(tmpcount>1)
				 {
                   tmpvalue="( "+tmpvalue.substring(0,(tmpvalue.length-5))+" ) "+tmpvalue.substring((tmpvalue.length-5),tmpvalue.length)+"  ";
			       //alert(tmpvalue);
			       fieldnode.setAttribute("condition",tmpvalue);
				 }
			   }
		}
	 }
}
function killallspace(x){
	while((x.length>0) && (x.charAt(0)==' '))
		x = x.substring(1,x.length)
	while((x.length>0) && (x.charAt(x.length-1)==' '))
		x = x.substring(0,x.length-1)
	return x
}

 function ShowGraph()  //显示选中区域的统计图
{
  ChartSpace1.style.display = "" ;
  ChartSpace2.style.display = "" ;
  var colname = new Array(502);
  var letters = new Array(26);
  colname[0] = "A";colname[1] = "B";colname[2] = "C";colname[3] = "D";colname[4] = "E";colname[5] = "F";
  colname[6] = "G";colname[7] = "H";colname[8] = "I";colname[9] = "J";colname[10] = "K";
  colname[11] = "L";colname[12] = "M";colname[13] = "N";colname[14] = "O";colname[15] = "P";
  colname[16] = "Q";colname[17] = "R";colname[18] = "S";colname[19] = "T";colname[20] = "U";
  colname[21] = "V";colname[22] = "W";colname[23] = "X";colname[24] = "Y";colname[25] = "Z";
  letters[0] = "A";letters[1] = "B";letters[2] = "C";letters[3] = "D";letters[4] = "E";letters[5] = "F";
  letters[6] = "G";letters[7] = "H";letters[8] = "I";letters[9] = "J";letters[10] = "K";
  letters[11] = "L";letters[12] = "M";letters[13] = "N";letters[14] = "O";letters[15] = "P";
  letters[16] = "Q";letters[17] = "R";letters[18] = "S";letters[19] = "T";letters[20] = "U";
  letters[21] = "V";letters[22] = "W";letters[23] = "X";letters[24] = "Y";letters[25] = "Z";

  var a=0,b=0;//AA AB AC...BA BB BC...ZZ
  for(x=26;x<502;x++)
  {
    if(b==25)
    {
      b=0;
      a++;
    }
    colname[x] = letters[a]+letters[b];
    b++;
  }

 rows = Spreadsheet.Selection.Rows.Count;
 cols = Spreadsheet.Selection.Columns.Count;
 beginrow = Spreadsheet.Selection.row;
 begincol = Spreadsheet.Selection.column ;
 var str1="",str2 ="",str3="",str4="" ,str5="",str6="";
 str1 = colname[begincol-1]+(beginrow+1)+":"+colname[begincol-1]+(beginrow+rows-1);
 str2 = colname[begincol]+(beginrow)+":"+colname[begincol+cols-2]+(beginrow);
 str3 = colname[begincol]+(beginrow+1)+":"+colname[begincol+cols-2]+(beginrow+rows-1);

  BindChartToSpreadSpreadsheet (ChartSpace1, SS, str1, str2, str3,false);
  BindChartToSpreadSpreadsheet (ChartSpace2, SS, str2, str1, str3,true );

// BindChartToSpreadSpreadsheet (ChartSpace1, SS, "a2:a4", "b1:c1", "b2:c4",false);
 //BindChartToSpreadSpreadsheet (ChartSpace2, SS, "b1:c1", "a2:a4", "b2:c4",true );
}

//将图表数据源绑定到电子表格
function BindChartToSpreadSpreadsheet(ChartSpace, Spreadsheet, RangeRound1, RangeRound2, RangeData, DisplayType)
{
  c = ChartSpace.Constants ;
  ChartSpace.Clear();
  ChartSpace.DataSource = Spreadsheet ;

  cht = ChartSpace.Charts.Add() ;
  cht.HasLegend = true ;

  cht.SetData (c.chDimSeriesNames, 0, RangeRound1);
  cht.SetData (c.chDimCategories, 0, RangeRound2) ;

  rngValues = Spreadsheet.Range(RangeData) ;  //取数据

  for(i=0;i<cht.SeriesCollection.Count;i++)
  {
     ser = cht.SeriesCollection.item(i);
    if (DisplayType==false)
    {
       ser.SetData (c.chDimValues, 0,  rngValues.Rows(ser.Index + 1).Address );
       var chartwidth ;
       if(Spreadsheet.Range(RangeRound2).Columns.Count>Spreadsheet.Range(RangeRound1).Rows.Count)
         chartwidth = Spreadsheet.Range(RangeRound2).Columns.Count + 2 ;
       else
         chartwidth = Spreadsheet.Range(RangeRound1).Rows.Count + 2 ;
       ChartSpace.style.width=parseInt(chartwidth)*50;

    }
  else
    {
       ser.SetData (c.chDimValues, 0, rngValues.Columns(ser.Index + 1).Address);
       var chartwidth ;
       if(Spreadsheet.Range(RangeRound1).Columns.Count>Spreadsheet.Range(RangeRound2).Rows.Count)
         chartwidth = Spreadsheet.Range(RangeRound1).Columns.Count + 2 ;
       else
         chartwidth = Spreadsheet.Range(RangeRound2).Rows.Count + 2 ;
       ChartSpace.style.width=parseInt(chartwidth)*50;
    }
  // dl=ser.DataLabelsCollection.Add() ;
  // dl.Font.Size = 9 ;
  // dl.Font.Color = "blue" ;
  // dl.Position = c.chLabelPositionTop ;
 } //end for(i=0 ....

 FormatChart( c,cht);


}

//设置图表显示字体及数据轴格式
function FormatChart(c,cht)
{

  cht.Legend.Font.size=9 ;
  ax = cht.Axes(c.chAxisPositionBottom);
  ax.Font.Size = 9 ;
  ax = cht.Axes(c.chAxisPositionLeft);
  ax.Font.Size = 9;
  ax.NumberFormat = "$#,##0";

}


function selectinfo(form,infostr)
{
	var array = new Array();
	array = infostr.split("^");
	//已经得到这些变量
  var tablename=array[0];//表名
  var key=array[1]; //主键
  var instance=array[2]; //实例ID
  var fieldname=array[3];//字段名称
  var showname=array[4];//字段显示的中文名称
  var flag = array[5];//字段
  var type = array[6];//字段类型
  var code = array[7];//字段对应的代码项
  var typeflag = array[8];//日期型显示的格式
  var format;//字段格式
  var excelname;//在Excel中要显示的字段名称，其实就是showname
  var rows = Spreadsheet.Selection.Rows.Count ;
  var cols = Spreadsheet.Selection.Columns.Count ;
  var beginrow = Spreadsheet.Selection.row;
  var begincol = Spreadsheet.Selection.column;
  var definedNode ;
  var activecell = Spreadsheet.ActiveCell;
  var datanode;
  var seledtable;
  defined = true;
  var selectIndex=-1; //选中的option
  if(true)
  {
  	nodecount=0;
  	activecell = Spreadsheet.ActiveCell ;//Excel对象的活动cell
  	//判断xml中有没有这个表
  	for(i=0;i<dataXMLDOC.documentElement.childNodes.length;i++)
    {
        datanode = dataXMLDOC.documentElement.childNodes.item(i); //table元素
        tablename1 = datanode.getAttribute("name"); //得到xml中的<table>元素的表名
        if(tablename == tablename1)
       	{
        	seledtable=i;
        	break;
        }
      	nodecount++;
    }

    //如果没有这个表的话，就在xml中创建这个表
    if(nodecount==dataXMLDOC.documentElement.childNodes.length)
    {
      newDataNode = dataXMLDOC.createElement("table");
      newDataNode.setAttribute("name",tablename);
      newDataNode.setAttribute("key",key);
      newDataNode.setAttribute("instance",instance);
      dataElement = dataXMLDOC.documentElement;
      dataElement.appendChild(newDataNode);
      newDataNode = dataXMLDOC.createElement("field");

      i = activecell.row;
      j = activecell.column;
      newDataNode.setAttribute("row",i);
      newDataNode.setAttribute("col",j);
      newDataNode.setAttribute("name",fieldname);
      newDataNode.setAttribute("showname",showname);
      newDataNode.setAttribute("flag",flag);
      newDataNode.setAttribute("type",type);
      newDataNode.setAttribute("typeflag",typeflag);
      if(code!=""&&code!=null)
      {
       	newDataNode.setAttribute("code",code);
      }
      excelname = showname;//把字段显示名称赋给Excel单元格
    }
    //如果有这个表的话，就在xml中追加这个表的元素
    else
    {
    	newDataNode = datanode; //table元素
        dataElement = dataXMLDOC.documentElement;
        dataElement.appendChild(newDataNode); //追加元素
        newDataNode = dataXMLDOC.createElement("field");

        i = activecell.row;
        j = activecell.column;
        newDataNode.setAttribute("row",i);
        newDataNode.setAttribute("col",j);
        newDataNode.setAttribute("name",fieldname);
        newDataNode.setAttribute("flag",flag);
        newDataNode.setAttribute("showname",showname);
        newDataNode.setAttribute("type",type);
        newDataNode.setAttribute("typeflag",typeflag);
        if(code!=""&&code!=null)
        {
           newDataNode.setAttribute("code",code);
        }

        excelname = showname;//把字段显示名称赋给Excel单元格

    }
    //如果有相同的元素，就把Excel的元素删掉
    for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
    {
         datanode = dataXMLDOC.documentElement.childNodes.item(x);
         for(i=0;i<datanode.childNodes.length;i++)
         {
            fieldnode = datanode.childNodes.item(i);
            xxx = fieldnode.getAttribute("row");
            yyy = fieldnode.getAttribute("col");
            xxxx = activecell.row ;
            yyyy = activecell.column ;
            //alert("xxx:"+xxx+";yyy:"+yyy+";xxxx:"+xxxx+";yyyy:"+yyyy+";");
            if(xxx==xxxx&&yyy==yyyy)
            {
        //alert("removeChild(fieldnode)");
              //datanode.removeChild(fieldnode); //该格式中如果定义过则删除结点
        		deleteXmlNode(document.forms(0),Spreadsheet.Cells(xxxx,yyyy));
              	break ;
            }

    	 }
    }


  for(x=0;x<dataXMLDOC.documentElement.childNodes.length;x++)
  {
  	   datanode = dataXMLDOC.documentElement.childNodes.item(x);
  	   datanode.appendChild(newDataNode);
  }
  //把showname赋给选中的excel单元格
  if(type == "5" && typeflag == "1" && flag == "2")
  {
      activecell.value = "年 月 日"

  }else
  {
	  if(excelname.indexOf(".")!=-1)
		activecell.value="["+excelname.substring(excelname.indexOf(".")+1)+"]";
	  else
		activecell.value = "["+excelname+"]";
    }
 }//if(true)结束
}
