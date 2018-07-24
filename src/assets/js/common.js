var baseParams = {
  ww: $(window).width() //浏览器窗口宽度
};

let baseJs = {
  init: function() {
    let that = this;
    that.resetSize();
  },
  resetSize: function() {
    rem();
    $(window).resize(function() {
      baseParams.ww = $(window).width();
      rem();
    });

    function rem() {
      let size = (baseParams.ww / 430) * 100;
      $("html").css("font-size", size);
    }
  }
  //   stopDrop: function() {
  //     var lastY; //最后一次y坐标点
  //     $(document.body).on("touchstart", function(event) {
  //       lastY = event.originalEvent.changedTouches[0].clientY; //点击屏幕时记录最后一次Y度坐标。
  //     });
  //     $(document.body).on("touchmove", function(event) {
  //       var y = event.originalEvent.changedTouches[0].clientY;
  //       var st = $(this).scrollTop(); //滚动条高度
  //       if (y >= lastY && st <= 10) {
  //         //如果滚动条高度小于0，可以理解为到顶了，且是下拉情况下，阻止touchmove事件。
  //         lastY = y;
  //         event.preventDefault();
  //       }
  //       lastY = y;
  //     });
  //   }
};

$(function() {
  baseJs.init();
  //   baseJs.stopDrop();
});
