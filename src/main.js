// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import Mint from 'mint-ui'
import "./assets/css/index.css"
import 'mint-ui/lib/style.css'
import "./assets/js/libs/jquery.min"
import "./assets/js/common"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Mint);
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

//面向对象 ajax请求封装
Vue.prototype.newAjax = function(params) {
    var that = this;
    var offset = params.offset || 1;
    // mock
    // var url = "https://www.easy-mock.com/mock/5a0b9be3194c853b8be39a38" + params.url;
    var url = "/example" + params.url; // 方面后期统一添加路径
    //var url ="/tiger-mgr/mgr"+params.url;
    var method = params.method || "GET";
    var data = params.data || {};
    var loadings;
    var contentType;
    var async;
    if (params.async) {
        async = false;
    } else {
        async = true;
    }
    var unLoading = params.unLoading;
    if (method == "PUT" || method == "POST") {
        data = JSON.stringify(data);
        contentType = "application/json;charset=utf-8";
    } else {
        if (method == "DELETE") {
            // method = "POST";
            // data._method='DELETE';
            // contentType = "application/x-www-form-urlencoded"
            var deleteData = "/?";
            for (var key in data) {
                deleteData += key + "=" + data[key] + "&"
            }
            deleteData = deleteData.substring(0, deleteData.length - 1);
            url += deleteData;
            data = {};
        }
    }
    var dataType = params.dataType || "json";
    var success = params.success || function(data) {
        console.log(data);
        if (data.code == 1) {
            that.$message({
                message: data.msg,
                type: 'success'
            })
        }

    };
    var error = params.error || function(data) {
        that.$message.error(data.msg);
    };
    var xhr = $.ajax({
        url: url,
        method: method,
        data: data,
        timeout: 10000,
        dataType: dataType,
        contentType: contentType,
        async: async,
        beforeSend: function() {
            //提交按钮不可用
            if (!unLoading) {
                loadings = that.$loading({
                    lock: true,
                    text: '数据加载中...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.3)'
                });
            }

        },
        success: function(data) {
            if (data.code == "-99") {
                that.$store.commit('updateUserName', null);
                that.$message.error("由于长时间未操作,请重新登录")
                sessionStorage.removeItem("author_id");
                that.$router.push('/login');
                loadings.close();
                return;
            } else {
                success(data);
            }
            if (!unLoading) {
                loadings.close();
            }
        },

        error: function(XMLHttpRequest, status) {
            loadings.close();
            error(data);
        },
        　complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数
            　　　　
            if (status == 'timeout') { //超时,status还有success,error等值的情况
                that.$message.error("请求超时");
                xhr.abort();
                loadings.close();　　　　
            }　　
        }
    })
};
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})