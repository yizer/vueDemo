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
            let size = baseParams.ww / 430 * 100;
            $("html").css("font-size", size);
        }
    }
};


$(function() {
    baseJs.init();
});