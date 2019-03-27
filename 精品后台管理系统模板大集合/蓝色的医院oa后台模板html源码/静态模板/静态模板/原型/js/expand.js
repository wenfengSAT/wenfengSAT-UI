//屏蔽鼠标右键
//document.oncontextmenu = contextmenu ;
function contextmenu ()
{
 event.returnValue = false ;
 return false ;
}
//点击展开
function changebg(aaa){
	var str=document.form1.kjs.value;
  ttt=eval(aaa+"a");
  if(str!="" && str!=aaa)  {
  kkk=eval(str+"a");
  kkk.all.tags( "FONT" )[0].className="b2";
	  }
  ttt.all.tags( "FONT" )[0].className="b1";
document.form1.kjs.value=aaa;
}
function otherfolder(thespan)
{
  thespan.style.display=(thespan.style.display=="none")?"inline":"none";
}
function onlyopenfolder(thespan)
{
  thespan.style.display=thespan.style.display="inline";
}
function onlyclosefolder(thespan)
{
  thespan.style.display=thespan.style.display="none";
}
function folder(thespan)
{
  thespan.style.display=(thespan.style.display=="none")?"inline":"none";
  if(thespan.style.display=="none"){
       eval("document.all.c"+thespan.id).style.display="inline";
       eval("document.all.o"+thespan.id).style.display="none";}
  else{
       eval("document.all.o"+thespan.id).style.display="inline";
       eval("document.all.c"+thespan.id).style.display="none";
       }
}

function mutifolder(thespan,boysoft)
{
 folder(thespan);
 toExit('hide',boysoft);
}
function mutifolder2(thespan,exitspan,boysoft)
{
 folder(thespan);
 exitspan.style.display = "none";
 toExit('hide',boysoft);
}
ie4=(document.all)?true:false;
ns4=(document.layers)?true:false;

function toExit(){
var args=toExit.arguments;
var visible=args[0];
if(ns4){
        theObj=eval("document.layers[\'"+args[1]+"\']");
        if(theObj)theObj.visibility=visible;
        }
else if(ie4){
        if(visible=='show')visible='visible';
        if(visible=='hide')visible='hidden';
        theObj=eval("document.all[\'"+args[1]+"\']");
        if(theObj)theObj.style.visibility=visible;
        }

}
function mutitoExit(thespan,boysoft)
{
  folder(thespan);
  toExit('show',boysoft);
}

//选择显示不同内容在同一位置
function secBoard(n)
{
  for(i=0;i<secTable.cells.length;i++)
    secTable.cells[i].className="sec1";
  secTable.cells[n].className="sec2";
  for(i=0;i<mainTable.tBodies.length;i++)
    mainTable.tBodies[i].style.display="none";
  mainTable.tBodies[n].style.display="block";
}

//打开新的窗口
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,'top=180,left=210,width=500,height=350,scrollbars=no');
}

function MM_openBrWindowOther(theURL,winName,features,width,hight,scrollbars,top,left) { //v2.0
  var parameter="top="+top+",left="+left+",width="+width+",height="+hight;
  if(scrollbars=="no")
 {parameter+=",scrollbars=no";}
  else
 {parameter+=",scrollbars=yes";}
  //alert(parameter);
  //window.open(theURL,winName,'top=80,left=100,width=750,height=550,scrollbars=no');
  window.open(theURL,winName,parameter);
}

function opennew(theURL,winName,features) { //v2.0
  window.open(theURL,winName,'top=220,left=210,width=280,height=300,scrollbars=no');
}