self.onError=null;     
currentX = currentY = 0;     
whichIt = null;     
lastScrollX = 0; lastScrollY = 0;     
NS = (document.layers) ? 1 : 0;     
IE = (document.all) ? 1: 0;     
<!-- STALKER CODE -->     
function heartBeat() {     
if(IE) { diffY = parent.window.document.body.scrollTop; diffX = parent.window.document.body.scrollLeft; }
if(diffY != lastScrollY) {
percent = .1 * (diffY - lastScrollY);     
if(percent > 0) percent = Math.ceil(percent);     
else percent = Math.floor(percent);     
if(IE) document.all.notice.style.pixelTop += percent;
lastScrollY = lastScrollY + percent;
}     
if(diffX != lastScrollX) {     
percent = .1 * (diffX - lastScrollX);     
if(percent > 0) percent = Math.ceil(percent);     
else percent = Math.floor(percent);     
if(IE) document.all.notice.style.pixelLeft += percent;     
if(NS) document.notice.left += percent;     
lastScrollX = lastScrollX + percent;     
}     
}     
function checkFocus(x,y) {     
stalkerx = document.notice.pageX;     
stalkery = document.notice.pageY;     
stalkerwidth = document.notice.clip.width;     
stalkerheight = document.notice.clip.height;     
if( (x > stalkerx && x < (stalkerx+stalkerwidth)) && (y > stalkery && y < (stalkery+stalkerheight))) return true;     
else return false;     
}     
function grabIt(e) {     
if(IE) {     
whichIt = event.srcElement;     
while (whichIt.id.indexOf("notice") == -1) {     
whichIt = whichIt.parentElement;     
if (whichIt == null) { return true; }     
}     
whichIt.style.pixelLeft = whichIt.offsetLeft;     
whichIt.style.pixelTop = whichIt.offsetTop;     
currentX = (event.clientX + parent.window.document.body.scrollLeft);
currentY = (event.clientY + parent.window.document.body.scrollTop);
} else {     
window.captureEvents(Event.MOUSEMOVE);     
if(checkFocus (e.pageX,e.pageY)) {     
whichIt = document.notice;     
StalkerTouchedX = e.pageX-document.notice.pageX;     
StalkerTouchedY = e.pageY-document.notice.pageY;     
}}     
return true;}     
function moveIt(e) {     
if (whichIt == null) { return false; }     
if(IE) {     
newX = (event.clientX + parent.window.document.body.scrollLeft);
newY = (event.clientY + parent.window.document.body.scrollTop);
distanceX = (newX - currentX); distanceY = (newY - currentY);     
currentX = newX; currentY = newY;     
whichIt.style.pixelLeft += distanceX;     
whichIt.style.pixelTop += distanceY;     
if(whichIt.style.pixelTop < parent.window.document.body.scrollTop) whichIt.style.pixelTop = parent.window.document.body.scrollTop;
if(whichIt.style.pixelLeft < parent.window.document.body.scrollLeft) whichIt.style.pixelLeft = parent.window.document.body.scrollLeft;
if(whichIt.style.pixelLeft > parent.window.document.body.offsetWidth -parent.window.document.bodyscrollLeft - whichIt.style.pixelWidth - 20) whichIt.style.pixelLeft =parent.window.document.bodyoffsetWidth - whichIt.style.pixelWidth - 20;
if(whichIt.style.pixelTop > parent.window.document.body.offsetHeight +parent.window.document.bodyscrollTop - whichIt.style.pixelHeight - 5) whichIt.style.pixelTop =parent.window.document.bodyoffsetHeight +parent.window.document.bodyscrollTop - whichIt.style.pixelHeight - 5;
event.returnValue = false;     
} else {     
whichIt.moveTo(e.pageX-StalkerTouchedX,e.pageY-StalkerTouchedY);     
if(whichIt.left < 0+self.pageXOffset) whichIt.left = 0+self.pageXOffset;     
if(whichIt.top < 0+self.pageYOffset) whichIt.top = 0+self.pageYOffset;     
if( (whichIt.left + whichIt.clip.width) >= (window.innerWidth+self.pageXOffset-17)) whichIt.left = ((window.innerWidth+self.pageXOffset)-whichIt.clip.width)-17;     
if( (whichIt.top + whichIt.clip.height) >= (window.innerHeight+self.pageYOffset-17)) whichIt.top = ((window.innerHeight+self.pageYOffset)-whichIt.clip.height)-17;     
return false;     
}     
return false;     
}     
function dropIt() {     
whichIt = null;     
if(NS) window.releaseEvents (Event.MOUSEMOVE);     
return true;     
}     
if(NS) {     
window.captureEvents(Event.MOUSEUP|Event.MOUSEDOWN);     
window.onmousedown = grabIt;     
window.onmousemove = moveIt;     
window.onmouseup = dropIt;     
}     
if(IE) {     
document.onmousedown = grabIt;     
document.onmousemove = moveIt;     
document.onmouseup = dropIt;     
}     
if(NS || IE) action = window.setInterval("heartBeat()",1);