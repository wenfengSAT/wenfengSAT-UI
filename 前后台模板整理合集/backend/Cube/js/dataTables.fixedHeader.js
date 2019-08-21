var FixedHeader;(function(window,document,undefined){var factory=function($,DataTable){"use strict";FixedHeader=function(mTable,oInit){if(!this instanceof FixedHeader)
{alert("FixedHeader warning: FixedHeader must be initialised with the 'new' keyword.");return;}
var that=this;var oSettings={"aoCache":[],"oSides":{"top":true,"bottom":false,"left":0,"right":0},"oZIndexes":{"top":104,"bottom":103,"left":102,"right":101},"oCloneOnDraw":{"top":false,"bottom":false,"left":true,"right":true},"oMes":{"iTableWidth":0,"iTableHeight":0,"iTableLeft":0,"iTableRight":0,"iTableTop":0,"iTableBottom":0},"oOffset":{"top":0},"nTable":null,"bFooter":false,"bInitComplete":false};if($('body').hasClass('fixed-header')){oSettings.oOffset.top=50;}
this.fnGetSettings=function(){return oSettings;};this.fnUpdate=function(){this._fnUpdateClones();this._fnUpdatePositions();};this.fnPosition=function(){this._fnUpdatePositions();};var dt=$.fn.dataTable.Api?new $.fn.dataTable.Api(mTable).settings()[0]:mTable.fnSettings();dt._oPluginFixedHeader=this;this.fnInit(dt,oInit);};FixedHeader.prototype={fnInit:function(oDtSettings,oInit)
{var s=this.fnGetSettings();var that=this;this.fnInitSettings(s,oInit);if(oDtSettings.oScroll.sX!==""||oDtSettings.oScroll.sY!=="")
{alert("FixedHeader 2 is not supported with DataTables' scrolling mode at this time");return;}
s.nTable=oDtSettings.nTable;oDtSettings.aoDrawCallback.unshift({"fn":function(){FixedHeader.fnMeasure();that._fnUpdateClones.call(that);that._fnUpdatePositions.call(that);},"sName":"FixedHeader"});s.bFooter=($('>tfoot',s.nTable).length>0)?true:false;if(s.oSides.top)
{s.aoCache.push(that._fnCloneTable("fixedHeader","FixedHeader_Header",that._fnCloneThead));}
if(s.oSides.bottom)
{s.aoCache.push(that._fnCloneTable("fixedFooter","FixedHeader_Footer",that._fnCloneTfoot));}
if(s.oSides.left)
{s.aoCache.push(that._fnCloneTable("fixedLeft","FixedHeader_Left",that._fnCloneTLeft,s.oSides.left));}
if(s.oSides.right)
{s.aoCache.push(that._fnCloneTable("fixedRight","FixedHeader_Right",that._fnCloneTRight,s.oSides.right));}
FixedHeader.afnScroll.push(function(){that._fnUpdatePositions.call(that);});$(window).resize(function(){FixedHeader.fnMeasure();that._fnUpdateClones.call(that);that._fnUpdatePositions.call(that);});$(s.nTable).on('column-reorder.dt',function(){FixedHeader.fnMeasure();that._fnUpdateClones(true);that._fnUpdatePositions();}).on('column-visibility.dt',function(){FixedHeader.fnMeasure();that._fnUpdateClones(true);that._fnUpdatePositions();});FixedHeader.fnMeasure();that._fnUpdateClones();that._fnUpdatePositions();s.bInitComplete=true;},fnInitSettings:function(s,oInit)
{if(oInit!==undefined)
{if(oInit.top!==undefined){s.oSides.top=oInit.top;}
if(oInit.bottom!==undefined){s.oSides.bottom=oInit.bottom;}
if(typeof oInit.left=='boolean'){s.oSides.left=oInit.left?1:0;}
else if(oInit.left!==undefined){s.oSides.left=oInit.left;}
if(typeof oInit.right=='boolean'){s.oSides.right=oInit.right?1:0;}
else if(oInit.right!==undefined){s.oSides.right=oInit.right;}
if(oInit.zTop!==undefined){s.oZIndexes.top=oInit.zTop;}
if(oInit.zBottom!==undefined){s.oZIndexes.bottom=oInit.zBottom;}
if(oInit.zLeft!==undefined){s.oZIndexes.left=oInit.zLeft;}
if(oInit.zRight!==undefined){s.oZIndexes.right=oInit.zRight;}
if(oInit.offsetTop!==undefined){s.oOffset.top=oInit.offsetTop;}
if(oInit.alwaysCloneTop!==undefined){s.oCloneOnDraw.top=oInit.alwaysCloneTop;}
if(oInit.alwaysCloneBottom!==undefined){s.oCloneOnDraw.bottom=oInit.alwaysCloneBottom;}
if(oInit.alwaysCloneLeft!==undefined){s.oCloneOnDraw.left=oInit.alwaysCloneLeft;}
if(oInit.alwaysCloneRight!==undefined){s.oCloneOnDraw.right=oInit.alwaysCloneRight;}}},_fnCloneTable:function(sType,sClass,fnClone,iCells)
{var s=this.fnGetSettings();var nCTable;if($(s.nTable.parentNode).css('position')!="absolute")
{s.nTable.parentNode.style.position="relative";}
nCTable=s.nTable.cloneNode(false);nCTable.removeAttribute('id');var nDiv=document.createElement('div');nDiv.style.position="absolute";nDiv.style.top="0px";nDiv.style.left="0px";nDiv.className+=" FixedHeader_Cloned "+sType+" "+sClass;if(sType=="fixedHeader")
{nDiv.style.zIndex=s.oZIndexes.top;}
if(sType=="fixedFooter")
{nDiv.style.zIndex=s.oZIndexes.bottom;}
if(sType=="fixedLeft")
{nDiv.style.zIndex=s.oZIndexes.left;}
else if(sType=="fixedRight")
{nDiv.style.zIndex=s.oZIndexes.right;}
nCTable.style.margin="0";nDiv.appendChild(nCTable);document.body.appendChild(nDiv);return{"nNode":nCTable,"nWrapper":nDiv,"sType":sType,"sPosition":"","sTop":"","sLeft":"","fnClone":fnClone,"iCells":iCells};},_fnMeasure:function()
{var
s=this.fnGetSettings(),m=s.oMes,jqTable=$(s.nTable),oOffset=jqTable.offset(),iParentScrollTop=this._fnSumScroll(s.nTable.parentNode,'scrollTop'),iParentScrollLeft=this._fnSumScroll(s.nTable.parentNode,'scrollLeft');m.iTableWidth=jqTable.outerWidth();m.iTableHeight=jqTable.outerHeight();m.iTableLeft=oOffset.left+ s.nTable.parentNode.scrollLeft;m.iTableTop=oOffset.top+ iParentScrollTop;m.iTableRight=m.iTableLeft+ m.iTableWidth;m.iTableRight=FixedHeader.oDoc.iWidth- m.iTableLeft- m.iTableWidth;m.iTableBottom=FixedHeader.oDoc.iHeight- m.iTableTop- m.iTableHeight;},_fnSumScroll:function(n,side)
{var i=n[side];while(n=n.parentNode)
{if(n.nodeName=='HTML'||n.nodeName=='BODY')
{break;}
i=n[side];}
return i;},_fnUpdatePositions:function()
{var s=this.fnGetSettings();this._fnMeasure();for(var i=0,iLen=s.aoCache.length;i<iLen;i++)
{if(s.aoCache[i].sType=="fixedHeader")
{this._fnScrollFixedHeader(s.aoCache[i]);}
else if(s.aoCache[i].sType=="fixedFooter")
{this._fnScrollFixedFooter(s.aoCache[i]);}
else if(s.aoCache[i].sType=="fixedLeft")
{this._fnScrollHorizontalLeft(s.aoCache[i]);}
else
{this._fnScrollHorizontalRight(s.aoCache[i]);}}},_fnUpdateClones:function(full)
{var s=this.fnGetSettings();if(full){s.bInitComplete=false;}
for(var i=0,iLen=s.aoCache.length;i<iLen;i++)
{s.aoCache[i].fnClone.call(this,s.aoCache[i]);}
if(full){s.bInitComplete=true;}},_fnScrollHorizontalRight:function(oCache)
{var
s=this.fnGetSettings(),oMes=s.oMes,oWin=FixedHeader.oWin,oDoc=FixedHeader.oDoc,nTable=oCache.nWrapper,iFixedWidth=$(nTable).outerWidth();if(oWin.iScrollRight<oMes.iTableRight)
{this._fnUpdateCache(oCache,'sPosition','absolute','position',nTable.style);this._fnUpdateCache(oCache,'sTop',oMes.iTableTop+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',(oMes.iTableLeft+oMes.iTableWidth-iFixedWidth)+"px",'left',nTable.style);}
else if(oMes.iTableLeft<oDoc.iWidth-oWin.iScrollRight-iFixedWidth)
{this._fnUpdateCache(oCache,'sPosition','fixed','position',nTable.style);this._fnUpdateCache(oCache,'sTop',(oMes.iTableTop-oWin.iScrollTop)+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',(oWin.iWidth-iFixedWidth)+"px",'left',nTable.style);}
else
{this._fnUpdateCache(oCache,'sPosition','absolute','position',nTable.style);this._fnUpdateCache(oCache,'sTop',oMes.iTableTop+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',oMes.iTableLeft+"px",'left',nTable.style);}},_fnScrollHorizontalLeft:function(oCache)
{var
s=this.fnGetSettings(),oMes=s.oMes,oWin=FixedHeader.oWin,oDoc=FixedHeader.oDoc,nTable=oCache.nWrapper,iCellWidth=$(nTable).outerWidth();if(oWin.iScrollLeft<oMes.iTableLeft)
{this._fnUpdateCache(oCache,'sPosition','absolute','position',nTable.style);this._fnUpdateCache(oCache,'sTop',oMes.iTableTop+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',oMes.iTableLeft+"px",'left',nTable.style);}
else if(oWin.iScrollLeft<oMes.iTableLeft+oMes.iTableWidth-iCellWidth)
{this._fnUpdateCache(oCache,'sPosition','fixed','position',nTable.style);this._fnUpdateCache(oCache,'sTop',(oMes.iTableTop-oWin.iScrollTop)+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',"0px",'left',nTable.style);}
else
{this._fnUpdateCache(oCache,'sPosition','absolute','position',nTable.style);this._fnUpdateCache(oCache,'sTop',oMes.iTableTop+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',(oMes.iTableLeft+oMes.iTableWidth-iCellWidth)+"px",'left',nTable.style);}},_fnScrollFixedFooter:function(oCache)
{var
s=this.fnGetSettings(),oMes=s.oMes,oWin=FixedHeader.oWin,oDoc=FixedHeader.oDoc,nTable=oCache.nWrapper,iTheadHeight=$("thead",s.nTable).outerHeight(),iCellHeight=$(nTable).outerHeight();if(oWin.iScrollBottom<oMes.iTableBottom)
{this._fnUpdateCache(oCache,'sPosition','absolute','position',nTable.style);this._fnUpdateCache(oCache,'sTop',(oMes.iTableTop+oMes.iTableHeight-iCellHeight)+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',oMes.iTableLeft+"px",'left',nTable.style);}
else if(oWin.iScrollBottom<oMes.iTableBottom+oMes.iTableHeight-iCellHeight-iTheadHeight)
{this._fnUpdateCache(oCache,'sPosition','fixed','position',nTable.style);this._fnUpdateCache(oCache,'sTop',(oWin.iHeight-iCellHeight)+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',(oMes.iTableLeft-oWin.iScrollLeft)+"px",'left',nTable.style);}
else
{this._fnUpdateCache(oCache,'sPosition','absolute','position',nTable.style);this._fnUpdateCache(oCache,'sTop',(oMes.iTableTop+iCellHeight)+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',oMes.iTableLeft+"px",'left',nTable.style);}},_fnScrollFixedHeader:function(oCache)
{var
s=this.fnGetSettings(),oMes=s.oMes,oWin=FixedHeader.oWin,oDoc=FixedHeader.oDoc,nTable=oCache.nWrapper,iTbodyHeight=0,anTbodies=s.nTable.getElementsByTagName('tbody');for(var i=0;i<anTbodies.length;++i){iTbodyHeight+=anTbodies[i].offsetHeight;}
if(oMes.iTableTop>oWin.iScrollTop+ s.oOffset.top)
{this._fnUpdateCache(oCache,'sPosition',"absolute",'position',nTable.style);this._fnUpdateCache(oCache,'sTop',oMes.iTableTop+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',oMes.iTableLeft+"px",'left',nTable.style);}
else if(oWin.iScrollTop+ s.oOffset.top>oMes.iTableTop+iTbodyHeight)
{this._fnUpdateCache(oCache,'sPosition',"absolute",'position',nTable.style);this._fnUpdateCache(oCache,'sTop',(oMes.iTableTop+iTbodyHeight)+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',oMes.iTableLeft+"px",'left',nTable.style);}
else
{this._fnUpdateCache(oCache,'sPosition','fixed','position',nTable.style);this._fnUpdateCache(oCache,'sTop',s.oOffset.top+"px",'top',nTable.style);this._fnUpdateCache(oCache,'sLeft',(oMes.iTableLeft-oWin.iScrollLeft)+"px",'left',nTable.style);}},_fnUpdateCache:function(oCache,sCache,sSet,sProperty,oObj)
{if(oCache[sCache]!=sSet)
{oObj[sProperty]=sSet;oCache[sCache]=sSet;}},_fnClassUpdate:function(source,dest)
{var that=this;if(source.nodeName.toUpperCase()==="TR"||source.nodeName.toUpperCase()==="TH"||source.nodeName.toUpperCase()==="TD"||source.nodeName.toUpperCase()==="SPAN")
{dest.className=source.className;}
$(source).children().each(function(i){that._fnClassUpdate($(source).children()[i],$(dest).children()[i]);});},_fnCloneThead:function(oCache)
{var s=this.fnGetSettings();var nTable=oCache.nNode;if(s.bInitComplete&&!s.oCloneOnDraw.top)
{this._fnClassUpdate($('thead',s.nTable)[0],$('thead',nTable)[0]);return;}
var iDtWidth=$(s.nTable).outerWidth();oCache.nWrapper.style.width=iDtWidth+"px";nTable.style.width=iDtWidth+"px";while(nTable.childNodes.length>0)
{$('thead th',nTable).unbind('click');nTable.removeChild(nTable.childNodes[0]);}
var nThead=$('thead',s.nTable).clone(true)[0];nTable.appendChild(nThead);var a=[];var b=[];$("thead>tr th",s.nTable).each(function(i){a.push($(this).width());});$("thead>tr td",s.nTable).each(function(i){b.push($(this).width());});$("thead>tr th",s.nTable).each(function(i){$("thead>tr th:eq("+i+")",nTable).width(a[i]);$(this).width(a[i]);});$("thead>tr td",s.nTable).each(function(i){$("thead>tr td:eq("+i+")",nTable).width(b[i]);$(this).width(b[i]);});$('th.sorting, th.sorting_desc, th.sorting_asc',nTable).bind('click',function(){this.blur();});},_fnCloneTfoot:function(oCache)
{var s=this.fnGetSettings();var nTable=oCache.nNode;oCache.nWrapper.style.width=$(s.nTable).outerWidth()+"px";while(nTable.childNodes.length>0)
{nTable.removeChild(nTable.childNodes[0]);}
var nTfoot=$('tfoot',s.nTable).clone(true)[0];nTable.appendChild(nTfoot);$("tfoot:eq(0)>tr th",s.nTable).each(function(i){$("tfoot:eq(0)>tr th:eq("+i+")",nTable).width($(this).width());});$("tfoot:eq(0)>tr td",s.nTable).each(function(i){$("tfoot:eq(0)>tr td:eq("+i+")",nTable).width($(this).width());});},_fnCloneTLeft:function(oCache)
{var s=this.fnGetSettings();var nTable=oCache.nNode;var nBody=$('tbody',s.nTable)[0];while(nTable.childNodes.length>0)
{nTable.removeChild(nTable.childNodes[0]);}
nTable.appendChild($("thead",s.nTable).clone(true)[0]);nTable.appendChild($("tbody",s.nTable).clone(true)[0]);if(s.bFooter)
{nTable.appendChild($("tfoot",s.nTable).clone(true)[0]);}
var sSelector='gt('+(oCache.iCells- 1)+')';$('thead tr',nTable).each(function(k){$('th:'+ sSelector,this).remove();});$('tfoot tr',nTable).each(function(k){$('th:'+ sSelector,this).remove();});$('tbody tr',nTable).each(function(k){$('td:'+ sSelector,this).remove();});this.fnEqualiseHeights('thead',nBody.parentNode,nTable);this.fnEqualiseHeights('tbody',nBody.parentNode,nTable);this.fnEqualiseHeights('tfoot',nBody.parentNode,nTable);var iWidth=0;for(var i=0;i<oCache.iCells;i++){iWidth+=$('thead tr th:eq('+ i+')',s.nTable).outerWidth();}
nTable.style.width=iWidth+"px";oCache.nWrapper.style.width=iWidth+"px";},_fnCloneTRight:function(oCache)
{var s=this.fnGetSettings();var nBody=$('tbody',s.nTable)[0];var nTable=oCache.nNode;var iCols=$('tbody tr:eq(0) td',s.nTable).length;while(nTable.childNodes.length>0)
{nTable.removeChild(nTable.childNodes[0]);}
nTable.appendChild($("thead",s.nTable).clone(true)[0]);nTable.appendChild($("tbody",s.nTable).clone(true)[0]);if(s.bFooter)
{nTable.appendChild($("tfoot",s.nTable).clone(true)[0]);}
$('thead tr th:lt('+(iCols-oCache.iCells)+')',nTable).remove();$('tfoot tr th:lt('+(iCols-oCache.iCells)+')',nTable).remove();$('tbody tr',nTable).each(function(k){$('td:lt('+(iCols-oCache.iCells)+')',this).remove();});this.fnEqualiseHeights('thead',nBody.parentNode,nTable);this.fnEqualiseHeights('tbody',nBody.parentNode,nTable);this.fnEqualiseHeights('tfoot',nBody.parentNode,nTable);var iWidth=0;for(var i=0;i<oCache.iCells;i++){iWidth+=$('thead tr th:eq('+(iCols-1-i)+')',s.nTable).outerWidth();}
nTable.style.width=iWidth+"px";oCache.nWrapper.style.width=iWidth+"px";},"fnEqualiseHeights":function(parent,original,clone)
{var that=this;var originals=$(parent+' tr',original);var height;$(parent+' tr',clone).each(function(k){height=originals.eq(k).css('height');if(navigator.appName=='Microsoft Internet Explorer'){height=parseInt(height,10)+ 1;}
$(this).css('height',height);originals.eq(k).css('height',height);});}};FixedHeader.oWin={"iScrollTop":0,"iScrollRight":0,"iScrollBottom":0,"iScrollLeft":0,"iHeight":0,"iWidth":0};FixedHeader.oDoc={"iHeight":0,"iWidth":0};FixedHeader.afnScroll=[];FixedHeader.fnMeasure=function()
{var
jqWin=$(window),jqDoc=$(document),oWin=FixedHeader.oWin,oDoc=FixedHeader.oDoc;oDoc.iHeight=jqDoc.height();oDoc.iWidth=jqDoc.width();oWin.iHeight=jqWin.height();oWin.iWidth=jqWin.width();oWin.iScrollTop=jqWin.scrollTop();oWin.iScrollLeft=jqWin.scrollLeft();oWin.iScrollRight=oDoc.iWidth- oWin.iScrollLeft- oWin.iWidth;oWin.iScrollBottom=oDoc.iHeight- oWin.iScrollTop- oWin.iHeight;};FixedHeader.version="2.1.2";$(window).scroll(function(){FixedHeader.fnMeasure();for(var i=0,iLen=FixedHeader.afnScroll.length;i<iLen;i++){FixedHeader.afnScroll[i]();}});$.fn.dataTable.FixedHeader=FixedHeader;$.fn.DataTable.FixedHeader=FixedHeader;return FixedHeader;};if(typeof define==='function'&&define.amd){define(['jquery','datatables'],factory);}
else if(typeof exports==='object'){factory(require('jquery'),require('datatables'));}
else if(jQuery&&!jQuery.fn.dataTable.FixedHeader){factory(jQuery,jQuery.fn.dataTable);}})(window,document);