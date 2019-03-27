  var po_ca_show = new Array();
  var po_ca_value = new Array();
  var po_detail_show = new Array();
  var po_detail_value = new Array();
  var funtype1;

po_ca_show[0]='员工倒班组';
po_ca_value[0]='0100';
po_detail_show[0]=new Array();
po_detail_value[0]=new Array();
po_detail_show[0][0]='张小明';
po_detail_value[0][0]='0100';
po_detail_show[0][1]='李靖';
po_detail_value[0][1]='0101';
po_detail_show[0][2]='刘小小';
po_detail_value[0][2]='0102';
po_ca_show[1]='员工夜班组';
po_ca_value[1]='0200';
po_detail_show[1]=new Array();
po_detail_value[1]=new Array();
po_detail_show[1][0]='王江';
po_detail_value[1][0]='0200';
po_detail_show[1][1]='常江';
po_detail_value[1][1]='0201';
function Do_po_Change(form){
        var num,n, i, m;
        num= GetObjID('d_position1');
        m = document.powersearch.elements[num].selectedIndex-1;
        n = document.powersearch.elements[num + 1].length;
        for(i = n - 1; i >= 0; i--)
                document.powersearch.elements[num + 1].options[i] = null;

        if (m>=0) {
        for(i = 0; i < po_detail_show[m].length; i++){
                NewOptionName = new Option(po_detail_show[m][i], po_detail_value[m][i]);
                document.powersearch.elements[num + 1].options[i] = NewOptionName;
        }
        document.powersearch.elements[num + 1].options[0].selected = true;
        }
}

function InsertItem(ObjID, Location)
{
  len=document.powersearch.elements[ObjID].length;
  for (counter=len; counter>Location; counter--)
  {
    Value = document.powersearch.elements[ObjID].options[counter-1].value;
    Text2Insert  = document.powersearch.elements[ObjID].options[counter-1].text;
    document.powersearch.elements[ObjID].options[counter] = new Option(Text2Insert, Value);
  }
}
function GetLocation(ObjID, Value)
{
  total=document.powersearch.elements[ObjID].length;
  for (pp=0; pp<total; pp++)
     if (document.powersearch.elements[ObjID].options[pp].text == "---"+Value+"---")
     { return (pp);
       break;
     }
  return (-1);
}

function GetObjID(ObjName)
{
  for (var ObjID=0; ObjID < window.powersearch.elements.length; ObjID++)
    if ( window.powersearch.elements[ObjID].name == ObjName )
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
  { for (i=0; i<document.powersearch.elements[ObjID].length; i++)
      document.powersearch.elements[ObjID].options[i].selected = true;
  }
}
function AddItem(ObjName, DesName, CatName)
{
  //GET OBJECT ID AND DESTINATION OBJECT
  ObjID    = GetObjID(ObjName);
  DesObjID = GetObjID(DesName);
//  window.alert(document.powersearch.elements[DesObjID].length);
  k=0;
  i = document.powersearch.elements[ObjID].options.length;
  if (i==0)
    return;
  maxselected=0
  for (h=0; h<i; h++)
     if (document.powersearch.elements[ObjID].options[h].selected ) {
         k=k+1;
         maxselected=h+1;
         }
  if (maxselected>=i)
     maxselected=0;
  if ( document.powersearch.elements[DesObjID].length + k >5 ) {
    window.alert("最多可选择5条");
    return;
    }

  if (CatName != "")
    CatObjID = GetObjID(CatName);
  else
    CatObjID = 0;
  if ( ObjID != -1 && DesObjID != -1 && CatObjID != -1 )
  { jj = document.powersearch.elements[CatObjID].selectedIndex;
    if ( CatName != "")
    { CatValue = document.powersearch.elements[CatObjID].options[jj].text;
      CatCode  = document.powersearch.elements[CatObjID].options[jj].value;
    }
    else
      CatValue = "";
    i = document.powersearch.elements[ObjID].options.length;
    j = document.powersearch.elements[DesObjID].options.length;
    for (h=0; h<i; h++)
    { if (document.powersearch.elements[ObjID].options[h].selected )
      {  Code = document.powersearch.elements[ObjID].options[h].value;
         Text = document.powersearch.elements[ObjID].options[h].text;
         j = document.powersearch.elements[DesObjID].options.length;
         if (Text.indexOf('--')!=-1) {
            for (k=j-1; k>=0; k-- ) {
              document.powersearch.elements[DesObjID].options[k]=null;
            }
            j=0;
         }
         if (Text.substring(0,1)=='-' && Text.substring(1,2)!='-') {
            for (k=j-1; k>=0; k-- ) {
              if (((document.powersearch.elements[DesObjID].options[k].value).substring(0,2))==(Code.substring(0,2)))
                 document.powersearch.elements[DesObjID].options[k]=null;
            }
            j= document.powersearch.elements[DesObjID].options.length;
         }
         HasSelected = false;
         for (k=0; k<j; k++ ) {
           if ((document.powersearch.elements[DesObjID].options[k].text).indexOf('--')!=-1){
              HasSelected = true;
              window.alert('已经包括本选项：'+Text);
              break;
           }else if ((document.powersearch.elements[DesObjID].options[k].text).indexOf('-')!=-1 && ((document.powersearch.elements[DesObjID].options[k].value).substring(0,2)==Code.substring(0,2))){
              HasSelected = true;
              window.alert('已经包括本选项：'+Text);
              break;
           }
           if (document.powersearch.elements[DesObjID].options[k].value == Code)
           {  HasSelected = true;
              break;
           }
         }
         if ( HasSelected == false)
         { if (CatValue !="")
           { Location = GetLocation(DesObjID, CatValue);
             if ( Location == -1 )
             { document.powersearch.elements[DesObjID].options[j] =  new Option("---"+CatValue+"---",CatCode);
               document.powersearch.elements[DesObjID].options[j+1] = new Option(Text, Code);
             }//if
             else
             { InsertItem(DesObjID, Location+1);
               document.powersearch.elements[DesObjID].options[Location+1] = new Option(Text, Code);
             }//else
           }
           else
             document.powersearch.elements[DesObjID].options[j] = new Option(Text, Code);
         }//if
         document.powersearch.elements[ObjID].options[h].selected =false;
       }//if
    }//for
    document.powersearch.elements[ObjID].options[maxselected].selected =true;
  }//if
}//end of function

function DeleteItem(ObjName)
{
  ObjID = GetObjID(ObjName);
  minselected=0;
  if ( ObjID != -1 )
  {
    for (i=window.powersearch.elements[ObjID].length-1; i>=0; i--)
    {  if (window.powersearch.elements[ObjID].options[i].selected)
       { // window.alert(i);
          if (minselected==0 || i<minselected)
            minselected=i;
          window.powersearch.elements[ObjID].options[i] = null;
       }
    }
    i=window.powersearch.elements[ObjID].length;

    if (i>0)  {
        if (minselected>=i)
           minselected=i-1;
        window.powersearch.elements[ObjID].options[minselected].selected=true;
        }
  }
}