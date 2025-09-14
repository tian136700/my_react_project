// 导入 React 核心库和 useState Hook
// useState 用于在函数组件中管理状态
import React from 'react';
import CommonAside   from "../components/commonAside";
import CommonHeader   from "../components/commonHeader";
// 导入 React Router 的 Outlet 组件
// Outlet 用于渲染子路由的内容
import {Outlet} from 'react-router-dom';

// 导入 Ant Design 图标库
// 这些图标用于菜单项和按钮
import {
    DesktopOutlined,    // 桌面图标
    FileOutlined,       // 文件图标
    PieChartOutlined,   // 饼图图标
    TeamOutlined,       // 团队图标
    UserOutlined,       // 用户图标
    MenuFoldOutlined,   // 菜单折叠图标
    MenuUnfoldOutlined, // 菜单展开图标
} from '@ant-design/icons';

// 导入 Ant Design 组件
import {Breadcrumb, Button, Layout, Menu, theme} from 'antd';

// 从 Layout 组件中解构出子组件
// 这样可以更方便地使用 Header、Content、Footer、Sider 等布局组件
const {Header, Content, Footer, Sider} = Layout;

// 菜单项配置数组
// 定义了侧边栏菜单的所有选项
const items = [
    {
        key: '1',                           // 菜单项的唯一标识
        icon: <PieChartOutlined />,         // 菜单项图标
        label: 'Option 1',                  // 菜单项显示文字
    },
    {
        key: '2',
        icon: <DesktopOutlined />,
        label: 'Option 2',
    },
    {
        key: '3',
        icon: <UserOutlined />,
        label: 'User',
        children: [                         // 子菜单项
            {
                key: '3-1',
                icon: <TeamOutlined />,
                label: 'Tom',
            },
            {
                key: '3-2',
                icon: <TeamOutlined />,
                label: 'Bill',
            },
        ],
    },
    {
        key: '4',
        icon: <FileOutlined />,
        label: 'Files',
    },
];

// Main 组件 - 主页面容器组件
// 这是一个函数组件，使用箭头函数语法
const Main = () => {
    // 使用 useState Hook 管理侧边栏的折叠状态
    // collapsed: 当前状态值（布尔值）
    // setCollapsed: 更新状态的函数
    // const [collapsed, setCollapsed] = useState(false);

    // 使用 Ant Design 的主题系统获取颜色和样式变量
    // colorBgContainer: 容器背景色
    // borderRadiusLG: 大圆角半径
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    // 返回 JSX 结构
    return (
        // 最外层布局容器，设置最小高度为 100vh（视口高度）
        <Layout style={{minHeight: '100vh'}}>
            {/* 侧边栏组件 */}
            <CommonAside />
            
            {/* 右侧主内容区域 */}
            <Layout>
                {/* 顶部头部区域 */}
            <CommonHeader/>
                
                {/* 主内容区域 */}
                <Content style={{margin: '0 16px'}}>
                    {/* 面包屑导航 */}
                    <Breadcrumb 
                        style={{margin: '16px 0'}} 
                        items={[{title: 'User'}, {title: 'Bill'}]}  // 面包屑路径
                    />
                    
                    {/* 内容容器 */}
                    <div
                        style={{
                            padding: 24,                    // 内边距
                            minHeight: 360,                 // 最小高度
                            background: colorBgContainer,    // 背景色
                            borderRadius: borderRadiusLG,    // 圆角
                        }}
                    >
                        {/* 这里是主要内容区域，可以放置页面内容 */}
                        Bill is a cat.
                    </div>
                </Content>
                
                {/* 底部区域 */}
                <Footer style={{textAlign: 'center'}}>
                    {/* 版权信息，动态显示当前年份 */}
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Main; // 导出 Main 组件
