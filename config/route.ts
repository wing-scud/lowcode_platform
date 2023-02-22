export default [
    { path: '/', component: '@/pages/Index/index', name: "首页" },
    {
        path: '/create', component: '@/pages/Create/index', name: "搭建页", routes: [{
            path: '/create/preview', component: '@/pages/Create/Preview/index', name: "预览页",
        }]
    },
    { path: '/demo', component: '@/pages/Demo/index', name: "页面示例" },
]