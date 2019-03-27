// 作者：匡锦山 时间：2001年8月1日
// 程序的功用：打印框架页面

// fake print() for IE4.x
if ( !printIsNativeSupport() )
  window.print = printFrame;

// main stuff
function printFrame(frame, onfinish) {
  //alert(frame.name);
  if ( !frame ) frame = window;

  if ( frame.document.readyState !== "complete" &&
       !confirm("The document to print is not downloaded yet! Continue with printing?") )
  {
    if ( onfinish ) onfinish();
    return;
  }

  if ( printIsNativeSupport() ) {
    /* focus handling for this scope is IE5Beta workaround,
       should be gone with IE5 RTM.
    */
    var focused = document.activeElement; 
    frame.focus();
    frame.self.print();
    if ( onfinish ) onfinish();
    if ( focused && !focused.disabled ) focused.focus();
    return;
  }

  var eventScope = printGetEventScope(frame);
  var focused = document.activeElement;

  window.printHelper = function() {
    execScript("on error resume next: printWB.ExecWB 6, 1", "VBScript");
    printFireEvent(frame, eventScope, "onafterprint");
    printWB.outerHTML = "";
    if ( onfinish ) onfinish();
    if ( focused && !focused.disabled ) focused.focus();
    window.printHelper = null;
  }

  document.body.insertAdjacentHTML("beforeEnd",
    "<object id=\"printWB\" width=0 height=0 \
    classid=\"clsid:8856F961-340A-11D0-A96B-00C04FD705A2\"></object>");

  printFireEvent(frame, eventScope, "onbeforeprint");
  frame.focus();
  window.printHelper = printHelper;
  setTimeout("window.printHelper()", 0);
}

// helpers
function printIsNativeSupport() {
  var agent = window.navigator.userAgent;
  var i = agent.indexOf("MSIE ")+5;
  return parseInt(agent.substr(i)) >= 5 && agent.indexOf("5.0b1") < 0;
}

function printFireEvent(frame, obj, name) {
  var handler = obj[name];
  switch ( typeof(handler) ) {
    case "string": frame.execScript(handler); break;
    case "function": handler();
  }
}

function printGetEventScope(frame) {
  var frameset = frame.document.all.tags("FRAMESET");
  if ( frameset.length ) return frameset[0];
  return frame.document.body;
}
