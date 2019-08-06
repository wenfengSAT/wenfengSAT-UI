var TableTools;(function(window,document,undefined){var factory=function($,DataTable){"use strict";var ZeroClipboard_TableTools={version:"1.0.4-TableTools2",clients:{},moviePath:'',nextId:1,$:function(thingy){if(typeof(thingy)=='string'){thingy=document.getElementById(thingy);}
if(!thingy.addClass){thingy.hide=function(){this.style.display='none';};thingy.show=function(){this.style.display='';};thingy.addClass=function(name){this.removeClass(name);this.className+=' '+ name;};thingy.removeClass=function(name){this.className=this.className.replace(new RegExp("\\s*"+ name+"\\s*")," ").replace(/^\s+/,'').replace(/\s+$/,'');};thingy.hasClass=function(name){return!!this.className.match(new RegExp("\\s*"+ name+"\\s*"));};}
return thingy;},setMoviePath:function(path){this.moviePath=path;},dispatch:function(id,eventName,args){var client=this.clients[id];if(client){client.receiveEvent(eventName,args);}},register:function(id,client){this.clients[id]=client;},getDOMObjectPosition:function(obj){var info={left:0,top:0,width:obj.width?obj.width:obj.offsetWidth,height:obj.height?obj.height:obj.offsetHeight};if(obj.style.width!==""){info.width=obj.style.width.replace("px","");}
if(obj.style.height!==""){info.height=obj.style.height.replace("px","");}
while(obj){info.left+=obj.offsetLeft;info.top+=obj.offsetTop;obj=obj.offsetParent;}
return info;},Client:function(elem){this.handlers={};this.id=ZeroClipboard_TableTools.nextId++;this.movieId='ZeroClipboard_TableToolsMovie_'+ this.id;ZeroClipboard_TableTools.register(this.id,this);if(elem){this.glue(elem);}}};ZeroClipboard_TableTools.Client.prototype={id:0,ready:false,movie:null,clipText:'',fileName:'',action:'copy',handCursorEnabled:true,cssEffects:true,handlers:null,sized:false,glue:function(elem,title){this.domElement=ZeroClipboard_TableTools.$(elem);var zIndex=99;if(this.domElement.style.zIndex){zIndex=parseInt(this.domElement.style.zIndex,10)+ 1;}
var box=ZeroClipboard_TableTools.getDOMObjectPosition(this.domElement);this.div=document.createElement('div');var style=this.div.style;style.position='absolute';style.left='0px';style.top='0px';style.width=(box.width)+'px';style.height=box.height+'px';style.zIndex=zIndex;if(typeof title!="undefined"&&title!==""){this.div.title=title;}
if(box.width!==0&&box.height!==0){this.sized=true;}
if(this.domElement){this.domElement.appendChild(this.div);this.div.innerHTML=this.getHTML(box.width,box.height).replace(/&/g,'&amp;');}},positionElement:function(){var box=ZeroClipboard_TableTools.getDOMObjectPosition(this.domElement);var style=this.div.style;style.position='absolute';style.width=box.width+'px';style.height=box.height+'px';if(box.width!==0&&box.height!==0){this.sized=true;}else{return;}
var flash=this.div.childNodes[0];flash.width=box.width;flash.height=box.height;},getHTML:function(width,height){var html='';var flashvars='id='+ this.id+'&width='+ width+'&height='+ height;if(navigator.userAgent.match(/MSIE/)){var protocol=location.href.match(/^https/i)?'https://':'http://';html+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard_TableTools.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+flashvars+'"/><param name="wmode" value="transparent"/></object>';}
else{html+='<embed id="'+this.movieId+'" src="'+ZeroClipboard_TableTools.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" wmode="transparent" />';}
return html;},hide:function(){if(this.div){this.div.style.left='-2000px';}},show:function(){this.reposition();},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML='';var body=document.getElementsByTagName('body')[0];try{body.removeChild(this.div);}catch(e){}
this.domElement=null;this.div=null;}},reposition:function(elem){if(elem){this.domElement=ZeroClipboard_TableTools.$(elem);if(!this.domElement){this.hide();}}
if(this.domElement&&this.div){var box=ZeroClipboard_TableTools.getDOMObjectPosition(this.domElement);var style=this.div.style;style.left=''+ box.left+'px';style.top=''+ box.top+'px';}},clearText:function(){this.clipText='';if(this.ready){this.movie.clearText();}},appendText:function(newText){this.clipText+=newText;if(this.ready){this.movie.appendText(newText);}},setText:function(newText){this.clipText=newText;if(this.ready){this.movie.setText(newText);}},setCharSet:function(charSet){this.charSet=charSet;if(this.ready){this.movie.setCharSet(charSet);}},setBomInc:function(bomInc){this.incBom=bomInc;if(this.ready){this.movie.setBomInc(bomInc);}},setFileName:function(newText){this.fileName=newText;if(this.ready){this.movie.setFileName(newText);}},setAction:function(newText){this.action=newText;if(this.ready){this.movie.setAction(newText);}},addEventListener:function(eventName,func){eventName=eventName.toString().toLowerCase().replace(/^on/,'');if(!this.handlers[eventName]){this.handlers[eventName]=[];}
this.handlers[eventName].push(func);},setHandCursor:function(enabled){this.handCursorEnabled=enabled;if(this.ready){this.movie.setHandCursor(enabled);}},setCSSEffects:function(enabled){this.cssEffects=!!enabled;},receiveEvent:function(eventName,args){var self;eventName=eventName.toString().toLowerCase().replace(/^on/,'');switch(eventName){case'load':this.movie=document.getElementById(this.movieId);if(!this.movie){self=this;setTimeout(function(){self.receiveEvent('load',null);},1);return;}
if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){self=this;setTimeout(function(){self.receiveEvent('load',null);},100);this.ready=true;return;}
this.ready=true;this.movie.clearText();this.movie.appendText(this.clipText);this.movie.setFileName(this.fileName);this.movie.setAction(this.action);this.movie.setCharSet(this.charSet);this.movie.setBomInc(this.incBom);this.movie.setHandCursor(this.handCursorEnabled);break;case'mouseover':if(this.domElement&&this.cssEffects){if(this.recoverActive){this.domElement.addClass('active');}}
break;case'mouseout':if(this.domElement&&this.cssEffects){this.recoverActive=false;if(this.domElement.hasClass('active')){this.domElement.removeClass('active');this.recoverActive=true;}}
break;case'mousedown':if(this.domElement&&this.cssEffects){this.domElement.addClass('active');}
break;case'mouseup':if(this.domElement&&this.cssEffects){this.domElement.removeClass('active');this.recoverActive=false;}
break;}
if(this.handlers[eventName]){for(var idx=0,len=this.handlers[eventName].length;idx<len;idx++){var func=this.handlers[eventName][idx];if(typeof(func)=='function'){func(this,args);}
else if((typeof(func)=='object')&&(func.length==2)){func[0][func[1]](this,args);}
else if(typeof(func)=='string'){window[func](this,args);}}}}};window.ZeroClipboard_TableTools=ZeroClipboard_TableTools;(function($,window,document){TableTools=function(oDT,oOpts)
{if(!this instanceof TableTools)
{alert("Warning: TableTools must be initialised with the keyword 'new'");}
var dtSettings=$.fn.dataTable.Api?new $.fn.dataTable.Api(oDT).settings()[0]:oDT.fnSettings();this.s={"that":this,"dt":dtSettings,"print":{"saveStart":-1,"saveLength":-1,"saveScroll":-1,"funcEnd":function(){}},"buttonCounter":0,"select":{"type":"","selected":[],"preRowSelect":null,"postSelected":null,"postDeselected":null,"all":false,"selectedClass":""},"custom":{},"swfPath":"","buttonSet":[],"master":false,"tags":{}};this.dom={"container":null,"table":null,"print":{"hidden":[],"message":null},"collection":{"collection":null,"background":null}};this.classes=$.extend(true,{},TableTools.classes);if(this.s.dt.bJUI)
{$.extend(true,this.classes,TableTools.classes_themeroller);}
this.fnSettings=function(){return this.s;};if(typeof oOpts=='undefined')
{oOpts={};}
TableTools._aInstances.push(this);this._fnConstruct(oOpts);return this;};TableTools.prototype={"fnGetSelected":function(filtered)
{var
out=[],data=this.s.dt.aoData,displayed=this.s.dt.aiDisplay,i,iLen;if(filtered)
{for(i=0,iLen=displayed.length;i<iLen;i++)
{if(data[displayed[i]]._DTTT_selected)
{out.push(data[displayed[i]].nTr);}}}
else
{for(i=0,iLen=data.length;i<iLen;i++)
{if(data[i]._DTTT_selected)
{out.push(data[i].nTr);}}}
return out;},"fnGetSelectedData":function()
{var out=[];var data=this.s.dt.aoData;var i,iLen;for(i=0,iLen=data.length;i<iLen;i++)
{if(data[i]._DTTT_selected)
{out.push(this.s.dt.oInstance.fnGetData(i));}}
return out;},"fnGetSelectedIndexes":function(filtered)
{var
out=[],data=this.s.dt.aoData,displayed=this.s.dt.aiDisplay,i,iLen;if(filtered)
{for(i=0,iLen=displayed.length;i<iLen;i++)
{if(data[displayed[i]]._DTTT_selected)
{out.push(displayed[i]);}}}
else
{for(i=0,iLen=data.length;i<iLen;i++)
{if(data[i]._DTTT_selected)
{out.push(i);}}}
return out;},"fnIsSelected":function(n)
{var pos=this.s.dt.oInstance.fnGetPosition(n);return(this.s.dt.aoData[pos]._DTTT_selected===true)?true:false;},"fnSelectAll":function(filtered)
{this._fnRowSelect(filtered?this.s.dt.aiDisplay:this.s.dt.aoData);},"fnSelectNone":function(filtered)
{this._fnRowDeselect(this.fnGetSelectedIndexes(filtered));},"fnSelect":function(n)
{if(this.s.select.type=="single")
{this.fnSelectNone();this._fnRowSelect(n);}
else
{this._fnRowSelect(n);}},"fnDeselect":function(n)
{this._fnRowDeselect(n);},"fnGetTitle":function(oConfig)
{var sTitle="";if(typeof oConfig.sTitle!='undefined'&&oConfig.sTitle!==""){sTitle=oConfig.sTitle;}else{var anTitle=document.getElementsByTagName('title');if(anTitle.length>0)
{sTitle=anTitle[0].innerHTML;}}
if("\u00A1".toString().length<4){return sTitle.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,"");}else{return sTitle.replace(/[^a-zA-Z0-9_\.,\-_ !\(\)]/g,"");}},"fnCalcColRatios":function(oConfig)
{var
aoCols=this.s.dt.aoColumns,aColumnsInc=this._fnColumnTargets(oConfig.mColumns),aColWidths=[],iWidth=0,iTotal=0,i,iLen;for(i=0,iLen=aColumnsInc.length;i<iLen;i++)
{if(aColumnsInc[i])
{iWidth=aoCols[i].nTh.offsetWidth;iTotal+=iWidth;aColWidths.push(iWidth);}}
for(i=0,iLen=aColWidths.length;i<iLen;i++)
{aColWidths[i]=aColWidths[i]/iTotal;}
return aColWidths.join('\t');},"fnGetTableData":function(oConfig)
{if(this.s.dt)
{return this._fnGetDataTablesData(oConfig);}},"fnSetText":function(clip,text)
{this._fnFlashSetText(clip,text);},"fnResizeButtons":function()
{for(var cli in ZeroClipboard_TableTools.clients)
{if(cli)
{var client=ZeroClipboard_TableTools.clients[cli];if(typeof client.domElement!='undefined'&&client.domElement.parentNode)
{client.positionElement();}}}},"fnResizeRequired":function()
{for(var cli in ZeroClipboard_TableTools.clients)
{if(cli)
{var client=ZeroClipboard_TableTools.clients[cli];if(typeof client.domElement!='undefined'&&client.domElement.parentNode==this.dom.container&&client.sized===false)
{return true;}}}
return false;},"fnPrint":function(bView,oConfig)
{if(oConfig===undefined)
{oConfig={};}
if(bView===undefined||bView)
{this._fnPrintStart(oConfig);}
else
{this._fnPrintEnd();}},"fnInfo":function(message,time){var info=$('<div/>').addClass(this.classes.print.info).html(message).appendTo('body');setTimeout(function(){info.fadeOut("normal",function(){info.remove();});},time);},"fnContainer":function(){return this.dom.container;},"_fnConstruct":function(oOpts)
{var that=this;this._fnCustomiseSettings(oOpts);this.dom.container=document.createElement(this.s.tags.container);this.dom.container.className=this.classes.container;if(this.s.select.type!='none')
{this._fnRowSelectConfig();}
this._fnButtonDefinations(this.s.buttonSet,this.dom.container);this.s.dt.aoDestroyCallback.push({"sName":"TableTools","fn":function(){$(that.s.dt.nTBody).off('click.DTTT_Select','tr');$(that.dom.container).empty();var idx=$.inArray(that,TableTools._aInstances);if(idx!==-1){TableTools._aInstances.splice(idx,1);}}});},"_fnCustomiseSettings":function(oOpts)
{if(typeof this.s.dt._TableToolsInit=='undefined')
{this.s.master=true;this.s.dt._TableToolsInit=true;}
this.dom.table=this.s.dt.nTable;this.s.custom=$.extend({},TableTools.DEFAULTS,oOpts);this.s.swfPath=this.s.custom.sSwfPath;if(typeof ZeroClipboard_TableTools!='undefined')
{ZeroClipboard_TableTools.moviePath=this.s.swfPath;}
this.s.select.type=this.s.custom.sRowSelect;this.s.select.preRowSelect=this.s.custom.fnPreRowSelect;this.s.select.postSelected=this.s.custom.fnRowSelected;this.s.select.postDeselected=this.s.custom.fnRowDeselected;if(this.s.custom.sSelectedClass)
{this.classes.select.row=this.s.custom.sSelectedClass;}
this.s.tags=this.s.custom.oTags;this.s.buttonSet=this.s.custom.aButtons;},"_fnButtonDefinations":function(buttonSet,wrapper)
{var buttonDef;for(var i=0,iLen=buttonSet.length;i<iLen;i++)
{if(typeof buttonSet[i]=="string")
{if(typeof TableTools.BUTTONS[buttonSet[i]]=='undefined')
{alert("TableTools: Warning - unknown button type: "+buttonSet[i]);continue;}
buttonDef=$.extend({},TableTools.BUTTONS[buttonSet[i]],true);}
else
{if(typeof TableTools.BUTTONS[buttonSet[i].sExtends]=='undefined')
{alert("TableTools: Warning - unknown button type: "+buttonSet[i].sExtends);continue;}
var o=$.extend({},TableTools.BUTTONS[buttonSet[i].sExtends],true);buttonDef=$.extend(o,buttonSet[i],true);}
var button=this._fnCreateButton(buttonDef,$(wrapper).hasClass(this.classes.collection.container));if(button){wrapper.appendChild(button);}}},"_fnCreateButton":function(oConfig,bCollectionButton)
{var nButton=this._fnButtonBase(oConfig,bCollectionButton);if(oConfig.sAction.match(/flash/))
{if(!this._fnHasFlash()){return false;}
this._fnFlashConfig(nButton,oConfig);}
else if(oConfig.sAction=="text")
{this._fnTextConfig(nButton,oConfig);}
else if(oConfig.sAction=="div")
{this._fnTextConfig(nButton,oConfig);}
else if(oConfig.sAction=="collection")
{this._fnTextConfig(nButton,oConfig);this._fnCollectionConfig(nButton,oConfig);}
return nButton;},"_fnButtonBase":function(o,bCollectionButton)
{var sTag,sLiner,sClass;if(bCollectionButton)
{sTag=o.sTag&&o.sTag!=="default"?o.sTag:this.s.tags.collection.button;sLiner=o.sLinerTag&&o.sLinerTag!=="default"?o.sLiner:this.s.tags.collection.liner;sClass=this.classes.collection.buttons.normal;}
else
{sTag=o.sTag&&o.sTag!=="default"?o.sTag:this.s.tags.button;sLiner=o.sLinerTag&&o.sLinerTag!=="default"?o.sLiner:this.s.tags.liner;sClass=this.classes.buttons.normal;}
var
nButton=document.createElement(sTag),nSpan=document.createElement(sLiner),masterS=this._fnGetMasterSettings();nButton.className=sClass+" "+o.sButtonClass;nButton.setAttribute('id',"ToolTables_"+this.s.dt.sInstance+"_"+masterS.buttonCounter);nButton.appendChild(nSpan);nSpan.innerHTML=o.sButtonText;masterS.buttonCounter++;return nButton;},"_fnGetMasterSettings":function()
{if(this.s.master)
{return this.s;}
else
{var instances=TableTools._aInstances;for(var i=0,iLen=instances.length;i<iLen;i++)
{if(this.dom.table==instances[i].s.dt.nTable)
{return instances[i].s;}}}},"_fnCollectionConfig":function(nButton,oConfig)
{var nHidden=document.createElement(this.s.tags.collection.container);nHidden.style.display="none";nHidden.className=this.classes.collection.container;oConfig._collection=nHidden;document.body.appendChild(nHidden);this._fnButtonDefinations(oConfig.aButtons,nHidden);},"_fnCollectionShow":function(nButton,oConfig)
{var
that=this,oPos=$(nButton).offset(),nHidden=oConfig._collection,iDivX=oPos.left,iDivY=oPos.top+ $(nButton).outerHeight(),iWinHeight=$(window).height(),iDocHeight=$(document).height(),iWinWidth=$(window).width(),iDocWidth=$(document).width();nHidden.style.position="absolute";nHidden.style.left=iDivX+"px";nHidden.style.top=iDivY+"px";nHidden.style.display="block";$(nHidden).css('opacity',0);var nBackground=document.createElement('div');nBackground.style.position="absolute";nBackground.style.left="0px";nBackground.style.top="0px";nBackground.style.height=((iWinHeight>iDocHeight)?iWinHeight:iDocHeight)+"px";nBackground.style.width=((iWinWidth>iDocWidth)?iWinWidth:iDocWidth)+"px";nBackground.className=this.classes.collection.background;$(nBackground).css('opacity',0);document.body.appendChild(nBackground);document.body.appendChild(nHidden);var iDivWidth=$(nHidden).outerWidth();var iDivHeight=$(nHidden).outerHeight();if(iDivX+ iDivWidth>iDocWidth)
{nHidden.style.left=(iDocWidth-iDivWidth)+"px";}
if(iDivY+ iDivHeight>iDocHeight)
{nHidden.style.top=(iDivY-iDivHeight-$(nButton).outerHeight())+"px";}
this.dom.collection.collection=nHidden;this.dom.collection.background=nBackground;setTimeout(function(){$(nHidden).animate({"opacity":1},500);$(nBackground).animate({"opacity":0.25},500);},10);this.fnResizeButtons();$(nBackground).click(function(){that._fnCollectionHide.call(that,null,null);});},"_fnCollectionHide":function(nButton,oConfig)
{if(oConfig!==null&&oConfig.sExtends=='collection')
{return;}
if(this.dom.collection.collection!==null)
{$(this.dom.collection.collection).animate({"opacity":0},500,function(e){this.style.display="none";});$(this.dom.collection.background).animate({"opacity":0},500,function(e){this.parentNode.removeChild(this);});this.dom.collection.collection=null;this.dom.collection.background=null;}},"_fnRowSelectConfig":function()
{if(this.s.master)
{var
that=this,i,iLen,dt=this.s.dt,aoOpenRows=this.s.dt.aoOpenRows;$(dt.nTable).addClass(this.classes.select.table);if(this.s.select.type==='os'){$(dt.nTBody).on('mousedown.DTTT_Select','tr',function(e){if(e.shiftKey){$(dt.nTBody).css('-moz-user-select','none').one('selectstart.DTTT_Select','tr',function(){return false;});}});$(dt.nTBody).on('mouseup.DTTT_Select','tr',function(e){$(dt.nTBody).css('-moz-user-select','');});}
$(dt.nTBody).on('click.DTTT_Select',this.s.custom.sRowSelector,function(e){var row=this.nodeName.toLowerCase()==='tr'?this:$(this).parents('tr')[0];var select=that.s.select;var pos=that.s.dt.oInstance.fnGetPosition(row);if(row.parentNode!=dt.nTBody){return;}
if(dt.oInstance.fnGetData(row)===null){return;}
if(select.type=='os'){if(e.ctrlKey||e.metaKey){if(that.fnIsSelected(row)){that._fnRowDeselect(row,e);}
else{that._fnRowSelect(row,e);}}
else if(e.shiftKey){var rowIdxs=that.s.dt.aiDisplay.slice();var idx1=$.inArray(select.lastRow,rowIdxs);var idx2=$.inArray(pos,rowIdxs);if(that.fnGetSelected().length===0||idx1===-1){rowIdxs.splice($.inArray(pos,rowIdxs)+1,rowIdxs.length);}
else{if(idx1>idx2){var tmp=idx2;idx2=idx1;idx1=tmp;}
rowIdxs.splice(idx2+1,rowIdxs.length);rowIdxs.splice(0,idx1);}
if(!that.fnIsSelected(row)){that._fnRowSelect(rowIdxs,e);}
else{rowIdxs.splice($.inArray(pos,rowIdxs),1);that._fnRowDeselect(rowIdxs,e);}}
else{if(that.fnIsSelected(row)&&that.fnGetSelected().length===1){that._fnRowDeselect(row,e);}
else{that.fnSelectNone();that._fnRowSelect(row,e);}}}
else if(that.fnIsSelected(row)){that._fnRowDeselect(row,e);}
else if(select.type=="single"){that.fnSelectNone();that._fnRowSelect(row,e);}
else if(select.type=="multi"){that._fnRowSelect(row,e);}
select.lastRow=pos;});dt.oApi._fnCallbackReg(dt,'aoRowCreatedCallback',function(tr,data,index){if(dt.aoData[index]._DTTT_selected){$(tr).addClass(that.classes.select.row);}},'TableTools-SelectAll');}},"_fnRowSelect":function(src,e)
{var
that=this,data=this._fnSelectData(src),firstTr=data.length===0?null:data[0].nTr,anSelected=[],i,len;for(i=0,len=data.length;i<len;i++)
{if(data[i].nTr)
{anSelected.push(data[i].nTr);}}
if(this.s.select.preRowSelect!==null&&!this.s.select.preRowSelect.call(this,e,anSelected,true))
{return;}
for(i=0,len=data.length;i<len;i++)
{data[i]._DTTT_selected=true;if(data[i].nTr)
{$(data[i].nTr).addClass(that.classes.select.row);}}
if(this.s.select.postSelected!==null)
{this.s.select.postSelected.call(this,anSelected);}
TableTools._fnEventDispatch(this,'select',anSelected,true);},"_fnRowDeselect":function(src,e)
{var
that=this,data=this._fnSelectData(src),firstTr=data.length===0?null:data[0].nTr,anDeselectedTrs=[],i,len;for(i=0,len=data.length;i<len;i++)
{if(data[i].nTr)
{anDeselectedTrs.push(data[i].nTr);}}
if(this.s.select.preRowSelect!==null&&!this.s.select.preRowSelect.call(this,e,anDeselectedTrs,false))
{return;}
for(i=0,len=data.length;i<len;i++)
{data[i]._DTTT_selected=false;if(data[i].nTr)
{$(data[i].nTr).removeClass(that.classes.select.row);}}
if(this.s.select.postDeselected!==null)
{this.s.select.postDeselected.call(this,anDeselectedTrs);}
TableTools._fnEventDispatch(this,'select',anDeselectedTrs,false);},"_fnSelectData":function(src)
{var out=[],pos,i,iLen;if(src.nodeName)
{pos=this.s.dt.oInstance.fnGetPosition(src);out.push(this.s.dt.aoData[pos]);}
else if(typeof src.length!=='undefined')
{for(i=0,iLen=src.length;i<iLen;i++)
{if(src[i].nodeName)
{pos=this.s.dt.oInstance.fnGetPosition(src[i]);out.push(this.s.dt.aoData[pos]);}
else if(typeof src[i]==='number')
{out.push(this.s.dt.aoData[src[i]]);}
else
{out.push(src[i]);}}
return out;}
else
{out.push(src);}
return out;},"_fnTextConfig":function(nButton,oConfig)
{var that=this;if(oConfig.fnInit!==null)
{oConfig.fnInit.call(this,nButton,oConfig);}
if(oConfig.sToolTip!=="")
{nButton.title=oConfig.sToolTip;}
$(nButton).hover(function(){if(oConfig.fnMouseover!==null)
{oConfig.fnMouseover.call(this,nButton,oConfig,null);}},function(){if(oConfig.fnMouseout!==null)
{oConfig.fnMouseout.call(this,nButton,oConfig,null);}});if(oConfig.fnSelect!==null)
{TableTools._fnEventListen(this,'select',function(n){oConfig.fnSelect.call(that,nButton,oConfig,n);});}
$(nButton).click(function(e){if(oConfig.fnClick!==null)
{oConfig.fnClick.call(that,nButton,oConfig,null,e);}
if(oConfig.fnComplete!==null)
{oConfig.fnComplete.call(that,nButton,oConfig,null,null);}
that._fnCollectionHide(nButton,oConfig);});},"_fnHasFlash":function()
{try{var fo=new ActiveXObject('ShockwaveFlash.ShockwaveFlash');if(fo){return true;}}
catch(e){if(navigator.mimeTypes&&navigator.mimeTypes['application/x-shockwave-flash']!==undefined&&navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin){return true;}}
return false;},"_fnFlashConfig":function(nButton,oConfig)
{var that=this;var flash=new ZeroClipboard_TableTools.Client();if(oConfig.fnInit!==null)
{oConfig.fnInit.call(this,nButton,oConfig);}
flash.setHandCursor(true);if(oConfig.sAction=="flash_save")
{flash.setAction('save');flash.setCharSet((oConfig.sCharSet=="utf16le")?'UTF16LE':'UTF8');flash.setBomInc(oConfig.bBomInc);flash.setFileName(oConfig.sFileName.replace('*',this.fnGetTitle(oConfig)));}
else if(oConfig.sAction=="flash_pdf")
{flash.setAction('pdf');flash.setFileName(oConfig.sFileName.replace('*',this.fnGetTitle(oConfig)));}
else
{flash.setAction('copy');}
flash.addEventListener('mouseOver',function(client){if(oConfig.fnMouseover!==null)
{oConfig.fnMouseover.call(that,nButton,oConfig,flash);}});flash.addEventListener('mouseOut',function(client){if(oConfig.fnMouseout!==null)
{oConfig.fnMouseout.call(that,nButton,oConfig,flash);}});flash.addEventListener('mouseDown',function(client){if(oConfig.fnClick!==null)
{oConfig.fnClick.call(that,nButton,oConfig,flash);}});flash.addEventListener('complete',function(client,text){if(oConfig.fnComplete!==null)
{oConfig.fnComplete.call(that,nButton,oConfig,flash,text);}
that._fnCollectionHide(nButton,oConfig);});this._fnFlashGlue(flash,nButton,oConfig.sToolTip);},"_fnFlashGlue":function(flash,node,text)
{var that=this;var id=node.getAttribute('id');if(document.getElementById(id))
{flash.glue(node,text);}
else
{setTimeout(function(){that._fnFlashGlue(flash,node,text);},100);}},"_fnFlashSetText":function(clip,sData)
{var asData=this._fnChunkData(sData,8192);clip.clearText();for(var i=0,iLen=asData.length;i<iLen;i++)
{clip.appendText(asData[i]);}},"_fnColumnTargets":function(mColumns)
{var aColumns=[];var dt=this.s.dt;var i,iLen;if(typeof mColumns=="object")
{for(i=0,iLen=dt.aoColumns.length;i<iLen;i++)
{aColumns.push(false);}
for(i=0,iLen=mColumns.length;i<iLen;i++)
{aColumns[mColumns[i]]=true;}}
else if(mColumns=="visible")
{for(i=0,iLen=dt.aoColumns.length;i<iLen;i++)
{aColumns.push(dt.aoColumns[i].bVisible?true:false);}}
else if(mColumns=="hidden")
{for(i=0,iLen=dt.aoColumns.length;i<iLen;i++)
{aColumns.push(dt.aoColumns[i].bVisible?false:true);}}
else if(mColumns=="sortable")
{for(i=0,iLen=dt.aoColumns.length;i<iLen;i++)
{aColumns.push(dt.aoColumns[i].bSortable?true:false);}}
else
{for(i=0,iLen=dt.aoColumns.length;i<iLen;i++)
{aColumns.push(true);}}
return aColumns;},"_fnNewline":function(oConfig)
{if(oConfig.sNewLine=="auto")
{return navigator.userAgent.match(/Windows/)?"\r\n":"\n";}
else
{return oConfig.sNewLine;}},"_fnGetDataTablesData":function(oConfig)
{var i,iLen,j,jLen;var aRow,aData=[],sLoopData='',arr;var dt=this.s.dt,tr,child;var regex=new RegExp(oConfig.sFieldBoundary,"g");var aColumnsInc=this._fnColumnTargets(oConfig.mColumns);var bSelectedOnly=(typeof oConfig.bSelectedOnly!='undefined')?oConfig.bSelectedOnly:false;if(oConfig.bHeader)
{aRow=[];for(i=0,iLen=dt.aoColumns.length;i<iLen;i++)
{if(aColumnsInc[i])
{sLoopData=dt.aoColumns[i].sTitle.replace(/\n/g," ").replace(/<.*?>/g,"").replace(/^\s+|\s+$/g,"");sLoopData=this._fnHtmlDecode(sLoopData);aRow.push(this._fnBoundData(sLoopData,oConfig.sFieldBoundary,regex));}}
aData.push(aRow.join(oConfig.sFieldSeperator));}
var aSelected=this.fnGetSelected();bSelectedOnly=this.s.select.type!=="none"&&bSelectedOnly&&aSelected.length!==0;var api=$.fn.dataTable.Api;var aDataIndex=api?new api(dt).rows(oConfig.oSelectorOpts).indexes().flatten().toArray():dt.oInstance.$('tr',oConfig.oSelectorOpts).map(function(id,row){return bSelectedOnly&&$.inArray(row,aSelected)===-1?null:dt.oInstance.fnGetPosition(row);}).get();for(j=0,jLen=aDataIndex.length;j<jLen;j++)
{tr=dt.aoData[aDataIndex[j]].nTr;aRow=[];for(i=0,iLen=dt.aoColumns.length;i<iLen;i++)
{if(aColumnsInc[i])
{var mTypeData=dt.oApi._fnGetCellData(dt,aDataIndex[j],i,'display');if(oConfig.fnCellRender)
{sLoopData=oConfig.fnCellRender(mTypeData,i,tr,aDataIndex[j])+"";}
else if(typeof mTypeData=="string")
{sLoopData=mTypeData.replace(/\n/g," ");sLoopData=sLoopData.replace(/<img.*?\s+alt\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+)).*?>/gi,'$1$2$3');sLoopData=sLoopData.replace(/<.*?>/g,"");}
else
{sLoopData=mTypeData+"";}
sLoopData=sLoopData.replace(/^\s+/,'').replace(/\s+$/,'');sLoopData=this._fnHtmlDecode(sLoopData);aRow.push(this._fnBoundData(sLoopData,oConfig.sFieldBoundary,regex));}}
aData.push(aRow.join(oConfig.sFieldSeperator));if(oConfig.bOpenRows)
{arr=$.grep(dt.aoOpenRows,function(o){return o.nParent===tr;});if(arr.length===1)
{sLoopData=this._fnBoundData($('td',arr[0].nTr).html(),oConfig.sFieldBoundary,regex);aData.push(sLoopData);}}}
if(oConfig.bFooter&&dt.nTFoot!==null)
{aRow=[];for(i=0,iLen=dt.aoColumns.length;i<iLen;i++)
{if(aColumnsInc[i]&&dt.aoColumns[i].nTf!==null)
{sLoopData=dt.aoColumns[i].nTf.innerHTML.replace(/\n/g," ").replace(/<.*?>/g,"");sLoopData=this._fnHtmlDecode(sLoopData);aRow.push(this._fnBoundData(sLoopData,oConfig.sFieldBoundary,regex));}}
aData.push(aRow.join(oConfig.sFieldSeperator));}
var _sLastData=aData.join(this._fnNewline(oConfig));return _sLastData;},"_fnBoundData":function(sData,sBoundary,regex)
{if(sBoundary==="")
{return sData;}
else
{return sBoundary+ sData.replace(regex,sBoundary+sBoundary)+ sBoundary;}},"_fnChunkData":function(sData,iSize)
{var asReturn=[];var iStrlen=sData.length;for(var i=0;i<iStrlen;i+=iSize)
{if(i+iSize<iStrlen)
{asReturn.push(sData.substring(i,i+iSize));}
else
{asReturn.push(sData.substring(i,iStrlen));}}
return asReturn;},"_fnHtmlDecode":function(sData)
{if(sData.indexOf('&')===-1)
{return sData;}
var n=document.createElement('div');return sData.replace(/&([^\s]*?);/g,function(match,match2){if(match.substr(1,1)==='#')
{return String.fromCharCode(Number(match2.substr(1)));}
else
{n.innerHTML=match;return n.childNodes[0].nodeValue;}});},"_fnPrintStart":function(oConfig)
{var that=this;var oSetDT=this.s.dt;this._fnPrintHideNodes(oSetDT.nTable);this.s.print.saveStart=oSetDT._iDisplayStart;this.s.print.saveLength=oSetDT._iDisplayLength;if(oConfig.bShowAll)
{oSetDT._iDisplayStart=0;oSetDT._iDisplayLength=-1;if(oSetDT.oApi._fnCalculateEnd){oSetDT.oApi._fnCalculateEnd(oSetDT);}
oSetDT.oApi._fnDraw(oSetDT);}
if(oSetDT.oScroll.sX!==""||oSetDT.oScroll.sY!=="")
{this._fnPrintScrollStart(oSetDT);$(this.s.dt.nTable).bind('draw.DTTT_Print',function(){that._fnPrintScrollStart(oSetDT);});}
var anFeature=oSetDT.aanFeatures;for(var cFeature in anFeature)
{if(cFeature!='i'&&cFeature!='t'&&cFeature.length==1)
{for(var i=0,iLen=anFeature[cFeature].length;i<iLen;i++)
{this.dom.print.hidden.push({"node":anFeature[cFeature][i],"display":"block"});anFeature[cFeature][i].style.display="none";}}}
$(document.body).addClass(this.classes.print.body);if(oConfig.sInfo!=="")
{this.fnInfo(oConfig.sInfo,3000);}
if(oConfig.sMessage)
{$('<div/>').addClass(this.classes.print.message).html(oConfig.sMessage).prependTo('body');}
this.s.print.saveScroll=$(window).scrollTop();window.scrollTo(0,0);$(document).bind("keydown.DTTT",function(e){if(e.keyCode==27)
{e.preventDefault();that._fnPrintEnd.call(that,e);}});},"_fnPrintEnd":function(e)
{var that=this;var oSetDT=this.s.dt;var oSetPrint=this.s.print;var oDomPrint=this.dom.print;this._fnPrintShowNodes();if(oSetDT.oScroll.sX!==""||oSetDT.oScroll.sY!=="")
{$(this.s.dt.nTable).unbind('draw.DTTT_Print');this._fnPrintScrollEnd();}
window.scrollTo(0,oSetPrint.saveScroll);$('div.'+this.classes.print.message).remove();$(document.body).removeClass('DTTT_Print');oSetDT._iDisplayStart=oSetPrint.saveStart;oSetDT._iDisplayLength=oSetPrint.saveLength;if(oSetDT.oApi._fnCalculateEnd){oSetDT.oApi._fnCalculateEnd(oSetDT);}
oSetDT.oApi._fnDraw(oSetDT);$(document).unbind("keydown.DTTT");},"_fnPrintScrollStart":function()
{var
oSetDT=this.s.dt,nScrollHeadInner=oSetDT.nScrollHead.getElementsByTagName('div')[0],nScrollHeadTable=nScrollHeadInner.getElementsByTagName('table')[0],nScrollBody=oSetDT.nTable.parentNode,nTheadSize,nTfootSize;nTheadSize=oSetDT.nTable.getElementsByTagName('thead');if(nTheadSize.length>0)
{oSetDT.nTable.removeChild(nTheadSize[0]);}
if(oSetDT.nTFoot!==null)
{nTfootSize=oSetDT.nTable.getElementsByTagName('tfoot');if(nTfootSize.length>0)
{oSetDT.nTable.removeChild(nTfootSize[0]);}}
nTheadSize=oSetDT.nTHead.cloneNode(true);oSetDT.nTable.insertBefore(nTheadSize,oSetDT.nTable.childNodes[0]);if(oSetDT.nTFoot!==null)
{nTfootSize=oSetDT.nTFoot.cloneNode(true);oSetDT.nTable.insertBefore(nTfootSize,oSetDT.nTable.childNodes[1]);}
if(oSetDT.oScroll.sX!=="")
{oSetDT.nTable.style.width=$(oSetDT.nTable).outerWidth()+"px";nScrollBody.style.width=$(oSetDT.nTable).outerWidth()+"px";nScrollBody.style.overflow="visible";}
if(oSetDT.oScroll.sY!=="")
{nScrollBody.style.height=$(oSetDT.nTable).outerHeight()+"px";nScrollBody.style.overflow="visible";}},"_fnPrintScrollEnd":function()
{var
oSetDT=this.s.dt,nScrollBody=oSetDT.nTable.parentNode;if(oSetDT.oScroll.sX!=="")
{nScrollBody.style.width=oSetDT.oApi._fnStringToCss(oSetDT.oScroll.sX);nScrollBody.style.overflow="auto";}
if(oSetDT.oScroll.sY!=="")
{nScrollBody.style.height=oSetDT.oApi._fnStringToCss(oSetDT.oScroll.sY);nScrollBody.style.overflow="auto";}},"_fnPrintShowNodes":function()
{var anHidden=this.dom.print.hidden;for(var i=0,iLen=anHidden.length;i<iLen;i++)
{anHidden[i].node.style.display=anHidden[i].display;}
anHidden.splice(0,anHidden.length);},"_fnPrintHideNodes":function(nNode)
{var anHidden=this.dom.print.hidden;var nParent=nNode.parentNode;var nChildren=nParent.childNodes;for(var i=0,iLen=nChildren.length;i<iLen;i++)
{if(nChildren[i]!=nNode&&nChildren[i].nodeType==1)
{var sDisplay=$(nChildren[i]).css("display");if(sDisplay!="none")
{anHidden.push({"node":nChildren[i],"display":sDisplay});nChildren[i].style.display="none";}}}
if(nParent.nodeName.toUpperCase()!="BODY")
{this._fnPrintHideNodes(nParent);}}};TableTools._aInstances=[];TableTools._aListeners=[];TableTools.fnGetMasters=function()
{var a=[];for(var i=0,iLen=TableTools._aInstances.length;i<iLen;i++)
{if(TableTools._aInstances[i].s.master)
{a.push(TableTools._aInstances[i]);}}
return a;};TableTools.fnGetInstance=function(node)
{if(typeof node!='object')
{node=document.getElementById(node);}
for(var i=0,iLen=TableTools._aInstances.length;i<iLen;i++)
{if(TableTools._aInstances[i].s.master&&TableTools._aInstances[i].dom.table==node)
{return TableTools._aInstances[i];}}
return null;};TableTools._fnEventListen=function(that,type,fn)
{TableTools._aListeners.push({"that":that,"type":type,"fn":fn});};TableTools._fnEventDispatch=function(that,type,node,selected)
{var listeners=TableTools._aListeners;for(var i=0,iLen=listeners.length;i<iLen;i++)
{if(that.dom.table==listeners[i].that.dom.table&&listeners[i].type==type)
{listeners[i].fn(node,selected);}}};TableTools.buttonBase={"sAction":"text","sTag":"default","sLinerTag":"default","sButtonClass":"DTTT_button_text","sButtonText":"Button text","sTitle":"","sToolTip":"","sCharSet":"utf8","bBomInc":false,"sFileName":"*.csv","sFieldBoundary":"","sFieldSeperator":"\t","sNewLine":"auto","mColumns":"all","bHeader":true,"bFooter":true,"bOpenRows":false,"bSelectedOnly":false,"oSelectorOpts":undefined,"fnMouseover":null,"fnMouseout":null,"fnClick":null,"fnSelect":null,"fnComplete":null,"fnInit":null,"fnCellRender":null};TableTools.BUTTONS={"csv":$.extend({},TableTools.buttonBase,{"sAction":"flash_save","sButtonClass":"DTTT_button_csv","sButtonText":"CSV","sFieldBoundary":'"',"sFieldSeperator":",","fnClick":function(nButton,oConfig,flash){this.fnSetText(flash,this.fnGetTableData(oConfig));}}),"xls":$.extend({},TableTools.buttonBase,{"sAction":"flash_save","sCharSet":"utf16le","bBomInc":true,"sButtonClass":"DTTT_button_xls","sButtonText":"Excel","fnClick":function(nButton,oConfig,flash){this.fnSetText(flash,this.fnGetTableData(oConfig));}}),"copy":$.extend({},TableTools.buttonBase,{"sAction":"flash_copy","sButtonClass":"DTTT_button_copy","sButtonText":"Copy","fnClick":function(nButton,oConfig,flash){this.fnSetText(flash,this.fnGetTableData(oConfig));},"fnComplete":function(nButton,oConfig,flash,text){var lines=text.split('\n').length;if(oConfig.bHeader)lines--;if(this.s.dt.nTFoot!==null&&oConfig.bFooter)lines--;var plural=(lines==1)?"":"s";this.fnInfo('<h6>Table copied</h6>'+'<p>Copied '+lines+' row'+plural+' to the clipboard.</p>',1500);}}),"pdf":$.extend({},TableTools.buttonBase,{"sAction":"flash_pdf","sNewLine":"\n","sFileName":"*.pdf","sButtonClass":"DTTT_button_pdf","sButtonText":"PDF","sPdfOrientation":"portrait","sPdfSize":"A4","sPdfMessage":"","fnClick":function(nButton,oConfig,flash){this.fnSetText(flash,"title:"+ this.fnGetTitle(oConfig)+"\n"+"message:"+ oConfig.sPdfMessage+"\n"+"colWidth:"+ this.fnCalcColRatios(oConfig)+"\n"+"orientation:"+ oConfig.sPdfOrientation+"\n"+"size:"+ oConfig.sPdfSize+"\n"+"--/TableToolsOpts--\n"+
this.fnGetTableData(oConfig));}}),"print":$.extend({},TableTools.buttonBase,{"sInfo":"<h6>Print view</h6><p>Please use your browser's print function to "+"print this table. Press escape when finished.</p>","sMessage":null,"bShowAll":true,"sToolTip":"View print view","sButtonClass":"DTTT_button_print","sButtonText":"Print","fnClick":function(nButton,oConfig){this.fnPrint(true,oConfig);}}),"text":$.extend({},TableTools.buttonBase),"select":$.extend({},TableTools.buttonBase,{"sButtonText":"Select button","fnSelect":function(nButton,oConfig){if(this.fnGetSelected().length!==0){$(nButton).removeClass(this.classes.buttons.disabled);}else{$(nButton).addClass(this.classes.buttons.disabled);}},"fnInit":function(nButton,oConfig){$(nButton).addClass(this.classes.buttons.disabled);}}),"select_single":$.extend({},TableTools.buttonBase,{"sButtonText":"Select button","fnSelect":function(nButton,oConfig){var iSelected=this.fnGetSelected().length;if(iSelected==1){$(nButton).removeClass(this.classes.buttons.disabled);}else{$(nButton).addClass(this.classes.buttons.disabled);}},"fnInit":function(nButton,oConfig){$(nButton).addClass(this.classes.buttons.disabled);}}),"select_all":$.extend({},TableTools.buttonBase,{"sButtonText":"Select all","fnClick":function(nButton,oConfig){this.fnSelectAll();},"fnSelect":function(nButton,oConfig){if(this.fnGetSelected().length==this.s.dt.fnRecordsDisplay()){$(nButton).addClass(this.classes.buttons.disabled);}else{$(nButton).removeClass(this.classes.buttons.disabled);}}}),"select_none":$.extend({},TableTools.buttonBase,{"sButtonText":"Deselect all","fnClick":function(nButton,oConfig){this.fnSelectNone();},"fnSelect":function(nButton,oConfig){if(this.fnGetSelected().length!==0){$(nButton).removeClass(this.classes.buttons.disabled);}else{$(nButton).addClass(this.classes.buttons.disabled);}},"fnInit":function(nButton,oConfig){$(nButton).addClass(this.classes.buttons.disabled);}}),"ajax":$.extend({},TableTools.buttonBase,{"sAjaxUrl":"/xhr.php","sButtonText":"Ajax button","fnClick":function(nButton,oConfig){var sData=this.fnGetTableData(oConfig);$.ajax({"url":oConfig.sAjaxUrl,"data":[{"name":"tableData","value":sData}],"success":oConfig.fnAjaxComplete,"dataType":"json","type":"POST","cache":false,"error":function(){alert("Error detected when sending table data to server");}});},"fnAjaxComplete":function(json){alert('Ajax complete');}}),"div":$.extend({},TableTools.buttonBase,{"sAction":"div","sTag":"div","sButtonClass":"DTTT_nonbutton","sButtonText":"Text button"}),"collection":$.extend({},TableTools.buttonBase,{"sAction":"collection","sButtonClass":"DTTT_button_collection","sButtonText":"Collection","fnClick":function(nButton,oConfig){this._fnCollectionShow(nButton,oConfig);}})};TableTools.buttons=TableTools.BUTTONS;TableTools.classes={"container":"DTTT_container","buttons":{"normal":"DTTT_button","disabled":"DTTT_disabled"},"collection":{"container":"DTTT_collection","background":"DTTT_collection_background","buttons":{"normal":"DTTT_button","disabled":"DTTT_disabled"}},"select":{"table":"DTTT_selectable","row":"DTTT_selected selected"},"print":{"body":"DTTT_Print","info":"DTTT_print_info","message":"DTTT_PrintMessage"}};TableTools.classes_themeroller={"container":"DTTT_container ui-buttonset ui-buttonset-multi","buttons":{"normal":"DTTT_button ui-button ui-state-default"},"collection":{"container":"DTTT_collection ui-buttonset ui-buttonset-multi"}};TableTools.DEFAULTS={"sSwfPath":"../swf/copy_csv_xls_pdf.swf","sRowSelect":"none","sRowSelector":"tr","sSelectedClass":null,"fnPreRowSelect":null,"fnRowSelected":null,"fnRowDeselected":null,"aButtons":["copy","csv","xls","pdf","print"],"oTags":{"container":"div","button":"a","liner":"span","collection":{"container":"div","button":"a","liner":"span"}}};TableTools.defaults=TableTools.DEFAULTS;TableTools.prototype.CLASS="TableTools";TableTools.version="2.2.2";if($.fn.dataTable.Api){$.fn.dataTable.Api.register('tabletools()',function(){var tt=null;if(this.context.length>0){tt=TableTools.fnGetInstance(this.context[0].nTable);}
return tt;});}
if(typeof $.fn.dataTable=="function"&&typeof $.fn.dataTableExt.fnVersionCheck=="function"&&$.fn.dataTableExt.fnVersionCheck('1.9.0'))
{$.fn.dataTableExt.aoFeatures.push({"fnInit":function(oDTSettings){var init=oDTSettings.oInit;var opts=init?init.tableTools||init.oTableTools||{}:{};return new TableTools(oDTSettings.oInstance,opts).dom.container;},"cFeature":"T","sFeature":"TableTools"});}
else
{alert("Warning: TableTools requires DataTables 1.9.0 or newer - www.datatables.net/download");}
$.fn.DataTable.TableTools=TableTools;})(jQuery,window,document);if(typeof $.fn.dataTable=="function"&&typeof $.fn.dataTableExt.fnVersionCheck=="function"&&$.fn.dataTableExt.fnVersionCheck('1.9.0'))
{$.fn.dataTableExt.aoFeatures.push({"fnInit":function(oDTSettings){var oOpts=typeof oDTSettings.oInit.oTableTools!='undefined'?oDTSettings.oInit.oTableTools:{};var oTT=new TableTools(oDTSettings.oInstance,oOpts);TableTools._aInstances.push(oTT);return oTT.dom.container;},"cFeature":"T","sFeature":"TableTools"});}
else
{alert("Warning: TableTools 2 requires DataTables 1.9.0 or newer - www.datatables.net/download");}
$.fn.dataTable.TableTools=TableTools;$.fn.DataTable.TableTools=TableTools;return TableTools;};if(typeof define==='function'&&define.amd){define(['jquery','datatables'],factory);}
else if(typeof exports==='object'){factory(require('jquery'),require('datatables'));}
else if(jQuery&&!jQuery.fn.dataTable.TableTools){factory(jQuery,jQuery.fn.dataTable);}})(window,document);