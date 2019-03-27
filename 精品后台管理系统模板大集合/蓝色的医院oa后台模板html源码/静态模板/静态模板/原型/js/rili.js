var bsYear; 
var bsDate; 
var bsWeek; 
var arrLen=8; //数组长度 
var sValue=0; //当年的秒数 
var dayiy=0; //当年第几天 
var miy=0; //月份的下标 
var iyear=0; //年份标记 
var dayim=0; //当月第几天 
var spd=86400; //每天的秒数 

var year1999="30;29;29;30;29;29;30;29;30;30;30;29"; //354 
var year2000="30;30;29;29;30;29;29;30;29;30;30;29"; //354 
var year2001="30;30;29;30;29;30;29;29;30;29;30;29;30"; //384 
var year2002="30;30;29;30;29;30;29;29;30;29;30;29"; //354 
var year2003="30;30;29;30;30;29;30;29;29;30;29;30"; //355 
var year2004="29;30;29;30;30;29;30;29;30;29;30;29;30"; //384 
var year2005="29;30;29;30;29;30;30;29;30;29;30;29"; //354 
var year2006="30;29;30;29;30;30;29;29;30;30;29;29;30"; 

var month1999="正月;二月;三月;四月;五月;六月;七月;八月;九月;十月;十一月;十二月" 
var month2001="正月;二月;三月;四月;闰四月;五月;六月;七月;八月;九月;十月;十一月;十二月" 
var month2004="正月;二月;闰二月;三月;四月;五月;六月;七月;八月;九月;十月;十一月;十二月" 
var month2006="正月;二月;三月;四月;五月;六月;七月;闰七月;八月;九月;十月;十一月;十二月" 
var Dn="初一;初二;初三;初四;初五;初六;初七;初八;初九;初十;十一;十二;十三;十四;十五;十六;十七;十八;十九;二十;廿一;廿二;廿三;廿四;廿五;廿六;廿七;廿八;廿九;三十"; 

var Ys=new Array(arrLen); 
Ys[0]=919094400;Ys[1]=949680000;Ys[2]=980265600; 
Ys[3]=1013443200;Ys[4]=1044028800;Ys[5]=1074700800; 
Ys[6]=1107878400;Ys[7]=1138464000; 

var Yn=new Array(arrLen); //农历年的名称 
Yn[0]="己卯年";Yn[1]="庚辰年";Yn[2]="辛巳年"; 
Yn[3]="壬午年";Yn[4]="癸未年";Yn[5]="甲申年"; 
Yn[6]="乙酉年";Yn[7]="丙戌年"; 
var D=new Date(); 
var yy=D.getYear(); 
var mm=D.getMonth()+1; 
var dd=D.getDate(); 
var ww=D.getDay(); 
if (ww==0) ww="星期日"; 
if (ww==1) ww="星期一"; 
if (ww==2) ww="星期二"; 
if (ww==3) ww="星期三"; 
if (ww==4) ww="星期四"; 
if (ww==5) ww="星期五"; 
if (ww==6) ww="星期六"; 
ww=ww; 
var ss=parseInt(D.getTime() / 1000); 
if (yy<100) yy="19"+yy; 

for (i=0;i<arrLen;i++) 
if (ss>=Ys[i]){ 
iyear=i; 
sValue=ss-Ys[i]; //当年的秒数 
} 
dayiy=parseInt(sValue/spd)+1; //当年的天数 

var dpm=year1999; 
if (iyear==1) dpm=year2000; 
if (iyear==2) dpm=year2001; 
if (iyear==3) dpm=year2002; 
if (iyear==4) dpm=year2003; 
if (iyear==5) dpm=year2004; 
if (iyear==6) dpm=year2005; 
if (iyear==7) dpm=year2006; 
dpm=dpm.split(";"); 

var Mn=month1999; 
if (iyear==2) Mn=month2001; 
if (iyear==5) Mn=month2004; 
if (iyear==7) Mn=month2006; 
Mn=Mn.split(";"); 

var Dn="初一;初二;初三;初四;初五;初六;初七;初八;初九;初十;十一;十二;十三;十四;十五;十六;十七;十八;十九;二十;廿一;廿二;廿三;廿四;廿五;廿六;廿七;廿八;廿九;三十"; 
Dn=Dn.split(";"); 

dayim=dayiy; 

var total=new Array(13); 
total[0]=parseInt(dpm[0]); 
for (i=1;i<dpm.length-1;i++) total[i]=parseInt(dpm[i])+total[i-1]; 
for (i=dpm.length-1;i>0;i--) 
if (dayim>total[i-1]){ 
dayim=dayim-total[i-1]; 
miy=i; 
} 
bsWeek=ww+" "; 
bsDate=yy+"年"+mm+"月"; 
bsDate2=dd+"日<br>"; 
bsYear="<br>农历"+Yn[iyear]; 
bsYear2=Mn[miy]+Dn[dayim-1]; 
if (ss>=Ys[7]||ss<Ys[0]) bsYear=Yn[7]; 

//document.write(bsDate+bsDate2+bsWeek+bsYear+bsYear2); 

function show5(){if(!document.layers&&!document.all)
return
var Digital=new Date()
var hours=Digital.getHours()
var minutes=Digital.getMinutes()
var seconds=Digital.getSeconds()
if(minutes<=9)
minutes="0"+minutes
if(seconds<=9)
seconds="0"+seconds

myclock=hours+":"+minutes+":"+seconds+" "
if(document.layers){document.layers.liveclock.document.write(myclock)
document.layers.liveclock.document.close()
}else if(document.all)
liveclock.innerHTML=bsDate+bsDate2+bsWeek+myclock+bsYear+bsYear2
setTimeout("show5()",1000)
}
show5()
