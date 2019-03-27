<!-- Begin
Stamp = new Date();
document.write('' + Stamp.getYear() +"-"+(Stamp.getMonth() + 1)+ "-"+ Stamp.getDate()+ '¡¡');
var Hours;
var Mins;
var Time;
Hours = Stamp.getHours();
if (Hours >= 12) {
Time = " P.M.";
}
else {
Time = " A.M.";
}
if (Hours > 12) {
Hours -= 12;
}
if (Hours == 0) {
Hours = 12;
}
Mins = Stamp.getMinutes();
if (Mins < 10) {
Mins = "0" + Mins;
}    
document.write('' + Hours + ":" + Mins + Time + '');
// End 
// -->