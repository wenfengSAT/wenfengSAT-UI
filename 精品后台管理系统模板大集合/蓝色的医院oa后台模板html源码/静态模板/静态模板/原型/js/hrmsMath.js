    function  spell(val){        
        return getSpell(val);
    }
    function abbrSpell( s1, s2){
        return getSimpleSpell(s1,s2);
    }
    function plusStr( s1, s2){
        if(s1==null) s1="";
        if(s2==null) s2="";
        return s1+s2;
    }
    
    function age( bir){
        var vage="";
        if(bir==null||""==bir){
            return vage;
        }
        dt=new Date(); 
        var tmp =bir.split("-");       
        birth=new Date(tmp[0],tmp[1],tmp[2]);                       
        if(birth.getMonth()<dt.getMonth()+1){//MM<
            vage=dt.getFullYear ()-birth.getFullYear ();
        }else {
            if(birth.getMonth()>dt.getMonth()+1){//MM>
                vage=dt.getFullYear ()-birth.getFullYear ()-1;
            }else{//MM==
                if(birth.getDate()<=dt.getDate()){//dd<
                    vage=dt.getFullYear ()-birth.getFullYear ();
                }else{//dd>=
                    vage=dt.getFullYear ()-birth.getFullYear ()-1;
                }
            }
        }
        return vage;
    }

    function ageExact( birth){
        var vage="";
        if(birth==null||""==birth){
            return vage;
        }        
        var curday=new Date();
        curday=new Date(curday.getFullYear(),curday.getMonth ()+1,curday.getDate());
        var tmp =birth.split("-");
        birthday=new Date(tmp[0],tmp[1],tmp[2]);
        var cur=curday.getTime();
        var bt= birthday.getTime();
        var val=(cur-bt)/1000/(365*24*60*60);

        vage =""+val; 
        vage=vage.substr(0,vage.indexOf(".")+3);      
        return vage;
    }

    function methodInvoke(obj){
        //var obj = document.all(dest);       
        var mth=obj.formula;
        var mthName= mth.substr(0,mth.indexOf("("));
        var arg=mth.slice(mth.indexOf('(')+1,mth.indexOf(')'));                 
        var args=arg.split(",");
        if(mthName=="spell"){                              
            obj.value=spell(document.all(args[0]).value);
        }else if(mthName=="abbrSpell"){
            obj.value=abbrSpell(document.all(args[0]).value,document.all(args[1]).value);
        }else if(mthName=="plusStr"){
            obj.value=plusStr(document.all(args[0]).value,document.all(args[1]).value); 
        }else if(mthName=="age"){
            var birth=document.all(args[0]).value;
            if(dateCheck(birth)){
                if(birth.length ==8){
                    document.all(args[0]).value= birth.substring(0,4) + "-" + birth.substring(4,6) + "-" + birth.substring(6,8);
                }
                obj.value=age(document.all(args[0]).value);
            }else{
                if(birth!=null&&birth!=""){
                    alert("请输入有效日期");
                    document.all(args[0]).focus();
                }
            }
        }else if(mthName=="ageExact"){
            var birth=document.all(args[0]).value;
            if(dateCheck(birth)){
                if(birth.length ==8){
                    document.all(args[0]).value= birth.substring(0,4) + "-" + birth.substring(4,6) + "-" + birth.substring(6,8);
                }
                obj.value=ageExact(document.all(args[0]).value);
            }else{
                if(birth!=null&&birth!=""){
                    alert("请输入有效日期");
                    document.all(args[0]).focus();
                }
            }
        }
    }