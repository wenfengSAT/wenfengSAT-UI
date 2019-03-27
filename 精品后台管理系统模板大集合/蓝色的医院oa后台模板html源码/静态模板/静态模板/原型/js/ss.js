function Do_po_Change(formobj){
	    var num,n, i, m;
        num= GetObjID(formobj.name);
        n = document.forms(0).elements[num + 1].length;
        for(i = n - 1; i >= 0; i--)
			document.forms(0).elements[num + 1].remove(i);
        for(i = 0; i < fields.length; i++){
        	if (formobj.value==fields[i].tid){
                var op =document.createElement("OPTION");
                op.value=fields[i].tid+','+fields[i].fid;
                op.text = fields[i].fname;
                document.forms(0).elements[num + 1].add(op);
            }
        }
        //document.forms(0).elements[num + 1].options[0].selected = true;
}

function InsertItem(ObjID, Location)
{
  len=document.forms(0).elements[ObjID].length;
  for (counter=len; counter>Location; counter--)
  {
    Value = document.forms(0).elements[ObjID].options[counter-1].value;
    Text2Insert  = document.forms(0).elements[ObjID].options[counter-1].text;
    document.forms(0).elements[ObjID].options[counter] = new Option(Text2Insert, Value);
  }
}
function GetLocation(ObjID, Value)
{
  total=document.forms(0).elements[ObjID].length;
  for (pp=0; pp<total; pp++)
     if (document.forms(0).elements[ObjID].options[pp].text == "---"+Value+"---")
     { return (pp);
       break;
     }
  return (-1);
}

function GetObjID(ObjName)
{
  for (var ObjID=0; ObjID < document.forms(0).elements.length; ObjID++)
    if ( document.forms(0).elements[ObjID].name == ObjName )
    {  return(ObjID);
       break;
    }
  return(-1);
}
function ToSubmit()
{
//  if (CheckOK)
//  {
    SelectTotal('jobarea[]');
    SelectTotal('industrytype[]');
    SelectTotal('funtype[]');
//  }
}
function SelectTotal(ObjName)
{
  ObjID = GetObjID(ObjName);
  if (ObjID != -1)
  { for (i=0; i<document.forms(0).elements[ObjID].length; i++)
      document.forms(0).elements[ObjID].options[i].selected = true;
  }
}
//function AddItem(ObjName, DesName)
//{
////	GET OBJECT ID AND DESTINATION OBJECT
//  ObjID    = GetObjID(ObjName);
//  DesObjID = GetObjID(DesName);
//  i = document.forms(0).elements[ObjID].options.length;
//  if (i==0)
//    return;
//
//}


function AddItem(ObjName, DesName, CatName)
{
  //GET OBJECT ID AND DESTINATION OBJECT
  ObjID    = GetObjID(ObjName);
  DesObjID = GetObjID(DesName);
//  window.alert(document.forms(0).elements[DesObjID].length);
  k=0;
  i = document.forms(0).elements[ObjID].options.length;

  if (i==0)
    return;
  maxselected=0
  for (h=0; h<i; h++)
     if (document.forms(0).elements[ObjID].options[h].selected ) {

         k=k+1;
         maxselected=h+1;
         }
  if (maxselected>=i)
     maxselected=0;
//  if ( document.forms(0).elements[DesObjID].length + k >5 ) {
//    window.alert("最多可选择5条");
//    return;
//    }

  if (CatName != "")
    CatObjID = GetObjID(CatName);
  else
    CatObjID = 0;
  if ( ObjID != -1 && DesObjID != -1 && CatObjID != -1 )
  { jj = document.forms(0).elements[CatObjID].selectedIndex;
    if ( CatName != "")
    { CatValue = document.forms(0).elements[CatObjID].options[jj].text;
      CatCode  = document.forms(0).elements[CatObjID].options[jj].value;
    }
    else
      CatValue = "";
    i = document.forms(0).elements[ObjID].options.length;
    j = document.forms(0).elements[DesObjID].options.length;
    for (h=0; h<i; h++)
    { if (document.forms(0).elements[ObjID].options[h].selected )
      {  Code = document.forms(0).elements[ObjID].options[h].value;
         Text = document.forms(0).elements[ObjID].options[h].text;
         j = document.forms(0).elements[DesObjID].options.length;
         if (Text.indexOf('--')!=-1) {
            for (k=j-1; k>=0; k-- ) {
              document.forms(0).elements[DesObjID].options[k]=null;
            }
            j=0;
         }
         if (Text.substring(0,1)=='-' && Text.substring(1,2)!='-') {
            for (k=j-1; k>=0; k-- ) {
              if (((document.forms(0).elements[DesObjID].options[k].value).substring(0,2))==(Code.substring(0,2)))
                 document.forms(0).elements[DesObjID].options[k]=null;
            }
            j= document.forms(0).elements[DesObjID].options.length;
         }
         HasSelected = false;
         for (k=0; k<j; k++ ) {
           if ((document.forms(0).elements[DesObjID].options[k].text).indexOf('--')!=-1){
              HasSelected = true;
              window.alert('已经包括本选项：'+Text);
              break;
           }else if ((document.forms(0).elements[DesObjID].options[k].text).indexOf('-')!=-1 && ((document.forms(0).elements[DesObjID].options[k].value).substring(0,2)==Code.substring(0,2))){
              HasSelected = true;
              window.alert('已经包括本选项：'+Text);
              break;
           }
           if (document.forms(0).elements[DesObjID].options[k].value == Code)
           {  HasSelected = true;
              break;
           }
         }
         if ( HasSelected == false)
         { if (CatValue !="")
           { Location = GetLocation(DesObjID, CatValue);
             if ( Location == -1 )
             { document.forms(0).elements[DesObjID].options[j] =  new Option("---"+CatValue+"---",CatCode);
               document.forms(0).elements[DesObjID].options[j+1] = new Option(Text, Code);
             }//if
             else
             { InsertItem(DesObjID, Location+1);
               document.forms(0).elements[DesObjID].options[Location+1] = new Option(Text, Code);
             }//else
           }
           else
             document.forms(0).elements[DesObjID].options[j] = new Option(Text, Code);
         }//if
         document.forms(0).elements[ObjID].options[h].selected =false;
       }//if
    }//for
    document.forms(0).elements[ObjID].options[maxselected].selected =true;
  }//if
}//end of function

function DeleteItem(ObjName)
{
  ObjID = GetObjID(ObjName);
  minselected=0;
  if ( ObjID != -1 )
  {
    for (i=document.forms(0).elements[ObjID].length-1; i>=0; i--)
    {  if (document.forms(0).elements[ObjID].options[i].selected)
       { // window.alert(i);
          if (minselected==0 || i<minselected)
            minselected=i;
          document.forms(0).elements[ObjID].options[i] = null;
       }
    }
    i=document.forms(0).elements[ObjID].length;

    if (i>0)  {
        if (minselected>=i)
           minselected=i-1;
        document.forms(0).elements[ObjID].options[minselected].selected=true;
        }
  }

}