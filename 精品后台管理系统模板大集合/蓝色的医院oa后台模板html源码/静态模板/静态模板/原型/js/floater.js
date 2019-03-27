self.onError=null;      
currentX = currentY =0;      
whichIt = null;      
lastScrollX =-10; lastScrollY = -100;      
NS = (document.layers) ? 1 : 0;      
IE = (document.all) ? 1: 0;      
<!-- STALKER CODE -->      
function heartBeat() {      
if(IE) { diffY = document.body.scrollTop; diffX = document.body.scrollLeft; }      
if(NS) { diffY = self.pageYOffset; diffX = self.pageXOffset; }      
if(diffY != lastScrollY) {      
percent = .1 * (diffY - lastScrollY);      
if(percent > 0) percent = Math.ceil(percent);      
else percent = Math.floor(percent);      
if(IE) document.all.floater.style.pixelTop += percent;      
if(NS) document.floater.top += percent;      
lastScrollY = lastScrollY + percent;      
}      
if(diffX != lastScrollX) {      
percent = .1 * (diffX - lastScrollX);      
if(percent > 0) percent = Math.ceil(percent);      
else percent = Math.floor(percent);      
if(IE) document.all.floater.style.pixelLeft += percent;      
if(NS) document.floater.left += percent;      
lastScrollX = lastScrollX + percent;      
}      
}      
<!-- /STALKER CODE -->      
<!-- DRAG DROP CODE -->      
function checkFocus(x,y) {      
stalkerx = document.floater.pageX;      
stalkery = document.floater.pageY;      
stalkerwidth = document.floater.clip.width;      
stalkerheight = document.floater.clip.height;      
if( (x > stalkerx && x < (stalkerx+stalkerwidth)) && (y > stalkery && y < (stalkery+stalkerheight))) return true;      
else return false;      
}      
function grabIt(e) {      
if(IE) {      
whichIt = event.srcElement;      
while (whichIt.id.indexOf("floater") == -1) {      
whichIt = whichIt.parentElement;      
if (whichIt == null) { return true; }      
}      
whichIt.style.pixelLeft = whichIt.offsetLeft;      
whichIt.style.pixelTop = whichIt.offsetTop;      
currentX = (event.clientX + document.body.scrollLeft);      
currentY = (event.clientY + document.body.scrollTop);      
} else {      
window.captureEvents(Event.MOUSEMOVE);      
if(checkFocus (e.pageX,e.pageY)) {      
whichIt = document.floater;      
StalkerTouchedX = e.pageX-document.floater.pageX;      
StalkerTouchedY = e.pageY-document.floater.pageY;      
}      
}      
return true;      
}      
function moveIt(e) {      
if (whichIt == null) { return false; }      
if(IE) {      
newX = (event.clientX + document.body.scrollLeft);      
newY = (event.clientY + document.body.scrollTop);      
distanceX = (newX - currentX); distanceY = (newY - currentY);      
currentX = newX; currentY = newY;      
whichIt.style.pixelLeft += distanceX;      
whichIt.style.pixelTop += distanceY;      
if(whichIt.style.pixelTop < document.body.scrollTop) whichIt.style.pixelTop = document.body.scrollTop;      
if(whichIt.style.pixelLeft < document.body.scrollLeft) whichIt.style.pixelLeft = document.body.scrollLeft;      
if(whichIt.style.pixelLeft > document.body.offsetWidth - document.body.scrollLeft - whichIt.style.pixelWidth - 20) whichIt.style.pixelLeft = document.body.offsetWidth - whichIt.style.pixelWidth - 20;      
if(whichIt.style.pixelTop > document.body.offsetHeight + document.body.scrollTop - whichIt.style.pixelHeight - 5) whichIt.style.pixelTop = document.body.offsetHeight + document.body.scrollTop - whichIt.style.pixelHeight - 5;      
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
<!-- DRAG DROP CODE -->      
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