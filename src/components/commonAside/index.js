import React from "react";
// 导入 Ant Design 组件
import {Menu, Layout} from 'antd';
import MenuConfig from '../../config';
import * as Icons from '@ant-design/icons';
// 这些图标用于菜单项和按钮
import {
    DesktopOutlined,    // 桌面图标
    FileOutlined,       // 文件图标
    PieChartOutlined,   // 饼图图标
    TeamOutlined,       // 团队图标
    UserOutlined,       // 用户图标
} from '@ant-design/icons';

// 从 Layout 组件中解构出 Sider
const {Sider} = Layout;
//动态获取icon
const iconToElement = (name) => React.createElement(Icons[name])
const MenuItems = MenuConfig.map(item => {
    // 创建基础菜单项
    const menuItem = {
        key: item.path,
        icon: iconToElement(item.icon),
        label: item.label,
    };

    // 如果有子菜单，则添加子菜单
    if (item.children) {
        menuItem.children = item.children.map(v => ({
            key: v.path,
            label: v.label,
        }));
    }

    return menuItem;
});






const CommonAside = () => {
    return (
        <Sider
            collapsible              // 允许折叠
            trigger={null}           // 禁用默认的折叠触发器
        >
            {/* 系统标题区域 */}
            <div
                style={{
                    height: 32,                                    // 高度
                    margin: 16,                                    // 外边距
                    display: 'flex',                               // 弹性布局
                    alignItems: 'center',                          // 垂直居中
                    justifyContent: 'center',                      // 水平居中
                    color: 'white',                                // 文字颜色
                    fontSize: '16px',                              // 字体大小
                    fontWeight: 'bold',                            // 粗体
                    whiteSpace: 'nowrap',                          // 不换行
                    overflow: 'hidden',                            // 隐藏溢出内容
                }}
            >
                {/* 系统标题 */}
                通用后台管理系统
            </div>

            {/* 菜单组件 */}
            <Menu
                theme="dark"                    // 深色主题
                defaultSelectedKeys={['1']}     // 默认选中的菜单项
                mode="inline"                   // 内联模式
                items={MenuItems}                   // 菜单项数据
            />
        </Sider>
    )
}

export default CommonAside;