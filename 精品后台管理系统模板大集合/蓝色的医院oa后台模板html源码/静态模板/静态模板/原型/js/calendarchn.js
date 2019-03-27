/**
 * <p>Title: calendar_left.js</p>
 * <p>Description: 显示一个小日历，用于选择日期的弹出窗口 </p>
 * <p>Copyright: Copyright (c) 2002</p>
 * <p>Company: Timeless</p>
 * @author lewis.liu
 * @date  2002/5/20
 * @version 1.0
 */

var gdCtrl = new Object();
var goSelectTag = new Array();
var gcGray = "#808080";        //在日历中如果不是该月的日子用此变量定义的颜色表示
var gcToggle = "#FFF6B7";      //定义当鼠标经过的时候颜色变成什么颜色
var gcBG = "#FFFFFF";       //日历的背景颜色
var previousObject = null;

var gdCurDate = new Date();     //表示当前日期的日期型变量
var giYear = gdCurDate.getFullYear();     //表示当前年份的数值
var giMonth = gdCurDate.getMonth()+1;	  //表示当前月份的数值
var giDay = gdCurDate.getDate();          //表示当前日子的数值

var gCalMode = "";
var gCalDefDate = "";

var CAL_MODE_NOBLANK = "2";

/*
	给打开日历窗口的主窗口传回最后选择的日期字符串
	@iYear		年份参数
	@iMonth		月份参数
	@iDay		日子参数
*/
function fSetDate(iYear, iMonth, iDay){
  //VicPopCal.style.visibility = "hidden";
  if ((iYear == 0) && (iMonth == 0) && (iDay == 0)){
  	gdCtrl.value = "";
  }else{
  	//通过加上100形成统一的标准格式，如1988-07-08。
  	iMonth = iMonth + 100 + "";
  	iMonth = iMonth.substring(1);
  	iDay   = iDay + 100 + "";
  	iDay   = iDay.substring(1);
  	gdCtrl.value = iYear+"年"+iMonth+"月"+iDay+"日";
  }

  for (i in goSelectTag)
  	goSelectTag[i].style.visibility = "visible";
  goSelectTag.length = 0;

  window.returnValue=gdCtrl.value;
  window.close();
}

function HiddenDiv()
{
	var i;
  VicPopCal.style.visibility = "hidden";
  for (i in goSelectTag)
  	goSelectTag[i].style.visibility = "visible";
  goSelectTag.length = 0;
}


function fSetSelected(aCell){
  var iOffset = 0;
  var iYear = parseInt(tbSelYear.value);
  var iMonth = parseInt(tbSelMonth.value);

  aCell.bgColor = gcBG;
  with (aCell.children["cellText"]){
  	var iDay = parseInt(innerText);
  	if (color==gcGray)
		iOffset = (Victor<10)?-1:1;

	/*** below temp patch by maxiang ***/
	if( color == gcGray ){
		iOffset = (iDay < 15 )?1:-1;
	}
	/*** above temp patch by maxiang ***/

	iMonth += iOffset;
	if (iMonth<1) {
		iYear--;
		iMonth = 12;
	}else if (iMonth>12){
		iYear++;
		iMonth = 1;
	}
  }
  fSetDate(iYear, iMonth, iDay);
}

function Point(iX, iY){
	this.x = iX;
	this.y = iY;
}

function fBuildCal(iYear, iMonth) {
  var aMonth=new Array();
  for(i=1;i<7;i++)
  	aMonth[i]=new Array(i);

  var dCalDate=new Date(iYear, iMonth-1, 1);
  var iDayOfFirst=dCalDate.getDay();
  var iDaysInMonth=new Date(iYear, iMonth, 0).getDate();
  var iOffsetLast=new Date(iYear, iMonth-1, 0).getDate()-iDayOfFirst+1;
  var iDate = 1;
  var iNext = 1;

  for (d = 0; d < 7; d++)
	aMonth[1][d] = (d<iDayOfFirst)?-(iOffsetLast+d):iDate++;
  for (w = 2; w < 7; w++)
  	for (d = 0; d < 7; d++)
		aMonth[w][d] = (iDate<=iDaysInMonth)?iDate++:-(iNext++);
  return aMonth;
}

/*
	此方法画出日历的框架。在使用该方法画出的日历时需要在前面加上<table>及其参数，在后面加上</table>
	@iYear	年份
	@iMonth		月份
	@iCellHeight	单元格高度
	@sDateTextSize	日期长度
*/
function fDrawCal(iYear, iMonth, iCellHeight, sDateTextSize) {
  var WeekDay = new Array("日","一","二","三","四","五","六");
  var styleTD = " bordercolor='#e6e6e6' valign='middle' align='center' width='14%' style='font-size:9pt; ";

  with (document) {
	write("<tr>");
	for(i=0; i<7; i++)
		write("<td "+styleTD+" color:#000000' >" + WeekDay[i] + "</td>");
	write("</tr>");

  	for (w = 1; w < 7; w++) {
		write("<tr>");
		for (d = 0; d < 7; d++) {
			write("<td id=calCell "+styleTD+"cursor:hand;' onMouseOver='this.bgColor=gcToggle' onMouseOut='this.bgColor=gcBG' onclick='fSetSelected(this)'>");
			write("<font id=cellText ><b> </b></font>");
			write("</td>")
		}
		write("</tr>");
	}
  }
}

/*
	此方法更新日历框架中的日期，根据输入的年份和月份，在表格中填上日期
	@iYear	年份
	@iMonth		月份
*/
function fUpdateCal(iYear, iMonth) {
  myMonth = fBuildCal(iYear, iMonth);
  var i = 0;
  for (w = 0; w < 6; w++)
	for (d = 0; d < 7; d++)
		with (cellText[(7*w)+d]) {
			Victor = i++;
			if (myMonth[w+1][d]<0) {
				color = gcGray;
				innerText = -myMonth[w+1][d];
			}else{
				if( d == 0 ){
					color = "red";
				}else if( d == 6 ){
					color = "red";
				}else{
					color = "black";
				}
				innerText = myMonth[w+1][d];
			}
		}
}

/*
	此方法设置日历的年份和月份，并且根据输入的年份和月份更新日历中的日期数字
	@iYear		年份
	@iMon		月份
*/
function fSetYearMon(iYear, iMon){
  tbSelMonth.options[iMon-1].selected = true;
  for (i = 0; i < tbSelYear.length; i++)
	if (tbSelYear.options[i].value == iYear)
		tbSelYear.options[i].selected = true;
  fUpdateCal(iYear, iMon);
}

/*
	此方法使日历回退一个月，即显示前一个月的日历信息
*/
function fPrevMonth(){
  var iMon = tbSelMonth.value;
  var iYear = tbSelYear.value;

  if (--iMon<1) {
	  iMon = 12;
	  iYear--;
  }

  fSetYearMon(iYear, iMon);
}

/*
	此方法使日历前进一个月，即显示下一个月的日历信息
*/
function fNextMonth(){
  var iMon = tbSelMonth.value;
  var iYear = tbSelYear.value;

  if (++iMon>12) {
	  iMon = 1;
	  iYear++;
  }
  fSetYearMon(iYear, iMon);
}


function fToggleTags(){
  with (document.all.tags("SELECT")){
 	for (i=0; i<length; i++)
 		if ((item(i).Victor!="Won")&&fTagInBound(item(i))){
 			item(i).style.visibility = "hidden";
 			goSelectTag[goSelectTag.length] = item(i);
 		}
  }
}

function fTagInBound(aTag){
  with (VicPopCal.style){
  	var l = parseInt(left);
  	var t = parseInt(top);
  	var r = l+parseInt(width);
  	var b = t+parseInt(height);
	var ptLT = fGetXY(aTag);
	return !((ptLT.x>r)||(ptLT.x+aTag.offsetWidth<l)||(ptLT.y>b)||(ptLT.y+aTag.offsetHeight<t));
  }
}

function fGetXY(aTag){
  var oTmp = aTag;
  var pt = new Point(0,0);
  do {
  	pt.x += oTmp.offsetLeft;
  	pt.y += oTmp.offsetTop;
  	oTmp = oTmp.offsetParent;
  } while(oTmp.tagName!="BODY");
  return pt;
}

// Main: popCtrl is the widget beyond which you want this calendar to appear;
//       dateCtrl is the widget into which you want to put the selected date.
// i.e.: <input type="text" name="dc" style="text-align:center" readonly><INPUT type="button" value="V" onclick="fPopCalendar(dc,dc);return false">
function fPopCalendar(popCtrl, dateCtrl, mode, defDate){

	gCalMode = mode;
	gCalDefDate = defDate;

  if (popCtrl == previousObject){
	  	if (VicPopCal.style.visibility == "visible"){
  		//HiddenDiv();
  		return true;
  	}
  }
  previousObject = popCtrl;
  gdCtrl = dateCtrl;
  fSetYearMon(giYear, giMonth);
  var point = fGetXY(popCtrl);

	if( gCalMode == CAL_MODE_NOBLANK ){
		document.all.CAL_B_BLANK.style.visibility = "hidden";
	}else{
		document.all.CAL_B_BLANK.style.visibility = "visible";
	}

  with (VicPopCal.style) {
  	left = point.x;
	top  = point.y+popCtrl.offsetHeight;
	width = VicPopCal.offsetWidth;
	height = VicPopCal.offsetHeight;
	fToggleTags(point);
	visibility = 'visible';
  }
}

var gMonths = new Array("1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月");

with (document) {
write("<Div id='VicPopCal' style='OVERFLOW:hidden;POSITION:absolute;VISIBILITY:hidden;border:0px ridge;width:100%;height:100%;top:0;left:0;z-index:100;overflow:hidden'>");
write("<table border='0' bgcolor='#ffffff'>");
write("<TR>");
write("<td valign='middle' align='center'><input type='image' src='../images/btn_l.gif' align='absmiddle' name='PrevMonth' onClick='fPrevMonth()'>");
write("&nbsp;<SELECT name='tbSelYear' onChange='fUpdateCal(tbSelYear.value, tbSelMonth.value)' Victor='Won'>");
for(i=1900;i<2051;i++)
	write("<OPTION value='"+i+"'>"+i+"年</OPTION>");
write("</SELECT>");
write("&nbsp;<select name='tbSelMonth' onChange='fUpdateCal(tbSelYear.value, tbSelMonth.value)' Victor='Won'>");
for (i=0; i<12; i++)
	write("<option value='"+(i+1)+"'>"+gMonths[i]+"</option>");
write("</SELECT>");
write("&nbsp;<input type='image' src='../images/btn_r.gif' align='absmiddle' name='PrevMonth' onclick='fNextMonth()'>");
write("</td>");
write("</TR><TR>");
write("<td align='center'>");
write("<DIV style='background-color:#ffffff'><table width='100%' border='0'>");
fDrawCal(giYear, giMonth, 8, '12');
write("</table></DIV>");
write("</td>");
write("</TR><TR><TD align='center'>");
write("<TABLE width='100%'><TR><TD align='center'>");
write("<B ID='CAL_B_BLANK' style='color:\"#ff6600\";visibility:visible;cursor:hand;font-size:12px' onClick='fSetDate(0,0,0)' onMouseOver='this.style.color=\"#000000\"' onMouseOut='this.style.color=\"#ff6600\"'>清空</B>");
write("</td><td algin='center'>");
write("<B style='color:\"#ff6600\"; cursor:hand; font-size:12px' onClick='fSetDate(giYear,giMonth,giDay)' onMouseOver='this.style.color=\"#000000\"' onMouseOut='this.style.color=\"#ff6600\"'>选择: "+giYear+"年"+giMonth+"月"+giDay+"日</B>");
write("</td></tr></table>");
write("</TD></TR>");
write("</TABLE></Div>");

}