/***********************************************************
 说明：对SELECT操作的函数

 作者：王中涛  2004-10-19
***********************************************************/


function SelectOption(strCodeType, blnIfShowUnvisible, objSource, objTarget, strSelectedValues, strDefaultValue, strDefaultText)
{
	var intLvl = 2; //暂时就支持两级
	
 	var Code_CodeId = eval(strCodeType + '_CodeId');
 	var Code_Lvl = eval(strCodeType + '_Lvl');
 	var Code_ParentId = eval(strCodeType + '_ParentId');
 	var Code_IsVisible = eval(strCodeType + '_IsVisible');
 	var Code_Value = eval(strCodeType + '_CodeValue');
	
 	val=objSource.value;	
	
  
 	clear(objTarget);
  			
 	var blnFlag;
  			
 	for (var i = 0; i< Code_CodeId.length; i++)
 	{
 		blnFlag = false;
  			
 		if (Code_CodeId[i] == val)
 		{
 			if (Code_Lvl[i] == intLvl - 1)
 				if (',30000,31000,32000,33000,34000,35000,36000,37000,38000,41000,39000,40000,42000,'.indexOf(',' + Code_CodeId[i] + ',', 0) >= 0)
 					blnFlag = false;
 				else
 					blnFlag = true;
 		}
 		else if (Code_ParentId[i] == val)
 		{
 			if (Code_Lvl[i] == intLvl)
 				blnFlag = true;
 		}
  					
 		if (blnFlag == true)
 		{
 			if (blnIfShowUnvisible == false)
 				if (Code_IsVisible[i] == 0)
 					blnFlag = false;
 		}
  				
 		if (blnFlag == true)
 			fullup_P(objTarget, Code_Value[i], Code_CodeId[i]);
 	}

 	if (objTarget.length == 0)
 		if (strDefaultValue.length > 0)
 			fullup_P(objTarget, strDefaultText, strDefaultValue);
 	
 	if (strSelectedValues.length > 0)
 	{
 		strSelectedValues = ',' + strSelectedValues + ',';

 		for (var i = 0; i < objTarget.length; i++)
 			if (strSelectedValues.indexOf(',' + objTarget.options[i].value + ',', 0) >= 0)
 				objTarget.options[i].selected = true;

 	}
 }

function AddOption(strCodeType, objSource, objTarget, intMaxNumber)
{
	var blnFlag;
	
 	for(var x = 0;x < objSource.length; x++)
 	{
		var  opt  = objSource.options[x];
		if (opt.selected)
		{
			blnFlag = true;
			var y = 0;
			
			while (y < objTarget.length)
			{
				if (opt.value == objTarget.options[y].value)
				{
					blnFlag = false;
					break;
				}

				// 如果 objTarget 中有当前项的父类，则不再添加
				if (GetParentId(strCodeType, opt.value) == objTarget.options[y].value)
				{
					blnFlag = false;
					break;
				}
				
				//如果 objTarget 中有当前项的子类，则删除子类再添加当前项
				if (opt.value == GetParentId(strCodeType, objTarget.options[y].value))
				{
					objTarget.options[y].selected = true;
					DelOption(objTarget);
					
					y = -1;
				}
				
				y++;
			}
			
			if (blnFlag == true)   // 添加当前项
				fullup_P(objTarget, DelDelimiter(opt.text), opt.value);
		}
	}
	
	//检查 objTarget 的选项个数，如果超出，则从后面删除
	if (intMaxNumber > 0)
	{
		var intDiff = objTarget.length - intMaxNumber;
		if (intDiff > 0)
		{
			for (var x = 0; x < intDiff; x++)
				objTarget.options[objTarget.length - 1] = null;
				
			window.alert('最多只能选择5项！');
		}
	}
}

function DelOption(objSource)
{
  for(var x = objSource.length - 1;x >= 0;x--)
  {
		var  opt  = objSource.options[x];
		if (opt.selected)
			objSource.options[x] = null;
  }
}

function CheckMulSelect(obj, maxNum, minNum, txtTitle)
{
  if(obj.multiple)
  {
		var  optionNum=obj.length;
		if(maxNum!=0 &&  optionNum>maxNum)
		{
			alert('"'+txtTitle+'"  最多选择'+maxNum+'项！');
			obj.focus();
			return false;
		}
  
		if(minNum!=0 &&  optionNum<minNum &&  maxNum==0)
		{
			alert('"'+txtTitle+'"  最少选择'+minNum+'项！');
			obj.focus();
			return false;
		}
  
		return true;
	}
	else
  {
		if(obj.value==-1)
		{
			alert('"'+txtTitle+'"  必须选择！');
			obj.focus();
			return false;
		}
		else
			return true;
	}
}

function clear(obj1)
{
	len=obj1.length;

  for(i=len-1;i>=0;i--)
  	 obj1.options[i]=null;
}

function fullup_P(obj1,val1,val2)
{
	var vn = new Option(val1,val2); 
  obj1.add(vn);
}

function fullup(obj1,val)
{
	var vn = new Option(val,val); 
	obj1.add(vn);
}

function sel(val,obj1)
{
	for(i=0;i<obj1.length;i++)
	{
		if(obj1[i]==val)
		{
  			return i;
  	}
  }
  
  if (i==obj1.length) return 0;
 }
 
function GetParentId(strCodeType, strCodeId)
{
	var strBackValue = '';
	
	var Code_CodeId = eval(strCodeType + '_CodeId');
 	var Code_ParentId = eval(strCodeType + '_ParentId');
 	
 	for (var i = 0; i< Code_CodeId.length; i++)
 	{
 		if (Code_CodeId[i] == strCodeId)
 		{
 			strBackValue = Code_ParentId[i];
 			
 			break;
 		}
 	}
 	
 	return strBackValue;
}

function DelDelimiter(strInput)
{
	if (strInput.indexOf('-- ', 0) > -1)
		return strInput.substring(3, strInput.length);
	else
		return strInput;
}