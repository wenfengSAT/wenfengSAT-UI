	var e_tag; //当前正在分拆得Tag值
	
	//开始解析分拆Tag值
	function parseTag(p_tag){
		e_tag=p_tag;
	}
	
	//得到下一个分拆处理的值
	function getNextValue(){
		if(e_tag==null||e_tag=="")
			return null;
		var p=e_tag.indexOf("|");
		if(p==-1)
			p=e_tag.length;
		var r=e_tag.substring(0,p);
		e_tag=e_tag.substring(p+1,e_tag.length);
		return r;
	}

	//检测所有控件输入值的合法性
	function checkAll(p_frm,flag){
		var eCount=p_frm.elements.length;
		var v="";
		
		var discript="";
		var v_type="s";
		var length="";
		var nullflag="1";
		var maxs="";
		var mins="";
		for(var i=0;i<eCount;i++){

    		discript="";
    		v_type="s";
    		length="";
    		nullflag="1";
    		maxs="";
    		mins="";


			var e=p_frm.elements[i];
			if(e.alt==null||e.alt=="")
				continue;
			parseTag(e.alt);
			if((v=getNextValue())!=null){
				discript=v;
			}
			if((v=getNextValue())!=null){
				nullflag=v;
			}
			if((v=getNextValue())!=null){
				v_type=v;
			}
			if((v=getNextValue())!=null){
				length=v;
			}
			if((v=getNextValue())!=null){
				mins=eval(v);
			}
			if((v=getNextValue())!=null){
				maxs=eval(v);
			}
			if(flag != null)
			{
				if(checkValidate2(e,discript,v_type,length,nullflag,maxs,mins)=="0")
				return false;
			}else
			{
				if(checkValidate(e,discript,v_type,length,nullflag,maxs,mins)=="0")
				return false;
			}	
		}
		return true;
	}

	var e_tag_eee;
//开始解析分拆Tag值
	function parseTag_eee(p_tag){
		e_tag_eee=p_tag;
	}
	
	//得到下一个分拆处理的值
	function getNextValue_eee(){
		if(e_tag_eee==null||e_tag_eee=="")
			return null;
		var p=e_tag_eee.indexOf("|");
		if(p==-1)
			p=e_tag_eee.length;
		var r=e_tag_eee.substring(0,p);
		//e_tag=e_tag.substring(p+1,e_tag.length);
		return r;
	}

function isnull(p_frm,i,j){
	      var discript="";
	      var e=p_frm.elements[i];
          parseTag_eee(e.alt);
          discript=getNextValue_eee();
		  //alert(p_frm.elements[i].value);
		  //alert(p_frm.elements[j].value);
		  if(p_frm.elements[i].value>p_frm.elements[j].value)
		  {
		    alert(discript+"不能大于结束时间！！");
			return false;
		  }
		  else
		  {
			return true;
		  }
 }
 function isnullint(p_frm,i,j){
	      var discript="";
	      var e=p_frm.elements[i];
          parseTag_eee(e.alt);
          discript=getNextValue_eee();
		  //alert(p_frm.elements[i].value);
		  //alert(p_frm.elements[j].value);
		  if(parseInt(p_frm.elements[i].value)>parseInt(p_frm.elements[j].value))
		  {
		    alert(discript+"不能大于上限！！");
			//p_frm.elements[i].focus();
			p_frm.elements[i].select();
			return false;
		  }
		  else
		  {
			return true;
		  }
 }