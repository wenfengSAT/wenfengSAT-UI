// Ver: 4.2.30519
if(typeof(st_js)=="undefined"){
stAHCM=1;
stAHWS=1;
stAHWR=0;
nOP=nOP5=nIE=nIE4=nIE5=nNN=nNN4=nNN6=nMAC=nIEM=nIEW=nDM=nVER=st_delb=st_addb=0;st_reg=1;stnav();st_ttb=nIE||nOP&&(nVER>=6&&nVER<7);stHAL=["left","center","right"];stVAL=["top","middle","bottom"];stREP=["no-repeat","repeat-x","repeat-y","repeat"];stBDS=["none","solid","double","dotted","dashed","groove","ridge"];
st_gc=st_rl=st_cl=st_ct=st_cw=st_ch=st_cm=st_cp=st_ci=st_load=st_scr=0;st_ht="";st_ims=[];st_ms=[];st_old=0;
if(nNN4){stitovn=stevfn("stitov",1);stitoun=stevfn("stitou",1);stitckn=stevfn("stitck",1);stppovn=stevfn("stppov",0);stppoun=stevfn("stppou",0);}
if(nIE4||nNN4)onerror=function(m,u,l){if(!confirm("Java Script Error\n"+"\nDescription:"+m+"\nSource:"+u+"\nLine:"+l+"\n\nSee more details?"))onerror=null;}
if(nIEM||nOP5)onunload=function(){if(st_rl){clearInterval(st_rl);st_rl=0;}for(var j=0;j<st_ms.length;++j)st_ms[j].cfrm=0;return true;}
if(nDM&&!nNN4)
{
	var s="<STYLE>\n.st_tbcss,.st_tdcss,.st_divcss,.st_ftcss{border:none;padding:0px;margin:0px;}\n</STYLE>";
	for(var j=0;j<10;++j)
		s+="<FONT ID=st_gl"+j+"></FONT>";
	if(nIEW&&nVER>=5&&document.body)
		document.body.insertAdjacentHTML("AfterBegin",s);
	else
		document.write(s);
}st_js=1;}
function stm_bm(a)
{
	var w=a[2]&&a[2].charAt(a[2].length-1)!='/'?a[2]+'/':a[2];
	var p=a.length>15?a[15]&&a[15].charAt(a[15].length-1)!='/'?a[15]+'/':a[15]:"";
	st_ms[st_cm]={ps:[],mei:st_cm,ids:"Stm"+st_cm+"p",hdid:0,cked:0,cfrm:0,tfrm:window,sfrm:window,mcff:"",mcfd:0,mcfn:0,mcfb:1,mcfx:0,mcfy:0,mnam:a[0],mver:a[1],mweb:w,mbnk:stbuf(w+a[3]),mtyp:a[4],mcox:a[5],mcoy:a[6],maln:stHAL[a[7]],mcks:a[8],msdv:a[9],msdh:a[10],mhdd:nNN4?Math.max(100,a[11]):a[11],mhds:a[12],mhdo:a[13],mhdi:a[14],mpre:p,args:a.slice(0)};
}
function stm_bp(l,a)
{
	var m=st_ms[st_cm],i=m.ps.length?m.ps[st_cp].is[st_ci]:0;
	st_cp=m.ps.length;st_ci=0;
	m.ps[st_cp]={is:[],mei:st_cm,ppi:st_cp,ids:"Stm"+st_cm+"p"+st_cp+"i",par:i,tmid:0,citi:-1,issh:0,isst:!st_cp&&!m.mtyp,isck:!st_cp&&m.mcks,exed:0,pver:a[0],pdir:a[1],poffx:a[2],poffy:a[3],pspc:a[4],ppad:a[5],plmw:a[6],prmw:a[7],popc:a[8],pesh:a[9]?a[9]:"Normal",pesi:a[10],pehd:a[11]?a[11]:"Normal",pehi:a[12],pesp:a[13],pstp:a[14],psds:nIEW?a[15]:0,pscl:a[16],pbgc:a[17],pbgi:stbuf(stgsrc(a[18],m,0)),pbgr:stREP[a[19]],pbds:stBDS[a[20]],ipbw:a[21],pbdc:(!nDM||nNN4)?a[22].split(/\s/gi)[0]:a[22],args:a.slice(0)};
	var p=m.ps[st_cp];
	if(st_cp)	p.par.sub=p;
	p.zind=!st_cp?1000:stgpar(p.par).zind+1;
	p.pbgd=stgbg(p.pbgc,p.pbgi,p.pbgr);
	if(nIEW&&nVER>=5.5)
	{
		p.efsh=p.pesh=="Normal"?"stnm":"stft";
		p.efhd=p.pehd=="Normal"?"stnm":"stft";
	}
	else if(nIEW&&(nVER>=5||nVER>=4&&!p.isst))
	{
		p.efsh=p.pesi>=0?"stft":"stnm";
		p.efhd=p.pehi>=0?"stft":"stnm";
	}
	else
		p.efsh=p.efhd="stnm";
	eval(l+"=p");
}
function stm_bpx(l,r,a)
{
	var p=eval(r);
	stm_bp(l,a.concat(p.args.slice(a.length)));
}
function stm_ai(l,a)
{
	st_ci=st_ms[st_cm].ps[st_cp].is.length;
	var m=st_ms[st_cm],p=m.ps[st_cp];
	if(a[0]==6)
		p.is[st_ci]={ssiz:a[1],ibgc:[a[2]],simg:stbuf(stgsrc(a[3],m,1)),simw:a[4],simh:a[5],simb:a[6],args:a.slice(0)};
	else
		p.is[st_ci]={itex:a[0]?a[1]:a[1].replace(/ /g,"&nbsp;"),iimg:[stbuf(stgsrc(a[2],m,0)),stbuf(stgsrc(a[3],m,0))],iimw:a[4],iimh:a[5],iimb:a[6],iurl:(!a[7]||stabs(a[7])?a[7]:m.mpre+a[7]),itgt:a[8]?a[8]:"_self",istt:a[9],itip:a[10].replace(/"/g,"&quot;"),iicn:[stbuf(stgsrc(a[11],m,1)),stbuf(stgsrc(a[12],m,1))],iicw:a[13],iich:a[14],iicb:a[15],iarr:[stbuf(stgsrc(a[16],m,1)),stbuf(stgsrc(a[17],m,1))],iarw:a[18],iarh:a[19],iarb:a[20],ihal:stHAL[a[21]],ival:stVAL[a[22]],ibgc:nOP5&&nVER<7&&a[24]&&a[26]?["transparent","transparent"]:[nOP5&&nVER<7||!a[24]?a[23]:"transparent",nOP5&&nVER<7||!a[26]?a[25]:"transparent"],ibgi:[stbuf(stgsrc(a[27],m,0)),stbuf(stgsrc(a[28],m,0))],ibgr:[stREP[a[29]],stREP[a[30]]],ibds:stBDS[a[31]],ipbw:a[32],ibdc:(!nDM||nNN4)?[a[33].split(/\s/gi)[0],a[34].split(/\s/gi)[0]]:[a[33],a[34]],itxc:[a[35],a[36]],itxf:[a[37],a[38]],itxd:[stgdec(a[39]),stgdec(a[40])],args:a.slice(0)};
	var i=st_ms[st_cm].ps[st_cp].is[st_ci];
	i.ityp=a[0];
	i.mei=st_cm;
	i.ppi=st_cp;
	i.iti=st_ci;
	i.ids=p.ids+st_ci+"e";
	i.sub=0;
	i.tmid=0;
	if(i.ityp!=6)
		i.ibgd=[stgbg(i.ibgc[0],i.ibgi[0],i.ibgr[0]),stgbg(i.ibgc[1],i.ibgi[1],i.ibgr[1])];
	eval(l+"=i");
}
function stm_aix(l,r,a)
{
	var i=eval(r);
	stm_ai(l,a.concat(i.args.slice(a.length)));
}
function stm_ep()
{
	var m=st_ms[st_cm],p=m.ps[st_cp],i=p.par;
	if(i)
	{
		st_cm=i.mei;
		st_cp=i.ppi;
		st_ci=i.iti;
	}
	if(!p.is.length)
	{
		--m.ps.length;
		if(i)
			i.sub=0;
	}
}
function stm_em()
{
	if(!st_cm&&nDM)
	{
		if(typeof(onload)!="undefined"&&onload!=st_onload)
			st_old=onload;
		onload=st_onload;
	}
	var m=st_ms[st_cm];
	if(!m.ps.length)
	{
		--st_ms.length;
		return;
	}
	var mh="",mc="<STYLE TYPE='text/css'>\n";
	for(var n=nDM?m.ps.length:1,j=0;j<n;++j)
	{
		var p=m.ps[j],ph=(p.isst&&m.maln!="left"?"<TABLE STYLE='border:none;padding:0px;' CELLPADDING=0 CELLSPACING=0 ALIGN="+m.maln+"><TD class=st_tdcss>":"")+stpbtx(p);
		for(var k=0;k<p.is.length;++k)
		{
			var i=p.is[k];
			ph+=(p.pver?"<TR ID="+i.ids+"TR>":"")+stittx(i)+(p.pver?"</TR>":"");
			if(i.ityp!=6)
				mc+="."+i.ids+"TX0{"+sttcss(i,0)+"}\n."+i.ids+"TX1{"+sttcss(i,1)+"}\n";
		}
		ph+=stpetx(p);
		if(p.isst&&m.maln!="left")
			ph+="</TD></TABLE>";
		if(p.isst||nNN||!nDM)
			mh+=ph;
		else
			st_ht+=ph;
	}
	mc+="</STYLE>";
	if(!nDM||nNN4)
		document.write(mc);
	if(mh)
		document.write(mh);
	if(nOP5||nIEW&&nVER>=5||nNN6)
	{
		if(st_ht)
		{
			var o=stgobj("st_gl"+st_gc);
			if(nOP)
				o.document.write(st_ht);
			else if(nIE)
				o.insertAdjacentHTML("BeforeEnd",st_ht);
			st_gc++;
			st_ht="";
		}
		if(nIE)
			stpre(m);
	}
	++st_cm;st_cp=0;st_ci=0;
}
function stpbtx(p)
{
	with(p)
	return nNN4||!nDM?(isst?"<ILAYER":"<LAYER")+" VISIBILITY=hide ID="+ids+" Z-INDEX="+zind+"><LAYER><TABLE BORDER=0 CELLSPACING=0 CELLPADDING="+pspc+" BACKGROUND='"+pbgi+"' BGCOLOR="+(pbgi||pbgc=="transparent"?"''":pbgc)+">":(st_ttb?"<TABLE class=st_tbcss CELLPADDING=0 CELLSPACING=0":"<DIV class=st_divcss")+stppev(p)+" ID="+ids+" STYLE='"+(nIEM?"width:1px;":(nIE?"width:0px;":""))+stfcss(p)+"position:"+(p.isst?"static":"absolute")+";z-index:"+zind+";visibility:hidden;'>"+(st_ttb?"<TD class=st_tdcss ID="+ids+"TTD>":"")+"<TABLE class=st_tbcss CELLSPACING=0 CELLPADDING=0 ID="+ids+"TB STYLE='"+stpcss(p)+(nIEW?"margin:"+(nVER<5.5?psds:0)+"px;":"")+"'>";
}
function stpetx(p)
{
	return "</TABLE>"+(nNN4||!nDM?"</LAYER></LAYER>":(st_ttb?"</TD></TABLE>":"</DIV>"));
}
function stittx(i)
{
	var s="",p=stgpar(i);
	with(i)
	if(nNN4||!nDM)
	{
		s+="<TD WIDTH=1 NOWRAP><FONT STYLE='font-size:1pt;'><ILAYER ID="+ids+"><LAYER";
		if(ityp!=6&&ipbw)
			s+=" BGCOLOR="+ibdc[0];
		s+=">";
		for(var n=0;n<(nNN4?2:1);++n)
		{
			if(ityp==6&&n)
				break;
			s+="<LAYER Z-INDEX=10 VISIBILITY="+(n?"HIDE":"SHOW");
			if(ityp!=6)
				s+=" LEFT="+ipbw+" TOP="+ipbw;
			s+="><TABLE ALIGN=LEFT WIDTH=100% BORDER=0 CELLSPACING=0 CELLPADDING="+(ityp==6?0:p.ppad);
			if(ityp==6)
				s+=" BACKGROUND='' BGCOLOR='"+(ibgc[n]=="transparent"?"":ibgc[n])+"'";
			else
				s+=" BACKGROUND='"+ibgi[n]+"' BGCOLOR="+(ibgi[n]||ibgc[n]=="transparent"?"''":ibgc[n]);
			s+=">";
			if(ityp==6)
				s+="<TD NOWRAP VALIGN=TOP HEIGHT="+(p.pver?ssiz:"100%")+" WIDTH="+(p.pver?"100%":ssiz)+" STYLE='font-size:0pt;'>"+stgimg(simg,ids+"LINE",simw,simh,0)+"</TD>";
			else
			{
				if(p.pver&&p.plmw||!p.pver&&iicw)
					s+="<TD ALIGN=CENTER VALIGN=MIDDLE"+stgiws(i)+">"+stgimg(iicn[n],"",iicw,iich,iicb)+"</TD>";
				s+="<TD WIDTH=100% NOWRAP ALIGN="+ihal+" VALIGN="+ival+"><A "+(nNN4?"":stgurl(i,1))+" CLASS='"+(ids+"TX"+n)+"'>";
				if(ityp==2)
					s+=stgimg(iimg[n],ids+"IMG",iimw,iimh,iimb);
				else
					s+="<IMG SRC='"+stgme(i).mbnk+"' WIDTH=1 HEIGHT=1 BORDER=0 ALIGN=ABSMIDDLE>"+itex;
				s+="</A></TD>";
				if(p.pver&&p.prmw||!p.pver&&iarw)
					s+="<TD ALIGN=CENTER VALIGN=MIDDLE"+stgaws(i)+">"+stgimg(iarr[n],"",iarw,iarh,iarb)+"</TD>";
			}
			s+="</TABLE>";
			if(ityp!=6&&ipbw)
				s+="<BR CLEAR=ALL><SPACER HEIGHT=1 WIDTH="+ipbw+"></SPACER><SPACER WIDTH=1 HEIGHT="+ipbw+"></SPACER>";
			s+="</LAYER>";
		}
		if(ityp!=6)
			s+="<LAYER Z-INDEX=20></LAYER>";
		s+="</LAYER></ILAYER></FONT></TD>";
	}
	else
	{
		s+="<TD class=st_tdcss NOWRAP VALIGN="+(nIE?"MIDDLE":"TOP")+" STYLE='padding:"+p.pspc+"px;' ID="+p.ids+iti;
		if(nIEW)
			s+=" HEIGHT=100%";
		s+=">";
		if(ityp!=6)
			s+="<A STYLE='text-decoration:none;' "+stgurl(i,0)+">";
		if(!nOP&&!nIE)
			s+="<DIV class=st_divcss ID="+ids+stitev(i)+" STYLE='"+sticss(i,0)+"'>";
		s+="<TABLE class=st_tbcss CELLSPACING=0 CELLPADDING=0";
		if(!nOP)
			s+=" HEIGHT=100%";
		if(nOP||nIE)
			s+=" STYLE='"+sticss(i,0)+"'"+stitev(i);
		if(p.pver||nIEM)
			s+=" WIDTH=100%";
		s+=" ID="+(nOP||nIE?ids:(ids+"TB"));
		if(ityp!=6)
			s+=" TITLE="+stquo(itip);
		s+=">";
		if(ityp==6)
			s+="<TD class=st_tdcss NOWRAP VALIGN=TOP ID="+ids+"MTD HEIGHT="+(p.pver?ssiz:"100%")+" WIDTH="+(p.pver?"100%":ssiz)+">"+stgimg(simg,ids+"LINE",simw,simh,0)+"</TD>";
		else
		{
			if(p.pver&&p.plmw||!p.pver&&iicw)
				s+="<TD class=st_tdcss NOWRAP ALIGN=CENTER VALIGN=MIDDLE HEIGHT=100% STYLE='padding:"+p.ppad+"px' ID="+ids+"LTD"+stgiws(i)+">"+stgimg(iicn[0],ids+"ICON",iicw,iich,iicb)+"</TD>";
			s+="<TD class=st_tdcss NOWRAP HEIGHT=100% STYLE='color:"+itxc[0]+";padding:"+p.ppad+"px;' ID="+ids+"MTD ALIGN="+ihal+" VALIGN="+ival+">";
			s+="<FONT class=st_ftcss ID="+ids+"TX STYLE=\""+sttcss(i,0)+"\">";
			if(ityp==2)
				s+=stgimg(iimg[0],ids+"IMG",iimw,iimh,iimb);
			else
				s+=itex;
			s+="</FONT>";
			s+="</TD>";
			if(p.pver&&p.prmw||!p.pver&&iarw)
				s+="<TD class=st_tdcss NOWRAP ALIGN=CENTER VALIGN=MIDDLE HEIGHT=100% STYLE='padding:"+p.ppad+"px' ID="+ids+"RTD"+stgaws(i)+">"+stgimg(iarr[0],ids+"ARROW",iarw,iarh,iarb)+"</TD>";
		}
		s+="</TABLE>";
		if(!nOP&&!nIE)
			s+="</DIV>";
		if(ityp!=6)
			s+="</A>";
		s+="</TD>";
	}
	return s;
}
function stpcss(p)
{
	with(p)
	return "border-style:"+pbds+";border-width:"+ipbw+"px;border-color:"+pbdc+";"+(nIE?"background:"+pbgd+";":"background-color:"+pbgc+";"+(pbgi?"background-image:url("+pbgi+");background-repeat:"+pbgr+";":""));
}
function stfcss(p)
{
	var dx=nVER>=5.5?"progid:DXImageTransform.Microsoft.":"";
	with(p)
	return nIEW&&(nVER>=5||!isst)?"filter:"+(nVER>=5.5?(pesh!="Normal"?pesh+" ":""):(pesi<24&&pesi>=0?"revealTrans(Transition="+pesi+",Duration="+((110-pesp)/100)+") ":""))+dx+"Alpha(enabled="+(nIE5||popc!=100)+",opacity="+popc+") "+(psds?dx+(pstp==1?"dropshadow(color="+pscl+",offx="+psds+",offy="+psds+",positive=1) ":"Shadow(color="+pscl+",direction=135,strength="+psds+") "):"")+(nVER>=5.5?(pehd!="Normal"?pehd+" ":""):(pehi<24&&pehi>=0?"revealTrans(Transition="+pehi+",Duration="+((110-pesp)/100)+") ":""))+";":"";
}
function sticss(i,n)
{
	with(i)
	return (ityp!=6?"border-style:"+ibds+";border-width:"+ipbw+"px;border-color:"+ibdc[n]+";"+(!nIEM&&ibgi[n]?"background-image:url("+ibgi[n]+");background-repeat:"+ibgr[n]+";":""):"")+(nIEM&&ityp!=6?"background:"+ibgd[n]+";":"background-color:"+ibgc[n]+";")+"cursor:"+(nIEM?"default":stgcur(i))+";"
}
function sttcss(i,n)
{
	with(i)
	return "cursor:"+stgcur(i)+";font:"+itxf[n]+";text-decoration:"+itxd[n]+";"+(!nDM||nNN4||nIE5?"background-color:transparent;color:"+itxc[n]:"");
}
function stitov(e,o,i)
{
	var p=stgpar(i);
	if(nIEW)
	{
		if(!i.layer)
			i.layer=o;
		if(!p.issh||(e.fromElement&&o.contains(e.fromElement)))
			return;
	}
	else
	{
		if(!p.issh||(!nNN&&(e.fromElement&&e.fromElement.id&&e.fromElement.id.indexOf(i.ids)>=0)))
			return;
	}
	if(nNN4)
		stglay(i).document.layers[0].captureEvents(Event.CLICK);
	var m=stgme(i);
	stfrm(m);
	var w=m.sfrm;
	if(w!=window)
		m=w.stmenu(m.mnam);
	if(m.hdid)
	{
		w.clearTimeout(m.hdid);
		m.hdid=0;
	}
	if(!p.isck||stgme(i).cked)
	{
		if(p.citi!=i.iti&&p.citi>=0)
			sthdit(p.is[p.citi]);
		stshit(i);
		p.citi=i.iti;
	}
	if(nNN4&&i.istt)
		stcstt(i);
}
function stitou(e,o,i)
{
	if(nIEW)
	{
		if(!stgpar(i).issh||e.toElement&&o.contains(e.toElement))
			return;
	}
	else
	{
		if(!stgpar(i).issh||(!nNN&&(e.toElement&&e.toElement.id&&e.toElement.id.indexOf(i.ids)>=0)))
			return;
	}
	if(nNN4)
		stglay(i).document.layers[0].releaseEvents(Event.CLICK);
	stfrm(stgme(i));
	var p=stgtsub(i);
	if(!p||!p.issh)
	{
		stshst(i,0);
		stgpar(i).citi=-1;
	}
	else if(p&&p.issh&&!p.exed)
		sthdit(i);
	if(nNN4&&i.istt)
		status="";
}
function stitck(e,o,i)
{
	if(nNN4&&e.which!=1)
		return;
	var m=stgme(i);
	stfrm(m);
	var p=stgpar(i);
	if(p.isck)
	{
		m.cked=!m.cked;
		if(m.cked)
		{
			stshit(i);
			p.citi=i.iti;
		}
		else
		{
			sthdit(i);
			p.citi=-1;
		}
	}
	with(i)
	if(iurl)
	{
		stcls();
		if(nIEW)
		{
			var w=stgtgt(i);
			if(w)
				w.location.href=iurl;
			else
				open(iurl,itgt);
		}
	}
}
function stppov(e,o,p)
{
	if(nIEW)
	{
		if(!p.layer)
			p.layer=o;
		if(!p.issh||(e.fromElement&&o.contains(e.fromElement)))
			return;
	}
	else
	{
		if(!p.issh||(!nNN&&(e.fromElement&&e.fromElement.id&&e.fromElement.id.indexOf(p.ids)>=0)))
			return;
	}
	var m=stgme(p);
	stfrm(m);
	var w=m.sfrm;
	if(w!=window)
		m=w.stmenu(m.mnam);
	if(m.hdid)
	{
		w.clearTimeout(m.hdid);
		m.hdid=0;
	}
}
function stppou(e,o,p)
{
	if(nIEW)
	{
		if(!p.issh||(e.toElement&&o.contains(e.toElement)))
			return;
	}
	else
	{
		if(!p.issh||(!nNN&&(e.toElement&&e.toElement.id&&e.toElement.id.indexOf(p.ids)>=0)))
			return;
	}
	var m=stgme(p);
	stfrm(m);
	var w=m.sfrm;
	if(w!=window)
		m=w.stmenu(m.mnam);
	if(m.hdid)
		w.clearTimeout(m.hdid);
	m.hdid=w.setTimeout("sthdall(st_ms['"+m.mei+"'],0);",m.mhdd);
}
function stshst(i,n)
{
	with(i)
	if(nNN4)
	{
		var ls=stgstlay(i);
		ls[n].parentLayer.bgColor=ibdc[n];
		ls[n].visibility="show";
		ls[1-n].visibility="hide";
	}
	else
	{
		var o=stglay(i);
		var s=o.style;
		if(nIEM)
		{
			if(ibgd[0]!=ibgd[1])	s.background=ibgd[n];
		}
		else
		{
			if(ibgc[0]!=ibgc[1])
			{
				if(nOP&&nVER<6)
					s.background=ibgc[n];
				else
					s.backgroundColor=ibgc[n];
			}
			if(ibgi[0]!=ibgi[1])	s.backgroundImage="url("+(ibgi[n]?ibgi[n]:stgme(i).mbnk)+")";
			if(ibgr[0]!=ibgr[1])	s.backgroundRepeat=ibgr[n];
		}
		if(ibdc[0]!=ibdc[1])	s.borderColor=ibdc[n];
		var t;
		if(iicn[0]!=iicn[1])
		{
			t=nIE?o.all[ids+"ICON"]:stgobj(ids+"ICON");
			if(t)	t.src=iicn[n];
		}
		if(iarr[0]!=iarr[1])
		{
			t=nIE?o.all[ids+"ARROW"]:stgobj(ids+"ARROW");
			if(t)	t.src=iarr[n];
		}
		if(ityp==2&&iimg[0]!=iimg[1])
		{
			t=nIE?o.all[ids+"IMG"]:stgobj(ids+"IMG");
			if(t)	t.src=iimg[n];
		}
		if(!i.txstyle)	i.txstyle=(nIE?o.all[ids+"TX"]:stgobj(ids+"TX")).style;
		t=txstyle;
		if(itxf[0]!=itxf[1])
			t.font=itxf[n];
		if(itxd[0]!=itxd[1])
			t.textDecoration=itxd[n];
		if(nOP)	stgobj(ids+"MTD").style.color=itxc[n];
		else	t.color=itxc[n];
	}
}
function stshpp(p)
{
	stshow(p);
}
function sthdpp(p)
{
	if(p.citi>=0)
	{
		var t=p.is[p.citi].sub;
		if(t&&t.issh)
			sthdpp(t);
		stshst(p.is[p.citi],0);
		p.citi=-1;
	}
	sthide(p);
}
function stshit(i)
{
	var w=stgme(i).tfrm,p=stgtsub(i);
	if(p&&!p.issh)
		w.stshpp(p);
	stshst(i,1);
}
function sthdit(i)
{
	var w=stgme(i).tfrm,p=stgtsub(i);
	if(p&&p.issh)
		w.sthdpp(p);
	stshst(i,0);
}
function stshow(p)
{
	var d=p.ppi&&stgpar(p.par).pver?stgme(p).msdv:stgme(p).msdh;
	p.exed=0;
	if(!p.rc)
		stgxy(p);
	if(p.tmid)
	{
		clearTimeout(p.tmid);
		p.tmid=0;
		stwels(1,p)
	}
	if(d>0)
		p.tmid=setTimeout(stsdstr(p,1),d);
	p.issh=1;
	if(d<=0)
		eval(stsdstr(p,1));
}
function sthide(p)
{
	if(p.tmid)
	{
		clearTimeout(p.tmid);
		p.tmid=0;
	}
	if(p.issh&&!p.exed)
	{
		p.exed=0;
		p.issh=0;
	}
	else
	{
		p.exed=0;
		p.issh=0;
		eval(stsdstr(p,0));
	}
}
function stshx(p)
{
	var l=stglay(p);
	if(nNN4)
	{
		l.visibility="show";
		if(!p.fixed)
		{
			l.resizeBy(p.ipbw*2,p.ipbw*2);
			l=l.document.layers[0];
			l.moveTo(p.ipbw,p.ipbw);
			l.onmouseover=stppovn;
			l.onmouseout=stppoun;
			for(var j=p.is.length-1;j>=0;--j)
			{
				var i=p.is[j];
				if(i.ityp!=6)
				{
					var ls=stgstlay(i);
					if(i.ityp!=1||i.iurl)
						ls[2].resizeTo(ls[0].parentLayer.clip.width,ls[0].parentLayer.clip.height);
					if(i.iurl)
					{
						with(ls[2].document)
						{
							open();
							write("<A "+stgurl(i,0)+"><IMG BORDER=0 SRC='"+stgme(i).mbnk+"' WIDTH="+ls[2].clip.width+" HEIGHT="+ls[2].clip.height+"></A>");
							close();
						}
					}
					ls[0].resizeBy(-i.ipbw,-i.ipbw);
					ls[1].resizeBy(-i.ipbw,-i.ipbw);
					l=stglay(i).document.layers[0];
					l.onmouseover=stitovn;
					l.onmouseout=stitoun;
					l.onclick=stitckn;
				}
			}
			if(p.ipbw)
				setTimeout("var p=st_ms["+p.mei+"].ps["+p.ppi+"];stglay(p).bgColor=p.pbdc;",1);
			p.fixed=1;
		}
	}
	else
	{
		l.style.visibility="visible";
		if(nIE5)
			l.filters["Alpha"].opacity=p.popc;
	}
}
function sthdx(p)
{
	var l=stglay(p);
	if(nNN4)
		l.visibility="hide";
	else
	{
		if(nIE5)
			l.filters["Alpha"].opacity=0;
		l.style.visibility="hidden";
	}
}
function sthdall(m,f)
{
	var w=m.sfrm,s=w==window?m:w.stmenu(m.mnam),p=s.ps[0];
	if(s.hdid)
	{
		w.clearTimeout(s.hdid);
		s.hdid=0;
	}
	s.cked=0;
	if(p.issh)
	{
		if(p.citi>=0)
		{
			w.sthdit(p.is[p.citi]);
			p.citi=-1;
		}
		if(s.mtyp==2&&(f||stAHCM))
			w.sthide(p);
	}
}
function stcls()
{
	for(var i=st_ms.length-1;i>=0;--i)
		sthdall(st_ms[i],0);
}
function stnmsh(p)
{
	stmvto(stgxy(p),p);
	stwels(-1,p);
	stshx(p);
}
function stnmhd(p)
{
	sthdx(p);
	stwels(1,p);
}
function stftsh(p)
{
	if(nVER<5.5)
		stshfx(p);
	else if(st_reg)
		eval("try{stshfx(p);}catch(e){st_reg=0;stnmsh(p);}");
	else
		stnmsh(p);
}
function stfthd(p)
{
	if(nVER<5.5)
		sthdfx(p);
	else if(st_reg)
		eval("try{sthdfx(p);}catch(e){st_reg=0;stnmhd(p);}");
	else
		stnmhd(p);
}
function stshfx(p)
{
	var t=stglay(p).filters[0];
	if(nVER>=5.5)
		t.enabled=1;
	if(t.Status)
		t.stop();
	stmvto(stgxy(p),p);
	stwels(-1,p);
	t.apply();
	stshx(p);
	t.play();
}
function sthdfx(p)
{
	var t=stglay(p).filters[stglay(p).filters.length-1];
	if(nVER>=5.5)
		t.enabled=1;
	if(t.Status)
		t.stop();
	t.apply();
	sthdx(p);
	stwels(1,p);
	t.play();
}
function ststxy(m,xy)
{
	m.mcox=xy[0];
	m.mcoy=xy[1];
}
function stnav()
{
	var v=navigator.appVersion,a=navigator.userAgent;
	nMAC=v.indexOf("Mac")>=0;
	nOP=a.indexOf("Opera")>=0;
	if(nOP)
	{
		nVER=parseFloat(a.substring(Math.max(a.indexOf("Opera/"),a.indexOf("Opera "))+6,a.length));
		nOP5=nVER>=5.12;
	}
	else
	{
		nIE=document.all?1:0;
		if(nIE)
		{
			nIE4=(eval(v.substring(0,1)>=4));
			nVER=parseFloat(a.substring(a.indexOf("MSIE ")+5,a.length));
			nIE5=nVER>=5&&nVER<5.5&&!nMAC;
			nIEM=nIE4&&nMAC;
			nIEW=nIE4&&!nMAC;
		}
		else
		{
			nNN4=navigator.appName.toLowerCase()=="netscape"&&v.substring(0,1)=="4";
			if(!nNN4)
			{
				nNN6=(document.getElementsByTagName("*")&&a.indexOf("Gecko")!=-1);
				if(nNN6)
				{
					nVER=parseInt(navigator.productSub);
					if(a.indexOf("Netscape")>=0)
					{
						st_delb=nVER<20001108+1;
						st_addb=nVER>20020512-1;
					}
					else
					{
						st_delb=nVER<20010628+1;
						st_addb=nVER>20011221-1;
					}
				}
			}
			else
				nVER=parseFloat(v);
			nNN=nNN4||nNN6;
		}
	}
	nDM=nOP5||nIE4||nNN;
}
function stckpg()
{
	var w=st_cw,h=st_ch,l=st_cl,t=st_ct;
	st_cw=stgcw();
	st_ch=stgch();
	st_cl=stgcl();
	st_ct=stgct();
	if((st_cw-w||st_ch-h)&&(nOP&&nVER<7||nNN4))
		document.location.reload();
	else if((st_cl-l||st_ct-t)&&!nIE)
		stscr();
	else if(stAHWR&&(st_cw-w||st_ch-h))
		stcls();
}
function st_onload()
{
	if(st_load)	return;
	if(nIEM||nOP5||nNN||(nIEW&&nVER<5))
	{
		if(st_ht)
			document.body.insertAdjacentHTML("BeforeEnd",st_ht);
		for(var j=0;j<st_ms.length;++j)
			stpre(st_ms[j]);
	}
	st_load=1;
	if(st_old)
	{
		st_old();
		st_old=0;
	}
	for(var j=0;j<st_ms.length;++j)
	{
		var m=st_ms[j];
		for(var k=0;k<m.ps.length;++k)
		{
			var p=m.ps[k];
			if(p.issh&&p.exed)
				stwels(-1,p);
		}
	}
}
function stpre(m)
{
	var p=m.ps[m.ps.length-1],i=p.is[p.is.length-1];
	while(1)
		if(stglay(i)) break;
	if(!nNN4)
		stfix(m);
	if(m.mtyp!=2)
		stshow(m.ps[0]);
	if(nIE)
		onscroll=new Function("if(st_scr)clearTimeout(st_scr);st_scr=setTimeout('stscr();',500);");
	if(!st_rl)
	{
		st_cw=stgcw();
		st_ch=stgch();
		st_cl=stgcl();
		st_ct=stgct();
		st_rl=setInterval("stckpg();",500);
	}
	m.ready=1;
}
function stfix(m)
{
	for(var j=0;j<m.ps.length;++j)
	{
		var p=m.ps[j];
		if(!p.isst&&(nOP&&nVER>=7||nNN6))
		{
			var l=stglay(p);
			l.style.left="0px";
			l.style.top="0px";
			document.body.appendChild(l);
		}
		if(nOP&&nVER<6)
			stglay(p).style.pixelWidth=parseInt(stgobj(p.ids+"TB").style.pixelWidth);
		if(nIE5)
			stglay(p).style.width=stglay(p).offsetWidth;
		else if(nIEM||!nIE)
		{
			if(!p.pver)
			{
				var f=stgobj(p.ids+0),h=parseInt(nOP&&nVER<7?f.style.pixelHeight:f.offsetHeight);
				if(h)
				{
					h-=2*p.pspc;
					for(var k=0;k<p.is.length;++k)
					{
						var i=p.is[k];
						with(stglay(i).style)
						if(nOP)
							pixelHeight=nVER<7||i.ityp==6?h:h-2*p.ppad-2*i.ipbw;
						else if(i.ityp==6||nIE)
							height=h+"px";
						else
							height=h-2*i.ipbw+"px";
						if(nIEM)
						{
							var l=stgobj(i.ids+"LTD"),r=stgobj(i.ids+"RTD");
							if(l)
								l.style.height=h+"px";
							stgobj(i.ids+"MTD").style.height=h+"px";
							if(r)
								r.style.height=h+"px";
						}
					}
				}
			}
			else if(nOP)
			{
				for(var k=0;k<p.is.length;++k)
				{
					var i=p.is[k];
					if(i.ityp!=6)
					{
						with(stglay(i).style)
						{
							var w=parseInt(stgobj(p.ids+k).style.pixelWidth),h=parseInt(pixelHeight);
							if(w)
								pixelWidth=w-2*p.pspc;
							if(h)
								pixelHeight=h;
						}
					}
				}
			}
		}
	}
}
function stscr()
{
	for(var j=0;j<st_ms.length;++j)
	{
		var m=st_ms[j];
		stfrm(m);
		if(stAHWS)	sthdall(m,0);
		if(m.mtyp==1)
		{
			var p=m.ps[0];
			stwels(1,p);
			stmvto(stgxy(m.ps[0]),p);
			stwels(-1,p);
		}
	}
}
function stwels(c,p)
{
	var m=stgme(p);
	if(!st_load||nNN4||nOP||p.isst)	return;
	if(m.mhds&&!nIEM)	stwtag("SELECT",c,p);
	if(m.mhdo&&nIE4)	{stwtag("OBJECT",c,p);stwtag("APPLET",c,p);}
	if(m.mhdi&&(nIEM||nIEW&&nVER<5.5))	stwtag("IFRAME",c,p);
}
function stwtag(tg,c,o)
{
	var es=nIE?document.all.tags(tg):document.getElementsByTagName(tg);
	for(var j=0;j<es.length;++j)
	{
		var f=0,e=es.item(j);
		for(var t=e.offsetParent;t;t=t.offsetParent)
			if(t.id&&t.id.indexOf("Stm")>=0)
				f=1;
		if(f)
			continue;
		else if(stwover(e,o))
		{
			if(e.visLevel)
				e.visLevel+=c;
			else
				e.visLevel=c;
			if(e.visLevel==-1)
			{
				if(typeof(e.visSave)=="undefined")
					e.visSave=e.style.visibility;
				e.style.visibility="hidden";
			}
			else if(!e.visLevel)
				e.style.visibility=e.visSave;
		}
	}
}
function stmvto(xy,p)
{
	if(xy&&(p.ppi||stgme(p).mtyp))
	{
		var l=stglay(p);
		if(nNN4)
			l.moveToAbsolute(xy[0],xy[1]);
		else if(nOP)
		{
			var s=l.style;
			s.pixelLeft=xy[0];
			s.pixelTop=xy[1];
		}
		else
		{
			var s=l.style;
			s.left=xy[0]+"px";
			s.top=xy[1]+"px";
		}
		p.rc=[xy[0],xy[1],p.rc[2],p.rc[3]];
	}
}
function stsdstr(p,s)
{
	return	"var p=st_ms["+p.mei+"].ps["+p.ppi+"];p.tmid=0;"+(s?p.efsh+"sh(":p.efhd+"hd(")+"p);p.exed=1;";
}
function stwover(e,o)
{
	var l=0,t=0,w=e.offsetWidth,h=e.offsetHeight;
	if(w)
		e._wd=w;
	else
		w=e._wd;
	if(h)
		e._ht=h;
	else
		h=e._ht;
	while(e)
	{
		l+=e.offsetLeft;
		t+=e.offsetTop;
		e=e.offsetParent;
	}
	return l<o.rc[2]+o.rc[0]&&l+w>o.rc[0]&&t<o.rc[3]+o.rc[1]&&t+h>o.rc[1];
}
function stevfn(n,i)
{
	return new Function("e","var r=/Stm(\\d*)p(\\d*)i"+(i?"(\\d*)e":"")+"/;r.exec(this.parentLayer.id);var m=RegExp.$1;var p=parseInt(RegExp.$2);"+(i?"var i=parseInt(RegExp.$3);":"")+"return "+n+"(e,this,st_ms[m].ps[p]"+(i?".is[i]":"")+");");
}
function stppev(p)
{
	return " onMouseOver='stppov(event,this,st_ms["+p.mei+"].ps["+p.ppi+"]);' onMouseOut='stppou(event,this,st_ms["+p.mei+"].ps["+p.ppi+"]);'";
}
function stitev(i)
{
	with(i)
	return ityp==6?"":" onMouseOver='stitov(event,this,st_ms["+mei+"].ps["+ppi+"].is["+iti+"]);' onMouseOut='stitou(event,this,st_ms["+mei+"].ps["+ppi+"].is["+iti+"]);' onClick='stitck(event,this,st_ms["+mei+"].ps["+ppi+"].is["+iti+"]);'";
}
function stquo(n)
{
	return "\""+n+"\"";
}
function stgurl(i,f)
{
	with(i)
	return (iurl||f?"HREF="+stquo(iurl?iurl.replace(/"/g,"&quot;").replace(/'/g,"&#39;"):"#")+(iurl&&itgt?" TARGET="+stquo(itgt):""):"")+(istt?" onMouseOver='return stcstt(st_ms["+mei+"].ps["+ppi+"].is["+iti+"]);' onMouseOut=\"top.status=\'\';return true;\"":"");
}
function stcstt(i)
{
	top.status=i.istt;return true;
}
function stgdec(v)
{
	return v?(v&1?"underline ":"")+(v&2?"line-through ":"")+(v&4?"overline":""):"none";
}
function stgimg(src,id,w,h,b)
{
	return "<IMG SRC="+stquo(src)+(id?" ID="+id:"")+(w>0?" WIDTH="+w:(nNN?" WIDTH=0":""))+(h>0?" HEIGHT="+h:(nNN?" HEIGHT=0":""))+" BORDER="+b+">";
}
function stgbg(c,i,r)
{
	return i?c+" url("+i+") "+r:c;
}
function stgcur(i)
{
	return i.ityp!=6&&i.iurl?(nNN6?"pointer":"hand"):"default";
}
function stgiws(i)
{
	var p=stgpar(i);
	return p.pver?(p.plmw>0?" WIDTH="+(p.plmw+2):""):(i.iicw>0?" WIDTH="+(i.iicw+2):"");
}
function stgaws(i)
{
	var p=stgpar(i);
	return p.pver?(p.prmw>0?" WIDTH="+(p.prmw+2):""):(i.iarw>0?" WIDTH="+(i.iarw+2):"");
}
function stgme(ip)
{
	return st_ms[ip.mei];
}
function stgpar(ip)
{
	return st_ms[ip.mei].ps[ip.ppi];
}
function stgcl()
{
	return nIE?(nIEW&&document.compatMode=="CSS1Compat"?document.documentElement:document.body).scrollLeft:pageXOffset;
}
function stgct()
{
	return nIE?(nIEW&&document.compatMode=="CSS1Compat"?document.documentElement:document.body).scrollTop:pageYOffset;
}
function stgcw()
{
	return nIE?(nIEW&&document.compatMode=="CSS1Compat"?document.documentElement:document.body).clientWidth:innerWidth;
}
function stgch()
{
	return nIE?(nIEW&&document.compatMode=="CSS1Compat"?document.documentElement:document.body).clientHeight:innerHeight;
}
function stgobj(id)
{
	with(document)
	return nIE&&nVER<5?all[id]:nNN4?layers[id]:getElementById(id);
}
function stglay(ip)
{
	if(!ip.layer)
		ip.layer=typeof(ip.iti)=="undefined"||nNN6||nOP5?stgobj(ip.ids):nNN4?stglay(stgpar(ip)).document.layers[0].document.layers[ip.ids]:stglay(stgpar(ip)).all.tags("table")[ip.ids];
	return ip.layer;
}
function stgstlay(i)
{
	return stglay(i).document.layers[0].document.layers;
}
function stgrc(ip)
{
	var ly=stglay(ip);
	if(nNN4)
		return [ly.pageX,ly.pageY,ly.clip.width,ly.clip.height];
	else
	{
		var l=0,t=0,w=typeof(ip.rc)=="undefined"?parseInt(nOP&&nVER<7?ly.style.pixelWidth:ly.offsetWidth):ip.rc[2],h=typeof(ip.rc)=="undefined"?parseInt(nOP&&nVER<7?ly.style.pixelHeight:ly.offsetHeight):ip.rc[3];
		while(ly)
		{
			l+=parseInt(ly.offsetLeft);
			t+=parseInt(ly.offsetTop);
			ly=ly.offsetParent;
		}
		if(nIEM)
		{
			l+=parseInt(document.body.leftMargin);
			l-=ip.ipbw;
			t-=ip.ipbw;
		}
		if(typeof(ip.iti)!="undefined")
		{
			if(st_delb)
			{
				l-=ip.ipbw;
				t-=ip.ipbw;
			}
			if(st_addb)
			{
				l+=stgpar(ip).ipbw;
				t+=stgpar(ip).ipbw;
			}
		}
		return [l,t,w,h];
	}
}
function stgxy(p)
{
	var sr=stgrc(p);
	p.rc=sr;
	if(!p.ppi)
	{
		var m=stgme(p);
		var x=!m.mtyp?sr[0]:m.mtyp==1?eval(m.mcox):m.mcox;
		var y=!m.mtyp?sr[1]:m.mtyp==1?eval(m.mcoy):m.mcoy;
		if(nIEW&&nVER<5.5){x-=p.psds;y-=p.psds;}
		return [x,y];
	}
	var ir=stgirc(p.par),l=nIEW&&nVER<5.5?stgcl()-p.psds:stgcl(),t=nIEW&&nVER<5.5?stgct()-p.psds:stgct(),r=stgcl()+stgcw(),b=stgct()+stgch(),x=p.poffx+ir[0],y=p.poffy+ir[1];
	if(p.pdir==1)
		x-=sr[2];
	else if(p.pdir==2)
		x+=ir[2];
	if(p.pdir!=1&&nIEW&&nVER<5.5)
		x-=p.psds;
	if(x>r-sr[2])
		x=r-sr[2];
	if(x<l)
		x=l;
	if(p.pdir==3)
		y-=sr[3];
	else if(p.pdir==4)
		y=y+ir[3];
	if(p.pdir!=3&&nIEW&&nVER<5.5)
		y-=p.psds;
	if(y>b-sr[3])
		y=b-sr[3];
	if(y<t)
		y=t;
	return [x,y];
}
function stbuf(s)
{
	if(s)
	{
		var i=new Image();
		st_ims[st_ims.length]=i;
		i.src=s;
	}
	return s;
}
function stabs(s)
{
	var t=s.toLowerCase();
	return t.indexOf(":")==1&&t.charCodeAt()>="a"&&t.charCodeAt()<="z"||!t.indexOf("http:")||!t.indexOf("https:")||!t.indexOf("file:")||!t.indexOf("ftp:")||!t.indexOf("/")||!t.indexOf("javascript:")||!t.indexOf("mailto:")||!t.indexOf("about:")||!t.indexOf("gopher:")||!t.indexOf("news:")||!t.indexOf("telnet:")||!t.indexOf("wais:");
}
function stgsrc(s,m,f)
{
	return s?stabs(s)?s:m.mweb+s:f?m.mbnk:s;
}
function showFloatMenuAt(n,x,y)
{
	if(nDM)
	{
		var m=stmenu(n);
		if(m&&typeof(m.ready)!="undefined"&&m.mtyp==2&&m.ps.length&&!m.ps[0].issh)
		{
			ststxy(m,[x,y]);
			stshow(m.ps[0]);
		}
	}
}
function hideMenu(n)
{
	var m=stmenu(n);
	sthdall(m,1);
}
function stmenu(n)
{
	for(var j=st_ms.length-1;j>=0;--j)
		if(st_ms[j].mnam==n)
			return st_ms[j];
	return 0;
}
function stgtsub(i)
{
	var m=stgme(i);
	if(m.mcfb)
	{
		var w=m.tfrm;
		if(i.ppi||w==window)
			return i.sub;
		if(typeof(w.stmenu)!="undefined")
			return w.stmenu(m.mnam).ps[i.ppi].is[i.iti].sub;
	}
	return 0;
}
function stgirc(i)
{
	var m=stgme(i),w=m.sfrm;
	if(i.ppi||w==window)
		return stgrc(i);
	m=w.stmenu(m.mnam);
	var rc=w.stgrc(m.ps[0].is[i.iti]),x=rc[0]-w.stgcl(),y=rc[1]-w.stgct();
	switch(m.mcfd)
	{
		case 0:y-=w.stgch();break;
		case 1:y+=stgch();break;
		case 2:x-=w.stgcw();break;
		case 3:x+=stgcw();break;
	}
	return [x+stgcl()+m.mcfx,y+stgct()+m.mcfy,rc[2],rc[3]];
}
function stgtgt(i)
{
	if(i.itgt=="_self")
		return window;
	else if(i.itgt=="_parent")
		return parent;
	else if(i.itgt=="_top")
		return top;
	else
		for(var co=window;co!=co.parent;co=co.parent)
			if(typeof(co.parent.frames[i.itgt])!="undefined")
				return co.parent.frames[i.itgt];
	return 0;
}
function stgfrm(m)
{
	var a=m.mcff.split("."),w="parent";
	for(var j=0;j<a.length;++j)
	{
		w+="."+a[j];
		if(typeof(eval(w))=="undefined")
			return 0;
	}
	return eval("parent."+m.mcff);
}
function stfrm(m)
{
	if(m.mcff)
	{
		var w=stgfrm(m);
		if(w&&typeof(w.st_load)!="undefined"&&w.st_load)
		{
			var t=w.stmenu(m.mnam);
			if(typeof(t)=="object"&&t)
			{
				if(!m.cfrm||!t.cfrm)
				{
					if(t.mhdd<1000)
						m.mhdd=t.mhdd=1000;
					sthdall(m,1);
					m.sfrm=t.sfrm=window;
					m.tfrm=t.tfrm=w;
					m.cfrm=t.cfrm=1;
				}
				m.mcfb=1;
				return;
			}
		}
		m.mcfb=m.mcfn;
		m.tfrm=window;
	}
	else
	{
		var w=m.sfrm;
		if(w==window)
			return;
		else if(typeof(w.st_load)!="undefined"&&w.st_load)
		{
			var s=w.stmenu(m.mnam);
			if(typeof(s)=="object"&&s)
				if(s.cfrm)
					return;
		}
		m.sfrm=window;
		var p=m.ps[0];
		for(var j=0;j<p.is.length;++j)
			sthdit(p.is[j]);
	}
}