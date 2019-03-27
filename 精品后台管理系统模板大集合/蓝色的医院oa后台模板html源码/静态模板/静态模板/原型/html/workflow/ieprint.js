// JavaScript Document
function ieExecWB(intOLEcmd, intOLEparam )
{	
	var WebBrowser = "<OBJECT ID=WebBrowser1 WIDTH=0 HEIGHT=0 CLASSID=CLSID:8856F961-340A-11D0-A96B-00C04FD705A2></OBJECT>"
	document.body.insertAdjacentHTML( "beforeEnd", WebBrowser)
	if ( ( ! intOLEparam ) || ( intOLEparam < -1 )  || ( intOLEparam > 1 ) )
		intOLEparam = 1
    WebBrowser1.ExecWB( 7,1)
	WebBrowser1.outerHTML = ""
}