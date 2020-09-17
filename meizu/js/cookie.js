"use strict";

//增 2,3 key value time
// 删 2 key value = ""
// 改 2有为改，无为增 key value time
// 查 1 key
function _cookie(key, value, time) {

    if (arguments.length == 1) {
        if (_check(key) == false) {
            return "not have " + key;
        }
        return _check(key);
    }

    if (arguments.length == 2) {
        if (value == "") {
            document.cookie = key + "=" + value + ";expires=" + _date(-1);
        } else {
            document.cookie = key + "=" + value;
        }
    }

    if (arguments.length == 3) {
        document.cookie = key + "=" + value + ";expires=" + _date(time);
    }
}

//查找
function _check(key) {
    var cook = document.cookie;
    var arr = cook.split("; ");
    var str = "'";

    for (var i = 0; i < arr.length; i++) {
        str = arr[i].split("=");
        if (str[0] == key) {
            return str[1];
        }
    }
    return false;
}

//时间
function _date(time) {
    var date = new Date();
    date.setDate(date.getDate() + time);
    return date;
}