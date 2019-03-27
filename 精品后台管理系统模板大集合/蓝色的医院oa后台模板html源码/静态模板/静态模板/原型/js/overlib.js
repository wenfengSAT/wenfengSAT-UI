////////////////////////////////////////////////////////////////////////////////////
// CONFIGURATION
////////////////////////////////////////////////////////////////////////////////////

// 主背景色（大区域）
// 通常使用明快的颜色（浅黄色等...）
	if (typeof fcolor == 'undefined') { var fcolor = "ffffff";}
	
// Border的颜色和标题栏的颜色；
// 通常的颜色深（褐色，黑色等。）
	if (typeof backcolor == 'undefined') { var backcolor = "#CDCDCD";}
	
	
// 文字的颜色
// 通常是比较深的颜色；
	if (typeof textcolor == 'undefined') { var textcolor = "#999900";}
	
// 标题的颜色
// 通常是明快的颜色；
	if (typeof capcolor == 'undefined') { var capcolor = "#FFFFFF";}
	
// "Close"的颜色
// 通常是明快的颜色；
	if (typeof closecolor == 'undefined') { var closecolor = "#9999FF";}
	
	
// 弹出的窗口的宽度；
// 100-300 pixels 合适
	if (typeof width == 'undefined') { var width = "90";}
	
// 边缘的宽度，象素。
// 1-3 pixels 合适
	if (typeof border == 'undefined') { var border = "1";}
	
	
// 弹出窗口位于鼠标左侧或者右侧的距离，象素。
// 3-12合适
	if (typeof offsetx == 'undefined') { var offsetx = 10;}
	
// 弹出窗口位于鼠标下方的距离；
// 3-12 合适
	if (typeof offsety == 'undefined') { var offsety = 10;}
	
////////////////////////////////////////////////////////////////////////////////////
// 设置结束
////////////////////////////////////////////////////////////////////////////////////

ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false

// Microsoft Stupidity Check.
if (ie4) {
	if (navigator.userAgent.indexOf('MSIE 5')>0) {
		ie5 = true;
	} else {
		ie5 = false; }
} else {
	ie5 = false;
}

var x = 0;
var y = 0;
var snow = 0;
var sw = 0;
var cnt = 0;
var dir = 1;
var tr=1;
if ( (ns4) || (ie4) ) {
	if (ns4) over = document.overDiv
	if (ie4) over = overDiv.style
	document.onmousemove = mouseMove
	if (ns4) document.captureEvents(Event.MOUSEMOVE)
}

// 以下是页面中使用的公共函数；

// Simple popup right
function drs(text) {
	dts(1,text);
}


// Clears popups if appropriate
function nd() {
	if ( cnt >= 1 ) { sw = 0 };
	if ( (ns4) || (ie4) ) {
		if ( sw == 0 ) {
			snow = 0;
			hideObject(over);
		} else {
			cnt++;
		}
	}
}

// 非公共函数，被其它的函数调用；

// Simple popup
function dts(d,text) {
	txt = "<TABLE WIDTH="+width+" BORDER=0 CELLPADDING="+border+" CELLSPACING=0 BGCOLOR=\""+backcolor+"\"><TR><TD><TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 BGCOLOR=\""+fcolor+"\"><TR><TD CLASS=P1><FONT FACE=\"宋体\" COLOR=\""+textcolor+"\">"+text+"</FONT></TD></TR></TABLE></TD></TR></TABLE>"
	layerWrite(txt);
	dir = d;
	disp();
}



// Common calls
function disp() {
	if ( (ns4) || (ie4) ) {
		if (snow == 0) 	{
			if (dir == 2) { // Center
				moveTo(over,x+offsetx-(width/2),y+offsety);
			}
			if (dir == 1) { // Right
				moveTo(over,x+offsetx,y+offsety);
			}
			if (dir == 0) { // Left
				moveTo(over,x-offsetx-width,y+offsety);
			}
			showObject(over);
			snow = 1;
		}
	}
// Here you can make the text goto the statusbar.
}

// Moves the layer
function mouseMove(e) {
	if (ns4) {x=e.pageX; y=e.pageY;}
	if (ie4) {x=event.x; y=event.y;}
	if (ie5) {x=event.x+document.body.scrollLeft; y=event.y+document.body.scrollTop;}
	if (snow) {
		if (dir == 2) { // Center
			moveTo(over,x+offsetx-(width/2),y+offsety);
		}
		if (dir == 1) { // Right
			moveTo(over,x+offsetx,y+offsety);
		}
		if (dir == 0) { // Left
			moveTo(over,x-offsetx-width,y+offsety);
		}
	}
}

// The Close onMouseOver function for Sticky
function cClick() {
	hideObject(over);
	sw=0;
}

// Writes to a layer
function layerWrite(txt) {
        if (ns4) {
                var lyr = document.overDiv.document
                lyr.write(txt)
                lyr.close()
        }
        else if (ie4) document.all["overDiv"].innerHTML = txt
		if (tr) {  }
}

// Make an object visible
function showObject(obj) {
        if (ns4) obj.visibility = "show"
        else if (ie4) obj.visibility = "visible"
}

// Hides an object
function hideObject(obj) {
        if (ns4) obj.visibility = "hide"
        else if (ie4) obj.visibility = "hidden"
}

// Move a layer
function moveTo(obj,xL,yL) {
        obj.left = xL
        obj.top = yL
}

