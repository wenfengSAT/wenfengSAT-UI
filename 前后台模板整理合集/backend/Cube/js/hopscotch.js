(function(context,namespace){var Hopscotch,HopscotchBubble,HopscotchCalloutManager,HopscotchI18N,customI18N,customRenderer,customEscape,templateToUse='bubble_default',Sizzle=window.Sizzle||null,utils,callbacks,helpers,winLoadHandler,defaultOpts,winHopscotch=context[namespace],undefinedStr='undefined',waitingToStart=false,hasJquery=(typeof window.jQuery!==undefinedStr),hasSessionStorage=false,isStorageWritable=false,document=window.document;try{if(typeof window.sessionStorage!==undefinedStr){hasSessionStorage=true;sessionStorage.setItem('hopscotch.test.storage','ok');sessionStorage.removeItem('hopscotch.test.storage');isStorageWritable=true;}}catch(err){}
defaultOpts={smoothScroll:true,scrollDuration:1000,scrollTopMargin:200,showCloseButton:true,showPrevButton:false,showNextButton:true,bubbleWidth:280,bubblePadding:15,arrowWidth:20,skipIfNoElement:true,cookieName:'hopscotch.tour.state'};if(winHopscotch){return;}
if(!Array.isArray){Array.isArray=function(obj){return Object.prototype.toString.call(obj)==='[object Array]';};}
winLoadHandler=function(){if(waitingToStart){winHopscotch.startTour();}};utils={addClass:function(domEl,classToAdd){var domClasses,classToAddArr,setClass,i,len;if(!domEl.className){domEl.className=classToAdd;}
else{classToAddArr=classToAdd.split(/\s+/);domClasses=' '+ domEl.className+' ';for(i=0,len=classToAddArr.length;i<len;++i){if(domClasses.indexOf(' '+ classToAddArr[i]+' ')<0){domClasses+=classToAddArr[i]+' ';}}
domEl.className=domClasses.replace(/^\s+|\s+$/g,'');}},removeClass:function(domEl,classToRemove){var domClasses,classToRemoveArr,currClass,i,len;classToRemoveArr=classToRemove.split(/\s+/);domClasses=' '+ domEl.className+' ';for(i=0,len=classToRemoveArr.length;i<len;++i){domClasses=domClasses.replace(' '+ classToRemoveArr[i]+' ',' ');}
domEl.className=domClasses.replace(/^\s+|\s+$/g,'');},hasClass:function(domEl,classToCheck){var classes;if(!domEl.className){return false;}
classes=' '+ domEl.className+' ';return(classes.indexOf(' '+ classToCheck+' ')!==-1);},getPixelValue:function(val){var valType=typeof val;if(valType==='number'){return val;}
if(valType==='string'){return parseInt(val,10);}
return 0;},valOrDefault:function(val,valDefault){return typeof val!==undefinedStr?val:valDefault;},invokeCallbackArrayHelper:function(arr){var fn;if(Array.isArray(arr)){fn=helpers[arr[0]];if(typeof fn==='function'){return fn.apply(this,arr.slice(1));}}},invokeCallbackArray:function(arr){var i,len;if(Array.isArray(arr)){if(typeof arr[0]==='string'){return utils.invokeCallbackArrayHelper(arr);}
else{for(i=0,len=arr.length;i<len;++i){utils.invokeCallback(arr[i]);}}}},invokeCallback:function(cb){if(typeof cb==='function'){return cb();}
if(typeof cb==='string'&&helpers[cb]){return helpers[cb]();}
else{return utils.invokeCallbackArray(cb);}},invokeEventCallbacks:function(evtType,stepCb){var cbArr=callbacks[evtType],callback,fn,i,len;if(stepCb){return this.invokeCallback(stepCb);}
for(i=0,len=cbArr.length;i<len;++i){this.invokeCallback(cbArr[i].cb);}},getScrollTop:function(){var scrollTop;if(typeof window.pageYOffset!==undefinedStr){scrollTop=window.pageYOffset;}
else{scrollTop=document.documentElement.scrollTop;}
return scrollTop;},getScrollLeft:function(){var scrollLeft;if(typeof window.pageXOffset!==undefinedStr){scrollLeft=window.pageXOffset;}
else{scrollLeft=document.documentElement.scrollLeft;}
return scrollLeft;},getWindowHeight:function(){return window.innerHeight||document.documentElement.clientHeight;},getWindowWidth:function(){return window.innerWidth||document.documentElement.clientWidth;},addEvtListener:function(el,evtName,fn){return el.addEventListener?el.addEventListener(evtName,fn,false):el.attachEvent('on'+ evtName,fn);},removeEvtListener:function(el,evtName,fn){return el.removeEventListener?el.removeEventListener(evtName,fn,false):el.detachEvent('on'+ evtName,fn);},documentIsReady:function(){return document.readyState==='complete'||document.readyState==='interactive';},evtPreventDefault:function(evt){if(evt.preventDefault){evt.preventDefault();}
else if(event){event.returnValue=false;}},extend:function(obj1,obj2){var prop;for(prop in obj2){if(obj2.hasOwnProperty(prop)){obj1[prop]=obj2[prop];}}},getStepTargetHelper:function(target){var result=document.getElementById(target);if(result){return result;}
if(hasJquery){result=jQuery(target);return result.length?result[0]:null;}
if(Sizzle){result=new Sizzle(target);return result.length?result[0]:null;}
if(document.querySelector){try{return document.querySelector(target);}catch(err){}}
if(/^#[a-zA-Z][\w-_:.]*$/.test(target)){return document.getElementById(target.substring(1));}
return null;},getStepTarget:function(step){var queriedTarget;if(!step||!step.target){return null;}
if(typeof step.target==='string'){return utils.getStepTargetHelper(step.target);}
else if(Array.isArray(step.target)){var i,len;for(i=0,len=step.target.length;i<len;i++){if(typeof step.target[i]==='string'){queriedTarget=utils.getStepTargetHelper(step.target[i]);if(queriedTarget){return queriedTarget;}}}
return null;}
return step.target;},getI18NString:function(key){return customI18N[key]||HopscotchI18N[key];},setState:function(name,value,days){var expires='',date;if(hasSessionStorage&&isStorageWritable){try{sessionStorage.setItem(name,value);}
catch(err){isStorageWritable=false;this.setState(name,value,days);}}
else{if(hasSessionStorage){sessionStorage.removeItem(name);}
if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires='; expires='+date.toGMTString();}
document.cookie=name+'='+value+expires+'; path=/';}},getState:function(name){var nameEQ=name+'=',ca=document.cookie.split(';'),i,c,state;if(hasSessionStorage){state=sessionStorage.getItem(name);if(state){return state;}}
for(i=0;i<ca.length;i++){c=ca[i];while(c.charAt(0)===' '){c=c.substring(1,c.length);}
if(c.indexOf(nameEQ)===0){state=c.substring(nameEQ.length,c.length);break;}}
return state;},clearState:function(name){if(hasSessionStorage){sessionStorage.removeItem(name);}
else{this.setState(name,'',-1);}}};utils.addEvtListener(window,'load',winLoadHandler);callbacks={next:[],prev:[],start:[],end:[],show:[],error:[],close:[]};helpers={};HopscotchI18N={stepNums:null,nextBtn:'Next',prevBtn:'Back',doneBtn:'Done',skipBtn:'Skip',closeTooltip:'Close'};customI18N={};HopscotchBubble=function(opt){this.init(opt);};HopscotchBubble.prototype={isShowing:false,currStep:undefined,setPosition:function(step){var bubbleBoundingHeight,bubbleBoundingWidth,boundingRect,top,left,arrowOffset,targetEl=utils.getStepTarget(step),el=this.element,arrowEl=this.arrowEl;bubbleBoundingWidth=el.offsetWidth;bubbleBoundingHeight=el.offsetHeight;utils.removeClass(el,'fade-in-down fade-in-up fade-in-left fade-in-right');if(!step.placement&&step.orientation){step.placement=step.orientation;}
boundingRect=targetEl.getBoundingClientRect();if(step.placement==='top'){top=(boundingRect.top- bubbleBoundingHeight)- this.opt.arrowWidth;left=boundingRect.left;}
else if(step.placement==='bottom'){top=boundingRect.bottom+ this.opt.arrowWidth;left=boundingRect.left;}
else if(step.placement==='left'){top=boundingRect.top;left=boundingRect.left- bubbleBoundingWidth- this.opt.arrowWidth;}
else if(step.placement==='right'){top=boundingRect.top;left=boundingRect.right+ this.opt.arrowWidth;}
else{throw'Bubble placement failed because step.placement is invalid or undefined!';}
if(step.arrowOffset!=='center'){arrowOffset=utils.getPixelValue(step.arrowOffset);}
else{arrowOffset=step.arrowOffset;}
if(!arrowOffset){arrowEl.style.top='';arrowEl.style.left='';}
else if(step.placement==='top'||step.placement==='bottom'){arrowEl.style.top='';if(arrowOffset==='center'){arrowEl.style.left=Math.floor((bubbleBoundingWidth/2)- arrowEl.offsetWidth/2)+'px';}
else{arrowEl.style.left=arrowOffset+'px';}}
else if(step.placement==='left'||step.placement==='right'){arrowEl.style.left='';if(arrowOffset==='center'){arrowEl.style.top=Math.floor((bubbleBoundingHeight/2)- arrowEl.offsetHeight/2)+'px';}
else{arrowEl.style.top=arrowOffset+'px';}}
if(step.xOffset==='center'){left=(boundingRect.left+ targetEl.offsetWidth/2)-(bubbleBoundingWidth/2);}
else{left+=utils.getPixelValue(step.xOffset);}
if(step.yOffset==='center'){top=(boundingRect.top+ targetEl.offsetHeight/2)-(bubbleBoundingHeight/2);}
else{top+=utils.getPixelValue(step.yOffset);}
if(!step.fixedElement){top+=utils.getScrollTop();left+=utils.getScrollLeft();}
el.style.position=(step.fixedElement?'fixed':'absolute');el.style.top=top+'px';el.style.left=left+'px';},render:function(step,idx,callback){var el=this.element,tourSpecificRenderer,customTourData,unsafe,currTour,totalSteps,nextBtnText,isLast,opts;if(step){this.currStep=step;}
else if(this.currStep){step=this.currStep;}
if(this.opt.isTourBubble){currTour=winHopscotch.getCurrTour();if(currTour){customTourData=currTour.customData;tourSpecificRenderer=currTour.customRenderer;unsafe=currTour.unsafe;if(Array.isArray(currTour.steps)){totalSteps=currTour.steps.length;isLast=(idx===totalSteps- 1);}}}else{customTourData=step.customData;tourSpecificRenderer=step.customRenderer;unsafe=step.unsafe;}
if(isLast){nextBtnText=utils.getI18NString('doneBtn');}else if(step.showSkip){nextBtnText=utils.getI18NString('skipBtn');}else{nextBtnText=utils.getI18NString('nextBtn');}
if(!step.placement&&step.orientation){step.placement=step.orientation;}
this.placement=step.placement;opts={i18n:{prevBtn:utils.getI18NString('prevBtn'),nextBtn:nextBtnText,closeTooltip:utils.getI18NString('closeTooltip'),stepNum:this._getStepI18nNum(idx),},buttons:{showPrev:(utils.valOrDefault(step.showPrevButton,this.opt.showPrevButton)&&(idx>0)),showNext:utils.valOrDefault(step.showNextButton,this.opt.showNextButton),showCTA:utils.valOrDefault((step.showCTAButton&&step.ctaLabel),false),ctaLabel:step.ctaLabel,showClose:utils.valOrDefault(this.opt.showCloseButton,true)},step:{num:idx,isLast:utils.valOrDefault(isLast,false),title:(step.title||''),content:(step.content||''),placement:step.placement,padding:utils.valOrDefault(step.padding,this.opt.bubblePadding),width:utils.getPixelValue(step.width)||this.opt.bubbleWidth,customData:(step.customData||{})},tour:{isTour:this.opt.isTourBubble,numSteps:totalSteps,unsafe:utils.valOrDefault(unsafe,false),customData:(customTourData||{})}};if(typeof tourSpecificRenderer==='function'){el.innerHTML=tourSpecificRenderer(opts);}
else if(typeof tourSpecificRenderer==='string'){if(!hopscotch.templates||(typeof hopscotch.templates[tourSpecificRenderer]!=='function')){throw'Bubble rendering failed - template "'+ tourSpecificRenderer+'" is not a function.';}
el.innerHTML=hopscotch.templates[tourSpecificRenderer](opts);}
else if(customRenderer){el.innerHTML=customRenderer(opts);}
else{if(!hopscotch.templates||(typeof hopscotch.templates[templateToUse]!=='function')){throw'Bubble rendering failed - template "'+ templateToUse+'" is not a function.';}
el.innerHTML=hopscotch.templates[templateToUse](opts);}
children=el.children;numChildren=children.length;for(i=0;i<numChildren;i++){node=children[i];if(utils.hasClass(node,'hopscotch-arrow')){this.arrowEl=node;}}
el.style.zIndex=(typeof step.zindex==='number')?step.zindex:'auto';this._setArrow(step.placement);this.hide(false);this.setPosition(step);if(callback){callback(!step.fixedElement);}
return this;},_getStepI18nNum:function(idx){var stepNumI18N=utils.getI18NString('stepNums');if(stepNumI18N&&idx<stepNumI18N.length){idx=stepNumI18N[idx];}
else{idx=idx+ 1;}
return idx;},_setArrow:function(orientation){utils.removeClass(this.arrowEl,'down up right left');if(orientation==='top'){utils.addClass(this.arrowEl,'down');}
else if(orientation==='bottom'){utils.addClass(this.arrowEl,'up');}
else if(orientation==='left'){utils.addClass(this.arrowEl,'right');}
else if(orientation==='right'){utils.addClass(this.arrowEl,'left');}},_getArrowDirection:function(){if(this.placement==='top'){return'down';}
if(this.placement==='bottom'){return'up';}
if(this.placement==='left'){return'right';}
if(this.placement==='right'){return'left';}},show:function(){var self=this,fadeClass='fade-in-'+ this._getArrowDirection(),fadeDur=1000;utils.removeClass(this.element,'hide');utils.addClass(this.element,fadeClass);setTimeout(function(){utils.removeClass(self.element,'invisible');},50);setTimeout(function(){utils.removeClass(self.element,fadeClass);},fadeDur);this.isShowing=true;return this;},hide:function(remove){var el=this.element;remove=utils.valOrDefault(remove,true);el.style.top='';el.style.left='';if(remove){utils.addClass(el,'hide');utils.removeClass(el,'invisible');}
else{utils.removeClass(el,'hide');utils.addClass(el,'invisible');}
utils.removeClass(el,'animate fade-in-up fade-in-down fade-in-right fade-in-left');this.isShowing=false;return this;},destroy:function(){var el=this.element;if(el){el.parentNode.removeChild(el);}
utils.removeEvtListener(el,'click',this.clickCb);},_handleBubbleClick:function(evt){var action;evt=evt||window.event;var targetElement=evt.target||evt.srcElement;function findMatchRecur(el){if(el===evt.currentTarget){return null;}
if(utils.hasClass(el,'hopscotch-cta')){return'cta';}
if(utils.hasClass(el,'hopscotch-next')){return'next';}
if(utils.hasClass(el,'hopscotch-prev')){return'prev';}
if(utils.hasClass(el,'hopscotch-close')){return'close';}
return findMatchRecur(el.parentElement);}
action=findMatchRecur(targetElement);if(action==='cta'){if(!this.opt.isTourBubble){winHopscotch.getCalloutManager().removeCallout(this.currStep.id);}
if(this.currStep.onCTA){utils.invokeCallback(this.currStep.onCTA);}}
else if(action==='next'){winHopscotch.nextStep(true);}
else if(action==='prev'){winHopscotch.prevStep(true);}
else if(action==='close'){if(this.opt.isTourBubble){var currStepNum=winHopscotch.getCurrStepNum(),currTour=winHopscotch.getCurrTour(),doEndCallback=(currStepNum===currTour.steps.length-1);utils.invokeEventCallbacks('close');winHopscotch.endTour(true,doEndCallback);}else{if(this.opt.onClose){utils.invokeCallback(this.opt.onClose);}
if(this.opt.id&&!this.opt.isTourBubble){winHopscotch.getCalloutManager().removeCallout(this.opt.id);}
else{this.destroy();}}
utils.evtPreventDefault(evt);}},init:function(initOpt){var el=document.createElement('div'),self=this,resizeCooldown=false,onWinResize,appendToBody,children,numChildren,node,i,opt;this.element=el;opt={showPrevButton:defaultOpts.showPrevButton,showNextButton:defaultOpts.showNextButton,bubbleWidth:defaultOpts.bubbleWidth,bubblePadding:defaultOpts.bubblePadding,arrowWidth:defaultOpts.arrowWidth,showNumber:true,isTourBubble:true};initOpt=(typeof initOpt===undefinedStr?{}:initOpt);utils.extend(opt,initOpt);this.opt=opt;el.className='hopscotch-bubble animated';if(!opt.isTourBubble){utils.addClass(el,'hopscotch-callout no-number');}
onWinResize=function(){if(resizeCooldown||!self.isShowing){return;}
resizeCooldown=true;setTimeout(function(){self.setPosition(self.currStep);resizeCooldown=false;},100);};utils.addEvtListener(window,'resize',onWinResize);this.clickCb=function(evt){self._handleBubbleClick(evt);};utils.addEvtListener(el,'click',this.clickCb);this.hide();if(utils.documentIsReady()){document.body.appendChild(el);}
else{if(document.addEventListener){appendToBody=function(){document.removeEventListener('DOMContentLoaded',appendToBody);window.removeEventListener('load',appendToBody);document.body.appendChild(el);};document.addEventListener('DOMContentLoaded',appendToBody,false);}
else{appendToBody=function(){if(document.readyState==='complete'){document.detachEvent('onreadystatechange',appendToBody);window.detachEvent('onload',appendToBody);document.body.appendChild(el);}};document.attachEvent('onreadystatechange',appendToBody);}
utils.addEvtListener(window,'load',appendToBody);}}};HopscotchCalloutManager=function(){var callouts={};this.createCallout=function(opt){var callout;if(opt.id){if(callouts[opt.id]){throw'Callout by that id already exists. Please choose a unique id.';}
opt.showNextButton=opt.showPrevButton=false;opt.isTourBubble=false;callout=new HopscotchBubble(opt);callouts[opt.id]=callout;if(opt.target){callout.render(opt,null,function(){callout.show();});}}
else{throw'Must specify a callout id.';}
return callout;};this.getCallout=function(id){return callouts[id];};this.removeAllCallouts=function(){var calloutId,callout;for(calloutId in callouts){if(callouts.hasOwnProperty(calloutId)){this.removeCallout(calloutId);}}};this.removeCallout=function(id){var callout=callouts[id];callouts[id]=null;if(!callout){return;}
callout.destroy();};};Hopscotch=function(initOptions){var self=this,bubble,calloutMgr,opt,currTour,currStepNum,cookieTourId,cookieTourStep,_configure,getBubble=function(setOptions){if(!bubble){bubble=new HopscotchBubble(opt);}
if(setOptions){utils.extend(bubble.opt,{bubblePadding:getOption('bubblePadding'),bubbleWidth:getOption('bubbleWidth'),showNextButton:getOption('showNextButton'),showPrevButton:getOption('showPrevButton'),showCloseButton:getOption('showCloseButton'),arrowWidth:getOption('arrowWidth')});}
return bubble;},getOption=function(name){if(typeof opt==='undefined'){return defaultOpts[name];}
return utils.valOrDefault(opt[name],defaultOpts[name]);},getCurrStep=function(){var step;if(currStepNum<0||currStepNum>=currTour.steps.length){step=null;}
else{step=currTour.steps[currStepNum];}
return step;},targetClickNextFn=function(){self.nextStep();},adjustWindowScroll=function(cb){var bubble=getBubble(),bubbleEl=bubble.element,bubbleTop=utils.getPixelValue(bubbleEl.style.top),bubbleBottom=bubbleTop+ utils.getPixelValue(bubbleEl.offsetHeight),targetEl=utils.getStepTarget(getCurrStep()),targetBounds=targetEl.getBoundingClientRect(),targetElTop=targetBounds.top+ utils.getScrollTop(),targetElBottom=targetBounds.bottom+ utils.getScrollTop(),targetTop=(bubbleTop<targetElTop)?bubbleTop:targetElTop,targetBottom=(bubbleBottom>targetElBottom)?bubbleBottom:targetElBottom,windowTop=utils.getScrollTop(),windowBottom=windowTop+ utils.getWindowHeight(),scrollToVal=targetTop- getOption('scrollTopMargin'),scrollEl,yuiAnim,yuiEase,direction,scrollIncr,scrollTimeout,scrollTimeoutFn;if(targetTop>=windowTop&&(targetTop<=windowTop+ getOption('scrollTopMargin')||targetBottom<=windowBottom)){if(cb){cb();}}
else if(!getOption('smoothScroll')){window.scrollTo(0,scrollToVal);if(cb){cb();}}
else{if(typeof YAHOO!==undefinedStr&&typeof YAHOO.env!==undefinedStr&&typeof YAHOO.env.ua!==undefinedStr&&typeof YAHOO.util!==undefinedStr&&typeof YAHOO.util.Scroll!==undefinedStr){scrollEl=YAHOO.env.ua.webkit?document.body:document.documentElement;yuiEase=YAHOO.util.Easing?YAHOO.util.Easing.easeOut:undefined;yuiAnim=new YAHOO.util.Scroll(scrollEl,{scroll:{to:[0,scrollToVal]}},getOption('scrollDuration')/1000, yuiEase);
yuiAnim.onComplete.subscribe(cb);yuiAnim.animate();}
else if(hasJquery){jQuery('body, html').animate({scrollTop:scrollToVal},getOption('scrollDuration'),cb);}
else{if(scrollToVal<0){scrollToVal=0;}
direction=(windowTop>targetTop)?-1:1;scrollIncr=Math.abs(windowTop- scrollToVal)/ (getOption('scrollDuration')/10);
scrollTimeoutFn=function(){var scrollTop=utils.getScrollTop(),scrollTarget=scrollTop+(direction*scrollIncr);if((direction>0&&scrollTarget>=scrollToVal)||(direction<0&&scrollTarget<=scrollToVal)){scrollTarget=scrollToVal;if(cb){cb();}
window.scrollTo(0,scrollTarget);return;}
window.scrollTo(0,scrollTarget);if(utils.getScrollTop()===scrollTop){if(cb){cb();}
return;}
setTimeout(scrollTimeoutFn,10);};scrollTimeoutFn();}}},goToStepWithTarget=function(direction,cb){var target,step,goToStepFn;if(currStepNum+ direction>=0&&currStepNum+ direction<currTour.steps.length){currStepNum+=direction;step=getCurrStep();goToStepFn=function(){target=utils.getStepTarget(step);if(target){cb(currStepNum);}
else{utils.invokeEventCallbacks('error');goToStepWithTarget(direction,cb);}};if(step.delay){setTimeout(goToStepFn,step.delay);}
else{goToStepFn();}}
else{cb(-1);}},changeStep=function(doCallbacks,direction){var bubble=getBubble(),self=this,step,origStep,wasMultiPage,changeStepCb;bubble.hide();doCallbacks=utils.valOrDefault(doCallbacks,true);step=getCurrStep();origStep=step;if(direction>0){wasMultiPage=origStep.multipage;}
else{wasMultiPage=(currStepNum>0&&currTour.steps[currStepNum-1].multipage);}
changeStepCb=function(stepNum){var doShowFollowingStep;if(stepNum===-1){return this.endTour(true);}
if(doCallbacks){if(direction>0){doShowFollowingStep=utils.invokeEventCallbacks('next',origStep.onNext);}
else{doShowFollowingStep=utils.invokeEventCallbacks('prev',origStep.onPrev);}}
if(stepNum!==currStepNum){return;}
if(wasMultiPage){utils.setState(getOption('cookieName'),currTour.id+':'+ currStepNum,1);return;}
doShowFollowingStep=utils.valOrDefault(doShowFollowingStep,true);if(doShowFollowingStep){this.showStep(stepNum);}
else{this.endTour(false);}};if(!wasMultiPage&&getOption('skipIfNoElement')){goToStepWithTarget(direction,function(stepNum){changeStepCb.call(self,stepNum);});}
else if(currStepNum+ direction>=0&&currStepNum+ direction<currTour.steps.length){currStepNum+=direction;step=getCurrStep();if(!utils.getStepTarget(step)&&!wasMultiPage){utils.invokeEventCallbacks('error');return this.endTour(true,false);}
changeStepCb.call(this,currStepNum);}
return this;},loadTour=function(tour){var tmpOpt={},prop,tourState,tourPair;for(prop in tour){if(tour.hasOwnProperty(prop)&&prop!=='id'&&prop!=='steps'){tmpOpt[prop]=tour[prop];}}
_configure.call(this,tmpOpt,true);tourState=utils.getState(getOption('cookieName'));if(tourState){tourPair=tourState.split(':');cookieTourId=tourPair[0];cookieTourStep=tourPair[1];cookieTourStep=parseInt(cookieTourStep,10);}
return this;},findStartingStep=function(startStepNum,cb){var step,target,stepNum;currStepNum=startStepNum||0;step=getCurrStep();target=utils.getStepTarget(step);if(target){cb(currStepNum);return;}
if(!target){utils.invokeEventCallbacks('error');if(getOption('skipIfNoElement')){goToStepWithTarget(1,cb);return;}
else{currStepNum=-1;cb(currStepNum);}}},showStepHelper=function(stepNum){var step=currTour.steps[stepNum],tourSteps=currTour.steps,numTourSteps=tourSteps.length,cookieVal=currTour.id+':'+ stepNum,bubble=getBubble(),targetEl=utils.getStepTarget(step),isLast,showBubble;showBubble=function(){bubble.show();utils.invokeEventCallbacks('show',step.onShow);};currStepNum=stepNum;bubble.hide(false);isLast=(stepNum===numTourSteps- 1);bubble.render(step,stepNum,function(adjustScroll){if(adjustScroll){adjustWindowScroll(showBubble);}
else{showBubble();}
if(step.nextOnTargetClick){utils.addEvtListener(targetEl,'click',targetClickNextFn);}});utils.setState(getOption('cookieName'),cookieVal,1);},init=function(initOptions){if(initOptions){this.configure(initOptions);}};this.getCalloutManager=function(){if(typeof calloutMgr===undefinedStr){calloutMgr=new HopscotchCalloutManager();}
return calloutMgr;};this.startTour=function(tour,stepNum){var bubble,currStepNum,self=this;if(!currTour){currTour=tour;loadTour.call(this,tour);}
if(typeof stepNum!==undefinedStr){if(stepNum>=currTour.steps.length){throw'Specified step number out of bounds.';}
currStepNum=stepNum;}
if(!utils.documentIsReady()){waitingToStart=true;return this;}
if(typeof currStepNum==="undefined"&&currTour.id===cookieTourId&&typeof cookieTourStep!==undefinedStr){currStepNum=cookieTourStep;}
else if(!currStepNum){currStepNum=0;}
findStartingStep(currStepNum,function(stepNum){var target=(stepNum!==-1)&&utils.getStepTarget(currTour.steps[stepNum]);if(!target){self.endTour(false,false);return;}
utils.invokeEventCallbacks('start');bubble=getBubble();bubble.hide(false);self.isActive=true;if(!utils.getStepTarget(getCurrStep())){utils.invokeEventCallbacks('error');if(getOption('skipIfNoElement')){self.nextStep(false);}}
else{self.showStep(stepNum);}});return this;};this.showStep=function(stepNum){var step=currTour.steps[stepNum];if(step.delay){setTimeout(function(){showStepHelper(stepNum);},step.delay);}
else{showStepHelper(stepNum);}
return this;};this.prevStep=function(doCallbacks){changeStep.call(this,doCallbacks,-1);return this;};this.nextStep=function(doCallbacks){var step=getCurrStep(),targetEl=utils.getStepTarget(step);if(step.nextOnTargetClick){utils.removeEvtListener(targetEl,'click',targetClickNextFn);}
changeStep.call(this,doCallbacks,1);return this;};this.endTour=function(clearState,doCallbacks){var bubble=getBubble();clearState=utils.valOrDefault(clearState,true);doCallbacks=utils.valOrDefault(doCallbacks,true);currStepNum=0;cookieTourStep=undefined;bubble.hide();if(clearState){utils.clearState(getOption('cookieName'));}
if(this.isActive){this.isActive=false;if(currTour&&doCallbacks){utils.invokeEventCallbacks('end');}}
this.removeCallbacks(null,true);this.resetDefaultOptions();currTour=null;return this;};this.getCurrTour=function(){return currTour;};this.getCurrTarget=function(){return utils.getStepTarget(getCurrStep());};this.getCurrStepNum=function(){return currStepNum;};this.refreshBubblePosition=function(){bubble.setPosition(getCurrStep());return this;};this.listen=function(evtType,cb,isTourCb){if(evtType){callbacks[evtType].push({cb:cb,fromTour:isTourCb});}
return this;};this.unlisten=function(evtType,cb){var evtCallbacks=callbacks[evtType],i,len;for(i=0,len=evtCallbacks.length;i<len;++i){if(evtCallbacks[i]===cb){evtCallbacks.splice(i,1);}}
return this;};this.removeCallbacks=function(evtName,tourOnly){var cbArr,i,len,evt;for(evt in callbacks){if(!evtName||evtName===evt){if(tourOnly){cbArr=callbacks[evt];for(i=0,len=cbArr.length;i<len;++i){if(cbArr[i].fromTour){cbArr.splice(i--,1);--len;}}}
else{callbacks[evt]=[];}}}
return this;};this.registerHelper=function(id,fn){if(typeof id==='string'&&typeof fn==='function'){helpers[id]=fn;}};this.unregisterHelper=function(id){helpers[id]=null;};this.invokeHelper=function(id){var args=[],i,len;for(i=1,len=arguments.length;i<len;++i){args.push(arguments[i]);}
if(helpers[id]){helpers[id].call(null,args);}};this.setCookieName=function(name){opt.cookieName=name;return this;};this.resetDefaultOptions=function(){opt={};return this;};this.resetDefaultI18N=function(){customI18N={};return this;};this.getState=function(){return utils.getState(getOption('cookieName'));};_configure=function(options,isTourOptions){var bubble,events=['next','prev','start','end','show','error','close'],eventPropName,callbackProp,i,len;if(!opt){this.resetDefaultOptions();}
utils.extend(opt,options);if(options){utils.extend(customI18N,options.i18n);}
for(i=0,len=events.length;i<len;++i){eventPropName='on'+ events[i].charAt(0).toUpperCase()+ events[i].substring(1);if(options[eventPropName]){this.listen(events[i],options[eventPropName],isTourOptions);}}
bubble=getBubble(true);return this;};this.configure=function(options){return _configure.call(this,options,false);};this.setRenderer=function(render){var typeOfRender=typeof render;if(typeOfRender==='string'){templateToUse=render;customRenderer=undefined;}
else if(typeOfRender==='function'){customRenderer=render;}
return this;};this.setEscaper=function(esc){if(typeof esc==='function'){customEscape=esc;}
return this;};init.call(this,initOptions);};winHopscotch=new Hopscotch();context[namespace]=winHopscotch;(function(){var _={};_.escape=function(str){if(customEscape){return customEscape(str);}
if(str==null)return'';return(''+ str).replace(new RegExp('[&<>"\']','g'),function(match){if(match=='&'){return'&amp;'}
if(match=='<'){return'&lt;'}
if(match=='>'){return'&gt;'}
if(match=='"'){return'&quot;'}
if(match=="'"){return'&#x27;'}});}
this["hopscotch"]=this["hopscotch"]||{};this["hopscotch"]["templates"]=this["hopscotch"]["templates"]||{};this["hopscotch"]["templates"]["bubble_default"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}
with(obj){function optEscape(str,unsafe){if(unsafe){return _.escape(str);}
return str;};__p+='\n<div class="hopscotch-bubble-container" style="width: '+
((__t=(step.width))==null?'':__t)+'px; padding: '+
((__t=(step.padding))==null?'':__t)+'px;">\n  ';if(tour.isTour){;__p+='<span class="hopscotch-bubble-number">'+
((__t=(i18n.stepNum))==null?'':__t)+'</span>';};__p+='\n  <div class="hopscotch-bubble-content">\n    ';if(step.title!==''){;__p+='<h3 class="hopscotch-title">'+
((__t=(optEscape(step.title,tour.unsafe)))==null?'':__t)+'</h3>';};__p+='\n    ';if(step.content!==''){;__p+='<div class="hopscotch-content">'+
((__t=(optEscape(step.content,tour.unsafe)))==null?'':__t)+'</div>';};__p+='\n  </div>\n  <div class="hopscotch-actions">\n    ';if(buttons.showPrev){;__p+='<button class="btn btn-default hopscotch-prev">'+
((__t=(i18n.prevBtn))==null?'':__t)+'</button>';};__p+='\n    ';if(buttons.showCTA){;__p+='<button class="btn btn-primary hopscotch-cta">'+
((__t=(buttons.ctaLabel))==null?'':__t)+'</button>';};__p+='\n    ';if(buttons.showNext){;__p+='<button class="btn btn-primary hopscotch-next">'+
((__t=(i18n.nextBtn))==null?'':__t)+'</button>';};__p+='\n  </div>\n  ';if(buttons.showClose){;__p+='<a title="'+
((__t=(i18n.closeTooltip))==null?'':__t)+'" href="#" class="hopscotch-bubble-close hopscotch-close"><i class="fa fa-times"></i></a>';};__p+='\n</div>\n<div class="hopscotch-bubble-arrow-container hopscotch-arrow">\n  <div class="hopscotch-bubble-arrow-border"></div>\n  <div class="hopscotch-bubble-arrow"></div>\n</div>';}
return __p};}());}(window,'hopscotch'));