const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./components/Home.vue'], resolve),
        children: [
            {
                path: '/chart',
                component: (resolve) => require(['./views/index.vue'], resolve),
                children: [{
                    path: '/index2',
                    component: (resolve) => require(['./views/index.vue'], resolve),
                }
                ]
            },
            {
                path: '/list',
                component: (resolve) => require(['./components/todoList/TodoList.vue'], resolve)
            }
        ]
    },
    {
        path: '/index',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./components/Home.vue'], resolve)
    },
    {
        path: '/chart',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }];
export default routers;