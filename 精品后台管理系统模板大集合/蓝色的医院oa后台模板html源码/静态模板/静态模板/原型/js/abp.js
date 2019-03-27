 var dataXMLDOC ;
function backinput(form,infostr)
{
	var array = new Array();
	array = infostr.split("^");
	//已经得到这些变量
  	var personid=array[0];//人员id
  	var strname=array[1]; //人员姓名
  	var sex=array[2]; //人员性别
  	var idNum=array[3];//身份证号
  	var edu=array[4];//学历
  	var birthday = array[5];//出生年月
  	var polface = array[6];//政治面貌
  	var level = array[7];//字职别
  	var holdpostDate = array[8];//任职日期
  	var workDate = array[9];//参加工作时间
  	var partyDate = array[10];//入党时间
    var inRank = array[11];//对内身份
  	var outStation = array[12];//对外身份
  	var unit = array[13];//单位
    var unitid = array[14];//单位
    var makeclasstime = array[15];//定级时间
    var folk = array[16];//民族
    var school = array[17];//毕业院校
    var degree = array[18];//学位
    var enterDeptTime = array[19];//入部时间
    var address = array[20];//家庭住址
    var foreignLanguage = array[21];//外语
    if(personid != null && personid != "" && personid != "null")
    {
    	form.personID.value = personid;
    }
  	if(strname != null && strname != "" && strname != "null"){
  		form.name.value = strname;
  	}else{
  		form.name.value = "";
  	}
  	if(outStation != null && outStation != "" && outStation != "null"){
  		//var ss=getShowValue("107",outStation);
  		var ss=getShowValueByCode(outStation);
  		form.outStation.code = outStation;
  		form.outStation.value = ss;
  	}else
  	{
  		form.outStation.value = "";
  	}
  	if(inRank != null && inRank != "" && inRank != "null"){
  		var ss=getShowValueByCode(inRank);
  		form.inStation.value = ss;
  		form.inStation.code = inRank;
  	}
  	if(sex != null && sex != "" && sex != "null"){
  		var ss=getShowValueByCode(sex);
  		form.sex.value=ss;
  		form.sex.code=sex;
  	}
  	if(idNum != null && idNum != "" && idNum != "null"){
  		form.identityNumber.value=idNum;
  	}
  	if(birthday != null && birthday != "" && birthday != "null"){
  		form.birthDate.value=birthday;
  	}
  	if(polface != null && polface != "" && polface != "null"){
  		var ss=getShowValueByCode(polface);
  		form.polFace.value=ss;
  		form.polFace.code=polface;
  	}
  	if(edu != null && edu != "" && edu != "null"){
  		var ss=getShowValueByCode(edu);
  		form.eduBg.value=ss;
  		form.eduBg.code=edu;
  	}
  	if(level != null && level != "" && level != "null"){
  		var ss=getShowValueByCode(level);
  		form.officialDegree.value=ss;
  		form.officialDegree.code=level;
  	}
  	if(holdpostDate != null && holdpostDate != "" && holdpostDate != "null"){
  		form.holdpostDate.value=holdpostDate;
  	}
  	if(workDate != null && workDate != "" && workDate != "null"){
  		form.jobDate.value=workDate;
  	}
  	if(partyDate != null && partyDate != "" && partyDate != "null"){
  		form.joinPartyDate.value=partyDate;
  	}
  	if(unitid != null && unitid != "" && unitid != "null"){
  		var ss=getShowValueByCode(unitid,true);
  		form.originalDep.value=ss;
  		form.originalDep.code=unitid;
  	}
  	if(makeclasstime != null && makeclasstime != "" && makeclasstime !="null"){
  		form.makeClassTime.value=makeclasstime;
  	}
    if(folk != null && folk != "" && folk !="null"){
  		form.folk.value=folk;
  	}
  	if(school != null && school != "" && school !="null"){
  		form.school.value=school;
  	}
  	if(degree != null && degree != "" && degree !="null"){
  		form.degree.value=degree;
  	}
  	if(enterDeptTime != null && enterDeptTime != "" && enterDeptTime !="null"){
  		form.joinDeptTime.value=enterDeptTime;
  	}
  	if(address != null && address != "" && address !="null"){

  		form.homeAddress.value=address;
  	}
  	 if(foreignLanguage != null && foreignLanguage != "" && foreignLanguage != "null")
    {
    	var ss=getShowValueByCode(foreignLanguage);
  		form.foreignLanguage.code = foreignLanguage;
  		form.foreignLanguage.value = ss;
    }

}
function backinputmate(form,infostr)
{
	var array = new Array();
	array = infostr.split("^");
	//已经得到这些变量
  	var personid=array[0];//人员id
  	var strname=array[1]; //人员姓名
  	var sex=array[2]; //人员性别
  	var idNum=array[3];//身份证号
  	var edu=array[4];//学历
  	var birthday = array[5];//出生年月
  	var polface = array[6];//政治面貌
  	var level = array[7];//字职别
  	var holdpostDate = array[8];//任职日期
  	var workDate = array[9];//参加工作时间
  	var partyDate = array[10];//入党时间
    var inRank = array[11];//对内身份
  	var outStation = array[12];//对外身份
  	var unit = array[13];//单位
    var unitid = array[14];//单位
    var makeclasstime = array[15];//定级时间
    var folk = array[16];//民族
    var school = array[17];//毕业院校
    var degree = array[18];//学位
    var enterDeptTime = array[19];//入部时间
    var address = array[20];//家庭住址
    var foreignLanguage = array[21];//外语
    var borrowUnit = array[22];//借调单位
    if(personid != null && personid != "" && personid != "null")
    {
    	form.personID.value = personid;
    }
  	if(strname != null && strname != "" && strname != "null"){
  		form.name.value = strname;
  	}else{
  		form.name.value = "";
  	}
  	if(outStation != null && outStation != "" && outStation != "null"){
  		//var ss=getShowValue("107",outStation);
  		var ss=getShowValueByCode(outStation);
  		form.outStation.code = outStation;
  		form.outStation.value = ss;
  	}else
  	{
  		form.outStation.value = "";
  	}
  	if(inRank != null && inRank != "" && inRank != "null"){
  		var ss=getShowValueByCode(inRank);
  		form.inStation.value = ss;
  		form.inStation.code = inRank;
  	}
  	if(sex != null && sex != "" && sex != "null"){
  		var ss=getShowValueByCode(sex);
  		form.sex.value=ss;
  		form.sex.code=sex;
  	}
  	if(idNum != null && idNum != "" && idNum != "null"){
  		form.identityNumber.value=idNum;
  	}
  	if(birthday != null && birthday != "" && birthday != "null"){
  		form.birthDate.value=birthday;
  	}
  	if(polface != null && polface != "" && polface != "null"){
  		var ss=getShowValueByCode(polface);
  		form.polFace.value=ss;
  		form.polFace.code=polface;
  	}
  	if(edu != null && edu != "" && edu != "null"){
  		var ss=getShowValueByCode(edu);
  		form.eduBg.value=ss;
  		form.eduBg.code=edu;
  	}
  	if(level != null && level != "" && level != "null"){
  		var ss=getShowValueByCode(level);
  		form.officialDegree.value=ss;
  		form.officialDegree.code=level;
  	}
  	if(holdpostDate != null && holdpostDate != "" && holdpostDate != "null"){
  		form.holdpostDate.value=holdpostDate;
  	}
  	if(workDate != null && workDate != "" && workDate != "null"){
  		form.jobDate.value=workDate;
  	}
  	if(partyDate != null && partyDate != "" && partyDate != "null"){
  		form.joinPartyDate.value=partyDate;
  	}
  	if(borrowUnit != null && borrowUnit != "" && borrowUnit != "null"){
  		form.originalDep.value=borrowUnit;  		
  	}
  	if(makeclasstime != null && makeclasstime != "" && makeclasstime !="null"){
  		form.makeClassTime.value=makeclasstime;
  	}
    if(folk != null && folk != "" && folk !="null"){
  		form.folk.value=folk;
  	}
  	if(school != null && school != "" && school !="null"){
  		form.school.value=school;
  	}
  	if(degree != null && degree != "" && degree !="null"){
  		form.degree.value=degree;
  	}
  	if(enterDeptTime != null && enterDeptTime != "" && enterDeptTime !="null"){
  		form.joinDeptTime.value=enterDeptTime;
  	}
  	if(address != null && address != "" && address !="null"){

  		form.homeAddress.value=address;
  	}
  	 if(foreignLanguage != null && foreignLanguage != "" && foreignLanguage != "null")
    {
    	var ss=getShowValueByCode(foreignLanguage);
  		form.foreignLanguage.code = foreignLanguage;
  		form.foreignLanguage.value = ss;
    }

}
function fPopUpCalendarDlgOWC(){
	showx = event.screenX - event.offsetX -160//+ 25; // + deltaX;
	showy = event.screenY - event.offsetY + 18; // + deltaY;
	retval = window.showModalDialog("/js/CalendarDlg.htm", "", "dialogWidth:195px; dialogHeight:230px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no;" );
	var activecell = sheet.ActiveCell;
	if( retval != null ){
		activecell.value = "'"+retval;
	}else{
		//alert("canceled");
	}
}
function fPopUpCalendarDlgOWC(row,col){
	showx = 200//window.event.screenX - window.event.offsetX -160//+ 25; // + deltaX;
	showy = 300//window.event.screenY - window.event.offsetY + 18; // + deltaY;
	owcretval = window.showModalDialog("/js/CalendarDlg.htm", "", "dialogWidth:195px; dialogHeight:230px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no;" );
 	if( owcretval != null ){
		sheet.Activesheet.Cells(row,col).value = "'"+owcretval;		
	}else{
		//alert("canceled");
	}
}
function fPopUpCalendarDlgOWCChn(row,col){
	showx = 200//window.event.screenX - window.event.offsetX -160//+ 25; // + deltaX;
	showy = 300//window.event.screenY - window.event.offsetY + 18; // + deltaY;
	owcretval = window.showModalDialog("/js/CalendarDlgChn.htm", "", "dialogWidth:195px; dialogHeight:230px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no;" );
 	if( owcretval != null ){
		sheet.Activesheet.Cells(row,col).value = "'"+owcretval;
	}else{
		//alert("canceled");
	} 	
}
function checkDateEarlier(strStart,strEnd)
{
    //如果有一个输入为空，则通过检验
    if (( strStart == "" ) || ( strEnd == "" ))
        return true;
    var arr1 = strStart.split("-");
    var arr2 = strEnd.split("-");
    var date1 = new Date(arr1[0],parseInt(arr1[1].replace(/^0/,""),10) - 1,arr1[2]);
    var date2 = new Date(arr2[0],parseInt(arr2[1].replace(/^0/,""),10) - 1,arr2[2]);
    if(arr1[1].length == 1)
        arr1[1] = "0" + arr1[1];
    if(arr1[2].length == 1)
        arr1[2] = "0" + arr1[2];
    if(arr2[1].length == 1)
        arr2[1] = "0" + arr2[1];
    if(arr2[2].length == 1)
        arr2[2]="0" + arr2[2];
    var d1 = arr1[0] + arr1[1] + arr1[2];
    var d2 = arr2[0] + arr2[1] + arr2[2];
    if(parseInt(d1,10) > parseInt(d2,10))
       return false;
    else
       return true;
}//~~~
function checkIsValidDate(str)
{
    //如果为空，则通过校验
    if(str == "")
        return true;
    var pattern = /^((\d{4})|(\d{2}))-(\d{1,2})-(\d{1,2})$/g;
    if(!pattern.test(str))
        return false;
    var arrDate = str.split("-");
    if(parseInt(arrDate[0],10) < 100)
        arrDate[0] = 2000 + parseInt(arrDate[0],10) + "";
    var date =  new Date(arrDate[0],(parseInt(arrDate[1],10) -1)+"",arrDate[2]);
    if(date.getYear() == arrDate[0]
       && date.getMonth() == (parseInt(arrDate[1],10) -1)+""
       && date.getDate() == arrDate[2])
        return true;
    else
        return false;
}//~~~
/**
*校验字符串是否为整型
*返回值：
*如果为空，定义校验通过，      返回true
*如果字串全部为数字，校验通过，返回true
*如果校验不通过，              返回false     参考提示信息：输入域必须为数字！
*/
function checkIsInteger(str)
{
    //如果为空，则通过校验
    if(str == "")
        return true;
    if(/^(\-?)(\d+)$/.test(str))
        return true;
    else
        return false;
}//~~~