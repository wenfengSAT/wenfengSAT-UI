<!--
function openwindow( url, winName, width, height) 
{
xposition=0; yposition=0;
if ((parseInt(navigator.appVersion) >= 4 ))
{
xposition = (screen.width - width) / 2;
yposition = (screen.height - height) / 2;
}
theproperty= "width=" + width + "," 
+ "height=" + height + "," 
+ "location=0," 
+ "menubar=0,"
+ "resizable=1,"
+ "scrollbars=1,"
+ "status=0," 
+ "titlebar=0,"
+ "toolbar=0,"
+ "hotkeys=0,"
+ "screenx=" + xposition + "," //仅适用于Netscape
+ "screeny=" + yposition + "," //仅适用于Netscape
+ "left=" + xposition + "," //IE
+ "top=" + yposition; //IE 
window.open( url,winName,theproperty );
}
//-->