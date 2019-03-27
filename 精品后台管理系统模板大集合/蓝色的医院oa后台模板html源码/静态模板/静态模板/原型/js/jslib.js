//:)~  请大家继续完善



//测试是否为空

function isEmpty(str) {

    var flag = true;

    if ((str == null) || (str.length == 0 )) {

        return true;

    } else {

        return false;

    }

}



//测试Email地址是否正确

function checkEmail(str) {

  if (!(str == "")) {

    var atIndex = str.indexOf('@');

    var dotIndex = str.indexOf('.', atIndex);

    var flag = false;

    theSub = str.substring(0, dotIndex + 1);

    if ((atIndex < 1) || (atIndex != str.lastIndexOf('@')) ||

        (dotIndex < atIndex + 2) || (str.length <= theSub.length)) {

        flag = true;

    } else {

        flag = false;

    }

    return flag;

  }

}



//测试字符串是否有空格,冒号及单/双引号( ,:,',");

function checkSign(str) {
 var account=0;;

  if (!(str == "")) {

    var cCheck;

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

         //if ( cCheck==' ' || cCheck==':' || cCheck=='\'' || cCheck=='\"' ) {
		if ( cCheck==' ' ) {
			   account++;               
              //return false;

        }

    }
    if(account==str.length||isNaN(str))
	  {
       return true;
	  }
	else
	  {
	    return false;
	  }

  }
  else{return true;}

}
function checkSign_non(str) {
 var account=0;;

  if (!(str == "")) {

    var cCheck;

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

         //if ( cCheck==' ' || cCheck==':' || cCheck=='\'' || cCheck=='\"' ) {
		if ( cCheck==' ' ) {
			   account++;               
              //return false;

        }

    }
    if(account==str.length)
	  {
       return true;
	  }
	else
	  {
	    return false;
	  }

  }
  else{return true;}

}
//测试字符串是否有空格,冒号及单/双引号( ,:,',");
function checkSignb(str) {
  if (!(str == "")) {
    var cCheck;
    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {
        cCheck = str.charAt(nameIndex);
         if ( cCheck==' ' || cCheck==':' || cCheck=='\'' || cCheck=='\"' ) {
              return true;
        }
    }
    return false;
  }
}
//拆分字符串;
function split(str,code) {
  var bstr="";
  var estr="";
  var note="0";
  var array=new Array;
  if (!(str == "")) {
    var cCheck;
    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {
        cCheck = str.charAt(nameIndex);
         if (cCheck!=code && note=="0" ) {
             bstr=bstr+cCheck;
        }
		else
		{
		  if(note!="1")
		  {
			  note="1";
		   }
		   else
		  {
		   estr=estr+cCheck;
		  }
		}
    }
	array[0]=bstr;
    array[1]=estr;
    return array;
  }
}
//测试字符串是否有单/双引号( ');
function checkSignA(str) {
  if (!(str == "")) {
    var cCheck;
    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {
        cCheck = str.charAt(nameIndex);
         if ( cCheck=='\'' ) {
              return true;
        }
    }
    return false;
  }
}

//测试Email地址是否正确

function isWebAddress(str) {

  if (!(str == "")) {

        var cCheck;

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

         if ( cCheck=='.' ) {

              return false;

        }

    }

    return true;

  }

}


//判断是否是数字

function isNum(str) {

    var flag = true;

    var cCheck;

    var src = "0123456789";

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

        if (src.indexOf(cCheck) == -1) {

            flag = false;

        }

    }

    return flag;

}



//判断是否是字母

function isChar(str) {

    var flag = true;

    var cCheck;

    var src = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

        if (src.indexOf(cCheck) == -1) {

            flag = false;

        }

    }

    return flag;

}



//判断是否是小写字母

function isLowerChar(str) {

    var flag = true;

    var cCheck;

    var src = "abcdefghijklmnopqrstuvwxyz";

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

        if (src.indexOf(cCheck) == -1) {

            flag = false;

        }

    }

    return flag;

}



//判断是否是大写写字母

function isUpperChar(str) {

    var flag = true;

    var cCheck;

    var src = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

        if (src.indexOf(cCheck) == -1) {

            flag = false;

        }

    }

    return flag;

}



//判断是否是目录名称

function isDir(str) {

    var flag = true;

    var cCheck;

    var src = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

        if (src.indexOf(cCheck) == -1) {

            flag = false;

        }

    }

    return flag;

}