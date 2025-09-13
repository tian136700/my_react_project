// 引入创建浏览器路由的方法
import {createBrowserRouter, Navigate} from 'react-router-dom';
// 引入主页面组件
import Main from '../pages/main';
// 引入首页组件
import Home from '../pages/home';
import Mall from "../pages/mall";
import User from "../pages/user";
import PageOne from '../pages/other/pageOne'
import PageTwo from "../pages/other/pageTwo";

// 定义路由配置数组
const routes = [
    {
        path: '/',                    // 根路径
        element: <Main/>,           // 使用 element 属性指定路由对应的组件（React Router v6 写法）

        children: [
            {//重定向
                path: '/',
                element: <Navigate to={'home'} replace/>,   // 对应的组件
            },
            {
                path: 'home',        // 子路径 home
                element: <Home/>,   // 对应的组件
            },
            {
                path: 'mall',
                element: <Mall/>,   // 对应的组件
            },
            {
                path: 'user',
                element: <User/>,   // 对应的组件
            },
            {
                path: 'other',
                children: [
                    {
                        path: 'pageOne',
                        element: <PageOne/>,   // 对应的组件
                    },
                    {
                        path: 'pageTwo',
                        element: <PageTwo/>,   // 对应的组件
                    },
                ],
            },
        ],
    },
];

// 创建并导出浏览器路由实例
export default createBrowserRouter(routes);
