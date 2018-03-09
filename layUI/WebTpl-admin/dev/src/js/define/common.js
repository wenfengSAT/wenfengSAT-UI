layui.config({
  base: '../../src/js/lib/' //扩展组件目录
}).extend({ //设定组件别名
  datatable: 'datatable', //公用组件命名部分
  datatableButton: 'dataTables/extensions/Buttons/js/dataTables.buttons',
  datatableFlash: 'dataTables/extensions/Buttons/js/buttons.flash',
  datatableHtml5: 'dataTables/extensions/Buttons/js/buttons.html5',
  datatablePrint: 'dataTables/extensions/Buttons/js/buttons.print',
  datatableColVis: 'dataTables/extensions/Buttons/js/buttons.colVis',
  datatableSelect: 'dataTables/extensions/Select/js/dataTables.select',
  datatableEditer: 'dataTables/extensions/Editor/js/dataTables.editor.min', //编辑
});
layui.use(['layer', 'util', 'element'], function() {
  var $ = layui.jquery,
    layer = layui.layer,
    element = layui.element(),
    util = layui.util;
  /**
   * 使用内部工具组件
   */
  util.fixbar();
  /**
   ****************************jq扩展函数*******************************v**
   */
  /**
   * 全选
   */
  $(function() {
    $('.table-sort').on('click', '.btn-checkall', function() {
      $('.btn-checkall').prop('checked', this.checked);
      $('[type="checkbox"][name="sublist"]').prop("checked", this.checked);
    });
    $('.table-sort').on('click', '[type="checkbox"][name="sublist"]', function() {
      $('.btn-checkall').prop("checked", $('[type="checkbox"][name="sublist"]').length == $('[type="checkbox"][name="sublist"]:checked').length ? true : false);
    });
    /**
     * 提示
     */
    $('.tips-icon,.tips-obj').hover(function() {
      $(this).find('.dialog-warp').show();
      $(this).find('.dialog-warp').stop();
      $(this).find('.dialog-warp').animate({
        "opacity": 1
      }, 300);
    }, function() {
      $(this).find('.dialog-warp').stop();
      $(this).find('.dialog-warp').animate({
        "opacity": 0
      }, 300);
      $(this).find('.dialog-warp').hide();
    })
    $('.dialog-warp').each(function() {
      var H = $(this).height();
      $(this).css('margin-top', -H / 2);
    });
    /**
     * 速度动画
     * @param {Object} obj
     */
    var $obj = $('.fly-numberAdd');
    $obj.each(function() {
      var $this = $(this);
      var max_number = $this.data("value"); //最大值
      var plus_number = Math.ceil(max_number / 99); //增加值,因为时间变化一样的
      var start_number = 0;
      var Interval = setInterval(function() {
        start_number += plus_number;
        if(start_number > max_number) {
          $this.html(max_number);
          clearInterval(Interval);
        } else {
          $this.text(start_number);
        }
      }, 10);
    });
    /**
     * 数字过万则处理
     */
    $('.fly-number').each(function(i, obj) {
      var n = +$(obj).data('number');
      if(n > 10000) {
        $(obj).text((n / 10000).toFixed(2) + '万');
      }
    });
    /**
     * 刷新当前页
     */
    $("#refresh").on('click', function() {
      window.location.reload();
    });
  });
});

//table配置项汉化
var lang = {
  "sProcessing": "<div class='loader'>加载中...</div>",
  "sLengthMenu": "每页 _MENU_ 项",
  "sZeroRecords": "换个搜索词试试呢？暂无数据",
  "sInfo": "当前显示第 _START_ 至 _END_ 项，全部 _TOTAL_ 项。",
  "sInfoEmpty": "当前显示第 0 至 0 项，全部 0 项",
  "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
  "sInfoPostFix": "",
  "sSearch": "本地搜索：",
  "sUrl": "",
  "sEmptyTable": "暂无数据",
  "sLoadingRecords": "载入中...",
  "sInfoThousands": ",",
  "oPaginate": {
    "sFirst": "首页",
    "sPrevious": "上一页",
    "sNext": "下一页",
    "sLast": "最后页",
    "sJump": "跳转至"
  },
  "oAria": {
    "sSortAscending": ": 以升序排列此列",
    "sSortDescending": ": 以降序排列此列"
  }
};
/**
 * @param {String} 提示的内容
 * @param {Number} 图标
 * @description 0为警告，1为成功，2为错误，3为问号，4为锁定，5为失败， 6为成功
 */
function layerMsg(text, icon) {
  layer.msg(text, {
    icon: icon,
    time: 1000
  });
}
//注册弹出方法
function layer_show(title, url, id, w, h) {
  if(title == null || title == '') {
    title = false;
  };
  if(w == null || w == '') {
    w = 800;
  };
  if(h == null || h == '') {
    h = ($(window).height() - 300);
  };
  layer.open({
    type: 2,
    area: [w + 'px', h + 'px'],
    fix: false,
    maxmin: true,
    shade: false,
    title: title,
    content: url
  });
};
/**
 * 关闭弹出框口
 */
function layer_close() {
  var index = parent.layer.getFrameIndex(window.name);
  parent.layer.close(index);
}
/**
 * 格式化json
 */
function parseJson(obj) {
  return JSON.stringify(obj);
}
/**
 *********************************扩展原生函数**********************************
 */
/**
 * addclass函数封装
 * @param {Object} obj
 * @param {Object} classStr
 */
function addClass(obj, classStr) {
  var array = noRepeat(trim(obj.className).split('\s+'));
  if(!inArray(array, classStr)) {
    array.push(classStr);
  }
  obj.className = array.join(' ');
  return obj;
}
/**
 * removeclass函数封装
 * @param {Object} obj
 * @param {Object} classStr
 */
function removeClass(obj, classStr) {
  var array = noRepeat(trim(obj.className).split('\s+'));
  var index = indexOf(array, classStr);
  if(index != -1) {
    classStr.splice(index, 1);
    obj.className = classStr.join(' ');
  }
  return obj;
}
/**
 * toggleClass函数封装
 * @param {Object} obj
 * @param {Object} classStr
 */
function toggleClass(obj, classStr) {
  var array = noRepeat(trim(obj.className).split('\s+'));
  if(inArray(array, classStr)) {
    removeClass(obj, classStr);
  } else {
    addClass(obj, classStr);
  }
}

/**
 * 格式化时间戳
 */
function replaceTime(nS) {
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
}
/*
 * 格式化时间戳
 * 要注意时间戳是毫秒级的还是秒级的
 */
Number.prototype.replaceTime = function() {
  return new Date(parseInt(this) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
};
/**
 * 求数组最大值
 */
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
/**
 * 求数组最小值
 */
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
/**
 * 根据某一项对数组排序
 * @param {name} name
 * arr.sort(sortBy('name'))
 */
Array.prototype.sortBy = function() {
  return function(o, p) {
    var a, b;
    if(typeof o === "object" && typeof p === "object" && o && p) {
      a = o[name];
      b = p[name];
      if(a === b) {
        return 0;
      }
      if(typeof a === typeof b) {
        return a < b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    } else {
      throw("error");
    }
  }
};
/**
 * 数组冒泡排序
 * 对普通数组排序
 */
Array.prototype.sort2 = function() {
  for(var unfix = this.length - 1; unfix > 0; unfix--) {
    for(var i = 0; i < unfix; i++) {
      if(this[i] > this[i + 1]) {
        var temp = this[i];
        this.splice(i, 1, this[i + 1]);
        this.splice(i + 1, 1, temp);
      }
    }
  }
  return this;
}
/**
 * 数组排序
 */
Array.prototype.sort1 = function() {
  return this.sort(function(a, b) { return a - b; });
}
/**
 * 数组排序
 * @param {name} name
 * arr.sort(sortBy('name'))
 */
function sortBy(name) {
  return function(o, p) {
    var a, b;
    if(typeof o === "object" && typeof p === "object" && o && p) {
      a = o[name];
      b = p[name];
      if(a === b) {
        return 0;
      }
      if(typeof a === typeof b) {
        return a < b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    } else {
      throw("error");
    }
  }
};
/**
 * 时间差
 * @param {Object} olddate
 */
function timeDiff(olddate) {
  var old = new Date(olddate);
  var dateNum = (new Date()) - old;
  var days = dateNum / 1000 / 60 / 60 / 24;
  return Math.floor(days);
}
/**
 * 获取当前时间
 */
function getNowDate() {
  var now = new Date();
  return now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
}
/**
 * 获取星期几
 */
function getWeek() {
  return(new Date()).getDay();
}
/**
 * 数组的indexOf方法封装
 * @param {Object} arr
 * @param {Object} value
 * @param {Object} start
 */
function indexOf(arr, value, start) {
  //如果不设置start,则默认start为0
  if(arguments.length == 2) {
    start = 0;
  }
  //如果数组中存在indexOf方法，则用原生的indexOf方法
  if(arr.indexOf) {
    return arr.indexOf(value, start);
  }
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      return i;
    }
  }
  return -1;
}
/**
 * 数组去重方法封装
 * @param {Object} 
 */
Array.prototype.noRepeat = function() {
  this.sort();
  var res = [this[0]];
  for(var i = 1; i < this.length; i++) {
    if(this[i] !== res[res.length - 1]) {
      res.push(this[i]);
    }
  }
  return res;
}

function noRepeat(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(indexOf(result, arr[i]) == -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
/**
 * 删除数组中指定项
 */
Array.prototype.delByIndex = function(index) {
  if(isNaN(index) || index > this.length) {
    return false;
  }
  this.splice(index, 1);
};
/**
 * inArray方法封装,判断数组是否有这个值
 * @param {Object} arr
 * @param {Object} value
 */
Array.prototype.isInArray = function(value) {
  for(var i = 0; i < this.length; i++) {
    if(this[i] === value) {
      return true;
    }
  }
  return false;
};
/**
 * 去除字符串首尾空格函数封装
 * @param {Object} arr
 */
String.prototype.stringTrim = function() {
  return this.replace(/^\s+|\s+$/g, '');
};
/**
 * 验证是否是时间格式
 * @param {Object} datestr
 */
function isDate1(datestr) {
  var result = datestr.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
  if(result == null)
    return false;
  var d = new Date(result[1], result[3] - 1, result[4]);
  if((d.getFullYear() == result[1] && (d.getMonth() + 1) == result[3] && d.getDate() == result[4])) {
    return true;
  }
  return false;
}
/**
 * 验证是否是时间格式
 * @param {Object} datestr
 */
function isDate(datestr) {
  var result = datestr.match(/((^((1[8-9]\d{2})|([2-9]\d{3}))(-)(10|12|0?[13578])(-)(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(11|0?[469])(-)(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(0?2)(-)(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)(-)(0?2)(-)(29)$)|(^([3579][26]00)(-)(0?2)(-)(29)$)|(^([1][89][0][48])(-)(0?2)(-)(29)$)|(^([2-9][0-9][0][48])(-)(0?2)(-)(29)$)|(^([1][89][2468][048])(-)(0?2)(-)(29)$)|(^([2-9][0-9][2468][048])(-)(0?2)(-)(29)$)|(^([1][89][13579][26])(-)(0?2)(-)(29)$)|(^([2-9][0-9][13579][26])(-)(0?2)(-)(29)$))/);
  if(result == null) {
    return false;
  }
  return true;
}
/**
 * 验证是否为空
 * @param {Object} str
 */
function isEmpty(str) {
  if(str == null || typeof str == "undefined" || str.trim() == "") {
    return true;
  } else {
    return false;
  }
}
/**
 * 获取随机数
 * @param {Object} min
 * @param {Object} max
 */
function getRandom(min, max) {
  return(min + Math.round(Math.random() * (max - min)));
}
//浮点数精确运算(加法) 
function accAdd(arg1, arg2) {
  var r1, r2, m, n;
  try { r1 = arg1.toString().split(".")[1].length } catch(e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch(e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2));
  n = (r1 >= r2) ? r1 : r2;
  return((arg1 * m + arg2 * m) / m).toFixed(n);
}
Number.prototype.add = function(arg) {
  return accAdd(arg, this);
}

//浮点数精确运算(减法) 
function accSub(arg1, arg2) {
  return accAdd(arg1, -arg2);
}
Number.prototype.subtract = function(arg) {
  return accSub(this, arg);
}

//浮点数精确运算(乘法) 
function accMul(arg1, arg2) {
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try { m += s1.split(".")[1].length } catch(e) {}
  try { m += s2.split(".")[1].length } catch(e) {}
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
Number.prototype.mul = function(arg) {
  return accMul(arg, this);
}
Number.prototype.div = function(arg) {
  return accDiv(this, arg);
}

//限制输入数字 
function isNumber(e) {
  if($.browser.msie) {
    if(((event.keyCode > 47) && (event.keyCode < 58)) ||
      (event.keyCode == 8)) {
      return true;
    } else {
      return false;
    }
  } else {
    if(((e.which > 47) && (e.which < 58)) ||
      (e.which == 8)) {
      return true;
    } else {
      return false;
    }
  }
}

//字符串长度截取 
function cutstr(str, len) {
  var temp;
  var icount = 0;
  var patrn = /[^\x00-\xff]/;
  var strre = "";
  for(var i = 0; i < str.length; i++) {
    if(icount < len - 1) {
      temp = str.substr(i, 1);
      if(patrn.exec(temp) == null) {
        icount = icount + 1;
      } else {
        icount = icount + 2;
      }
      strre += temp;
    } else {
      break
    }
  }
  return strre + "...";
}

//获取域名主机 
function getHost(url) {
  var host = "null";
  if(typeof url == "undefined" || null == url) {
    url = window.location.href;
  }
  var regex = /^\w+\:\/\/([^\/]*).*/;
  var match = url.match(regex);
  if(typeof match != "undefined" && null != match) {
    host = match[1];
  }
  return host;
}

//判断某个值是否在所在范围 
//rang=1 表示正整数[0,2147483647] 2表示float[0,3.4028235E38] 
//return= 'empty' 表示输入为空, 
function isRang(str, rang) {
  if(typeof str == "number") {
    var num = Number(str);
    //判断是否在正整数范围 
    if(rang == 1) {
      if(testPlusDigit(num) == "yes") {
        if(num >= 0 && num <= 2147483647) {
          return "is_int";
        } else {
          return "is_not_int_rang";
        }
      } else {
        return "is_not_int";
      }
    } else if(rang == 2) {
      if(testPriceFormat(num) == "yes") {
        if(num >= 0 && num <= 3.4028235E38) {
          return "is_float";
        } else {
          return "is_not_float_rang";
        }
      } else {
        return "is_not_float";
      }
    } else {
      return "rang_is_not_right";
    }
  } else {
    return "is_not_number";
  }
}
/**
 * 中文名
 */
var firstName = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯咎管卢莫经房裘缪干解应宗宣丁贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄魏加封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭厉戎祖武符刘姜詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲台从鄂索咸籍赖卓蔺屠蒙池乔阴郁胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍却璩桑桂濮牛寿通边扈燕冀郏浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庚终暨居衡步都耿满弘匡国文寇广禄阙东殴殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后江红游竺权逯盖益桓公万俟司马上官欧阳夏侯诸葛闻人东方赫连皇甫尉迟公羊澹台公冶宗政濮阳淳于仲孙太叔申屠公孙乐正轩辕令狐钟离闾丘长孙慕容鲜于宇文司徒司空亓官司寇仉督子车颛孙端木巫马公西漆雕乐正壤驷公良拓拔夹谷宰父谷粱晋楚阎法汝鄢涂钦段干百里东郭南门呼延归海羊舌微生岳帅缑亢况后有琴梁丘左丘东门西门商牟佘佴伯赏南宫墨哈谯笪年爱阳佟第五言福百家姓续".split('');
var girl = "秀娟英华慧巧美娜静淑惠珠翠雅芝玉萍红娥玲芬芳燕彩春菊兰凤洁梅琳素云莲真环雪荣爱妹霞香月莺媛艳瑞凡佳嘉琼勤珍贞莉桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓纨仪荷丹蓉眉君琴蕊薇菁梦岚苑婕馨瑗琰韵融园艺咏卿聪澜纯毓悦昭冰爽琬茗羽希宁欣飘育滢馥筠柔竹霭凝晓欢霄枫芸菲寒伊亚宜可姬舒影荔枝思丽 ".split('');
var boy = "伟刚勇毅俊峰强军平保东文辉力明永健世广志义兴良海山仁波宁贵福生龙元全国胜学祥才发武新利清飞彬富顺信子杰涛昌成康星光天达安岩中茂进林有坚和彪博诚先敬震振壮会思群豪心邦承乐绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏泽晨辰士以建家致树炎德行时泰盛雄琛钧冠策腾楠榕风航弘".split('');
var email_suffix = "@gmail.com,@yahoo.com,@msn.com,@hotmail.com,@aol.com,@ask.com,@live.com,@qq.com,@0355.net,@163.com,@163.net,@263.net,@3721.net,@yeah.net,@googlemail.com,@126.com,@sina.com,@sohu.com,@yahoo.com.cn".split(",");
var base = "abcdefghijklmnopqrstuvwxyz0123456789";
var teleFirst = "134,135,136,137,138,139,150,151,152,157,158,159,130,131,132,155,156,133,153".split(",");
/*
 * 随机生成中文名字
 * return 中文名
 */
function getChineseName() {
  var index = getNum(0, firstName.length - 1); //下标
  var first = firstName[index]; //姓
  var sex = getNum(0, 1); //性别
  var str = boy; //默认性别
  var length = boy.length;
  if(sex == 0) {
    str = girl;
    length = girl.length;
  } else {}
  index = getNum(0, length - 1);
  var second = str[index];
  var hasThird = getNum(0, 1);
  var third = "";
  if(hasThird == 1) {
    index = getNum(0, length - 1);
    third = str[index];
  }
  return first + second + third;
}
/**
 * 获取随机数
 * @param {Object} start
 * @param {Object} end
 */
function getNum(min, max) {
  return(min + Math.round(Math.random() * (max - min)));
}
/*
 * 随机生成电话号码
 * return 电话号码
 */
function getTel() {
  var index = getNum(0, teleFirst.length - 1);
  var first = teleFirst[index];
  var second = String(getNum(1, 9999) + 10000).substring(1);
  var thrid = String(getNum(1, 9999) + 10000).substring(1);
  return first + second + thrid;
}
/**
 * 返回Email
 * @param lMin 最小长度          
 * @param lMax 最大长度         
 * @return
 */
function getEmail(lMin, lMax) {
  var length = getNum(lMin, lMax);
  var email = '';
  for(var i = 0; i < length; i++) {
    var num = Math.random() * base.length;
    email += base.charAt(num);
  }
  email += email_suffix[getNum(0, email_suffix.length)];
  return email;
}
/*
 * 随机生成时间
 * return 时间
 */
function getDate(start, end) {
  return(((new Date(start)).getTime() + getNum(0, (new Date(end)).getTime() - (new Date(start)).getTime())) / 1000).replaceTime();
}
/*
 * 是否是有效的身份证(中国)
 */
String.prototype.isIDCard = function() {
  var iSum = 0;
  var info = "";
  var sId = this;
  var aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  };
  if(!/^\d{17}(\d|x)$/i.test(sId)) {
    return false;
  }
  sId = sId.replace(/x$/i, "a");
  //非法地区  
  if(aCity[parseInt(sId.substr(0, 2))] == null) {
    return false;
  }
  var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
  var d = new Date(sBirthday.replace(/-/g, "/"))
  //非法生日  
  if(sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
    return false;
  }
  for(var i = 17; i >= 0; i--) {
    iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
  }
  if(iSum % 11 != 1) {
    return false;
  }
  return true;
};
/*
 * 是否是汉字
 */
String.prototype.isChinese = function() {
  var reg = /^[\u0391-\uFFE5]+$/;
  //      [\u4E00-\u9FA5];   
  return reg.test(this);
};
/**
 * 是否是手机号码
 */
String.prototype.isMobile = function() {
  var reg = /^(13|14|15|18|17)[0-9]{9}$/;
  return reg.test(this);
};