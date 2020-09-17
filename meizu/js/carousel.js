"use strict";

$(function () {
    $("#banner-content ul").animate({
        left: 0 * -1349
    }, function () {
        $("#banner-bot .bot").css({
            backgroundColor: "#00000000"
        });
        $("#banner-bot .bot").eq(0).css({
            backgroundColor: "#bdbdbd"
        });
    }).delay(5000).animate({
        left: 1 * -1349
    }, function () {
        $("#banner-bot .bot").css({
            backgroundColor: "#00000000"
        });
        $("#banner-bot .bot").eq(1).css({
            backgroundColor: "#bdbdbd"
        });
    }).delay(5000).animate({
        left: 2 * -1349
    }, function () {
        $("#banner-bot .bot").css({
            backgroundColor: "#00000000"
        });
        $("#banner-bot .bot").eq(2).css({
            backgroundColor: "#bdbdbd"
        });
    }).delay(5000).animate({
        left: 3 * -1349
    }, function () {
        $("#banner-bot .bot").css({
            backgroundColor: "#00000000"
        });
        $("#banner-bot .bot").eq(3).css({
            backgroundColor: "#bdbdbd"
        });
    }).delay(5000).animate({
        left: 4 * -1349
    }, function () {
        $("#banner-bot .bot").css({
            backgroundColor: "#00000000"
        });
        $("#banner-bot .bot").eq(4).css({
            backgroundColor: "#bdbdbd"
        });
    }).delay(5000).animate({
        left: 5 * -1349
    }, function () {
        $("#banner-bot .bot").css({
            backgroundColor: "#00000000"
        });
        $("#banner-bot .bot").eq(5).css({
            backgroundColor: "#bdbdbd"
        });
    }).delay(5000).animate({
        left: 6 * -1349
    }, function () {
        $("#banner-bot .bot").css({
            backgroundColor: "#00000000"
        });
        $("#banner-bot .bot").eq(6).css({
            backgroundColor: "#bdbdbd"
        });
    }).delay(5000).animate({
        left: 7 * -1349
    }, function () {
        $("#banner-bot .bot").css({
            backgroundColor: "#00000000"
        });
        $("#banner-bot .bot").eq(7).css({
            backgroundColor: "#bdbdbd"
        });
    }).animate({
        left: 0 * -1349
    }, 0, arguments.callee);
});