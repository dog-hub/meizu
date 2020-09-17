"use strict";

var oX = document.getElementById("x");
var oLogTitle = document.getElementById("login-title");
//关闭提示登录
oX.onclick = function () {
    console.log(1);
    oLogTitle.style.display = "none";
};

var oAll = document.getElementById("all");
var oAllCheck = document.querySelectorAll("input[type='checkbox']");
var oBotAll = document.getElementById("add-goods");
//全选
function fun1() {
    oAll.onclick = function () {
        if (oAll.checked == true) {
            for (var i = 1; i < oAllCheck.length; i++) {
                console.log(i);
                oAllCheck[i].checked = true;
            }
        } else {
            for (var _i = 1; _i < oAllCheck.length; _i++) {
                console.log(_i);
                oAllCheck[_i].checked = false;
            }
        }
    };
}

function fun2() {
    oBotAll.onclick = function () {
        if (oBotAll.checked == true) {
            for (var i = 0; i < oAllCheck.length - 1; i++) {
                console.log(i);
                oAllCheck[i].checked = true;
            }
        } else {
            for (var _i2 = 0; _i2 < oAllCheck.length - 1; _i2++) {
                console.log(_i2);
                oAllCheck[_i2].checked = false;
            }
        }
    };
}

var oAdd = document.getElementById("+");
var oMin = document.getElementById("-");
var oNum = document.getElementById("n");
var oAddPrice = document.getElementById("add-price");
var oPrice = document.getElementById("price");
var oZj = document.getElementById("yuan");
oAdd.onclick = function () {
    var i = oNum.innerHTML;
    if (i == "1") {
        oNum.innerHTML = "1";
    } else {
        oNum.innerHTML = i - 1;
    }
    oAddPrice.lastChild.innerHTML = oNum.innerHTML * oPrice.lastChild.innerHTML + ".00";
    oZj.innerHTML = oAddPrice.lastChild.innerHTML;
};

oMin.onclick = function () {
    var i = oNum.innerHTML;
    if (i == "3") {
        oNum.innerHTML = "3";
    } else {
        oNum.innerHTML = Number(i) + 1;
    }
    oAddPrice.lastChild.innerHTML = oNum.innerHTML * oPrice.lastChild.innerHTML + ".00";
    oZj.innerHTML = oAddPrice.lastChild.innerHTML;
};

var oRedact = document.getElementById("redact");
var oRemove = document.getElementById("remove");
oRedact.onclick = function () {
    oRemove.style.width = "60px";
    oRemove.style.fontSize = "14px";
    oRemove.style.cursor = "pointer";
    oRemove.innerHTML = "删除";
    oRemove.onclick = function () {
        oRemove.parentElement.parentElement.remove();
        console.log(1);
    };
};