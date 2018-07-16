import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import Index from '@/components/index'
Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [{
            path: "/", //页面初始路由重定向,防止页面初始化时空白现象
            redirect: "/login"
        },
        {
            path: "/login",
            component: login,
        },
        {
            path: '/index',
            component: Index,
            children: [{
                    path: '/',
                    name: '实时直播分析',
                    component: resolve => require(['../components/content/live/l_index.vue'], resolve)
                },
                {
                    path: '/user',
                    name: '全网用户',
                    component: resolve => require(['../components/content/user/u_index.vue'], resolve)
                },
                {
                    path: '/history',
                    name: '历史分析',
                    component: resolve => require(['../components/content/history/h_index.vue'], resolve)
                },
                {
                    path: '/week',
                    name: '周叠峰榜',
                    component: resolve => require(['../components/content/week/w_index.vue'], resolve)
                },
                {
                    path: '/sevenDay',
                    name: '七天曲线',
                    component: resolve => require(['../components/content/sevenDay/s_index.vue'], resolve)
                },
            ]
        },
        {
            path: '/account',
            component: resolve => require(['../components/content/account/a_index.vue'], resolve),
            children: [{
                path: '/',
                name: '帐号设置',
                component: resolve => require(['../components/content/account/accountSet.vue'], resolve)
            }]
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