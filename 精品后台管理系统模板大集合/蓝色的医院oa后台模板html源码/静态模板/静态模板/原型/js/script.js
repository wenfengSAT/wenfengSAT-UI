
    var dl1 = "!";
    var dl2 = "|";
    var dl3 = "^";

   /*
    * 判断字符串str的长度是否为零，且为零时显示hint信息
    */
   function isNullByHint(str , hint){
       if(str.length == 0){
          alert(hint);
          return true;
       }
       return false;
   }

   /*
    * 判断字符串str的长度是否为零
    */
   function isNull(str){
       if(trim(str).length == 0){
          return true;
       }
       return false;
   }

   /**
    * 判断字符串str是否为无符号整数，并在不是无符号整数时返回提示信息
    */
   function isNotIntByHint( str , hint ){
       if( isInt( str ) ){
           return false;
       }
       alert( hint );
       return true;
   }

   /**
    * 判断字符串str是否为无符号整数
    */
  function isInt(str){
      var tem = str + "";
      var intPattern = new RegExp("^\\d+$","g");
      return tem.match(intPattern) == tem;
   }

   function isNotTimeByHint( str , hint ){
       if( isTime( str ) ){
           return false;
       }
       alert( hint );
       return true;
   }

  function isTime(str){
      var tem = trim(str + "");
      var timePattern = new RegExp("^([0-1]?\\d|2[0-3]):[0-5]?\\d:[0-5]?\\d","g");
      return tem.match(timePattern) == tem;
  }

   /**
    * 判断字符串str是否为无符号浮点数，并在不是无符号浮点数时返回提示信息
    */
   function isNotFloatByHint( str , hint ){
       if( isFloat( str ) ){
           return false;
       }
       alert( hint );
       return true;
   }

   /**
    * 判断字符串str是否为无符号复点数，可以包含E指数
    */
   function isFloat(str){
      var tem = str + "";
      var floatPattern = new RegExp("^\\d+(\\.\\d+)?([E|e][+|-]?\\d+)?$","g");
      return tem.match(floatPattern) == tem;
   }

   /**
    * 判断字符串str是否为有符号整数，并在不是有符号整数时返回提示信息
    */
   function isNotSignedIntByHint( str , hint ){
       if( isSignedInt( str ) ){
           return false;
       }
       alert( hint );
       return true;
   }

   /**
    * 判断字符串str是否为有符号整数
    */
   function isSignedInt(str){
      var tem = str + "";
      var signedIntPattern = new RegExp("^[+|-]?\\d+$","g");
      return tem.match(signedIntPattern) == tem;
   }

   /**
    * 判断字符串str是否为有符号浮点数，并在不是有符号浮点数时返回提示信息
    */
   function isNotSignedFloatByHint( str , hint ){
       if( isSignedFloat( str ) ){
           return false;
       }
       alert( hint );
       return true;
   }

   /**
    * 判断字符串str是否为有符号浮点数，可以包含E指数
    */
   function isSignedFloat(str){
      var tem = str + "";
      var floatPattern = new RegExp("^[+|-]?\\d+(\\.\\d+)?([E|e][+|-]?\\d+)?$","g");
      return tem.match(floatPattern) == tem;
   }

   /**
    * 判断字符串str是否为数值，并在不是数值时返回提示信息
    */
   function isNotNumberByHint( str , hint ){
       if( isNumber( str ) ){
           return false;
       }
       alert( hint );
       return true;
   }

   /**
    * 判断字符串str是否为数值
    */
   function isNumber( str ){
      return isSignedFloat( str );
   }

   /**
    * 判断字符串type是否为系统支持的数值类型
    */
   function isNumberType( type ){
       if ( type == "INT" ) return true;
       if ( type == "FLOAT" ) return true;
       if ( type == "SIGNED_INT" ) return true;
       if ( type == "SIGNED_FLOAT" ) return true;
       return false;
   }

   /**
    * 判断value是否在[ min( bound1 , bound2 )  , max( bound1 , bound2 ) ]中，并在不是时返回提示信息
    * 注意：如果 bound1,bound2,value 如果有一个不是 number，或者type不是系统支持的数值类型，将返回提示信息
    */
   function isNotBetween1ByHint( bound1 , bound2 , value , type , hint ){
       if( isBetween1( bound1 , bound2 , value , type ) ){
           return false;
       }
       alert( hint );
       return true;
   }

   /**
    * 判断value是否在[ min( bound1 , bound2 )  , max( bound1 , bound2 ) ]中
    * 注意：如果 bound1,bound2,value 如果有一个不是 number，或者type不是系统支持的数值类型，将返回 false
    */
   function isBetween1( bound1 , bound2 , value , type ){
       if ( !isNumber( bound1 ) || !isNumber( bound2 ) || !isNumber( value ) || !isNumberType( type ) ){
          return false;
       }
       return isGreaterEqual( value , Math.min( bound1 , bound2 ) , type ) &&
              isLessEqual( value , Math.max( bound1 , bound2 ) , type );
   }

   /**
    * 判断value是否在（ min( bound1 , bound2 )  , max( bound1 , bound2 ) ]中，并在不是时返回提示信息
    * 注意：如果 bound1,bound2,value 如果有一个不是 number ，或者type不是系统支持的数值类型，将返回提示信息
    */
   function isNotBetween2ByHint( bound1 , bound2 , value , type , hint ){
       if( isBetween2( bound1 , bound2 , value , type ) ){
           return false;
       }
       alert( hint );
       return true;
   }

   /**
    * 判断value是否在（ min( bound1 , bound2 )  , max( bound1 , bound2 ) ]中
    * 注意：如果 bound1,bound2,value 如果有一个不是 number，或者type不是系统支持的数值类型，将返回 false
    */
   function isBetween2( bound1 , bound2 , value , type ){
       if ( !isNumber( bound1 ) || !isNumber( bound2 ) || !isNumber( value ) || !isNumberType( type ) ){
          return false;
       }
       return isGreaterThan( value , Math.min( bound1 , bound2 ) , type ) &&
              isLessEqual( value , Math.max( bound1 , bound2 ) , type );
   }

   /**
    * 判断value是否在（ min( bound1 , bound2 )  , max( bound1 , bound2 ) ）中，并在不是时返回提示信息
    * 注意：如果 bound1,bound2,value 如果有一个不是 number，或者type不是系统支持的数值类型， 将返回提示信息
    */
   function isNotBetween3ByHint( bound1 , bound2 , value , type , hint ){
       if( isBetween3( bound1 , bound2 , value , type ) ){
           return false;
       }
       alert( hint );
       return true;
   }

   /**
    * 判断value是否在（ min( bound1 , bound2 )  , max( bound1 , bound2 ) ）中
    * 注意：如果 bound1,bound2,value 如果有一个不是 number ，或者type不是系统支持的数值类型，将返回 false
    */
   function isBetween3( bound1 , bound2 , value , type ){
       if ( !isNumber( bound1 ) || !isNumber( bound2 ) || !isNumber( value ) || !isNumberType( type ) ){
          return false;
       }
       return isGreaterThan( value , Math.min( bound1 , bound2 ) , type ) &&
              isLessThan( value , Math.max( bound1 , bound2 ) , type );
   }

   /**
    * 判断value是否在[ min( bound1 , bound2 )  , max( bound1 , bound2 ) ）中，并在不是时返回提示信息
    * 注意：如果 bound1,bound2,value 如果有一个不是 number ，或者type不是系统支持的数值类型，将返回提示信息
    */
   function isNotBetween4ByHint( bound1 , bound2 , value , type , hint ){
       if( isBetween4( bound1 , bound2 , value , type ) ){
           return false;
       }
       alert( hint );
       return true;
   }

   /**
    * 判断value是否在[ min( bound1 , bound2 )  , max( bound1 , bound2 ) ）中
    * 注意：如果 bound1,bound2,value 如果有一个不是 number ，或者type不是系统支持的数值类型，将返回 false
    */
   function isBetween4( bound1 , bound2 , value , type ){
       if ( !isNumber( bound1 ) || !isNumber( bound2 ) || !isNumber( value ) || !isNumberType( type ) ){
          return false;
       }
       return isGreaterEqual( value , Math.min( bound1 , bound2 ) , type ) &&
              isLessThan( value , Math.max( bound1 , bound2 ) , type );
   }

   /**
    * 判断 str1,str2 在类型type下是否等于关系，并在存在时返回提示信息
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isEqualByHint( str1 , str2 , type , hint ){
       if( isEqual( str1 , str2 , type ) ){
           alert( hint );
           return true;
       }
       return false;
   }

   /**
    * 判断 str1,str2 在类型type下是否等于关系
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isEqual( str1 , str2 , type ){
       if ( type == "STRING" ){
          return str1 == str2;
       }
       if ( type == "INT" ){
          if ( !isInt( str1 ) ){
             return false;
          }
          if ( !isInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) == parseInt( str2 );
       }
       if ( type == "FLOAT" ){
          if ( !isFloat( str1 ) ){
             return false;
          }
          if ( !isFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) == parseFloat( str2 );
       }
       if ( type == "SIGNED_INT" ){
          if ( !isSignedInt( str1 ) ){
             return false;
          }
          if ( !isSignedInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) == parseInt( str2 );
       }
       if ( type == "SIGNED_FLOAT" ){
          if ( !isSignedFloat( str1 ) ){
             return false;
          }
          if ( !isSignedFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) == parseFloat( str2 );
       }
       return false;
   }

   /**
    * 判断 str1,str2 在类型type下是否存在大于等于关系，并在存在时返回提示信息
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isGreaterEqualByHint( str1 , str2 , type , hint ){
       if( isGreaterEqual( str1 , str2 , type ) ){
           alert( hint );
           return true;
       }
       return false;
   }

   /**
    * 判断 str1,str2 在类型type下是否存在大于等于关系
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isGreaterEqual( str1 , str2 , type ){
       if ( type == "STRING" ){
          return str1 >= str2;
       }
       if ( type == "INT" ){
          if ( !isInt( str1 ) ){
             return false;
          }
          if ( !isInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) >= parseInt( str2 );
       }
       if ( type == "FLOAT" ){
          if ( !isFloat( str1 ) ){
             return false;
          }
          if ( !isFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) >= parseFloat( str2 );
       }
       if ( type == "SIGNED_INT" ){
          if ( !isSignedInt( str1 ) ){
             return false;
          }
          if ( !isSignedInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) >= parseInt( str2 );
       }
       if ( type == "SIGNED_FLOAT" ){
          if ( !isSignedFloat( str1 ) ){
             return false;
          }
          if ( !isSignedFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) >= parseFloat( str2 );
       }
       return false;
   }

   /**
    * 判断 str1,str2 在类型type下是否存在大于关系，并在存在时返回提示信息
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isGreaterThanByHint( str1 , str2 , type , hint ){
       if( isGreaterThan( str1 , str2 , type ) ){
           alert( hint );
           return true;
       }
       return false;
   }

   /**
    * 判断 str1,str2 在类型type下是否存在大于关系
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isGreaterThan( str1 , str2 , type ){
       if ( type == "STRING" ){
          return str1 > str2;
       }
       if ( type == "INT" ){
          if ( !isInt( str1 ) ){
             return false;
          }
          if ( !isInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) > parseInt( str2 );
       }
       if ( type == "FLOAT" ){
          if ( !isFloat( str1 ) ){
             return false;
          }
          if ( !isFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) > parseFloat( str2 );
       }
       if ( type == "SIGNED_INT" ){
          if ( !isSignedInt( str1 ) ){
             return false;
          }
          if ( !isSignedInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) > parseInt( str2 );
       }
       if ( type == "SIGNED_FLOAT" ){
          if ( !isSignedFloat( str1 ) ){
             return false;
          }
          if ( !isSignedFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) > parseFloat( str2 );
       }
       return false;
   }

   /**
    * 判断 str1,str2 在类型type下是否存在小于等于关系，并在存在时返回提示信息
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isLessEqualByHint( str1 , str2 , type , hint ){
       if( isLessEqual( str1 , str2 , type ) ){
           alert( hint );
           return true;
       }
       return false;
   }

   /**
    * 判断 str1,str2 在类型type下是否存在小于等于关系
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isLessEqual( str1 , str2 , type ){
       if ( type == "STRING" ){
          return str1 <= str2;
       }
       if ( type == "INT" ){
          if ( !isInt( str1 ) ){
             return false;
          }
          if ( !isInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) <= parseInt( str2 );
       }
       if ( type == "FLOAT" ){
          if ( !isFloat( str1 ) ){
             return false;
          }
          if ( !isFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) <= parseFloat( str2 );
       }
       if ( type == "SIGNED_INT" ){
          if ( !isSignedInt( str1 ) ){
             return false;
          }
          if ( !isSignedInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) <= parseInt( str2 );
       }
       if ( type == "SIGNED_FLOAT" ){
          if ( !isSignedFloat( str1 ) ){
             return false;
          }
          if ( !isSignedFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) <= parseFloat( str2 );
       }
       return false;
   }

   /**
    * 判断 str1,str2 在类型type下是否存在小于关系，并在存在时返回提示信息
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isLessThanByHint( str1 , str2 , type , hint ){
       if( isLessThan( str1 , str2 , type ) ){
           alert( hint );
           return true;
       }
       return false;
   }

   /**
    * 判断 str1,str2 在类型type下是否存在小于关系
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isLessThan( str1 , str2 , type ){
       if ( type == "STRING" ){
          return str1 < str2;
       }
       if ( type == "INT" ){
          if ( !isInt( str1 ) ){
             return false;
          }
          if ( !isInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) < parseInt( str2 );
       }
       if ( type == "FLOAT" ){
          if ( !isFloat( str1 ) ){
             return false;
          }
          if ( !isFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) < parseFloat( str2 );
       }
       if ( type == "SIGNED_INT" ){
          if ( !isSignedInt( str1 ) ){
             return false;
          }
          if ( !isSignedInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) < parseInt( str2 );
       }
       if ( type == "SIGNED_FLOAT" ){
          if ( !isSignedFloat( str1 ) ){
             return false;
          }
          if ( !isSignedFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) < parseFloat( str2 );
       }
       return false;
   }

   /**
    * 判断 str1,str2 在类型type下是否存在不等于关系，并在存在时返回提示信息
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isNotEqualByHint( str1 , str2 , type , hint ){
       if( isNotEqual( str1 , str2 , type ) ){
           alert( hint );
           return true;
       }
       return false;
   }

   /**
    * 判断 str1,str2 在类型type下是否存在不等于关系
    * 注意：如果 str1 , str2 不能转化为type类型 ，或type为此函数不支持的值则返回false
    */
   function isNotEqual( str1 , str2 , type ){
       if ( type == "STRING" ){
          return str1 != str2;
       }
       if ( type == "INT" ){
          if ( !isInt( str1 ) ){
             return false;
          }
          if ( !isInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) != parseInt( str2 );
       }
       if ( type == "FLOAT" ){
          if ( !isFloat( str1 ) ){
             return false;
          }
          if ( !isFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) != parseFloat( str2 );
       }
       if ( type == "SIGNED_INT" ){
          if ( !isSignedInt( str1 ) ){
             return false;
          }
          if ( !isSignedInt( str2 ) ){
             return false;
          }
          return parseInt( str1 ) != parseInt( str2 );
       }
       if ( type == "SIGNED_FLOAT" ){
          if ( !isSignedFloat( str1 ) ){
             return false;
          }
          if ( !isSignedFloat( str2 ) ){
             return false;
          }
          return parseFloat( str1 ) != parseFloat( str2 );
       }
       return false;
   }

   /*
    * 判断字符串str是否只包括空格、回车、换行、tab字符，如果是则返回true，且显示提示信息hint。
    */
   function isBlankByHint(str ,hint){
      if( isBlank(str) ){
        alert(hint);
        return true;
      }

      return false;
   }

   /*
    * 判断字符串str是否只包括空格、回车、换行、tab字符，如果是则返回true。
    */
   function isBlank(str){
        var returnString = str;
        while(returnString.charAt(0)==" " || returnString.charAt(0)=="\r" || returnString.charAt(0)=="\t" || returnString.charAt(0)=="\n" )
            returnString=returnString.substring(1,returnString.length);
        while(returnString.charAt(returnString.length-1)==" " || returnString.charAt(returnString.length-1)=="\r" || returnString.charAt(returnString.length-1)=="\t" || returnString.charAt(returnString.length-1)=="\n")
            returnString=returnString.substring(0,returnString.length-1);
        return returnString.length<=0;
   }

   /*
    * 把元素aElement插入到数组aArray的position位置
    * 如果position小于零或大于aArray的长度则插到最后。
    */
    function insertElement(aArray,aElement,position){
        if( position<0 || position>aArray.length )
            position = aArray.length;

        var i;
        for(i=aArray.length-1;i>=position;i--)
            aArray[i+1] = aArray[i];
        aArray[position]=aElement;
    }

    /*
    * 把元素aElement插入到数组aArray的最后。
    */
    function addElement(aArray,aElement){
        insertElement(aArray,aElement,aArray.length);
    }

    /*
     * 返回aElement在aArray中的索引，如果不存在则返回-1
     */
    function indexOfArray(aArray,aElement){
        var i;
        for(i=0;i<aArray.length;i++){
            if( aArray[i]==aElement)
                return i;
        }
        return -1;
    }

    /*
     *  把aElement从数组aArray中删除,如果没有元素aElement则返回false;
     */
    function removeElement(aArray,aElement){
        var index=indexOfArray(aArray,aElement);
        if(index<0)
            return false;
        removeElementByIndex(aArray,index);
        return true;
    }

    /*
     *  删除数组aArray的index位置的元素。
     */
    function removeElementByIndex(aArray,index){
        if(index<0 || index>=aArray.length )
            return false;
        var i;
        for(i=index;i<aArray.length-1;i++)
            aArray[i]=aArray[i+1];

        aArray[ aArray.length-1 ] =null;
        return true;
    }

    //记录当前被选中的复选框的个数
    var CheckedNum = 0;

    /*
     * 选中所有的复选框，checkallbox是提供选择所有复选框的复选框，checksbox是要选中的复选框数组。
     */
    function checkAll(checkallbox,checksbox){
        var length = checksbox == undefined ? 0 : checksbox.length == undefined ? 1 : checksbox.length;

        if ( length > 1 )
          for( i = 0 ; i < length ; i ++ )
              checksbox[i].checked = checkallbox.checked;
        else
          if ( length == 1 ) checksbox.checked = checkallbox.checked;

        if ( checkallbox.checked ) CheckedNum = length;
        else CheckedNum = 0;
    }

    /*
     * 选中一个复选框obj,checkallbox是提供选中所有复选框功能的复选框，obj所在的复选框数组
     */
    function checkA(checkallbox,checksbox,obj){
        var length = checksbox == undefined ? 0 : checksbox.length == undefined ? 1 : checksbox.length;

        if ( obj.checked )  CheckedNum ++;
        else  CheckedNum --;

        if ( CheckedNum == length ) checkallbox.checked = true;
        else checkallbox.checked = false;
    }

    /*
     *  检查checksbox是否有复选框被选中，如果checksbox没定义则显示noDefineHint并返回1,如果没选中则显示noSelectHint并返回2。
     *  如果有则返回0。
     */
    function checkSelectByHint(checksbox,noDefineHint,noSelectHint){
        var result = checkSelect(checksbox)
        if( result == 1)
          alert(noDefineHint);
        else if( result ==2 )
          alert(noSelectHint);

        return result;
    }

    /*
     *  检查checksbox是否有复选框被选中，如果checksbox没定义则返回1,如果没选中则并返回2。
     *  如果有则返回0。
     */
    function checkSelect(checksbox){
        if( checksbox == undefined || checksbox==null )
            return 1;
        if( checksbox.length == undefined ){
            if( checksbox.checked )
                return 0;
            else
                return 2;
        }else{
            var i;
            for(i=0;i<checksbox.length;i++)
               if( checksbox[i].checked )
                  return 0;
            return 2;
        }
    }

   /**
    * open new window and confirm only one window is open at a time
    */
   var opened = false;
   var openedWin = null;
   function openWin(link,style){
        if ( openedWin == null || openedWin.closed ){
            openedWin = window.open(link, '', style);
        }
        else{
            openedWin.focus();
            openedWin.location=link;
        }
        return false;
    }

  /**
  *  This function is used in treeView tag to selecte the checkebox
  *   @param style  the value security is used in security function tree.
  *   @author : liuheyuan
  */
  function checkTreeCheckbox(style){
   var root;
   var collection ;
   var checked;
   var oWorkItem = event.srcElement;
   //alert(oWorkItem.tagName);
   if(oWorkItem.tagName == "INPUT")
   {
     if(style=="security"){
      if(oWorkItem.checked){
         while(oWorkItem.parentNode!=null){
         if(oWorkItem.parentNode.tagName=="TABLE"&&oWorkItem.parentNode.id=="treeViewTableRoot")break;
         if(oWorkItem.parentNode.tagName=="DIV"){
            root=oWorkItem.parentNode;
            try{document.getElementById(root.id+"checkbox").checked=true; }catch(exception){}
            }
           oWorkItem=oWorkItem.parentNode;
          }
       }else{
           try{
                var re = new RegExp("checkbox","gim");
                var str = oWorkItem.id.replace(re,"");
                collection=document.getElementById(str).getElementsByTagName("INPUT");
                for(var i=0;i<collection.length;i++){collection[i].checked=false;}
             }catch(exception){   }
             }
             }//end style="security"

       else{
              try{

                           var re = new RegExp("checkbox","gim");
                           var str = oWorkItem.id.replace(re,"");
                           checked=oWorkItem.checked;
                           collection=document.getElementById(str).getElementsByTagName("INPUT");
                           for(var i=0;i<collection.length;i++){
                                 collection[i].checked=checked;
                             }
                             var item =oWorkItem;
                                            while(item.parentNode!=null){
                                                            if(oWorkItem.parentNode.tagName=="TABLE"&&oWorkItem.parentNode.id=="treeViewTableRoot")break;
                                                                    if(item.parentNode.tagName=="DIV"){
                                                                       root=item.parentNode;
                                                                       checked=true;
                                                                       collection=root.getElementsByTagName("INPUT");
                                                                            for(var i=0;i<collection.length;i++){
                                                                              if(!collection[i].checked)checked = false;
                                                                             }
                                                                        document.getElementById(root.id+"checkbox").checked=checked;
                                                                       }
                                                                      item=item.parentNode;
                                                                     }

                     }catch(exception){     }

       }
       }//end if
       else if(oWorkItem.tagName == "IMG"&&new String(oWorkItem.id).indexOf("ImageEx")!=-1){
                           var re = new RegExp("ImageEx","gim");
                           var str = oWorkItem.id.replace(re,"");
                           document.getElementById(str+"checkbox").checked=true;
                           collection=document.getElementById(str).getElementsByTagName("INPUT");
                           for(var i=0;i<collection.length;i++){
                                 collection[i].checked=true;
                           }
                           if(document.getElementById(str).style.display=="none"){
                                 document.getElementById(str+"_img").click();
                            }
                           collection=document.getElementById(str).getElementsByTagName("DIV");
                           for(var i=0;i<collection.length;i++){
                               if(document.getElementById(collection[i].id).style.display=="none"){
                                   document.getElementById(collection[i].id+"_img").click();
                                }
                           }
                     while(oWorkItem.parentNode!=null){
                        if(oWorkItem.parentNode.tagName=="TABLE"&&oWorkItem.parentNode.id=="treeViewTableRoot")break;
                        if(oWorkItem.parentNode.tagName=="DIV"){
                               root=oWorkItem.parentNode;
                              try{document.getElementById(root.id+"checkbox").checked=true; }catch(exception){}
                          }//end if div
                         oWorkItem=oWorkItem.parentNode;
                    } //end while
           } //end else if

}

  /**
  *  This function is used in Collection tag
  *   @author : liuheyuan
  */
// Drag function start
// Determine browser and version.

function Browser() {

  var ua, s, i;

  this.isIE    = false;
  this.isNS    = false;
  this.version = null;

  ua = navigator.userAgent;

  s = "MSIE";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isIE = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  s = "Netscape6/";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  // Treat any other "Gecko" browser as NS 6.1.

  s = "Gecko";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = 6.1;
    return;
  }
}

var browser = new Browser();

// Global object to hold drag information.

var dragObj = new Object();
dragObj.zIndex = 0;

function dragStart(event, id) {

  var el;
  var x, y;

  // If an element id was given, find it. Otherwise use the element being
  // clicked on.

  if (id)
    dragObj.elNode = document.getElementById(id);
  else {
    if (browser.isIE)
      dragObj.elNode = window.event.srcElement;
    if (browser.isNS)
      dragObj.elNode = event.target;

    // If this is a text node, use its parent element.

    if (dragObj.elNode.nodeType == 3)
      dragObj.elNode = dragObj.elNode.parentNode;
  }

  // Get cursor position with respect to the page.

  if (browser.isIE) {
    x = window.event.clientX + document.documentElement.scrollLeft
      + document.body.scrollLeft;
    y = window.event.clientY + document.documentElement.scrollTop
      + document.body.scrollTop;
  }
  if (browser.isNS) {
    x = event.clientX + window.scrollX;
    y = event.clientY + window.scrollY;
  }

  // Save starting positions of cursor and element.

  dragObj.cursorStartX = x;
  dragObj.cursorStartY = y;
  dragObj.elStartLeft  = parseInt(dragObj.elNode.style.left, 10);
  dragObj.elStartTop   = parseInt(dragObj.elNode.style.top,  10);

  if (isNaN(dragObj.elStartLeft)) dragObj.elStartLeft = 0;
  if (isNaN(dragObj.elStartTop))  dragObj.elStartTop  = 0;

  // Update element's z-index.

  dragObj.elNode.style.zIndex = ++dragObj.zIndex;

  // Capture mousemove and mouseup events on the page.

  if (browser.isIE) {
    document.attachEvent("onmousemove", dragGo);
    document.attachEvent("onmouseup",   dragStop);
    window.event.cancelBubble = true;
    window.event.returnValue = false;
  }
  if (browser.isNS) {
    document.addEventListener("mousemove", dragGo,   true);
    document.addEventListener("mouseup",   dragStop, true);
    event.preventDefault();
  }
}

function dragGo(event) {

  var x, y;

  // Get cursor position with respect to the page.

  if (browser.isIE) {
    x = window.event.clientX + document.documentElement.scrollLeft
      + document.body.scrollLeft;
    y = window.event.clientY + document.documentElement.scrollTop
      + document.body.scrollTop;
  }
  if (browser.isNS) {
    x = event.clientX + window.scrollX;
    y = event.clientY + window.scrollY;
  }

  // Move drag element by the same amount the cursor has moved.

  dragObj.elNode.style.left = (dragObj.elStartLeft + x - dragObj.cursorStartX) + "px";
  dragObj.elNode.style.top  = (dragObj.elStartTop  + y - dragObj.cursorStartY) + "px";

  if (browser.isIE) {
    window.event.cancelBubble = true;
    window.event.returnValue = false;
  }
  if (browser.isNS)
    event.preventDefault();
}

function dragStop(event) {

  // Stop capturing mousemove and mouseup events.

  if (browser.isIE) {
    document.detachEvent("onmousemove", dragGo);
    document.detachEvent("onmouseup",   dragStop);
  }
  if (browser.isNS) {
    document.removeEventListener("mousemove", dragGo,   true);
    document.removeEventListener("mouseup",   dragStop, true);
  }
}
 function displayBox(id){
     document.getElementById(id).style.display= '';
      }
 function closeBox(id){
     document.getElementById(id).style.display= 'none';
     }
// Drag function end

  /**
  * To check if the user input an number element
  * @author  liuheyuan
  * @date  2003.3.1
  */
 function pageByPageCheckFunction(currentPage,pageSize){
        var str=document.getElementById(pageSize).value;
        for(var i=0;i<str.length;i++){
           if(!(str.charAt(i)>=0&&str.charAt(i)<=9)){
                 alert("error number");
                 return false;
                     }//end  if
              }//end for
         str=document.getElementById(currentPage).value;
         for(var i=0;i<str.length;i++){
             if(!(str.charAt(i)>=0&&str.charAt(i)<=9)){
                 alert("error number");
                 return false;
                 }  //end if
            } //end for
         return true;
       }
 /**
  * To contain the property of each cell in the table
  * @property content the innerHTML of the td
  * @property width the width of the td
  * @property bgColor bgColor of the td
  * @author  liuheyuan
  * @date  2003.3.1
  */
  function Item(){
         this.content = new String();
         this.width= new String();
         this.bgColor= new String();
           }
  /**
  * To dynamically create the Table use the property of content varible
  * @param content the content used to create the table element
  * @param pageSize the size of row in the table
  * @param tdlength the size of column in the row
  * @param tBodyId  the id to insert the role ,this maybe a table, tBody ,or tHeader
  * @author  liuheyuan
  * @date  2003.3.1
  */

  function DOMCreatTable(content,pageSize,tdlength,tBodyId){
     try{
       var tBody=document.getElementById(tBodyId);
       var oRow ,oCell, i,j, item;
       var length=tBody.rows.length;
       for(i=0;i<length;i++){
            tBody.deleteRow();
              }
       for(i=0;i<pageSize;i++){
            oRow = tBody.insertRow();
            if(i%2==0){
                oRow.className="alternateA"; }
                else{
                oRow.className="alternateB"; }
             for(j=0;j<tdlength;j++){
                   item = content[i+","+j];
                   oCell = oRow.insertCell();
                   oCell.innerHTML=item.content;
                   oCell.width=item.width;
                   oCell.bgColor= item.bgColor;
                  }//end for
                }  //end for
        }catch(exception){
              alert("exception: "+exception);    }
          return false;
   }
  /**
  * To set the checked property of the checkbox  by the value of the checked property of the child checkbox
  * @param length the length of the children checkbox
  * @param parentId the id of the parent checkbox
  * @author  liuheyuan
  * @date  2003.3.1
  */
  function checkParent(length,parentId){
         try{
           var i,item;
           var parent = document.getElementById(parentId);
           var checked = true;
           for(i=0;i<length;i++){
              item = document.getElementById(parentId+i);
              if(item.checked==false) checked=false;
               } //end for
              parent.checked=checked;
                }catch(exception){
                    alert("exception" +exception);       }      }
  /**
  * To set the checked property of the checkbox in the collection by the value of the parent checked property
  * @param collectionId the id of the collection
  * @param parentId the id of the parent checkbox
  * @author  liuheyuan
  * @date  2003.3.1
  */
  function checkChild(collectionId,parentId){
           try{
              var i,item;
              var checked = document.getElementById(parentId).checked;
              var collection = document.getElementById(collectionId).getElementsByTagName("INPUT");
              for(i=0;i<collection.length;i++){
                   item = collection[i];
                   if(item.type=="checkbox") item.checked=checked;
                  } //end for
                    }catch(exception){
             alert("exception" +exception);  }
     }
  /**
  * To swap the selectedNode of the select list with the  option before it
  * @param selectId the id of the select element
  * @author  liuheyuan
  * @date  2003.3.4
  */

    function up(selectId){
        var select= document.getElementById(selectId);
         for(var i=0;i<select.options.length;i++){
         if(select.options[i].selected){
            if(i>0){
               select.options[i].swapNode(select.options[i-1]);
              }
           }
         }
    }
  /**
  * To swap the selectedNode of the select list with the  option after it
  * @param selectId the id of the select element
  * @author  liuheyuan
  * @date  2003.3.4
  */
    function down(selectId){
               var select= document.getElementById(selectId);
                for(var i=select.options.length-1;i>=0;i--){
                if(select.options[i].selected){
                    if(i<select.options.length-1){
                       select.options[i].swapNode(select.options[i+1]);
                      }
                  }
          }
   }
  /**
  * To remove the selected option from the select list
  * @param selectId the id of the select element
  * @author  liuheyuan
  * @date  2003.3.4
  */
     function removeSelectedOption(selectId){
      var select= document.getElementById(selectId);
      var bunch = select.options;
        for(i=0;i<bunch.length;)
                {
                        if(bunch[i].selected) bunch[i].removeNode();
                                else
                                        i++;
                        }
   }
  /**
  * To dynamically add the  options to the select element
  * @param selectId the id of the select element
  * @param str the content of the options collection ,the synatax is optiontext1.optionvalue1,optiontext2.optionvalue2
  * @param remove  boolean value to indicate whether to  remove the options from the select element first or not
  * @author  liuheyuan
  * @date  2003.3.5
  */
    function DOMCreateOption(selectId,str,remove){
          var selectItem = document.getElementById(selectId);
          if(remove){
             //to remove the options from the select
              while(selectItem.options.length!=0){
                    selectItem.remove(0);
              }
           }
              var options= str.split(",");
              for(var i=0;i<options.length;i++){
                  var option = new String(options[i]).split(".");
                  selectItem.add(createOption(option[0],option[1]));
             } //end for
    }
  /**
  * Create an option
  * @param strText the text of the option
  * @param strValue the value of the option
  * @author liuhey
  * @date 2003.3.6
  */
  function createOption(strText, strValue)
        {
           if ((strValue == "") || (strValue == null))
              strValue=strText;
       var oOption;
           oOption = document.createElement("OPTION");
           oOption.text=strText;
           oOption.value=strValue;
           return oOption;
        }

  /**
  * Create an option
  * @param strText the text of the option
  * @param strValue the value of the option
  * @author liuhey
  * @date 2003.3.6
  */
 function swapAllItems(listBoxFrom, listBoxTo)
    {
     if ( (listBoxFrom == null) || (listBoxTo == null) )
             return;

      for (i=0; i < listBoxFrom.options.length;i++)
         listBoxFrom.options[i].selected=true;

         swapItems(listBoxFrom, listBoxTo);
    }
  /**
  * swap the selected options of the listBoxFrom to listBox to
  * @param strText the text of the option
  * @param strValue the value of the option
  * @author liuhey
  * @date 2003.3.6
  */
 function swapItems(listBoxFrom, listBoxTo)
        {
          if ( (listBoxFrom == null) || (listBoxTo == null) || (listBoxFrom.options.selectedIndex == -1) )
             return;

      if (listBoxFrom.options[listBoxFrom.options.selectedIndex].value == "LOADING")   // Don't allow items to be swapped while "Loading"
          return;

          if (listBoxFrom.options.length != 0)
          {
            var lastSelected=-1;
            var count=0;
            var optionsArray=new Array();

                for(i=listBoxFrom.options.length-1;i>=0;i--)
                {
                  if ( (listBoxFrom.options[i].selected==true) || (listBoxFrom.options[i].selected=="true") )
                  {
                        var oOption=createOption(listBoxFrom.options[i].text,listBoxFrom.options[i].value);
                        oOption.selected=true;

                        optionsArray[count]=oOption;
                        count=count+1;
                        listBoxFrom.remove(i);

                        lastSelected=i;
                  }
            }

                // Preserve Order; Add Back In Reverse
                for (i=count; i>0;i--)
                   listBoxTo.add(optionsArray[i-1]);

            if (lastSelected == listBoxFrom.options.length)
                   lastSelected -= 1;

            if (lastSelected >= 0)
                   listBoxFrom.options[lastSelected].selected=true;
          }
        }
    function autoDisplayContent(){
       if(window.parent.displayContent==null){
           if(window.opener.displayContent==null){
               alert("Can't find the method displayContent");
           }else{
               window.opener.displayContent(CenterContent.innerHTML);
               window.close();
           }
       }else{
            window.parent.displayContent(CenterContent.innerHTML);
       }
    }

    function displayHeader(onLineUser, totalUser, time){
        if (window.actualTimeout !=null){
            window.displayTotalUser.innerText = totalUser;
            window.displayOnLineUser.innerText = onLineUser;
            window.actualTimeout.innerText = time;
        }
        if (window.parent !=null && window.parent.actualTimeout !=null){
            window.parent.displayTotalUser.innerText = totalUser;
            window.parent.displayOnLineUser.innerText = onLineUser;
            window.parent.actualTimeout.innerText = time;
        }
        if (window.opener !=null && window.opener.actualTimeout !=null){
            window.opener.displayTotalUser.innerText = totalUser;
            window.opener.displayOnLineUser.innerText = onLineUser;
            window.opener.actualTimeout.innerText = time;
        }
    }

  /**
  * compare the startDate and the endDate
  * @param startDate  the string of the startDate
  * @param endDate the string of the endDate
  * @return true  if startDate>endDate  else return false
  * @author liuhey
  * @date 2003.3.6
  */
    function isDateGreater(startDate,endDate){
       var first = new Date();
       var end = new Date();
       var fullYear = new String(startDate).split("-");
       first.setFullYear(fullYear[0],fullYear[1],fullYear[2]);
       fullYear = new String(endDate).split("-");
       end.setFullYear(fullYear[0],fullYear[1],fullYear[2]);
       if(first.valueOf()>end.valueOf()){
            return true;
         }else{
            return false;
       }

    }

  /**
  * 判断date是否为正确的日期类型值
  * @param date    需要判断的日期类型值
  * @param hint    正确格式应该是yyyy-mm-dd, 例如: 2000-01-01
  * @param hint1   年份应该为一个正整数
  * @param hint2   月份应该为1－12之间的一个正整数
  * @param hint3   日期应该为1到当月最大天数之间的一个正整数
  * @return true    if date is right; false otherwise
  * @author yangc
  * @date 2003.4.20
  */
  function isDateByHint(date, hint, hint1, hint2, hint3) {

    if(!isPatternDate(date)) {
      alert(hint);
      return false;
    }

    return isRightDate(getDateArray(date), hint1, hint2, hint3);
  }

  /**
  * 判断date是否为满足日期类型值的约束
  * @param date    需要判断的日期类型值
  * @return true    if date is right; false otherwise
  * @author yangc
  * @date 2003.4.20
  */
  function isPatternDate(date) {

    var dat = trim(date + "");
    var datePattern = new RegExp("^\\d+-(0?\\d|1[0-2])-([0-2]?\\d|3[0-1])$","g");
    return dat.match(datePattern) == dat;
  }

  /**
  * 判断date是否为正确的日期类型值
  * @param date    需要判断的日期类型值
  * @param hint1   年份应该为一个正整数
  * @param hint2   月份应该为1－12之间的一个正整数
  * @param hint3   日期应该为1到当月最大天数之间的一个正整数
  * @return true    if date is right; false otherwise
  * @author yangc
  * @date 2003.4.20
  */
  function isRightDate(dateArray, hint1, hint2, hint3)
  {
    var day=[31,(dateArray[0]%4==0 && dateArray[0]%100!=0 || dateArray[0]%400==0)?29:28,31,30,31,30,31,31,30,31,30,31];
    if (isNaN(dateArray[0]) || ((dateArray[0] - 0) <= 0))
    {
        alert(hint1);
        return false;
    }
    if (isNaN(dateArray[1]) || ((dateArray[1] - 0) <= 0) || ((dateArray[1] - 12) > 0))
    {
        alert(hint2);
        return false;
    }
    var Max = day[dateArray[1] - 1];
    if (isNaN(dateArray[2]) || ((dateArray[2] - 0) <= 0) || ((dateArray[2] - Max - 0) > 0))
    {
        alert(hint3);
        return false;
    }

    return true;
  }

  /**
  * get the array from date
  * @param date  the string of the Date
  * @return dateArray    type of Array
  * @author yangc
  * @date 2003.4.20
  */
  function getDateArray(date) {

  /*
    var dateArray = new Array();
    dateArray[0] = date.substring(0, date.indexOf("-"));
    date = date.substring(date.indexOf("-") + 1);
    dateArray[1] = date.substring(0, date.indexOf("-"));
    dateArray[2] = date.substring(date.indexOf("-") + 1);
  */
    var dateArray = new String(date).split("-");
    return dateArray;
  }

  /**
  * compare the dateArray1 and the dateArray2
  * @param dateArray1  the array of the date
  * @param dateArray2 the array of the date
  * @return 1    if (dateArray1 > dateArray2)
  * @return 0    if (dateArray1 = dateArray2)
  * @return -1   if (dateArray1 < dateArray2)
  * @author yangc
  * @date 2003.4.20
  */
  function dateCompare(dateArray1, dateArray2) {

    /*
    if (dateArray1[0]*1 > dateArray2[0]*1)
      return 1;
    else if (dateArray1[0]*1 < dateArray2[0]*1)
      return -1;
    else if (dateArray1[1]*1 > dateArray2[1]*1)
      return 1;
    else if (dateArray1[1]*1 < dateArray2[1]*1)
      return -1;
    else if (dateArray1[2]*1 > dateArray2[2]*1)
      return 1;
    else if (dateArray1[2]*1 < dateArray2[2]*1)
      return -1;
    */
    var date_1 = new Date();
    var date_2 = new Date();
    date_1.setFullYear(dateArray1[0], dateArray1[1], dateArray1[2]);
    date_2.setFullYear(dateArray2[0], dateArray2[1], dateArray2[2]);
    if (date_1.valueOf() > date_2.valueOf()) return 1;
    else if (date_1.valueOf() < date_2.valueOf()) return -1;

    return 0;
  }

    /**
     * Remove leading or trailing white space.
     * @add by zhaochao
     */
    function trim(s) {
        var whtSpEnds = new RegExp("^\\s*|\\s*$", "g");
        return s.replace(whtSpEnds, "");
    }


    /**
     * util method to remove all option of a select element
     * @add by liu.dq
     */
    function removeAllOption(select){
        if( select==null)
            return;

        var i = select.options.length;
        while( i>0 ){
           select.options.remove(i-1);
           i--;
        }
    }


    /**
     * util method to add a option to a select element
     * @add by liu.dq
     */
    function addOption(select,value,label){
        if( select==null )
            return ;

        var option = document.createElement("OPTION");
        select.options.add(option);
        option.innerText = label;
        option.value = value;
    }

    /**
     *  util method select all the option
     * @add by liu.dq
     */
    function selectAllOption(select){
        var i;
        for(i=0;i<select.options.length;i++)
            select.options[i].selected=true;
    }

    /**
     * util method to set the option's selected property true whose value is equal "value"
     * @add by liu.dq
     */
    function setSelectedByValue(select,value){
       if( select==null )
          return ;

       for(var i=0;i<select.options.length;i++){
           if(select.options[i].value==value)
               select.options[i].selected = true;
           else
               select.options[i].selected = false;
        }
    }

    /**
     * if date1>date2 return 1, if date1=date2 return 0; if date1<date2 return -1;
     * date format is YYYY-MM-DD
     * this is simple implement!
     */
    function compareDate(date1,date2){
        if( date1>date2 )
           return 1;
        if( date1==date2 )
           return 0;
        if( date1<date2 )
           return -1;
    }

    /**
     *  get the current time and return a string as style yyyy-mm-dd
     * @add by liyh
     */
    function getCurrentDate(){
        var date = new Date();
        date = scriptDateToStr(date);
        return date;
    }

    /**
     *  get the current time and return a string as style yyyy-mm-dd
     * @add by liyh
     */
    function getLastMonth(date){
        var time_array = date.split("-");
        var time = new Date(parseInt(time_array[0], 10), parseInt(time_array[1], 10) - 2, parseInt(time_array[2], 10));
        time = scriptDateToStr(time);
        return time;
    }

    /**
     *  translate javascript date to yyyy-mm-dd style
     * @add by liyh
     */
    function scriptDateToStr(date){
        var timeStr = date.getFullYear();
        if (date.getMonth() > 8)
            timeStr += "-" + (date.getMonth() + 1);
        else
            timeStr += "-0" + (date.getMonth() + 1);
        if (date.getDate() > 9)
            timeStr += "-" + date.getDate();
        else
            timeStr =timeStr + "-0" + date.getDate();
        return (timeStr);
    }

    /**
     *  translate date to yyyy-mm-dd style
     * @add by liyh
     */
    function dateToStr(date){
        var timeStr = date.getFullYear();
        if (date.getMonth() > 9)
            timeStr += "-" + date.getMonth();
        else
            timeStr += "-0" + date.getMonth();
        if (date.getDate() > 9)
            timeStr += "-" + date.getDate();
        else
            timeStr =timeStr + "-0" + date.getDate();
        return (timeStr);
    }

    /**
     * get the current dateTime string,format is yyyy-mm-dd hh-mm-ss
     */
    function getCurrentDateTime(){
        var str = getCurrentDate() + " ";
        var d = new Date();

        if( d.getHours()<=9 )
            str += "0" ;
        str += d.getHours() + ":";
        if( d.getMinutes()<=9 )
            str += "0" ;
        str += d.getMinutes() + ":";
        if( d.getSeconds()<=9 )
            str += "0";
        str += d.getSeconds();

        return str;
    }

    /**
     * 计算字符串str存储到数据库需要的长度（就是字节数）
     */
    var enCharDBLength = 1;
    var chCharDBLength = 3;
    function countDBLength(str){
        var i,code,enCharCount,chCharCount;
        enCharCount = 0;
        chCharCount = 0;
        for(i=0;i<str.length;i++){
            code = str.charCodeAt(i);
            if( code>0xff )
                chCharCount ++;
            else
                enCharCount ++;
        }
        return ((chCharCount*chCharDBLength)+(enCharCount*enCharDBLength))

        /**var i,length,code;
        length=0;
        for(i=0;i< str.length;i++){
            code=str.charCodeAt(i);
            do{
                length++;
            }while( (code=code>>8)>0 );
        }

        return length;*/
    }

    /*
    * 判断字符串str的长度是否超过了length指定的长度，如果是，则弹出提醒对话框
    * strName, 指出录入项目的名称，如：组织描述
    * hint,提示的内容
    */
   function isTooLongByHint(str ,length, strName, hint){
      if( countDBLength(str) > length ){
        var newStr = hint.replace("[enLength]",((length-length%enCharDBLength)/enCharDBLength)+"" );
        newStr = newStr.replace("[chLength]",((length-length%chCharDBLength)/chCharDBLength)+"" );

        alert(strName + newStr);
        return true;
      }
      return false;
   }
   /*
    * 判断int的长度是否超过了int指定的长度，如果是，则弹出提醒对话框
    * strName, 指出录入项目的名称，如：组织描述
    * hint,提示的内容
    */
   function isTooLongIntByHint(str, strName, hint){
      if( trim(str).length>8 ){
        alert(strName + hint);
        return true;
      }
      return false;
   }
   /*
    * 判断long的长度是否超过了long指定的长度，如果是，则弹出提醒对话框
    * strName, 指出录入项目的名称，如：组织描述
    * hint,提示的内容
    */
   function isTooLongLongByHint(str, strName, hint){
      if( trim(str).length > 16 ){
        alert(strName + hint);
        return true;
      }
      return false;
   }
   /*
    * 判断输入值是否为int型及int型的长度是否超过了指定的长度，如果是，则弹出提醒对话框
    *hint1提示不是int型 ,hint2提示长度超过了规定范围
    * strName, 指出录入项目的名称，如：组织描述
    * hint,提示的内容
    */
   function isNotIntOrTooLongByHint(str, strName, hint1,hint2){

      if( !isInt( str ) ){
          alert( strName+hint1 );
          return true;
     }else{
         if( trim(str).length>8 ){
            alert(strName + hint2);
            return true;
          }
      }
     return false;
   }
   /*
    * 判断long的长度是否超过了long指定的长度，如果是，则弹出提醒对话框
    * hint1提示不是int型 ,hint2提示长度超过了规定范围
    * strName, 指出录入项目的名称，如：组织描述
    * hint,提示的内容
    */
   function isNotLongOrTooLongByHint(str, strName, hint1,hint2){
      if( !isInt( str ) ){
          alert( strName+hint1 );
          return true;
     }else{
         if( trim(str).length>16 ){
            alert(strName + hint2);
            return true;
          }
      }
    return false;
   }

/*
    * 判断是否是float型的以及长度是否超过了指定的长度，如果是，则弹出提醒对话框
    * length1小数点以前的位数，length2小数点以后的位数
    * hint1提示不是float型 ,hint2提示小数点以前超过了规定范围，hint3提示小点以后超过规定长度
    * strName, 指出录入项目的名称，如：组织描述
    */
   function isNotFloatOrTooLongByHint(str,length1,length2, strName, hint1,hint2,hint3){
            if( !isFloat( str ) ){
                  alert( strName+hint1 );
                  return true;
             }else{
                return isFloatTooLongByHint(str,length1,length2,strName,hint2,hint3);
              }
            return false;
    }
    /*
    * 判断float型的长度是否超过了指定的长度，如果是，则弹出提醒对话框
    * length2小数点以前的位数，length3小数点以后的位数
    * hint1提示不是float型 ,hint2提示小数点以前超过了规定范围，hint3提示小点以后超过规定长度
    * strName, 指出录入项目的名称，如：组织描述
    */
   function isFloatTooLongByHint(str,length1,length2, strName,hint2,hint3){
            str = parseFloat(str)+"";
            str = trim(str);
            var pos = str.indexOf(".");
            var pos1 = str.indexOf("E");
            var len1,len2;
            if( pos<0 ){
               len1 = str.length;
               len2 = 0;
            }else{
               len2 = str.length-pos-1;
               len1 = str.length-len2-1;
            }
              if( len1>length1 ){
                    alert(strName + hint2);
                    return true;
                  }
              if(len2>length2){
                    alert(strName + hint3);
                    return true;
                  }
            return false;
    }

   /*
    * 判断字符串是否是一个有效的email地址
    * theStr, 要检查的字符串
    * 如果是，则返回true；否则，返回false
    */
   function isEmail(theStr)
    {
        var atIndex = theStr.indexOf("@");
        var dotIndex = theStr.indexOf(".",atIndex);
        var flag = true;

        if(atIndex < 1) return false;
        if(dotIndex < (atIndex+2)) return false;
        if(atIndex != theStr.lastIndexOf("@")) return false;

        var theSub = theStr.substring(0,dotIndex+1);
        if(theStr.length <= theSub.length) return fasle;

        return true;
    }

    /*
    * 判断字符串是否是一个有效的email地址，如果不是，则弹出提醒对话框
    * strName, 指出录入项目的名称，如：组织描述
    * hint,提示的内容
    */
   function isNotEmailByHint(theStr, strName, hint){
      if( !isEmail(theStr) ){
        alert(strName + hint);
        return true;
      }

      return false;
   }

    /*
    * 判断字符串是否是一个有效的邮政编码
    * theStr, 要检查的字符串
    * 如果是，则返回true；否则，返回false
    */
   function isPostalCode(theStr)
    {
        theStr = trim(theStr);

        if(theStr.length != 6) return false;
        if(!isSignedInt(theStr)) return false;

        return true;
    }

   /*
    * 判断字符串是否是一个有效的邮政编码，如果不是，则弹出提醒对话框
    * strName, 指出录入项目的名称，如：组织描述
    * hint,提示的内容
    */
   function isNotPostalCodeByHint(theStr, strName, hint){
      if( !isPostalCode(theStr) ){
        alert(strName + hint);
        return true;
      }

      return false;
   }

   /*
    * 判断字符串是否是一个有效的身份证号码
    *
    */
   function isIDCard(idcard){
        idcard = trim(idcard);
        if (idcard.length == 15){
            if (isNaN(idcard))
                return false;
        }
        else if (idcard.length == 18){
            if (isNaN(idcard)){
                if (isNaN(idcard.substring(0, 17)))
                    return false;
                else if (idcard.charAt(17) != 'X')
                    return false;
            }
        }
        else{
            return false;
        }
        return true;
   }

   /*
    * 判断字符串是否是一个有效的身份证号码，如果不是，则弹出提醒对话框
    * hint, 弹出的提示信息
    */
    function isIDCardByHint(idcard, hint){
        if (isIDCard(idcard))
            return true;
        alert(hint);
        return false;
    }

   /*
    * 判断字符串是否是一个有效的英文名，如果不是，则弹出提醒对话框
    * hint, 弹出的提示信息
    */
    function isEnName(str){
        var i,length,code;
        length=0;
        for(i=0;i< str.length;i++){
            code=str.charCodeAt(i);
            if ((code= code >> 8) > 0)
                return false;
        }
        return true;
    }

/*
* This is used in the <ehr:popup> tag
* It is to display the long text.
* @author liuheyuan
*/
var ehrPopup = window.createPopup();
function displayPopup(id)
{
    var display=document.getElementById(id);
    ehrPopup.document.body.innerHTML = display.innerHTML;
    var popupBody = ehrPopup.document.body;
    // The following popup object is used only to detect what height the
    // displayed popup object should be using the scrollHeight property.
    // This is important because the size of the popup object varies
    // depending on the length of the definition text. This first
    // popup object is not seen by the user.
    ehrPopup.show(0, 0, 300, 0);
    var realHeight = popupBody.scrollHeight;
    // Hides the dimension detector popup object.
    ehrPopup.hide();
    // Shows the actual popup object with correct height.
    ehrPopup.show(0, 15, 300, realHeight,event.srcElement);
    return false;
}
/*
* This is used to display the employee photo
* @author liuheyuan
*/
var bToggle = 1
<!-- Toggle the sizingMethod property to resize the image.  -->
function fnToggle(oObj,imageMsg,scaleMsg) {
    if (bToggle) {
        bToggle = 0;
        oDiv.filters(0).sizingMethod="image";
        oObj.innerText=imageMsg;}
    else {
        bToggle = 1;
        oDiv.filters(0).sizingMethod="scale";
        oObj.innerText=scaleMsg;}
}

/*
 * display emloyee phohto ,modified the above function
 * author lichuanjun
 */
function fnToggle1(oObj,ob1,ob2,imageMsg,scaleMsg) {
    var img1,img2;
    img1=document.getElementById(ob1);
    img2=document.getElementById(ob2);
    
    if (bToggle) {
        bToggle = 0;
        // langs fixed 2004.2.26 
//        img1.style.display="none";
//        img2.style.display="block";
//        oObj.innerText=imageMsg;}

        img1.style.display="block";
        img2.style.display="none";
        oObj.innerText=scaleMsg;
        // langs fixed end
    } else {
        bToggle = 1;
        // langs fixed 2004.2.26 
//        img1.style.display="block";
//        img2.style.display="none";
//        oObj.innerText=scaleMsg;

        img1.style.display="none";
        img2.style.display="block";
        oObj.innerText=imageMsg;
        // langs fixed end
    }
}

 /*
    * 判断字符串str的长度是否超过了length指定的长度，如果是，返回true，否则返回false
    */
   function isTooLongNotHint(str ,length){
      if( countDBLength(str) > length ){
        return true;
      }
      return false;
   }
  /**
    * This is used to check the customField value .
    */
      function checkCustomField(notNull){
             var message="";
             for(var j=0;j<=i;j++){
                 if(isNull(infoForm.elements['customFieldValueList['+j+'].fieldvalue'].value) || isTooLongNotHint(infoForm.elements['customFieldValueList['+j+'].fieldvalue'].value,1024)){
                     message+=customFieldName[j]+notNull;
                 }
             }
             return message;
        }
    /**
    * This is used to check the customField value .
    */
      function checkCandidateCustomField(notNull){
             var message="";
             for(var j=0;j<=i;j++){
                 if(isNull(candidateInfoForm.elements['customFieldValueList['+j+'].fieldvalue'].value) || isTooLongNotHint(candidateInfoForm.elements['customFieldValueList['+j+'].fieldvalue'].value,1024)){
                     message+=customFieldName[j]+notNull;
                 }
             }
              return message;
        }

     function checkIncludePercent(str){
        if( str.indexOf('%') >=0 )
           return true;
        return false;
     }

     /* langs added 2003.12.16 for recruit */
     /**
     * check illegal char in customField value.
     * if find illegal char return false;else return true.
     * add by macheng
     */
     function checkIllegalChar(str,hint){
        if(str.indexOf("<")>=0 ){
            alert(hint+"< ");
            return false;
        }
        if(str.indexOf(">")>=0 ){
            alert(hint+"> ");
            return false;
        }
        if(str.indexOf("'")>=0 ){
            alert(hint+"' ");
            return false;
        }
        if(str.indexOf("&")>=0 ){
            alert(hint+"&");
            return false;
        }
        return true;
     }

         /*
     * 选中所有的复选框，checkallbox是提供选择所有复选框的复选框，checksbox是要选中的复选框数组。licj add
     */
    function checkAllEnabled(checkallbox,checksbox){
        var length = checksbox == undefined ? 0 : checksbox.length == undefined ? 1 : checksbox.length;

        if ( length > 1 )
          for( i = 0 ; i < length ; i ++ ){
              if (checksbox[i].disabled == false)
                    checksbox[i].checked = checkallbox.checked;
          }
        else
          if ( length == 1 ) checksbox.checked = checkallbox.checked;

        if ( checkallbox.checked ) CheckedNum = length;
        else CheckedNum = 0;
    }

     /* langs added end */

    /**
     * 将object中的所有str1替换为str2
     */
    function replaceAll(object, str1, str2) {
        if (object == null || object.indexOf(str1) < 0)
            return object;
        var obj = object;
        while (obj.indexOf(str1) >= 0)
            obj = obj.replace(str1, str2);

        return obj;
    }

    function convertHtml(str) {
       if (str == null || str.length)
            return str;

       var s = str;
       s = replaceAll(s, "&nbsp;", " ");
       s = replaceAll(s, "<br>", "\r\n");
       return s;
    }


