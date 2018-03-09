// 获取地址栏参数
$.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/**
 * 获得URL变量
 * 使用方法：$.getUrlVar("param")
 * @Description
 * @Author 小策一喋<xvpindex@qq.com>
 * @Date 2017/5/30 18:02
 */
$.extend({
    getUrlVars: function () {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    }
});

// 获取网址字符串参数值
$.getUrlStrParam = function (urlStr, name) {
    var urlParam = urlStr.substring(urlStr.indexOf("?"));
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = urlParam.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/**
 * 测试函数
 */
test = function (str) {
    alert(str);
}

/**
 * 截取字符串
 * @param dateStr
 * @param start
 * @param end
 * @returns {*}
 */
subString = function (dateStr, start, end) {
    if (dateStr != undefined) {
        return dateStr.substring(start, end);
    } else {
        return '';
    }
}

/**
 * 回调函数，用于点击提交按钮在提交表单之前选中select输入框中的所有项
 */
function selectAllOptions(selector) {
    $(selector + ' option').attr("selected", true);
}

/**
 * 转换传入的回调函数字条串，并执行
 * @param functionStr
 */
function executeCallBackFun(functionStr, options) {
    if (functionStr != undefined) {
        var handlerBeforeArr = functionStr.split("|");
        var handlerBeforeParamsArr = handlerBeforeArr[1].split(",");
        var handlerBeforeParams = "";
        for (var h = 0; h < handlerBeforeParamsArr.length; h++) {
            if (handlerBeforeParamsArr[h].indexOf("options.") > -1)
                handlerBeforeParams += handlerBeforeParamsArr[h] + ',';
            else
                handlerBeforeParams += '"' + handlerBeforeParamsArr[h] + '",';
        }
        eval(handlerBeforeArr[0] + "(" + handlerBeforeParams.substr(0, handlerBeforeParams.length - 1) + ")");
    }
}

/**
 * 判断一个数组是否是多维数组
 * @param arr
 * @returns {boolean}
 */
function isMultiArr(arr) {
    if (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] instanceof Array)
                return true;
            else
                return false;
        }
    } else {
        return false;
    }
}

/**
 * 判断一个对象是否是多维对象
 * @param obj
 * @returns {boolean}
 */
function isMultiObj(obj) {
    if (obj) {
        for (var i = 0; i < obj.length; i++) {
            if (typeof obj[i] == "object")
                return true;
            else
                return false;
        }
    } else {
        return false;
    }
}

/**
 * 附件大小转换
 * @param bytes
 * @returns {*}
 */
function bytesToSize(bytes, precision) {
    if (precision == null) precision = 2;
    if (bytes === 0) return '0 B';
    var k = 1024;
    var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(precision) + ' ' + sizes[i];
    // toPrecision(3) 后面保留一位小数，如1.0GB
    // return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

/**
 * 当前url后面追加来源url中的参数
 * @param url
 * @returns {*}
 */
function appendUrlParam(url, paramValue) {
    return url.indexOf("?") == -1 ? url + "?" + paramValue : url + "&" + paramValue;
}

/**
 * 当前url后面追加来源url中的参数
 * @param url
 * @returns {*}
 */
function appendSourceUrlParam(url) {
    return url.indexOf("?") == -1 ? url + location.search : url + location.search.replace("?", "&");
}

/**
 * 获得当前日期时间
 * @param formatter
 * @returns {*}
 */
function getCurrentDatetime(formatter) {
    var timeStamp = new Date();
    return timestamp2Datetime(timeStamp, formatter);
}

function timestamp2Datetime(timeStamp, formatter) {
    var d = new Date(timeStamp);
    var year = d.getFullYear();
    var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
    var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    var hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    var minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    var second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();

    var result;
    if (formatter == "YmdHis") {
        result = year + "" + month + "" + day + "" + hour + "" + minute + "" + second;
    } else if (formatter == "Y-m-d H:i:s") {
        result = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    } else if (formatter == "Y-m-d") {
        result = year + '-' + month + '-' + day;
    } else {
        result = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    }
    return result;
}

/**
 * 获得地址栏URL
 * @param urlType
 * @returns {string|*}
 */
function getUrl(urlType) {
    var currentUrl = window.location.pathname;
    if (urlType == "controller") {
        url = currentUrl.substring(0, currentUrl.lastIndexOf("/") + 1);
    } else {
        url = currentUrl;
    }
    return url;
}

/**
 * 获得选项json数据
 * @param $element
 * @returns {*}
 */
function getOptionsJson($element) {
    var options = $element.data();

    if (options.options) {
        if (options.options.indexOf("{") == 0) {
            options = $.parseJSON(options.options.replace(/'/g, '"'));
        } else {
            options = strToJson('{' + options.options.replace(/'/g, '"') + '}');
        }
    }
    return options;
}

/**
 * 设置表单元素id属性
 * @param options
 */
function setFormElementId($element, options) {
    if (options.id == undefined) {
        options.id = getTimestamp();
        //options.id = $element[0].name; // 以字段名作为id值
        $element.attr("id", options.id);
    } else {
        $element.attr('id', options.id)
    }
    return options;
}

/**
 * 将形如2015-1-1的日期转换为2015-01-01的格式
 * @param value
 * @returns {string}
 */
function convertDateToFullDate(value) {
    return (value < 10 ? '0' : '') + value;
}

/**
 * 判断是否null
 * @param data
 */
function isNull(data) {
    return (data == "" || data == undefined || data == null) ? true : false;
}

/**
 * 根据指定参数获取grid中选中行值的JSON数据
 * @param gridParam
 * @param row
 * @returns {{}}
 */
function getSelectedRowJson(gridParam, row) {
    var jsonData = {};
    if (gridParam) {
        var gridParamArr = gridParam.split(",");
        //传递给dialog输入框的参数
        for (var i = 0; i < gridParamArr.length; i++) {
            if (gridParamArr[i].indexOf(":") == -1) {
                jsonData[gridParamArr[i]] = row[gridParamArr[i]];
            } else {
                var gridKVArr = gridParamArr[i].split(":");
                jsonData[gridKVArr[0]] = row[gridKVArr[1]];
            }
        }
    }
    return jsonData;
}

/**
 * json字符串转json对象
 * @param str
 * @returns {Object}
 */
function strToJson(str) {
    var json = eval("(" + str + ")");
    return json;
}

/**
 * 获得json元素的个数
 * @param obj
 * @returns {number}
 * @constructor
 */
function jsonLength(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

/**
 * 获取了当前毫秒的时间戳
 * @returns {number}
 */
function getTimestamp() {
    return new Date().getTime();
}

/**
 * 生成指定范围内的随机整数
 * @param minNum
 * @param maxNum
 * @returns {*}
 */
function getRandomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
            break;
        default:
            return 0;
            break;
    }
}

/*Array.prototype.remove = function (dx) {
 if (isNaN(dx) || dx > this.length) {
 return false;
 }
 for (var i = 0, n = 0; i < this.length; i++) {
 if (this[i] != this[dx]) {
 this[n++] = this[i]
 }
 }
 this.length -= 1
 }*/

/**
 * 扩展数组方法：查找指定元素的下标
 * @param val
 * @returns {number}
 */
Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

/**
 * 扩展数组方法:删除指定元素
 * @param val
 */
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    while (index > -1) {
        this.splice(index, 1);
        index = this.indexOf(val);
    }
};