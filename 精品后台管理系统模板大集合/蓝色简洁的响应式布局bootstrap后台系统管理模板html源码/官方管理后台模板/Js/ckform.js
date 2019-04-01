/*
 jquery表单验证插件。last edit by rongrong 2011.03.29
 */

var __check_form_last_error_info = [];

var check_form = function (formname, opt) {
    var formobj;				//指定当前表单
    var e_error = "";
    var focus_obj = "";			//第一个出现错误对像
    var error = [];
    var _temp_ajax = new Array;	//ajax校验请求的缓存
    var opt = opt || {};		//选项
    opt = $.extend({
        type: 'form',			//校验对象 form ,elem
        trim: true,				//自动trim
        errtype: 0,				//返回错误信息：0 全部 1 最后一条 2 第一条
        showtype: 0				//错误显示方式 0 弹出  1 不弹出
    }, opt);
    if (opt['type'] == 'elem') {
        formobj = $(formname);
        formname = $('body');
    }
    else {
        formobj = $('input,textarea,select,button', formname);
    }
    formobj.each(function (i) {
        var formobj_i = $(this);
        var jscheckflag = formobj_i.attr("jscheckflag");
        var obj_tag = formobj_i.attr("tagName");
        jscheckflag = jscheckflag == undefined ? 1 : jscheckflag;
        if (jscheckflag == 0)
            return true;
        var jscheckrule = formobj_i.attr("jscheckrule") || '';
        var jscheckerror = formobj_i.attr("jscheckerror");
        var jschecktitle = formobj_i.attr("jschecktitle") || '表单';
        var jsmaxlen = formobj_i.attr("maxLength");

        //执行自动trim
        if (jscheckrule.indexOf('trim=0') == -1 && opt['trim']) {
            cf_trim(formobj_i, 1);
        }

        //初始化jscheckrule
        //校验HTML
        if (jscheckrule.indexOf('html=') == -1) {
            jscheckrule += ';html=0';
        }

        var jsvalue = formobj_i.val();
        var errflag = 0;//错误标记
        if (obj_tag == 'TEXTAREA' && (jsmaxlen > 0 ? (jsvalue.length > jsmaxlen ? 1 : 0) : 0)) {
            jscheckerror = (jschecktitle ? jschecktitle : formobj_i.attr('name')) + " 不得超过 " + jsmaxlen + " 字";
            errflag = 1;
        }
        else if (jscheckrule) {
            errflag = docheck(formobj_i, jscheckrule) ? errflag : 1;
        }
        if (errflag) {
            e_error = jscheckerror ? jscheckerror : jschecktitle + ' ' + formobj_i.data('jscheckerror');
            error.push(e_error);
            if (focus_obj == "") focus_obj = formobj_i;									//聚焦第一个出现错误对象
            if (this.oldback == undefined) this.oldback = this.style.backgroundColor;	//记录原底色
            this.style.backgroundColor = '#FFFF00';									//高亮错误表单对象
        } else {
            if (this.oldback != undefined) this.style.backgroundColor = this.oldback;		//还原底色
        }
    });
    //处理ajax校验
    if (!error) {
        for (var i in _temp_ajax) {
            var obj = _temp_ajax[i].obj;
            var str = _temp_ajax[i].str;
            var jscheckerror = obj.attr('jscheckerror');
            var jschecktitle = obj.attr('jschecktitle');
            if (_cf_ajax.call(obj.get(0), obj, str) != true) {
                e_error = jscheckerror ? jscheckerror : jschecktitle + ' ' + obj.data('jscheckerror');
                error.push(e_error);
                if (focus_obj == "") focus_obj = obj;											//聚焦第一个出现错误对象
                if (obj.get(0).oldback == undefined) obj.get(0).oldback = obj.get(0).style.backgroundColor;	//记录原底色
                obj.get(0).style.backgroundColor = '#FFFF00';							//高亮错误表单对象
                break;
            }
        }
    }
    if (error.length > 0) {
        __check_form_last_error_info = error;
        if (opt.showtype == 0)
            alert("表单存在以下错误:\n" + error.join("\n"));

        try {
            focus_obj.focus()
        } catch (e) {
        }
        ;
        return false;
    }
    return true;
    //校验主函数
    function docheck(el, jscheckrule) {
        var jscheckrule = jscheckrule || el.attr("jscheckrule");
        var e_rules = jscheckrule.split(";");
        var e_rule, e_rules_len = e_rules.length;
        for (var k = 0; k < e_rules_len; k++) {
            var rule_index = e_rules[k].indexOf("=");
            if (rule_index > -1) {
                e_rule = [e_rules[k].substr(0, rule_index), e_rules[k].substr(rule_index + 1)];
                if (e_rule.length == 2) {
                    //e_rule_para = e_rule_para.replace(new RegExp("\'","gm"),"\\'");
                    var cf_func = "cf_" + e_rule[0] + "(el,e_rule[1])";
                    try {
                        if (!eval(cf_func)) return false;
                    } catch (e) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    //检测中英文混合长度
    function strLen(s) {
        var i, str1, str2, str3, nLen;
        str1 = s;
        nLen = 0;
        for (i = 1; i <= str1.length; i++) {
            str2 = str1.substring(i - 1, i)
            str3 = escape(str2);
            if (str3.length > 3) {
                nLen = nLen + 2;
            }
            else {
                nLen = nLen + 1;
            }
        }
        return nLen;
    }

    //////////////////////////////////////////**** 检测功能函数组****///////////////////////////////////
    //自动trim掉空格，一般加在规则最前面trim=1
    function cf_trim(obj, flag) {
        if (flag == 1) {
            var str = obj.val();
            str = $.trim(str);
            try {
                obj.val(str);
            } catch (e) {
            }
            ;//file时会出错
        }
        return true;
    }

    //判断是否为空
    function cf_null(obj, cannull) {
        if (cannull == 1) return true;
        var obj_type = obj.attr('type'), str;
        if (obj_type == 'checkbox' || obj_type == 'radio') {
            var objname = obj.attr('name');
            str = formobj.filter(':' + obj_type + '[name=' + objname + '][checked]').map(function () {
                return this.value;
            }).get().join(',');
        }
        else {
            str = obj.val();
        }
        str = str && typeof(str) == 'object' ? str.join(',') : str;
        if (cannull == 0) {
            str = $.trim(str);
        }
        if (cannull == 1 || str != "") return true;
        obj.data('jscheckerror', '不能为空');
        return false;
    }

    //最大长度
    function cf_maxlen(obj, num) {
        var str = obj.val();
        if (str == "" || strLen(str) <= num) return true;
        obj.data('jscheckerror', '长度不能大于 ' + num + ' 字节');
        return false;
    }

    //最小长度
    function cf_minlen(obj, num) {
        var str = obj.val();
        if (str == "" || strLen(str) >= num) return true;
        obj.data('jscheckerror', '长度不能小于 ' + num + ' 字节');
        return false;
    }

    //最大值
    function cf_maxnum(obj, num) {
        var str = obj.val();
        if (str * 1 <= num * 1) return true;
        obj.data('jscheckerror', '不能大于 ' + num);
        return false;
    }

    //最大字数
    function cf_maxlencn(obj, num) {
        var str = obj.val();
        if (str == "" || str.length <= num) return true;
        obj.data('jscheckerror', '字数不能大于 ' + num + ' 字');
        return false;
    }

    //最小字数
    function cf_minlencn(obj, num) {
        var str = obj.val();
        if (str == "" || str.length >= num) return true;
        obj.data('jscheckerror', '字数不能小于 ' + num + ' 字');
        return false;
    }

    //指定字数
    function cf_lencn(obj, num) {
        var str = obj.val();
        if (str == "" || str.length == num) return true;
        obj.data('jscheckerror', '字数必须等于 ' + num + ' 字');
    }

    //最小值
    function cf_minnum(obj, num) {
        var str = obj.val();
        if (str == "" || str * 1 >= num * 1) return true;
        obj.data('jscheckerror', '不能小于 ' + num);
        return false;
    }

    //指定长度
    function cf_len(obj, num) {
        var str = obj.val();
        if (str == "" || strLen(str) == num) return true;
        obj.data('jscheckerror', '长度必须等于 ' + num + ' 字节');
    }

    //是否邮件地址
    function cf_email(obj, mustcheck) {
        var str = obj.val();
        if (str == "" || !mustcheck) return true;
        rx = "^([\\w\\_\\.])+@([\\w]+\\.)+([\\w])+$";
        if (cf_regexp(obj, rx)) return true;
        obj.data('jscheckerror', '必须为 EMAIL 格式');
        return false;
    }

    //与另一对象的值一致
    function cf_sameto(obj, el) {
        var str = obj.val();
        if (str == "" || str == formobj.filter("#" + el).val()) return true;
        el = formobj.filter("#" + el).attr('jschecktitle') || el;
        obj.data('jscheckerror', '必须等于 ' + el + ' 的值');
        return false;
    }

    //与另一对象的值不一致
    function cf_differentto(obj, el) {
        var str = obj.val();
        if (str == "" || str == formobj.filter("#" + e1).val()) return true;
        obj.data('jscheckerror', '必须不等于 ' + el + ' 的值');
        return false;
    }

    //不能为某些值
    function cf_nosame(obj, para) {
        var str = obj.val();
        if (str == "") return true;
        var p_arr = para.split(",");
        var p_arrlen = p_arr.length;
        for (var l = 0; l < p_arrlen; l++) {
            if (p_arr[l] == str) {
                obj.data('jscheckerror', '不能等于 ' + para.join(' 或 '));
                return false;
                break;
            }
        }
        return true;
    }

    //允许字符范围
    function cf_charset(obj, para) {
        var str = obj.val();
        if (str == "") return true;
        var c_rule = '';
        var p_arr = para.split(",");
        var p_arrlen = p_arr.length;
        var para_arr = [];
        for (var l = 0; l < p_arrlen; l++) {
            if (p_arr[l] == 'en') {
                c_rule += "a-zA-Z";
                para_arr[l] = '字母';
            }
            else if (p_arr[l] == 'num') {
                c_rule += "0-9";
                para_arr[l] = '数字';
            }
            else if (p_arr[l] == 'fl') {
                c_rule += "0-9\\.0-9";
                para_arr[l] = '小数';
            }
            else if (p_arr[l] == 'cn') {
                c_rule += "\\u4E00-\\u9FA5";
                para_arr[l] = '中文';
            }
            else if (p_arr[l] == 'ul') {
                c_rule += "_";
                para_arr[l] = '下划线';
            }
        }
        if (c_rule == "")    return true;
        else {
            var t_rule = "^[" + c_rule + "]*$";
            if (cf_regexp(obj, t_rule)) return true;
            obj.data('jscheckerror', '必须为[' + para_arr.join(',') + ']');
            return false;
        }
    }

    //自定义正则匹配
    function cf_regexp(obj, rx) {
        var str = obj.val();
        if (str == "") return true;
        if (rx == "")return true;
        var r_exp = new RegExp(rx, "ig");
        if (r_exp.test(str)) return true;
        obj.data('jscheckerror', '含有非法字符');
        return false;
    }

    //校验HTML标签<HTML>
    function cf_html(obj, flag) {
        var str = obj.val();
        if (str == "" || str == null) return true;
        if (flag == 1) return true;
        if (str.indexOf('<') == -1 && str.indexOf('>') == -1) return true;
        obj.data('jscheckerror', '含有html字符');
        return false;
    }

    //ajax校验
    function cf_ajax(obj, str) {
        _temp_ajax = _temp_ajax.concat({obj: obj, str: str});
        return true;
        //return _cf_ajax.call(obj.get(0),obj,str);
    }

    function _cf_ajax(obj, str) {
        var str_obj = eval('(' + str + ')');
        var resp = $.ajax({
            url: str_obj.url,
            async: false,
            data: str_obj.data
        }).responseText;
        if (resp === 'true') return true;
        obj.data('jscheckerror', resp);
        return false;
    }

    function get_param(str) {
        return eval('(' + str + ')');
    }

    //调函数 call = {func:[this.value,1,2,3]}
    function cf_call(obj, str) {
        var str_obj = get_param.call(obj.get(0), str);
        for (var func in str_obj) {
            var resp = window[func].apply(undefined, str_obj[func]);
            if (resp !== true) {
                obj.data('jscheckerror', resp);
                return false;
            }
        }
        return true;
    }
}

check_form.get_error = function () {
    return __check_form_last_error_info;
};
