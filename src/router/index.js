import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import Index from '@/components/index'
Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [{
            path: "*", //页面初始路由重定向,防止页面初始化时空白现象
            redirect: "/login"
        },
        {
            path: "/login",
            component: login,
        },
        {
            path: '/index',
            component: Index,
            // children: [{
            //     path: '/',
            //     name: '首页',
            //     component: resolve => require(['../components/index.vue'], resolve)
            // }]
        }
    ]
});
router.beforeEach((to, from, next) => {
    // if (from.path == "/subscribed" && localStorage.getItem("ifSubscribed") == "0") {
    //     return false;
    // }
    // if (from.path == "/success" && localStorage.getItem("ifApplyed") != "0") {
    //     return false;
    // }
    next();
});

export default router;