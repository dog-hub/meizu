"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//原图/放大图 =放大镜/放大div

var amplifter = function () {
    function amplifter(newMyImg, newFrame, newUserImg) {
        _classCallCheck(this, amplifter);

        this.myimg = newMyImg;
        this.frame = newFrame;
        this.userimg = newUserImg;
    }

    _createClass(amplifter, [{
        key: "bind",
        value: function bind() {
            console.log(this.myimg);
            var that = this;
            this.myimg.onmouseover = function (evt) {
                var e = evt | event;
                that.frame.style.display = "block";
                that.userimg.style.display = "block";
            };
            this.myimg.onmouseout = function (evt) {
                var e = evt | event;
                that.frame.style.display = "none";
                that.userimg.style.display = "none";
            };

            this.myimg.onmousemove = function (evt) {
                var e = evt || event;
                console.log(e.clientX);
                console.log(e.clientY);
                var oTop = e.pageY - this.offsetTop - that.frame.offsetHeight;
                var oLeft = e.pageX - this.offsetLeft - that.frame.offsetWidth / 2 - 40;

                if (oTop < 0) {
                    oTop = 0;
                }
                if (oTop + that.frame.offsetHeight > this.offsetHeight) {
                    oTop = this.offsetHeight - that.frame.offsetHeight;
                }
                if (oLeft < 0) {
                    oLeft = 0;
                }
                if (oLeft + that.frame.offsetWidth > this.offsetWidth) {
                    oLeft = this.offsetWidth - that.frame.offsetWidth;
                }

                that.frame.style.top = oTop + "px";
                that.frame.style.left = oLeft + "px";
                that.move(oTop, oLeft);
            };
        }
    }, {
        key: "move",
        value: function move(top, left) {
            console.log(this.myimg.offsetHeight / this.frame.offsetHeight);
            this.userimg.style.backgroundPositionX = -(left * 3) + "px";
            this.userimg.style.backgroundPositionY = -(top * 3) + "px";
        }
    }]);

    return amplifter;
}();