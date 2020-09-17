"use strict";

$(function () {
  var arr1 = ["【热卖】魅族 17", "￥3699", "【热卖】魅族 17 Pro", "￥4299", "魅族 17 航母限定版", "￥4299", "魅族 17 Pro 晓芳窑艺...", "￥9999", "魅族 16T", "￥2299", "魅族 16Xs", "￥1499", "魅族 16th", "￥1898", "魅族 X8", "￥1298"];
  $("#nav li").eq(4).prevAll().hover(function () {
    $("#pulldown-content a").css({
      display: "block"
    });
    $("header").css({
      backgroundColor: "#fff"
    });
    $("#nav li").css({
      color: "black"
    });
    $("#pulldown-content").css({
      height: 310,
      backgroundImage: "none"
    });
    $("#header-Pulldown").css({
      display: "block"
    });
    $("#header-Pulldown").stop().animate({
      height: 183
    });
  });

  //悬浮在第九个位置
  $("#nav li").eq(9).hover(function () {
    $("#nav li").css({
      color: "black"
    });
    $("header").css({
      backgroundColor: "#fff"
    });
    $("#header-Pulldown").css({
      display: "block"
    });
    $("#pulldown-content a").css({
      display: "none"
    });

    $("#pulldown-content").css({
      height: 310,
      backgroundImage: "url(./img-main/wxdl.jpg)",
      backgroundSize: "100%",
      backgroundPositionX: "center"
    });
    $("#header-Pulldown").stop().animate({
      height: 320
    });
  });

  // 悬浮在下面出来时
  $("#header-Pulldown").hover(function () {}, function () {
    $("header").css({
      backgroundColor: "#ffffff00"
    });
    $("#nav li").css({
      color: "#fff"
    });
    $("#header-Pulldown").css({
      display: "none"
    });

    $("#header-Pulldown").stop().animate({
      height: 0
    });
  });

  $("#nav li").eq(0).hover(function () {
    for (var i = 0; i < 8; i++) {
      $("#pulldown-content img").eq(i).attr({
        src: "./img-main/h" + i + ".jpg"
      });

      $("#pulldown-content p").eq(i * 2).html(arr1[i * 2]);
      $("#pulldown-content p").eq(i * 2 + 1).html(arr1[i * 2 + 1]);
      console.log($("#pulldown-content p"));
    }
  });

  $("#nav li").eq(1).hover(function () {
    for (var i = 0; i < 8; i++) {
      $("#pulldown-content img").eq(i).attr({
        src: "./img-main/a" + i + ".jpg"
      });

      var arr2 = ["魅族 HD60 降噪耳机", "￥1099", "魅族 HD60 头戴式...", "￥499", "魅族 HIFI 解码耳放", "￥169", "魅族 EP63NC 无线降...", "￥399", "魅族 EP3C 耳机", "￥129", "魅族 POP2 真无...", "￥399", "魅族 EP52 Lite ...", "￥129", "MEIZU UR 高端定制...", "￥200"];
      $("#pulldown-content p").eq(i * 2).html(arr2[i * 2]);
      $("#pulldown-content p").eq(i * 2 + 1).html(arr2[i * 2 + 1]);
    }
  });

  $("#nav li").eq(2).hover(function () {
    for (var i = 0; i < 8; i++) {
      $("#pulldown-content img").eq(i).attr({
        src: "./img-main/b" + i + ".jpg"
      });
      var arr3 = [" 魅族超充 USB-C 移动..", " ￥169", " 魅族超充 GaN 三口...", " ￥199", " 魅族无线超充板", " ￥169", " Pandaer 「17」夏日 ...", " ￥69", " Pandaer 「17」系列 ...", " ￥49", " 魅族 17 系列 液态...", " ￥89", " 魅族 Type-C 数据线", " ￥49", " 魅族双 USB-C 快充线", " ￥49"];
      $("#pulldown-content p").eq(i * 2).html(arr3[i * 2]);
      $("#pulldown-content p").eq(i * 2 + 1).html(arr3[i * 2 + 1]);
    }
  });

  $("#nav li").eq(3).hover(function () {
    for (var i = 0; i < 8; i++) {
      $("#pulldown-content img").eq(i).attr({
        src: "./img-main/c" + i + ".jpg"
      });
      var arr4 = [" Lifeme 双肩包", " ￥299", " Pandaer 「17」系列...", " ￥269", " Pandaer 「17」系列 ...", " ￥99", " 【新品】Lifeme 相机包", " ￥129", " 魅族防飞溅声波电...", " ￥299", " 魅族极简都市...", " ￥179", " Pandaer readnap...", " ￥199", " Flyme 8 暗夜流光...", " ￥269"];

      $("#pulldown-content p").eq(i * 2).html(arr4[i * 2]);
      $("#pulldown-content p").eq(i * 2 + 1).html(arr4[i * 2 + 1]);
    }
  });
});